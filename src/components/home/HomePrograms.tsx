import { ArrowRight, CalendarDays, Clock, Radio } from 'lucide-react';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';
import { SiteLink } from '@/components/site/SiteLink';
import SnapRow from '@/components/site/SnapRow';
import { Container, Eyebrow } from './HomeSections';
import { APPLY_PATH, FALLBACK_START_DATE, bootcampFeatures, secondaryPrograms, snapItem, type SecondaryProgram } from './data';

// Programa principal: foto real del bootcamp + datos de la cohorte, sin precio (se ve en /bootcamp)
const BootcampCard = () => {
  const { data: cohorte } = useActiveCohorte();
  const details = [
    { icon: CalendarDays, text: `Inicio: ${cohorte?.fecha_inicio || FALLBACK_START_DATE}` },
    { icon: Clock, text: cohorte?.horario || cohorte?.semanas_duracion || '7 semanas' },
  ];

  return (
    <article className="relative overflow-hidden bg-surface-container border border-primary-container/35 rounded-3xl shadow-[0_12px_32px_-8px_rgba(225,29,72,0.18)] grid grid-cols-1 md:grid-cols-12">
      <div className="relative md:col-span-5 aspect-[4/3] md:aspect-auto md:min-h-full">
        <img
          src="/home/bootcamp-cover.jpg"
          alt="Brandon Candia presentando el Bootcamp De cero a app"
          loading="lazy"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />
        <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-surface-container/90" />
        <span className="absolute top-space-md left-space-md inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface/80 backdrop-blur-md border border-white/10 text-badge-caps uppercase text-on-surface">
          <span className="w-2 h-2 rounded-full bg-labora-neon shadow-[0_0_8px_rgba(193,255,114,0.7)]" />
          Programa principal{cohorte ? ` · Cohorte #${cohorte.numero}` : ''}
        </span>
      </div>

      <div className="md:col-span-7 p-space-lg md:p-space-xl flex flex-col gap-space-md">
        <div>
          <span className="inline-flex items-center gap-1.5 text-badge-caps text-primary uppercase"><Radio className="w-3.5 h-3.5" /> Cohorte en vivo · Nivel 1</span>
          <h3 className="text-headline-lg md:text-headline-xl text-on-surface mt-1 normal-case">Bootcamp IA y No-Code</h3>
          <p className="text-body-md text-on-surface-variant mt-space-xs max-w-xl">
            Construye y lanza tu propio producto digital con IA, en vivo y guiado por mentores. Sales con un producto funcional y el método para seguir creando.
          </p>
        </div>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          {[...bootcampFeatures, ...details].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 text-on-surface text-body-sm bg-surface-container-high rounded-xl px-space-sm py-space-sm list-none">
              <Icon className="w-[18px] h-[18px] text-primary shrink-0" /> {text}
            </li>
          ))}
        </ul>
        <div className="flex flex-col sm:flex-row gap-space-sm pt-space-xs">
          <SiteLink to="/bootcamp" track="programs_bootcamp_detail" className="inline-flex items-center justify-center gap-2 text-label-md text-on-primary-container bg-gradient-to-r from-primary-container to-secondary-container hover:brightness-110 transition-all rounded-full px-space-lg py-space-sm shadow-md">
            <span>Ver el programa</span><ArrowRight className="w-4 h-4" />
          </SiteLink>
          <SiteLink to={APPLY_PATH} track="programs_bootcamp_call" className="inline-flex items-center justify-center gap-2 text-label-md text-on-surface bg-white/[0.03] border border-white/10 hover:border-primary-container transition-colors rounded-full px-space-lg py-space-sm">
            Agendar llamada gratuita
          </SiteLink>
        </div>
      </div>
    </article>
  );
};

// Cabecera ilustrada (sin fotos de stock): ícono grande sobre un brillo rubí y una grilla sutil
const ProgramVisual = ({ p }: { p: SecondaryProgram }) => (
  <div className="relative h-36 rounded-xl overflow-hidden bg-surface-container-lowest border border-white/[0.06]">
    <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:24px_24px]" />
    <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-primary-container/30 blur-2xl transition-transform duration-500 group-hover:scale-125" />
    <div className="absolute left-space-md top-space-md w-12 h-12 rounded-xl bg-surface/70 backdrop-blur-md border border-white/10 flex items-center justify-center">
      <p.icon className="w-6 h-6 text-primary" />
    </div>
    <span className="absolute right-space-md top-space-md text-badge-caps uppercase text-on-surface-variant">{p.level}</span>
    <div className="absolute left-space-md right-space-md bottom-space-md flex flex-wrap gap-1.5">
      {p.keywords.map((k) => (
        <span key={k} className="text-badge-caps text-on-surface bg-surface/70 backdrop-blur-md border border-white/10 rounded-full px-2 py-0.5">{k}</span>
      ))}
    </div>
  </div>
);

const HomePrograms = () => (
  <section id="programas" className="w-full py-space-xl bg-surface-container-lowest scroll-mt-20">
    <Container>
      <div className="mb-space-lg max-w-2xl">
        <Eyebrow>PROGRAMAS</Eyebrow>
        <h2 className="text-headline-lg md:text-headline-xl text-on-surface tracking-tight normal-case">Empieza por el Bootcamp. Sigue el camino que necesites.</h2>
        <p className="text-body-md text-on-surface-variant mt-1">Desde tu primer producto hasta una startup o una agencia con IA.</p>
      </div>

      <BootcampCard />

      <div className="flex items-center gap-space-sm mt-space-xl mb-space-md">
        <h3 className="text-label-md text-on-surface-variant uppercase tracking-wider shrink-0">Después del Bootcamp</h3>
        <span className="h-px flex-1 bg-white/10" />
      </div>
      <SnapRow className="md:grid-cols-3">
        {secondaryPrograms.map((p) => (
          <article key={p.title} className={`${snapItem} group bg-surface-container-low border border-white/[0.07] hover:border-primary-container/35 transition-colors p-space-sm rounded-2xl flex flex-col`}>
            <ProgramVisual p={p} />
            <div className="p-space-sm flex-1 flex flex-col">
              <span className="text-badge-caps text-primary uppercase">{p.format}</span>
              <h4 className="text-headline-md text-on-surface mt-1 normal-case">{p.title}</h4>
              <p className="text-body-sm text-on-surface-variant mt-2 flex-1">{p.text}</p>
              <ul className="my-space-md space-y-1.5">
                {p.features.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2 text-on-surface text-body-sm list-none">
                    <Icon className="w-[18px] h-[18px] text-on-surface-variant shrink-0" /> {text}
                  </li>
                ))}
              </ul>
              <SiteLink to={p.to} track={`programs_${p.title}`} className="w-full inline-flex items-center justify-center gap-2 text-label-md text-on-surface bg-surface-container-high hover:bg-surface-container-highest transition-colors py-space-sm rounded-full">
                <span>{p.cta}</span><ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
              </SiteLink>
            </div>
          </article>
        ))}
      </SnapRow>

      <p className="mt-space-lg text-center text-body-sm text-on-surface-variant">
        ¿No sabes cuál es para ti?{' '}
        <SiteLink to={APPLY_PATH} track="programs_help_call" className="text-primary hover:text-on-surface underline-offset-4 hover:underline">
          Agenda una llamada gratuita y te orientamos
        </SiteLink>.
      </p>
    </Container>
  </section>
);

export default HomePrograms;
