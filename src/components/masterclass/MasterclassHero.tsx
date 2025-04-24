
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const MasterclassHero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-gray-950"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-labora-neon/20">
            <span className="text-labora-neon font-semibold">Masterclass Gratuita</span>
          </div>
          
          <h1 className="title-hero mb-6">
            Creá tu primera <span className="title-accent">aplicación con IA</span> sin saber programar
          </h1>
          
          <p className="text-gray-300 text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
            Descubrí cómo crear aplicaciones potentes combinando Inteligencia Artificial y herramientas No-Code en esta masterclass práctica y gratuita.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg"
              className="bg-labora-red hover:bg-labora-red/90 text-white font-semibold"
              onClick={() => window.location.href = "#registro"}
            >
              Reservar mi lugar
              <ArrowRight className="ml-2" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassHero;
