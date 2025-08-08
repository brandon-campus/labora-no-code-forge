import React from 'react';
import HeaderSimple from '@/components/HeaderSimple';
import HeroSection from '@/components/HeroSection';
import AboutSectionOptimized from '@/components/AboutSectionOptimized';
import DatesSectionOptimized from '@/components/DatesSectionOptimized';
import TestimonialsSectionOptimized from '@/components/TestimonialsSectionOptimized';
import ContactSectionOptimized from '@/components/ContactSectionOptimized';
import WhatsAppButtonOptimized from '@/components/WhatsAppButtonOptimized';

const BootcampV3 = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderSimple />
      <HeroSection />
      <AboutSectionOptimized />
      <DatesSectionOptimized />
      <TestimonialsSectionOptimized />
      <ContactSectionOptimized />
      <WhatsAppButtonOptimized />
    </div>
  );
};

export default BootcampV3; 