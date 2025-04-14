
import React from 'react';
import { Users, BrainCircuit, Rocket } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
            <span className="text-labora-red">Acerca</span> del programa
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Labora es el semillero de proyectos tecnológicos más innovador de Latinoamérica, donde aprenderás a crear productos reales sin necesidad de saber programar.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg hover:border-labora-red/20 animate-fade-in-up">
            <div className="w-14 h-14 bg-labora-red/10 rounded-full flex items-center justify-center mb-4">
              <Users className="h-7 w-7 text-labora-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-labora-dark">Para quién es</h3>
            <p className="text-gray-600">
              Dirigido a emprendedores, profesionales y creativos con ideas de negocio o proyectos tecnológicos, sin conocimientos técnicos previos.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg hover:border-labora-neon/20 animate-fade-in-up" style={{ animationDelay: '100ms' }}>
            <div className="w-14 h-14 bg-labora-neon/10 rounded-full flex items-center justify-center mb-4">
              <BrainCircuit className="h-7 w-7 text-labora-neon" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-labora-dark">Aprendizaje práctico</h3>
            <p className="text-gray-600">
              Aprenderás a utilizar IA y herramientas No-Code como Lovable, Cursor AI, Supabase y n8n mientras construyes tu producto paso a paso.
            </p>
          </div>
          
          <div className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all hover:shadow-lg hover:border-labora-red/20 animate-fade-in-up" style={{ animationDelay: '200ms' }}>
            <div className="w-14 h-14 bg-labora-red/10 rounded-full flex items-center justify-center mb-4">
              <Rocket className="h-7 w-7 text-labora-red" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-labora-dark">Resultados reales</h3>
            <p className="text-gray-600">
              Al finalizar, tendrás un producto tecnológico funcional y listo para lanzar al mercado, además de las habilidades para crear muchos más.
            </p>
          </div>
        </div>
        
        <div className="mt-14 text-center">
          <p className="text-xl font-semibold text-labora-dark mb-4 animate-fade-in">
            <span className="text-labora-red">No necesitas saber programar</span> para crear tecnología
          </p>
          <p className="text-gray-600 max-w-3xl mx-auto">
            Con las herramientas adecuadas y la metodología correcta, cualquier persona puede desarrollar productos tecnológicos sin escribir código.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
