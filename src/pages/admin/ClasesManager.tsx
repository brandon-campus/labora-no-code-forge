import React, { useState, useEffect } from 'react';
import { supabase } from '@/lib/supabaseClient';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';
import { Loader2, Save, Plus, Pencil, Trash2, ArrowLeft, ExternalLink } from 'lucide-react';

interface LeadMagnet {
  id?: number;
  slug: string;
  theme_color_primary: string;
  video_url: string;
  tag_text: string;
  title_main: string;
  title_highlight: string;
  description: string;
  step1_title: string;
  step1_bullet1: string;
  step1_bullet2: string;
}

const emptyForm: LeadMagnet = {
  slug: '',
  theme_color_primary: 'labora-neon',
  video_url: '',
  tag_text: 'Clase Gratuita',
  title_main: '',
  title_highlight: '',
  description: '',
  step1_title: '',
  step1_bullet1: '',
  step1_bullet2: ''
};

export default function ClasesManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [landings, setLandings] = useState<LeadMagnet[]>([]);
  
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<LeadMagnet>(emptyForm);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const fetchLandings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('lead_magnets')
        .select('*')
        .order('id', { ascending: false });
        
      if (error) throw error;
      setLandings(data || []);
    } catch (err: any) {
      toast.error('Error al cargar landings: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLandings();
  }, []);

  const handleEdit = (landing: LeadMagnet) => {
    setFormData(landing);
    setEditingId(landing.id!);
    setIsFormOpen(true);
  };

  const handleCreateNew = () => {
    setFormData(emptyForm);
    setEditingId(null);
    setIsFormOpen(true);
  };

  const handleDelete = async (id: number, slug: string) => {
    if (!window.confirm(`¿Estás seguro de eliminar la landing /${slug}?`)) return;
    
    try {
      const { error } = await supabase.from('lead_magnets').delete().eq('id', id);
      if (error) throw error;
      
      toast.success('Landing eliminada correctamente.');
      await fetchLandings();
    } catch (err: any) {
      toast.error('Error al eliminar: ' + err.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      if (editingId) {
        // Update
        const { error } = await supabase
          .from('lead_magnets')
          .update(formData)
          .eq('id', editingId);
        if (error) throw error;
        toast.success('Landing actualizada correctamente.');
      } else {
        // Insert
        const { error } = await supabase
          .from('lead_magnets')
          .insert([formData]);
        if (error) throw error;
        toast.success('Landing creada correctamente.');
      }
      
      setIsFormOpen(false);
      await fetchLandings();
    } catch (err: any) {
      toast.error('Error al guardar: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-20">
        <Loader2 className="h-8 w-8 animate-spin text-labora-neon" />
      </div>
    );
  }

  if (isFormOpen) {
    return (
      <div className="max-w-4xl mx-auto pb-20">
        <div className="mb-8 flex items-center gap-4">
          <Button variant="outline" onClick={() => setIsFormOpen(false)} className="bg-transparent text-gray-300 border-gray-700 hover:bg-gray-800">
            <ArrowLeft className="w-4 h-4 mr-2" /> Volver
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-white">
              {editingId ? 'Editar Landing' : 'Nueva Landing'}
            </h1>
            <p className="text-gray-400">
              {editingId ? `Editando ruta: /clase/${formData.slug}` : 'Configura los detalles de la nueva página dinámica.'}
            </p>
          </div>
        </div>

        <form onSubmit={handleSave} className="space-y-8 bg-gray-900/50 p-6 sm:p-8 rounded-2xl border border-gray-800">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label className="text-gray-300">Slug (URL)</Label>
              <Input name="slug" value={formData.slug} onChange={handleChange} required placeholder="ej: seguridad-ia" className="bg-black/50 border-gray-700 text-white" />
              <p className="text-xs text-gray-500">La landing estará en: /clase/[slug]</p>
            </div>
            
            <div className="space-y-2">
              <Label className="text-gray-300">Tema (Color Principal)</Label>
              <select 
                name="theme_color_primary" 
                value={formData.theme_color_primary} 
                onChange={handleChange}
                className="w-full flex h-10 rounded-md border border-gray-700 bg-black/50 px-3 py-2 text-sm text-white focus:outline-none focus:ring-2 focus:ring-labora-neon focus:border-transparent"
              >
                <option value="labora-neon">Verde Neón (Labora Clásico)</option>
                <option value="fuchsia-500">Fucsia (Atractivo/Dinámico)</option>
                <option value="indigo-500">Índigo (Profesional/Tech)</option>
                <option value="labora-red">Rojo (Alertas/Seguridad)</option>
              </select>
            </div>
          </div>

          <div className="space-y-2">
            <Label className="text-gray-300">URL del Video (YouTube)</Label>
            <Input name="video_url" value={formData.video_url} onChange={handleChange} required placeholder="https://www.youtube.com/embed/..." className="bg-black/50 border-gray-700 text-white" />
          </div>

          <div className="pt-4 border-t border-gray-800 space-y-6">
            <h3 className="text-xl font-semibold text-white">Textos de Cabecera</h3>
            
            <div className="space-y-2">
              <Label className="text-gray-300">Etiqueta (Badge Superior)</Label>
              <Input name="tag_text" value={formData.tag_text} onChange={handleChange} required placeholder="Ej: Alerta de Seguridad" className="bg-black/50 border-gray-700 text-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-gray-300">Título Principal (Texto normal)</Label>
                <Input name="title_main" value={formData.title_main} onChange={handleChange} required placeholder="Ej: Te van a hackear si construiste tu app" className="bg-black/50 border-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Título Resaltado (Texto con gradiente)</Label>
                <Input name="title_highlight" value={formData.title_highlight} onChange={handleChange} required placeholder="Ej: con IA (Lovable, Claude, etc)" className="bg-black/50 border-gray-700 text-white" />
              </div>
            </div>

            <div className="space-y-2">
              <Label className="text-gray-300">Descripción</Label>
              <Textarea 
                name="description" 
                value={formData.description} 
                onChange={handleChange} 
                required 
                className="h-24 bg-black/50 border-gray-700 text-white"
                placeholder="Párrafo descriptivo debajo del título..."
              />
            </div>
          </div>

          <div className="pt-4 border-t border-gray-800 space-y-6">
            <h3 className="text-xl font-semibold text-white">Ruta de Aprendizaje (Paso 1)</h3>
            
            <div className="space-y-2">
              <Label className="text-gray-300">Título del Paso 1</Label>
              <Input name="step1_title" value={formData.step1_title} onChange={handleChange} required placeholder="Ej: Identificar las Vulnerabilidades" className="bg-black/50 border-gray-700 text-white" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label className="text-gray-300">Viñeta 1 (Check)</Label>
                <Input name="step1_bullet1" value={formData.step1_bullet1} onChange={handleChange} required placeholder="Ej: Descubre los errores comunes..." className="bg-black/50 border-gray-700 text-white" />
              </div>
              <div className="space-y-2">
                <Label className="text-gray-300">Viñeta 2 (Check)</Label>
                <Input name="step1_bullet2" value={formData.step1_bullet2} onChange={handleChange} required placeholder="Ej: Aprende por qué ocurren..." className="bg-black/50 border-gray-700 text-white" />
              </div>
            </div>
          </div>

          <Button type="submit" disabled={saving} className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-bold py-6 text-lg">
            {saving ? <Loader2 className="w-5 h-5 animate-spin mr-2" /> : <Save className="w-5 h-5 mr-2" />}
            {editingId ? 'Guardar Cambios' : 'Crear Landing'}
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto pb-20">
      <div className="mb-8 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h1 className="text-3xl font-bold text-white mb-2">Generador de Landings</h1>
          <p className="text-gray-400">Administra las páginas dinámicas de captación de leads (Lead Magnets).</p>
        </div>
        <Button onClick={handleCreateNew} className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold">
          <Plus className="w-5 h-5 mr-2" /> Nueva Landing
        </Button>
      </div>

      <div className="bg-gray-900/50 rounded-2xl border border-gray-800 overflow-hidden">
        {landings.length === 0 ? (
          <div className="p-8 text-center text-gray-400">
            No hay landings creadas. Haz clic en "Nueva Landing" para empezar.
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-black/40 border-b border-gray-800 text-gray-400 text-sm">
                  <th className="p-4 font-medium">Slug / URL</th>
                  <th className="p-4 font-medium">Título Principal</th>
                  <th className="p-4 font-medium">Tema</th>
                  <th className="p-4 font-medium text-right">Acciones</th>
                </tr>
              </thead>
              <tbody>
                {landings.map(landing => (
                  <tr key={landing.id} className="border-b border-gray-800/50 hover:bg-gray-800/20 transition-colors">
                    <td className="p-4">
                      <div className="flex flex-col">
                        <span className="font-semibold text-white">/{landing.slug}</span>
                        <a 
                          href={`/clase/${landing.slug}`} 
                          target="_blank" 
                          rel="noreferrer"
                          className="text-xs text-labora-neon flex items-center mt-1 hover:underline w-fit"
                        >
                          Ver en vivo <ExternalLink className="w-3 h-3 ml-1" />
                        </a>
                      </div>
                    </td>
                    <td className="p-4">
                      <p className="text-gray-300 line-clamp-1">{landing.title_main} <span className="opacity-50">{landing.title_highlight}</span></p>
                    </td>
                    <td className="p-4">
                      <span className={`px-2 py-1 rounded text-xs font-medium border ${
                        landing.theme_color_primary === 'fuchsia-500' ? 'bg-fuchsia-500/10 text-fuchsia-400 border-fuchsia-500/20' :
                        landing.theme_color_primary === 'indigo-500' ? 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20' :
                        landing.theme_color_primary === 'labora-red' ? 'bg-red-500/10 text-red-400 border-red-500/20' :
                        'bg-labora-neon/10 text-labora-neon border-labora-neon/20'
                      }`}>
                        {landing.theme_color_primary}
                      </span>
                    </td>
                    <td className="p-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleEdit(landing)}
                          className="text-gray-400 hover:text-white hover:bg-gray-700"
                        >
                          <Pencil className="w-4 h-4" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={() => handleDelete(landing.id!, landing.slug)}
                          className="text-gray-400 hover:text-red-400 hover:bg-red-400/10"
                        >
                          <Trash2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
