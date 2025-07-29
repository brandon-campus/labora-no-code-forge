import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const opciones = [
  {
    key: 'proyecto',
    titulo: 'Tengo una idea y quiero desarrollar mi proyecto',
    descripcion: 'Accede a recursos y mentoría para lanzar tu propio producto con IA y No Code.'
  },
  {
    key: 'clientes',
    titulo: 'Quiero hacer proyectos para clientes',
    descripcion: 'Aprende a crear soluciones y servicios para otros usando IA y No Code.'
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
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0A0A0A] px-4">
      <h1 className="text-3xl font-bold text-white mb-8">Elige tu camino con IA</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full max-w-3xl">
        {opciones.map(op => (
          <button
            key={op.key}
            className={`flex-1 bg-[#101A2C] border-2 border-labora-neon rounded-2xl p-8 text-left shadow-lg hover:scale-105 transition-transform ${seleccion === op.key ? 'ring-4 ring-labora-neon' : ''}`}
            onClick={() => handleElegir(op.key)}
            disabled={loading}
          >
            <h2 className="text-2xl font-bold text-labora-neon mb-2">{op.titulo}</h2>
            <p className="text-gray-200 text-lg">{op.descripcion}</p>
          </button>
        ))}
      </div>
      {error && <div className="text-red-500 text-sm mt-4">{error}</div>}
    </div>
  );
};

export default OnboardingCurso; 