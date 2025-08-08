import React from 'react';
import { CheckCircle, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PostAplicacion = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent("Hola Labora, me pre-inscribí en el Bootcamp de IA y No Code y quiero que me brindes toda la información.");
    window.open(`https://wa.me/5491138142899?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header Simple - Mobile Optimized */}
      <header className="w-full bg-transparent backdrop-blur-sm z-50 fixed top-0 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-14 sm:h-16">
            <img 
              src="/lovable-uploads/logolabora.webp" 
              alt="Labora" 
              className="h-6 sm:h-8 md:h-10 w-auto"
            />
          </div>
        </div>
      </header>

      <div className="pt-14 sm:pt-16">
        {/* Success Section - Mobile First */}
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Success Badge - Mobile Optimized */}
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-green-500/20 text-green-400 rounded-full text-xs sm:text-sm font-bold border border-green-500/30">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>¡PRE-INSCRIPCIÓN COMPLETADA!</span>
            </div>

            {/* Main Headline - Mobile First */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              ¡Perfecto! Tu pre-inscripción ha sido <span className="text-labora-neon">recibida</span>
            </h1>

            {/* Subheadline - Mobile Optimized */}
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Ahora es momento de recibir toda la información del bootcamp y resolver tus dudas.
            </p>

            {/* WhatsApp CTA - Mobile First */}
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-2xl max-w-2xl mx-auto">
              {/* WhatsApp Icon - Mobile Optimized */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <MessageCircle className="h-8 w-8 sm:h-10 sm:w-10 text-white" />
              </div>

              {/* CTA Headline - Mobile First */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
                ¡Inscríbete por WhatsApp!
              </h2>

              {/* Description - Mobile Optimized */}
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-300 leading-relaxed">
                Chatea con nosotros y recibe toda la información del bootcamp, 
                incluyendo fechas, precios y detalles del programa.
              </p>

              {/* WhatsApp Button - Mobile First */}
              <Button
                onClick={handleWhatsAppClick}
                className="bg-green-500 hover:bg-green-600 text-white font-bold rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all shadow-lg shadow-green-500/25 transform hover:scale-105 hover:shadow-xl hover:shadow-green-500/40 active:scale-95 w-full"
              >
                INSCRIBIRSE POR WHATSAPP
                <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              {/* Trust Signals - Mobile Optimized */}
              <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-gray-400 text-xs sm:text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Respuesta inmediata
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Información completa
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                  Soporte personalizado
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Por qué WhatsApp Section - Mobile First */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
                ¿Por qué <span className="text-green-500">WhatsApp</span>?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                La forma más rápida y personalizada de recibir toda la información.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">✅ Respuesta Inmediata</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Recibe información al instante, sin esperas ni demoras. Nuestro equipo está disponible para responder tus consultas de inmediato.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">✅ Información Personalizada</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Resuelve todas tus dudas específicas sobre el programa, fechas, precios y cualquier consulta que tengas sobre el bootcamp.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">✅ Agendamiento Directo</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Coordina tu clase de prueba y cualquier sesión informativa directamente con nuestro equipo, sin intermediarios.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">✅ Soporte Continuo</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Acceso directo a nuestro equipo para cualquier consulta durante todo el proceso de inscripción y el programa.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostAplicacion; 