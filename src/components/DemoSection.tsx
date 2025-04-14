
import React from 'react';
import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tags: string[];
  featured?: boolean;
  delay: number;
}

const ProjectCard = ({ image, title, description, tags, featured = false, delay }: ProjectCardProps) => {
  return (
    <div 
      className={`bg-white rounded-2xl overflow-hidden shadow-xl animate-fade-in-up ${featured ? 'md:col-span-2' : ''}`}
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="aspect-video relative group cursor-pointer">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 group-hover:bg-black/50 transition-colors">
          <div className="w-16 h-16 bg-labora-red/20 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-white group-hover:scale-110 transition-transform">
            <Play className="h-6 w-6 text-white fill-white" />
          </div>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-labora-dark">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span key={index} className={`px-3 py-1 rounded-full text-sm ${index === 0 ? 'bg-labora-neon text-labora-dark' : 'bg-gray-100 text-gray-700'}`}>
              {tag}
            </span>
          ))}
        </div>
        <Button variant="outline" className="w-full flex items-center justify-center gap-2 border-labora-red text-labora-red hover:bg-labora-red/5">
          Ver proyecto <ExternalLink className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};

const DemoSection = () => {
  const projects = [
    {
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2426&q=80",
      title: "Plataforma de gestión de proyectos",
      description: "Aplicación web para gestionar equipos, tareas y recursos en proyectos. Incluye dashboards, asignación de tareas y reportes.",
      tags: ["Lovable", "Supabase", "No-Code", "IA"],
      featured: true,
      delay: 1
    },
    {
      image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2436&q=80",
      title: "Marketplace de productos locales",
      description: "Plataforma que conecta productores locales con consumidores, facilitando el comercio directo y sostenible.",
      tags: ["Lovable", "n8n", "No-Code"],
      delay: 2
    },
    {
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2370&q=80",
      title: "Sistema de reservas para restaurantes",
      description: "Aplicación que permite a los clientes hacer reservas y a los restaurantes gestionar mesas, horarios y personal.",
      tags: ["Supabase", "No-Code", "IA"],
      delay: 3
    },
    {
      image: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2374&q=80",
      title: "Automatización de procesos internos",
      description: "Herramienta para automatizar flujos de trabajo, aprobaciones y notificaciones en empresas de cualquier tamaño.",
      tags: ["n8n", "Supabase", "No-Code"],
      delay: 4
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
              image={project.image}
              title={project.title}
              description={project.description}
              tags={project.tags}
              featured={project.featured}
              delay={project.delay}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <a href="#contacto">
            <Button className="bg-labora-red hover:bg-labora-red/90 px-8 py-6 text-base">
              ¡Quiero crear mi propia aplicación!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
