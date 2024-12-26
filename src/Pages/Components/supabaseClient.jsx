import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://vgknjvtoucqjnivndasn.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZna25qdnRvdWNxam5pdm5kYXNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzA0NDQ4NTQsImV4cCI6MjA0NjAyMDg1NH0.kPCgvtUPSqGsmkl8U2tCx326r652CVIEINns8cSpJT8';

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;