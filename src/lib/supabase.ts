import { createClient } from '@supabase/supabase-js';

const SUPABASE_URL = 'https://wdongpblggyyqgjeynbx.supabase.co';
const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_huBVnOr4TziP7QVS6_3z4Q_kqOO6ASK';
const PHOTO_BUCKET = 'photos';

export interface Photo {
  id: string;
  url: string;
  thumbnail_url: string;
  uploader_name?: string;
  created_at: string;
  is_photobooth: boolean;
  mission_id?: number;
  path: string;
}

export interface UploadPhotoInput {
  file: File | Blob;
  uploaderName?: string;
  isPhotobooth?: boolean;
  originalName?: string;
  missionId?: number;
}

interface PhotoRow {
  id: number | string;
  image_url: string;
  uploader_name?: string | null;
  created_at?: string | null;
  approved?: boolean | null;
  mission_id?: number | null;
}

export const supabase = createClient(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});

export const isSupabaseConfigured = true;

function slugify(value: string): string {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .toLowerCase()
    .slice(0, 48);
}

function uniquePhotoPath(originalName?: string): string {
  const now = new Date();
  const datePrefix = now.toISOString().slice(0, 10);
  const baseName = originalName ? slugify(originalName.replace(/\.[^.]+$/, '')) : 'foto';
  const random = crypto.randomUUID();
  return `Upload/${datePrefix}-${Date.now()}-${random}-${baseName || 'foto'}.jpg`;
}

export async function compressImage(
  file: File | Blob,
  options: { maxWidth?: number; quality?: number } = {},
): Promise<File> {
  const { maxWidth = 1600, quality = 0.82 } = options;
  const sourceUrl = URL.createObjectURL(file);

  try {
    const image = new Image();
    image.decoding = 'async';
    image.src = sourceUrl;
    await image.decode();

    const ratio = image.width > maxWidth ? maxWidth / image.width : 1;
    const width = Math.round(image.width * ratio);
    const height = Math.round(image.height * ratio);

    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;

    const ctx = canvas.getContext('2d');
    if (!ctx) throw new Error('Impossibile comprimere la foto');

    ctx.drawImage(image, 0, 0, width, height);

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob(
        (result) => {
          if (result) resolve(result);
          else reject(new Error('Compressione foto non riuscita'));
        },
        'image/jpeg',
        quality,
      );
    });

    const originalName = file instanceof File ? file.name : 'photobooth.jpg';
    return new File([blob], originalName.replace(/\.[^.]+$/, '.jpg'), {
      type: 'image/jpeg',
      lastModified: Date.now(),
    });
  } finally {
    URL.revokeObjectURL(sourceUrl);
  }
}

export async function uploadWeddingPhoto(input: UploadPhotoInput): Promise<Photo> {
  const compressed = await compressImage(input.file);
  const path = uniquePhotoPath(input.originalName ?? (compressed instanceof File ? compressed.name : undefined));
  const uploaderName = input.uploaderName?.trim() || undefined;

  const { error } = await supabase.storage
    .from(PHOTO_BUCKET)
    .upload(path, compressed, {
      contentType: 'image/jpeg',
      cacheControl: '31536000',
      upsert: false,
      metadata: {
        uploader_name: uploaderName ?? '',
        is_photobooth: input.isPhotobooth ? 'true' : 'false',
        original_name: input.originalName ?? '',
        compressed_size: String(compressed.size),
      },
    });

  if (error) throw error;

  const publicUrl = publicPhotoUrl(path);
  const photoRow = {
    image_url: publicUrl,
    uploader_name: uploaderName ?? '',
    approved: true,
    ...(input.missionId ? { mission_id: input.missionId } : {}),
  };
  const { error: insertError } = await supabase.from('photos').insert([photoRow]);

  if (insertError) throw insertError;

  return {
    id: path,
    path,
    url: publicUrl,
    thumbnail_url: publicUrl,
    uploader_name: uploaderName,
    created_at: new Date().toISOString(),
    is_photobooth: Boolean(input.isPhotobooth),
    mission_id: input.missionId,
  };
}

export async function listWeddingPhotos(): Promise<Photo[]> {
  const primaryResult = await supabase
    .from('photos')
    .select('id,image_url,uploader_name,created_at,approved,mission_id')
    .order('created_at', { ascending: false });
  let data = primaryResult.data as PhotoRow[] | null;
  let error = primaryResult.error;

  // Allows the existing gallery to keep working until the one-time SQL
  // migration that adds mission_id has been executed.
  if (error && error.message.includes('mission_id')) {
    const fallbackResult = await supabase
      .from('photos')
      .select('id,image_url,uploader_name,created_at,approved')
      .order('created_at', { ascending: false });
    data = fallbackResult.data as PhotoRow[] | null;
    error = fallbackResult.error;
  }

  if (error) throw error;

  return ((data ?? []) as PhotoRow[])
    .filter((row) => row.approved !== false && Boolean(row.image_url))
    .map((row) => {
      return {
        id: String(row.id),
        path: row.image_url,
        url: row.image_url,
        thumbnail_url: row.image_url,
        uploader_name: row.uploader_name || undefined,
        created_at: row.created_at ?? new Date().toISOString(),
        is_photobooth: false,
        mission_id: row.mission_id ?? undefined,
      };
    });
}

function publicPhotoUrl(path: string): string {
  return supabase.storage.from(PHOTO_BUCKET).getPublicUrl(path).data.publicUrl;
}
