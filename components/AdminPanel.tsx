"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";

export default function AdminPanel() {

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
        .eq("approved", false);

    setPhotos(data || []);
  }

  async function approve(id: number) {

    await supabase
      .from("photos")
      .update({
        approved: true
      })
      .eq("id", id);

    loadPhotos();
  }

  return (
    <div>

      {photos.map((photo) => (

        <div
          key={photo.id}
          style={{
            marginBottom: "30px"
          }}
        >
          <img
            src={photo.image_url}
            width={250}
            alt=""
          />

          <br />

          <button
            onClick={() =>
              approve(photo.id)
            }
          >
            Approva
          </button>

        </div>

      ))}

    </div>
  );
}