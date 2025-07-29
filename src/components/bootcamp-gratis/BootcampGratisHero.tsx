import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Clock, Star, Zap } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";
import WizardAplicar from '../WizardAplicar';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const BootcampGratisHero = () => {
  const [wizardOpen, setWizardOpen] = useState(false);

  return (
    <section className="hero-gradient py-16 md:pt-20 md:pb-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in-up lg:pr-10">
            <div>
              <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-labora-neon/20 text-labora-neon rounded-full text-sm font-semibold border border-labora-neon/30">
                <Star className="h-4 w-4" />
                <span>Prueba Gratuita - Sin Compromiso</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
                Prueba <span className="text-labora-neon">2 clases</span> del bootcamp <span className="text-labora-red">GRATIS</span>
              </h1>
              
              <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
                Descubre si el bootcamp de IA y No-Code es para ti. En solo 2 clases aprenderás a crear tu primera aplicación con Inteligencia Artificial, sin experiencia previa.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={() => {
                  setWizardOpen(true);
                  fbqTrack('PruebaGratisClick');
                  if (window.gtag) {
                    window.gtag('event', 'prueba_gratis_click', {
                      event_category: 'engagement',
                      event_label: 'BootcampGratisHero',
                      value: 1
                    });
                  }
                }}
                className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-10 py-6 text-lg transition-all shadow-lg shadow-labora-neon/25 uppercase"
              >
                <Play className="mr-2 h-5 w-5" />
                RESERVAR MI LUGAR
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <a
                href="https://wa.me/5491178519054?text=%C2%A1Hola%20Labora!%20Quiero%20reservar%20mi%20lugar%20para%20las%202%20clases%20gratuitas%20del%20bootcamp"
                target="_blank"
                rel="noopener noreferrer"
                className="block mt-2 text-white underline text-base font-semibold hover:text-labora-neon transition-colors text-left"
              >
                Hablar por Whatsapp
              </a>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-labora-neon" />
                <span className="text-sm text-gray-300">15 cupos</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-labora-red" />
                <span className="text-sm text-gray-300">2 clases</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-labora-neon" />
                <span className="text-sm text-gray-300">100% gratis</span>
              </div>
              <div className="flex items-center gap-2">
                <Star className="h-5 w-5 text-labora-red" />
                <span className="text-sm text-gray-300">Sin compromiso</span>
              </div>
            </div>
          </div>
          
          <div className="relative h-[500px] w-full animate-fade-in rounded-2xl overflow-hidden hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-labora-neon/20 to-labora-red/20 rounded-2xl"></div>
            <img 
              src="/lovable-uploads/portada.png"
              alt="Estudiantes aprendiendo IA y No-Code" 
              className="w-full h-full object-cover rounded-2xl relative z-10"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-black/80 backdrop-blur-sm rounded-lg p-4 z-20">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-labora-neon rounded-full flex items-center justify-center">
                  <Play className="h-6 w-6 text-black" />
                </div>
                <div>
                  <p className="text-white font-semibold">Próxima cohorte</p>
                  <p className="text-gray-300 text-sm">Lunes y Miércoles 19:00hs</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WizardAplicar open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </section>
  );
};

export default BootcampGratisHero; 