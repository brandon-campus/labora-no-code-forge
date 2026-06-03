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

const BootcampTikTok = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar funnelPath="/tiktok" />
      <HeroSectionV3 funnelPath="/tiktok" />
      <AboutSection />
      <DatesSection funnelPath="/tiktok" />
      <CurriculumSection />
      <ProcessSection />
      <DemoSection />
      <TestimonialsSection />
      <ContactSection funnelPath="/tiktok" />
      <WhatsAppButton />
    </div>
  );
};

export default BootcampTikTok;
