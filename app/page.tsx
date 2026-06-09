import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-wrapper">

      <div className="gold-frame">

        <h1 className="title">Marco ❤️ Vanessa</h1>
        <p className="subtitle">12 Settembre 2026</p>

        <p className="intro">
          Benvenuti nel nostro album fotografico.
        </p>

        <div className="buttons">
          <Link href="/upload" className="home-btn primary">
            📸 Carica Foto
          </Link>

          <Link href="/gallery" className="home-btn secondary">
            🖼️ Galleria
          </Link>
        </div>

      </div>

    </main>
  );
}
