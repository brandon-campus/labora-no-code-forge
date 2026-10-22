import { ArrowRight, CalendarDays, Clock } from 'lucide-react';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';
import BootcampPriceBox from '@/components/site/BootcampPriceBox';
import { SiteLink } from '@/components/site/SiteLink';
import SnapRow from '@/components/site/SnapRow';
import { Container, Eyebrow } from './HomeSections';
import { APPLY_PATH, FALLBACK_START_DATE, bootcampFeatures, secondaryPrograms, snapItem } from './data';

const BootcampCard = () => {
  const { data: cohorte } = useActiveCohorte();

  const details = [
    { icon: CalendarDays, text: `Inicio: ${cohorte?.fecha_inicio || FALLBACK_START_DATE}` },
    cohorte?.semanas_duracion && { icon: CalendarDays, text: `Duración: ${cohorte.semanas_duracion}` },
    cohorte?.horario && { icon: Clock, text: cohorte.horario },
  ].filter(Boolean) as { icon: typeof Clock; text: string }[];

  return (
    <div className="relative bg-surface-container border border-primary-container/35 rounded-3xl p-space-lg md:p-space-xl shadow-[0_12px_32px_-8px_rgba(225,29,72,0.18)] grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
      <div className="absolute -top-3 left-6 px-3 py-0.5 rounded-full bg-primary-container text-on-primary-container text-badge-caps uppercase tracking-wider shadow-sm">
        ✦ Programa principal{cohorte ? ` · Cohorte #${cohorte.numero}` : ''}
      </div>

      <div className="lg:col-span-7 lg:row-start-1 pt-2">
        <span className="text-badge-caps text-primary uppercase">COHORTE EN VIVO</span>
        <h3 className="text-headline-lg text-on-surface mt-1 normal-case">Bootcamp IA y No-Code</h3>
        <p className="text-body-md text-on-surface-variant mt-2 max-w-xl">
          Construye y lanza tu propio producto digital con IA, en vivo y guiado por mentores. Sales con un producto funcional y el método para seguir creando.
        </p>
      </div>

      <div className="lg:col-span-7 lg:row-start-2 order-3 lg:order-none">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
          {[...bootcampFeatures, ...details].map(({ icon: Icon, text }) => (
            <li key={text} className="flex items-center gap-2 text-on-surface text-body-sm bg-surface-container-high rounded-xl px-space-sm py-space-sm list-none">
              <Icon className="w-[18px] h-[18px] text-primary shrink-0" /> {text}
            </li>
          ))}
        </ul>
        <SiteLink to="/bootcamp" track="programs_bootcamp_detail" className="inline-flex items-center gap-2 text-label-md text-primary hover:text-on-surface transition-colors mt-space-md">
          Ver temario completo <ArrowRight className="w-4 h-4" />
        </SiteLink>
      </div>

      <div className="lg:col-span-5 lg:col-start-8 lg:row-start-1 lg:row-span-2 order-2 lg:order-none">
        <BootcampPriceBox applyPath={APPLY_PATH} track="programs_bootcamp_apply" />
      </div>
    </div>
  );
};

const HomePrograms = () => (
  <section id="programas" className="w-full py-space-xl bg-surface-container-lowest scroll-mt-20">
    <Container>
      <div className="mb-space-xl max-w-2xl">
        <Eyebrow>PROGRAMAS</Eyebrow>
        <h2 className="text-headline-lg md:text-headline-xl text-on-surface tracking-tight normal-case">Empieza por el Bootcamp. Sigue el camino que necesites.</h2>
        <p className="text-body-md text-on-surface-variant mt-1">Desde tu primer producto hasta una startup o una agencia con IA.</p>
      </div>

      <BootcampCard />

      <h3 className="text-label-md text-on-surface-variant uppercase tracking-wider mt-space-xl mb-space-md">Después del Bootcamp</h3>
      <SnapRow className="md:grid-cols-3">
        {secondaryPrograms.map((p) => (
          <div key={p.title} className={`${snapItem} bg-surface-container-low border border-white/[0.07] hover:border-primary-container/35 transition-colors p-space-lg rounded-2xl flex flex-col justify-between`}>
            <div>
              <span className="text-badge-caps text-on-surface-variant uppercase">{p.tag}</span>
              <h4 className="text-headline-md text-on-surface mt-1 normal-case">{p.title}</h4>
              <p className="text-body-sm text-on-surface-variant mt-2">{p.text}</p>
              <ul className="my-space-md py-space-sm bg-surface-container-high/60 rounded-xl px-space-sm space-y-1">
                {p.features.map(({ icon: Icon, text }) => (
                  <li key={text} className="flex items-center gap-2 text-on-surface text-body-sm list-none">
                    <Icon className="w-[18px] h-[18px] text-on-surface-variant shrink-0" /> {text}
                  </li>
                ))}
              </ul>
              <div className="mb-space-md">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="text-headline-lg text-on-surface font-bold">USD {p.baseUsd}</span>
                  {p.studentUsd && <span className="text-body-sm text-primary">(USD {p.studentUsd} alumnos)</span>}
                </div>
                {p.priceNote && <span className="text-body-sm text-on-surface-variant">{p.priceNote}</span>}
              </div>
            </div>
            <SiteLink to={p.to} track={`programs_${p.title}`} className="w-full inline-flex items-center justify-center gap-2 text-label-md text-on-surface bg-surface-container-high hover:bg-surface-container-highest transition-colors py-space-sm rounded-full">
              <span>{p.cta}</span><ArrowRight className="w-4 h-4" />
            </SiteLink>
          </div>
        ))}
      </SnapRow>
      <p className="mt-space-lg text-center text-body-sm text-on-surface-variant">
        Precios de los programas posteriores en USD, de referencia. Confirma el monto final y las facilidades de pago en la llamada.
      </p>
    </Container>
  </section>
);

export default HomePrograms;
