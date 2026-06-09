import { createClient } from "@supabase/supabase-js"

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.SUPABASE_SERVICE_ROLE_KEY
)

export async function POST(req) {
  const form = await req.formData()
  const file = form.get("file")

  const fileName = `uploads/${Date.now()}-${file.name}`

  const { data, error } = await supabase.storage
    .from("photos")
    .upload(fileName, file)

  return Response.json({ data, error })
}
