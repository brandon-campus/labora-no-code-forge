
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Code, Rocket } from 'lucide-react';

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
                Crea productos reales <span className="text-labora-neon">sin saber programar</span>
              </h1>
              <p className="text-gray-300 text-lg md:text-xl mb-6">
                Desarrolla aplicaciones y plataformas usando Inteligencia Artificial y herramientas No-Code, sin necesidad de conocimientos técnicos previos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://tally.so/r/w49bBo" target="_blank" rel="noopener noreferrer">
                <Button className="bg-labora-red hover:bg-labora-red/90 px-8 py-6 text-base font-medium">
                  Aplicar ahora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#beneficios">
                <Button variant="outline" className="border-labora-neon text-labora-neon hover:bg-labora-neon/10 px-8 py-6 text-base font-medium">
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
            </div>
          </div>
          
          <div className="relative h-[450px] w-full animate-fade-in rounded-2xl overflow-hidden hidden lg:block">
            <div className="absolute inset-0 bg-gradient-to-br from-labora-dark/80 to-labora-dark/60 rounded-2xl"></div>
            <img 
              src="/lovable-uploads/dcef2b8e-f8f8-478d-874b-019b18671f8d.png"
              alt="Personas creando productos con IA y No-Code" 
              className="w-full h-full object-cover rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6">
              <p className="text-white font-medium text-lg">Programa intensivo de 4 semanas con clases en vivo</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
