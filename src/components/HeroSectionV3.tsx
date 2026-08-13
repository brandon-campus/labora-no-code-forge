import React from 'react';
import { Button } from "@/components/ui/button";
import { Zap } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const HeroSectionV3 = ({ funnelPath = '', applyUrl }: { funnelPath?: string, applyUrl?: string }) => {
  const handleComenzarClick = () => {
    fbqTrack('AplicarAhoraClick');
    if (window.gtag) {
      window.gtag('event', 'aplicar_ahora_click', {
        event_category: 'conversion',
        event_label: 'HeroSectionV3',
        value: 1
      });
    }
    window.location.href = applyUrl || `${funnelPath}/bootcamp/aplicar`;
  };

  return (
    <section className="bg-[#0a0a0a] flex items-center pt-12 pb-16">
      <div className="container mx-auto px-4 sm:px-6 max-w-5xl">
        <div className="flex flex-col items-center text-center">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] text-white uppercase tracking-[-1px] max-w-4xl mb-8">
            CREA PROYECTOS CON <span className="text-labora-neon">IA</span> Y EMPEZÁ A VIVIR DE ELLOS.
          </h1>

          <div className="w-full max-w-3xl relative mt-4">
            <div className="relative rounded-[18px] overflow-hidden aspect-video bg-black shadow-2xl">
              <iframe 
                className="absolute inset-0 w-full h-full border-none"
                src="https://www.youtube.com/embed/K90RgsyuM7E" 
                title="Labora - video presentación" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            <div className="absolute -bottom-6 left-0 right-0 flex justify-center z-10 px-4">
              <div className="bg-[#141812]/95 border border-labora-neon/30 text-labora-neon font-bold text-xs sm:text-sm text-center py-4 px-6 rounded-2xl flex items-center justify-center gap-2 backdrop-blur-sm shadow-xl">
                <Zap className="w-4 h-4 fill-labora-neon text-labora-neon" />
                EL BOOTCAMP MÁS COMPLETO DE LATAM
              </div>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-4 sm:gap-8 mt-16 max-w-2xl w-full">
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-labora-neon flex items-center justify-center mb-3">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#0a0a0a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              </div>
              <p className="text-white text-sm font-bold leading-[1.25]">Sin código</p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-transparent border-[2.5px] border-labora-neon flex items-center justify-center mb-3">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#aaff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
              </div>
              <p className="text-white text-sm font-bold leading-[1.25]">Proyectos reales</p>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-transparent border-[2.5px] border-labora-neon flex items-center justify-center mb-3">
                 <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#aaff00" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>
              </div>
              <p className="text-white text-sm font-bold leading-[1.25]">100% en vivo</p>
            </div>
          </div>
          


          <div className="mt-12 w-full max-w-xs">
            <Button
              onClick={handleComenzarClick}
              className="bg-labora-neon hover:bg-labora-neon/90 text-[#0a0a0a] font-extrabold rounded-[40px] px-8 py-6 text-base tracking-[0.3px] transition-transform hover:-translate-y-0.5 shadow-[0_8px_24px_rgba(170,255,0,0.35)] w-full"
            >
              APLICAR AHORA
            </Button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSectionV3; 