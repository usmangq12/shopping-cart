import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://zpbgglpfkebfpkkoxwen.supabase.co"
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpwYmdnbHBma2ViZnBra294d2VuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjA0MjYxMDQsImV4cCI6MjAzNjAwMjEwNH0.6gIycI6uDCob1-kh51i4iO4pwt4CkgelULn_sOTLKZo"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})