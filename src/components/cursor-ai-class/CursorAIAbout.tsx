
import React from 'react';
import { Check, Code, Zap, Rocket, Brain } from 'lucide-react';

const CursorAIAbout = () => {
  const learningPoints = [
    {
      icon: Code,
      title: "Instalación y configuración",
      description: "Aprende a instalar y configurar Cursor AI desde cero, optimizando tu entorno de trabajo para máxima productividad."
    },
    {
      icon: Brain,
      title: "Fundamentos de IA en desarrollo",
      description: "Domina cómo interactuar con la IA para generar código, refactorizar y resolver problemas complejos."
    },
    {
      icon: Zap,
      title: "Desarrollo acelerado",
      description: "Descubre técnicas avanzadas para construir aplicaciones 10x más rápido usando prompts efectivos y mejores prácticas."
    },
    {
      icon: Rocket,
      title: "Proyectos reales",
      description: "Crea una aplicación completa desde cero, integrando frontend, backend y despliegue usando Cursor AI."
    }
  ];

  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
              <span className="text-labora-red">¿Qué vas a aprender</span> en esta clase?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Una experiencia práctica donde pasarás de principiante a experto en Cursor AI, 
              construyendo proyectos reales paso a paso.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {learningPoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <div 
                  key={index} 
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-labora-neon/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-lg bg-labora-red/10 flex items-center justify-center">
                        <Icon className="h-6 w-6 text-labora-red" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold mb-2 text-labora-dark">
                        {point.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {point.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-labora-red/5 to-labora-neon/5 border border-labora-red/20">
            <h3 className="text-xl font-bold mb-4 text-labora-dark text-center">
              Al finalizar la clase podrás:
            </h3>
            <div className="grid md:grid-cols-2 gap-3">
              {[
                "Crear aplicaciones web completas con Cursor AI",
                "Optimizar tu flujo de trabajo de desarrollo",
                "Integrar IA en tus proyectos existentes",
                "Acelerar tu productividad hasta 10x",
                "Entender las mejores prácticas de prompts",
                "Desplegar proyectos usando herramientas No-Code"
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-5 h-5 rounded-full bg-labora-red/10 flex items-center justify-center">
                      <Check className="h-3 w-3 text-labora-red" />
                    </div>
                  </div>
                  <p className="text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursorAIAbout;




