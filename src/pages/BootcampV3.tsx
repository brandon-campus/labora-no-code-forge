import React from 'react';
import HeaderSimple from '@/components/HeaderSimple';
import HeroSectionV2 from '@/components/HeroSectionV2';
import TargetAudienceSection from '@/components/TargetAudienceSection';
import AboutSectionOptimized from '@/components/AboutSectionOptimized';
import CurriculumSection from '@/components/CurriculumSection';
import DemoSection from '@/components/DemoSection';
import DatesSectionOptimized from '@/components/DatesSectionOptimized';
import TestimonialsSectionModern from '@/components/TestimonialsSectionModern';
import FAQSection from '@/components/FAQSection';
import FinalCTASection from '@/components/FinalCTASection';
import WhatsAppButtonOptimized from '@/components/WhatsAppButtonOptimized';

const BootcampV3 = () => {
  return (
    <div className="min-h-screen bg-white">
      <HeaderSimple />
      <HeroSectionV2 />
      <TargetAudienceSection />
      <AboutSectionOptimized />
      <DatesSectionOptimized />
      <CurriculumSection />
      <DemoSection />
      <TestimonialsSectionModern />
      <FAQSection />
      <FinalCTASection />
      <WhatsAppButtonOptimized />
    </div>
  );
};

export default BootcampV3; 