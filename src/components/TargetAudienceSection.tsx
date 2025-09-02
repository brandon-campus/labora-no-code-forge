import React from 'react';
import { CheckCircle, Lightbulb, Users, Rocket, Briefcase } from 'lucide-react';

const TargetAudienceSection = () => {
  const targetAudiences = [
    {
      icon: Lightbulb,
      title: "Personas con ideas que no saben por dónde empezar"
    },
    {
      icon: Users,
      title: "Freelancers o quienes quieran crear un estudio propio"
    },
    {
      icon: Rocket,
      title: "Emprendedores que buscan innovar con IA"
    },
    {
      icon: Briefcase,
      title: "Profesionales que quieren adaptarse a nuevas habilidades del mercado"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-5 pointer-events-none"></div>
      <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/5 via-transparent to-labora-red/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left side - Visual collage */}
          <div className="relative">
            <div className="relative w-full max-w-md mx-auto">
              {/* Main container with dashed border */}
              <div className="relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm rounded-3xl p-8 border-2 border-dashed border-labora-neon/30">
                
                {/* Student portraits grid */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {/* Top left - Person with idea */}
                  <div className="bg-gradient-to-br from-labora-neon/20 to-labora-neon/10 rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-labora-neon/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Lightbulb className="h-8 w-8 text-labora-neon" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">Con ideas</p>
                  </div>
                  
                  {/* Top right - Freelancer */}
                  <div className="bg-gradient-to-br from-labora-red/20 to-labora-red/10 rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-labora-red/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Users className="h-8 w-8 text-labora-red" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">Freelancer</p>
                  </div>
                  
                  {/* Bottom left - Entrepreneur */}
                  <div className="bg-gradient-to-br from-labora-red/20 to-labora-red/10 rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-labora-red/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Rocket className="h-8 w-8 text-labora-red" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">Emprendedor</p>
                  </div>
                  
                  {/* Bottom right - Professional */}
                  <div className="bg-gradient-to-br from-labora-neon/20 to-labora-neon/10 rounded-2xl p-4 text-center">
                    <div className="w-16 h-16 bg-labora-neon/20 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Briefcase className="h-8 w-8 text-labora-neon" />
                    </div>
                    <p className="text-xs text-gray-300 font-medium">Profesional</p>
                  </div>
                </div>
                
                {/* Central star-like element */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-8 h-8 bg-labora-neon rounded-full flex items-center justify-center">
                    <CheckCircle className="h-5 w-5 text-black" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side - Benefits list */}
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                ¿Esto es para mí?
              </h2>
              <p className="text-gray-300 text-lg">
                Descubrí si este bootcamp es perfecto para tu perfil
              </p>
            </div>
            
                         <div className="space-y-6">
               {targetAudiences.map((audience, index) => {
                 const IconComponent = audience.icon;
                 return (
                   <div key={index} className="flex items-start space-x-4 group">
                     <div className="flex-shrink-0">
                       <div className="w-12 h-12 bg-gradient-to-br from-labora-neon/20 to-labora-neon/10 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                         <IconComponent className="h-6 w-6 text-labora-neon" />
                       </div>
                     </div>
                     <div className="flex-1">
                       <h3 className="text-white font-semibold text-lg">
                         {audience.title}
                       </h3>
                     </div>
                   </div>
                 );
               })}
             </div>
            
            {/* Call to action */}
            <div className="pt-6">
              <div className="bg-gradient-to-r from-labora-neon/10 to-labora-red/10 rounded-2xl p-6 border border-labora-neon/20">
                <p className="text-white font-semibold text-center mb-4">
                  ¿Te identificás con alguno de estos perfiles?
                </p>
                <div className="text-center">
                  <button 
                    onClick={() => {
                      const contactSection = document.getElementById('contact');
                      if (contactSection) {
                        contactSection.scrollIntoView({ behavior: 'smooth' });
                      }
                    }}
                    className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-8 py-3 transition-all shadow-lg shadow-labora-neon/25 transform hover:scale-105"
                  >
                    ¡Sí, quiero empezar!
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TargetAudienceSection;
