
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Gift } from 'lucide-react';

const CursorAIRegistration = () => {
  const bonuses = [
    "Acceso a la grabación completa de la clase",
    "Material complementario y recursos descargables",
    "Certificado de participación",
    "Acceso a comunidad exclusiva de estudiantes",
    "Plantillas de prompts optimizados para Cursor AI"
  ];

  return (
    <section id="registro" className="relative py-20 bg-gray-950">
      {/* Tech Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-gray-950"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-labora-neon/10 border border-labora-neon/20">
              <Gift className="h-5 w-5 text-labora-neon" />
              <span className="text-labora-neon font-semibold">Inscripción Gratuita</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              ¿Listo para dominar <span className="text-labora-neon">Cursor AI</span>?
            </h2>
            
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Reserva tu lugar gratis en esta clase abierta y comienza tu viaje hacia el desarrollo 
              acelerado con IA. Cupos limitados.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Formulario de registro */}
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Reserva tu lugar ahora
              </h3>
              
              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Nombre completo
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-labora-neon transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-labora-neon transition-colors"
                    placeholder="tu@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium mb-2">
                    ¿Qué te gustaría aprender?
                  </label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-3 rounded-lg bg-white/5 border border-white/10 text-white placeholder-gray-400 focus:outline-none focus:border-labora-neon transition-colors resize-none"
                    placeholder="Cuéntanos tus objetivos..."
                  />
                </div>
              </div>

              <Button 
                size="lg"
                className="w-full bg-labora-neon hover:bg-labora-neon/90 text-gray-900 font-semibold text-lg py-6"
                onClick={() => {
                  // Aquí puedes integrar con tu formulario de Tally o el sistema que uses
                  window.location.href = "https://tally.so/r/w49bBo";
                }}
              >
                Confirmar mi registro
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <p className="mt-4 text-gray-400 text-sm text-center">
                Al registrarte, recibirás un email de confirmación con todos los detalles.
              </p>
            </div>

            {/* Bonuses */}
            <div className="bg-gradient-to-br from-labora-red/10 to-labora-neon/10 rounded-2xl p-8 border border-labora-neon/20">
              <div className="flex items-center gap-3 mb-6">
                <Gift className="h-6 w-6 text-labora-neon" />
                <h3 className="text-2xl font-bold text-white">
                  Lo que recibirás
                </h3>
              </div>
              
              <ul className="space-y-4">
                {bonuses.map((bonus, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-1">
                      <div className="w-6 h-6 rounded-full bg-labora-neon/20 flex items-center justify-center">
                        <Check className="h-4 w-4 text-labora-neon" />
                      </div>
                    </div>
                    <span className="text-gray-300 leading-relaxed">{bonus}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 bg-white/5 rounded-lg border border-white/10">
                <p className="text-white font-semibold mb-2">📅 Fecha y hora</p>
                <p className="text-gray-300">Próximo jueves - 19:00hs (ARG)</p>
                <p className="text-gray-400 text-sm mt-2">Te enviaremos el link de acceso por email</p>
              </div>
            </div>
          </div>

          <div className="mt-8 text-center">
            <p className="text-gray-400 text-sm">
              <span className="text-labora-neon font-semibold">Cupos limitados.</span> Las grabaciones solo estarán disponibles para los asistentes en vivo.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursorAIRegistration;


