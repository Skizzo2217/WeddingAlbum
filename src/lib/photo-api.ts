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
  turnstileToken?: string;
  uploadSession?: string;
}

export interface UploadPhotoResponse extends Photo {
  upload_session?: string;
}

function apiUrl(path: string): string {
  const baseUrl = import.meta.env.VITE_API_BASE_URL?.replace(/\/$/, '') || '';
  return `${baseUrl}${path}`;
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

    const context = canvas.getContext('2d');
    if (!context) throw new Error('Impossibile comprimere la foto');
    context.drawImage(image, 0, 0, width, height);

    const blob = await new Promise<Blob>((resolve, reject) => {
      canvas.toBlob((result) => result ? resolve(result) : reject(new Error('Compressione foto non riuscita')), 'image/jpeg', quality);
    });
    const originalName = file instanceof File ? file.name : 'foto.jpg';
    return new File([blob], originalName.replace(/\.[^.]+$/, '.jpg'), { type: 'image/jpeg', lastModified: Date.now() });
  } finally {
    URL.revokeObjectURL(sourceUrl);
  }
}

async function responseJson<T>(response: Response): Promise<T> {
  const payload = await response.json().catch(() => ({})) as { error?: string } & T;
  if (!response.ok) throw new Error(payload.error || 'Operazione non riuscita');
  return payload;
}

export async function uploadWeddingPhoto(input: UploadPhotoInput): Promise<UploadPhotoResponse> {
  const [photo, thumbnail] = await Promise.all([
    compressImage(input.file, { maxWidth: 1600, quality: 0.82 }),
    compressImage(input.file, { maxWidth: 480, quality: 0.68 }),
  ]);
  const formData = new FormData();
  formData.append('file', photo);
  formData.append('thumbnail', thumbnail);
  formData.append('uploader_name', input.uploaderName?.trim() || '');
  formData.append('is_photobooth', String(Boolean(input.isPhotobooth)));
  if (input.missionId) formData.append('mission_id', String(input.missionId));
  if (input.turnstileToken) formData.append('turnstile_token', input.turnstileToken);

  const headers = input.uploadSession ? { 'x-upload-session': input.uploadSession } : undefined;
  return responseJson<UploadPhotoResponse>(await fetch(apiUrl('/api/photos'), { method: 'POST', body: formData, headers }));
}

export async function listWeddingPhotos(): Promise<Photo[]> {
  const response = await responseJson<{ photos: Photo[] }>(await fetch(apiUrl('/api/photos')));
  return response.photos;
}
