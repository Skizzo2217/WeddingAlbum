import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ChevronLeft, ChevronRight, Download, RefreshCw, Archive } from 'lucide-react';
import BottomNav from '@/components/wedding/BottomNav';
import { GoldCornerFrame, RoseWhite } from '@/components/wedding/WeddingDecorations';
import { listWeddingPhotos, type Photo } from '@/lib/supabase';

// ─── Masonry column layout ───────────────────────────────────────────────────
function MasonryGrid({ photos, onPhotoClick }: { photos: Photo[]; onPhotoClick: (i: number) => void }) {
  // Split into 2 columns alternating
  const col1 = photos.filter((_, i) => i % 2 === 0);
  const col2 = photos.filter((_, i) => i % 2 === 1);

  const PhotoCard = ({ photo, index }: { photo: Photo; index: number }) => (
    <motion.div
      className="relative cursor-pointer group rounded-2xl overflow-hidden"
      style={{ border: '1.5px solid #DFC98A', boxShadow: '0 2px 10px rgba(201,168,76,0.12)', marginBottom: 10 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06, duration: 0.4, ease: 'easeOut' as const }}
      onClick={() => onPhotoClick(photos.indexOf(photo))}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      <img
        src={photo.thumbnail_url}
        alt={`Foto di ${photo.uploader_name || 'ospite'}`}
        className="w-full object-cover"
        loading="lazy"
        style={{ display: 'block' }}
      />
      {/* Hover overlay */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-end"
        style={{ background: 'linear-gradient(to top, rgba(61,43,31,0.65), transparent)' }}>
        <div className="p-2 w-full flex items-center justify-between">
          <p className="text-white text-xs font-medium truncate">
            {photo.uploader_name || 'Ospite'}
          </p>
          {photo.is_photobooth && (
            <span className="text-[10px] px-1.5 py-0.5 rounded-full text-white"
              style={{ background: 'rgba(201,168,76,0.8)' }}>📸</span>
          )}
        </div>
      </div>
    </motion.div>
  );

  return (
    <div className="flex gap-2.5">
      <div className="flex-1">
        {col1.map((photo, i) => <PhotoCard key={photo.id} photo={photo} index={i * 2} />)}
      </div>
      <div className="flex-1 mt-5">
        {col2.map((photo, i) => <PhotoCard key={photo.id} photo={photo} index={i * 2 + 1} />)}
      </div>
    </div>
  );
}

// ─── Lightbox ────────────────────────────────────────────────────────────────
function Lightbox({ photos, index, onClose, onPrev, onNext }: {
  photos: Photo[];
  index: number;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}) {
  const photo = photos[index];

  const downloadSingle = () => {
    const a = document.createElement('a');
    a.href = photo.url;
    a.download = `marco-vanessa-foto-${index + 1}.jpg`;
    a.target = '_blank';
    a.click();
  };

  // Swipe support
  const touchStartX = useRef(0);
  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchEnd = (e: React.TouchEvent) => {
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) onNext();
      else onPrev();
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center"
      style={{ background: 'rgba(0,0,0,0.94)' }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Close */}
      <button className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full flex items-center justify-center"
        style={{ background: 'rgba(255,255,255,0.15)' }} onClick={onClose}>
        <X size={20} color="white" />
      </button>

      {/* Counter */}
      <div className="absolute top-4 left-4 z-10 px-3 py-1 rounded-full text-xs text-white"
        style={{ background: 'rgba(255,255,255,0.15)' }}>
        {index + 1} / {photos.length}
      </div>

      {/* Prev */}
      {index > 0 && (
        <button className="absolute left-3 z-10 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.15)' }}
          onClick={e => { e.stopPropagation(); onPrev(); }}>
          <ChevronLeft size={24} color="white" />
        </button>
      )}

      {/* Next */}
      {index < photos.length - 1 && (
        <button className="absolute right-3 z-10 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.15)' }}
          onClick={e => { e.stopPropagation(); onNext(); }}>
          <ChevronRight size={24} color="white" />
        </button>
      )}

      {/* Image */}
      <motion.div className="max-w-full max-h-full px-14 flex flex-col items-center gap-3"
        key={index}
        initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }}
        onClick={e => e.stopPropagation()}>
        <img src={photo.url} alt="Foto a schermo intero"
          className="max-w-full max-h-[78vh] object-contain rounded-2xl"
          style={{ border: '2px solid rgba(201,168,76,0.35)' }} />
        <div className="flex items-center justify-between w-full px-1">
          <div>
            <p className="text-white/80 text-sm font-medium">{photo.uploader_name || 'Ospite'}</p>
            {photo.is_photobooth && <p className="text-white/50 text-xs">Photobooth 📸</p>}
          </div>
          <motion.button onClick={downloadSingle}
            className="flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium"
            style={{ background: 'rgba(201,168,76,0.25)', color: '#E8D5A3', border: '1px solid rgba(201,168,76,0.4)' }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            <Download size={14} /> Scarica
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ─── Main Gallery Page ────────────────────────────────────────────────────────
export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [loading, setLoading] = useState(true);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [refreshing, setRefreshing] = useState(false);
  const [downloading, setDownloading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadPhotos = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const remotePhotos = await listWeddingPhotos();
      setPhotos(remotePhotos);
    } catch (err) {
      setPhotos([]);
      setError(err instanceof Error ? err.message : 'Impossibile caricare la galleria');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => { loadPhotos(); }, [loadPhotos]);

  const refresh = async () => {
    setRefreshing(true);
    await loadPhotos();
    setRefreshing(false);
  };

  const downloadAll = async () => {
    if (downloading) return;
    setDownloading(true);
    try {
      // Dynamic import to keep bundle small
      const JSZip = (await import('jszip')).default;
      const zip = new JSZip();
      const folder = zip.folder('marco-vanessa-matrimonio');

      await Promise.all(
        photos.map(async (photo, i) => {
          try {
            const res = await fetch(photo.url);
            const blob = await res.blob();
            folder?.file(`foto-${String(i + 1).padStart(3, '0')}.jpg`, blob);
          } catch { /* skip failed */ }
        })
      );

      const content = await zip.generateAsync({ type: 'blob' });
      const url = URL.createObjectURL(content);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'marco-vanessa-matrimonio.zip';
      a.click();
      URL.revokeObjectURL(url);
    } catch {
      alert('Errore nel download. Riprova.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen pb-28 overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #F5EFE4 100%)' }}>

      {/* Header */}
      <div className="relative pt-10 pb-5 px-6 text-center">
        <GoldCornerFrame />
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-xs tracking-[0.2em] mb-1" style={{ color: '#C9A84C', fontFamily: 'Lato, sans-serif' }}>MARCO & VANESSA</p>
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
            Il Nostro Album
          </h1>
          <p className="text-sm mt-1" style={{ color: '#7A6652' }}>
            {loading ? 'Caricamento...' : `${photos.length} ricordi condivisi`}
          </p>
        </motion.div>
        <div className="h-px mt-4 mx-6" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
      </div>

      {/* Refresh */}
      <div className="flex justify-end px-4 mb-3">
        <button onClick={refresh}
          className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all"
          style={{ border: '1px solid #DFC98A', color: '#7A6652', background: 'white' }}>
          <RefreshCw size={11} className={refreshing ? 'animate-spin' : ''} />
          Aggiorna
        </button>
      </div>

      {/* Grid */}
      <div className="px-3 max-w-2xl mx-auto">
        {loading ? (
          <div className="flex gap-2.5">
            {[0, 1].map(col => (
              <div key={col} className={`flex-1 ${col === 1 ? 'mt-5' : ''} space-y-2.5`}>
                {[0, 1, 2].map(i => (
                  <div key={i} className="rounded-2xl animate-pulse"
                    style={{ background: '#F0EBE1', height: i % 2 === 0 ? 180 : 140 }} />
                ))}
              </div>
            ))}
          </div>
        ) : error ? (
          <motion.div className="text-center py-20 px-4" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-center mb-4 opacity-40">
              <RoseWhite size={64} />
            </div>
            <p className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
              Galleria non disponibile
            </p>
            <p className="text-sm" style={{ color: '#7A6652' }}>
              {error}
            </p>
          </motion.div>
        ) : photos.length === 0 ? (
          <motion.div className="text-center py-20" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
            <div className="flex justify-center mb-4 opacity-40">
              <RoseWhite size={64} />
            </div>
            <p className="text-xl font-bold mb-2" style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
              L'album è ancora vuoto
            </p>
            <p className="text-sm" style={{ color: '#7A6652' }}>
              Sii il primo a condividere un ricordo!
            </p>
          </motion.div>
        ) : (
          <MasonryGrid photos={photos} onPhotoClick={setLightboxIndex} />
        )}
      </div>

      {/* Download all FAB */}
      {photos.length > 0 && !loading && (
        <div className="fixed bottom-20 left-0 right-0 flex justify-center px-4 pointer-events-none z-40">
          <motion.button
            onClick={downloadAll}
            disabled={downloading}
            className="pointer-events-auto flex items-center gap-2 px-6 py-3.5 rounded-full text-white text-sm font-semibold shadow-xl disabled:opacity-60"
            style={{ background: 'linear-gradient(135deg, #9a7e2e, #C9A84C)', boxShadow: '0 6px 24px rgba(201,168,76,0.45)', fontFamily: 'Lato, sans-serif' }}
            initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.8 }}
            whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
            {downloading ? (
              <><div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" /> Preparazione ZIP...</>
            ) : (
              <><Archive size={16} /> Scarica Tutte ({photos.length})</>
            )}
          </motion.button>
        </div>
      )}

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <Lightbox
            photos={photos}
            index={lightboxIndex}
            onClose={() => setLightboxIndex(null)}
            onPrev={() => setLightboxIndex(i => Math.max(0, (i ?? 0) - 1))}
            onNext={() => setLightboxIndex(i => Math.min(photos.length - 1, (i ?? 0) + 1))}
          />
        )}
      </AnimatePresence>

      <BottomNav />
    </div>
  );
}
