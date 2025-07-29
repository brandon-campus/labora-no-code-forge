import React from 'react';
import { CheckCircle, Rocket, Code, Users, Target, Zap } from 'lucide-react';

const BeneficiosPrueba = () => {
  const beneficios = [
    {
      icon: <Rocket className="h-8 w-8 text-labora-neon" />,
      title: "Crea tu primera app con IA",
      description: "Aprende a usar herramientas de IA para generar código y crear aplicaciones funcionales desde cero."
    },
    {
      icon: <Code className="h-8 w-8 text-labora-red" />,
      title: "Domina herramientas No-Code",
      description: "Descubre plataformas como Bubble, Zapier y Make para automatizar procesos sin programar."
    },
    {
      icon: <Users className="h-8 w-8 text-labora-neon" />,
      title: "Conecta con mentores expertos",
      description: "Interactúa directamente con profesionales que ya viven de proyectos con IA y No-Code."
    },
    {
      icon: <Target className="h-8 w-8 text-labora-red" />,
      title: "Define tu proyecto real",
      description: "Identifica una idea viable y aprende a estructurarla para convertirla en un negocio."
    },
    {
      icon: <Zap className="h-8 w-8 text-labora-neon" />,
      title: "Acceso a recursos exclusivos",
      description: "Obtén acceso temporal al campus virtual con templates, guías y herramientas premium."
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-labora-red" />,
      title: "Certificado de participación",
      description: "Recibe un certificado que puedes agregar a tu portfolio y LinkedIn."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ¿Qué vas a lograr en estas <span className="text-labora-neon">2 clases gratuitas</span>?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            En solo 2 sesiones intensivas, experimentarás el poder de combinar IA y No-Code para crear proyectos reales.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {beneficios.map((beneficio, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100"
            >
              <div className="mb-4">
                {beneficio.icon}
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {beneficio.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {beneficio.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-labora-neon to-labora-red p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              🎯 Resultado garantizado
            </h3>
            <p className="text-lg opacity-90">
              Al finalizar las 2 clases tendrás una aplicación funcional creada con IA y No-Code, 
              lista para mostrar en tu portfolio o continuar desarrollando.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosPrueba; 