import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Loader2, Lock } from 'lucide-react';
import { toast } from 'sonner';
import { supabase } from '@/lib/supabaseClient';
import { SitePage } from '@/components/site/primitives';
import { Field, TextInput, primaryButton } from '@/components/admin/ui';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) navigate('/admin');
    });
  }, [navigate]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
      // useAdminAuth (en AdminLayout) verifica el rol y redirige
      navigate('/admin');
    } catch (error: any) {
      toast.error(error.message || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  return (
    <SitePage>
      <div className="relative min-h-screen flex items-center justify-center px-margin-mobile py-space-xl overflow-hidden">
        <div className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary-container/15 rounded-full blur-3xl" />
        <div className="relative w-full max-w-md bg-surface-container-low/90 backdrop-blur-xl border border-white/[0.07] rounded-3xl p-space-lg md:p-space-xl shadow-2xl">
          <div className="flex flex-col items-center text-center mb-space-lg">
            <img src="/lovable-uploads/logolabora.webp" alt="Labora" className="h-8 w-auto object-contain mb-space-md" />
            <span className="inline-flex items-center gap-1.5 text-badge-caps uppercase text-on-surface-variant border border-white/10 rounded-full px-2.5 py-1">
              <Lock className="w-3 h-3 text-labora-neon" /> Panel de administración
            </span>
            <h1 className="text-headline-lg text-on-surface normal-case mt-space-sm">Ingresa al panel</h1>
            <p className="text-body-sm text-on-surface-variant mt-1">Acceso restringido al equipo de Labora.</p>
          </div>

          <form onSubmit={handleLogin} className="flex flex-col gap-space-md">
            <Field label="Email">
              <TextInput type="email" autoComplete="email" value={email} onChange={(e) => setEmail(e.target.value)} required placeholder="tu@email.com" />
            </Field>
            <Field label="Contraseña">
              <TextInput type="password" autoComplete="current-password" value={password} onChange={(e) => setPassword(e.target.value)} required placeholder="••••••••" />
            </Field>
            <button type="submit" disabled={loading} className={`${primaryButton} w-full py-space-sm mt-space-xs`}>
              {loading && <Loader2 className="w-4 h-4 animate-spin" />}
              {loading ? 'Ingresando…' : 'Ingresar'}
            </button>
          </form>
        </div>
      </div>
    </SitePage>
  );
}
