"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function GalleryGrid() {

  const [photos, setPhotos] =
    useState<any[]>([]);

  useEffect(() => {
    loadPhotos();
  }, []);

  async function loadPhotos() {

    const { data } =
      await supabase
        .from("photos")
        .select("*")
        .eq("approved", true)
        .order(
          "created_at",
          { ascending: false }
        );

    setPhotos(data || []);
  }

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns:
          "repeat(auto-fill,minmax(250px,1fr))",
        gap: "20px"
      }}
    >
      {photos.map((photo) => (
        <img
          key={photo.id}
          src={photo.image_url}
          alt=""
          style={{
            width: "100%",
            borderRadius: "12px"
          }}
        />
      ))}
    </div>
  );
}