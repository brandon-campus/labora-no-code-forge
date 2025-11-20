
import React from 'react';
import { TrendingUp, Clock, DollarSign, Target, Users, Award } from 'lucide-react';

const CursorAIBenefits = () => {
  const benefits = [
    {
      icon: TrendingUp,
      title: "10x más productividad",
      description: "Desarrolla aplicaciones completas en horas en lugar de semanas, multiplicando tu productividad."
    },
    {
      icon: Clock,
      title: "Ahorra tiempo valioso",
      description: "Reduce el tiempo de desarrollo en tareas repetitivas y enfócate en la lógica de negocio."
    },
    {
      icon: DollarSign,
      title: "Mayor valor en el mercado",
      description: "Las habilidades en IA aplicada al desarrollo son altamente demandadas y bien pagadas."
    },
    {
      icon: Target,
      title: "Proyectos reales",
      description: "Aprende construyendo aplicaciones reales que puedes usar en tu portfolio o trabajo."
    },
    {
      icon: Users,
      title: "Comunidad de apoyo",
      description: "Acceso a una comunidad de desarrolladores que están transformando su forma de trabajar."
    },
    {
      icon: Award,
      title: "Certificado de participación",
      description: "Obtén un certificado que valida tu conocimiento en Cursor AI y desarrollo con IA."
    }
  ];

  return (
    <section id="beneficios" className="relative py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
              ¿Por qué aprender <span className="text-labora-red">Cursor AI</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              El futuro del desarrollo de software está aquí. Únete a los miles de desarrolladores 
              que ya están transformando su forma de trabajar.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div 
                  key={index}
                  className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-100 hover:border-labora-neon/50 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-labora-red/10 to-labora-neon/10 flex items-center justify-center mb-4">
                    <Icon className="h-6 w-6 text-labora-red" />
                  </div>
                  <h3 className="text-xl font-bold mb-2 text-labora-dark">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-labora-red via-labora-red/90 to-labora-red/80 text-white text-center">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              El momento de aprender es ahora
            </h3>
            <p className="text-lg mb-6 text-white/90 max-w-2xl mx-auto">
              Cursor AI está cambiando la industria del desarrollo. No te quedes atrás. 
              Aprende las habilidades que te darán una ventaja competitiva real.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                <span className="font-semibold">+50,000 desarrolladores</span> ya usan Cursor AI
              </div>
              <div className="px-4 py-2 bg-white/10 rounded-full backdrop-blur-sm">
                <span className="font-semibold">Empresas líderes</span> lo están adoptando
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursorAIBenefits;




