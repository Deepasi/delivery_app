import { createClient } from '@supabase/supabase-js'

const supabaseUrl: string = 'https://xmkefhhhsslwceuvjiwb.supabase.co'
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhta2VmaGhoc3Nsd2NldXZqaXdiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDI4ODI0NTEsImV4cCI6MjA1ODQ1ODQ1MX0.BTCUVzUKyIqGrWcEG1CRcNU_wm8N1ba3_szPktTpyh8'

export const supabase = createClient(supabaseUrl, supabaseKey)
