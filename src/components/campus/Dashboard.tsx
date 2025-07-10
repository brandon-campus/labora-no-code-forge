import React, { useEffect, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Play, BookOpen, Briefcase, Users, HelpCircle, User, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const onboardingSteps = [
  {
    title: '¡Bienvenido/a a Labora!',
    content: (name: string, cohort: string) => (
      <>
        <h2 className="text-2xl font-bold mb-2">¡Hola, {name}!</h2>
        <p className="mb-4">Formas parte de la <span className="text-labora-neon font-semibold">cohorte #{cohort}</span>.</p>
        <p className="text-gray-300">Estamos felices de acompañarte en tu camino de IA y No-Code. Aquí aprenderás, crearás y conectarás con una comunidad increíble.</p>
      </>
    )
  },
  {
    title: 'Tu cohorte',
    content: (_name: string, cohort: string) => (
      <>
        <h2 className="text-xl font-bold mb-2">Sobre la cohorte #{cohort}</h2>
        <ul className="mb-4 list-disc pl-5 text-gray-300">
          <li>Inicio: 17 de julio 2025</li>
          <li>Demo Day: 13 de agosto 2025</li>
          <li>Mentor: Equipo Labora</li>
        </ul>
        <a href="https://wa.me/5491138142899" target="_blank" rel="noopener noreferrer" className="text-labora-neon underline">Unirme al grupo de WhatsApp</a>
      </>
    )
  },
  {
    title: 'Primeros pasos',
    content: () => (
      <>
        <h2 className="text-xl font-bold mb-2">Checklist inicial</h2>
        <ul className="mb-4 list-disc pl-5 text-gray-300">
          <li>Completa tu perfil</li>
          <li>Lee el reglamento</li>
          <li>Accede al primer módulo</li>
          <li>Preséntate en la comunidad</li>
        </ul>
      </>
    )
  },
  {
    title: '¡Listo para comenzar!',
    content: () => (
      <>
        <h2 className="text-2xl font-bold mb-2">¡Ya formas parte de Labora!</h2>
        <p className="mb-4">Haz completado el onboarding. Ahora puedes acceder a todos los recursos del campus.</p>
      </>
    )
  }
];

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

  const updateOnboarding = async () => {
    setLoading(true);
    const { data: { user } } = await supabase.auth.getUser();
    if (user) {
      await supabase
        .from('profiles')
        .update({ onboarding_done: true })
        .eq('id', user.id);
      // Refrescar perfil
      const { data } = await supabase
        .from('profiles')
        .select('*')
        .eq('id', user.id)
        .single();
      setProfile(data);
    }
    setLoading(false);
  };

  return {
    profile,
    loading,
    updateOnboarding,
  };
};

const dashboardCards = [
  {
    key: 'welcome',
    title: 'Empezá por aquí',
    description: 'Kit de bienvenida, video inicial y accesos clave.',
    icon: Play,
    color: 'bg-labora-neon text-gray-900',
    action: 'welcome',
  },
  {
    key: 'modules',
    title: 'Módulos',
    description: 'Accede a los módulos y tu progreso.',
    icon: BookOpen,
    color: 'bg-labora-red text-white',
    action: 'modules',
  },
  {
    key: 'project',
    title: 'Mi Proyecto',
    description: 'Sube avances y recibe feedback.',
    icon: Briefcase,
    color: 'bg-labora-neon text-gray-900',
    action: 'project',
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
    key: 'support',
    title: 'Soporte',
    description: 'Accede a ayuda y mentoría.',
    icon: HelpCircle,
    color: 'bg-labora-red text-white',
    action: 'support',
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
  const { profile, loading, updateOnboarding } = useProfile();
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  if (loading) {
    return <div className="p-8 text-white">Cargando...</div>;
  }

  const userName = profile?.full_name || 'Alumno';
  const userCohort = profile?.cohorte || '13';
  const onboardingDone = profile?.onboarding_done;

  const nextStep = async () => {
    if (onboardingStep < onboardingSteps.length - 1) {
      setOnboardingStep(onboardingStep + 1);
    } else {
      await updateOnboarding();
    }
  };
  const prevStep = () => {
    if (onboardingStep > 0) setOnboardingStep(onboardingStep - 1);
  };

  if (!onboardingDone) {
    const step = onboardingSteps[onboardingStep];
  return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
        <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-md w-full animate-fade-in-up">
          <h1 className="text-labora-neon text-lg font-bold mb-4">{step.title}</h1>
          <div className="mb-6">
            {step.content(userName, userCohort)}
          </div>
          <div className="flex justify-between">
            <button
              onClick={prevStep}
              disabled={onboardingStep === 0}
              className="px-4 py-2 rounded bg-gray-800 text-gray-300 disabled:opacity-50"
            >
              Atrás
            </button>
            <button
              onClick={nextStep}
              className="px-4 py-2 rounded bg-labora-neon text-gray-900 font-bold"
            >
              {onboardingStep === onboardingSteps.length - 1 ? 'Ir al Dashboard' : 'Siguiente'}
            </button>
          </div>
        </div>
      </div>
    );
  }

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
                if (card.action === 'welcome') setShowWelcome(true);
                else if (onNavigate) onNavigate(card.action);
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
      {/* Modal Kit de bienvenida */}
      {showWelcome && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70">
          <div className="bg-gray-900 rounded-2xl shadow-2xl p-8 max-w-lg w-full animate-fade-in-up relative">
            <button className="absolute top-4 right-4 text-gray-400 hover:text-white" onClick={() => setShowWelcome(false)}>
              ×
            </button>
            <h2 className="text-xl font-bold text-labora-neon mb-4">Kit de bienvenida</h2>
            <div className="mb-4">
              <p className="text-white mb-2">¡Bienvenido/a a la cohorte #{userCohort}!</p>
              <p className="text-gray-300 mb-4">Aquí tienes el video inicial y los accesos clave para comenzar tu experiencia en Labora.</p>
              <div className="aspect-video bg-gray-800 rounded-lg mb-4 flex items-center justify-center">
                <iframe
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  className="w-full h-full rounded-lg"
                  allowFullScreen
                  title="Video de bienvenida"
                />
              </div>
              <ul className="space-y-2">
                <li><a href="#" className="text-labora-neon underline">Guía del alumno</a></li>
                <li><a href="#" className="text-labora-neon underline">Acceso a grupo de WhatsApp</a></li>
                <li><a href="#" className="text-labora-neon underline">Reglamento del Bootcamp</a></li>
              </ul>
            </div>
            <Button onClick={() => setShowWelcome(false)} className="bg-labora-neon text-gray-900 font-bold w-full mt-4">Cerrar</Button>
          </div>
        </div>
      )}
    </div>
  );
};

export { Dashboard };