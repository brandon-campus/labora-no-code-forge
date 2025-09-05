import React from 'react';
import { CheckCircle, Lightbulb, Users, Rocket, Briefcase, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const TargetAudienceSection = () => {
  const targetAudiences = [
    {
      icon: Lightbulb,
      title: "Personas con ideas que no saben por dónde empezar",
      description: "Tienes una idea de proyecto brillante pero no sabes cómo hacerla realidad",
      color: "from-labora-neon to-green-400"
    },
    {
      icon: Users,
      title: "Si deseas trabajar con clientes creando proyectos para ellos",
      description: "Buscas expandir tus servicios y crear productos escalables",
      color: "from-labora-red to-red-500"
    },
    {
      icon: Rocket,
      title: "Emprendedores que quieren implementar soluciones con IA",
      description: "Quieres estar a la vanguardia tecnológica en tu sector",
      color: "from-labora-neon to-labora-red"
    },
    {
      icon: Briefcase,
      title: "Profesionales que quieren adaptarse al futuro",
      description: "Necesitas nuevas habilidades para mantenerte competitivo",
      color: "from-labora-red to-labora-neon"
    }
  ];

  return (
    <section className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-labora-neon/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-24 h-24 bg-gradient-to-br from-labora-red/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-gradient-to-br from-purple-400/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-10 w-28 h-28 bg-gradient-to-br from-blue-400/20 to-transparent rounded-full blur-2xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
            <Star className="h-4 w-4 text-labora-neon fill-current" />
            <span className="text-gray-700 text-sm font-semibold">Para Ti</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900">
            ¿Esto es para <span className="text-labora-neon">mí</span>?
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Descubre si este bootcamp es perfecto para tu perfil y objetivos profesionales
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Hero Image */}
          <div className="relative order-2 lg:order-1">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main image container */}
              <div className="relative bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/20">
                <img 
                  src="/lovable-uploads/portada.png" 
                  alt="Bootcamp de IA y No Code - Labora AI" 
                  className="w-full h-full object-cover rounded-3xl"
                />
                
                {/* Optional overlay for better text readability if needed */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent rounded-3xl"></div>
              </div>
            </div>
          </div>
          
          {/* Right side - Benefits list */}
          <div className="space-y-8 order-1 lg:order-2">
            <div className="space-y-6">
              {targetAudiences.map((audience, index) => {
                const IconComponent = audience.icon;
                return (
                  <div key={index} className="group bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/30 hover:shadow-xl hover:bg-white/80 transition-all duration-300">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className={`w-14 h-14 bg-gradient-to-br ${audience.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <IconComponent className="h-7 w-7 text-white" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-gray-900 font-bold text-lg mb-2 group-hover:text-gray-800 transition-colors">
                          {audience.title}
                        </h3>
                        <p className="text-gray-600 text-sm leading-relaxed">
                          {audience.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
