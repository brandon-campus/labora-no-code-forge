import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Star, Users, BookOpen, ArrowRight, Eye, EyeOff } from 'lucide-react';
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
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [wsp, setWsp] = useState('');
  const [codigoPais, setCodigoPais] = useState(codigosPais[0].code);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validaciones
    if (!nombre || !correo || !password || !wsp) {
      setError('Por favor completa todos los campos.');
      return;
    }

    if (password.length < 6) {
      setError('La contraseña debe tener al menos 6 caracteres.');
      return;
    }

    if (password !== confirmPassword) {
      setError('Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Registro en Supabase Auth
      const { data, error: signUpError } = await supabase.auth.signUp({
        email: correo,
        password: password,
        options: {
          data: { nombre, wsp: `${codigoPais}${wsp}` }
        }
      });

      if (signUpError) {
        setError('El correo ya está registrado o hubo un error.');
        setLoading(false);
        return;
      }

      // Guardar en tabla de leads
      await supabase.from('leads_curso_on_demand').insert({
        nombre,
        correo,
        wsp: `${codigoPais}${wsp}`,
        created_at: new Date().toISOString()
      });

      // Crear perfil de usuario
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
      
    } catch (error) {
      console.error('Error en registro:', error);
      setError('Hubo un error inesperado. Inténtalo de nuevo.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden p-4">
      <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
      <div className="relative z-10 w-full max-w-sm sm:max-w-md p-6 sm:p-8 rounded-2xl sm:rounded-3xl shadow-2xl bg-white/10 backdrop-blur-lg border border-labora-neon/20 animate-fade-in-up">
        <div className="flex flex-col items-center mb-6 sm:mb-8">
          <img src="/lovable-uploads/logolabora.webp" alt="Labora Curso" className="h-10 sm:h-12 mb-2" />
          <h1 className="text-xl sm:text-2xl font-bold text-white mb-1 text-center">Comienza tu viaje con IA</h1>
          <p className="text-labora-neon font-semibold mb-2 text-sm sm:text-base text-center">Crea tu cuenta y accede a tu campus</p>
        </div>
        <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
          <div>
            <Label htmlFor="nombre" className="text-gray-200 text-sm sm:text-base">Nombre completo</Label>
            <Input 
              id="nombre"
              placeholder="Tu nombre completo"
              value={nombre}
              onChange={e => setNombre(e.target.value)}
              className="mt-1 h-10 sm:h-11 text-sm sm:text-base"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-gray-200 text-sm sm:text-base">Email</Label>
            <Input 
              id="email"
              type="email" 
              placeholder="tu@email.com"
              value={correo}
              onChange={e => setCorreo(e.target.value)}
              className="mt-1 h-10 sm:h-11 text-sm sm:text-base"
            />
          </div>
          
          {/* Campo de contraseña */}
          <div>
            <Label htmlFor="password" className="text-gray-200 text-sm sm:text-base">Contraseña</Label>
            <div className="relative mt-1">
              <Input
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Mínimo 6 caracteres"
                value={password}
                onChange={e => setPassword(e.target.value)}
                className="h-10 sm:h-11 text-sm sm:text-base pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          {/* Campo de confirmar contraseña */}
          <div>
            <Label htmlFor="confirmPassword" className="text-gray-200 text-sm sm:text-base">Confirmar contraseña</Label>
            <div className="relative mt-1">
              <Input
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Repite tu contraseña"
                value={confirmPassword}
                onChange={e => setConfirmPassword(e.target.value)}
                className="h-10 sm:h-11 text-sm sm:text-base pr-10"
              />
              <button
                type="button"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                {showConfirmPassword ? <EyeOff size={16} /> : <Eye size={16} />}
              </button>
            </div>
          </div>

          <div>
            <Label htmlFor="whatsapp" className="text-gray-200 text-sm sm:text-base">WhatsApp</Label>
            <div className="flex gap-2 mt-1">
              <select
                value={codigoPais}
                onChange={e => setCodigoPais(e.target.value)}
                className="border rounded-lg px-2 py-2 bg-gray-100 text-gray-800 font-medium text-sm sm:text-base h-10 sm:h-11"
                style={{ minWidth: 90 }}
              >
                {codigosPais.map(p => (
                  <option key={p.code} value={p.code}>{p.code} {p.name}</option>
                ))}
              </select>
              <Input
                id="whatsapp"
                placeholder="Número sin código"
                value={wsp}
                onChange={e => setWsp(e.target.value)}
                className="flex-1 h-10 sm:h-11 text-sm sm:text-base"
              />
            </div>
          </div>
          
          {error && <div className="text-red-400 text-xs sm:text-sm">{error}</div>}
          
          <Button
            type="submit"
            className="w-full bg-labora-neon text-gray-900 hover:bg-labora-neon/80 font-bold shadow-neon-glow mt-2 h-11 sm:h-12 text-sm sm:text-base"
            disabled={loading}
          >
            {loading ? 'Registrando...' : (
              <>
                Quiero empezar
                <ArrowRight className="ml-2 h-3 w-3 sm:h-4 sm:w-4" />
              </>
            )}
          </Button>
        </form>
        <div className="mt-4 sm:mt-6 text-center text-gray-300 text-xs sm:text-sm">
          ¿Ya tienes cuenta?{' '}
          <a
            href="/login-curso"
            className="text-labora-neon font-semibold underline hover:text-labora-neon/80"
          >
            Inicia sesión aquí
          </a>
        </div>
        <div className="mt-6 sm:mt-8 flex flex-col items-center gap-2 text-gray-400 text-xs">
          <div className="flex items-center gap-1">
            <BookOpen className="h-3 w-3 sm:h-4 sm:w-4 text-labora-neon" />
            <span className="text-xs">Acceso inmediato al contenido</span>
          </div>
          <div className="flex items-center gap-1">
            <Users className="h-3 w-3 sm:h-4 sm:w-4 text-labora-neon" />
            <span className="text-xs">Comunidad y soporte incluido</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistroCurso; 