import React, { useEffect } from 'react';
import { CheckCircle } from 'lucide-react';

const PostAplicacion = () => {
  useEffect(() => {
    // Cargar el script de Calendly
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      // Limpiar el script al desmontar el componente
      const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
      if (existingScript && existingScript.parentNode) {
        existingScript.parentNode.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header Simple */}
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
        {/* Success Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Success Badge */}
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-labora-neon/20 text-labora-neon rounded-full text-xs sm:text-sm font-bold border border-labora-neon/30">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>¡PRE-INSCRIPCIÓN COMPLETADA!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              ¡Perfecto! Ahora agenda tu <span className="text-labora-neon">clase gratuita</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Te hemos reservado un lugar en nuestra clase gratuita en vivo. 
              Elige el día y horario que mejor te convenga en el calendario.
            </p>

            {/* Calendly Widget Container */}
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-2xl max-w-4xl mx-auto mb-8">
              {/* Calendly Widget */}
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/brandoncandia-labora/clase-de-prueba-bootcamp" 
                style={{ minWidth: '320px', height: '700px' }}
              ></div>
            </div>

            {/* Trust Signals */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-gray-400 text-xs sm:text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-labora-neon rounded-full mr-2"></div>
                Cupos limitados
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-labora-neon rounded-full mr-2"></div>
                Sin costo
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-labora-neon rounded-full mr-2"></div>
                Certificado incluido
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
                ¿Qué aprenderás en esta <span className="text-labora-neon">clase gratuita</span>?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                Tendrás las bases para crear tu primera aplicación.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">🚀 Crear tu primera app</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Aprende a usar herramientas de IA para generar código y crear una aplicación funcional desde cero.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">⚡ Automatizar procesos</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Descubre cómo usar No Code para automatizar tareas repetitivas y ahorrar horas de trabajo.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">💰 Generar ingresos</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Conoce las estrategias para monetizar tus creaciones y empezar a generar ingresos con IA.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">🎯 Proyecto real</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Termina la clase con un proyecto real que podrás usar como portfolio o para tu negocio.
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