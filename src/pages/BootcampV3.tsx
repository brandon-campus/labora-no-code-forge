import React from 'react';
import HeaderSimple from '@/components/HeaderSimple';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import DatesSection from '@/components/DatesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const BootcampV3 = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderSimple />
      <HeroSection />
      <AboutSection />
      <DatesSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
};

export default BootcampV3; 