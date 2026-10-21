import SiteHeader from '@/components/site/SiteHeader';
import SiteFooter, { StickyMobileCta } from '@/components/site/SiteFooter';
import { SitePage } from '@/components/site/primitives';
import HomeHero from '@/components/home/HomeHero';
import HomePrograms from '@/components/home/HomePrograms';
import FaqSection from '@/components/site/FaqSection';
import ProjectsShowcase from '@/components/site/ProjectsShowcase';
import { faqs } from '@/components/home/data';
import {
  AudienceSection, ClientsBar, EnterpriseStrip, FinalCta, FreeClassBand, InstructorSection,
  MethodSection, ProblemSection, TestimonialsBlock,
} from '@/components/home/HomeSections';

// Home rediseñada según docs/DESIGN.md. Los tokens se aíslan bajo .site-v2.
const Index = () => (
  <SitePage>
    <SiteHeader />
    <main className="w-full pt-20 bg-surface">
      <HomeHero />
      <ClientsBar />
      <TestimonialsBlock />
      <ProblemSection />
      <MethodSection />
      <InstructorSection />
      <ProjectsShowcase />
      <HomePrograms />
      <AudienceSection />
      <FreeClassBand />
      <FaqSection items={faqs} />
      <FinalCta />
      <EnterpriseStrip />
    </main>
    <StickyMobileCta />
    <SiteFooter />
  </SitePage>
);

export default Index;
