import React from 'react';
import { Button } from "@/components/ui/button";

interface ProjectCardProps {
  videoUrl: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  delay: number;
}

const ProjectCard = ({ videoUrl, title, description, tags, featured = false, delay }: ProjectCardProps) => {
  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden shadow-xl animate-fade-in-up ${featured ? 'md:col-span-2' : ''}`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="aspect-video relative">
        <iframe 
          src={videoUrl}
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen 
          allowTransparency
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-labora-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className={`px-3 py-1 rounded-full text-sm ${index === 0 ? 'bg-labora-neon text-labora-dark' : 'bg-gray-100 text-gray-700'}`}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const DemoSection = () => {
  const projects = [
    {
      videoUrl: "https://www.tella.tv/video/cm9k5bp4m00050bib2xjwddjm/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1",
      title: "Plataforma de Gestión de Internet en Servicios Rurales",
      description: "Plataforma web para gestionar clientes, enviar facturas, habiltar servicios de empresas proveedoras de Internet.",
      tags: ["Lovable", "Supabase", "Cursor AI", "Havacus AI"],
      featured: true,
      delay: 1
    },
    {
      videoUrl: "https://www.tella.tv/video/cm9k6jqfh000c0dl52s2a6m6t/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1",
      title: "Marketplace de Arte",
      description: "Aplicación web para que artistas en México puedan vender Arte a usuarios de una manera má democratizada.",
      tags: ["Lovable", "Supabase", "Cursor AI", "Havacus AI"],
      delay: 2
    },
    {
      videoUrl: "https://www.tella.tv/video/cm9k5bp4m00050bib2xjwddjm/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1",
      title: "Sistema de reservas para restaurantes",
      description: "Aplicación que permite a los clientes hacer reservas y a los restaurantes gestionar mesas, horarios y personal.",
      tags: ["Supabase", "No-Code", "IA"],
      delay: 3
    }
  ];

  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
            <span className="text-labora-red">Proyectos</span> que podrás crear
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Estos son algunos ejemplos de aplicaciones y plataformas desarrolladas por nuestros estudiantes utilizando herramientas de IA y No-Code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard 
              key={index}
              videoUrl={project.videoUrl}
              title={project.title}
              description={project.description}
              tags={project.tags}
              featured={project.featured}
              delay={project.delay}
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};

export default DemoSection;
