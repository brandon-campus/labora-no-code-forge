import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket, Video } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const HeroSectionV3 = () => {
  const handleComenzarClick = () => {
    fbqTrack('ComenzarGratisClick');
    if (window.gtag) {
      window.gtag('event', 'comenzar_gratis_click', {
        event_category: 'engagement',
        event_label: 'HeroSectionV3',
        value: 1
      });
    }
    window.location.href = '/bootcamp-landing';
  };

  const handleWhatsAppClick = () => {
    window.open('https://wa.me/5491138142899?text=¡Hola%20Labora!%20Quiero%20más%20información%20sobre%20el%20bootcamp%20de%20IA%20y%20No%20Code', '_blank');
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center px-4 py-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          
          {/* Sección Izquierda - Contenido Principal */}
          <div className="space-y-6 lg:space-y-8 order-2 lg:order-1">
            {/* Banner Superior */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-gray-800/50 text-white rounded-full text-sm font-semibold border border-gray-700">
              <span>BOOTCAMP EN VIVO DE IA Y NO CODE</span>
            </div>
            
            {/* Título Principal */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-black leading-tight text-white">
              CREA PROYECTOS CON <span className="text-labora-neon">IA</span> Y EMPEZÁ A VIVIR DE ELLOS.
            </h1>
            
            {/* Subtítulo */}
            <p className="text-white text-base sm:text-lg lg:text-xl leading-relaxed">
              Aprendé a desarrollar aplicaciones y automatizaciones con herramientas de IA y No Code. Crea tu primer proyecto con las 2 primeras clases del Bootcamp, gratis.
            </p>
            
            {/* CTA Principal */}
            <div className="space-y-4">
              <Button
                onClick={handleComenzarClick}
                className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-lg px-6 py-4 sm:px-8 sm:py-4 text-base sm:text-lg transition-all shadow-lg w-full sm:w-auto"
              >
                COMENZAR GRATIS
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
              
              {/* Enlace WhatsApp */}
              <div className="text-center lg:text-left">
                <button
                  onClick={handleWhatsAppClick}
                  className="text-white hover:text-labora-neon transition-colors underline text-sm sm:text-base"
                >
                  Hablar por Whatsapp
                </button>
              </div>
            </div>
            
            {/* Características Destacadas */}
            <div className="flex flex-wrap gap-4 sm:gap-6 text-white">
              <div className="flex items-center gap-2">
                <Code className="h-4 w-4 sm:h-5 sm:w-5 text-labora-neon" />
                <span className="text-sm sm:text-base">Sin código</span>
              </div>
              <div className="flex items-center gap-2">
                <Rocket className="h-4 w-4 sm:h-5 sm:w-5 text-labora-red" />
                <span className="text-sm sm:text-base">Proyectos reales</span>
              </div>
              <div className="flex items-center gap-2">
                <Video className="h-4 w-4 sm:h-5 sm:w-5 text-labora-neon" />
                <span className="text-sm sm:text-base">100% en vivo</span>
              </div>
            </div>
          </div>
          
          {/* Sección Derecha - Imagen */}
          <div className="order-1 lg:order-2">
            <img 
              src="/lovable-uploads/portadas.png" 
              alt="Estudiante trabajando en laptop" 
              className="w-full h-auto rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV3; 