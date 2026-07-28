import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) {
        navigate('/admin');
      }
    });
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;
      
      // On success, useAdminAuth hook in AdminLayout will handle authorized routing
      navigate('/admin');
    } catch (error: any) {
      toast.error(error.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
        <div className="absolute top-[20%] left-[20%] w-[500px] h-[500px] bg-labora-neon/10 rounded-full blur-[120px]"></div>
      </div>
      
      <div className="w-full max-w-md bg-gray-900/80 backdrop-blur-xl border border-gray-800 p-8 rounded-2xl shadow-2xl relative z-10">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-black text-white mb-2">
            LABORA <span className="text-labora-neon">ADMIN</span>
          </h1>
          <p className="text-gray-400">Acceso restringido al equipo</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-gray-300">Email</Label>
            <Input 
              id="email" 
              type="email" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required 
              className="bg-black/50 border-gray-700 text-white focus:border-labora-neon focus:ring-labora-neon"
              placeholder="tu@email.com"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="password" className="text-gray-300">Contraseña</Label>
            <Input 
              id="password" 
              type="password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required 
              className="bg-black/50 border-gray-700 text-white focus:border-labora-neon focus:ring-labora-neon"
              placeholder="••••••••"
            />
          </div>

          <Button 
            type="submit" 
            disabled={loading}
            className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-bold py-6 text-lg rounded-xl transition-all"
          >
            {loading ? 'Ingresando...' : 'Ingresar al panel'}
          </Button>
        </form>
      </div>
    </div>
  );
}
