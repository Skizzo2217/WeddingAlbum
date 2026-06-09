import "./globals.css";

export const metadata = {
  title: "Marco ❤️ Vanessa – Wedding 2026",
  description: "Gallery fotografica del matrimonio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="it">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&display=swap"
          rel="stylesheet"
        />
        <link href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap" rel="stylesheet"/>

      </head>

      <body className="wedding-layout">
        {children}
      </body>
    </html>
  );
}
