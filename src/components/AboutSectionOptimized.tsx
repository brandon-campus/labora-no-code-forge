import React from 'react';
import { Rocket, Code, Zap, Target, Clock } from 'lucide-react';
import ToolsLogosBar from './ToolsLogosBar';

const AboutSectionOptimized = () => {

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
          <div className="mb-12">
            {/* Qué es */}
            <div className="relative group max-w-2xl mx-auto">
              {/* Background with gradient and shadow */}
              <div className="absolute inset-0 bg-gradient-to-br from-labora-neon/20 via-gray-800 to-labora-red/20 rounded-2xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              
              {/* Main card */}
              <div className="relative bg-gradient-to-br from-gray-800/90 via-gray-800 to-gray-900/90 backdrop-blur-sm rounded-2xl p-8 border border-labora-neon/30 shadow-2xl shadow-labora-neon/10 group-hover:shadow-labora-neon/20 transition-all duration-300 transform group-hover:scale-[1.02]">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-labora-neon/30 to-labora-neon/10 rounded-2xl flex items-center justify-center mr-6 shadow-lg shadow-labora-neon/20">
                    <Rocket className="h-8 w-8 text-labora-neon" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¿Qué es?</h3>
                </div>
                <p className="text-gray-200 leading-relaxed text-lg">
                  Una inmersión en la cual aprenderás a crear aplicaciones funcionales 
                  usando herramientas de IA y No Code para crear tu propio proyecto o trabajar para clientes.
                </p>
              </div>
            </div>
          </div>

          {/* Qué aprenderás */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              ¿Qué aprenderás?
            </h3>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Herramientas de IA */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-labora-neon/20 to-labora-neon/5 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-labora-neon/20 shadow-xl shadow-labora-neon/10 group-hover:shadow-labora-neon/20 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-labora-neon/30 to-labora-neon/10 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-labora-neon/20">
                      <Zap className="h-6 w-6 text-labora-neon" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Herramientas de IA</h4>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Cursor AI, Claude, GitHub Copilot y N8N para automatizar procesos.
                  </p>
                </div>
              </div>

              {/* No Code Platforms */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-labora-red/20 to-labora-red/5 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-labora-red/20 shadow-xl shadow-labora-red/10 group-hover:shadow-labora-red/20 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-labora-red/30 to-labora-red/10 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-labora-red/20">
                      <Code className="h-6 w-6 text-labora-red" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Plataformas No Code</h4>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Supabase, Vercel, Airtable y otras para crear sin código.
                  </p>
                </div>
              </div>

              {/* Proyecto Final */}
              <div className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-labora-neon/20 to-labora-neon/5 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                <div className="relative bg-gradient-to-br from-gray-800/90 to-gray-900/90 backdrop-blur-sm rounded-xl p-6 border border-labora-neon/20 shadow-xl shadow-labora-neon/10 group-hover:shadow-labora-neon/20 transition-all duration-300 transform group-hover:scale-105">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-labora-neon/30 to-labora-neon/10 rounded-xl flex items-center justify-center mr-4 shadow-lg shadow-labora-neon/20">
                      <Target className="h-6 w-6 text-labora-neon" />
                    </div>
                    <h4 className="font-bold text-white text-lg">Proyecto Final</h4>
                  </div>
                  <p className="text-gray-200 text-base leading-relaxed">
                    Una plataforma web completa, compleja y funcional lista para lanzar al mercado.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Tools Logos Bar */}
          <ToolsLogosBar />
        </div>
      </div>
    </section>
  );
};

export default AboutSectionOptimized; 