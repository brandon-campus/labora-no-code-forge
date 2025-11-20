
import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';
import { Button } from "@/components/ui/button";

const CursorAIHero = () => {
  return (
    <section className="relative min-h-screen flex items-center hero-gradient overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-gray-950"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-labora-neon/20">
            <Sparkles className="h-4 w-4 text-labora-neon" />
            <span className="text-labora-neon font-semibold">Clase Abierta Gratuita</span>
          </div>
          
          <h1 className="title-hero mb-6">
            Cursor AI <span className="title-accent">de cero a experto</span>
          </h1>
          
          <p className="text-gray-300 text-xl md:text-2xl mb-4 max-w-3xl mx-auto leading-relaxed font-medium">
            Construye productos digitales con IA y No Code
          </p>
          
          <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
            Aprende a dominar Cursor AI, la herramienta que está revolucionando el desarrollo de software. 
            Desde la instalación hasta crear aplicaciones completas, todo en una clase práctica y en vivo.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Button 
              size="lg"
              className="bg-labora-red hover:bg-labora-red/90 text-white font-semibold text-lg px-8 py-6"
              onClick={() => window.location.href = "#registro"}
            >
              Reservar mi lugar gratis
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-2 border-labora-neon text-labora-neon hover:bg-labora-neon/10 font-semibold text-lg px-8 py-6"
              onClick={() => window.location.href = "#agenda"}
            >
              Ver agenda
            </Button>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-labora-neon"></div>
              <span>100% Gratuita</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-labora-neon"></div>
              <span>2 horas en vivo</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-labora-neon"></div>
              <span>Desde cero, sin requisitos</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-labora-neon"></div>
              <span>Certificado de participación</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursorAIHero;




