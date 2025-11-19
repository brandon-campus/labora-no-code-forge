
import React from 'react';
import Navbar from '@/components/Navbar';
import MiniHeader from '@/components/MiniHeader';
import CursorAIHero from '@/components/cursor-ai-class/CursorAIHero';
import CursorAIAbout from '@/components/cursor-ai-class/CursorAIAbout';
import CursorAIAgenda from '@/components/cursor-ai-class/CursorAIAgenda';
import CursorAIBenefits from '@/components/cursor-ai-class/CursorAIBenefits';
import CursorAIInstructor from '@/components/cursor-ai-class/CursorAIInstructor';
import CursorAIRegistration from '@/components/cursor-ai-class/CursorAIRegistration';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PersuasiveHeader from '@/components/PersuasiveHeader';

const CursorAIClass = () => {
  return (
    <div className="min-h-screen bg-white">
      <PersuasiveHeader />
      <Navbar />
      <MiniHeader />
      <CursorAIHero />
      <CursorAIAbout />
      <CursorAIAgenda />
      <CursorAIBenefits />
      <CursorAIInstructor />
      <CursorAIRegistration />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default CursorAIClass;


