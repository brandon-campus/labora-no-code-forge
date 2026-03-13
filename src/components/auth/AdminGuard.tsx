import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useProfile } from '@/hooks/useProfile';
import { Loader2 } from 'lucide-react';

export default function AdminGuard({ children }: { children: React.ReactNode }) {
    const { profile, loading, isAdmin } = useProfile();
    const navigate = useNavigate();

    useEffect(() => {
        if (!loading) {
            if (!profile) {
                navigate('/login-curso');
            } else if (!isAdmin) {
                navigate('/campus');
            }
        }
    }, [profile, loading, isAdmin, navigate]);

    if (loading) {
        return (
            <div className="flex h-screen items-center justify-center bg-gray-900">
                <Loader2 className="h-8 w-8 animate-spin text-labora-neon" />
            </div>
        );
    }

    return isAdmin ? <>{children}</> : null;
}
