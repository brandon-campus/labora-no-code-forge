import React, { useEffect, useState, useRef } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { CheckCircle, Circle, ChevronDown, ChevronUp, Play, FileText, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';

const ModulesSection: React.FC = () => {
  const [modules, setModules] = useState<any[]>([]);
  const [progress, setProgress] = useState<{ [key: string]: any }>({});
  const [loading, setLoading] = useState(true);
  const [userCohort, setUserCohort] = useState<string>('');
  const [userId, setUserId] = useState<string>('');
  const [expanded, setExpanded] = useState<string | null>(null);
  const [uploading, setUploading] = useState<string | null>(null);
  const fileInputs = useRef<{ [key: string]: HTMLInputElement | null }>({});

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
        .select('modulo_id, completado, entregable_url')
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

  const handleUpload = async (moduloId: string, file: File) => {
    setUploading(moduloId);
    const filePath = `entregables/${userId}/${moduloId}/${file.name}`;
    const { error: uploadError } = await supabase.storage.from('entregables').upload(filePath, file, { upsert: true });
    if (uploadError) {
      alert('Error al subir el archivo: ' + uploadError.message);
      setUploading(null);
      return;
    }
    const { data: publicUrlData } = supabase.storage.from('entregables').getPublicUrl(filePath);
    const url = publicUrlData?.publicUrl;
    await supabase.from('progreso_modulo').upsert({
      user_id: userId,
      modulo_id: moduloId,
      entregable_url: url
    });
    setProgress((prev) => ({ ...prev, [moduloId]: { ...prev[moduloId], entregable_url: url } }));
    setUploading(null);
  };

  const toggleExpand = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  if (loading) {
    return <div className="p-8 text-white">Cargando módulos...</div>;
  }

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold text-white mb-6">Módulos de la cohorte #{userCohort}</h1>
      <ul className="space-y-6">
        {modules.map((mod, idx) => (
          <li key={mod.id} className="bg-gray-900 rounded-2xl border border-gray-800 shadow-lg">
            <button
              className="w-full flex items-center justify-between px-6 py-4 focus:outline-none"
              onClick={() => toggleExpand(mod.id)}
            >
              <div className="flex items-center gap-3">
                {progress[mod.id]?.completado ? (
                  <CheckCircle className="text-labora-neon h-6 w-6" />
                ) : (
                  <Circle className="text-gray-500 h-6 w-6" />
                )}
                <span className="text-lg md:text-xl font-bold text-white">MÓDULO {idx + 1}: {mod.titulo.toUpperCase()}</span>
                  </div>
              <div className="flex items-center gap-2">
                {progress[mod.id]?.completado && (
                  <span className="bg-green-700 text-white text-xs px-3 py-1 rounded-full font-semibold">Completado</span>
                )}
                {expanded === mod.id ? <ChevronUp className="h-5 w-5 text-labora-neon" /> : <ChevronDown className="h-5 w-5 text-labora-neon" />}
              </div>
            </button>
            <div className={`transition-all duration-300 overflow-hidden ${expanded === mod.id ? 'max-h-[1000px] p-6 pt-0' : 'max-h-0 p-0'}`}>
              {expanded === mod.id && (
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Video */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center"><Play className="mr-2 h-5 w-5 text-labora-neon" /> VIDEO DE LA CLASE</h3>
                    {mod.video_url ? (
                        <div className="bg-gray-800 rounded-lg p-8 text-center">
                          <Play className="mx-auto h-12 w-12 text-labora-neon mb-3" />
                          <p className="text-gray-300 mb-4">Video disponible</p>
                        <a href={mod.video_url} target="_blank" rel="noopener noreferrer">
                          <Button className="bg-labora-red hover:bg-labora-red/90">Ver Video</Button>
                        </a>
                        </div>
                      ) : (
                        <div className="bg-gray-800 rounded-lg p-8 text-center">
                        <Play className="mx-auto h-12 w-12 text-gray-500 mb-3" />
                        <p className="text-gray-400">Video no disponible aún</p>
                        </div>
                      )}
                    </div>
                  {/* Materiales */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center"><FileText className="mr-2 h-5 w-5 text-labora-neon" /> MATERIAL DE LECTURA</h3>
                    {Array.isArray(mod.materiales) && mod.materiales.length > 0 ? (
                      <div className="space-y-3">
                        {mod.materiales.map((mat: any, i: number) => (
                          <div key={i} className="flex items-center justify-between bg-gray-800 rounded-lg p-3">
                            <span className="text-gray-300 text-sm">{mat.nombre || mat}</span>
                            {mat.url ? (
                              <a href={mat.url} target="_blank" rel="noopener noreferrer">
                                <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700">Descargar</Button>
                              </a>
                            ) : (
                              <Button size="sm" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-700" disabled>Descargar</Button>
                            )}
                              </div>
                            ))}
                          </div>
                        ) : (
                          <p className="text-gray-400 text-sm">Material no disponible aún</p>
                        )}
                      </div>
                  {/* Entregable */}
                  <div className="md:col-span-1">
                    <h3 className="text-xl font-bold text-white mb-3 flex items-center"><Upload className="mr-2 h-5 w-5 text-labora-neon" /> ENTREGABLE</h3>
                        <div className="bg-gray-800 rounded-lg p-4">
                      <p className="text-gray-300 text-sm mb-3">{mod.entregable || 'No hay entregable para este módulo.'}</p>
                      {progress[mod.id]?.entregable_url ? (
                        <a href={progress[mod.id].entregable_url} target="_blank" rel="noopener noreferrer">
                          <Button size="sm" className="bg-green-700 hover:bg-green-800 text-white">Ver Entregable</Button>
                        </a>
                      ) : (
                        <>
                          <input
                            type="file"
                            ref={el => (fileInputs.current[mod.id] = el)}
                            className="hidden"
                            onChange={e => {
                              const file = e.target.files?.[0];
                              if (file) handleUpload(mod.id, file);
                            }}
                          />
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-gray-600 text-gray-300 hover:bg-gray-700"
                            onClick={() => fileInputs.current[mod.id]?.click()}
                            disabled={!!uploading}
                          >
                            {uploading === mod.id ? 'Subiendo...' : 'Subir Archivo'}
                              </Button>
                        </>
                      )}
                    </div>
                  </div>
                    </div>
                  )}
                </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { ModulesSection };