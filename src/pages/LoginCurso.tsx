import React, { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const LoginCurso = () => {
  const [correo, setCorreo] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setLoading(true);
    const { error: loginError } = await supabase.auth.signInWithPassword({
      email: correo,
      password
    });
    setLoading(false);
    if (loginError) {
      setError('Correo o contraseña incorrectos.');
      return;
    }
    window.location.href = '/curso-campus';
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A]">
      <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md">
        <h1 className="text-2xl font-bold mb-6 text-labora-dark">Inicia sesión</h1>
        <input
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          placeholder="Correo electrónico"
          type="email"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
        />
        <input
          className="w-full mb-4 px-4 py-2 border rounded-lg"
          placeholder="Contraseña"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        {error && <div className="text-red-500 text-sm mb-2">{error}</div>}
        <button
          type="submit"
          className="w-full bg-labora-neon text-black font-bold py-3 rounded-lg hover:bg-labora-neon/80 transition"
          disabled={loading}
        >
          {loading ? 'Ingresando...' : 'Iniciar sesión'}
        </button>
        <div className="mt-6 text-center">
          <a href="/registro-curso" className="text-labora-neon font-semibold hover:underline text-base">¿No tienes cuenta? Regístrate</a>
        </div>
      </form>
    </div>
  );
};

export default LoginCurso; 