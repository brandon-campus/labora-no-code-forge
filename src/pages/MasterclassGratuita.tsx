
import React from 'react';
import Navbar from '@/components/Navbar';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { fbqTrack } from "@/lib/fbqTrack";

const MasterclassGratuita = () => {
  return (
    <div className="min-h-screen bg-labora-dark">
      <Navbar />
      
      {/* Hero Section with Video */}
      <section className="pt-20 pb-16 bg-labora-dark">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="title-hero mb-6">
              <span className="title-accent">Masterclass gratuita:</span><br />
              Crea tu primera app sin programar
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Aprende paso a paso cómo construir aplicaciones reales usando IA y herramientas No-Code
            </p>
          </div>
          
          {/* Video Container */}
          <div className="max-w-4xl mx-auto mb-12">
            <div className="bg-gray-900 rounded-2xl p-4 shadow-2xl">
              <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
                <iframe 
                  style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0, borderRadius: '12px' }} 
                  src="https://www.tella.tv/video/cm8zcktji000b0ajy9qsu8a9q/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1" 
                  allowFullScreen 
                  allowTransparency 
                />
              </div>
            </div>
          </div>
          
          {/* Call to Action */}
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                ¿Te gustó el video?
              </h3>
              <p className="text-gray-300 text-lg mb-8">
                Únete gratis a nuestra comunidad para seguir creando proyectos y conectar con otros builders de Latinoamérica
              </p>
              
              <a
                href="https://chat.whatsapp.com/KhkuUsiCgYk62tfGgPLnjD"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => fbqTrack('MasterclassGratuitaCommunityClick')}
              >
                <Button className="bg-labora-red hover:bg-labora-red/90 px-8 py-6 text-lg font-medium">
                  Unirme a la Comunidad de Labora
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              
              <p className="text-sm text-gray-400 mt-4">
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
