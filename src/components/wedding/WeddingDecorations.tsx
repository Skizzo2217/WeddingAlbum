/**
 * SVG decorative components for the wedding app.
 * Cornici dorate, rose bianche, gypsophila.
 */

export function GoldCornerFrame({ className = '' }: { className?: string }) {
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {/* Top-left corner */}
      <svg className="absolute top-0 left-0 w-16 h-16 opacity-70" viewBox="0 0 64 64" fill="none">
        <path d="M2 2 L2 24 M2 2 L24 2" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 2 L14 14" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round"/>
        <circle cx="2" cy="2" r="2" fill="#C9A84C"/>
        <circle cx="14" cy="14" r="1.5" fill="#E8D5A3"/>
        <path d="M8 2 Q10 6 14 8" stroke="#C9A84C" strokeWidth="0.6" fill="none"/>
        <path d="M2 8 Q6 10 8 14" stroke="#C9A84C" strokeWidth="0.6" fill="none"/>
      </svg>
      {/* Top-right corner */}
      <svg className="absolute top-0 right-0 w-16 h-16 opacity-70" viewBox="0 0 64 64" fill="none">
        <path d="M62 2 L62 24 M62 2 L40 2" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M62 2 L50 14" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round"/>
        <circle cx="62" cy="2" r="2" fill="#C9A84C"/>
        <circle cx="50" cy="14" r="1.5" fill="#E8D5A3"/>
        <path d="M56 2 Q54 6 50 8" stroke="#C9A84C" strokeWidth="0.6" fill="none"/>
        <path d="M62 8 Q58 10 56 14" stroke="#C9A84C" strokeWidth="0.6" fill="none"/>
      </svg>
      {/* Bottom-left corner */}
      <svg className="absolute bottom-0 left-0 w-16 h-16 opacity-70" viewBox="0 0 64 64" fill="none">
        <path d="M2 62 L2 40 M2 62 L24 62" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M2 62 L14 50" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round"/>
        <circle cx="2" cy="62" r="2" fill="#C9A84C"/>
        <circle cx="14" cy="50" r="1.5" fill="#E8D5A3"/>
      </svg>
      {/* Bottom-right corner */}
      <svg className="absolute bottom-0 right-0 w-16 h-16 opacity-70" viewBox="0 0 64 64" fill="none">
        <path d="M62 62 L62 40 M62 62 L40 62" stroke="#C9A84C" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M62 62 L50 50" stroke="#C9A84C" strokeWidth="0.8" strokeLinecap="round"/>
        <circle cx="62" cy="62" r="2" fill="#C9A84C"/>
        <circle cx="50" cy="50" r="1.5" fill="#E8D5A3"/>
      </svg>
    </div>
  );
}

export function RoseWhite({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 48 48" fill="none">
      {/* Petali esterni */}
      <ellipse cx="24" cy="14" rx="6" ry="10" fill="white" stroke="#E8D5A3" strokeWidth="0.5" opacity="0.9"/>
      <ellipse cx="34" cy="20" rx="6" ry="10" fill="white" stroke="#E8D5A3" strokeWidth="0.5" opacity="0.9" transform="rotate(60 34 20)"/>
      <ellipse cx="34" cy="32" rx="6" ry="10" fill="white" stroke="#E8D5A3" strokeWidth="0.5" opacity="0.9" transform="rotate(120 34 32)"/>
      <ellipse cx="24" cy="36" rx="6" ry="10" fill="white" stroke="#E8D5A3" strokeWidth="0.5" opacity="0.9" transform="rotate(180 24 36)"/>
      <ellipse cx="14" cy="32" rx="6" ry="10" fill="white" stroke="#E8D5A3" strokeWidth="0.5" opacity="0.9" transform="rotate(240 14 32)"/>
      <ellipse cx="14" cy="20" rx="6" ry="10" fill="white" stroke="#E8D5A3" strokeWidth="0.5" opacity="0.9" transform="rotate(300 14 20)"/>
      {/* Centro */}
      <circle cx="24" cy="24" r="7" fill="white" stroke="#E8D5A3" strokeWidth="0.8"/>
      <circle cx="24" cy="24" r="4" fill="#FAF7F2" stroke="#E8D5A3" strokeWidth="0.5"/>
      {/* Foglie */}
      <path d="M20 40 Q16 46 12 44 Q14 40 20 40Z" fill="#8FBC8F" opacity="0.6"/>
      <path d="M28 40 Q32 46 36 44 Q34 40 28 40Z" fill="#8FBC8F" opacity="0.6"/>
    </svg>
  );
}

// A layered rose for the homepage corners; kept separate from RoseWhite so
// the simpler floral mark can still be used where a lighter decoration fits.
export function Rose({ className = '', size = 48 }: { className?: string; size?: number }) {
  return (
    <svg className={className} width={size} height={size} viewBox="0 0 100 100" fill="none">
      <path d="M42 77 C32 84 20 87 12 83 C18 73 30 70 42 74Z" fill="#9AB48B" opacity="0.8" />
      <path d="M56 76 C69 84 81 85 89 79 C81 70 68 70 56 73Z" fill="#86A777" opacity="0.78" />
      <path d="M50 74 C49 82 49 88 45 96" stroke="#7C996E" strokeWidth="3" strokeLinecap="round" />
      <g stroke="#C9A84C" strokeWidth="1.2">
        <ellipse cx="50" cy="49" rx="31" ry="22" fill="#F3D98F" transform="rotate(-18 50 49)" />
        <ellipse cx="50" cy="49" rx="31" ry="22" fill="#F9EBC3" transform="rotate(42 50 49)" />
        <ellipse cx="50" cy="49" rx="31" ry="22" fill="#EBCB76" transform="rotate(102 50 49)" />
        <ellipse cx="50" cy="49" rx="31" ry="22" fill="#FFF5D8" transform="rotate(162 50 49)" />
        <ellipse cx="50" cy="49" rx="24" ry="18" fill="#E5BE5F" transform="rotate(25 50 49)" />
        <ellipse cx="50" cy="49" rx="21" ry="15" fill="#F8E4A8" transform="rotate(95 50 49)" />
      </g>
      <path d="M39 52 C40 39 58 37 62 48 C66 59 51 66 43 59 C35 52 44 44 52 48 C60 52 55 58 49 57"
        fill="none" stroke="#B89238" strokeWidth="2.6" strokeLinecap="round" />
      <path d="M40 70 C45 75 55 75 61 69" stroke="#D7B75C" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

export function Gypsophila({ className = '' }: { className?: string }) {
  return (
    <svg className={className} width="120" height="60" viewBox="0 0 120 60" fill="none">
      {/* Steli */}
      <path d="M60 55 Q50 40 30 25" stroke="#C8D8B0" strokeWidth="0.8" fill="none"/>
      <path d="M60 55 Q55 38 40 20" stroke="#C8D8B0" strokeWidth="0.8" fill="none"/>
      <path d="M60 55 Q60 35 55 15" stroke="#C8D8B0" strokeWidth="0.8" fill="none"/>
      <path d="M60 55 Q65 38 75 20" stroke="#C8D8B0" strokeWidth="0.8" fill="none"/>
      <path d="M60 55 Q70 40 90 25" stroke="#C8D8B0" strokeWidth="0.8" fill="none"/>
      {/* Fiori piccoli */}
      {[
        [30, 25], [40, 20], [55, 15], [75, 20], [90, 25],
        [25, 18], [45, 12], [60, 8], [80, 14], [95, 18],
        [35, 30], [50, 25], [70, 28], [85, 32],
      ].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="2.5" fill="white" stroke="#E8D5A3" strokeWidth="0.4"/>
          <circle cx={x} cy={y} r="1" fill="#FAF7F2"/>
        </g>
      ))}
    </svg>
  );
}

export function GoldDivider({ className = '' }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="flex-1 h-px bg-gradient-to-r from-transparent to-primary/60"/>
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path d="M12 2 L13.5 9 L20 8 L14.5 13 L17 20 L12 16 L7 20 L9.5 13 L4 8 L10.5 9 Z" fill="#C9A84C" opacity="0.8"/>
      </svg>
      <div className="flex-1 h-px bg-gradient-to-l from-transparent to-primary/60"/>
    </div>
  );
}

export function FloatingPetal({ style }: { style?: React.CSSProperties }) {
  return (
    <svg style={style} width="12" height="16" viewBox="0 0 12 16" fill="none" className="pointer-events-none">
      <ellipse cx="6" cy="8" rx="4" ry="7" fill="white" opacity="0.7" transform="rotate(15 6 8)"/>
    </svg>
  );
}

export function MonogramFrame({ className = '' }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 200 220" fill="none">

      {/* CUORE ESTERNO */}
      <path
        d="
          M100 185
          C70 160 25 125 25 80
          C25 45 50 25 78 25
          C92 25 102 35 100 42
          C98 35 108 25 122 25
          C150 25 175 45 175 80
          C175 125 130 160 100 185
        "
        stroke="#C9A84C"
        strokeWidth="2"
        fill="none"
        opacity="0.75"
      />

      {/* CUORE INTERNO */}
      <path
        d="
          M100 175
          C74 154 38 122 38 84
          C38 55 57 38 80 38
          C92 38 100 45 100 52
          C100 45 108 38 120 38
          C143 38 162 55 162 84
          C162 122 126 154 100 175
        "
        stroke="#E8D5A3"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />

      {/* PERLINE DECORATIVE */}
      {[
        [100, 18],
        [55, 38],
        [145, 38],
        [30, 90],
        [170, 90],
        [60, 155],
        [140, 155],
        [100, 188],
      ].map(([x, y], i) => (
        <circle
          key={i}
          cx={x}
          cy={y}
          r="2.5"
          fill="#C9A84C"
          opacity="0.75"
        />
      ))}

      {/* FIORE SINISTRO */}
      <g transform="translate(58 55)">
        <circle cx="0" cy="0" r="3" fill="#C9A84C" opacity="0.8" />
        <ellipse cx="0" cy="-6" rx="3" ry="5" fill="white" />
        <ellipse cx="5" cy="-2" rx="3" ry="5" fill="white" transform="rotate(60 5 -2)" />
        <ellipse cx="5" cy="4" rx="3" ry="5" fill="white" transform="rotate(120 5 4)" />
        <ellipse cx="0" cy="6" rx="3" ry="5" fill="white" />
        <ellipse cx="-5" cy="4" rx="3" ry="5" fill="white" transform="rotate(60 -5 4)" />
        <ellipse cx="-5" cy="-2" rx="3" ry="5" fill="white" transform="rotate(120 -5 -2)" />
      </g>

      {/* FIORE DESTRO */}
      <g transform="translate(142 55)">
        <circle cx="0" cy="0" r="3" fill="#C9A84C" opacity="0.8" />
        <ellipse cx="0" cy="-6" rx="3" ry="5" fill="white" />
        <ellipse cx="5" cy="-2" rx="3" ry="5" fill="white" transform="rotate(60 5 -2)" />
        <ellipse cx="5" cy="4" rx="3" ry="5" fill="white" transform="rotate(120 5 4)" />
        <ellipse cx="0" cy="6" rx="3" ry="5" fill="white" />
        <ellipse cx="-5" cy="4" rx="3" ry="5" fill="white" transform="rotate(60 -5 4)" />
        <ellipse cx="-5" cy="-2" rx="3" ry="5" fill="white" transform="rotate(120 -5 -2)" />
      </g>

      {/* CERCHIO MONOGRAMMA */}
      <circle
        cx="100"
        cy="102"
        r="48"
        stroke="#C9A84C"
        strokeWidth="1"
        opacity="0.5"
      />

      <circle
        cx="100"
        cy="102"
        r="43"
        stroke="#E8D5A3"
        strokeWidth="0.8"
        opacity="0.6"
      />

      {/* ORNAMENTI SOPRA E SOTTO */}
      <path
        d="M92 50 Q100 58 108 50"
        stroke="#C9A84C"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />

      <path
        d="M92 154 Q100 146 108 154"
        stroke="#C9A84C"
        strokeWidth="1"
        fill="none"
        opacity="0.8"
      />

      <circle cx="100" cy="48" r="2.5" fill="#C9A84C" opacity="0.8" />
      <circle cx="100" cy="156" r="2.5" fill="#C9A84C" opacity="0.8" />

    </svg>
  );
}
