import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSectionAds from '@/components/HeroSectionAds';
import AboutSection from '@/components/AboutSection';
import DatesSection from '@/components/DatesSection';
import CurriculumSection from '@/components/CurriculumSection';
import ProcessSection from '@/components/ProcessSection';
import DemoSection from '@/components/DemoSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import PricingSingleAds from '@/components/PricingSingleAds';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const BootcampAds = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar funnelPath="/ads" />
      <HeroSectionAds funnelPath="/ads" />
      <ProcessSection />
      <DatesSection funnelPath="/ads" />
      <CurriculumSection />
      <DemoSection />
      <TestimonialsSection />
      <PricingSingleAds applyUrl="/ads/bootcamp/aplicar" />
      <ContactSection funnelPath="/ads" />
      <WhatsAppButton />
    </div>
  );
};

export default BootcampAds;
