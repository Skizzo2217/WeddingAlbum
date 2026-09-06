import { useState, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ImagePlus, X, CheckCircle, Upload, Sparkles } from 'lucide-react';
import BottomNav from '@/components/wedding/BottomNav';
import { GoldCornerFrame, RoseWhite, GoldDivider } from '@/components/wedding/WeddingDecorations';
import { uploadWeddingPhoto } from '@/lib/photo-api';
import Turnstile from '@/components/Turnstile';

interface PreviewFile {
  id: string;
  file: File;
  preview: string;
  progress: number;
  status: 'pending' | 'uploading' | 'done' | 'error';
  error?: string;
}

export default function UploadPage() {
  const [files, setFiles] = useState<PreviewFile[]>([]);
  const [uploaderName, setUploaderName] = useState('');
  const [dragOver, setDragOver] = useState(false);
  const [allDone, setAllDone] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const [uploadSession, setUploadSession] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const addFiles = useCallback((newFiles: FileList | File[]) => {
    const arr = Array.from(newFiles)
      .filter(f => f.type.startsWith('image/'))
      .slice(0, Math.max(0, 10 - files.length));
    if (arr.length === 0) return;
    const previews: PreviewFile[] = arr.map(f => ({
      id: Math.random().toString(36).slice(2),
      file: f,
      preview: URL.createObjectURL(f),
      progress: 0,
      status: 'pending',
    }));
    setFiles(prev => [...prev, ...previews]);
    setAllDone(false);
  }, [files.length]);

  const removeFile = (id: string) => {
    setFiles(prev => {
      const f = prev.find(p => p.id === id);
      if (f) URL.revokeObjectURL(f.preview);
      return prev.filter(p => p.id !== id);
    });
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setDragOver(false);
    addFiles(e.dataTransfer.files);
  };

  const uploadAll = async () => {
    const pending = files.filter(f => f.status === 'pending');
    if (pending.length === 0) return;
    setIsUploading(true);
    let activeSession = uploadSession || undefined;
    let activeToken = turnstileToken || undefined;

    for (const file of pending) {
      setFiles(prev => prev.map(f =>
        f.id === file.id ? { ...f, status: 'uploading', progress: 5 } : f
      ));

      try {
        for (let p = 15; p <= 70; p += 15) {
          await new Promise(r => setTimeout(r, 80));
          setFiles(prev => prev.map(f =>
            f.id === file.id ? { ...f, progress: p } : f
          ));
        }

        const response = await uploadWeddingPhoto({
          file: file.file,
          uploaderName,
          originalName: file.file.name,
          turnstileToken: activeToken,
          uploadSession: activeSession,
        });
        activeSession = response.upload_session || activeSession;
        activeToken = undefined;
        setUploadSession(activeSession || null);

        setFiles(prev => prev.map(f =>
          f.id === file.id ? { ...f, status: 'done', progress: 100 } : f
        ));
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Upload non riuscito';
        setFiles(prev => prev.map(f =>
          f.id === file.id ? { ...f, status: 'error', error: message } : f
        ));
      }
    }

    setIsUploading(false);
    setAllDone(true);
  };

  const reset = () => {
    files.forEach(f => URL.revokeObjectURL(f.preview));
    setFiles([]);
    setAllDone(false);
    setUploaderName('');
    setTurnstileToken(null);
    setUploadSession(null);
  };

  const pendingCount = files.filter(f => f.status === 'pending').length;
  const doneCount = files.filter(f => f.status === 'done').length;
  const errorFiles = files.filter(f => f.status === 'error');
  const totalCount = files.length;

  return (
    <div className="min-h-screen pb-28 overflow-x-hidden"
      style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #F5EFE4 100%)' }}>

      {/* Header */}
      <div className="relative pt-10 pb-5 px-6 text-center">
        <GoldCornerFrame />
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-xs tracking-[0.2em] mb-1" style={{ color: '#C9A84C', fontFamily: 'Lato, sans-serif' }}>
            MARCO & VANESSA
          </p>
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
            Aggiungi i tuoi Ricordi
          </h1>
          <p className="text-sm mt-1" style={{ color: '#7A6652' }}>
            Condividi le tue foto con gli sposi
          </p>
        </motion.div>
        <div className="h-px mt-4 mx-6"
          style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
      </div>

      <div className="px-4 max-w-md mx-auto space-y-5">

        {/* Name input */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }}>
          <label className="block text-xs font-medium mb-2 tracking-[0.12em]"
            style={{ color: '#7A6652', fontFamily: 'Lato, sans-serif' }}>
            IL TUO NOME (opzionale)
          </label>
          <input
            type="text"
            value={uploaderName}
            onChange={e => setUploaderName(e.target.value)}
            placeholder="Es: Sofia e Marco"
            className="w-full px-4 py-3.5 rounded-2xl text-sm outline-none transition-all"
            style={{
              border: '1.5px solid #DFC98A',
              background: 'white',
              color: '#3D2B1F',
              fontFamily: 'Lato, sans-serif',
              boxShadow: '0 2px 8px rgba(201,168,76,0.08)',
            }}
            onFocus={e => { e.target.style.borderColor = '#C9A84C'; e.target.style.boxShadow = '0 0 0 3px rgba(201,168,76,0.12)'; }}
            onBlur={e => { e.target.style.borderColor = '#DFC98A'; e.target.style.boxShadow = '0 2px 8px rgba(201,168,76,0.08)'; }}
          />
        </motion.div>

        {/* Drop zone */}
        <motion.div
          initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }}
          onDrop={handleDrop}
          onDragOver={e => { e.preventDefault(); setDragOver(true); }}
          onDragLeave={() => setDragOver(false)}
          onClick={() => fileInputRef.current?.click()}
          className="relative rounded-3xl p-8 text-center cursor-pointer transition-all duration-200 overflow-hidden"
          style={{
            border: `2px dashed ${dragOver ? '#C9A84C' : '#DFC98A'}`,
            background: dragOver ? 'rgba(201,168,76,0.06)' : 'white',
            boxShadow: dragOver ? '0 0 0 4px rgba(201,168,76,0.1)' : '0 2px 12px rgba(201,168,76,0.08)',
          }}
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
        >
          <input
            ref={fileInputRef}
            type="file"
            accept="image/*"
            multiple
            className="hidden"
            onChange={e => e.target.files && addFiles(e.target.files)}
          />

          {/* Decorative background roses */}
          <div className="absolute -bottom-4 -left-4 opacity-10 pointer-events-none">
            <RoseWhite size={80} />
          </div>
          <div className="absolute -top-4 -right-4 opacity-10 pointer-events-none">
            <RoseWhite size={80} />
          </div>

          <motion.div
            animate={{ scale: dragOver ? 1.1 : 1 }}
            transition={{ duration: 0.2 }}
          >
            <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
              style={{ background: 'rgba(201,168,76,0.1)', border: '1.5px solid #DFC98A' }}>
              <ImagePlus size={28} style={{ color: '#C9A84C' }} />
            </div>
          </motion.div>

          <p className="font-bold text-lg mb-1"
            style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
            {dragOver ? 'Rilascia qui!' : 'Scegli le foto'}
          </p>
          <p className="text-sm mb-2" style={{ color: '#7A6652' }}>
            Tocca per selezionare dalla galleria
          </p>
          <div className="flex items-center justify-center gap-2">
            <Sparkles size={12} style={{ color: '#C9A84C' }} />
            <p className="text-xs" style={{ color: '#B0A090' }}>
              Compressione automatica — qualità ottimale
            </p>
            <Sparkles size={12} style={{ color: '#C9A84C' }} />
          </div>
        </motion.div>

        {/* File previews grid */}
        <AnimatePresence>
          {files.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="space-y-4"
            >
              {/* Grid */}
              <div className="grid grid-cols-3 gap-2">
                {files.map((f, idx) => (
                  <motion.div
                    key={f.id}
                    className="relative rounded-2xl overflow-hidden"
                    style={{
                      border: `1.5px solid ${f.status === 'done' ? '#C9A84C' : f.status === 'error' ? '#ef4444' : '#DFC98A'}`,
                      aspectRatio: '1',
                      boxShadow: f.status === 'done' ? '0 0 0 2px rgba(201,168,76,0.2)' : 'none',
                    }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.05 }}
                  >
                    <img src={f.preview} alt="" className="w-full h-full object-cover" />

                    {/* Uploading overlay */}
                    {f.status === 'uploading' && (
                      <div className="absolute inset-0 flex flex-col items-center justify-center gap-1"
                        style={{ background: 'rgba(250,247,242,0.88)' }}>
                        <div className="w-8 h-8 rounded-full border-2 border-t-transparent animate-spin"
                          style={{ borderColor: '#C9A84C', borderTopColor: 'transparent' }} />
                        <span className="text-[10px] font-medium" style={{ color: '#C9A84C' }}>
                          {f.progress}%
                        </span>
                      </div>
                    )}

                    {/* Done overlay */}
                    {f.status === 'done' && (
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center"
                        style={{ background: 'rgba(250,247,242,0.75)' }}
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                        <CheckCircle size={28} style={{ color: '#C9A84C' }} />
                      </motion.div>
                    )}

                    {/* Error overlay */}
                    {f.status === 'error' && (
                      <div className="absolute inset-0 flex items-center justify-center"
                        style={{ background: 'rgba(254,242,242,0.85)' }}>
                        <p className="text-xs text-red-500 font-medium text-center px-1" title={f.error}>Errore</p>
                      </div>
                    )}

                    {/* Remove button (only pending) */}
                    {f.status === 'pending' && (
                      <button
                        onClick={e => { e.stopPropagation(); removeFile(f.id); }}
                        className="absolute top-1 right-1 w-5 h-5 rounded-full flex items-center justify-center"
                        style={{ background: 'rgba(61,43,31,0.75)' }}>
                        <X size={10} color="white" />
                      </button>
                    )}
                  </motion.div>
                ))}

                {/* Add more button */}
                {!allDone && (
                  <motion.button
                    onClick={() => fileInputRef.current?.click()}
                    className="rounded-2xl flex items-center justify-center"
                    style={{
                      border: '1.5px dashed #DFC98A',
                      background: 'white',
                      aspectRatio: '1',
                    }}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}>
                    <ImagePlus size={22} style={{ color: '#C9A84C' }} />
                  </motion.button>
                )}
              </div>

              {/* Progress bar */}
              {doneCount > 0 && doneCount < totalCount && (
                <div>
                  <div className="flex justify-between text-xs mb-1.5" style={{ color: '#7A6652' }}>
                    <span>{doneCount} di {totalCount} caricate</span>
                    <span>{Math.round((doneCount / totalCount) * 100)}%</span>
                  </div>
                  <div className="h-2 rounded-full overflow-hidden" style={{ background: '#F0EBE1' }}>
                    <motion.div
                      className="h-full rounded-full"
                      style={{ background: 'linear-gradient(to right, #9a7e2e, #C9A84C, #E8D5A3)' }}
                      initial={{ width: 0 }}
                      animate={{ width: `${(doneCount / totalCount) * 100}%` }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>
                </div>
              )}

              {errorFiles.length > 0 && (
                <div className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                  {errorFiles.map(file => (
                    <p key={file.id}>
                      {file.file.name}: {file.error || 'Upload non riuscito'}
                    </p>
                  ))}
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Success card */}
        <AnimatePresence>
          {allDone && (
            <motion.div
              className="relative rounded-3xl py-8 px-6 text-center overflow-hidden"
              style={{
                background: 'white',
                border: '2px solid #C9A84C',
                boxShadow: '0 8px 32px rgba(201,168,76,0.2)',
              }}
              initial={{ opacity: 0, scale: 0.93, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ type: 'spring', stiffness: 180 }}
            >
              {/* Background decoration */}
              <div className="absolute -bottom-6 -left-6 opacity-10 pointer-events-none">
                <RoseWhite size={100} />
              </div>
              <div className="absolute -top-6 -right-6 opacity-10 pointer-events-none">
                <RoseWhite size={100} />
              </div>

              <motion.div
                initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                <CheckCircle size={52} className="mx-auto mb-3" style={{ color: '#C9A84C' }} />
              </motion.div>
              <p className="text-xl font-bold mb-1"
                style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
                Grazie mille!
              </p>
              <p className="text-sm mb-4" style={{ color: '#7A6652' }}>
                {doneCount === 1
                  ? 'La tua foto è nell\'album degli sposi'
                  : `Le tue ${doneCount} foto sono nell'album degli sposi`}
              </p>
              <GoldDivider className="mb-4" />
              <p className="text-xs" style={{ color: '#B0A090' }}>
                Marco & Vanessa ti ringraziano per questo ricordo ❤️
              </p>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Upload button */}
        {files.length > 0 && !allDone && (
          <Turnstile onToken={setTurnstileToken} />
        )}

        {files.length > 0 && !allDone && (
          <motion.button
            onClick={uploadAll}
            disabled={pendingCount === 0 || isUploading || (!turnstileToken && !uploadSession)}
            className="w-full py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-50"
            style={{
              background: 'linear-gradient(135deg, #9a7e2e 0%, #C9A84C 40%, #E8D5A3 70%, #C9A84C 100%)',
              fontFamily: 'Playfair Display, serif',
              boxShadow: '0 4px 20px rgba(201,168,76,0.4)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
          >
            {isUploading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Caricamento in corso...
              </>
            ) : (
              <>
                <Upload size={20} />
                Carica nell'Album
                {pendingCount > 0 && (
                  <span className="px-2 py-0.5 rounded-full text-sm font-bold"
                    style={{ background: 'rgba(255,255,255,0.25)' }}>
                    {pendingCount}
                  </span>
                )}
              </>
            )}
          </motion.button>
        )}

        {/* Upload more button */}
        {allDone && (
          <motion.button
            onClick={reset}
            className="w-full py-4 rounded-2xl font-semibold text-base"
            style={{
              border: '2px solid #C9A84C',
              color: '#C9A84C',
              background: 'white',
              fontFamily: 'Playfair Display, serif',
            }}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}
          >
            Carica altre foto
          </motion.button>
        )}

        {/* Decorative roses */}
        <div className="flex justify-center gap-3 pt-2 pb-4 opacity-25">
          <RoseWhite size={28} />
          <RoseWhite size={20} />
          <RoseWhite size={28} />
        </div>
      </div>

      <BottomNav />
    </div>
  );
}
