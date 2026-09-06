import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Camera, Images, Upload, ClipboardCheck } from 'lucide-react';
import BottomNav from '@/components/wedding/BottomNav';
import { RoseWhite, /* Gypsophila, */ MonogramFrame, Rose } from '@/components/wedding/WeddingDecorations';

// Falling petals animation
interface Petal {
  id: number;
  x: number;
  delay: number;
  duration: number;
  size: number;
  rotation: number;
}

function FallingPetals() {
  const [petals] = useState<Petal[]>(() =>
    Array.from({ length: 24 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      delay: Math.random() * 8,
      duration: 6 + Math.random() * 6,
      size: 10 + Math.random() * 12,
      rotation: Math.random() * 360,
    }))
  );

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map(petal => (
        <motion.div
          key={petal.id}
          className="absolute"
          style={{
            left: `${petal.x}%`,
            top: -20,
            width: petal.size,
            height: petal.size * 1.3,
            //filter: 'drop-shadow(0 1px 2px rgba(157, 108, 119, 0.18))',
            filter: 'drop-shadow(0 1px 2px rgba(157, 108, 119, 0.18))',
          }}
          animate={{
            y: ['0vh', '110vh'],
            x: [0, Math.sin(petal.id) * 40],
            rotate: [petal.rotation, petal.rotation + 180],
            opacity: [0, 0.88, 0.88, 0],
          }}
          transition={{
            duration: petal.duration,
            delay: petal.delay,
            repeat: Infinity,
            ease: 'linear',
          }}
        >
          <svg viewBox="0 0 12 16" fill="none" width="100%" height="100%">
            <ellipse cx="6" cy="8" rx="4" ry="7"
              fill={petal.id % 3 === 0 ? '#C9A84C' : '#FFF9F3'}
              stroke="#D9B867" strokeWidth="0.45" opacity="0.95"
              transform="rotate(15 6 8)"/>
          </svg>
        </motion.div>
      ))}
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden pb-20"
      style={{ background: 'linear-gradient(160deg, #FAF7F2 0%, #F5EFE4 50%, #FAF7F2 100%)' }}>

      <FallingPetals />

      {/* Decorative flowers top-left */}
      <div className="absolute top-0 left-0 opacity-70 pointer-events-none -translate-x-3 -translate-y-3"
        style={{ filter: 'drop-shadow(0 3px 5px rgba(126, 92, 52, 0.14))' }}>
        <Rose size={108} />
      </div>
      {/* Decorative flowers top-right */}
      <div className="absolute top-0 right-0 opacity-70 pointer-events-none translate-x-3 -translate-y-3"
        style={{ filter: 'drop-shadow(0 3px 5px rgba(126, 92, 52, 0.14))' }}>
        <Rose size={108} />
      </div>

      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-6 pt-12 pb-4">

        {/* Gypsophila top — temporarily disabled
        <motion.div
          className="mb-2 opacity-85"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 0.85, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <Gypsophila />
        </motion.div>
        */}

        {/* Monogram with frame */}
        <motion.div
          className="relative w-48 h-48 flex items-center justify-center mb-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' as const }}
        >
          <MonogramFrame className="absolute inset-0 w-full h-full" />
          <div className="relative z-10 text-center">
            <span className="text-5xl font-bold leading-none"
              style={{ fontFamily: 'Playfair Display, serif', color: '#C9A84C', letterSpacing: '0.05em' }}>
              M
            </span>
            <span className="text-2xl mx-1" style={{ color: '#DFC98A' }}>&</span>
            <span className="text-5xl font-bold leading-none"
              style={{ fontFamily: 'Playfair Display, serif', color: '#C9A84C', letterSpacing: '0.05em' }}>
              V
            </span>
          </div>
        </motion.div>

        {/* Names */}
        <motion.div
          className="text-center mb-2"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <h1 className="text-4xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
            Marco
          </h1>
          <div className="flex items-center gap-3 my-1 justify-center">
            <div className="h-px w-12" style={{ background: 'linear-gradient(to right, transparent, #C9A84C)' }} />
            <span className="text-xl" style={{ color: '#C9A84C', fontFamily: 'Playfair Display, serif' }}>&</span>
            <div className="h-px w-12" style={{ background: 'linear-gradient(to left, transparent, #C9A84C)' }} />
          </div>
          <h1 className="text-4xl font-bold leading-tight"
            style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
            Vanessa
          </h1>
        </motion.div>

        {/* Subtitle */}
        <motion.p
          className="text-center text-sm mb-1"
          style={{ color: '#7A6652', fontFamily: 'Lato, sans-serif', letterSpacing: '0.08em' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
        >
          IL NOSTRO GIORNO SPECIALE
        </motion.p>
        <motion.p
          className="text-center text-sm mb-6"
          style={{ color: '#B0A090', fontFamily: 'Lato, sans-serif' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.8 }}
        >
          Condividi i tuoi ricordi con noi
        </motion.p>

        {/* Gypsophila divider — temporarily disabled
        <motion.div
          className="mb-6 opacity-75"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.75 }}
          transition={{ delay: 0.9 }}
        >
          <Gypsophila />
        </motion.div>
        */}

        {/* Action buttons */}
        <motion.div
          className="w-full max-w-xs space-y-3"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          {/* Gallery button */}
          <Link to="/gallery" className="block">
            <motion.div
              className="w-full py-4 px-6 rounded-2xl flex items-center gap-4 text-white"
              style={{
                background: 'linear-gradient(135deg, #C9A84C 0%, #E8D5A3 50%, #C9A84C 100%)',
                boxShadow: '0 4px 20px rgba(201,168,76,0.35)',
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 6px 28px rgba(201,168,76,0.45)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(255,255,255,0.25)' }}>
                <Images size={20} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif'}}>
                  Album Foto
                </p>
                <p className="text-xs" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Sfoglia i ricordi condivisi
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Photobooth button */}
          <Link to="/photobooth" className="block">
            <motion.div
              className="w-full py-4 px-6 rounded-2xl flex items-center gap-4"
              style={{
                background: 'white',
                border: '2px solid #C9A84C',
                boxShadow: '0 2px 12px rgba(201,168,76,0.15)',
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 4px 20px rgba(201,168,76,0.25)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.12)' }}>
                <Camera size={20}  style={{ color: '#C9A84C' }}/>
              </div>
              <div className="flex-1">
                <p className="font-bold text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#7A6652'  }}>
                  Photobooth
                </p>
                <p className="text-xs opacity-80" style={{ fontFamily: 'Lato, sans-serif' }}>
                  Scatta con gli occhiali divertenti
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Upload button */}
          <Link to="/upload" className="block">
            <motion.div
              className="w-full py-4 px-6 rounded-2xl flex items-center gap-4"
              style={{
                background: 'white',
                border: '1.5px solid #DFC98A',
                boxShadow: '0 2px 8px rgba(201,168,76,0.1)',
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 4px 16px rgba(201,168,76,0.2)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.08)' }}>
                <Upload size={20} style={{ color: '#C9A84C' }} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
                  Carica Foto
                </p>
                <p className="text-xs" style={{ fontFamily: 'Lato, sans-serif', color: '#7A6652' }}>
                  Aggiungi i tuoi scatti all'album
                </p>
              </div>
            </motion.div>
          </Link>

          {/* Mission button */}
          <Link to="/mission" className="block">
            <motion.div
              className="w-full py-4 px-6 rounded-2xl flex items-center gap-4"
              style={{
                background: 'white',
                border: '1.5px solid #DFC98A',
                boxShadow: '0 2px 8px rgba(201,168,76,0.1)',
              }}
              whileHover={{ scale: 1.03, boxShadow: '0 4px 16px rgba(201,168,76,0.2)' }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2 }}
            >
              <div className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(201,168,76,0.08)' }}>
                <ClipboardCheck size={20} style={{ color: '#C9A84C' }} />
              </div>
              <div className="flex-1">
                <p className="font-bold text-base leading-tight" style={{ fontFamily: 'Playfair Display, serif', color: '#3D2B1F' }}>
                  Missioni fotografiche
                </p>
                <p className="text-xs" style={{ fontFamily: 'Lato, sans-serif', color: '#7A6652' }}>
                  Inserisci il numero sul biglietto e completa la sfida
                </p>
              </div>
            </motion.div>
          </Link>
        </motion.div>

        {/* Bottom roses */}
        <motion.div
          className="flex gap-4 mt-6 opacity-60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 1.2 }}
        >
          <RoseWhite size={32} />
          <RoseWhite size={24} />
          <RoseWhite size={32} />
        </motion.div>
      </div>

      <BottomNav />
    </div>
  );
}
