import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';

// El acceso al panel lo decide profiles.role = 'admin' (mismo criterio que las políticas RLS vía is_admin()).
async function isAdmin(userId: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', userId)
    .maybeSingle();
  return !error && data?.role === 'admin';
}

export function useAdminAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleSession = async (session: any) => {
      if (!session) {
        setUser(null);
        if (location.pathname !== '/admin/login') {
          navigate('/admin/login');
        }
      } else if (await isAdmin(session.user.id)) {
        setUser(session.user);
        if (location.pathname === '/admin/login') {
          navigate('/admin');
        }
      } else {
        // Log out unauthorized user
        await supabase.auth.signOut();
        navigate('/admin/login');
      }
      setLoading(false);
    };

    supabase.auth.getSession().then(({ data: { session } }) => handleSession(session));

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      // Diferido para no llamar a Supabase dentro del callback de auth (evita deadlocks del cliente)
      setTimeout(() => handleSession(session), 0);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, location]);

  return { user, loading };
}
