
import React from 'react';
import Navbar from '@/components/Navbar';
import MiniHeader from '@/components/MiniHeader';
import MasterclassHero from '@/components/masterclass/MasterclassHero';
import MasterclassAbout from '@/components/masterclass/MasterclassAbout';
import MasterclassAgenda from '@/components/masterclass/MasterclassAgenda';
import MasterclassInstructor from '@/components/masterclass/MasterclassInstructor';
import DemoSection from '@/components/DemoSection';
import MasterclassRegistration from '@/components/masterclass/MasterclassRegistration';

const Masterclass = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <MiniHeader />
      <MasterclassHero />
      <MasterclassAbout />
      <MasterclassAgenda />
      <MasterclassInstructor />
      <DemoSection />
      <MasterclassRegistration />
    </div>
  );
};

export default Masterclass;
