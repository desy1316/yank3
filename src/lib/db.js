import { createClient } from "@supabase/supabase-js";
const URI = import.meta.env.VITE_SUPABASE_URL
const ANON = import.meta.env.VITE_SUPABASE_ANON_KEY

export const supabase = createClient(URI, ANON)