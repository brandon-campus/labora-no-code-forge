import React from 'react';
import { MessageCircle, Mail, Phone } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const ContactSectionOptimized = () => {
  const handleComenzarClick = () => {
    window.location.href = '/registro-curso';
  };

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("¡Hola! Me interesa el bootcamp de AI Builder. ¿Podrían darme más información?");
    window.open(`https://wa.me/573001234567?text=${message}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-labora-neon/20 rounded-full mb-6">
              <MessageCircle className="h-8 w-8 text-labora-neon" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              ¿Listo para <span className="text-labora-neon">transformar tu futuro</span>?
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Únete a cientos de estudiantes que ya están creando aplicaciones con IA. 
              Tu próximo proyecto está a solo un clic de distancia.
            </p>
          </div>

          {/* Main CTA Card */}
          <div className="bg-gray-800 rounded-2xl p-8 mb-8 border border-gray-700 shadow-2xl">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                ¡Comienza tu viaje en AI Builder hoy mismo!
              </h3>
              <p className="text-gray-300 mb-6">
                Acceso inmediato • Sin compromisos • Resultados garantizados
              </p>
              
              <Button
                onClick={handleComenzarClick}
                className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-8 py-6 text-lg sm:text-xl transition-all shadow-lg shadow-labora-neon/25 transform hover:scale-105 w-full sm:w-auto mb-6"
              >
                COMENZAR AHORA
                <ArrowRight className="ml-3 h-5 w-5" />
              </Button>
              
              <p className="text-gray-400 text-sm">
                Cupos limitados • Acceso inmediato • Sin compromisos
              </p>
            </div>
          </div>

          

          {/* Trust Signals */}
          <div className="text-center mt-12">
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