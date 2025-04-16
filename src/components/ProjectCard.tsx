import React, { useState } from 'react';
import { Play } from 'lucide-react';
import { cn } from "@/lib/utils";
import VideoModal from './VideoModal';

const ProjectCard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="space-y-8">
      {/* Title Section */}
      <div className="text-center">
        <h2 className="text-3xl font-bold mb-2">
          <span className="text-labora-red">PROYECTOS</span>
          <span className="text-white"> QUE PODRÁS CREAR</span>
        </h2>
        <p className="text-gray-400">
          Estos son algunos ejemplos de aplicaciones y plataformas desarrolladas por nuestros estudiantes utilizando herramientas de IA y No-Code.
        </p>
      </div>

      {/* Project Card */}
      <div className={cn(
        "bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden",
        "border border-gray-800/50",
        "shadow-[0_0_30px_rgba(0,0,0,0.3)]"
      )}>
        {/* Clickable Image Area */}
        <div 
          className="relative aspect-video cursor-pointer group"
          onClick={() => setIsModalOpen(true)}
          role="button"
          tabIndex={0}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              setIsModalOpen(true);
            }
          }}
        >
          <img
            src="/dashboard-laptop.jpg"
            alt="Plataforma de Gestión de Proyectos"
            className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:brightness-75"
          />
          
          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className={cn(
              "p-4 rounded-full",
              "bg-labora-neon/20 backdrop-blur-sm",
              "border-2 border-labora-neon",
              "shadow-[0_0_20px_rgba(0,255,170,0.3)]",
              "transform scale-90 group-hover:scale-100",
              "transition-all duration-300"
            )}>
              <Play className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>

        {/* Project Info */}
        <div className="p-6">
          <h3 className="text-xl font-bold text-white mb-2">
            PLATAFORMA DE GESTIÓN DE PROYECTOS
          </h3>
          <p className="text-gray-300 mb-4">
            Aplicación web para gestionar equipos, tareas y recursos en proyectos. Incluye dashboards, asignación de tareas y reportes.
          </p>
          <div className="flex flex-wrap gap-2">
            <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700">
              Lovable
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700">
              Supabase
            </span>
            <span className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700">
              IA
            </span>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      <VideoModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </div>
  );
};

export default ProjectCard; 