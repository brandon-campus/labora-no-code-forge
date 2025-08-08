
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Zap, Clock, Users } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const HeroSection = () => {
  const handleCampusClick = () => {
    fbqTrack('CampusAccessClick');
    if (window.gtag) {
      window.gtag('event', 'campus_access_click', {
        event_category: 'engagement',
        event_label: 'HeroSection',
        value: 1
      });
    }
    // Redirigir al campus para registro
    window.location.href = '/registro-curso';
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center px-4 py-8 pt-16 lg:pt-20">
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Badge de urgencia */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-labora-neon/20 text-labora-neon rounded-full text-sm font-bold border border-labora-neon/30 animate-pulse">
          <Zap className="h-4 w-4" />
          <span>ACCESO INMEDIATO GRATUITO</span>
        </div>
        
        {/* Headline principal - Mobile first */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black leading-tight mb-6 text-white">
          Crea tu primer<span className="text-labora-neon"> proyecto con IA </span> 
          <br className="hidden sm:block" />
          <span className="text-white bg-gradient-to-r from-labora-neon to-labora-neon/70 bg-clip-text text-transparent">AHORA</span>
        </h1>
        
        {/* Subheadline enfocado en acción inmediata */}
        <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
          Aprende a Desarrollar Aplicaciones y Plataformas con <span className="text-labora-neon font-bold">Inteligencia Artificial</span> con los primeros módulos de nuestro bootcamp en menos de 30 minutos.
        </p>
        
        {/* CTA Principal - Más prominente y urgente */}
        <div className="mb-8">
          <Button
            onClick={handleCampusClick}
            className="bg-labora-neon hover:bg-labora-neon/90 text-black font-black rounded-full px-8 py-6 text-lg sm:text-xl transition-all shadow-lg shadow-labora-neon/25 w-full sm:w-auto transform hover:scale-105 animate-bounce"
          >
            <Zap className="mr-3 h-5 w-5" />
            CREAR MI APP AHORA
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>
        
        {/* Social proof simplificado */}
        <div className="flex items-center justify-center gap-4 mb-6 text-sm text-gray-300">
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4 text-labora-neon" />
            <span><span className="text-labora-neon font-bold">500+</span> estudiantes</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4 text-labora-red" />
            <span>30 min</span>
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

export default HeroSection;
