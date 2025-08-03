
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket, Video } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const HeroSection = () => {
  const handleAplicarClick = () => {
    fbqTrack('AplicaAhoraClick');
    if (window.gtag) {
      window.gtag('event', 'aplicar_ahora_click', {
        event_category: 'engagement',
        event_label: 'HeroSection',
        value: 1
      });
    }
    window.location.href = '/registro-curso';
  };

  return (
    <section className="hero-gradient py-8 md:py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-4 px-4 py-2 bg-gray-800 text-white rounded-full text-sm font-semibold">
            Bootcamp en vivo de IA y No Code
          </div>
          
          {/* Headline principal */}
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6 text-white">
            Crea tu primera app con <span className="text-labora-neon">IA</span> en 4 semanas
          </h1>
          
          {/* Subheadline */}
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto">
            Sin programar, sin experiencia previa. 100% en vivo con mentores expertos. 
            <span className="text-labora-neon font-semibold"> Prueba 2 clases gratis.</span>
          </p>
          
          {/* CTA Principal - Más prominente */}
          <div className="mb-8">
            <Button
              onClick={handleAplicarClick}
              className="bg-[#c1ff72] hover:bg-[#b0ff4a] text-black font-bold rounded-full px-8 py-4 text-lg md:text-xl transition-all shadow-lg w-full md:w-auto"
            >
              COMENZAR GRATIS
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
          
          {/* Social proof */}
          <div className="text-center mb-6">
            <p className="text-gray-300 text-sm">
              <span className="text-labora-neon font-semibold">500+ estudiantes</span> ya lanzaron sus proyectos
            </p>
          </div>
          
          {/* Beneficios clave */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            <div className="flex items-center gap-2">
              <Code className="h-4 w-4 text-labora-neon" />
              <span className="text-sm text-gray-300">Sin código</span>
            </div>
            <div className="flex items-center gap-2">
              <Rocket className="h-4 w-4 text-labora-red" />
              <span className="text-sm text-gray-300">Proyectos reales</span>
            </div>
            <div className="flex items-center gap-2">
              <Video className="h-4 w-4 text-labora-neon" />
              <span className="text-sm text-gray-300">100% en vivo</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
