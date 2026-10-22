import React, { useEffect, useMemo, useState } from 'react';
import { useQueryClient } from '@tanstack/react-query';
import { toast } from 'sonner';
import { ArrowDown, ArrowUp, ChevronDown, Clock, Code2, ExternalLink, Plus, Trash2 } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { fallbackBootcampPricing } from '@/components/site/siteData';
import { Card, Field, Loading, PageHeader, SaveBar, TextArea, TextInput, iconButton, secondaryButton } from '@/components/admin/ui';

type Session = { title: string; description?: string; tags?: string[]; [k: string]: unknown };
type Module = { title: string; description?: string; sessions?: Session[]; [k: string]: unknown };
type Price = { currency?: string; unico?: number; unicoOriginal?: number; cuotas3?: number; [k: string]: unknown };

const emptyCohorte = {
  numero: 1, estado: 'activa', fecha_inicio: '', semanas_duracion: '', horario: '', plazas_totales: 0,
  fecha_bienvenida: '', promocion_texto_banner: '', promocion_texto_badge: '',
};

// Los países deben coincidir con los del selector de precios de las landings
const COUNTRIES = Object.keys(fallbackBootcampPricing);
const countryLabel = (k: string) => (k === 'Otro' ? 'Otros países' : k);

export default function CohortesManager() {
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [base, setBase] = useState<any>(emptyCohorte);
  const [precios, setPrecios] = useState<Record<string, Price>>({});
  const [temario, setTemario] = useState<Module[]>([]);
  const [snapshot, setSnapshot] = useState('');

  const current = useMemo(() => JSON.stringify({ base, precios, temario }), [base, precios, temario]);
  const dirty = !loading && current !== snapshot;

  const applyData = (data: any) => {
    const { precios_regionales, temario: t, ...rest } = data ?? emptyCohorte;
    const p = (precios_regionales ?? {}) as Record<string, Price>;
    const m = Array.isArray(t) ? (t as Module[]) : [];
    setBase(rest);
    setPrecios(p);
    setTemario(m);
    setSnapshot(JSON.stringify({ base: rest, precios: p, temario: m }));
  };

  const fetchCohorte = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.from('cohortes').select('*').eq('estado', 'activa').single();
      if (error && error.code !== 'PGRST116') throw error;
      applyData(data);
    } catch (err: any) {
      toast.error('Error al cargar la cohorte activa: ' + err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { fetchCohorte(); }, []);

  // Avisa antes de cerrar la pestaña con cambios sin guardar
  useEffect(() => {
    if (!dirty) return;
    const onBeforeUnload = (e: BeforeUnloadEvent) => { e.preventDefault(); e.returnValue = ''; };
    window.addEventListener('beforeunload', onBeforeUnload);
    return () => window.removeEventListener('beforeunload', onBeforeUnload);
  }, [dirty]);

  const setField = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type } = e.target;
    setBase({ ...base, [name]: type === 'number' ? Number(value) : value });
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);
    try {
      // El acceso ya lo valida AdminLayout; aquí solo se necesita el email para registrar quién editó
      const { data: { user } } = await supabase.auth.getUser();
      const payload = { ...base, precios_regionales: precios, temario, updated_at: new Date().toISOString(), updated_by: user?.email };
      const { error } = base.id
        ? await supabase.from('cohortes').update(payload).eq('id', base.id)
        : await supabase.from('cohortes').insert([payload]);
      if (error) throw error;
      toast.success('Cohorte guardada. Los cambios ya se ven en las landings.');
      queryClient.invalidateQueries({ queryKey: ['active-cohorte'] });
      await fetchCohorte();
    } catch (err: any) {
      toast.error('Error al guardar: ' + err.message);
    } finally {
      setSaving(false);
    }
  };

  const discard = () => {
    const s = JSON.parse(snapshot);
    setBase(s.base); setPrecios(s.precios); setTemario(s.temario);
  };

  if (loading) return <Loading />;

  return (
    <form onSubmit={handleSave}>
      <PageHeader
        title={base.id ? `Cohorte #${base.numero}` : 'Nueva cohorte'}
        description="Es la cohorte activa: sus datos se muestran en la home, /bootcamp y todos los embudos."
        actions={
          <a href="/bootcamp" target="_blank" rel="noreferrer" className={secondaryButton}>
            Ver /bootcamp <ExternalLink className="w-4 h-4" />
          </a>
        }
      />
      {base.updated_at && (
        <p className="-mt-space-sm mb-space-md flex items-center gap-1.5 text-body-sm text-on-surface-variant">
          <Clock className="w-3.5 h-3.5" /> Última edición: {new Date(base.updated_at).toLocaleString('es-AR')}{base.updated_by ? ` · ${base.updated_by}` : ''}
        </p>
      )}

      <div className="flex flex-col gap-space-md">
        <Card title="Datos de la cohorte" description="Se muestran tal cual los escribas.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <Field label="Número de cohorte">
              <TextInput name="numero" type="number" min={1} value={base.numero} onChange={setField} required />
            </Field>
            <Field label="Cupos" hint="Aparece en la ficha: «20 estudiantes».">
              <TextInput name="plazas_totales" type="number" min={0} value={base.plazas_totales} onChange={setField} required />
            </Field>
            <Field label="Fecha de inicio" hint="Hero, ficha, tarjeta del Bootcamp y página post-aplicación. Ej: Sábado 14 de noviembre">
              <TextInput name="fecha_inicio" value={base.fecha_inicio} onChange={setField} required placeholder="Sábado 14 de noviembre" />
            </Field>
            <Field label="Duración" hint="Ej: 7 semanas">
              <TextInput name="semanas_duracion" value={base.semanas_duracion} onChange={setField} required placeholder="7 semanas" />
            </Field>
            <Field label="Horario (hora Argentina)" hint="Ej: Sábados 10-14hs">
              <TextInput name="horario" value={base.horario} onChange={setField} required placeholder="Sábados 10-14hs" />
            </Field>
            <Field label="Fecha de la clase de bienvenida" hint="Ej: Sábado 7 de noviembre">
              <TextInput name="fecha_bienvenida" value={base.fecha_bienvenida} onChange={setField} required />
            </Field>
          </div>
        </Card>

        <Card title="Promociones" description="Déjalos vacíos para no mostrar ninguna promoción.">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <Field label="Banner superior" hint="Franja arriba de /bootcamp, /bootcamp-2 y /bootcamp-oferta.">
              <TextInput name="promocion_texto_banner" value={base.promocion_texto_banner || ''} onChange={setField} placeholder="🚀 ¡30% de descuento hasta el viernes!" />
            </Field>
            <Field label="Etiqueta sobre el precio" hint="Aparece encima del precio en las landings.">
              <TextInput name="promocion_texto_badge" value={base.promocion_texto_badge || ''} onChange={setField} placeholder="⭐ 30% DE DESCUENTO" />
            </Field>
          </div>
          {(base.promocion_texto_banner || base.promocion_texto_badge) && (
            <div className="mt-space-md rounded-xl border border-dashed border-white/15 p-space-sm flex flex-col gap-space-sm">
              <span className="text-badge-caps uppercase text-on-surface-variant">Vista previa</span>
              {base.promocion_texto_banner && (
                <div className="bg-primary-container text-on-primary-container text-center text-label-md py-2 px-space-sm rounded-lg">{base.promocion_texto_banner}</div>
              )}
              {base.promocion_texto_badge && (
                <span className="inline-block w-fit text-badge-caps text-on-primary-container bg-primary-container rounded-full px-2 py-0.5">{base.promocion_texto_badge}</span>
              )}
            </div>
          )}
        </Card>

        <Card title="Precios por país" description="Pago único y precio tachado (opcional). Si cargas las 3 cuotas, también se muestran.">
          <div className="hidden md:grid grid-cols-[1.3fr_0.8fr_1fr_1fr_1fr] gap-space-sm px-space-xs pb-space-xs text-badge-caps uppercase text-on-surface-variant">
            <span>País</span><span>Moneda</span><span>Pago único</span><span>Antes (tachado)</span><span>Cuota (x3)</span>
          </div>
          <div className="flex flex-col gap-space-sm">
            {COUNTRIES.map((k) => {
              const row = precios[k] ?? {};
              const update = (field: keyof Price, value: string) => {
                const prev = precios[k] ?? { currency: fallbackBootcampPricing[k].currency };
                const next: Price = { ...prev, [field]: field === 'currency' ? value : value === '' ? undefined : Number(value) };
                setPrecios({ ...precios, [k]: next });
              };
              return (
                <div key={k} className="grid grid-cols-2 md:grid-cols-[1.3fr_0.8fr_1fr_1fr_1fr] gap-space-sm items-center bg-surface-container-lowest/50 md:bg-transparent rounded-xl p-space-sm md:p-0">
                  <span className="col-span-2 md:col-span-1 text-label-md text-on-surface md:px-space-xs">{countryLabel(k)}</span>
                  <label className="flex flex-col gap-1"><span className="md:hidden text-badge-caps uppercase text-on-surface-variant">Moneda</span><TextInput aria-label={`Moneda ${k}`} value={row.currency ?? fallbackBootcampPricing[k].currency} onChange={(e) => update('currency', e.target.value)} /></label>
                  <label className="flex flex-col gap-1"><span className="md:hidden text-badge-caps uppercase text-on-surface-variant">Pago único</span><TextInput aria-label={`Pago único ${k}`} type="number" min={0} value={row.unico ?? ''} onChange={(e) => update('unico', e.target.value)} placeholder="250" /></label>
                  <label className="flex flex-col gap-1"><span className="md:hidden text-badge-caps uppercase text-on-surface-variant">Antes (tachado)</span><TextInput aria-label={`Precio tachado ${k}`} type="number" min={0} value={row.unicoOriginal ?? ''} onChange={(e) => update('unicoOriginal', e.target.value)} placeholder="350" /></label>
                  <label className="flex flex-col gap-1"><span className="md:hidden text-badge-caps uppercase text-on-surface-variant">Cuota (x3)</span><TextInput aria-label={`Cuota ${k}`} type="number" min={0} value={row.cuotas3 ?? ''} onChange={(e) => update('cuotas3', e.target.value)} placeholder="—" /></label>
                </div>
              );
            })}
          </div>
        </Card>

        <Card title="Temario" description="Cada semana se muestra en /bootcamp; sus clases aparecen al tocarla.">
          <TemarioEditor temario={temario} onChange={setTemario} />
        </Card>

        <AdvancedJson precios={precios} temario={temario} onPrecios={setPrecios} onTemario={setTemario} />
      </div>

      <SaveBar dirty={dirty} saving={saving} onDiscard={discard} />
    </form>
  );
}

const TemarioEditor = ({ temario, onChange }: { temario: Module[]; onChange: (t: Module[]) => void }) => {
  const setModule = (i: number, m: Module) => onChange(temario.map((x, j) => (j === i ? m : x)));
  const move = (i: number, dir: -1 | 1) => {
    const next = [...temario];
    [next[i], next[i + dir]] = [next[i + dir], next[i]];
    onChange(next);
  };
  const remove = (i: number) => {
    if (window.confirm(`¿Eliminar la semana ${i + 1} y sus clases?`)) onChange(temario.filter((_, j) => j !== i));
  };

  return (
    <div className="flex flex-col gap-space-sm">
      {temario.map((m, i) => (
        <details key={i} className="group bg-surface-container-lowest/50 border border-white/[0.06] rounded-xl">
          <summary className="list-none cursor-pointer flex items-center gap-space-sm p-space-sm [&::-webkit-details-marker]:hidden">
            <span className="w-9 h-9 rounded-lg bg-primary-container/15 text-primary text-label-md font-jakarta flex items-center justify-center shrink-0">{i + 1}</span>
            <span className="flex-1 min-w-0">
              <span className="block text-label-md text-on-surface truncate">{m.title || 'Semana sin título'}</span>
              <span className="block text-body-sm text-on-surface-variant">{m.sessions?.length ?? 0} clases</span>
            </span>
            <ChevronDown className="w-5 h-5 text-on-surface-variant transition-transform group-open:rotate-180" />
          </summary>

          <div className="px-space-sm pb-space-sm flex flex-col gap-space-md border-t border-white/[0.06] pt-space-md">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
              <Field label="Título de la semana">
                <TextInput value={m.title} onChange={(e) => setModule(i, { ...m, title: e.target.value })} required />
              </Field>
              <Field label="Descripción">
                <TextInput value={m.description ?? ''} onChange={(e) => setModule(i, { ...m, description: e.target.value })} />
              </Field>
            </div>

            <div className="flex flex-col gap-space-sm">
              <span className="text-badge-caps uppercase text-on-surface-variant">Clases</span>
              {(m.sessions ?? []).map((s, si) => {
                const setSession = (ns: Session) => setModule(i, { ...m, sessions: (m.sessions ?? []).map((x, j) => (j === si ? ns : x)) });
                return (
                  <div key={si} className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr_auto] gap-space-sm items-start bg-surface-container-low rounded-xl p-space-sm">
                    <TextInput aria-label="Título de la clase" value={s.title} onChange={(e) => setSession({ ...s, title: e.target.value })} placeholder="Título de la clase" required />
                    <TextInput aria-label="Descripción de la clase" value={s.description ?? ''} onChange={(e) => setSession({ ...s, description: e.target.value })} placeholder="Descripción" />
                    <TagsInput value={s.tags ?? []} onChange={(tags) => setSession({ ...s, tags })} />
                    <button type="button" aria-label="Eliminar clase" onClick={() => setModule(i, { ...m, sessions: (m.sessions ?? []).filter((_, j) => j !== si) })} className={`${iconButton} hover:text-primary justify-self-end`}>
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                );
              })}
              <button
                type="button"
                onClick={() => setModule(i, { ...m, sessions: [...(m.sessions ?? []), { title: '', description: '', tags: [], date: 'Sábado', duration: '4h', instructor: 'Equipo Labora', resources: 0 }] })}
                className={`${secondaryButton} w-fit`}
              >
                <Plus className="w-4 h-4" /> Agregar clase
              </button>
            </div>

            <div className="flex items-center justify-end gap-1 border-t border-white/[0.06] pt-space-sm">
              <button type="button" aria-label="Subir semana" disabled={i === 0} onClick={() => move(i, -1)} className={iconButton}><ArrowUp className="w-4 h-4" /></button>
              <button type="button" aria-label="Bajar semana" disabled={i === temario.length - 1} onClick={() => move(i, 1)} className={iconButton}><ArrowDown className="w-4 h-4" /></button>
              <button type="button" onClick={() => remove(i)} className="inline-flex items-center gap-1.5 text-label-sm text-on-surface-variant hover:text-primary px-space-sm py-2 rounded-full hover:bg-primary-container/10 transition-colors">
                <Trash2 className="w-4 h-4" /> Eliminar semana
              </button>
            </div>
          </div>
        </details>
      ))}
      <button
        type="button"
        onClick={() => onChange([...temario, { title: '', description: '', week: `Semana ${temario.length + 1}`, sessions: [] }])}
        className={`${secondaryButton} w-fit`}
      >
        <Plus className="w-4 h-4" /> Agregar semana
      </button>
    </div>
  );
};

// Etiquetas separadas por coma; se confirman al salir del campo para no cortar la escritura
const TagsInput = ({ value, onChange }: { value: string[]; onChange: (tags: string[]) => void }) => {
  const [text, setText] = useState(value.join(', '));
  useEffect(() => setText(value.join(', ')), [value.join('|')]);
  return (
    <TextInput
      aria-label="Etiquetas"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={() => onChange(text.split(',').map((t) => t.trim()).filter(Boolean))}
      placeholder="Etiquetas: Supabase, IA"
    />
  );
};

// Edición directa del JSON, para casos que los editores no cubren
const AdvancedJson = ({ precios, temario, onPrecios, onTemario }: {
  precios: Record<string, Price>; temario: Module[];
  onPrecios: (p: Record<string, Price>) => void; onTemario: (t: Module[]) => void;
}) => {
  const [open, setOpen] = useState(false);
  const [preciosText, setPreciosText] = useState('');
  const [temarioText, setTemarioText] = useState('');
  const [error, setError] = useState('');

  const toggle = () => {
    if (!open) {
      setPreciosText(JSON.stringify(precios, null, 2));
      setTemarioText(JSON.stringify(temario, null, 2));
      setError('');
    }
    setOpen(!open);
  };

  const apply = () => {
    try {
      const p = JSON.parse(preciosText);
      const t = JSON.parse(temarioText);
      if (!Array.isArray(t)) throw new Error('El temario debe ser una lista ([ ... ])');
      onPrecios(p);
      onTemario(t);
      setError('');
      toast.success('JSON aplicado. Recuerda guardar los cambios.');
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <Card>
      <button type="button" onClick={toggle} className="w-full flex items-center justify-between gap-space-sm text-left">
        <span className="flex items-center gap-space-sm">
          <Code2 className="w-5 h-5 text-on-surface-variant" />
          <span>
            <span className="block text-headline-sm text-on-surface normal-case">Modo avanzado (JSON)</span>
            <span className="block text-body-sm text-on-surface-variant">Solo si necesitas editar campos que no están arriba.</span>
          </span>
        </span>
        <ChevronDown className={`w-5 h-5 text-on-surface-variant transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="mt-space-md flex flex-col gap-space-md">
          <Field label="Precios regionales">
            <TextArea value={preciosText} onChange={(e) => setPreciosText(e.target.value)} className="font-mono text-body-sm h-48" spellCheck={false} />
          </Field>
          <Field label="Temario">
            <TextArea value={temarioText} onChange={(e) => setTemarioText(e.target.value)} className="font-mono text-body-sm h-64" spellCheck={false} />
          </Field>
          {error && <p className="text-body-sm text-primary">JSON inválido: {error}</p>}
          <button type="button" onClick={apply} className={`${secondaryButton} w-fit`}>Aplicar JSON</button>
        </div>
      )}
    </Card>
  );
};
