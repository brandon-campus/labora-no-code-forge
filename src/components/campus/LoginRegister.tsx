import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star, Users } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';

interface LoginRegisterProps {
  onAuth: () => void;
}

const LoginRegister: React.FC<LoginRegisterProps> = ({ onAuth }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password
    });
    if (error) {
      setError(error.message);
      setLoading(false);
      return;
    }
    onAuth();
    setLoading(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-md p-8 rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-labora-neon/20 animate-fade-in-up">
        <div className="flex flex-col items-center mb-8">
          <img src="/lovable-uploads/logolabora.webp" alt="Labora Campus" className="h-12 mb-2" />
          <h1 className="text-2xl font-bold text-white mb-1">Bienvenido al Campus</h1>
          <p className="text-labora-neon font-semibold mb-2">Crea, aprende y conecta</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-gray-200">Email</Label>
            <Input id="email" type="email" autoComplete="email" required className="mt-1" value={email} onChange={e => setEmail(e.target.value)} />
          </div>
          <div>
            <Label htmlFor="password" className="text-gray-200">Contraseña</Label>
            <Input id="password" type="password" autoComplete="current-password" required className="mt-1" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          {error && <div className="text-red-400 text-sm">{error}</div>}
          <Button
            type="submit"
            className="w-full bg-labora-neon text-gray-900 hover:bg-labora-neon/80 font-bold shadow-neon-glow mt-2"
            disabled={loading}
          >
            {loading ? 'Cargando...' : 'Entrar al campus'}
          </Button>
        </form>
        <div className="mt-6 text-center text-gray-300 text-sm">
          ¿No tienes cuenta?{' '}
          <a
            href="https://wa.me/5491138142899?text=Hola%20Labora%2C%20quiero%20solicitar%20mi%20acceso%20al%20campus"
            target="_blank"
            rel="noopener noreferrer"
            className="text-labora-neon font-semibold underline hover:text-labora-neon/80"
          >
            Solicítala al equipo de Labora
          </a>
        </div>
        <div className="mt-8 flex flex-col items-center gap-2 text-gray-400 text-xs">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 text-labora-neon" />
            <span>Acceso exclusivo para estudiantes y egresados</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-labora-neon" />
            <span>Comunidad, proyectos y mentoría</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginRegister; 