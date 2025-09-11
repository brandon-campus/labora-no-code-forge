import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { BookOpen, Users, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

// Hook para obtener y actualizar datos reales del perfil desde la tabla 'profiles'
const useProfile = () => {
  const [profile, setProfile] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfile = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        const { data, error } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', user.id)
          .single();
        setProfile(data);
      }
      setLoading(false);
    };
    fetchProfile();
  }, []);

  return {
    profile,
    loading,
  };
};

const dashboardCards = [
  {
    key: 'modules',
    title: 'Módulos',
    description: 'Accede a los módulos y tu progreso.',
    icon: BookOpen,
    color: 'bg-labora-red text-white',
    action: 'modules',
  },
  {
    key: 'community',
    title: 'Comunidad',
    description: 'Conecta con tu cohorte y mentores.',
    icon: Users,
    color: 'bg-gray-800 text-labora-neon',
    action: 'community',
  },
  {
    key: 'profile',
    title: 'Perfil',
    description: 'Edita tus datos y foto.',
    icon: User,
    color: 'bg-gray-800 text-labora-neon',
    action: 'profile',
  },
];

const Dashboard: React.FC<{ onNavigate?: (section: string) => void }> = ({ onNavigate }) => {
  const { profile, loading } = useProfile();

  if (loading) {
    return <div className="p-8 text-white">Cargando...</div>;
  }

  const userName = profile?.full_name || 'Alumno';
  const userCohort = profile?.cohorte || '13';

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-white mb-6">¡Bienvenido/a, {userName}!</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {dashboardCards.map(card => {
          const Icon = card.icon;
          return (
            <div
              key={card.key}
              className={`rounded-2xl shadow-xl p-6 flex flex-col items-start gap-4 cursor-pointer transform transition-all hover:scale-105 hover:shadow-2xl ${card.color}`}
              onClick={() => {
                if (onNavigate) onNavigate(card.action);
              }}
            >
              <div className="flex items-center gap-3 mb-2">
                <Icon className="h-8 w-8" />
                <span className="text-lg font-bold uppercase tracking-wide">{card.title}</span>
              </div>
              <p className="text-base opacity-80 mb-4">{card.description}</p>
              <Button variant="ghost" className="mt-auto flex items-center gap-2 text-sm text-inherit hover:bg-white/10">
                Ir <ArrowRight className="h-4 w-4" />
              </Button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export { Dashboard };