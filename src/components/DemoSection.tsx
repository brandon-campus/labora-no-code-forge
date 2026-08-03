import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  videoUrl: string;
  title: string;
  description: string;
  tags: string[];
  delay: number;
}

const ProjectCard = ({ videoUrl, title, description, tags, delay }: ProjectCardProps) => {
  return (
    <div 
      className="bg-white rounded-[20px] overflow-hidden border border-[#e8e4de] animate-fade-in-up"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="aspect-video relative bg-black">
        <iframe 
          src={videoUrl}
          className="absolute top-0 left-0 w-full h-full border-0"
          allowFullScreen 
          allowTransparency
        />
      </div>
      <div className="p-6 sm:p-[26px]">
        <h3 className="text-[1.2rem] sm:text-[1.3rem] font-black leading-[1.25] uppercase text-[#141414] mb-3">{title}</h3>
        <p className="text-[14.5px] text-[#5c5c5c] leading-[1.6] mb-5">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span key={index} className="px-3 py-1 rounded-[30px] text-[12px] font-bold border border-[#e8e4de] text-[#5c5c5c] bg-[#f5f0ec]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

const DemoSection = () => {
  const [activeProject, setActiveProject] = useState(0);

  const projects = [
    {
      videoUrl: "https://www.tella.tv/video/cm9k5bp4m00050bib2xjwddjm/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1",
      title: "Plataforma de Gestión de Internet en Servicios Rurales",
      description: "Plataforma web para gestionar clientes, enviar facturas, habilitar servicios de empresas proveedoras de Internet.",
      tags: ["Lovable", "Supabase", "Cursor AI", "Havacus AI"],
      delay: 0
    },
    {
      videoUrl: "https://www.tella.tv/video/cm9k6jqfh000c0dl52s2a6m6t/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1",
      title: "Marketplace de Arte",
      description: "Aplicación web para que artistas en México puedan vender Arte a usuarios de una manera más democratizada.",
      tags: ["Lovable", "Supabase", "Cursor AI", "Havacus AI"],
      delay: 0
    },
    {
      videoUrl: "https://www.tella.tv/video/cm9k6jqfh000c0dl52s2a6m6t/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1",
      title: "Sistema de reservas para restaurantes",
      description: "Aplicación que permite a los clientes hacer reservas y a los restaurantes gestionar mesas, horarios y personal.",
      tags: ["Supabase", "No-Code", "IA"],
      delay: 0
    }
  ];

  const handlePrev = () => {
    setActiveProject((prev) => Math.max(0, prev - 1));
  };

  const handleNext = () => {
    setActiveProject((prev) => Math.min(projects.length - 1, prev + 1));
  };

  return (
    <section id="demo" className="py-12 sm:py-16 md:py-20 bg-[#f5f0ec] text-[#141414]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        {/* Header Section */}
        <div className="mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 border-[1.5px] border-[#dcdcd6] rounded-[30px] py-[9px] px-[18px] text-[13px] font-bold text-[#141414] tracking-[0.3px]">
            <span className="w-[7px] h-[7px] bg-labora-red rounded-full"></span>
            PROYECTOS REALES
          </div>
          <h2 className="text-[2rem] sm:text-[2.1rem] md:text-5xl font-black mt-5 leading-[1.15] uppercase text-[#141414]">
            <span className="text-labora-red">Proyectos</span> que podrás crear
          </h2>
          <p className="mt-4 text-[15.5px] md:text-[16.5px] text-[#5c5c5c] leading-[1.6] max-w-3xl">
            Estos son algunos ejemplos de aplicaciones y plataformas desarrolladas por nuestros estudiantes utilizando herramientas de IA y No-Code.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto overflow-hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeProject * 100}%)` }}
          >
            {projects.map((project, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                <ProjectCard 
                  videoUrl={project.videoUrl}
                  title={project.title}
                  description={project.description}
                  tags={project.tags}
                  delay={project.delay}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Carousel controls */}
        <div className="flex items-center gap-4 mt-8 max-w-3xl mx-auto justify-center">
          <button 
            onClick={handlePrev}
            disabled={activeProject === 0}
            className="p-2 rounded-full bg-white shadow-sm border border-gray-200 disabled:opacity-30 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center justify-center gap-2.5 px-4">
            {projects.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setActiveProject(i)}
                className={cn(
                  "cursor-pointer transition-all",
                  i === activeProject 
                    ? "w-[34px] h-[6px] rounded-[4px] bg-gradient-to-r from-labora-red to-labora-neon" 
                    : "w-2 h-2 rounded-full bg-[#d0d0c8] hover:bg-[#a0a0a0]"
                )}
              ></div>
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={activeProject === projects.length - 1}
            className="p-2 rounded-full bg-white shadow-sm border border-gray-200 disabled:opacity-30 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default DemoSection;
