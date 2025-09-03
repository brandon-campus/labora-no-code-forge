import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Users } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";
import { Link } from 'react-router-dom';

const HeroSectionV2 = () => {

  return (
    <section className="relative min-h-screen flex items-center px-4 py-8 pt-16 lg:pt-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      
      {/* Elementos de profundidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/5 via-transparent to-labora-red/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-labora-neon/10 via-transparent to-transparent"></div>
      
      {/* Contenido */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="w-full max-w-4xl mx-auto text-center">
          {/* Badge de urgencia */}
          <div className="inline-flex items-center gap-2 mb-6 md:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-labora-neon/20 text-labora-neon rounded-full text-sm font-bold border border-labora-neon/30 animate-pulse">
            <Zap className="h-4 w-4 sm:h-5 sm:w-5" />
            <span className="uppercase tracking-wider">BOOTCAMP EN VIVO DE IA Y NO CODE</span>
          </div>
          
          {/* Headline principal - Mobile first */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 md:mb-8 text-white">
            Crea proyectos con<span className="text-labora-neon"> IA </span> 
            <br className="hidden sm:block" />
            <span className="text-white bg-gradient-to-r from-labora-neon to-labora-neon/70 bg-clip-text text-transparent">Y EMPIEZA A VIVIR DE ELLOS.</span>
          </h1>
          
          {/* Subheadline enfocado en acción inmediata */}
          <p className="text-gray-300 text-lg md:text-xl mb-8 md:mb-12 leading-relaxed max-w-3xl mx-auto">
          Domina las herramientas y procesos para construir apps, automatizaciones y agentes de IA <span className="text-labora-neon font-bold">sin programar</span> guiado en vivo por expertos y con acompañamiento 100% práctico.
          </p>
          
          {/* CTA Principal - Más prominente y urgente */}
          <div className="mb-8">
            <Link to="/formulario-bootcamp">
              <Button
                className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl transition-all shadow-lg shadow-labora-neon/25 transform hover:scale-105 w-full sm:w-auto"
              >
                PROBAR CLASE GRATIS
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6" />
              </Button>
            </Link>
          </div>
          
          {/* Social proof simplificado */}
          <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-300">
            <div className="flex items-center gap-1">
              <Users className="h-4 w-4 text-labora-neon" />
              <span><span className="text-labora-neon font-bold">112+</span> estudiantes</span>
            </div>
          </div>
          
          {/* Garantía de seguridad */}
          <p className="text-gray-400 text-xs md:text-sm">
            ✅ Prueba la experiencia del Bootcamp de IA y No Code con esta clase gratuita.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV2; 