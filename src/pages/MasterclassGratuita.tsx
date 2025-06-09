
import React from 'react';
import Navbar from '@/components/Navbar';
import MiniHeader from '@/components/MiniHeader';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { fbqTrack } from "@/lib/fbqTrack";

const MasterclassGratuita = () => {
  return (
    <div className="min-h-screen bg-labora-dark">
      <Navbar />
      <MiniHeader />
      
      {/* Hero Section with Video */}
      <section className="pt-20 pb-8 md:pb-16 bg-labora-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8 md:mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black uppercase tracking-tighter text-white font-montserrat mb-4 md:mb-6">
              <span className="text-[#c1ff72] font-black">Masterclass gratuita:</span><br />
              Crea tu primera app sin programar
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-6 md:mb-8 px-2">
              Aprende paso a paso cómo construir aplicaciones reales usando IA y herramientas No-Code
            </p>
          </div>
          
          {/* Video Container */}
          <div className="max-w-4xl mx-auto mb-8 md:mb-12 px-2">
            <div className="bg-gray-900 rounded-xl md:rounded-2xl p-2 md:p-4 shadow-2xl">
              <div className="relative w-full" style={{ paddingBottom: '56.25%', height: 0 }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-lg md:rounded-xl border-0"
                  src="https://www.tella.tv/video/cm8zcktji000b0ajy9qsu8a9q/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1" 
                  allowFullScreen 
                  allowTransparency 
                />
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="max-w-2xl mx-auto px-4">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800">
              <h3 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-3 md:mb-4">
                ¿Te gustó el video?
              </h3>
              <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 md:mb-8 leading-relaxed">
                Únete gratis a nuestra comunidad para seguir creando proyectos y conectar con otros builders de Latinoamérica
              </p>
              
              <div className="flex flex-col sm:flex-row sm:justify-center">
                <a
                  href="https://chat.whatsapp.com/KhkuUsiCgYk62tfGgPLnjD"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => fbqTrack('MasterclassGratuitaCommunityClick')}
                  className="w-full sm:w-auto"
                >
                  <Button className="bg-labora-red hover:bg-labora-red/90 px-4 sm:px-6 md:px-8 py-3 sm:py-4 md:py-6 text-sm sm:text-base md:text-lg font-medium w-full sm:w-auto min-h-[48px] flex items-center justify-center">
                    <span className="text-center">Unirme a la Comunidad de Labora</span>
                    <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5 flex-shrink-0" />
                  </Button>
                </a>
              </div>
              
              <p className="text-xs md:text-sm text-gray-400 mt-4 md:mt-6 text-center">
                Acceso gratuito • Más de 500+ builders activos
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default MasterclassGratuita;
