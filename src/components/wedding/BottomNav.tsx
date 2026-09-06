import { Link, useLocation } from 'react-router-dom';
import { Home, Camera, Images, Upload, ClipboardCheck } from 'lucide-react';

const navItems = [
  { path: '/', icon: Home, label: 'Home' },
  { path: '/photobooth', icon: Camera, label: 'Photobooth' },
  { path: '/gallery', icon: Images, label: 'Galleria' },
  { path: '/upload', icon: Upload, label: 'Carica' },
  { path: '/mission', icon: ClipboardCheck, label: 'Missioni' },
];

export default function BottomNav() {
  const { pathname } = useLocation();

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 safe-area-bottom"
      style={{ background: 'rgba(255,253,249,0.97)', backdropFilter: 'blur(12px)', borderTop: '1px solid #DFC98A' }}>
      <div className="flex items-center justify-around px-2 py-2 max-w-lg mx-auto">
        {navItems.map(({ path, icon: Icon, label }) => {
          const active = pathname === path;
          return (
            <Link
              key={path}
              to={path}
              className="flex flex-col items-center gap-0.5 px-3 py-1.5 rounded-xl transition-all duration-200 min-w-[60px]"
              style={{
                color: active ? '#C9A84C' : '#7A6652',
                background: active ? 'rgba(201,168,76,0.1)' : 'transparent',
              }}
            >
              <Icon size={22} strokeWidth={active ? 2 : 1.5} />
              <span className="text-[10px] font-medium tracking-wide" style={{ fontFamily: 'Lato, sans-serif' }}>
                {label}
              </span>
              {active && (
                <span className="w-1 h-1 rounded-full" style={{ background: '#C9A84C' }} />
              )}
            </Link>
          );
        })}
      </div>
      {/* Safe area spacer for iPhone */}
      <div className="h-safe-area-inset-bottom" />
    </nav>
  );
}
