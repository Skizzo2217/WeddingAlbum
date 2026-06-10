import { Helmet } from '@dr.pogodin/react-helmet';
import { type ReactElement } from 'react';
import { ScrollRestoration } from 'react-router-dom';

import Website from '@/layout/Website';

/**
 * Root layout — fullscreen mobile wedding app.
 * No header/footer: navigation is handled by BottomNav inside each page.
 */
interface RootLayoutProps {
  children: ReactElement;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <Website>
      <Helmet>
        <title>Marco &amp; Vanessa — Il Nostro Giorno Speciale</title>
        <meta name="description" content="Condividi i tuoi ricordi del matrimonio di Marco e Vanessa. Scatta foto con il photobooth, carica i tuoi scatti e sfoglia l'album condiviso." />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no" />
        <meta name="theme-color" content="#FAF7F2" />
        <meta property="og:title" content="Marco &amp; Vanessa — Il Nostro Giorno Speciale" />
        <meta property="og:description" content="Condividi i tuoi ricordi del matrimonio" />
        <meta property="og:type" content="website" />
      </Helmet>
      <ScrollRestoration />
      {children}
    </Website>
  );
}
