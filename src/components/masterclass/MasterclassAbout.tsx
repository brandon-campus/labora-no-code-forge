
import React from 'react';
import { Check } from 'lucide-react';

const MasterclassAbout = () => {
  return (
    <section id="about" className="relative py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center text-labora-dark">
            <span className="text-labora-red">¿Qué vas a aprender</span> en esta masterclass?
          </h2>
          
          <div className="space-y-6">
            {[
              "Cómo crear una aplicación web moderna sin escribir código",
              "Integrar ChatGPT y otras IAs en tu aplicación",
              "Desplegar tu aplicación para que cualquiera pueda usarla",
              "Las mejores herramientas No-Code del momento"
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4 p-4 rounded-lg bg-gray-50">
                <div className="flex-shrink-0">
                  <div className="w-6 h-6 rounded-full bg-labora-red/10 flex items-center justify-center">
                    <Check className="h-4 w-4 text-labora-red" />
                  </div>
                </div>
                <p className="text-gray-700">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassAbout;
