import { ArrowRight, CheckCircle2, MessageCircle, Quote, X } from 'lucide-react';
import { Container, Eyebrow, GradientText, H2 } from '@/components/site/primitives';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { testimonials } from '@/components/TestimonialsSection';
import { SiteLink } from '@/components/site/SiteLink';
import SnapRow from '@/components/site/SnapRow';
import {
  APPLY_PATH, FREE_CLASS_PATH, WHATSAPP_URL, audiences, clients, enterpriseCards, featuredTestimonials,
  instructorFacts, instructorStats, methodBullets, methodSteps, problems, snapItem,
} from './data';

export { Container, Eyebrow } from '@/components/site/primitives';

export const ClientsBar = () => (
  <section className="w-full py-space-lg bg-surface-container-lowest">
    <Container className="text-center">
      <p className="text-badge-caps uppercase tracking-widest text-on-surface-variant mb-space-md">
        SOFTWARE Y CAPACITACIONES QUE HEMOS DESARROLLADO PARA
      </p>
      <ul className="flex flex-wrap items-center justify-center gap-x-space-xl gap-y-space-sm">
        {clients.map((c) => (
          <li key={c} className="text-headline-sm text-on-surface/70 font-bold tracking-tight list-none">{c}</li>
        ))}
      </ul>
    </Container>
  </section>
);

type BgProps = { bg?: string };

export const TestimonialsBlock = ({ bg = 'bg-surface' }: BgProps) => {
  const items = featuredTestimonials
    .map((n) => testimonials.find((t) => t.name === n))
    .filter((t): t is (typeof testimonials)[number] => Boolean(t));

  return (
    <section id="casos" className={`w-full py-space-xl ${bg} scroll-mt-20`}>
      <Container>
        <div className="max-w-2xl mb-space-lg">
          <Eyebrow>CASOS DE ALUMNOS</Eyebrow>
          <H2>Lo que cuentan quienes ya lo construyeron</H2>
          <p className="text-body-md text-on-surface-variant mt-1">Personas de toda Latinoamérica que pasaron de la idea a un producto propio.</p>
        </div>
        <Carousel opts={{ align: 'start' }}>
          <CarouselContent>
            {items.map((t) => (
              <CarouselItem key={t.name} className="basis-full md:basis-1/2 lg:basis-1/3">
                <figure className="h-full bg-surface-container-low border border-white/[0.07] rounded-2xl p-space-lg flex flex-col gap-space-md">
                  <Quote className="w-6 h-6 text-primary-container shrink-0" />
                  <blockquote className="text-body-md text-on-surface-variant flex-1">{t.quote}</blockquote>
                  <figcaption className="flex items-center gap-3 pt-space-sm border-t border-white/[0.07]">
                    <img src={t.image} alt={t.name} loading="lazy" className="w-11 h-11 rounded-full object-cover bg-surface-container-high" />
                    <div>
                      <div className="text-label-md text-on-surface">{t.name}</div>
                      <div className="text-body-sm text-on-surface-variant">{t.flag} {t.country}</div>
                    </div>
                  </figcaption>
                </figure>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex items-center gap-space-sm mt-space-md">
            <CarouselPrevious className="static translate-y-0 h-11 w-11 bg-surface-container-high border-white/10 text-on-surface hover:bg-surface-container-highest" />
            <CarouselNext className="static translate-y-0 h-11 w-11 bg-surface-container-high border-white/10 text-on-surface hover:bg-surface-container-highest" />
          </div>
        </Carousel>
      </Container>
    </section>
  );
};

export const ProblemSection = () => (
  <section className="w-full py-space-xl bg-surface-container-lowest">
    <Container>
      <div className="max-w-2xl mx-auto text-center mb-space-lg">
        <Eyebrow>EL DESAFÍO ACTUAL</Eyebrow>
        <H2>
          Menos tutoriales sueltos.<br />
          <GradientText>Más productos publicados.</GradientText>
        </H2>
        <p className="text-body-md text-on-surface-variant mt-space-xs">Hay teoría de sobra. En Labora construyes un producto real, con método y acompañamiento.</p>
      </div>
      <SnapRow className="md:grid-cols-3">
        {problems.map(({ icon: Icon, tag, title, text, cost }) => (
          <div key={tag} className={`${snapItem} bg-surface-container-low border border-white/[0.07] p-space-md rounded-2xl flex flex-col justify-between`}>
            <div>
              <div className="flex items-center gap-space-sm mb-2">
                <div className="w-10 h-10 rounded-xl bg-primary-container/15 flex items-center justify-center text-primary"><Icon className="w-5 h-5" /></div>
                <span className="text-badge-caps text-primary tracking-wider uppercase">{tag}</span>
              </div>
              <h3 className="text-headline-sm text-on-surface mb-1 normal-case">{title}</h3>
              <p className="text-body-sm text-on-surface-variant">{text}</p>
            </div>
            <div className="mt-space-sm pt-space-xs text-label-sm text-primary flex items-center gap-1"><X className="w-3.5 h-3.5" /> {cost}</div>
          </div>
        ))}
      </SnapRow>
    </Container>
  </section>
);

// La última etapa (Lanzamiento) es la meta: se resalta con el acento neón
const isGoal = (i: number) => i === methodSteps.length - 1;

export const MethodSection = ({ bg = 'bg-surface' }: BgProps) => (
  <section id="metodologia" className={`w-full py-space-xl ${bg} scroll-mt-20`}>
    <Container>
      <div className="max-w-2xl mb-space-lg">
        <Eyebrow>METODOLOGÍA LABORA</Eyebrow>
        <H2>De la idea al lanzamiento en 8 etapas. <span className="text-primary">Tú diriges, la IA ejecuta.</span></H2>
        <p className="text-body-md text-on-surface-variant mt-1">El mismo roadmap probado en más de 15 cohortes.</p>
      </div>

      <div className="mb-space-lg rounded-2xl overflow-hidden bg-surface-container-low border border-white/[0.07] shadow-2xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center">
          <div className="lg:col-span-7 relative h-48 sm:h-80 lg:h-96 w-full overflow-hidden">
            <img src="/home/method.jpg" alt="Persona construyendo un producto con asistentes de IA" loading="lazy" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-surface-container-low/10 via-surface-container-low/40 to-surface-container-low pointer-events-none" />
          </div>
          <div className="lg:col-span-5 p-space-md lg:p-space-lg flex flex-col gap-space-sm">
            <h3 className="text-headline-sm lg:text-headline-md text-on-surface normal-case">Así se ve el camino</h3>
            <ul className="space-y-3 text-on-surface-variant text-body-sm">
              {methodBullets.map(({ icon: Icon, title, text }) => (
                <li key={title} className="flex items-start gap-2">
                  <Icon className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" />
                  <span><strong className="text-on-surface">{title}</strong> {text}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <ol className="relative grid grid-cols-1 md:grid-cols-4 gap-y-space-lg md:gap-x-space-md md:gap-y-space-xl">
        {methodSteps.map(([n, title, desc], i) => (
          <li key={n} className="relative pl-10 md:pl-0 md:pt-10 list-none">
            {i < methodSteps.length - 1 && (
              <span aria-hidden className={`absolute left-[11px] top-7 -bottom-6 w-px bg-white/10 md:top-[11px] md:left-8 md:-right-4 md:bottom-auto md:h-px md:w-auto ${i % 4 === 3 ? 'md:hidden' : ''}`} />
            )}
            <span aria-hidden className={`absolute left-0 top-0.5 md:top-0 w-6 h-6 rounded-full flex items-center justify-center ${isGoal(i) ? 'bg-labora-neon/20' : 'bg-primary-container/25'}`}>
              <span className={`w-3 h-3 rounded-full ${isGoal(i) ? 'bg-labora-neon shadow-[0_0_10px_rgba(193,255,114,0.8)]' : 'bg-primary-container'}`} />
            </span>
            <span className={`text-label-sm block font-jakarta ${isGoal(i) ? 'text-labora-neon' : 'text-primary'}`}>{n}</span>
            <span className="text-label-md text-on-surface block mt-0.5">{title}</span>
            <span className="text-body-sm text-on-surface-variant block mt-1">{desc}</span>
          </li>
        ))}
      </ol>
    </Container>
  </section>
);

export const InstructorSection = ({ bg = 'bg-surface-container-lowest' }: BgProps) => (
  <section id="instructor" className={`w-full py-space-xl ${bg} scroll-mt-20`}>
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-center">
        <div className="lg:col-span-6 relative rounded-3xl overflow-hidden border border-white/[0.07] shadow-2xl">
          <img src="/DSC05880.jpg" alt="Brandon Candia presentando 'IA para todos' en un evento" loading="lazy" className="w-full h-full object-cover aspect-[4/3]" />
        </div>
        <div className="lg:col-span-6 flex flex-col gap-space-md">
          <div>
            <Eyebrow>QUIÉN TE ACOMPAÑA</Eyebrow>
            <H2>Brandon Candia</H2>
            <p className="text-body-lg text-on-surface-variant mt-1">Fundador y Director Académico de Academia Labora</p>
          </div>
          <div className="grid grid-cols-3 gap-space-sm">
            {instructorStats.map((s) => (
              <div key={s.label} className="bg-surface-container-low border border-white/[0.07] rounded-xl p-space-sm">
                <div className="text-headline-lg text-on-surface font-jakarta">{s.value}</div>
                <div className="text-body-sm text-on-surface-variant">{s.label}</div>
              </div>
            ))}
          </div>
          <ul className="space-y-3">
            {instructorFacts.map((f) => (
              <li key={f} className="flex items-start gap-2 text-body-md text-on-surface-variant">
                <CheckCircle2 className="w-[18px] h-[18px] text-primary shrink-0 mt-1" /> <span>{f}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Container>
  </section>
);

export const AudienceSection = ({ bg = 'bg-surface' }: BgProps) => (
  <section className={`w-full py-space-xl ${bg}`}>
    <Container>
      <div className="max-w-2xl mx-auto text-center mb-space-lg">
        <Eyebrow>PERFILES &amp; AUDIENCIA</Eyebrow>
        <H2>Diseñado para constructores de impacto</H2>
        <p className="text-body-md text-on-surface-variant mt-1">No necesitas título de ingeniería: construyes sobre bases sólidas con IA.</p>
      </div>
      <SnapRow className="md:grid-cols-2 lg:grid-cols-4">
        {audiences.map(({ icon: Icon, badge, title, text }) => (
          <div key={title} className={`${snapItem} bg-surface-container-low border border-white/[0.07] p-space-md rounded-2xl`}>
            <div className="flex items-center justify-between mb-2">
              <div className="w-10 h-10 rounded-xl bg-surface-container-high flex items-center justify-center text-primary"><Icon className="w-[22px] h-[22px]" /></div>
              <span className="text-badge-caps text-primary px-2 py-0.5 rounded bg-primary-container/15">{badge}</span>
            </div>
            <h3 className="text-headline-sm text-on-surface mb-1 normal-case">{title}</h3>
            <p className="text-body-sm text-on-surface-variant">{text}</p>
          </div>
        ))}
      </SnapRow>
    </Container>
  </section>
);

export const FreeClassBand = () => (
  <section className="w-full pb-space-xl bg-surface">
    <Container>
      <div className="bg-surface-container-low border border-white/[0.07] rounded-2xl p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
        <div>
          <h3 className="text-headline-md text-on-surface normal-case">¿Todavía estás explorando?</h3>
          <p className="text-body-md text-on-surface-variant mt-1">Empieza por una clase gratuita o la guía para escribir el PRD de tu producto.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-space-sm shrink-0">
          <SiteLink to={FREE_CLASS_PATH} track="band_free_class" className="inline-flex items-center justify-center gap-2 text-label-md text-on-surface bg-surface-container-high hover:bg-surface-container-highest transition-colors rounded-full px-space-lg py-space-sm">
            Ver clase gratuita <ArrowRight className="w-4 h-4" />
          </SiteLink>
          <SiteLink to="/guia-prd" track="band_guia_prd" className="inline-flex items-center justify-center gap-2 text-label-md text-on-surface border border-white/10 hover:border-primary-container transition-colors rounded-full px-space-lg py-space-sm">
            Guía PRD gratuita
          </SiteLink>
        </div>
      </div>
    </Container>
  </section>
);

type FinalCtaProps = {
  title?: string;
  text?: string;
  applyPath?: string;
  applyLabel?: string;
  whatsappUrl?: string;
  onApplyClick?: () => void;
  onWhatsappClick?: () => void;
  bg?: string;
};

export const FinalCta = ({
  title = 'Hablemos de tu proyecto',
  text = 'Cuéntanos qué quieres construir. Te orientamos sobre el mejor camino y vemos juntos si Labora es el lugar indicado para tu proyecto.',
  applyPath = APPLY_PATH,
  applyLabel = 'Aplicar al Bootcamp',
  whatsappUrl = WHATSAPP_URL,
  onApplyClick,
  onWhatsappClick,
  bg = 'bg-surface-container-lowest',
}: FinalCtaProps) => (
  <section className={`w-full py-space-xl ${bg}`}>
    <Container>
      <div className="relative bg-surface-container-low border border-white/[0.07] rounded-3xl p-space-lg md:p-space-xl overflow-hidden text-center flex flex-col items-center">
        <div className="pointer-events-none absolute -bottom-24 left-1/2 -translate-x-1/2 w-[600px] h-64 bg-primary-container/20 rounded-full blur-3xl" />
        <Eyebrow>EMPIEZA HOY</Eyebrow>
        <h2 className="text-headline-lg md:text-headline-xl text-on-surface tracking-tight max-w-xl normal-case relative">{title}</h2>
        <p className="text-body-md md:text-body-lg text-on-surface-variant max-w-2xl mt-space-sm mb-space-lg relative">{text}</p>
        <div className="relative w-full sm:w-auto flex flex-col sm:flex-row items-stretch gap-space-sm">
          <SiteLink to={applyPath} track="final_apply" onClick={onApplyClick} className="inline-flex items-center justify-center gap-space-xs text-label-md text-on-primary-container bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 active:scale-[0.99] transition-all rounded-full px-space-xl py-space-md shadow-xl shadow-primary-container/25">
            <span>{applyLabel}</span><ArrowRight className="w-5 h-5" />
          </SiteLink>
          <SiteLink to={whatsappUrl} track="final_whatsapp" onClick={onWhatsappClick} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-space-xs text-label-md text-on-surface bg-white/[0.03] border border-white/10 hover:border-primary-container transition-colors rounded-full px-space-xl py-space-md">
            <MessageCircle className="w-5 h-5 text-primary" /><span>Escribir por WhatsApp</span>
          </SiteLink>
        </div>
      </div>
    </Container>
  </section>
);

export const EnterpriseStrip = () => (
  <section id="empresas" className="w-full py-space-xl bg-surface scroll-mt-20">
    <Container>
      <div className="mb-space-lg">
        <Eyebrow>PARA EMPRESAS</Eyebrow>
        <H2>¿Buscas capacitar a tu equipo o desarrollar a medida?</H2>
      </div>
      <SnapRow className="md:grid-cols-2">
        {enterpriseCards.map((c) => (
          <div key={c.id} id={c.id === 'empresas' ? undefined : c.id} className={`${snapItem} bg-surface-container-low border border-white/[0.07] p-space-lg rounded-3xl flex flex-col justify-between`}>
            <div>
              <div className="flex items-center justify-between mb-space-sm">
                <span className="text-badge-caps text-primary uppercase">{c.tag}</span>
                <span className="text-badge-caps text-on-surface px-space-sm py-0.5 rounded-full bg-surface-container-high">A medida</span>
              </div>
              <h3 className="text-headline-md text-on-surface mb-space-sm normal-case">{c.title}</h3>
              <p className="text-body-md text-on-surface-variant mb-space-md">{c.text}</p>
              <ul className="space-y-2 mb-space-lg">
                {c.items.map((it) => (
                  <li key={it} className="flex items-start gap-2 text-body-sm text-on-surface">
                    <CheckCircle2 className="w-[18px] h-[18px] text-primary shrink-0 mt-0.5" /> {it}
                  </li>
                ))}
              </ul>
            </div>
            <SiteLink to={WHATSAPP_URL} track={`enterprise_${c.id}`} target="_blank" rel="noopener noreferrer" className="w-full inline-flex items-center justify-center gap-2 text-label-md text-on-surface bg-surface-container-high hover:bg-surface-container-highest transition-colors py-space-sm rounded-full">
              <span>{c.cta}</span><ArrowRight className="w-4 h-4" />
            </SiteLink>
          </div>
        ))}
      </SnapRow>
    </Container>
  </section>
);
