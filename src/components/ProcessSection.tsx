
import React from 'react';
import { Check, FileSearch, Layout, Lightbulb, Rocket, Megaphone } from 'lucide-react';

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  delay: number;
}

const ProcessStep = ({ icon, title, description, number, delay }: ProcessStepProps) => {
  return (
    <div 
      className="flex items-start gap-6 animate-fade-in-up" 
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="flex-shrink-0">
        <div className="w-16 h-16 bg-gradient-to-br from-labora-blue to-labora-purple rounded-full flex items-center justify-center text-white font-bold text-xl relative">
          {number}
          <div className="absolute -right-1 -bottom-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      icon: <Lightbulb className="h-4 w-4 text-labora-orange" />,
      title: "Validación de la idea",
      description: "Analizamos tu idea de negocio o proyecto, identificamos su potencial y definimos objetivos claros.",
      number: 1,
      delay: 1
    },
    {
      icon: <Layout className="h-4 w-4 text-labora-orange" />,
      title: "Diseño",
      description: "Creamos la arquitectura y prototipo de tu aplicación, definiendo funcionalidades y experiencia de usuario.",
      number: 2,
      delay: 2
    },
    {
      icon: <FileSearch className="h-4 w-4 text-labora-orange" />,
      title: "Desarrollo",
      description: "Implementamos tu producto utilizando herramientas de IA y No-Code como Lovable, Cursor AI y Supabase.",
      number: 3,
      delay: 3
    },
    {
      icon: <Rocket className="h-4 w-4 text-labora-orange" />,
      title: "Lanzamiento",
      description: "Preparamos tu producto para salir al mercado, con todas las configuraciones necesarias para su funcionamiento.",
      number: 4,
      delay: 4
    },
    {
      icon: <Megaphone className="h-4 w-4 text-labora-orange" />,
      title: "Marketing",
      description: "Estrategias para promocionar tu producto y conseguir tus primeros usuarios o clientes.",
      number: 5,
      delay: 5
    }
  ];

  return (
    <section id="proceso" className="process-gradient py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Un proceso <span className="gradient-text">paso a paso</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Te acompañamos desde la idea hasta el lanzamiento de tu producto, siguiendo una metodología clara y efectiva.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-12 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <ProcessStep 
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              number={step.number}
              delay={step.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
