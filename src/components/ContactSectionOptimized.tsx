import React from 'react';
import { MessageCircle } from 'lucide-react';

const ContactSectionOptimized = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-labora-neon/20 rounded-full mb-6">
              <MessageCircle className="h-8 w-8 text-labora-neon" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Prueba Gratis el <span className="text-labora-neon">Bootcamp de IA y No Code</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Completa el formulario y comienza tu viaje en AI con tu Clase de Prueba Gratuita en vivo.

            </p>
          </div>

          {/* Application Form Section */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700 shadow-2xl">
            
            {/* Tally Form Embed */}
            <div className="max-w-2xl mx-auto">
              <iframe
                src="https://tally.so/embed/w49bBo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="600"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Aplicación al Bootcamp AI Builder"
                className="rounded-lg"
                style={{
                  background: 'transparent',
                  border: 'none'
                }}
              />
            </div>
          </div>

          {/* Trust Signals */}
          <div className="text-center">
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-400 text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-labora-neon rounded-full mr-2"></div>
                Acceso inmediato
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-labora-neon rounded-full mr-2"></div>
                Sin compromisos
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-labora-neon rounded-full mr-2"></div>
                Soporte 24/7
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-labora-neon rounded-full mr-2"></div>
                Garantía de satisfacción
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSectionOptimized; 