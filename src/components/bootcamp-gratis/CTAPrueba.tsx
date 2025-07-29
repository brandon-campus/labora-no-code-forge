import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight, Clock, Users, Star, Zap } from 'lucide-react';

const CTAPrueba = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-gray-900 via-gray-950 to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div className="mb-8">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              ¿Qué estás esperando para <span className="text-labora-neon">probar las clases gratis</span>?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              En solo 2 clases aprenderás más sobre IA y No-Code que en meses de estudio por tu cuenta. 
              Sin riesgo, sin compromiso, solo resultados.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Clock className="h-12 w-12 text-labora-neon mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Solo 4 horas</h3>
              <p className="text-gray-300 text-sm">
                En 2 clases intensivas tendrás tu primera aplicación funcionando
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Users className="h-12 w-12 text-labora-red mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">15 cupos únicos</h3>
              <p className="text-gray-300 text-sm">
                Grupos reducidos para atención personalizada garantizada
              </p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
              <Star className="h-12 w-12 text-labora-neon mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">100% gratis</h3>
              <p className="text-gray-300 text-sm">
                Sin costo, sin compromiso, solo valor real para ti
              </p>
            </div>
          </div>

          <div className="bg-gradient-to-r from-labora-neon to-labora-red p-8 rounded-2xl text-black mb-8">
            <h3 className="text-2xl font-bold mb-4">
              🚀 Oferta por tiempo limitado
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Las próximas 2 cohortes están casi completas. 
              Reserva tu lugar ahora y asegúrate de no perder esta oportunidad.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-black hover:bg-gray-800 text-white font-bold px-10 py-4 rounded-full transition-all shadow-lg"
                onClick={() => {
                  // Scroll to registration form
                  const element = document.querySelector('#registro-prueba');
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
              >
                <Zap className="mr-2 h-5 w-5" />
                RESERVAR MI LUGAR AHORA
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <a
                href="https://wa.me/5491178519054?text=%C2%A1Hola%20Labora!%20Quiero%20reservar%20mi%20lugar%20para%20las%202%20clases%20gratuitas%20antes%20de%20que%20se%20agoten%20los%20cupos"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-black text-black font-bold px-10 py-4 rounded-full hover:bg-black hover:text-white transition-colors"
              >
                Hablar por Whatsapp
              </a>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold mb-3">✅ Lo que SÍ incluye:</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• 2 clases en vivo de 2 horas cada una</li>
                <li>• Acceso al campus virtual por 1 semana</li>
                <li>• Material de apoyo descargable</li>
                <li>• Certificado de participación</li>
                <li>• Descuento especial si continúas</li>
              </ul>
            </div>
            
            <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10">
              <h4 className="text-lg font-bold mb-3">❌ Lo que NO incluye:</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li>• Costos ocultos o sorpresas</li>
                <li>• Compromiso de continuar</li>
                <li>• Spam o emails molestos</li>
                <li>• Compartir tu información</li>
                <li>• Presión para inscribirte</li>
              </ul>
            </div>
          </div>

          <div className="mt-12">
            <p className="text-gray-400 text-sm">
              * Cupos limitados por cohorte. Se llenan rápido. 
              Reserva tu lugar ahora para asegurar tu participación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAPrueba; 