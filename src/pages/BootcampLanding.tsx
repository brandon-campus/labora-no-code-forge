import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Play, Users, Clock, Star, Zap, CheckCircle, Rocket, Code, Target } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";
import WizardAplicar from '@/components/WizardAplicar';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const BootcampLanding = () => {
  const [wizardOpen, setWizardOpen] = useState(false);

  const handleCTAClick = () => {
    setWizardOpen(true);
    fbqTrack('BootcampLandingCTA');
    if (window.gtag) {
      window.gtag('event', 'bootcamp_landing_cta', {
        event_category: 'engagement',
        event_label: 'BootcampLanding',
        value: 1
      });
    }
  };

  return (
    <div className="min-h-screen hero-gradient">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-labora-neon/20 text-labora-neon rounded-full text-sm font-semibold border border-labora-neon/30">
              <Star className="h-4 w-4" />
              <span>2 Clases Gratuitas - Sin Compromiso</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-white">
              Creá tu primer <span className="text-labora-neon">proyecto con IA</span> sin saber <span className="text-labora-red">programar</span>
            </h1>
            
            <p className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Descubrí cómo crear aplicaciones funcionales usando Inteligencia Artificial y herramientas No-Code. 
              <strong className="text-white"> Probá 2 clases gratis</strong> del Bootcamp más práctico de Latinoamérica.
            </p>
            
            <Button
              onClick={handleCTAClick}
              className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-12 py-6 text-xl transition-all shadow-lg shadow-labora-neon/25 uppercase mb-8"
            >
              <Play className="mr-3 h-6 w-6" />
              ACCEDER A LAS 2 CLASES GRATIS
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto">
              <div className="flex items-center gap-2 justify-center">
                <Users className="h-5 w-5 text-labora-neon" />
                <span className="text-sm text-gray-300">15 cupos</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Clock className="h-5 w-5 text-labora-red" />
                <span className="text-sm text-gray-300">2 clases</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Zap className="h-5 w-5 text-labora-neon" />
                <span className="text-sm text-gray-300">100% gratis</span>
              </div>
              <div className="flex items-center gap-2 justify-center">
                <Star className="h-5 w-5 text-labora-red" />
                <span className="text-sm text-gray-300">Sin compromiso</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You'll Learn */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-white">
              En estas <span className="text-labora-neon">2 clases gratuitas</span> vas a:
            </h2>
            <p className="text-xl text-gray-300 text-center mb-16 max-w-3xl mx-auto">
              Experimentá el poder de combinar IA y No-Code para crear proyectos reales
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <Rocket className="h-10 w-10 text-labora-neon mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Crear tu primera app con IA
                </h3>
                <p className="text-gray-300">
                  Aprendé a usar herramientas de IA para generar código y crear aplicaciones funcionales desde cero.
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <Code className="h-10 w-10 text-labora-red mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Dominar herramientas No-Code
                </h3>
                <p className="text-gray-300">
                  Descubrí plataformas como Bubble, Zapier y Make para automatizar procesos sin programar.
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <Target className="h-10 w-10 text-labora-neon mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Definir tu proyecto real
                </h3>
                <p className="text-gray-300">
                  Identificá una idea viable y aprendé a estructurarla para convertirla en un negocio.
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <Users className="h-10 w-10 text-labora-red mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Conectar con mentores expertos
                </h3>
                <p className="text-gray-300">
                  Interactuá directamente con profesionales que ya viven de proyectos con IA y No-Code.
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <Zap className="h-10 w-10 text-labora-neon mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Acceso a recursos exclusivos
                </h3>
                <p className="text-gray-300">
                  Obtené acceso temporal al campus virtual con templates, guías y herramientas premium.
                </p>
              </div>

              <div className="bg-gray-800 p-8 rounded-2xl border border-gray-700">
                <CheckCircle className="h-10 w-10 text-labora-red mb-4" />
                <h3 className="text-xl font-bold text-white mb-3">
                  Certificado de participación
                </h3>
                <p className="text-gray-300">
                  Recibí un certificado que podés agregar a tu portfolio y LinkedIn.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-labora-neon to-labora-red p-10 rounded-3xl text-white">
              <h3 className="text-3xl font-bold mb-6">
                🎯 Resultado Garantizado
              </h3>
              <p className="text-xl opacity-90 mb-8">
                Al finalizar las 2 clases tendrás una aplicación funcional creada con IA y No-Code, 
                lista para mostrar en tu portfolio o continuar desarrollando.
              </p>
              
              <Button
                onClick={handleCTAClick}
                className="bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-full px-10 py-4 text-lg transition-all shadow-lg"
              >
                <Play className="mr-2 h-5 w-5" />
                RESERVAR MI LUGAR GRATIS
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              ¿Listo para crear tu primera <span className="text-labora-neon">app con IA</span>?
            </h2>
            
            <p className="text-gray-300 mb-8 text-lg">
              Reservá tu lugar gratis en estas 2 clases exclusivas y comenzá tu viaje en el mundo 
              del desarrollo No-Code + IA.
            </p>
            
            <Button
              onClick={handleCTAClick}
              className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-12 py-6 text-xl transition-all shadow-lg shadow-labora-neon/25 uppercase mb-6"
            >
              <Play className="mr-3 h-6 w-6" />
              ACCEDER GRATIS AHORA
              <ArrowRight className="ml-3 h-6 w-6" />
            </Button>
            
            <p className="text-gray-400 text-sm">
              Cupos limitados. Las grabaciones solo estarán disponibles para los asistentes en vivo.
            </p>
          </div>
        </div>
      </section>

      <WizardAplicar open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </div>
  );
};

export default BootcampLanding;