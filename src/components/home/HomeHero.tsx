import { ArrowDown, ArrowRight } from 'lucide-react';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';
import { SiteLink } from '@/components/site/SiteLink';
import AmericasMap from './AmericasMap';
import { STUDENT_COUNTRIES } from './americasMapData';
import { FALLBACK_START_DATE } from './data';

const HomeHero = () => {
  const { data: cohorte } = useActiveCohorte();
  const badge = cohorte
    ? `Cohorte #${cohorte.numero} · Inscripción abierta · Inicio ${cohorte.fecha_inicio || FALLBACK_START_DATE}`
    : `Inscripción abierta · Inicio ${FALLBACK_START_DATE}`;

  return (
    <section className="relative w-full overflow-hidden pb-space-xl pt-6 md:pt-12">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-primary-container/20 via-secondary-container/10 to-transparent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute top-20 -right-24 w-96 h-96 bg-labora-neon/[0.06] rounded-full blur-3xl" />
      <div className="relative w-full max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high/70 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-labora-neon shadow-[0_0_8px_rgba(193,255,114,0.7)] animate-pulse motion-reduce:animate-none shrink-0" />
              <span className="text-badge-caps uppercase tracking-wider text-primary">{badge}</span>
            </div>
            <h1 className="text-headline-xl md:text-display-hero text-on-surface tracking-tight normal-case">
              La mejor academia de{' '}
              <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">IA y No Code</span>
              {' '}de Latinoamérica
            </h1>
            <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl">
              Aprende a desarrollar software con IA y No Code, en vivo y paso a paso: de cero al lanzamiento.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs">
              <SiteLink to="/bootcamp" track="hero_apply_bootcamp" className="inline-flex items-center justify-center gap-space-xs text-label-md text-on-primary-container bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 active:scale-[0.99] transition-all rounded-full px-space-xl py-space-sm shadow-lg shadow-primary-container/20">
                <span>Aplicar ahora</span>
                <ArrowRight className="w-[18px] h-[18px]" />
              </SiteLink>
              <SiteLink to="#programas" track="hero_programs" className="inline-flex items-center justify-center gap-space-xs text-label-md text-on-surface bg-white/[0.03] border border-white/10 hover:border-labora-neon/60 transition-colors rounded-full px-space-lg py-space-sm">
                <span>Ver programas</span>
                <ArrowDown className="w-[18px] h-[18px] text-labora-neon" />
              </SiteLink>
            </div>
            <div className="flex flex-wrap items-center gap-x-space-md gap-y-space-xs pt-1 text-body-sm text-on-surface-variant">
              <span><strong className="text-labora-neon">15+</strong> cohortes dictadas</span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>Alumnos en <strong className="text-labora-neon">{STUDENT_COUNTRIES.length} países</strong></span>
              <span className="w-1 h-1 rounded-full bg-white/20" />
              <span>100% en vivo</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[380px] lg:max-w-none rounded-3xl bg-surface-container-low/60 border border-white/[0.07] p-space-md md:p-space-lg shadow-2xl">
              <div className="flex items-center justify-between gap-space-sm mb-space-sm">
                <span className="text-badge-caps uppercase text-on-surface-variant">Nuestros alumnos</span>
                <span className="inline-flex items-center gap-1.5 text-badge-caps uppercase text-labora-neon">
                  <span className="w-1.5 h-1.5 rounded-full bg-labora-neon" /> {STUDENT_COUNTRIES.length} países
                </span>
              </div>
              <AmericasMap />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
