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
      className={`bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white/30 hover:shadow-xl hover:bg-white/90 transition-all duration-300 animate-fade-in-up group ${featured ? 'md:col-span-2' : ''}`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="aspect-video relative">
        <iframe 
          src={videoUrl}
          className="absolute top-0 left-0 w-full h-full border-0 rounded-t-2xl"
          allowFullScreen 
          allowTransparency
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-gray-800 transition-colors">{title}</h3>
        <p className="text-gray-600 mb-4 leading-relaxed">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
              index === 0 
                ? 'bg-labora-neon text-black hover:bg-labora-neon/80' 
                : index === 1
                ? 'bg-labora-red/20 text-labora-red border border-labora-red/30 hover:bg-labora-red/30'
                : 'bg-gray-200/80 text-gray-700 hover:bg-gray-300/80'
            }`}>
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
    <section id="demo" className="py-16 md:py-20 relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-labora-red/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-1/4 w-40 h-40 bg-gradient-to-br from-labora-neon/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
            <span className="w-2 h-2 bg-labora-red rounded-full animate-pulse"></span>
            <span className="text-gray-700 text-sm font-bold uppercase tracking-wider">Proyectos Reales</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-gray-900 leading-tight">
            <span className="text-labora-red">Proyectos</span> que podrás crear
          </h2>
          <p className="text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Estos son algunos ejemplos de aplicaciones y plataformas desarrolladas por nuestros estudiantes utilizando herramientas de IA y No-Code.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
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
