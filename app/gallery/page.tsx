"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

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
        //.eq("approved", true)
        .order("created_at", { ascending: false });

      if (!error) setPhotos(data);
    }

    load();
  }, []);

  return (
    <main className="gallery-container">
      <h1 className="gallery-title">Gallery</h1>

      {/* TASTO SCARICA TUTTE */}
      <button
        className="download-all"
        onClick={() => {
          photos.forEach((p) => window.open(p.image_url, "_blank"));
        }}
      >
        Scarica tutte 📥
      </button>

      {/* GRID */}
      <div className="gallery-grid">
        {photos.map((photo) => (
          <div
            key={photo.id}
            className="polaroid-card fall-in"
            onClick={() => setSelected(photo)}
          >
            <div className="polaroid-inner">
              <img src={photo.image_url} className="polaroid-img" />
              <p className="polaroid-text">{photo.uploader_name}</p>
            </div>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal flash" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <img src={selected.image_url} className="modal-img" />
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
