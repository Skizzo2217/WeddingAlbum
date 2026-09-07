import { useEffect, useRef } from 'react';

declare global {
  interface Window {
    turnstile?: {
      render: (container: HTMLElement, options: Record<string, unknown>) => string;
      remove: (widgetId: string) => void;
    };
  }
}

const TURNSTILE_SITE_KEY = '0x4AAAAAAEqms8_1HcdsF5gV';
const SCRIPT_ID = 'cloudflare-turnstile-script';

function loadTurnstile(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  const existing = document.getElementById(SCRIPT_ID) as HTMLScriptElement | null;
  if (existing) {
    return new Promise((resolve, reject) => {
      existing.addEventListener('load', () => resolve(), { once: true });
      existing.addEventListener('error', () => reject(new Error('Impossibile caricare il controllo di sicurezza.')), { once: true });
    });
  }

  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.id = SCRIPT_ID;
    script.src = 'https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit';
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error('Impossibile caricare il controllo di sicurezza.'));
    document.head.appendChild(script);
  });
}

export default function Turnstile({ onToken }: { onToken: (token: string | null) => void }) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let widgetId: string | undefined;
    let disposed = false;

    loadTurnstile()
      .then(() => {
        if (disposed || !containerRef.current || !window.turnstile) return;
        widgetId = window.turnstile.render(containerRef.current, {
          sitekey: TURNSTILE_SITE_KEY,
          theme: 'light',
          callback: (token: string) => onToken(token),
          'expired-callback': () => onToken(null),
          'error-callback': () => onToken(null),
        });
      })
      .catch(() => onToken(null));

    return () => {
      disposed = true;
      if (widgetId && window.turnstile) window.turnstile.remove(widgetId);
    };
  }, [onToken]);

  return <div ref={containerRef} className="flex justify-center" />;
}
