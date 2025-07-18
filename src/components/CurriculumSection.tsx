import React, { useState } from 'react';
import { Brain, Zap, Layout, Database, Rocket, Calendar, Clock, Video, ChevronDown, ChevronUp, Terminal, Shield, Cpu, Cloud } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import Module from './Module';

interface TechBadgeProps {
  name: string;
  color: string;
}

const TechBadge = ({ name, color }: TechBadgeProps) => (
  <Badge variant="outline" className={cn("border-2 text-white bg-gray-900/60", color)}>
    {name}
  </Badge>
);

interface DifficultyBadgeProps {
  level: "Básico" | "Intermedio" | "Avanzado";
}

const DifficultyBadge = ({ level }: DifficultyBadgeProps) => {
  const colors = {
    Básico: "text-green-400 border-green-400",
    Intermedio: "text-yellow-400 border-yellow-400",
    Avanzado: "text-red-400 border-red-400"
  };

  return (
    <Badge variant="outline" className={cn("border-2", colors[level])}>
      {level}
    </Badge>
  );
};

interface SessionProps {
  title: string;
  description: string;
  date: string;
  duration: string;
  instructor: string;
  resources: number;
  tags: string[];
}

interface ModuleData {
  title: string;
  description: string;
  week: string;
  difficulty: string;
  progress: number;
  sessions: SessionProps[];
}

const modules: ModuleData[] = [
  {
    title: "FUNDAMENTOS DE DESARROLLO CON IA Y NO CODE",
    description: "Introducción al desarrollo moderno con herramientas No Code e Inteligencia Artificial",
    week: "Semana 1",
    difficulty: "Básico",
    progress: 0,
    sessions: [
      {
        title: "ESTRUCTURA DE UN PROYECTO DE SOFTWARE",
        description: "",
        date: "Martes, 5 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Proyectos No-Code", "Planeamiento"]
      },
      {
        title: "PROTOTIPO INICIAL CON LOVABLE",
        description: "",
        date: "Jueves, 7 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["Lovable", "UX", "Prototipado"]
      },
      {
        title: "PAIR PROGRAMMING",
        description: "",
        date: "Viernes, 8 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["Colaboración", "IA", "Iteración"]
      }
    ]
  },
  {
    title: "DE PROTOTIPO A PLATAFORMA Y APP COMPLETA",
    description: "Transformá ideas en productos funcionales usando herramientas impulsadas por IA",
    week: "Semana 2",
    difficulty: "Intermedio",
    progress: 0,
    sessions: [
      {
        title: "CONSTRUIR PLATAFORMAS CON CURSOR AI",
        description: "",
        date: "Martes, 12 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Cursor AI", "Desarrollo Web", "IA Coding"]
      },
      {
        title: "CONTROL DE FLUJO Y MANEJO DE ERRORES",
        description: "",
        date: "Jueves, 14 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["Lógica", "Validaciones", "Testing"]
      },
      {
        title: "PAIR PROGRAMMING",
        description: "",
        date: "Viernes, 15 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 2,
        tags: ["Debugging", "Refactorización", "Mejoras"]
      }
    ]
  },
  {
    title: "BASES DE DATOS Y SUPABASE",
    description: "Fundamentos y prácticas modernas para trabajar con datos",
    week: "Semana 3",
    difficulty: "Intermedio",
    progress: 0,
    sessions: [
      {
        title: "DISEÑO Y ARQUITECTURA DE UNA BASE DE DATOS",
        description: "",
        date: "Martes, 19 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Bases de Datos", "Modelado", "Relaciones"]
      },
      {
        title: "CONEXIÓN CON SUPABASE Y DISEÑO DE TABLAS",
        description: "",
        date: "Jueves, 21 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 5,
        tags: ["Supabase", "Autenticación", "Storage"]
      },
      {
        title: "PAIR PROGRAMMING",
        description: "",
        date: "Viernes, 22 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 2,
        tags: ["Consultas SQL", "Optimización", "IA Assistant"]
      }
    ]
  },
  {
    title: "AUTOMATIZACIONES E INTEGRACIONES",
    description: "Creá flujos automáticos e integraciones inteligentes con herramientas IA",
    week: "Semana 4",
    difficulty: "Avanzado",
    progress: 0,
    sessions: [
      {
        title: "CREAR AGENTES IA CON N8N",
        description: "",
        date: "Martes, 26 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["N8N", "Automatización", "Agentes"]
      },
      {
        title: "FLUJOS DE TRABAJO CON MAKE Y N8N",
        description: "",
        date: "Jueves, 28 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["Make", "N8N", "Integraciones"]
      },
      {
        title: "DESAFÍO FINAL DE PROYECTOS",
        description: "",
        date: "Viernes, 29 Agosto",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 1,
        tags: ["Proyecto Final", "Presentación", "Feedback"]
      }
    ]
  }
];

const CurriculumSection = () => {
  const [expandedModules, setExpandedModules] = useState<number[]>([]);

  const handleToggleModule = (index: number) => {
    setExpandedModules(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="py-16 bg-[#0A0A0A]">
      <div className="container max-w-[1000px] mx-auto px-4">
        <div className="flex justify-center mb-4">
          <Badge 
            variant="outline" 
            className="bg-[#1A1F2C] text-white border-[#2A2A2A] px-4 py-2 text-sm font-medium"
          >
            <Zap className="w-4 h-4 mr-2 text-labora-neon" />
            Programa intensivo de 4 semanas
          </Badge>
        </div>
        
        <h2 className="text-5xl font-bold text-white text-center mb-4">
          PLAN DE ESTUDIOS
        </h2>
        
        <p className="text-gray-400 text-center text-lg mb-12 max-w-3xl mx-auto">
          Un recorrido práctico y completo para convertirte en creador de productos tecnológicos con IA y No Code.
        </p>

        <div className="space-y-4">
          {modules.map((module, index) => (
            <Module
              key={index}
              title={module.title}
              description={module.description}
              week={module.week}
              difficulty={module.difficulty}
              progress={module.progress}
              sessions={module.sessions}
              isExpanded={expandedModules.includes(index)}
              onToggle={() => handleToggleModule(index)}
            />
          ))}
        </div>

        <div className="mt-8 text-center text-gray-400 text-sm max-w-2xl mx-auto">
          Cada módulo incluye clases en vivo, recursos adicionales, acceso a una comunidad de estudiantes y soporte personalizado de entrenadores.
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
