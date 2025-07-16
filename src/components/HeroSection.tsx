
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
  return (
    <section className="hero-gradient py-16 md:py-28 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div className="space-y-8 animate-fade-in-up lg:pr-10">
            <div>
              <h2 className="inline-block mb-3 px-4 py-1 bg-labora-neon text-labora-dark rounded-full text-sm font-semibold">
                Semillero de Proyectos Tecnológicos en Latinoamérica
              </h2>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4 text-white">
                Crea proyectos con Inteligencia Artificial y empezá a vivir de ellos.
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-6">
                Aprendé a desarrollar aplicaciones y automatizaciones con herramientas de IA y No Code, sin necesidad de experiencia previa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/bootcamp/aplicar"
                onClick={() => {
                  fbqTrack('AplicaAhoraClick');
                  if (window.gtag) {
                    window.gtag('event', 'aplicar_ahora_click', {
                      event_category: 'engagement',
                      event_label: 'HeroSection',
                      value: 1
                    });
                  }
                }}
              >
                <Button className="bg-labora-red hover:bg-labora-red/90 px-8 py-6 text-base font-medium">
                  Aplicar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#about">
                <Button variant="outline" className="border-white text-black hover:bg-white/10 px-8 py-6 text-base font-medium">
                  Conoce más
                </Button>
              </a>
            </div>
            
            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2">
                <Code className="h-5 w-5 text-labora-neon" />
                <span className="text-sm text-gray-300">Sin código</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-5 w-5 text-labora-red" />
                <span className="text-sm text-gray-300">Proyectos reales</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-5 w-5 text-labora-neon" />
                <span className="text-sm text-gray-300">100% en vivo</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[450px] w-full animate-fade-in rounded-2xl overflow-hidden hidden lg:block">
            <img 
              src="/lovable-uploads/portada.png"
              alt="Personas creando productos con IA y No-Code" 
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
