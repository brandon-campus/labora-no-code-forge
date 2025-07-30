import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star, Users, BookOpen } from 'lucide-react';
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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden p-4">
      <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-labora-neon/20 animate-fade-in-up">
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <img src="/lovable-uploads/logolabora.webp" alt="Labora Curso" className="h-10 sm:h-12 mb-2" />
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 text-center">Bienvenido a tu viaje con Inteligencia Artificial</h1>
          <p className="text-labora-neon font-semibold mb-2 text-sm sm:text-base text-center">Aprende IA y No Code</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <Label htmlFor="email" className="text-gray-200 text-sm sm:text-base">Email</Label>
            <Input 
              id="email" 
              type="email" 
              autoComplete="email" 
              required 
              className="mt-1 h-10 sm:h-11 text-sm sm:text-base" 
              value={correo} 
              onChange={e => setCorreo(e.target.value)} 
            />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-200 text-sm sm:text-base">Contraseña</Label>
            <Input 
              id="password" 
              type="password" 
              autoComplete="current-password" 
              required 
              className="mt-1 h-10 sm:h-11 text-sm sm:text-base" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
            />
          </div>
          {error && <div className="text-red-400 text-xs sm:text-sm">{error}</div>}
          <Button
            type="submit"
            className="w-full bg-labora-neon text-gray-900 hover:bg-labora-neon/80 font-bold shadow-neon-glow mt-2 h-11 sm:h-12 text-sm sm:text-base"
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Entrar al campus'}
          </Button>
        </form>
        <div className="mt-4 sm:mt-6 text-center text-gray-300 text-xs sm:text-sm">
          ¿No tienes cuenta?{' '}
          <a
            href="/registro-curso"
            className="text-labora-neon font-semibold underline hover:text-labora-neon/80"
          >
            Regístrate aquí
          </a>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2 text-gray-400 text-xs">
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-labora-neon" />
            <span className="text-xs">Acceso a contenido exclusivo</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-labora-neon" />
            <span className="text-xs">Proyectos prácticos y mentoría</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginCurso; 