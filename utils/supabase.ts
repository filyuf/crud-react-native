
import 'react-native-url-polyfill/auto'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { createClient, processLock } from '@supabase/supabase-js'

export const supabase = createClient(
  "https://xqgjunvwnrvdbmolsypl.supabase.co",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhxZ2p1bnZ3bnJ2ZGJtb2xzeXBsIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTU4MjAyNDAsImV4cCI6MjA3MTM5NjI0MH0.TyVKnRu1IcViqcWInhOATrxfCB8lQtqEGLepsoHF8x4",
  {
    auth: {
      storage: AsyncStorage,
      autoRefreshToken: true,
      persistSession: true,
      detectSessionInUrl: false,
      lock: processLock,
    },
  })
        