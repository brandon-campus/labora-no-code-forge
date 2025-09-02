import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Lock } from 'lucide-react';
import HeaderCurso from './HeaderCurso';
import HomeCurso from './HomeCurso';

interface Leccion {
  id: string;
  orden: number;
  titulo: string;
  tipo: string;
  descripcion?: string;
  url_video?: string;
  recursos?: any;
  preguntas?: any;
  seccion?: string;
}

const CursoCampus = () => {
  const [lecciones, setLecciones] = useState<Leccion[]>([]);
  const [leccionActiva, setLeccionActiva] = useState<string | null>(null);
  const [progreso, setProgreso] = useState(0);
  const [completadas, setCompletadas] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);
  const [perfil, setPerfil] = useState<any>(null);
  const [pagoEnProceso, setPagoEnProceso] = useState(false);
  const [pagoExitoso, setPagoExitoso] = useState(false);
  const [vista, setVista] = useState<'home' | 'lecciones'>('home');

  useEffect(() => {
    const fetchData = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) {
        window.location.href = '/registro-curso';
        return;
      }
      // Leer perfil del usuario
      const { data: perfilData } = await supabase
        .from('perfiles_curso_on_demand')
        .select('*')
        .eq('user_id', user.id)
        .single();
      setPerfil(perfilData);
      // Cargar lecciones dinámicamente
      const { data: leccionesData } = await supabase
        .from('lecciones_curso_on_demand')
        .select('*')
        .order('orden', { ascending: true });
      setLecciones(leccionesData || []);
      setLeccionActiva(leccionesData && leccionesData.length > 0 ? leccionesData[0].id : null);
      setLoading(false);
    };
    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
        <div className="relative z-10 bg-white/10 backdrop-blur-lg border border-labora-neon/20 rounded-3xl p-8 shadow-2xl">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-labora-neon mx-auto mb-4"></div>
            <p className="text-white text-lg sm:text-xl font-semibold">Cargando...</p>
          </div>
        </div>
      </div>
    );
  }

  // Lógica de módulos desbloqueados - MODIFICADA
  const puedeVerModulo = (idx: number) => {
    if (perfil?.curso_pagado) return true;
    return idx < 9; // Los primeros 9 módulos desbloqueados (índices 0-8)
  };

  // Calcular progreso real - MODIFICADO para incluir módulos 1-9
  const calcularProgresoGratuito = () => {
    try {
      // Considerar los primeros 9 módulos (gratuitos)
      const modulosGratuitos = lecciones.slice(0, 9);
      
      // Si no hay módulos, mostrar título por defecto
      if (modulosGratuitos.length === 0) {
        return 0;
      }
      
      const modulosGratuitosIds = modulosGratuitos.map(l => l.id);
      
      // Contar cuántos módulos gratuitos están completados
      const completadosGratuitos = completadas.filter(id => modulosGratuitosIds.includes(id));
      
      // Calcular progreso basado en módulos gratuitos (1-9)
      return (completadosGratuitos.length / modulosGratuitos.length) * 100;
      
    } catch (error) {
      console.error('Error al calcular progreso:', error);
      return 0;
    }
  };

  // Función para obtener el módulo actual - MODIFICADA
  const obtenerModuloActual = () => {
    try {
      // Considerar módulos gratuitos (1-9)
      const modulosGratuitos = lecciones.slice(0, 9);
      
      // Si no hay módulos, mostrar título por defecto
      if (modulosGratuitos.length === 0) {
        return 'Curso On Demand de IA y No Code';
      }
      
      const modulosGratuitosIds = modulosGratuitos.map(l => l.id);
      
      // Si no ha completado ningún módulo gratuito, mostrar el primero
      if (completadas.length === 0) {
        return modulosGratuitos[0]?.titulo || 'Curso On Demand de IA y No Code';
      }
      
      // Contar cuántos módulos gratuitos están completados
      const completadosGratuitos = completadas.filter(id => modulosGratuitosIds.includes(id));
      
      // Si completó todos los módulos gratuitos
      if (completadosGratuitos.length >= modulosGratuitos.length) {
        return '¡Módulos gratuitos completados!';
      }
      
      // Si no, mostrar el siguiente módulo a completar
      const siguienteModulo = modulosGratuitos[completadosGratuitos.length];
      return siguienteModulo?.titulo || 'Curso On Demand de IA y No Code';
      
    } catch (error) {
      console.error('Error al obtener módulo actual:', error);
      return 'Curso On Demand de IA y No Code';
    }
  };

  const progresoReal = calcularProgresoGratuito();
  const moduloActual = obtenerModuloActual();

  // Handler para logout mejorado
  const handleLogout = async () => {
    try {
      console.log('Iniciando logout...');
      
      // Cerrar sesión en Supabase
      const { error } = await supabase.auth.signOut();
      
      if (error) {
        console.error('Error al cerrar sesión:', error);
        alert('Error al cerrar sesión. Inténtalo de nuevo.');
        return;
      }
      
      console.log('Sesión cerrada exitosamente');
      
      // Limpiar datos locales
      setPerfil(null);
      setLecciones([]);
      setCompletadas([]);
      
      // Redirigir a login
      window.location.href = '/login-curso';
      
    } catch (error) {
      console.error('Error inesperado en logout:', error);
      alert('Error inesperado. Inténtalo de nuevo.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
      
      {/* Header */}
      <HeaderCurso
        nombre={perfil?.nombre || 'Alumno'}
        onPerfil={() => alert('Ir a perfil (pendiente)')}
        onLogout={handleLogout}
      />
      
      {/* Contenido principal */}
      <main className="flex-1 relative z-10">
        {vista === 'home' && (
          <HomeCurso
            nombre={perfil?.nombre || 'Alumno'}
            camino={perfil?.camino_ia || ''}
            progreso={progresoReal}
            curso={{ titulo: moduloActual }}
            onIrLecciones={() => setVista('lecciones')}
            lecciones={lecciones}
          />
        )}
        
        {vista === 'lecciones' && lecciones.length > 0 && (
          <div className="w-full flex flex-col items-center justify-center min-h-screen pt-16 sm:pt-20 pb-20 px-4 sm:px-6">
            {leccionActiva && (() => {
              const idx = lecciones.findIndex(l => l.id === leccionActiva);
              const lec = lecciones[idx];
              if (puedeVerModulo(idx)) {
                return (
                  <>
                    {/* Video grande y centrado */}
                    {lec.url_video && (
                      <div className="mb-4 sm:mb-6 w-full flex justify-center">
                        <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl border-2 sm:border-4 border-labora-neon/30 bg-white/5 backdrop-blur-sm">
                          <iframe
                            src={lec.url_video.includes('tella.tv') ? lec.url_video + '/embed' : lec.url_video}
                            title={lec.titulo}
                            allow="autoplay; encrypted-media"
                            allowFullScreen
                            className="w-full h-[50vw] sm:h-[40vw] min-h-[200px] sm:min-h-[300px] max-h-[60vh] sm:max-h-[70vh] border-none bg-black"
                          />
                        </div>
                      </div>
                    )}
                    
                    {/* Título y descripción debajo del video */}
                    <div className="w-full max-w-4xl mx-auto text-left mb-4 sm:mb-6">
                      <h1 className="text-lg sm:text-xl font-bold text-white mb-1">{lec.titulo}</h1>
                      {lec.descripcion && <div className="mb-3 text-gray-300 text-sm sm:text-base">{lec.descripcion}</div>}
                    </div>
                    
                    {/* Navegación y progreso */}
                    <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
                      <div className="flex items-center justify-between w-full mb-4 sm:mb-6 gap-2 sm:gap-4">
                        <button
                          className="bg-white/10 backdrop-blur-sm text-white font-bold px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-white/20 transition disabled:opacity-50 text-sm sm:text-base border border-white/20"
                          onClick={() => { if (idx > 0) setLeccionActiva(lecciones[idx - 1].id); }}
                          disabled={idx === 0}
                        >
                          ← Anterior
                        </button>
                        <button
                          className="bg-labora-neon text-black font-bold px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-labora-neon/80 transition disabled:opacity-50 text-sm sm:text-base shadow-neon-glow"
                          onClick={() => { if (idx < lecciones.length - 1) setLeccionActiva(lecciones[idx + 1].id); }}
                          disabled={idx === lecciones.length - 1}
                        >
                          Siguiente →
                        </button>
                      </div>
                      
                      {/* Barra de progreso animada */}
                      <div className="w-full mb-4 sm:mb-6">
                        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                          <div className="h-2 bg-labora-neon transition-all duration-500" style={{ width: `${progresoReal}%` }} />
                        </div>
                        <div className="text-xs text-gray-300 font-semibold mt-1 text-right">{Math.round(progresoReal)}% completado</div>
                      </div>
                      
                      {/* Feedback visual al marcar como completada */}
                      {completadas.includes(leccionActiva) && (
                        <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg text-green-800 font-semibold animate-pulse text-sm sm:text-base">
                          ¡Lección completada!
                        </div>
                      )}
                      
                      {!completadas.includes(leccionActiva) && (
                        <button
                          className="bg-labora-neon text-black font-bold px-4 sm:px-6 py-2 rounded-lg shadow hover:bg-labora-neon/80 transition text-sm sm:text-base shadow-neon-glow"
                          onClick={() => setCompletadas([...completadas, leccionActiva])}
                        >
                          Marcar como completada
                        </button>
                      )}
                      
                      {completadas.length === lecciones.length && (
                        <div className="mt-6 sm:mt-8 p-3 sm:p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 font-semibold text-sm sm:text-base">
                          ¡Curso completado! Puedes descargar tu certificado.
                        </div>
                      )}
                    </div>
                  </>
                );
              } else {
                return (
                  <div className="flex flex-col items-center justify-center h-full px-4">
                    <Lock className="w-10 h-10 sm:w-12 sm:h-12 text-gray-400 mb-3 sm:mb-4" />
                    <p className="text-base sm:text-lg text-gray-700 font-semibold mb-2 text-center">Este módulo está bloqueado</p>
                    <p className="text-gray-500 mb-4 text-sm sm:text-base text-center">Adquiere el curso completo para acceder a todos los módulos.</p>
                    {pagoExitoso ? (
                      <div className="p-3 sm:p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 font-semibold mb-4 text-sm sm:text-base">
                        ¡Pago exitoso! Ya tienes acceso a todos los módulos.
                      </div>
                    ) : (
                      <button
                        className="bg-labora-neon text-black font-bold px-4 sm:px-6 py-2 rounded-lg shadow hover:bg-labora-neon/80 transition mb-2 text-sm sm:text-base"
                        onClick={async () => {
                          setPagoEnProceso(true);
                          window.open('https://www.mercadopago.com.ar/', '_blank');
                          setTimeout(async () => {
                            if (perfil) {
                              await supabase.from('perfiles_curso_on_demand').update({ curso_pagado: true }).eq('user_id', perfil.user_id);
                              setPerfil({ ...perfil, curso_pagado: true });
                              setPagoExitoso(true);
                            }
                            setPagoEnProceso(false);
                          }, 3000);
                        }}
                        disabled={pagoEnProceso}
                      >
                        {pagoEnProceso ? 'Procesando pago...' : 'Pagar $65 USD'}
                      </button>
                    )}
                  </div>
                );
              }
            })()}
          </div>
        )}
      </main>
      
      {/* Botón para volver al home */}
      {vista === 'lecciones' && (
        <button
          onClick={() => setVista('home')}
          className="fixed top-4 left-4 z-30 bg-labora-neon text-black rounded-full p-2 sm:p-3 shadow-lg hover:bg-labora-neon/80 transition shadow-neon-glow"
          title="Volver al inicio"
        >
          <svg width="24" height="24" className="sm:w-7 sm:h-7" fill="none" viewBox="0 0 24 24">
            <path d="M19 12H5M12 19l-7-7 7-7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      )}
      
      {/* Soporte o certificado - botones flotantes */}
      <div className="fixed right-4 sm:right-8 bottom-4 sm:bottom-8 z-30 flex flex-col items-end gap-2 sm:gap-4">
        <a href="https://wa.me/5491178519054" target="_blank" rel="noopener noreferrer" className="bg-labora-neon text-black font-bold px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-labora-neon/80 transition text-xs sm:text-sm shadow-neon-glow">Soporte WhatsApp</a>
        {completadas.length === lecciones.length && (
          <button className="bg-labora-red text-white font-bold px-3 sm:px-4 py-2 rounded-lg shadow hover:bg-labora-red/80 transition text-xs sm:text-sm shadow-lg">Descargar certificado</button>
        )}
      </div>
    </div>
  );
};

export default CursoCampus; 