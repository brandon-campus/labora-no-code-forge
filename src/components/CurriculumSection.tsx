
import React from 'react';
import { Check, Brain, Zap, Layout, Database, Rocket } from 'lucide-react';

interface ModuleProps {
  week: string;
  title: string;
  icon: React.ReactNode;
  topics: string[];
  color: string;
  delay: number;
}

const Module = ({ week, title, icon, topics, color, delay }: ModuleProps) => {
  return (
    <div 
      className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 transition-all hover:shadow-md animate-fade-in-up"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="flex items-start gap-4">
        <div className={`w-12 h-12 flex-shrink-0 rounded-full flex items-center justify-center ${color}`}>
          {icon}
        </div>
        <div>
          <p className="text-sm font-medium text-gray-500 mb-1">{week}</p>
          <h3 className="text-xl font-semibold mb-3 text-labora-dark">{title}</h3>
          <ul className="space-y-2">
            {topics.map((topic, index) => (
              <li key={index} className="flex items-start gap-2 text-gray-600">
                <Check className="h-5 w-5 text-labora-red flex-shrink-0 mt-0.5" />
                <span>{topic}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const CurriculumSection = () => {
  const modules = [
    {
      week: "Semanas 1-2",
      title: "Intro a IA + No Code",
      icon: <Brain className="h-6 w-6 text-white" />,
      topics: [
        "Fundamentos de IA para no programadores",
        "Panorama de herramientas No Code",
        "Definición y validación de tu idea de producto"
      ],
      color: "bg-labora-red",
      delay: 1
    },
    {
      week: "Semanas 3-4",
      title: "Automatizaciones con n8n",
      icon: <Zap className="h-6 w-6 text-labora-dark" />,
      topics: [
        "Construcción de flujos de trabajo",
        "Integración entre aplicaciones",
        "Automatización de procesos de negocio"
      ],
      color: "bg-labora-neon",
      delay: 2
    },
    {
      week: "Semanas 5-7",
      title: "Diseño de Apps con Lovable",
      icon: <Layout className="h-6 w-6 text-white" />,
      topics: [
        "Prototipado de interfaces con IA",
        "Desarrollo de aplicaciones web y mobile",
        "Experiencia de usuario y usabilidad"
      ],
      color: "bg-labora-red",
      delay: 3
    },
    {
      week: "Semanas 8-10",
      title: "Bases de datos con Supabase",
      icon: <Database className="h-6 w-6 text-labora-dark" />,
      topics: [
        "Modelado de datos sin código",
        "Autenticación y seguridad",
        "Consultas y funciones avanzadas"
      ],
      color: "bg-labora-neon",
      delay: 4
    },
    {
      week: "Semanas 11-12",
      title: "Deploy y lanzamiento",
      icon: <Rocket className="h-6 w-6 text-white" />,
      topics: [
        "Preparación para producción",
        "Estrategias de adquisición de usuarios",
        "Presentación final y Demo Day"
      ],
      color: "bg-labora-red",
      delay: 5
    }
  ];

  return (
    <section id="curriculum" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
            <span className="text-labora-red">Plan</span> de estudios
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Un recorrido práctico y completo para convertirte en creador de productos tecnológicos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {modules.map((module, index) => (
            <Module
              key={index}
              week={module.week}
              title={module.title}
              icon={module.icon}
              topics={module.topics}
              color={module.color}
              delay={module.delay}
            />
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-gray-600">
            Cada módulo incluye clases en vivo, recursos adicionales, acceso a una comunidad de estudiantes y soporte personalizado de entrenadores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
