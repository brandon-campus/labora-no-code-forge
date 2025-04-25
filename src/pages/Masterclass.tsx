
import React from 'react';
import Navbar from '@/components/Navbar';
import MiniHeader from '@/components/MiniHeader';
import MasterclassHero from '@/components/masterclass/MasterclassHero';
import MasterclassAbout from '@/components/masterclass/MasterclassAbout';
import MasterclassAgenda from '@/components/masterclass/MasterclassAgenda';
import MasterclassInstructor from '@/components/masterclass/MasterclassInstructor';
import MasterclassRegistration from '@/components/masterclass/MasterclassRegistration';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PersuasiveHeader from '@/components/PersuasiveHeader';

const Masterclass = () => {
  return (
    <div className="min-h-screen bg-white pt-12">
      <PersuasiveHeader />
      <Navbar />
      <MiniHeader />
      <MasterclassHero />
      <MasterclassAbout />
      <MasterclassAgenda />
      <MasterclassInstructor />
      <MasterclassRegistration />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Masterclass;
