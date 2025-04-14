
import React from 'react';
import { Brain, Code, Lightbulb, Rocket, Users, Zap } from 'lucide-react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitCard = ({ icon, title, description, delay }: BenefitCardProps) => {
  return (
    <div 
      className="p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow animate-fade-in-up testimonial-card"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="w-12 h-12 flex items-center justify-center bg-gradient-to-br from-labora-purple to-labora-blue rounded-lg mb-4 text-white">
        {icon}
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const BenefitsSection = () => {
  const benefits = [
    {
      icon: <Code className="h-6 w-6" />,
      title: "Crea sin programar",
      description: "Desarrolla aplicaciones completas sin escribir código, usando herramientas de IA y No-Code.",
      delay: 1
    },
    {
      icon: <Brain className="h-6 w-6" />,
      title: "Aprende con IA",
      description: "Utiliza Lovable, Cursor AI y otras herramientas de IA para crear productos tecnológicos.",
      delay: 2
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Acompañamiento personalizado",
      description: "Entrenadores especializados te guían durante todo el proceso de creación.",
      delay: 3
    },
    {
      icon: <Rocket className="h-6 w-6" />,
      title: "Lanza tu producto",
      description: "Finaliza el bootcamp con un producto real listo para lanzar al mercado.",
      delay: 4
    },
    {
      icon: <Lightbulb className="h-6 w-6" />,
      title: "Materializa tu idea",
      description: "Convierte tu idea de negocio en una solución tecnológica concreta y funcional.",
      delay: 5
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Metodología práctica",
      description: "Aprendizaje basado en proyectos reales que resuelven problemas concretos.",
      delay: 6
    }
  ];

  return (
    <section id="beneficios" className="benefits-gradient py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Beneficios del <span className="gradient-text">Bootcamp IA & No-Code</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Aprende mientras creas. No necesitas conocimientos técnicos previos para desarrollar productos de calidad.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitCard 
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={benefit.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
