import { useEffect } from 'react';
import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter, { StickyMobileCta } from '@/components/site/SiteFooter';
import { SitePage } from '@/components/site/primitives';
import FaqSection from '@/components/site/FaqSection';
import ProjectsShowcase from '@/components/site/ProjectsShowcase';
import { formatPrice, useBootcampPrice } from '@/components/site/BootcampPriceBox';
import { AudienceSection, FinalCta, InstructorSection, MethodSection, TestimonialsBlock } from '@/components/home/HomeSections';
import {
  BootcampCurriculum, BootcampFacts, BootcampHero, BootcampPricing, OfertaHero, PromoBanner,
} from './BootcampSections';
import { bootcampFaqs } from './data';
import { LandingProvider, useLanding, type LandingConfig } from './landing';

type Props = { config: LandingConfig; hero?: 'default' | 'oferta' };

const Landing = ({ hero }: Pick<Props, 'hero'>) => {
  const { title, applyPath, whatsappUrl, trackApply, trackWhatsapp, nav, showPricing, showPromoBanner } = useLanding();
  const price = useBootcampPrice();

  useEffect(() => {
    const prev = document.title;
    document.title = title;
    return () => { document.title = prev; };
  }, [title]);

  const anchors = [
    { label: 'Fechas', href: '#fechas' },
    { label: 'Temario', href: '#temario' },
    { label: 'Proyectos', href: '#proyectos' },
    { label: 'Testimonios', href: '#casos' },
    ...(showPricing ? [{ label: 'Precio', href: '#precio' }] : []),
  ];
  // Sin sección de precio, la pregunta que remite a ella no aplica
  const faqs = showPricing ? bootcampFaqs : bootcampFaqs.filter(([q]) => !q.startsWith('¿Hay precios'));

  return (
    <SitePage>
      <SiteHeader applyPath={applyPath} onApplyClick={() => trackApply('HeaderV2')} variant={nav} anchors={anchors} />
      <main className="w-full pt-20 bg-surface">
        {showPromoBanner && <PromoBanner />}
        {hero === 'oferta' ? <OfertaHero /> : <BootcampHero />}
        <BootcampFacts />
        <TestimonialsBlock />
        <MethodSection bg="bg-surface-container-lowest" />
        <BootcampCurriculum />
        <ProjectsShowcase className="bg-surface-container-lowest" />
        <InstructorSection bg="bg-surface" />
        <AudienceSection bg="bg-surface-container-lowest" />
        {showPricing && <BootcampPricing />}
        <FaqSection items={faqs} className={showPricing ? 'bg-surface-container-lowest' : 'bg-surface'} />
        <FinalCta
          title="Empieza a construir tu producto"
          text="Aplica al bootcamp y coordinamos una llamada gratuita para ver si es para ti. Si tienes dudas, escríbenos por WhatsApp."
          applyPath={applyPath}
          whatsappUrl={whatsappUrl}
          onApplyClick={() => trackApply('FinalCtaV2')}
          onWhatsappClick={() => trackWhatsapp('FinalCtaV2')}
          bg={showPricing ? 'bg-surface' : 'bg-surface-container-lowest'}
        />
      </main>
      <StickyMobileCta
        to={applyPath}
        label={showPricing ? 'Aplicar' : 'Aplicar al Bootcamp'}
        detail={showPricing ? formatPrice(price) : undefined}
        onClick={() => trackApply('StickyV2')}
      />
      <SiteFooter variant={nav} />
    </SitePage>
  );
};

/** Landing del Bootcamp con el diseño v2; cada página/embudo pasa su configuración (ver LANDINGS) */
const BootcampLanding = ({ config, hero = 'default' }: Props) => (
  <LandingProvider config={config}>
    <Landing hero={hero} />
  </LandingProvider>
);

export default BootcampLanding;
