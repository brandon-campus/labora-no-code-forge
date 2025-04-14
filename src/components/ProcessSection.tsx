
import React from 'react';
import { Lightbulb, Layout, FileSearch, Rocket, Megaphone, Users } from 'lucide-react';

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
        <div className="w-16 h-16 bg-labora-neon rounded-full flex items-center justify-center text-labora-dark font-bold text-xl relative">
          {number}
          <div className="absolute -right-1 -bottom-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
            {icon}
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-xl font-semibold mb-2 text-labora-dark">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const steps = [
    {
      icon: <Lightbulb className="h-4 w-4 text-labora-red" />,
      title: "Idea y validación",
      description: "Definirás tu idea de producto y la validarás con técnicas de Design Thinking y métodos ágiles, identificando su potencial de mercado.",
      number: 1,
      delay: 1
    },
    {
      icon: <Layout className="h-4 w-4 text-labora-red" />,
      title: "Arquitectura",
      description: "Diseñarás la estructura de tu producto, sus funcionalidades y experiencia de usuario, creando prototipos y mapas de navegación.",
      number: 2,
      delay: 2
    },
    {
      icon: <FileSearch className="h-4 w-4 text-labora-red" />,
      title: "Desarrollo No-Code",
      description: "Implementarás tu producto utilizando herramientas de IA y No-Code como Lovable, Cursor AI y Supabase, con apoyo constante de entrenadores.",
      number: 3,
      delay: 3
    },
    {
      icon: <Rocket className="h-4 w-4 text-labora-red" />,
      title: "Lanzamiento",
      description: "Prepararás tu producto para salir al mercado, con todas las configuraciones necesarias para su funcionamiento óptimo.",
      number: 4,
      delay: 4
    },
    {
      icon: <Megaphone className="h-4 w-4 text-labora-red" />,
      title: "Adquisición de usuarios",
      description: "Aprenderás estrategias para promocionar tu producto y conseguir tus primeros usuarios o clientes, aplicando técnicas de growth hacking.",
      number: 5,
      delay: 5
    },
    {
      icon: <Users className="h-4 w-4 text-labora-red" />,
      title: "Acompañamiento",
      description: "Durante todo el proceso contarás con el apoyo de entrenadores especializados que te guiarán y ayudarán a superar los desafíos.",
      number: 6,
      delay: 6
    }
  ];

  return (
    <section id="proceso" className="process-gradient py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
            <span className="text-labora-red">Metodología</span> del programa
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
