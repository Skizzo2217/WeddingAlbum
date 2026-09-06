import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Camera, RotateCcw, CheckCircle, Heart } from 'lucide-react';
import BottomNav from '@/components/wedding/BottomNav';
import { GoldCornerFrame, RoseWhite } from '@/components/wedding/WeddingDecorations';
import { uploadWeddingPhoto } from '@/lib/photo-api';
import Turnstile from '@/components/Turnstile';

// ─── Glasses definitions ────────────────────────────────────────────────────
const GLASSES = [
  {
    id: 'hearts',
    emoji: '❤️',
    label: 'Cuori',
    component: (
      <svg viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M50 28 C50 16 62 10 72 22 C82 10 94 16 94 28 C94 42 72 56 72 56 C72 56 50 42 50 28Z" fill="#FF6B8A" stroke="#C9A84C" strokeWidth="2.5"/>
        <path d="M126 28 C126 16 138 10 148 22 C158 10 170 16 170 28 C170 42 148 56 148 56 C148 56 126 42 126 28Z" fill="#FF6B8A" stroke="#C9A84C" strokeWidth="2.5"/>
        <line x1="94" y1="32" x2="126" y2="32" stroke="#C9A84C" strokeWidth="3"/>
        <line x1="8" y1="32" x2="50" y2="32" stroke="#C9A84C" strokeWidth="3"/>
        <line x1="170" y1="32" x2="212" y2="32" stroke="#C9A84C" strokeWidth="3"/>
      </svg>
    ),
  },
  {
    id: 'stars',
    emoji: '⭐',
    label: 'Stelle',
    component: (
      <svg viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <polygon points="72,8 78,26 97,26 83,37 88,55 72,44 56,55 61,37 47,26 66,26" fill="#FFD700" stroke="#C9A84C" strokeWidth="1.5"/>
        <polygon points="148,8 154,26 173,26 159,37 164,55 148,44 132,55 137,37 123,26 142,26" fill="#FFD700" stroke="#C9A84C" strokeWidth="1.5"/>
        <line x1="97" y1="32" x2="123" y2="32" stroke="#C9A84C" strokeWidth="3"/>
        <line x1="8" y1="32" x2="47" y2="32" stroke="#C9A84C" strokeWidth="3"/>
        <line x1="173" y1="32" x2="212" y2="32" stroke="#C9A84C" strokeWidth="3"/>
      </svg>
    ),
  },
  {
    id: 'flowers',
    emoji: '🌸',
    label: 'Fiori',
    component: (
      <svg viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <circle cx="72" cy="32" r="22" fill="none" stroke="#C9A84C" strokeWidth="2"/>
        {[0,60,120,180,240,300].map((a,i) => {
          const r = (a*Math.PI)/180;
          return <ellipse key={i} cx={72+14*Math.cos(r)} cy={32+14*Math.sin(r)} rx="7" ry="5" fill="white" stroke="#E8D5A3" strokeWidth="1" transform={`rotate(${a} ${72+14*Math.cos(r)} ${32+14*Math.sin(r)})`}/>;
        })}
        <circle cx="72" cy="32" r="6" fill="#FFD700"/>
        <circle cx="148" cy="32" r="22" fill="none" stroke="#C9A84C" strokeWidth="2"/>
        {[0,60,120,180,240,300].map((a,i) => {
          const r = (a*Math.PI)/180;
          return <ellipse key={i} cx={148+14*Math.cos(r)} cy={32+14*Math.sin(r)} rx="7" ry="5" fill="white" stroke="#E8D5A3" strokeWidth="1" transform={`rotate(${a} ${148+14*Math.cos(r)} ${32+14*Math.sin(r)})`}/>;
        })}
        <circle cx="148" cy="32" r="6" fill="#FFD700"/>
        <line x1="94" y1="32" x2="126" y2="32" stroke="#C9A84C" strokeWidth="3"/>
        <line x1="8" y1="32" x2="50" y2="32" stroke="#C9A84C" strokeWidth="3"/>
        <line x1="170" y1="32" x2="212" y2="32" stroke="#C9A84C" strokeWidth="3"/>
      </svg>
    ),
  },
  {
    id: 'classic',
    emoji: '🕶️',
    label: 'Classici',
    component: (
      <svg viewBox="0 0 220 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="46" y="14" width="52" height="34" rx="17" fill="rgba(10,10,10,0.82)" stroke="#C9A84C" strokeWidth="2.5"/>
        <rect x="122" y="14" width="52" height="34" rx="17" fill="rgba(10,10,10,0.82)" stroke="#C9A84C" strokeWidth="2.5"/>
        <line x1="98" y1="31" x2="122" y2="31" stroke="#C9A84C" strokeWidth="3"/>
        <line x1="8" y1="31" x2="46" y2="31" stroke="#C9A84C" strokeWidth="3"/>
        <line x1="174" y1="31" x2="212" y2="31" stroke="#C9A84C" strokeWidth="3"/>
        <ellipse cx="72" cy="28" rx="14" ry="8" fill="rgba(255,255,255,0.06)"/>
        <ellipse cx="148" cy="28" rx="14" ry="8" fill="rgba(255,255,255,0.06)"/>
      </svg>
    ),
  },
];

type Stage = 'camera' | 'preview' | 'uploading' | 'success';

export default function PhotoboothPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedGlasses, setSelectedGlasses] = useState(0);
  const [stage, setStage] = useState<Stage>('camera');
  const [capturedImage, setCapturedImage] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);
  const [cameraError, setCameraError] = useState(false);
  const [uploadError, setUploadError] = useState<string | null>(null);
  const [cameraReady, setCameraReady] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState<string | null>(null);
  const streamRef = useRef<MediaStream | null>(null);

  const startCamera = useCallback(async () => {
    setCameraError(false);
    setCameraReady(false);
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: { facingMode: 'user', width: { ideal: 1280 }, height: { ideal: 960 } },
        audio: false,
      });
      streamRef.current = stream;
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        videoRef.current.onloadedmetadata = () => setCameraReady(true);
      }
    } catch {
      setCameraError(true);
    }
  }, []);

  useEffect(() => {
    startCamera();
    return () => { streamRef.current?.getTracks().forEach(t => t.stop()); };
  }, [startCamera]);

  const capturePhoto = () => {
    const video = videoRef.current;
    const canvas = canvasRef.current;
    if (!video || !canvas || !cameraReady) return;

    // Flash effect
    setFlash(true);
    setTimeout(() => setFlash(false), 350);

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = video.videoWidth || 640;
    canvas.height = video.videoHeight || 480;

    // Mirror (selfie)
    ctx.save();
    ctx.scale(-1, 1);
    ctx.drawImage(video, -canvas.width, 0, canvas.width, canvas.height);
    ctx.restore();

    // Capture immediately without glasses (glasses are CSS overlay)
    const dataUrl = canvas.toDataURL('image/jpeg', 0.92);
    setCapturedImage(dataUrl);
    setStage('preview');
    streamRef.current?.getTracks().forEach(t => t.stop());
  };

  const retake = () => {
    setCapturedImage(null);
    setUploadError(null);
    setTurnstileToken(null);
    setStage('camera');
    startCamera();
  };

  const uploadPhoto = async () => {
    if (!capturedImage) return;
    setStage('uploading');
    setUploadError(null);
    try {
      const response = await fetch(capturedImage);
      const blob = await response.blob();
      await uploadWeddingPhoto({
        file: blob,
        isPhotobooth: true,
        originalName: 'photobooth.jpg',
        turnstileToken: turnstileToken ?? undefined,
      });
      setStage('success');
    } catch (error) {
      setUploadError(error instanceof Error ? error.message : 'Upload non riuscito');
      setStage('preview');
    }
  };

  return (
    <div className="min-h-screen pb-24 overflow-x-hidden" style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #F5EFE4 100%)' }}>

      {/* Header */}
      <div className="relative pt-10 pb-5 px-6 text-center">
        <GoldCornerFrame />
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
          <p className="text-xs tracking-[0.2em] mb-1" style={{ color: '#C9A84C', fontFamily: 'Lato, sans-serif' }}>MARCO & VANESSA</p>
          <h1 className="text-2xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
            Photobooth degli Sposi
          </h1>
          <p className="text-sm mt-1" style={{ color: '#7A6652' }}>Scegli gli occhiali e scatta il tuo selfie!</p>
        </motion.div>
        <div className="h-px mt-4 mx-6" style={{ background: 'linear-gradient(to right, transparent, #C9A84C, transparent)' }} />
      </div>

      <div className="px-4 max-w-md mx-auto">

        {/* Camera / Preview */}
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{ border: '2px solid #C9A84C', aspectRatio: '3/4', boxShadow: '0 8px 32px rgba(201,168,76,0.2)' }}
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {/* Flash overlay */}
          <AnimatePresence>
            {flash && (
              <motion.div className="absolute inset-0 z-30 bg-white pointer-events-none"
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                transition={{ duration: 0.15 }} />
            )}
          </AnimatePresence>

          {/* Camera view */}
          {stage === 'camera' && !cameraError && (
            <>
              <video ref={videoRef} autoPlay playsInline muted
                className="w-full h-full object-cover"
                style={{ transform: 'scaleX(-1)' }} />

              {/* Glasses overlay on live video */}
              <div className="absolute inset-0 flex items-start justify-center pointer-events-none"
                style={{ paddingTop: '28%' }}>
                <div className="w-4/5">
                  {GLASSES[selectedGlasses].component}
                </div>
              </div>

              {/* Loading indicator */}
              {!cameraReady && (
                <div className="absolute inset-0 flex items-center justify-center"
                  style={{ background: '#F0EBE1' }}>
                  <div className="text-center">
                    <div className="w-10 h-10 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-2" />
                    <p className="text-sm" style={{ color: '#7A6652' }}>Avvio fotocamera...</p>
                  </div>
                </div>
              )}

              {/* Gold frame corners on camera */}
              <div className="absolute top-3 left-3 w-8 h-8 border-t-2 border-l-2 rounded-tl-lg pointer-events-none" style={{ borderColor: 'rgba(201,168,76,0.6)' }} />
              <div className="absolute top-3 right-3 w-8 h-8 border-t-2 border-r-2 rounded-tr-lg pointer-events-none" style={{ borderColor: 'rgba(201,168,76,0.6)' }} />
              <div className="absolute bottom-3 left-3 w-8 h-8 border-b-2 border-l-2 rounded-bl-lg pointer-events-none" style={{ borderColor: 'rgba(201,168,76,0.6)' }} />
              <div className="absolute bottom-3 right-3 w-8 h-8 border-b-2 border-r-2 rounded-br-lg pointer-events-none" style={{ borderColor: 'rgba(201,168,76,0.6)' }} />
            </>
          )}

          {/* Camera error */}
          {stage === 'camera' && cameraError && (
            <div className="w-full h-full flex flex-col items-center justify-center gap-4 p-6"
              style={{ background: '#F0EBE1' }}>
              <Camera size={52} style={{ color: '#C9A84C' }} />
              <div className="text-center">
                <p className="font-semibold mb-1" style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
                  Fotocamera non disponibile
                </p>
                <p className="text-sm" style={{ color: '#7A6652' }}>
                  Abilita l'accesso alla fotocamera nelle impostazioni del browser
                </p>
              </div>
              <button onClick={startCamera}
                className="px-5 py-2 rounded-full text-sm font-medium"
                style={{ background: '#C9A84C', color: 'white' }}>
                Riprova
              </button>
            </div>
          )}

          {/* Preview / uploading / success */}
          {(stage === 'preview' || stage === 'uploading' || stage === 'success') && capturedImage && (
            <img src={capturedImage} alt="Foto scattata" className="w-full h-full object-cover" />
          )}

          {/* Uploading overlay */}
          {stage === 'uploading' && (
            <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ background: 'rgba(250,247,242,0.88)' }}>
              <div className="w-14 h-14 border-3 border-primary border-t-transparent rounded-full animate-spin"
                style={{ borderWidth: 3, borderColor: '#C9A84C', borderTopColor: 'transparent' }} />
              <p className="font-medium" style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
                Caricamento...
              </p>
            </div>
          )}

          {/* Success overlay */}
          {stage === 'success' && (
            <motion.div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
              style={{ background: 'rgba(250,247,242,0.9)' }}
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200, delay: 0.1 }}>
                <CheckCircle size={64} style={{ color: '#C9A84C' }} />
              </motion.div>
              <p className="text-xl font-bold" style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
                Nell'Album!
              </p>
              <p className="text-sm" style={{ color: '#7A6652' }}>Grazie per il ricordo ❤️</p>
            </motion.div>
          )}
        </motion.div>

        {/* Glasses selector */}
        <AnimatePresence>
          {stage === 'camera' && (
            <motion.div className="mt-5"
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
              transition={{ delay: 0.3 }}>
              <p className="text-center text-xs tracking-[0.15em] mb-3 font-medium"
                style={{ color: '#7A6652', fontFamily: 'Lato, sans-serif' }}>
                SCEGLI GLI OCCHIALI
              </p>
              <div className="flex gap-2 justify-center">
                {GLASSES.map((g, i) => (
                  <motion.button key={g.id} onClick={() => setSelectedGlasses(i)}
                    className="flex flex-col items-center gap-1.5 py-2 px-2 rounded-2xl transition-all duration-200"
                    style={{
                      border: `2px solid ${selectedGlasses === i ? '#C9A84C' : '#E8D5A3'}`,
                      background: selectedGlasses === i ? 'rgba(201,168,76,0.1)' : 'white',
                      minWidth: 68,
                    }}
                    whileTap={{ scale: 0.95 }}>
                    <div className="w-14 h-7">{g.component}</div>
                    <span className="text-[10px] font-medium" style={{ color: selectedGlasses === i ? '#C9A84C' : '#7A6652' }}>
                      {g.label}
                    </span>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action buttons */}
        <div className="mt-5 space-y-3">
          {stage === 'camera' && (
            <motion.button onClick={capturePhoto} disabled={cameraError || !cameraReady}
              className="w-full py-4 rounded-2xl text-white font-bold text-lg flex items-center justify-center gap-3 disabled:opacity-40"
              style={{ background: 'linear-gradient(135deg, #9a7e2e 0%, #C9A84C 40%, #E8D5A3 70%, #C9A84C 100%)', fontFamily: 'Playfair Display, serif', boxShadow: '0 4px 20px rgba(201,168,76,0.4)' }}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              <Camera size={22} />
              Scatta la Foto
            </motion.button>
          )}

          {stage === 'preview' && (
            <>
              {uploadError && (
                <p className="text-center text-sm text-red-600 px-3">{uploadError}</p>
              )}
              <Turnstile onToken={setTurnstileToken} />
              <div className="flex gap-3">
                <motion.button onClick={retake}
                  className="flex-1 py-4 rounded-2xl font-semibold flex items-center justify-center gap-2"
                  style={{ border: '2px solid #C9A84C', color: '#C9A84C', background: 'white', fontFamily: 'Lato, sans-serif' }}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <RotateCcw size={18} /> Riprova
                </motion.button>
                <motion.button onClick={uploadPhoto} disabled={!turnstileToken}
                  className="flex-1 py-4 rounded-2xl text-white font-semibold flex items-center justify-center gap-2 disabled:opacity-40"
                  style={{ background: 'linear-gradient(135deg, #C9A84C, #E8D5A3, #C9A84C)', fontFamily: 'Lato, sans-serif', boxShadow: '0 4px 16px rgba(201,168,76,0.35)' }}
                  whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
                  <Heart size={18} /> Carica
                </motion.button>
              </div>
            </>
          )}

          {stage === 'success' && (
            <motion.button onClick={retake}
              className="w-full py-4 rounded-2xl text-white font-bold text-lg"
              style={{ background: 'linear-gradient(135deg, #C9A84C, #E8D5A3, #C9A84C)', fontFamily: 'Playfair Display, serif', boxShadow: '0 4px 20px rgba(201,168,76,0.4)' }}
              initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.97 }}>
              Scatta un'altra foto! 📸
            </motion.button>
          )}
        </div>

        {/* Decorative roses */}
        <div className="flex justify-center gap-3 mt-6 opacity-25">
          <RoseWhite size={28} />
          <RoseWhite size={20} />
          <RoseWhite size={28} />
        </div>
      </div>

      <canvas ref={canvasRef} className="hidden" />
      <BottomNav />
    </div>
  );
}
