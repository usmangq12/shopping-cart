import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

console.log("Supabase URL: ", process.env.EXPO_PUBLIC_SUPABASE_URL,process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY);
const supabaseurl = process.env.EXPO_PUBLIC_SUPABASE_URL;
const supabaseanonkey  = process.env.EXPO_PUBLIC_SUPABASE_ANON_KEY
export const supabase = createClient(supabaseurl as string , supabaseanonkey as string, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})