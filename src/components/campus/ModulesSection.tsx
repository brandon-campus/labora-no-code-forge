import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { CheckCircle, Circle, ChevronDown, ChevronUp, Play, X, ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModulesSection: React.FC = () => {
  const [modules, setModules] = useState<any[]>([]);
  const [progress, setProgress] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState(true);
  const [userCohort, setUserCohort] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [videoModal, setVideoModal] = useState<{ isOpen: boolean; videoInfo: any; title: string }>({ isOpen: false, videoInfo: null, title: '' });

  useEffect(() => {
    const fetchModulesAndProgress = async () => {
      setLoading(true);
      // Obtener usuario y cohorte
      const { data: { user } } = await supabase.auth.getUser();
      if (!user) return;
      setUserId(user.id);
      const { data: profile } = await supabase
        .from('profiles')
        .select('cohorte')
        .eq('id', user.id)
        .single();
      const cohort = profile?.cohorte || '13';
      setUserCohort(cohort);
      // Obtener módulos de la cohorte
      const { data: mods } = await supabase
        .from('modulos')
        .select('*')
        .eq('cohorte', cohort)
        .order('orden', { ascending: true });
      setModules(mods || []);
      // Obtener progreso del usuario
      const { data: prog } = await supabase
        .from('progreso_modulo')
        .select('modulo_id, completado')
        .eq('user_id', user.id);
      const progressMap: { [key: string]: any } = {};
      (prog || []).forEach((p: any) => {
        progressMap[p.modulo_id] = p;
      });
      setProgress(progressMap);
      setLoading(false);
    };
    fetchModulesAndProgress();
  }, []);

  const handleComplete = async (moduloId: string) => {
    setLoading(true);
    await supabase.from('progreso_modulo').upsert({
      user_id: userId,
      modulo_id: moduloId,
      completado: true,
      completado_at: new Date().toISOString()
    });
    setProgress((prev) => ({ ...prev, [moduloId]: { ...prev[moduloId], completado: true } }));
    setLoading(false);
  };


  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  // Función para extraer el ID de Google Drive y convertir a embed
  const getGoogleDriveVideoInfo = (url: string) => {
    if (!url) return null;
    
    // Extraer ID del archivo de Google Drive
    const match = url.match(/\/file\/d\/([a-zA-Z0-9-_]+)/);
    if (!match) return null;
    
    const fileId = match[1];
    return {
      fileId,
      thumbnailUrl: `https://drive.google.com/thumbnail?id=${fileId}&sz=w320`,
      embedUrl: `https://drive.google.com/file/d/${fileId}/preview`,
      directUrl: url
    };
  };

  const openVideoModal = (videoInfo: any, title: string) => {
    setVideoModal({ isOpen: true, videoInfo, title });
  };

  const closeVideoModal = () => {
    setVideoModal({ isOpen: false, videoInfo: null, title: '' });
  };

  if (loading) {
    return <div className="p-8 text-white">Cargando módulos...</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <div className="text-center mb-10">
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-3">
          Módulos de la <span className="text-labora-neon">Cohorte #{userCohort}</span>
        </h1>
        <p className="text-gray-400 text-lg">
          Aprende paso a paso con videos exclusivos y contenido premium
        </p>
      </div>
      <ul className="space-y-8">
        {modules.map((mod, idx) => (
          <li key={mod.id} className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-2xl border border-gray-700 shadow-xl hover:shadow-2xl transition-all duration-300 hover:border-labora-neon/30">
            <button
              className="w-full flex items-center justify-between px-6 py-5 focus:outline-none hover:bg-gray-800/50 rounded-2xl transition-colors"
              onClick={() => toggleExpand(mod.id)}
            >
              <div className="flex items-center gap-4">
                {progress[mod.id]?.completado ? (
                  <CheckCircle className="text-labora-neon h-7 w-7 drop-shadow-glow" />
                ) : (
                  <Circle className="text-gray-400 h-7 w-7" />
                )}
                <div className="text-left">
                  <span className="text-xl md:text-2xl font-bold text-white block">MÓDULO {idx + 1}</span>
                  <span className="text-labora-neon font-semibold text-lg">{mod.titulo}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                {progress[mod.id]?.completado && (
                  <span className="bg-gradient-to-r from-green-600 to-green-500 text-white text-sm px-4 py-2 rounded-full font-bold shadow-lg">
                    ✓ Completado
                  </span>
                )}
                {mod.video_url && (
                  <span className="bg-labora-red/20 text-labora-red text-sm px-3 py-1 rounded-full font-semibold border border-labora-red/30">
                    📹 Video
                  </span>
                )}
                <div className="bg-labora-neon/10 p-2 rounded-full">
                  {expanded === mod.id ? <ChevronUp className="h-5 w-5 text-labora-neon" /> : <ChevronDown className="h-5 w-5 text-labora-neon" />}
                </div>
              </div>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${expanded === mod.id ? 'max-h-[800px] p-6 pt-0' : 'max-h-0 p-0'}`}>
              {expanded === mod.id && (
                <div className="max-w-2xl mx-auto">
                  {/* Video Section - Centrada y destacada */}
                  <div className="w-full">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white mb-2 flex items-center justify-center">
                        <Play className="mr-3 h-6 w-6 text-labora-neon" /> 
                        Video de la Clase
                      </h3>
                      <p className="text-gray-400">Haz clic en el preview o en el botón para ver el contenido</p>
                    </div>
                    {mod.video_url ? (
                      (() => {
                        const videoInfo = getGoogleDriveVideoInfo(mod.video_url);
                        return videoInfo ? (
                          <div className="bg-gray-800 rounded-lg overflow-hidden">
                            {/* Preview del video */}
                            <div className="relative aspect-video bg-gray-900">
                              <img
                                src={videoInfo.thumbnailUrl}
                                alt="Preview del video"
                                className="w-full h-full object-cover"
                                onError={(e) => {
                                  // Fallback si no se puede cargar el thumbnail
                                  const target = e.currentTarget as HTMLImageElement;
                                  target.style.display = 'none';
                                  const fallback = target.nextElementSibling as HTMLElement;
                                  if (fallback) fallback.style.display = 'flex';
                                }}
                              />
                              {/* Fallback overlay */}
                              <div className="absolute inset-0 bg-gray-800 flex items-center justify-center" style={{display: 'none'}}>
                                <Play className="h-12 w-12 text-labora-neon" />
                              </div>
                              {/* Play overlay */}
                              <div 
                                className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity cursor-pointer"
                                onClick={() => openVideoModal(videoInfo, mod.titulo)}
                              >
                                <div className="bg-labora-neon/90 rounded-full p-3">
                                  <Play className="h-8 w-8 text-gray-900 fill-current" />
                                </div>
                              </div>
                            </div>
                            {/* Botones de acción */}
                            <div className="p-4 space-y-2">
                              <p className="text-gray-300 text-sm mb-3">Video disponible</p>
                              <div className="flex gap-2">
                                <Button 
                                  className="flex-1 bg-labora-red hover:bg-labora-red/90"
                                  onClick={() => openVideoModal(videoInfo, mod.titulo)}
                                >
                                  <Play className="mr-2 h-4 w-4" />
                                  Ver Video
                                </Button>
                                <a href={videoInfo.directUrl} target="_blank" rel="noopener noreferrer">
                                  <Button variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700" title="Abrir en Google Drive">
                                    <ExternalLink className="h-4 w-4" />
                                  </Button>
                                </a>
                              </div>
                            </div>
                          </div>
                        ) : (
                          // Fallback para URLs que no son de Google Drive
                          <div className="bg-gray-800 rounded-lg p-8 text-center">
                            <Play className="mx-auto h-12 w-12 text-labora-neon mb-3" />
                            <p className="text-gray-300 mb-4">Video disponible</p>
                            <a href={mod.video_url} target="_blank" rel="noopener noreferrer">
                              <Button className="bg-labora-red hover:bg-labora-red/90">Ver Video</Button>
                            </a>
                          </div>
                        );
                      })()
                    ) : (
                      <div className="bg-gray-800 rounded-lg p-8 text-center">
                        <Play className="mx-auto h-12 w-12 text-gray-500 mb-3" />
                        <p className="text-gray-400">Video no disponible aún</p>
                      </div>
                    )}
                    
                    {/* Botón para marcar como completado */}
                    <div className="mt-8 flex justify-center">
                      {!progress[mod.id]?.completado ? (
                        <Button
                          onClick={() => handleComplete(mod.id)}
                          className="bg-gradient-to-r from-labora-neon to-green-400 text-gray-900 hover:from-labora-neon/80 hover:to-green-400/80 font-bold px-10 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                          disabled={loading}
                        >
                          <CheckCircle className="mr-3 h-6 w-6" />
                          Marcar como Completado
                        </Button>
                      ) : (
                        <div className="flex items-center gap-3 text-green-400 font-bold text-lg bg-green-900/30 px-6 py-3 rounded-xl border border-green-400/30">
                          <CheckCircle className="h-6 w-6" />
                          <span>¡Módulo Completado!</span>
                          <span className="text-2xl">🎉</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
                  )}
                </div>
          </li>
        ))}
      </ul>

      {/* Modal del Video */}
      {videoModal.isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-5xl mx-4 bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
            {/* Header del Modal */}
            <div className="flex items-center justify-between p-4 bg-gray-800 border-b border-gray-700">
              <div className="flex items-center gap-3">
                <Play className="h-5 w-5 text-labora-neon" />
                <h3 className="text-lg font-semibold text-white">
                  {videoModal.title}
                </h3>
              </div>
              <div className="flex items-center gap-2">
                <a 
                  href={videoModal.videoInfo?.directUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-gray-400 hover:text-labora-neon transition-colors"
                  title="Abrir en Google Drive"
                >
                  <ExternalLink className="h-5 w-5" />
                </a>
                <button
                  onClick={closeVideoModal}
                  className="p-2 text-gray-400 hover:text-white transition-colors"
                  title="Cerrar"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
            
            {/* Contenido del Video */}
            <div className="relative aspect-video bg-black">
              {videoModal.videoInfo && (
                <iframe
                  src={videoModal.videoInfo.embedUrl}
                  className="w-full h-full"
                  allowFullScreen
                  frameBorder="0"
                  title={`Video: ${videoModal.title}`}
                  allow="autoplay; encrypted-media"
                />
              )}
            </div>
            
            {/* Footer del Modal */}
            <div className="p-4 bg-gray-800 flex justify-between items-center">
              <p className="text-gray-400 text-sm">
                Usa las teclas de flecha o controles del video para navegar
              </p>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  onClick={closeVideoModal}
                  className="border-gray-600 text-gray-300 hover:bg-gray-700"
                >
                  Cerrar
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export { ModulesSection };