import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const codigosPais = [
  { code: '+54', name: 'Argentina' },
  { code: '+52', name: 'México' },
  { code: '+57', name: 'Colombia' },
  { code: '+56', name: 'Chile' },
  { code: '+51', name: 'Perú' },
  { code: '+34', name: 'España' },
  { code: '+598', name: 'Uruguay' },
  { code: '+595', name: 'Paraguay' },
  { code: '+591', name: 'Bolivia' },
  { code: '+593', name: 'Ecuador' },
  { code: '+58', name: 'Venezuela' },
  { code: '+1', name: 'USA' },
  { code: '+55', name: 'Brasil' },
];

const RegistroCurso = () => {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [wsp, setWsp] = useState('');
  const [codigoPais, setCodigoPais] = useState(codigosPais[0].code);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!nombre || !correo || !wsp) {
      setError('Por favor completa todos los campos.');
      return;
    }
    setLoading(true);
    // Registro rápido en Supabase Auth y tabla de leads
    const { data, error: signUpError } = await supabase.auth.signUp({
      email: correo,
      password: Math.random().toString(36).slice(-8),
      options: {
        data: { nombre, wsp: `${codigoPais}${wsp}` }
      }
    });
    if (signUpError) {
      setError('El correo ya está registrado o hubo un error.');
      setLoading(false);
      return;
    }
    // Guardar en tabla de leads (opcional)
    await supabase.from('leads_curso_on_demand').insert({
      nombre,
      correo,
      wsp: `${codigoPais}${wsp}`,
      created_at: new Date().toISOString()
    });
    // Crear perfil de usuario en perfiles_curso_on_demand
    const user = data.user;
    if (user) {
      await supabase.from('perfiles_curso_on_demand').insert({
        user_id: user.id,
        nombre,
        correo,
        wsp: `${codigoPais}${wsp}`,
        created_at: new Date().toISOString()
      });
    }
    setLoading(false);
    window.location.href = '/onboarding-curso';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-labora-dark">Regístrate para empezar</h1>
        <input
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          placeholder="Nombre completo"
          value={nombre}
          onChange={e => setNombre(e.target.value)}
        />
        <input
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          placeholder="Correo electrónico"
          type="email"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
        />
        <div className="flex gap-2 mb-4">
          <select
            value={codigoPais}
            onChange={e => setCodigoPais(e.target.value)}
            className="border rounded-lg px-2 py-2 bg-gray-100 text-gray-800 font-medium"
            style={{ minWidth: 90 }}
          >
            {codigosPais.map(p => (
              <option key={p.code} value={p.code}>{p.code} {p.name}</option>
            ))}
          </select>
          <input
            className="flex-1 px-4 py-2 border rounded-lg"
            placeholder="WhatsApp (sin código de país)"
            value={wsp}
            onChange={e => setWsp(e.target.value)}
          />
        </div>
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-labora-neon text-black font-bold py-3 rounded-lg hover:bg-labora-neon/80 transition"
          disabled={loading}
        >
          {loading ? 'Registrando...' : 'Quiero empezar'}
        </button>
        <div className="mt-6 text-center">
          <a href="/login-curso" className="text-labora-neon font-semibold hover:underline text-base">¿Ya tienes cuenta? Inicia sesión</a>
        </div>
      </form>
    </div>
  );
};

export default RegistroCurso; 