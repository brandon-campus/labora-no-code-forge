import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import PersuasiveHeader from '@/components/PersuasiveHeader';
import BootcampGratisHero from '@/components/bootcamp-gratis/BootcampGratisHero';
import BeneficiosPrueba from '@/components/bootcamp-gratis/BeneficiosPrueba';
import AgendaClases from '@/components/bootcamp-gratis/AgendaClases';
import TestimoniosPrueba from '@/components/bootcamp-gratis/TestimoniosPrueba';
import FAQPrueba from '@/components/bootcamp-gratis/FAQPrueba';
import RegistroPrueba from '@/components/bootcamp-gratis/RegistroPrueba';
import CTAPrueba from '@/components/bootcamp-gratis/CTAPrueba';

const BootcampGratis = () => {
  return (
    <div className="min-h-screen bg-white">
      <PersuasiveHeader />
      <Navbar />
      <BootcampGratisHero />
      <BeneficiosPrueba />
      <AgendaClases />
      <TestimoniosPrueba />
      <FAQPrueba />
      <RegistroPrueba />
      <CTAPrueba />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default BootcampGratis; 