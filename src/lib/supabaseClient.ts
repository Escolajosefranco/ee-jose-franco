import { createClient } from '@supabase/supabase-js';

export const supabaseUrl = 'https://ihzxniwhdpvuuqaauwsy.supabase.co'; // use o seu correto aqui
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImloenhuaXdoZHB2dXVxYWF1d3N5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDM2MjQ4NTMsImV4cCI6MjA1OTIwMDg1M30.53HcSAhIUYm67biTzXT-mEtImvlrkR188Xeot79GfV4'; // substitua pela sua chave pública
export const supabase = createClient(supabaseUrl, supabaseKey);

