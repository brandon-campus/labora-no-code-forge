import React from 'react';
import { Rocket, Code, Zap, Users, Target, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const AboutSectionOptimized = () => {
  const handleComenzarClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-16 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              ¿Qué es el <span className="text-labora-neon">Bootcamp de IA y No Code</span>?
            </h2>
          </div>

          {/* Main Concept Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {/* Qué es */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-labora-neon/20 rounded-full flex items-center justify-center mr-4">
                  <Rocket className="h-6 w-6 text-labora-neon" />
                </div>
                <h3 className="text-xl font-bold text-white">¿Qué es?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Una inmersión en la cual aprenderás a crear aplicaciones funcionales 
                usando herramientas de IA y No Code para crear tu propio proyecto o trabajar para clientes.
              </p>
            </div>

            {/* Para quién */}
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-labora-red/20 rounded-full flex items-center justify-center mr-4">
                  <Users className="h-6 w-6 text-labora-red" />
                </div>
                <h3 className="text-xl font-bold text-white">¿Para quién?</h3>
              </div>
              <p className="text-gray-300 leading-relaxed">
                Emprendedores, profesionales y cualquier persona que quiera crear 
                aplicaciones con IA sin necesidad de programar.
              </p>
            </div>
          </div>

          {/* Qué aprenderás */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              ¿Qué aprenderás?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Herramientas de IA */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-labora-neon/20 rounded-full flex items-center justify-center mr-3">
                    <Zap className="h-4 w-4 text-labora-neon" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Herramientas de IA</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Cursor AI, Claude, GitHub Copilot y N8N para automatizar procesos.
                </p>
              </div>

              {/* No Code Platforms */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-labora-red/20 rounded-full flex items-center justify-center mr-3">
                    <Code className="h-4 w-4 text-labora-red" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Plataformas No Code</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Supabase, Vercel, Airtable y otras para crear sin código.
                </p>
              </div>

              {/* Proyecto Final */}
              <div className="bg-gray-800 rounded-lg p-4 border border-gray-700">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 bg-labora-neon/20 rounded-full flex items-center justify-center mr-3">
                    <Target className="h-4 w-4 text-labora-neon" />
                  </div>
                  <h4 className="font-semibold text-white text-sm">Proyecto Final</h4>
                </div>
                <p className="text-gray-300 text-sm">
                  Una plataforma web completa, compleja y funcional lista para lanzar al mercado.
                </p>
              </div>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Button
              onClick={handleComenzarClick}
              className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-8 py-6 text-lg transition-all shadow-lg shadow-labora-neon/25 transform hover:scale-105"
            >
              PROBAR CLASE GRATIS
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOptimized; 