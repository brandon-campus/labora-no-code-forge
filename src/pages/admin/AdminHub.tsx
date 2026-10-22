import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AlertTriangle, ArrowRight, CalendarDays, CheckCircle2, Clock, ExternalLink, Megaphone, Users, Video } from 'lucide-react';
import { supabase } from '@/lib/supabaseClient';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';
import { fallbackBootcampPricing } from '@/components/site/siteData';
import { LEAD_MAGNETS } from '@/components/lead-magnet/config';
import { Badge, Card, Loading, PageHeader } from '@/components/admin/ui';

const pageGroups = [
  { title: 'Sitio', links: [['Home', '/'], ['Bootcamp', '/bootcamp']] },
  { title: 'Embudos del Bootcamp', links: [['Anuncios', '/ads/bootcamp'], ['TikTok', '/tiktok/bootcamp'], ['Link in Bio', '/bootcamp-2'], ['Oferta', '/bootcamp-oferta']] },
  { title: 'Después de aplicar', links: [['Post-aplicación', '/post-aplicacion'], ['Post-aplicación (ads)', '/ads/post-aplicacion']] },
  { title: 'Clases gratuitas', links: [['Clase (Meta Ads)', '/clase-gratuita-ia'], ['Clase (orgánica)', '/clase-gratuita'], ['Guía PRD', '/guia-prd'], ['Deploy', '/clase-en-vivo']] },
] as const;

// Revisiones rápidas de lo que ve el público en las landings
const checksFor = (c: any) => {
  const prices = c?.precios_regionales ?? {};
  const missingCountries = Object.keys(fallbackBootcampPricing).filter((k) => !prices[k]?.unico);
  return [
    { ok: !!c, text: c ? `Cohorte #${c.numero} activa` : 'No hay una cohorte activa: las landings muestran datos de respaldo' },
    { ok: !!c?.fecha_inicio, text: c?.fecha_inicio ? `Fecha de inicio: ${c.fecha_inicio}` : 'Falta la fecha de inicio (se muestra "Sábado 14 de noviembre")' },
    { ok: missingCountries.length === 0, text: missingCountries.length ? `Faltan precios para: ${missingCountries.join(', ')}` : 'Precios cargados para todos los países' },
    { ok: Array.isArray(c?.temario) && c.temario.length > 0, text: Array.isArray(c?.temario) && c.temario.length ? `Temario de ${c.temario.length} semanas` : 'Temario vacío (se muestra el de respaldo)' },
  ];
};

export default function AdminHub() {
  const { data: cohorte, isLoading } = useActiveCohorte();
  const [classCount, setClassCount] = useState<number | null>(null);

  useEffect(() => {
    supabase.from('lead_magnets').select('id', { count: 'exact', head: true }).then(({ count }) => setClassCount(count ?? 0));
  }, []);

  if (isLoading) return <Loading />;
  const checks = checksFor(cohorte);
  const pending = checks.filter((c) => !c.ok).length;

  return (
    <div>
      <PageHeader title="Panel de control" description="Lo que cargues aquí se refleja al instante en todas las landings." />

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-md">
        {/* Cohorte activa */}
        <Card className="lg:col-span-7 relative overflow-hidden">
          <div className="pointer-events-none absolute -top-16 -right-16 w-56 h-56 rounded-full bg-primary-container/15 blur-3xl" />
          <div className="relative flex flex-col gap-space-md">
            <div className="flex items-center justify-between gap-space-sm">
              <span className="text-badge-caps uppercase text-on-surface-variant">Cohorte activa</span>
              {cohorte ? <Badge tone="live"><span className="w-1.5 h-1.5 rounded-full bg-labora-neon" /> En inscripción</Badge> : <Badge tone="warn">Sin cohorte</Badge>}
            </div>
            <div>
              <div className="text-display-hero-mobile font-jakarta text-on-surface">{cohorte ? `#${cohorte.numero}` : '—'}</div>
              <p className="text-body-sm text-on-surface-variant">Bootcamp IA y No-Code</p>
            </div>
            <dl className="grid grid-cols-2 gap-space-sm">
              {[
                { icon: CalendarDays, label: 'Inicio', value: cohorte?.fecha_inicio || '—' },
                { icon: Clock, label: 'Horario', value: cohorte?.horario || '—' },
                { icon: Users, label: 'Cupos', value: cohorte?.plazas_totales ? `${cohorte.plazas_totales} estudiantes` : '—' },
                { icon: Megaphone, label: 'Promoción', value: cohorte?.promocion_texto_banner ? 'Banner activo' : 'Sin promoción' },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="bg-surface-container-lowest/60 border border-white/[0.06] rounded-xl p-space-sm">
                  <dt className="flex items-center gap-1.5 text-badge-caps uppercase text-on-surface-variant"><Icon className="w-3.5 h-3.5 text-primary" /> {label}</dt>
                  <dd className="text-label-md text-on-surface mt-1">{value}</dd>
                </div>
              ))}
            </dl>
            <Link to="/admin/cohortes" className="inline-flex items-center gap-2 text-label-md text-primary hover:text-on-surface transition-colors w-fit">
              Editar cohorte <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </Card>

        {/* Revisión */}
        <Card className="lg:col-span-5" title="Revisión rápida" description={pending ? `${pending} ${pending === 1 ? 'punto' : 'puntos'} por revisar` : 'Todo en orden'}>
          <ul className="flex flex-col gap-space-sm">
            {checks.map((c) => (
              <li key={c.text} className="list-none flex items-start gap-2 text-body-sm">
                {c.ok
                  ? <CheckCircle2 className="w-[18px] h-[18px] text-labora-neon shrink-0 mt-0.5" />
                  : <AlertTriangle className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" />}
                <span className={c.ok ? 'text-on-surface-variant' : 'text-on-surface'}>{c.text}</span>
              </li>
            ))}
          </ul>
        </Card>

        {/* Clases */}
        <Link to="/admin/clases" className="lg:col-span-5 lg:self-start group bg-surface-container-low border border-white/[0.07] hover:border-primary-container/35 rounded-2xl p-space-md md:p-space-lg flex items-center gap-space-md transition-colors">
          <div className="w-12 h-12 rounded-xl bg-primary-container/15 flex items-center justify-center shrink-0">
            <Video className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h2 className="text-headline-sm text-on-surface normal-case">Clases gratuitas</h2>
            <p className="text-body-sm text-on-surface-variant">
              {classCount === null ? 'Cargando…' : `${classCount} creadas desde el panel`} · {Object.keys(LEAD_MAGNETS).length} fijas en el sitio
            </p>
          </div>
          <ArrowRight className="w-5 h-5 text-on-surface-variant group-hover:text-on-surface group-hover:translate-x-0.5 transition-all" />
        </Link>

        {/* Accesos a las páginas */}
        <Card className="lg:col-span-7" title="Páginas publicadas" description="Abre cada landing para revisar cómo se ve.">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
            {pageGroups.map((g) => (
              <div key={g.title}>
                <h3 className="text-badge-caps uppercase text-on-surface-variant mb-space-xs">{g.title}</h3>
                <ul className="flex flex-col">
                  {g.links.map(([label, href]) => (
                    <li key={href} className="list-none">
                      <a href={href} target="_blank" rel="noreferrer" className="flex items-center justify-between gap-2 py-1.5 text-body-sm text-on-surface hover:text-primary transition-colors">
                        <span>{label} <span className="text-on-surface-variant">{href}</span></span>
                        <ExternalLink className="w-3.5 h-3.5 shrink-0 text-on-surface-variant" />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
}
