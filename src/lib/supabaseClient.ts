import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://yijnicsebrihlzthhyzs.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inlpam5pY3NlYnJpaGx6dGhoeXpzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTIxMjk1NjAsImV4cCI6MjA2NzcwNTU2MH0.KXubxok8ajQJXIc9AKw5TTtEZ0Ny8UJyHgiDmo9xnJQ';

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Crea un perfil en la tabla 'profiles' si no existe
export async function ensureProfile(user) {
  if (!user) return;
  const { data, error } = await supabase
    .from('profiles')
    .select('id')
    .eq('id', user.id)
    .single();
  if (!data) {
    // Puedes personalizar cohorte y nombre según tu flujo
    await supabase.from('profiles').insert({
      id: user.id,
      full_name: user.user_metadata?.full_name || user.email,
      cohorte: user.user_metadata?.cohorte || '13'
    });
  }
}