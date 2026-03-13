import { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export interface Profile {
    id: string;
    full_name: string;
    avatar_url?: string;
    cohorte: string;
    role: 'student' | 'admin';
    email?: string;
}

export function useProfile() {
    const [profile, setProfile] = useState<Profile | null>(null);
    const [loading, setLoading] = useState(true);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const { data: { user } } = await supabase.auth.getUser();

                if (user) {
                    const { data, error } = await supabase
                        .from('profiles')
                        .select('*')
                        .eq('id', user.id)
                        .single();

                    if (data) {
                        setProfile({ ...data, email: user.email });
                        setIsAdmin(data.role === 'admin');
                    }
                }
            } catch (error) {
                console.error('Error fetching profile:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchProfile();
    }, []);

    return { profile, loading, isAdmin };
}
