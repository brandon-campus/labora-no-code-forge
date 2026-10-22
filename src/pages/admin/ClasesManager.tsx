import React, { useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { ArrowLeft, ExternalLink, Lock, Pencil, Plus, Trash2, Video } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { LEAD_MAGNETS } from '@/components/lead-magnet/config';
import { Badge, Card, Field, Loading, PageHeader, SaveBar, TextArea, TextInput, iconButton, primaryButton, secondaryButton } from '@/components/admin/ui';

interface LeadMagnet {
  id?: number;
  slug: string;
  /** Ya no se usa en el diseño v2 (todas las clases usan rojo + neón); se conserva por compatibilidad */
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
  slug: '', theme_color_primary: 'labora-neon', video_url: '', tag_text: 'Clase gratuita',
  title_main: '', title_highlight: '', description: '', step1_title: '', step1_bullet1: '', step1_bullet2: '',
};

// Rutas fijas (definidas en código, ver LEAD_MAGNETS) para mostrarlas como referencia
const FIXED_PATHS: Record<string, string> = {
  claseGratuitaAds: '/clase-gratuita-ia', claseGratuitaTikTok: '/tiktok/clase-gratuita-ia', claseGratuitaOrganica: '/clase-gratuita',
  claseEnVivo: '/clase-en-vivo', claseHerramientasApp: '/clase-herramientas-app', guiaPrd: '/guia-prd', seguridadIA: '/seguridad-ia',
};

const toSlug = (v: string) => v.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9-]+/g, '-').replace(/-+/g, '-').replace(/^-/, '');

// Acepta links normales de YouTube y los convierte al formato embebible
const toEmbedUrl = (url: string) => {
  const yt = url.match(/(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/shorts\/)([A-Za-z0-9_-]{11})/);
  return yt ? `https://www.youtube.com/embed/${yt[1]}` : url.trim();
};

export default function ClasesManager() {
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [landings, setLandings] = useState<LeadMagnet[]>([]);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [formData, setFormData] = useState<LeadMagnet>(emptyForm);
  const [snapshot, setSnapshot] = useState('');
  const [isFormOpen, setIsFormOpen] = useState(false);

  const dirty = useMemo(() => JSON.stringify(formData) !== snapshot, [formData, snapshot]);

  const fetchLandings = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('lead_magnets').select('*').order('id', { ascending: false });
      if (error) throw error;
      setLandings(data || []);
    } catch (err: any) {
      toast.error('Error al cargar las clases: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchLandings(); }, []);

  const openForm = (data: LeadMagnet, id: number | null) => {
    setFormData(data);
    setSnapshot(JSON.stringify(data));
    setEditingId(id);
    setIsFormOpen(true);
    window.scrollTo({ top: 0 });
  };

  const closeForm = () => {
    if (dirty && !window.confirm('Tienes cambios sin guardar. ¿Salir igual?')) return;
    setIsFormOpen(false);
  };

  const handleDelete = async (id: number, slug: string) => {
    if (!window.confirm(`¿Eliminar la clase /clase/${slug}? La página dejará de existir.`)) return;
    try {
      const { error } = await supabase.from('lead_magnets').delete().eq('id', id);
      if (error) throw error;
      toast.success('Clase eliminada.');
      await fetchLandings();
    } catch (err: any) {
      toast.error('Error al eliminar: ' + err.message);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: name === 'slug' ? toSlug(value) : value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      const payload = { ...formData, slug: formData.slug.replace(/-$/, ''), video_url: toEmbedUrl(formData.video_url) };
      const { error } = editingId
        ? await supabase.from('lead_magnets').update(payload).eq('id', editingId)
        : await supabase.from('lead_magnets').insert([payload]);
      if (error) throw error;
      toast.success(editingId ? 'Clase actualizada.' : 'Clase creada.');
      setIsFormOpen(false);
      await fetchLandings();
    } catch (err: any) {
      toast.error(err.code === '23505' ? 'Ya existe una clase con esa URL.' : 'Error al guardar: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <Loading />;

  if (isFormOpen) {
    const embed = toEmbedUrl(formData.video_url);
    return (
      <form onSubmit={handleSave}>
        <button type="button" onClick={closeForm} className="inline-flex items-center gap-1.5 text-label-md text-on-surface-variant hover:text-on-surface mb-space-md">
          <ArrowLeft className="w-4 h-4" /> Volver a clases
        </button>
        <PageHeader
          title={editingId ? 'Editar clase' : 'Nueva clase'}
          description={formData.slug ? `Se publica en /clase/${formData.slug}` : 'Completa los datos para crear la página.'}
          actions={editingId && formData.slug ? (
            <a href={`/clase/${formData.slug}`} target="_blank" rel="noreferrer" className={secondaryButton}>Ver página <ExternalLink className="w-4 h-4" /></a>
          ) : undefined}
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md items-start">
          <div className="lg:col-span-7 flex flex-col gap-space-md">
            <Card title="Dirección y video">
              <div className="flex flex-col gap-space-md">
                <Field label="URL de la página" hint="Solo minúsculas, números y guiones.">
                  <div className="flex items-center">
                    <span className="text-body-md text-on-surface-variant bg-surface-container-high border border-r-0 border-white/10 rounded-l-xl px-space-sm py-2.5">/clase/</span>
                    <TextInput name="slug" value={formData.slug} onChange={handleChange} required placeholder="seguridad-ia" className="rounded-l-none" />
                  </div>
                </Field>
                <Field label="Link del video" hint="YouTube (cualquier link) o el link de embed de Tella.">
                  <TextInput name="video_url" value={formData.video_url} onChange={handleChange} required placeholder="https://www.youtube.com/watch?v=..." />
                </Field>
              </div>
            </Card>

            <Card title="Textos de la página">
              <div className="flex flex-col gap-space-md">
                <Field label="Etiqueta superior">
                  <TextInput name="tag_text" value={formData.tag_text} onChange={handleChange} required placeholder="Clase gratuita" />
                </Field>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <Field label="Título (texto blanco)">
                    <TextInput name="title_main" value={formData.title_main} onChange={handleChange} required placeholder="Te van a hackear si construiste tu app" />
                  </Field>
                  <Field label="Título (texto destacado en rojo)">
                    <TextInput name="title_highlight" value={formData.title_highlight} onChange={handleChange} required placeholder="con IA (Lovable, Claude, etc.)" />
                  </Field>
                </div>
                <Field label="Descripción">
                  <TextArea name="description" value={formData.description} onChange={handleChange} required className="h-24" placeholder="Párrafo debajo del título…" />
                </Field>
              </div>
            </Card>

            <Card title="Paso 1 de la ruta de aprendizaje" description="El paso 2 siempre es el Bootcamp y lleva a /bootcamp-2.">
              <div className="flex flex-col gap-space-md">
                <Field label="Título del paso">
                  <TextInput name="step1_title" value={formData.step1_title} onChange={handleChange} required placeholder="Identificar las vulnerabilidades" />
                </Field>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                  <Field label="Punto 1">
                    <TextInput name="step1_bullet1" value={formData.step1_bullet1} onChange={handleChange} required />
                  </Field>
                  <Field label="Punto 2">
                    <TextInput name="step1_bullet2" value={formData.step1_bullet2} onChange={handleChange} required />
                  </Field>
                </div>
              </div>
            </Card>
          </div>

          {/* Vista previa en vivo */}
          <div className="lg:col-span-5 lg:sticky lg:top-24">
            <Card title="Vista previa">
              <div className="flex flex-col items-center text-center gap-space-sm">
                <span className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-full bg-surface-container-high/70 text-badge-caps uppercase text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-labora-neon" /> {formData.tag_text || 'Etiqueta'} · Gratis
                </span>
                <p className="text-headline-sm text-on-surface">
                  {formData.title_main || 'Título'}{' '}
                  <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">{formData.title_highlight || 'destacado'}</span>
                </p>
                <div className="w-full aspect-video rounded-xl overflow-hidden bg-surface-container-lowest border border-white/[0.07] flex items-center justify-center">
                  {embed ? (
                    <iframe src={embed} title="Vista previa del video" className="w-full h-full" allow="encrypted-media; picture-in-picture" />
                  ) : (
                    <span className="flex flex-col items-center gap-1 text-body-sm text-on-surface-variant"><Video className="w-6 h-6" /> Pega el link del video</span>
                  )}
                </div>
              </div>
            </Card>
          </div>
        </div>

        <SaveBar dirty={dirty} saving={saving} label={editingId ? 'Guardar cambios' : 'Crear clase'} />
      </form>
    );
  }

  return (
    <div>
      <PageHeader
        title="Clases gratuitas"
        description="Páginas de clases en video para captar interesados. Las que crees aquí se publican en /clase/…"
        actions={<button type="button" onClick={() => openForm(emptyForm, null)} className={primaryButton}><Plus className="w-4 h-4" /> Nueva clase</button>}
      />

      {landings.length === 0 ? (
        <Card>
          <div className="flex flex-col items-center text-center gap-space-sm py-space-lg">
            <Video className="w-8 h-8 text-on-surface-variant" />
            <p className="text-body-md text-on-surface-variant">Todavía no creaste clases desde el panel.</p>
            <button type="button" onClick={() => openForm(emptyForm, null)} className={secondaryButton}><Plus className="w-4 h-4" /> Crear la primera</button>
          </div>
        </Card>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-space-md">
          {landings.map((l) => (
            <article key={l.id} className="bg-surface-container-low border border-white/[0.07] hover:border-primary-container/35 transition-colors rounded-2xl p-space-md flex flex-col gap-space-sm">
              <div className="flex items-start justify-between gap-space-sm">
                <Badge>{l.tag_text}</Badge>
                <div className="flex items-center -mr-2 -mt-2">
                  <button type="button" aria-label="Editar" onClick={() => openForm(l, l.id!)} className={iconButton}><Pencil className="w-4 h-4" /></button>
                  <button type="button" aria-label="Eliminar" onClick={() => handleDelete(l.id!, l.slug)} className={`${iconButton} hover:text-primary`}><Trash2 className="w-4 h-4" /></button>
                </div>
              </div>
              <h2 className="text-headline-sm text-on-surface normal-case line-clamp-2">{l.title_main} <span className="text-primary">{l.title_highlight}</span></h2>
              <a href={`/clase/${l.slug}`} target="_blank" rel="noreferrer" className="mt-auto inline-flex items-center gap-1.5 text-body-sm text-on-surface-variant hover:text-primary w-fit">
                /clase/{l.slug} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </article>
          ))}
        </div>
      )}

      <Card className="mt-space-lg" title="Clases fijas del sitio" description="Están definidas en el código; para cambiarlas hay que pedir un ajuste.">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-space-lg">
          {Object.entries(LEAD_MAGNETS).map(([key, c]) => (
            <li key={key} className="list-none flex items-center justify-between gap-space-sm py-2 border-b border-white/[0.06]">
              <span className="flex items-center gap-2 min-w-0">
                <Lock className="w-3.5 h-3.5 text-on-surface-variant shrink-0" />
                <span className="text-body-sm text-on-surface truncate">{c.titleMain} {c.titleHighlight}</span>
              </span>
              <a href={FIXED_PATHS[key]} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-body-sm text-on-surface-variant hover:text-primary shrink-0">
                {FIXED_PATHS[key]} <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </li>
          ))}
        </ul>
      </Card>
    </div>
  );
}
