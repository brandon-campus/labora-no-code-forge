import { ArrowRight, CalendarCheck, CheckCircle2, MessageCircle, ShieldCheck } from 'lucide-react';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { fallbackModules } from '@/components/CurriculumSection';
import { Container, Eyebrow, GradientText, H2 } from '@/components/site/primitives';
import { SiteLink } from '@/components/site/SiteLink';
import LiteVideo, { YOUTUBE_PRESENTATION } from '@/components/site/LiteVideo';
import BootcampPriceBox, { formatPrice, useBootcampPrice } from '@/components/site/BootcampPriceBox';
import { facts, heroChips, includes } from './data';
import { useLanding } from './landing';
import { FALLBACK_START_DATE } from '@/components/site/siteData';

export const PromoBanner = () => {
  const { data: cohorte } = useActiveCohorte();
  const { applyPath, trackApply } = useLanding();
  if (!cohorte?.promocion_texto_banner) return null;
  return (
    <SiteLink to={applyPath} onClick={() => trackApply('PromoBannerV2')} className="block bg-primary-container text-on-primary-container text-center text-label-md py-2 px-margin-mobile hover:brightness-110 transition-all">
      {cohorte.promocion_texto_banner}
    </SiteLink>
  );
};

export const BootcampHero = () => {
  const { data: cohorte } = useActiveCohorte();
  const { applyPath, whatsappUrl, trackApply, trackWhatsapp, showPricing } = useLanding();
  const price = useBootcampPrice();
  const badge = cohorte
    ? `Cohorte #${cohorte.numero} · Inscripción abierta · Inicio ${cohorte.fecha_inicio || FALLBACK_START_DATE}`
    : `Inscripción abierta · Inicio ${FALLBACK_START_DATE}`;

  return (
    <section className="relative w-full overflow-hidden pb-space-xl pt-6 md:pt-12">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-primary-container/20 via-secondary-container/10 to-transparent blur-3xl opacity-60" />
      <Container className="relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-center">
          <div className="lg:col-span-6 flex flex-col gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high/70 w-fit">
              <span className="w-2 h-2 rounded-full bg-labora-neon shadow-[0_0_8px_rgba(193,255,114,0.7)] animate-pulse motion-reduce:animate-none shrink-0" />
              <span className="text-badge-caps uppercase tracking-wider text-primary">{badge}</span>
            </div>
            <h1 className="text-headline-xl md:text-display-hero text-on-surface tracking-tight normal-case">
              Crea proyectos con <GradientText>IA</GradientText> y empieza a vivir de ellos.
            </h1>
            <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-xl">
              Bootcamp en vivo de 7 semanas para construir y lanzar tu propio producto digital con IA y No-Code, sin saber programar.
            </p>
            <ul className="flex flex-wrap gap-2">
              {heroChips.map(({ icon: Icon, text }) => (
                <li key={text} className="list-none inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-white/10 text-on-surface text-label-sm">
                  <Icon className="w-3.5 h-3.5 text-primary" /> {text}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-space-sm">
              <SiteLink to={applyPath} onClick={() => trackApply('HeroV2')} className="inline-flex items-center justify-center gap-space-xs text-label-md text-on-primary-container bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 active:scale-[0.99] transition-all rounded-full px-space-xl py-space-sm shadow-lg shadow-primary-container/20">
                <span>Aplicar al Bootcamp</span><ArrowRight className="w-[18px] h-[18px]" />
              </SiteLink>
              <SiteLink to={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsapp('HeroV2')} className="inline-flex items-center justify-center gap-space-xs text-label-md text-on-surface bg-white/[0.03] border border-white/10 hover:border-primary-container transition-colors rounded-full px-space-lg py-space-sm">
                <MessageCircle className="w-[18px] h-[18px] text-primary" /><span>Hablemos por WhatsApp</span>
              </SiteLink>
            </div>
            {showPricing && (
              <a href="#precio" className="text-body-sm text-on-surface-variant hover:text-on-surface transition-colors w-fit">
                Inversión: <strong className="text-on-surface">{formatPrice(price)}</strong> · ver precio en tu país →
              </a>
            )}
          </div>
          <div className="lg:col-span-6">
            <LiteVideo {...YOUTUBE_PRESENTATION} className="shadow-2xl" />
          </div>
        </div>
      </Container>
    </section>
  );
};

export const BootcampFacts = () => {
  const { data: cohorte } = useActiveCohorte();
  const { whatsappUrl, trackWhatsapp } = useLanding();
  return (
    <section id="fechas" className="w-full py-space-xl bg-surface-container-lowest scroll-mt-20">
      <Container>
        <div className="max-w-2xl mb-space-lg">
          <Eyebrow>PRÓXIMA COHORTE{cohorte ? ` · #${cohorte.numero}` : ''}</Eyebrow>
          <H2>Todo lo que necesitas saber, de un vistazo</H2>
        </div>
        <dl className="grid grid-cols-2 md:grid-cols-3 gap-space-sm">
          {facts(cohorte).map(({ icon: Icon, label, value }) => (
            <div key={label} className={`bg-surface-container-low border rounded-2xl p-space-md flex flex-col gap-1 ${label === 'Inicio' ? 'border-labora-neon/40 shadow-[0_0_24px_-12px_rgba(193,255,114,0.5)]' : 'border-white/[0.07]'}`}>
              <Icon className={`w-5 h-5 mb-1 ${label === 'Inicio' ? 'text-labora-neon' : 'text-primary'}`} />
              <dt className="text-badge-caps text-on-surface-variant uppercase">{label}</dt>
              <dd className="text-label-md md:text-headline-sm text-on-surface">{value}</dd>
            </div>
          ))}
        </dl>
        <p className="text-body-sm text-on-surface-variant mt-space-md">
          ¿No llegas a esta cohorte?{' '}
          <SiteLink to={whatsappUrl} target="_blank" rel="noopener noreferrer" onClick={() => trackWhatsapp('FactsV2')} className="text-primary hover:text-on-surface underline-offset-4 hover:underline">
            Escríbenos y te avisamos cuando abra la próxima
          </SiteLink>.
        </p>
      </Container>
    </section>
  );
};

type Session = { title: string; description?: string; tags?: string[] };
type Module = { title: string; description?: string; sessions?: Session[] };

export const BootcampCurriculum = () => {
  const { data: cohorte } = useActiveCohorte();
  const modules = ((cohorte?.temario as Module[] | null) || fallbackModules) as Module[];

  return (
    <section id="temario" className="w-full py-space-xl bg-surface scroll-mt-20">
      <div className="w-full max-w-[900px] mx-auto px-margin-mobile md:px-margin">
        <div className="mb-space-lg">
          <Eyebrow>TEMARIO</Eyebrow>
          <H2>Conviértete en AI Builder en <GradientText>{modules.length} semanas</GradientText></H2>
          <p className="text-body-md text-on-surface-variant mt-1">Toca cada semana para ver sus clases.</p>
        </div>

        <div className="bg-surface-container-low border border-primary-container/30 rounded-2xl p-space-md mb-space-sm flex gap-space-sm">
          <CalendarCheck className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h3 className="text-headline-sm text-on-surface normal-case">Clase de bienvenida</h3>
            <p className="text-body-sm text-on-surface-variant mt-1">Sesión introductoria donde conoces al equipo, la metodología y te preparas para comenzar el programa.</p>
          </div>
        </div>

        <Accordion type="multiple" className="space-y-space-sm">
          {modules.map((m, i) => (
            <AccordionItem key={m.title} value={`semana-${i}`} className="bg-surface-container-low border border-white/[0.07] rounded-2xl overflow-hidden">
              <AccordionTrigger className="px-space-md py-space-md text-left hover:no-underline [&>svg]:text-primary gap-space-sm">
                <span className="flex items-center gap-space-md">
                  <span className="flex flex-col items-center w-12 shrink-0">
                    <span className="text-badge-caps text-on-surface-variant">SEMANA</span>
                    <span className="text-headline-xl font-jakarta bg-gradient-to-br from-primary to-primary-container bg-clip-text text-transparent leading-none">{i + 1}</span>
                  </span>
                  <span className="flex flex-col">
                    <span className="text-headline-sm text-on-surface normal-case">{capitalize(m.title.replace(/FASE \d+: /i, ''))}</span>
                    {m.description && <span className="text-body-sm text-on-surface-variant font-normal mt-0.5">{m.description}</span>}
                  </span>
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-space-md">
                <div className="space-y-space-sm">
                  {m.sessions?.map((s) => (
                    <div key={s.title} className="bg-surface-container-high/60 rounded-xl p-space-md">
                      <div className="text-label-md text-on-surface">{s.title}</div>
                      {s.description && <div className="text-body-sm text-on-surface-variant mt-1">{s.description}</div>}
                      {!!s.tags?.length && (
                        <div className="flex flex-wrap gap-1.5 mt-space-sm">
                          {s.tags.map((t) => (
                            <span key={t} className="text-badge-caps text-primary bg-primary-container/10 border border-primary-container/30 rounded-full px-2 py-0.5">{t}</span>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

// Los títulos del temario vienen en MAYÚSCULAS desde la base; se muestran en formato oración
const capitalize = (t: string) => {
  const lower = t.toLowerCase();
  return lower.charAt(0).toUpperCase() + lower.slice(1).replace(/\b(ia|n8n|ui|rls|supabase|github|claude)\b/g, (w) =>
    ({ ia: 'IA', n8n: 'n8n', ui: 'UI', rls: 'RLS', supabase: 'Supabase', github: 'GitHub', claude: 'Claude' }[w] ?? w));
};

export const BootcampPricing = () => {
  const { applyPath, trackApply } = useLanding();
  return (
  <section id="precio" className="w-full py-space-xl bg-surface scroll-mt-20">
    <div className="w-full max-w-[640px] mx-auto px-margin-mobile md:px-margin">
      <div className="text-center mb-space-lg">
        <Eyebrow>INVERSIÓN</Eyebrow>
        <H2>Todo el programa, en un solo pago</H2>
      </div>
      <div className="rounded-3xl p-1 bg-gradient-to-b from-primary-container/50 to-transparent">
        <BootcampPriceBox applyPath={applyPath} track="pricing_apply" onApplyClick={() => trackApply('PricingV2')} size="lg">
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-space-md gap-y-2 py-space-sm border-y border-white/[0.07] my-space-xs">
            {includes.map((it) => (
              <li key={it} className="list-none flex items-center gap-2 text-body-sm text-on-surface">
                <CheckCircle2 className="w-[18px] h-[18px] text-labora-neon shrink-0" /> {it}
              </li>
            ))}
          </ul>
        </BootcampPriceBox>
      </div>
      <p className="flex items-start justify-center gap-2 text-center text-body-sm text-on-surface-variant mt-space-md">
        <ShieldCheck className="w-4 h-4 text-primary shrink-0 mt-0.5" />
        Al aplicar coordinamos una llamada gratuita de 15 minutos para evaluar si el bootcamp es para ti.
      </p>
    </div>
  </section>
  );
};

const ofertaTools = ['Supabase', 'Claude Code', 'Vercel', 'n8n', 'GitHub'];

// Hero de la campaña de descuento (mismo mensaje que la versión anterior de /bootcamp-oferta)
export const OfertaHero = () => {
  const { applyPath, trackApply } = useLanding();
  return (
    <section className="relative w-full overflow-hidden pt-space-xl pb-space-xl">
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-primary-container/30 via-secondary-container/10 to-transparent blur-3xl" />
      <Container className="relative flex flex-col items-center text-center gap-space-md">
        <Eyebrow>ACADEMIA LABORA · IA Y NO-CODE</Eyebrow>
        <p className="text-headline-md md:text-headline-lg text-on-surface">Este viernes y sábado</p>
        <h1 className="normal-case leading-none flex items-baseline gap-space-sm md:gap-space-md">
          <span className="font-jakarta font-extrabold text-[5.5rem] md:text-[9rem] tracking-tighter bg-gradient-to-b from-primary to-primary-container bg-clip-text text-transparent">30%</span>
          <span className="font-jakarta font-extrabold text-[4rem] md:text-[7rem] tracking-tighter text-on-surface">OFF</span>
        </h1>
        <p className="text-body-lg md:text-headline-sm text-on-surface-variant max-w-xl">
          en nuestros programas <strong className="text-on-surface">Inicial y Avanzado</strong>.
        </p>
        <SiteLink to={applyPath} onClick={() => trackApply('OfertaHeroV2')} className="w-full sm:w-auto mt-space-sm inline-flex items-center justify-center gap-space-xs text-label-md text-on-primary-container bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 active:scale-[0.99] transition-all rounded-full px-space-xl py-space-md shadow-xl shadow-primary-container/25">
          <span>¡Quiero mi descuento!</span><ArrowRight className="w-5 h-5" />
        </SiteLink>
        <ul className="flex flex-wrap justify-center gap-x-space-lg gap-y-space-xs mt-space-lg pt-space-lg border-t border-white/[0.07] w-full max-w-2xl">
          {ofertaTools.map((t) => <li key={t} className="list-none text-label-md text-on-surface-variant">{t}</li>)}
        </ul>
      </Container>
    </section>
  );
};
