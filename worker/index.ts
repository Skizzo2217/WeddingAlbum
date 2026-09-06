interface Env {
  PHOTOS: R2Bucket;
  UPLOADS_ENABLED?: string;
  TURNSTILE_SECRET?: string;
  SESSION_SECRET?: string;
}

const MAX_UPLOAD_BYTES = 8 * 1024 * 1024;
const MAX_GALLERY_ITEMS = 1_000;
const PHOTO_PREFIX = 'photos/';
const THUMBNAIL_PREFIX = 'thumbnails/';

function json(data: unknown, status = 200, headers: HeadersInit = {}): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'content-type': 'application/json; charset=utf-8', ...headers },
  });
}

function badRequest(message: string): Response {
  return json({ error: message }, 400);
}

function photoIdFromKey(key: string): string {
  return key.slice(PHOTO_PREFIX.length).replace(/\.jpg$/, '');
}

function photoRecord(origin: string, object: R2Object) {
  const metadata = object.customMetadata ?? {};
  const id = photoIdFromKey(object.key);
  const missionId = Number(metadata.mission_id);

  return {
    id,
    url: `${origin}/media/${encodeURIComponent(id)}`,
    thumbnail_url: `${origin}/media/${encodeURIComponent(id)}?size=thumbnail`,
    uploader_name: metadata.uploader_name || undefined,
    created_at: object.uploaded.toISOString(),
    is_photobooth: metadata.is_photobooth === 'true',
    mission_id: Number.isInteger(missionId) && missionId > 0 ? missionId : undefined,
    path: object.key,
  };
}

function cacheHeaders(contentType: string): Headers {
  return new Headers({
    'content-type': contentType,
    'cache-control': 'public, max-age=31536000, immutable',
    'x-content-type-options': 'nosniff',
  });
}

function toBase64Url(value: ArrayBuffer): string {
  const bytes = new Uint8Array(value);
  let binary = '';
  bytes.forEach((byte) => { binary += String.fromCharCode(byte); });
  return btoa(binary).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

async function createUploadSession(secret: string): Promise<string> {
  const expiresAt = Math.floor(Date.now() / 1_000) + 15 * 60;
  const payload = String(expiresAt);
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['sign']);
  const signature = await crypto.subtle.sign('HMAC', key, new TextEncoder().encode(payload));
  return `${payload}.${toBase64Url(signature)}`;
}

async function isValidUploadSession(session: string | null, secret: string): Promise<boolean> {
  if (!session) return false;
  const [expiresAt, signature] = session.split('.');
  if (!expiresAt || !signature || Number(expiresAt) * 1_000 < Date.now()) return false;
  const key = await crypto.subtle.importKey('raw', new TextEncoder().encode(secret), { name: 'HMAC', hash: 'SHA-256' }, false, ['verify']);
  const base64Signature = signature.replace(/-/g, '+').replace(/_/g, '/');
  const paddedSignature = base64Signature.padEnd(Math.ceil(base64Signature.length / 4) * 4, '=');
  const binary = atob(paddedSignature);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return crypto.subtle.verify('HMAC', key, bytes, new TextEncoder().encode(expiresAt));
}

async function verifyTurnstile(request: Request, token: string, secret: string): Promise<boolean> {
  const body = new URLSearchParams({ secret, response: token });
  const clientIp = request.headers.get('CF-Connecting-IP');
  if (clientIp) body.set('remoteip', clientIp);
  const response = await fetch('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
    method: 'POST',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    body,
  });
  const result = await response.json() as { success?: boolean };
  return result.success === true;
}

async function listPhotos(request: Request, env: Env): Promise<Response> {
  const origin = new URL(request.url).origin;
  const photos: ReturnType<typeof photoRecord>[] = [];
  let cursor: string | undefined;

  do {
    const result = await env.PHOTOS.list({
      prefix: PHOTO_PREFIX,
      cursor,
      limit: 1_000,
      include: ['customMetadata'],
    });
    photos.push(...result.objects.map((object) => photoRecord(origin, object)));
    cursor = result.truncated ? result.cursor : undefined;
  } while (cursor && photos.length < MAX_GALLERY_ITEMS);

  return json({ photos });
}

async function uploadPhoto(request: Request, env: Env): Promise<Response> {
  if (env.UPLOADS_ENABLED !== 'true') {
    return json({ error: 'I caricamenti saranno disponibili a breve.' }, 503);
  }
  if (!env.TURNSTILE_SECRET || !env.SESSION_SECRET) {
    return json({ error: 'La protezione degli upload non è ancora configurata.' }, 503);
  }
  const formData = await request.formData();
  let uploadSession = request.headers.get('x-upload-session');
  const validSession = await isValidUploadSession(uploadSession, env.SESSION_SECRET);
  if (!validSession) {
    const turnstileToken = String(formData.get('turnstile_token') ?? '');
    if (!turnstileToken || !await verifyTurnstile(request, turnstileToken, env.TURNSTILE_SECRET)) {
      return json({ error: 'Completa il controllo di sicurezza e riprova.' }, 403);
    }
    uploadSession = await createUploadSession(env.SESSION_SECRET);
  }
  const file = formData.get('file');
  const thumbnail = formData.get('thumbnail');

  if (!(file instanceof File) || !(thumbnail instanceof File)) {
    return badRequest('Invia una foto e la sua miniatura.');
  }
  if (file.size === 0 || file.size > MAX_UPLOAD_BYTES || thumbnail.size === 0 || thumbnail.size > MAX_UPLOAD_BYTES) {
    return badRequest('La foto selezionata è troppo grande. Riprova con un’altra foto.');
  }
  if (file.type !== 'image/jpeg' || thumbnail.type !== 'image/jpeg') {
    return badRequest('Sono consentite solo immagini JPEG elaborate dall’app.');
  }

  const uploaderName = String(formData.get('uploader_name') ?? '').trim().slice(0, 80);
  const rawMissionId = String(formData.get('mission_id') ?? '').trim();
  const missionId = rawMissionId ? Number(rawMissionId) : undefined;
  if (missionId !== undefined && (!Number.isInteger(missionId) || missionId < 1 || missionId > 37)) {
    return badRequest('Il numero della missione non è valido.');
  }

  // Reverse timestamp means R2's lexicographic listing returns newer photos first.
  const id = `${String(9_999_999_999_999 - Date.now()).padStart(13, '0')}-${crypto.randomUUID()}`;
  const metadata: Record<string, string> = {
    uploader_name: uploaderName,
    is_photobooth: String(formData.get('is_photobooth') === 'true'),
  };
  if (missionId) metadata.mission_id = String(missionId);

  await Promise.all([
    env.PHOTOS.put(`${PHOTO_PREFIX}${id}.jpg`, file.stream(), {
      httpMetadata: { contentType: 'image/jpeg', cacheControl: 'public, max-age=31536000, immutable' },
      customMetadata: metadata,
    }),
    env.PHOTOS.put(`${THUMBNAIL_PREFIX}${id}.jpg`, thumbnail.stream(), {
      httpMetadata: { contentType: 'image/jpeg', cacheControl: 'public, max-age=31536000, immutable' },
    }),
  ]);

  const origin = new URL(request.url).origin;
  return json({
    id,
    url: `${origin}/media/${encodeURIComponent(id)}`,
    thumbnail_url: `${origin}/media/${encodeURIComponent(id)}?size=thumbnail`,
    uploader_name: uploaderName || undefined,
    created_at: new Date().toISOString(),
    is_photobooth: metadata.is_photobooth === 'true',
    mission_id: missionId,
    path: `${PHOTO_PREFIX}${id}.jpg`,
    upload_session: uploadSession,
  }, 201);
}

async function serveMedia(request: Request, env: Env, id: string): Promise<Response> {
  if (!/^[0-9a-f-]+$/i.test(id)) return new Response('Not found', { status: 404 });
  const size = new URL(request.url).searchParams.get('size');
  const key = `${size === 'thumbnail' ? THUMBNAIL_PREFIX : PHOTO_PREFIX}${id}.jpg`;
  const object = await env.PHOTOS.get(key);
  if (!object) return new Response('Not found', { status: 404 });

  return new Response(request.method === 'HEAD' ? null : object.body, {
    headers: cacheHeaders(object.httpMetadata?.contentType || 'image/jpeg'),
  });
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const url = new URL(request.url);

    if (url.pathname === '/api/photos' && request.method === 'GET') return listPhotos(request, env);
    if (url.pathname === '/api/photos' && request.method === 'POST') return uploadPhoto(request, env);

    const mediaMatch = url.pathname.match(/^\/media\/([^/]+)$/);
    if (mediaMatch && (request.method === 'GET' || request.method === 'HEAD')) {
      return serveMedia(request, env, mediaMatch[1]);
    }

    return new Response('Not found', { status: 404 });
  },
} satisfies ExportedHandler<Env>;
