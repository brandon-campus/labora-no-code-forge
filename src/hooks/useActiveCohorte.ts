import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/lib/supabaseClient';

export function useActiveCohorte() {
  return useQuery({
    queryKey: ['active-cohorte'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('cohortes')
        .select('*')
        .eq('estado', 'activa')
        .single();

      if (error) {
        if (error.code === 'PGRST116') return null; // No active cohort
        throw error;
      }
      
      return data;
    },
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
  });
}
