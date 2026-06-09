"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPage() {
  const [photos, setPhotos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Carica tutte le foto (anche non approvate)
  async function loadPhotos() {
    const { data, error } = await supabase
      .from("photos")
      .select("*")
      .order("created_at", { ascending: false });

    if (!error) setPhotos(data || []);
    setLoading(false);
  }

  useEffect(() => {
    loadPhotos();
  }, []);

  // APPROVA FOTO
  async function approvePhoto(id: number) {
    await supabase
      .from("photos")
      .update({ approved: true })
      .eq("id", id);

    loadPhotos(); // aggiorna la lista
  }

  // ELIMINA FOTO
  async function deletePhoto(id: number) {
    await supabase
      .from("photos")
      .delete()
      .eq("id", id);

    loadPhotos(); // aggiorna la lista
  }

  async function deletePhotodef(id: number, imageUrl: string) {
  const filePath = imageUrl.split("/storage/v1/object/public/photos/")[1];


  await supabase.storage
    .from("photos")
    .remove([filePath]);

  await supabase
    .from("photos")
    .delete()
    .eq("id", id);

  loadPhotos();
}


  if (loading) return <p>Caricamento...</p>;

  return (
    <main className="container">
      <h1>Admin – Gestione Foto</h1>

      <div className="grid">
        {photos.map((photo) => (
          <div key={photo.id} className="card admin-card">
            <img src={photo.image_url} alt="foto" />

            <p className="name">{photo.uploader_name}</p>

            <p className="status">
              Stato:{" "}
              {photo.approved ? (
                <span className="approved">APPROVATA</span>
              ) : (
                <span className="pending">IN ATTESA</span>
              )}
            </p>

            <div className="actions">
                {!photo.approved && (
                    <button
                    className="approve-btn"
                    onClick={() => approvePhoto(photo.id)}
                    >
                    ✔ Approva
                    </button>
                )}

                <button
                    className="delete-btn"
                    onClick={() => deletePhoto(photo.id, photo.image_url)}
                >
                    ❌ Elimina
                </button>

                <button
                    className="delete-final-btn"
                    onClick={() => {
                    if (confirm("Vuoi davvero cancellare DEFINITIVAMENTE questa foto?")) {
                        deletePhotodef(photo.id, photo.image_url);
                    }
                    }}
                >
                    🗑 Cancella definitiva
                </button>
                </div>
          </div>
        ))}
      </div>
    </main>
  );
}
