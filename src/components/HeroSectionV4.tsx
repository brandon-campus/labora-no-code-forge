import React from 'react';
import { ArrowRight, Zap, Clock, Users, Code, Rocket, Video, Play, BookOpen, Star, Gift, Calendar, MessageCircle, Lightbulb, Layout, FileSearch, Megaphone, CircuitBoard, Cpu } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { fbqTrack } from '@/lib/fbqTrack';

const HeroSectionV4 = () => {
  const handleCampusClick = () => {
    // Scroll to contact section instead of redirecting
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
    
    // Track the event
    fbqTrack('HeroCTABootcampV4');
  };

  return (
    <section className="hero-gradient min-h-screen flex items-center px-4 py-8 pt-16 lg:pt-20">
      <div className="w-full max-w-2xl mx-auto text-center">
        {/* Badge de urgencia */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-labora-neon/10 border border-labora-neon/20">
          <Zap className="h-4 w-4 text-labora-neon" />
          <span className="text-labora-neon text-sm font-semibold">ACCESO INMEDIATO GRATUITO</span>
        </div>

        {/* Headline principal */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
          Crea tu primer<span className="text-labora-neon"> proyecto con IA </span><br className="hidden sm:block" />
          <span className="text-white bg-gradient-to-r from-labora-neon to-labora-neon/70 bg-clip-text text-transparent">AHORA</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
          Aprende a Desarrollar Aplicaciones y Plataformas con <span className="text-labora-neon font-bold">Inteligencia Artificial</span> con los primeros módulos de nuestro bootcamp en menos de 30 minutos.
        </p>

        {/* CTA Principal */}
        <div className="mb-8">
          <Button
            onClick={handleCampusClick}
            className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-8 py-6 text-lg sm:text-xl transition-all shadow-lg shadow-labora-neon/25 transform hover:scale-105 w-full sm:w-auto"
          >
            EMPEZAR AHORA
            <ArrowRight className="ml-3 h-5 w-5" />
          </Button>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
          <div className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            <span>500+ estudiantes</span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="h-4 w-4 fill-current text-yellow-400" />
            <span>4.9/5 calificación</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Acceso inmediato</span>
          </div>
        </div>

        {/* Garantía */}
        <div className="mt-8 p-4 bg-gray-800/50 rounded-lg border border-gray-700">
          <p className="text-gray-300 text-sm">
            <span className="text-labora-neon font-semibold">Garantía de satisfacción:</span> Si no estás satisfecho con los primeros módulos, te devolvemos tu inversión.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionV4; 