import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSectionV3 from '@/components/HeroSectionV3';
import AboutSection from '@/components/AboutSection';
import DatesSection from '@/components/DatesSection';
import CurriculumSection from '@/components/CurriculumSection';
import ProcessSection from '@/components/ProcessSection';
import DemoSection from '@/components/DemoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';

import { useActiveCohorte } from '@/hooks/useActiveCohorte';

const Bootcamp2 = () => {
  const { data: cohorte, isLoading } = useActiveCohorte();

  return (
    <div className="min-h-screen bg-white">
      {cohorte?.promocion_texto_banner && (
        <a href="/bootcamp/aplicar" className="block bg-labora-neon text-black text-center py-2 px-4 font-bold text-sm md:text-base z-50 relative w-full hover:bg-labora-neon/80 transition-colors cursor-pointer">
          {cohorte.promocion_texto_banner}
        </a>
      )}
      <Navbar />
      <HeroSectionV3 />
      {/* <AboutSection /> */}
      <ProcessSection />
      <DatesSection />
      <CurriculumSection />
      <DemoSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
};

export default Bootcamp2;