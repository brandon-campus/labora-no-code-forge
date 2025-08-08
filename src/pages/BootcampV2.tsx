import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import BeneficiosInmediatos from '@/components/BeneficiosInmediatos';
import AboutSection from '@/components/AboutSection';
import DatesSection from '@/components/DatesSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import WhatsAppButton from '@/components/WhatsAppButton';

const BootcampV2 = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <BeneficiosInmediatos />
      <AboutSection />
      <DatesSection />
      <TestimonialsSection />
      <ContactSection />
      <WhatsAppButton />
    </div>
  );
};

export default BootcampV2; 