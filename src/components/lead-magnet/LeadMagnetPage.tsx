import { useEffect } from 'react';
import { ArrowRight, CalendarDays, CheckCircle2, Gift, GraduationCap, MessageCircle, PlayCircle, Video } from 'lucide-react';
import { fbqTrack } from '@/lib/fbqTrack';
import { analytics } from '@/lib/analytics';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';
import { Container, Eyebrow, GradientText, H2, SitePage } from '@/components/site/primitives';
import { SiteLink } from '@/components/site/SiteLink';
import SiteFooter, { StickyMobileCta } from '@/components/site/SiteFooter';
import LiteVideo from '@/components/site/LiteVideo';
import { FALLBACK_START_DATE, whatsappUrl } from '@/components/site/siteData';
import { FinalCta, InstructorSection, TestimonialsBlock } from '@/components/home/HomeSections';
import { youtubePoster, type LeadMagnetConfig } from './config';

const SOURCE_TAG = { ads: '(Vengo desde los anuncios)', organico: '(Vengo del orgánico)' } as const;

// Eventos comunes a todos los lead magnets; `page` identifica cuál
const track = (event: string, page: string) => {
  fbqTrack(event, { page });
  analytics.trackEvent(event, { event_category: 'lead_magnet', event_label: page });
};

const LeadMagnetPage = ({ config }: { config: LeadMagnetConfig }) => {
  const { data: cohorte } = useActiveCohorte();
  const fullTitle = `${config.titleMain} ${config.titleHighlight}`;
  const tag = SOURCE_TAG[config.source];
  const isAds = config.source === 'ads';
  const resourcesUrl = whatsappUrl(`¡Hola Labora! ${tag} Vi la clase "${fullTitle}" y quiero recibir los recursos.`);
  const infoUrl = whatsappUrl(`¡Hola Labora! ${tag} Vi la clase "${fullTitle}" y quiero más información sobre el bootcamp.`);
  const goBootcamp = (location: string) => () => track('LeadMagnetBootcampClick', `${config.id}:${location}`);

  useEffect(() => {
    track('LeadMagnetView', config.id);
    const prev = document.title;
    document.title = `${fullTitle} | Labora`;
    return () => { document.title = prev; };
  }, [config.id, fullTitle]);

  return (
    <SitePage>
      <header className="fixed top-0 left-0 right-0 z-50 bg-surface/80 backdrop-blur-xl">
        <Container className="h-16 flex items-center justify-between">
          <img src="/lovable-uploads/logolabora.webp" alt="Labora" className="h-7 w-auto object-contain" />
          <SiteLink to={config.bootcampPath} onClick={goBootcamp('header')} className="inline-flex items-center gap-1.5 text-label-md text-on-primary-container bg-primary-container hover:bg-secondary-container transition-colors rounded-full px-space-md py-space-xs">
            Ver el Bootcamp
          </SiteLink>
        </Container>
      </header>

      <main className="w-full pt-16">
        {/* Hero + video */}
        <section className="relative w-full overflow-hidden pt-space-lg md:pt-space-xl pb-space-xl">
          <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[550px] bg-gradient-to-b from-primary-container/20 via-secondary-container/10 to-transparent blur-3xl opacity-60" />
          <div className="relative w-full max-w-[900px] mx-auto px-margin-mobile md:px-margin flex flex-col items-center text-center gap-space-md">
            <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-surface-container-high/70">
              <span className="w-2 h-2 rounded-full bg-labora-neon shadow-[0_0_8px_rgba(193,255,114,0.7)] shrink-0" />
              <span className="text-badge-caps uppercase tracking-wider text-primary">{config.tag} · Gratis</span>
            </div>
            <h1 className="text-headline-xl md:text-display-hero text-on-surface tracking-tight normal-case">
              {config.titleMain} <GradientText>{config.titleHighlight}</GradientText>
            </h1>
            <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl">{config.description}</p>
            {isAds ? (
              <div className="relative w-full aspect-video mt-space-sm rounded-2xl overflow-hidden bg-surface-container-lowest border border-white/[0.07] shadow-2xl">
                <iframe
                  src={config.videoUrl}
                  title={fullTitle}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                  allowFullScreen
                />
              </div>
              ) : (
              <LiteVideo
                embedUrl={config.videoUrl}
                title={fullTitle}
                poster={config.poster ?? youtubePoster(config.videoUrl)}
                showTitle={false}
                onPlay={() => track('LeadMagnetPlay', config.id)}
                className="w-full mt-space-sm shadow-2xl"
              />
            )}
            <ul className="flex flex-wrap justify-center gap-2">
              {[{ icon: PlayCircle, text: 'Disponible ahora' }, { icon: Video, text: 'Con Brandon Candia' }].map(({ icon: Icon, text }) => (
                <li key={text} className="list-none inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high border border-white/10 text-on-surface text-label-sm">
                  <Icon className="w-3.5 h-3.5 text-primary" /> {text}
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Ads: atajo al programa completo, justo después del video */}
        {isAds && (
        <section className="w-full pb-space-xl">
          <div className="w-full max-w-[900px] mx-auto px-margin-mobile md:px-margin">
            <div className="bg-surface-container-low border border-labora-neon/30 rounded-2xl p-space-md md:p-space-lg flex flex-col md:flex-row md:items-center gap-space-md shadow-[0_0_32px_-16px_rgba(193,255,114,0.5)]">
              <div className="w-11 h-11 rounded-xl bg-labora-neon/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-5 h-5 text-labora-neon" />
              </div>
              <div className="flex-1">
                <h2 className="text-headline-sm text-on-surface normal-case">¿Quieres ver el programa completo?</h2>
                <p className="text-body-sm text-on-surface-variant mt-1">Conoce el Bootcamp de IA y No-Code: 7 semanas en vivo para construir tu propio producto.</p>
              </div>
              <SiteLink to={config.bootcampPath} onClick={goBootcamp('card')} className="inline-flex items-center justify-center gap-space-xs text-label-md text-on-primary-container bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 transition-all rounded-full px-space-lg py-space-sm shrink-0">
                <span>Ver el Bootcamp</span><ArrowRight className="w-[18px] h-[18px]" />
              </SiteLink>
            </div>
          </div>
        </section>
        )}

        {/* Orgánicas: recursos por WhatsApp (captura el contacto sin bloquear el video) */}
        {!isAds && (
        <section className="w-full pb-space-xl">
          <div className="w-full max-w-[900px] mx-auto px-margin-mobile md:px-margin">
            <div className="bg-surface-container-low border border-labora-neon/30 rounded-2xl p-space-md md:p-space-lg flex flex-col md:flex-row md:items-center gap-space-md shadow-[0_0_32px_-16px_rgba(193,255,114,0.5)]">
              <div className="w-11 h-11 rounded-xl bg-labora-neon/10 flex items-center justify-center shrink-0">
                <Gift className="w-5 h-5 text-labora-neon" />
              </div>
              <div className="flex-1">
                <h2 className="text-headline-sm text-on-surface normal-case">¿Quieres los recursos de la clase?</h2>
                <p className="text-body-sm text-on-surface-variant mt-1">Escríbenos por WhatsApp y te los enviamos sin costo.</p>
              </div>
              <a href={resourcesUrl} target="_blank" rel="noopener noreferrer" onClick={() => track('LeadMagnetResourcesWhatsApp', config.id)} className="inline-flex items-center justify-center gap-space-xs text-label-md text-on-surface bg-white/[0.03] border border-white/10 hover:border-labora-neon transition-colors rounded-full px-space-lg py-space-sm shrink-0">
                <MessageCircle className="w-[18px] h-[18px] text-labora-neon" /><span>Recibir por WhatsApp</span>
              </a>
            </div>
          </div>
        </section>
        )}

        {/* Ruta de aprendizaje: paso 1 (esta clase) -> paso 2 (bootcamp) */}
        <section className="w-full py-space-xl bg-surface-container-lowest">
          <div className="w-full max-w-[900px] mx-auto px-margin-mobile md:px-margin">
            <div className="mb-space-lg">
              <Eyebrow>TU RUTA DE APRENDIZAJE</Eyebrow>
              <H2>De esta clase a tu propio producto</H2>
            </div>
            <ol className="relative grid grid-cols-1 md:grid-cols-2 gap-space-lg md:gap-space-md">
              <li className="list-none relative pl-10 md:pl-0 md:pt-10">
                <span aria-hidden className="absolute left-[11px] top-7 -bottom-6 w-px bg-white/10 md:top-[11px] md:left-8 md:-right-4 md:bottom-auto md:h-px md:w-auto" />
                <span aria-hidden className="absolute left-0 top-0.5 md:top-0 w-6 h-6 rounded-full bg-labora-neon/20 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-labora-neon shadow-[0_0_10px_rgba(193,255,114,0.8)]" />
                </span>
                <div className="h-full bg-surface-container-low border border-white/[0.07] rounded-2xl p-space-md">
                  <span className="text-badge-caps uppercase text-labora-neon">Paso 1 · Estás aquí</span>
                  <h3 className="text-headline-sm text-on-surface normal-case mt-1">{config.step1Title}</h3>
                  <ul className="space-y-2 mt-space-sm">
                    {config.step1Bullets.map((b) => (
                      <li key={b} className="list-none flex items-start gap-2 text-body-sm text-on-surface-variant">
                        <CheckCircle2 className="w-[18px] h-[18px] text-labora-neon shrink-0 mt-0.5" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </li>
              <li className="list-none relative pl-10 md:pl-0 md:pt-10">
                <span aria-hidden className="absolute left-0 top-0.5 md:top-0 w-6 h-6 rounded-full bg-primary-container/25 flex items-center justify-center">
                  <span className="w-3 h-3 rounded-full bg-primary-container animate-pulse motion-reduce:animate-none" />
                </span>
                <div className="h-full bg-surface-container border border-primary-container/35 rounded-2xl p-space-md shadow-[0_12px_32px_-8px_rgba(225,29,72,0.18)] flex flex-col gap-space-sm">
                  <div>
                    <span className="text-badge-caps uppercase text-primary">Paso 2 · Siguiente nivel</span>
                    <h3 className="text-headline-sm text-on-surface normal-case mt-1">Bootcamp de IA y No-Code</h3>
                    <p className="text-body-sm text-on-surface-variant mt-1">{config.bootcampText}</p>
                  </div>
                  <p className="flex items-center gap-2 text-body-sm text-on-surface">
                    <CalendarDays className="w-4 h-4 text-primary shrink-0" />
                    Inicio: {cohorte?.fecha_inicio || FALLBACK_START_DATE} · 7 semanas en vivo
                  </p>
                  <SiteLink to={config.bootcampPath} onClick={goBootcamp('ruta')} className="w-full inline-flex items-center justify-center gap-2 text-label-md text-on-primary-container bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 transition-all py-space-sm rounded-full shadow-md">
                    <span>Ver el programa completo</span><ArrowRight className="w-4 h-4" />
                  </SiteLink>
                  <p className="text-body-sm text-on-surface-variant text-center">El 80% de los asistentes continúa en el Bootcamp</p>
                </div>
              </li>
            </ol>
          </div>
        </section>

        <TestimonialsBlock />
        <InstructorSection />
        <FinalCta
          title="¿Listo para el siguiente paso?"
          text="En el Bootcamp llevas todo esto a la práctica y construyes tu propio producto, en vivo y acompañado."
          applyPath={config.bootcampPath}
          applyLabel="Ver el Bootcamp"
          whatsappUrl={infoUrl}
          onApplyClick={goBootcamp('final')}
          onWhatsappClick={() => track('LeadMagnetWhatsApp', config.id)}
          bg="bg-surface"
        />
      </main>
      <StickyMobileCta to={config.bootcampPath} label="Ver el Bootcamp" onClick={goBootcamp('sticky')} />
      <SiteFooter variant="funnel" />
    </SitePage>
  );
};

export default LeadMagnetPage;
