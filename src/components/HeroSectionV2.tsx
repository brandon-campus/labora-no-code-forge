import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Users } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";

const HeroSectionV2 = () => {
  const handleCampusClick = () => {
    // Scroll to contact section instead of redirecting
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center px-4 py-8 pt-16 lg:pt-20 overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Overlay sutil */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
      
      {/* Elementos de profundidad */}
      <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/5 via-transparent to-labora-red/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-labora-neon/10 via-transparent to-transparent"></div>
      
      {/* Contenido */}
      <div className="relative w-full max-w-2xl mx-auto text-center">
        {/* Badge de urgencia */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-labora-neon/20 text-labora-neon rounded-full text-sm font-bold border border-labora-neon/30 animate-pulse">
          <Zap className="h-4 w-4" />
          <span>BOOTCAMP EN VIVO DE IA Y NO CODE</span>
        </div>
        
        {/* Headline principal - Mobile first */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white">
          Crea proyectos con<span className="text-labora-neon"> IA </span> 
          <br className="hidden sm:block" />
          <span className="text-white bg-gradient-to-r from-labora-neon to-labora-neon/70 bg-clip-text text-transparent">Y EMPEZÁ A VIVIR DE ELLOS.</span>
        </h1>
        
        {/* Subheadline enfocado en acción inmediata */}
        <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
        Dominá las herramientas y procesos para construir apps, automatizaciones y agentes de IA <span className="text-labora-neon font-bold">sin programar</span> guiado en vivo por expertos y con acompañamiento 100% práctico.
        </p>
        
        {/* CTA Principal - Más prominente y urgente */}
        <div className="mb-8">
          <Button
            onClick={handleCampusClick}
            className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-8 py-6 text-lg sm:text-xl transition-all shadow-lg shadow-labora-neon/25 transform hover:scale-105 w-full sm:w-auto"
          >
            EMPEZAR AHORA
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
        
        {/* Social proof simplificado */}
        <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-labora-neon" />
            <span><span className="text-labora-neon font-bold">112+</span> estudiantes</span>
          </div>
        </div>
        
        {/* Garantía de seguridad */}
        <p className="text-gray-400 text-xs">
          ✅ Sin registro de tarjeta • ✅ Acceso inmediato • ✅ Contenido premium
        </p>
      </div>
    </section>
  );
};

export default HeroSectionV2; 