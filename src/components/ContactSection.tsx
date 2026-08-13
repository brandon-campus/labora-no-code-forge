import React from 'react';
import { Button } from "@/components/ui/button";

const ContactSection = ({ funnelPath = '', applyUrl }: { funnelPath?: string, applyUrl?: string }) => {
  return (
    <section id="contacto" className="bg-[#f5f0ec] text-[#141414] py-[52px] px-6 sm:py-16 md:py-20 text-center">
      <div className="container mx-auto max-w-2xl">
        <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-black leading-[1.2] uppercase">
          ¿LISTO PARA INICIAR CON IA Y NO CODE?
        </h2>
        
        <a href={applyUrl || `${funnelPath}/bootcamp/aplicar`} className="block w-full sm:w-auto mt-[28px] sm:mt-10">
          <Button className="w-full bg-[#aaff00] hover:bg-[#99e600] text-[#0a0a0a] font-extrabold text-[16px] px-8 py-[28px] rounded-[40px] uppercase tracking-[0.3px] shadow-[0_8px_24px_rgba(170,255,0,0.35)] transition-transform hover:-translate-y-1">
            APLICAR AHORA
          </Button>
        </a>
        
        <p className="mt-[22px] text-[15px] text-[#4a4a4a]">
          Fecha límite de inscripción: <span className="border-b-[1.5px] border-dashed border-[#b8b8b0] px-1 py-0.5 text-[#8a8a80] italic">05 de Septiembre</span>
        </p>
        
        <hr className="border-t border-[#ddd8d0] my-[30px]" />
        
        <p className="text-[14.5px] text-[#5c5c5c] leading-[1.6]">
          También puedes contactarnos directamente a<br />
          <a href="mailto:laborastartup@gmail.com" className="text-[#e54b5c] font-bold hover:underline">
            laborastartup@gmail.com
          </a>
        </p>
      </div>
    </section>
  );
};

export default ContactSection;
