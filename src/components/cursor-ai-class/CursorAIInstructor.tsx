
import React from 'react';
import { Award, Users, Code, Star } from 'lucide-react';

const CursorAIInstructor = () => {
  const credentials = [
    { icon: Users, text: "+500 estudiantes formados" },
    { icon: Code, text: "Experto en IA y desarrollo" },
    { icon: Award, text: "Instructor certificado" },
    { icon: Star, text: "5 años de experiencia" }
  ];

  return (
    <section id="instructor" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
              Conoce a tu <span className="text-labora-red">instructor</span>
            </h2>
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
            <div className="md:w-1/3 flex justify-center">
              <div className="relative">
                <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-labora-neon shadow-xl">
                  <img 
                    src="/lovable-uploads/portada.png"
                    alt="Instructor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-2 -right-2 w-16 h-16 bg-labora-red rounded-full flex items-center justify-center shadow-lg">
                  <Code className="h-8 w-8 text-white" />
                </div>
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-4 text-labora-dark">
                Experto en Cursor AI y Desarrollo con IA
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Con años de experiencia en desarrollo de software y especialización en herramientas de IA, 
                ha ayudado a cientos de desarrolladores a transformar su forma de trabajar. 
                Su enfoque práctico y orientado a resultados te permitirá dominar Cursor AI desde el primer día.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                {credentials.map((credential, index) => {
                  const Icon = credential.icon;
                  return (
                    <div key={index} className="flex flex-col items-center md:items-start gap-2 p-3 bg-gray-50 rounded-lg">
                      <Icon className="h-5 w-5 text-labora-red" />
                      <span className="text-sm text-gray-700 font-medium text-center md:text-left">
                        {credential.text}
                      </span>
                    </div>
                  );
                })}
              </div>

              <div className="p-4 bg-gradient-to-r from-labora-red/5 to-labora-neon/5 rounded-lg border border-labora-red/20">
                <p className="text-gray-700 font-medium italic">
                  "Mi misión es ayudarte a dominar las herramientas que están definiendo el futuro del desarrollo. 
                  En esta clase, no solo aprenderás Cursor AI, sino que construirás algo real que puedes usar desde el primer día."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursorAIInstructor;




