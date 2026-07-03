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
  path: string;
}

export interface UploadPhotoInput {
  file: File | Blob;
  uploaderName?: string;
  isPhotobooth?: boolean;
  originalName?: string;
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
  return {
    id: path,
    path,
    url: publicUrl,
    thumbnail_url: publicUrl,
    uploader_name: uploaderName,
    created_at: new Date().toISOString(),
    is_photobooth: Boolean(input.isPhotobooth),
  };
}

export async function listWeddingPhotos(): Promise<Photo[]> {
  const { data, error } = await supabase.storage
    .from(PHOTO_BUCKET)
    .list('', {
      limit: 1000,
      sortBy: { column: 'created_at', order: 'desc' },
    });

  if (error) throw error;

  const folders = (data ?? []).filter((item) => item.id === null);
  const photosByFolder = await Promise.all(
    folders.map(async (folder) => {
      const { data: nested, error: nestedError } = await supabase.storage
        .from(PHOTO_BUCKET)
        .list(folder.name, {
          limit: 1000,
          sortBy: { column: 'created_at', order: 'desc' },
        });

      if (nestedError) throw nestedError;
      return (nested ?? []).map((item) => ({ ...item, name: `${folder.name}/${item.name}` }));
    }),
  );

  return photosByFolder
    .flat()
    .filter((item) => item.name.toLowerCase().match(/\.(jpe?g|png|webp|heic|heif)$/))
    .map((item) => {
      const metadata = item.metadata as Record<string, string | undefined> | null;
      const url = publicPhotoUrl(item.name);
      return {
        id: item.id ?? item.name,
        path: item.name,
        url,
        thumbnail_url: url,
        uploader_name: metadata?.uploader_name || undefined,
        created_at: item.created_at ?? new Date().toISOString(),
        is_photobooth: metadata?.is_photobooth === 'true',
      };
    })
    .sort((a, b) => Date.parse(b.created_at) - Date.parse(a.created_at));
}

function publicPhotoUrl(path: string): string {
  return supabase.storage.from(PHOTO_BUCKET).getPublicUrl(path).data.publicUrl;
}
