import Link from "next/link";

export default function HomePage() {
  return (
    <main className="container">

      <h1>Marco ❤️ Vanessa</h1>

      <p>
        Benvenuti nel nostro album fotografico.
      </p>

      <Link
        href="/upload"
        className="button"
      >
        📸 Carica Foto
      </Link>

      <Link
        href="/gallery"
        className="button"
      >
        🖼️ Galleria
      </Link>

    </main>
  );
}