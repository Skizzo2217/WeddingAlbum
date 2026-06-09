"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

export default function UploadForm() {

  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    setLoading(true);

    const fileName = Date.now() + "-" + file.name;

    // 1) UPLOAD FILE
    const { data: uploadData, error: uploadError } =
      await supabase.storage
        .from("photos")
        .upload(`Upload/${fileName}`, file);

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
    const { data: insertData, error: insertError } =
      await supabase
        .from("photos")
        .insert([
          {
            image_url: urlData.publicUrl,
            uploader_name: name,
            approved: false
          }
        ]);

    console.log("INSERT ERROR:", insertError);
    console.log("INSERT DATA:", insertData);

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
