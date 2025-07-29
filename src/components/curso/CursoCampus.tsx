import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Lock } from 'lucide-react';
import SidebarCurso, { VistaCurso } from './SidebarCurso';
import HeaderCurso from './HeaderCurso';
import HomeCurso from './HomeCurso';
import DashboardCurso from './DashboardCurso';

interface Leccion {
  id: string;
  orden: number;
  titulo: string;
  tipo: string;
  descripcion?: string;
  url_video?: string;
  recursos?: any;
  preguntas?: any;
  seccion?: string; // Nuevo campo para la sección
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
  const [vista, setVista] = useState<VistaCurso>('home');
  const [sidebarVisible, setSidebarVisible] = useState(false);

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
    return <div className="min-h-screen flex items-center justify-center bg-[#0A0A0A] text-white text-xl">Cargando...</div>;
  }

  // Lógica de módulos desbloqueados
  const puedeVerModulo = (idx: number) => {
    if (perfil?.curso_pagado) return true;
    return idx < 2; // Solo los dos primeros módulos desbloqueados
  };

  // Calcular progreso real
  const progresoReal = completadas.length / (lecciones.length || 1) * 100;

  // Agrupar lecciones por sección
  const leccionesPorSeccion = lecciones.reduce((acc, lec) => {
    const seccion = lec.seccion || 'Sin sección';
    if (!acc[seccion]) acc[seccion] = [];
    acc[seccion].push(lec);
    return acc;
  }, {} as Record<string, Leccion[]>);
  const secciones = Object.keys(leccionesPorSeccion);

  // Handler para logout
  const handleLogout = async () => {
    await supabase.auth.signOut();
    window.location.href = '/login-curso';
  };

  return (
    <div className="min-h-screen flex bg-[#0A0A0A]">
      <SidebarCurso active={vista} onNavigate={setVista} progreso={progresoReal} />
      <div className="flex-1 flex flex-col min-h-screen">
        <HeaderCurso
          nombre={perfil?.nombre || 'Alumno'}
          onPerfil={() => alert('Ir a perfil (pendiente)')}
          onLogout={handleLogout}
        />
        <main className="flex-1 bg-[#0A0A0A]">
          {vista === 'home' && (
            <HomeCurso
              nombre={perfil?.nombre || 'Alumno'}
              camino={perfil?.camino_ia || ''}
              progreso={progresoReal}
              curso={{ titulo: 'Curso On Demand de IA y No Code' }}
              onIrLecciones={() => setVista('lecciones')}
            />
          )}
          {vista === 'lecciones' && lecciones.length > 0 && (
            <div className="relative min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-start">
              {/* Botón flotante para mostrar el sidebar */}
              {!sidebarVisible && (
                <button
                  className="fixed top-6 left-6 z-30 bg-labora-neon text-black rounded-full p-3 shadow-lg hover:bg-labora-neon/80 transition"
                  onClick={() => setSidebarVisible(true)}
                  title="Ver módulos"
                >
                  <svg width="28" height="28" fill="none" viewBox="0 0 24 24"><rect x="4" y="6" width="16" height="2" rx="1" fill="currentColor"/><rect x="4" y="11" width="16" height="2" rx="1" fill="currentColor"/><rect x="4" y="16" width="16" height="2" rx="1" fill="currentColor"/></svg>
                </button>
              )}
              {/* Sidebar modal */}
              {sidebarVisible && (
                <div className="fixed inset-0 z-40 flex">
                  <div className="w-72 bg-white border-r p-6 flex flex-col h-full overflow-y-auto shadow-2xl">
                    <button
                      className="mb-6 text-labora-neon font-bold hover:underline"
                      onClick={() => setSidebarVisible(false)}
                    >
                      ← Cerrar módulos
                    </button>
                    <h2 className="text-lg font-bold mb-4">Lecciones</h2>
                    <div className="space-y-6">
                      {secciones.map(seccion => (
                        <div key={seccion}>
                          <div className="text-xs uppercase font-bold text-gray-500 mb-2 pl-2">{seccion}</div>
                          <ul className="space-y-2">
                            {leccionesPorSeccion[seccion].map((lec, idx) => {
                              const idxGlobal = lecciones.findIndex(l => l.id === lec.id);
                              return (
                                <li key={lec.id}>
                                  <button
                                    className={`w-full text-left px-3 py-2 rounded-lg font-medium transition-colors ${leccionActiva === lec.id ? 'bg-labora-neon/20 text-labora-dark' : 'hover:bg-gray-100 text-gray-700'} ${completadas.includes(lec.id) ? 'line-through' : ''} ${!puedeVerModulo(idxGlobal) ? 'opacity-50 cursor-not-allowed' : ''}`}
                                    onClick={() => { if (puedeVerModulo(idxGlobal)) { setLeccionActiva(lec.id); setSidebarVisible(false); }}}
                                    disabled={!puedeVerModulo(idxGlobal)}
                                  >
                                    {lec.titulo} {!puedeVerModulo(idxGlobal) && <Lock className="inline ml-2 w-4 h-4 text-gray-400" />}
                                  </button>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </div>
                  {/* Fondo oscuro para cerrar el sidebar */}
                  <div className="flex-1 bg-black/40" onClick={() => setSidebarVisible(false)} />
                </div>
              )}
              {/* Contenido principal inmersivo */}
              <div className="w-full flex flex-col items-center justify-center min-h-screen pt-10 pb-20">
                {leccionActiva && (() => {
                  const idx = lecciones.findIndex(l => l.id === leccionActiva);
                  const lec = lecciones[idx];
                  if (puedeVerModulo(idx)) {
                    return (
                      <>
                        {/* Video grande y centrado */}
                        {lec.url_video && (
                          <div className="mb-6 w-full flex justify-center">
                            <div className="aspect-w-16 aspect-h-9 w-full max-w-4xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#101A2C]">
                              <iframe
                                src={lec.url_video.includes('tella.tv') ? lec.url_video + '/embed' : lec.url_video}
                                title={lec.titulo}
                                allow="autoplay; encrypted-media"
                                allowFullScreen
                                className="w-full h-[40vw] min-h-[300px] max-h-[70vh] border-none bg-black"
                              />
                            </div>
                          </div>
                        )}
                        {/* Título y descripción debajo del video */}
                        <div className="w-full max-w-4xl mx-auto text-left mb-6">
                          <h1 className="text-xl font-bold text-white mb-1">{lec.titulo}</h1>
                          {lec.descripcion && <div className="mb-3 text-gray-300 text-base">{lec.descripcion}</div>}
                        </div>
                        {/* Navegación y progreso */}
                        <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
                          <div className="flex items-center justify-between w-full mb-6">
                            <button
                              className="bg-gray-200 text-gray-700 font-bold px-4 py-2 rounded-lg shadow hover:bg-gray-300 transition disabled:opacity-50"
                              onClick={() => { if (idx > 0) setLeccionActiva(lecciones[idx - 1].id); }}
                              disabled={idx === 0}
                            >
                              ← Anterior
                            </button>
                            <button
                              className="bg-labora-neon text-black font-bold px-4 py-2 rounded-lg shadow hover:bg-labora-neon/80 transition disabled:opacity-50"
                              onClick={() => { if (idx < lecciones.length - 1) setLeccionActiva(lecciones[idx + 1].id); }}
                              disabled={idx === lecciones.length - 1}
                            >
                              Siguiente →
                            </button>
                          </div>
                          {/* Barra de progreso animada */}
                          <div className="w-full mb-6">
                            <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
                              <div className="h-2 bg-labora-neon transition-all duration-500" style={{ width: `${progresoReal}%` }} />
                            </div>
                            <div className="text-xs text-gray-300 font-semibold mt-1 text-right">{Math.round(progresoReal)}% completado</div>
                          </div>
                          {/* Feedback visual al marcar como completada */}
                          {completadas.includes(leccionActiva) && (
                            <div className="mb-4 p-3 bg-green-100 border border-green-300 rounded-lg text-green-800 font-semibold animate-pulse">
                              ¡Lección completada!
                            </div>
                          )}
                          {!completadas.includes(leccionActiva) && (
                            <button
                              className="bg-labora-neon text-black font-bold px-6 py-2 rounded-lg shadow hover:bg-labora-neon/80 transition"
                              onClick={() => setCompletadas([...completadas, leccionActiva])}
                            >
                              Marcar como completada
                            </button>
                          )}
                          {completadas.length === lecciones.length && (
                            <div className="mt-8 p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 font-semibold">
                              ¡Curso completado! Puedes descargar tu certificado.
                            </div>
                          )}
                        </div>
                      </>
                    );
                  } else {
                    return (
                      <div className="flex flex-col items-center justify-center h-full">
                        <Lock className="w-12 h-12 text-gray-400 mb-4" />
                        <p className="text-lg text-gray-700 font-semibold mb-2">Este módulo está bloqueado</p>
                        <p className="text-gray-500 mb-4">Adquiere el curso completo para acceder a todos los módulos.</p>
                        {pagoExitoso ? (
                          <div className="p-4 bg-green-100 border border-green-300 rounded-lg text-green-800 font-semibold mb-4">
                            ¡Pago exitoso! Ya tienes acceso a todos los módulos.
                          </div>
                        ) : (
                          <button
                            className="bg-labora-neon text-black font-bold px-6 py-2 rounded-lg shadow hover:bg-labora-neon/80 transition mb-2"
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
              {/* Soporte o certificado */}
              <div className="fixed right-8 bottom-8 z-30 flex flex-col items-end">
                <a href="https://wa.me/5491178519054" target="_blank" rel="noopener noreferrer" className="bg-labora-neon text-black font-bold px-4 py-2 rounded-lg shadow hover:bg-labora-neon/80 transition mb-4">Soporte WhatsApp</a>
                {completadas.length === lecciones.length && (
                  <button className="bg-labora-red text-white font-bold px-4 py-2 rounded-lg shadow hover:bg-labora-red/80 transition">Descargar certificado</button>
                )}
              </div>
            </div>
          )}
          {vista === 'cursos' && (
            <div className="w-full max-w-3xl mx-auto mt-10 text-white text-2xl font-bold">Mis cursos (próximamente)</div>
          )}
          {vista === 'pagos' && (
            <div className="w-full max-w-3xl mx-auto mt-10 text-white text-2xl font-bold">Mis pagos (próximamente)</div>
          )}
        </main>
      </div>
    </div>
  );
};

export default CursoCampus; 