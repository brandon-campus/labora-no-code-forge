import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Rocket, Users, ArrowRight } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

const opciones = [
  {
    key: 'proyecto',
    titulo: 'Tengo una idea y quiero desarrollar mi proyecto',
    descripcion: 'Accede a recursos y mentoría para lanzar tu propio producto con IA y No Code.',
    icon: Rocket
  },
  {
    key: 'clientes',
    titulo: 'Quiero hacer proyectos para clientes',
    descripcion: 'Aprende a crear soluciones y servicios para otros usando IA y No Code.',
    icon: Users
  }
];

const OnboardingCurso = () => {
  const [seleccion, setSeleccion] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleElegir = async (key: string) => {
    setSeleccion(key);
    setLoading(true);
    // Obtener usuario actual
    const { data: { user } } = await supabase.auth.getUser();
    if (!user) {
      setError('Debes iniciar sesión.');
      setLoading(false);
      return;
    }
    // Guardar elección en el perfil
    const { error: updateError } = await supabase.auth.updateUser({ data: { camino_ia: key } });
    if (updateError) {
      setError('Error al guardar tu elección.');
      setLoading(false);
      return;
    }
    setLoading(false);
    window.location.href = '/curso-campus';
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden p-4">
      <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-4xl">
        <div className="text-center mb-8 sm:mb-12">
          <img src="/lovable-uploads/logolabora.webp" alt="Labora Curso" className="h-10 sm:h-12 mx-auto mb-3 sm:mb-4" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-3 sm:mb-4">Elige tu camino con IA</h1>
          <p className="text-labora-neon font-semibold text-base sm:text-lg">¿Qué te gustaría lograr?</p>
        </div>
        <div className="flex flex-col md:flex-row gap-4 sm:gap-8 w-full">
          {opciones.map(op => {
            const Icon = op.icon;
            return (
              <button
                key={op.key}
                className={`flex-1 bg-white/10 backdrop-blur-lg border-2 border-labora-neon/30 rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-left shadow-2xl hover:scale-105 transition-all duration-300 hover:border-labora-neon/60 ${seleccion === op.key ? 'ring-4 ring-labora-neon/50 bg-labora-neon/10' : 'hover:bg-white/5'}`}
                onClick={() => handleElegir(op.key)}
                disabled={loading}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-labora-neon/20 rounded-full flex items-center justify-center mr-3 sm:mr-4">
                    <Icon className="h-5 w-5 sm:h-6 sm:w-6 text-labora-neon" />
                  </div>
                  <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-white leading-tight">{op.titulo}</h2>
                </div>
                <p className="text-gray-300 text-sm sm:text-lg leading-relaxed">{op.descripcion}</p>
                <div className="mt-4 sm:mt-6 flex items-center text-labora-neon font-semibold text-sm sm:text-base">
                  <span>Continuar</span>
                  <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
                </div>
              </button>
            );
          })}
        </div>
        {error && <div className="text-red-400 text-center mt-4 sm:mt-6 text-sm sm:text-base">{error}</div>}
      </div>
    </div>
  );
};

export default OnboardingCurso; 