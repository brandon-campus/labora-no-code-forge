import { useEffect, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';

const ALLOWED_EMAILS = [
  'brandoncandia99@gmail.com',
  // TODO: Add Briguit's email here
];

export function useAdminAuth() {
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const checkAuth = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      
      if (!session) {
        setLoading(false);
        if (location.pathname !== '/admin/login') {
          navigate('/admin/login');
        }
        return;
      }

      const email = session.user.email;
      if (email && ALLOWED_EMAILS.includes(email)) {
        setUser(session.user);
      } else {
        // Log out unauthorized user
        await supabase.auth.signOut();
        navigate('/admin/login');
      }
      setLoading(false);
    };

    checkAuth();

    const { data: { subscription } } = supabase.auth.onAuthStateChange(async (_event, session) => {
      if (!session) {
        setUser(null);
        if (location.pathname !== '/admin/login') {
          navigate('/admin/login');
        }
      } else {
        const email = session.user.email;
        if (email && ALLOWED_EMAILS.includes(email)) {
          setUser(session.user);
          if (location.pathname === '/admin/login') {
            navigate('/admin');
          }
        } else {
          await supabase.auth.signOut();
          navigate('/admin/login');
        }
      }
      setLoading(false);
    });

    return () => {
      subscription.unsubscribe();
    };
  }, [navigate, location]);

  return { user, loading };
}
