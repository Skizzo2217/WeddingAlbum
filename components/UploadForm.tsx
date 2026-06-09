"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";
import imageCompression from "browser-image-compression";

export default function UploadForm() {
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    
    setLoading(true);
    
    // 🔥 COMPRESSIONE + CONVERSIONE IN WEBP
    const options = {
      maxSizeMB: 0.7,              // ~700 KB
      maxWidthOrHeight: 1600,      // ridimensiona lato lungo
      useWebWorker: true,
      initialQuality: 0.8,
      fileType: "image/webp"       // 👉 forza WebP
    };
  
    const compressedFile = await imageCompression(file, options);
  
    // rinomina file in .webp
    const fileName = Date.now() + "-" + file.name.replace(/\.[^/.]+$/, "") + ".webp";
  
    // 1) UPLOAD FILE COMPRESSO
    const { data: uploadData, error: uploadError } =
      await supabase.storage
        .from("photos")
        .upload(`Upload/${fileName}`, compressedFile);
  
    if (uploadError) {
      alert(uploadError.message);
      setLoading(false);
      return;
    }
  
    // 2) GET PUBLIC URL
    const { data: urlData } =
      supabase.storage
        .from("photos")
        .getPublicUrl(`Upload/${fileName}`);
  
    // 3) INSERT INTO DATABASE
    await supabase.from("photos").insert([
      {
        image_url: urlData.publicUrl,
        uploader_name: name,
        approved: false
      }
    ]);
  
    alert("Foto caricata!");
    setLoading(false);
  }


  return (
    <div>
      <input
        type="text"
        placeholder="Il tuo nome"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br /><br />

      <input
        type="file"
        accept="image/*"
        capture="environment"
        onChange={handleUpload}
      />

      {loading && <p>Caricamento...</p>}
    </div>
  );
}
