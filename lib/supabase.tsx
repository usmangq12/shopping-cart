import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = "https://heopyhopiqxyxzynkipr.supabase.co/"
const supabaseAnonKey ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imhlb3B5aG9waXF4eXh6eW5raXByIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcyMDA5OTkyNCwiZXhwIjoyMDM1Njc1OTI0fQ.aP5W9BlC8ZD3NYlO9oSscBXVN9EeGzm7zRO6CdNtdh8"

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    storage: AsyncStorage,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
})