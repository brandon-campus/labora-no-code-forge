import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';
import LiteVideo, { YOUTUBE_PRESENTATION } from '@/components/site/LiteVideo';
import { SiteLink } from '@/components/site/SiteLink';
import { APPLY_PATH, FALLBACK_START_DATE, FREE_CLASS_PATH, heroChips } from './data';

const HomeHero = () => {
  const { data: cohorte } = useActiveCohorte();
  const badge = cohorte
    ? `Cohorte #${cohorte.numero} · Inscripción abierta · Inicio ${cohorte.fecha_inicio || FALLBACK_START_DATE}`
    : `Inscripción abierta · Inicio ${FALLBACK_START_DATE}`;

  return (
    <section className="relative w-full overflow-hidden pb-space-xl pt-6 md:pt-12">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-primary-container/20 via-secondary-container/10 to-transparent blur-3xl opacity-60" />
      <div className="pointer-events-none absolute -top-10 -right-20 w-96 h-96 bg-primary-container/15 rounded-full blur-3xl" />
      <div className="relative w-full max-w-[1240px] mx-auto px-margin-mobile md:px-margin">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
          <div className="lg:col-span-7 flex flex-col gap-space-md z-10">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high/70 w-fit shadow-sm">
              <span className="w-2 h-2 rounded-full bg-labora-neon shadow-[0_0_8px_rgba(193,255,114,0.7)] animate-pulse motion-reduce:animate-none shrink-0" />
              <span className="text-badge-caps uppercase tracking-wider text-primary">{badge}</span>
            </div>
            <h1 className="text-headline-xl md:text-display-hero text-on-surface tracking-tight normal-case">
              De cero al lanzamiento de tu producto con{' '}
              <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">IA</span>.
              {' '}Paso a paso y acompañado.
            </h1>
            <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl">
              Aprende a construir y lanzar tu producto digital con IA, en vivo y con mentores. Sin necesidad de saber programar.
            </p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm pt-space-xs">
              <SiteLink to={APPLY_PATH} track="hero_apply" className="inline-flex items-center justify-center gap-space-xs text-label-md text-on-primary-container bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 active:scale-[0.99] transition-all rounded-full px-space-xl py-space-sm shadow-lg shadow-primary-container/20">
                <span>Agendar llamada gratuita</span>
                <ArrowRight className="w-[18px] h-[18px]" />
              </SiteLink>
              <SiteLink to={FREE_CLASS_PATH} track="hero_free_class" className="inline-flex items-center justify-center gap-space-xs text-label-md text-on-surface bg-white/[0.03] border border-white/10 hover:border-primary-container transition-colors rounded-full px-space-lg py-space-sm">
                <PlayCircle className="w-[18px] h-[18px] text-primary" />
                <span>Probar una clase gratis</span>
              </SiteLink>
            </div>
            <div className="flex items-center gap-space-xs pt-1">
              <ShieldCheck className="w-4 h-4 text-primary shrink-0" />
              <span className="text-body-sm text-on-surface-variant">Completa un formulario breve y elige tu horario · 15 min, gratis y sin compromiso</span>
            </div>
          </div>

          <div className="lg:col-span-5 relative mt-2 lg:mt-0 flex flex-col gap-space-sm">
            <LiteVideo {...YOUTUBE_PRESENTATION} className="shadow-2xl" />
            <div className="flex flex-wrap gap-2">
              {heroChips.map(({ icon: Icon, text }) => (
                <span key={text} className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-white/10 text-on-surface text-label-sm">
                  <Icon className="w-3.5 h-3.5 text-primary" /> {text}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeHero;
