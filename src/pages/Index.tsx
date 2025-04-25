
import React from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import MiniHeader from '@/components/MiniHeader';
import AboutSection from '@/components/AboutSection';
import DatesSection from '@/components/DatesSection';
import CurriculumSection from '@/components/CurriculumSection';
import MethodologySection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import DemoSection from '@/components/DemoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PersuasiveHeader from '@/components/PersuasiveHeader';

const Index = () => {
  return (
    <div className="min-h-screen bg-white pt-12">
      <PersuasiveHeader />
      <Navbar />
      <HeroSection />
      <MiniHeader />
      <AboutSection />
      <DatesSection />
      <CurriculumSection />
      <MethodologySection />
      <TestimonialsSection />
      <DemoSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
