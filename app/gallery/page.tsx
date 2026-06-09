"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import Image from "next/image";

type Photo = {
  id: number;
  image_url: string;
  uploader_name: string;
  created_at: string;
};

export default function GalleryPage() {
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [selected, setSelected] = useState<Photo | null>(null);

  useEffect(() => {
    async function load() {
      const { data, error } = await supabase
        .from("photos")
        .select("*")
        .order("created_at", { ascending: false });

      if (!error) setPhotos(data);
    }

    load();
  }, []);

  return (
    <main className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>

      <button
        className="download-all"
        onClick={() => {
          photos.forEach((p) => window.open(p.image_url, "_blank"));
        }}
      >
        Scarica tutte 📥
      </button>

      <div className="gallery-grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="polaroid-card fall-in"
            onClick={() => setSelected(photo)}
          >
            <div className="polaroid-inner">
              <Image
                src={photo.image_url}
                alt={photo.uploader_name}
                width={600}
                height={800}
                className="polaroid-img"
                loading="lazy"
                quality={85}
              />
              <p className="polaroid-text">{photo.uploader_name}</p>
            </div>
          </div>
        ))}
      </div>

      {selected && (
        <div className="modal flash" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <Image
              src={selected.image_url}
              alt={selected.uploader_name}
              width={1200}
              height={1600}
              className="modal-img"
              quality={90}
            />
            <p className="modal-name">{selected.uploader_name}</p>

            <button
              className="modal-download"
              onClick={() => window.open(selected.image_url, "_blank")}
            >
              Scarica foto 📥
            </button>

            <button className="modal-close" onClick={() => setSelected(null)}>
              Chiudi ✖
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
