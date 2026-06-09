import { supabase } from "@/lib/supabase";

export default async function GalleryPage() {
  const { data: photos, error } = await supabase
    .from("photos")
    .select("*")
    .eq("approved", true)
    .order("created_at", { ascending: false });

  if (error) {
    console.error(error);
    return <p>Errore nel caricamento della gallery</p>;
  }

  return (
    <main className="container">
      <h1>Gallery</h1>

      <div className="grid">
        {photos?.map((photo) => (
          <div key={photo.id} className="card">
            <img src={photo.image_url} alt="foto" />
            <p className="name">{photo.uploader_name}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
