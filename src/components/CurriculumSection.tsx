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
    title: "FASE 1: DE CERO A APP",
    description: "Fundamentos esenciales para crear tu primera aplicación funcional",
    week: "Semana 1 (07 al 11 de octubre)",
    difficulty: "Básico",
    progress: 0,
    sessions: [
      {
        title: "Cursor AI – Tu copiloto 2025",
        description: "Introducción a Cursor AI y cómo aprovechar la IA para desarrollo",
        date: "Martes, 07 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Cursor AI", "IA", "Desarrollo"]
      },
      {
        title: "GitHub para no técnicos",
        description: "Control de versiones y colaboración en proyectos",
        date: "Jueves, 09 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["GitHub", "Colaboración", "Control de versiones"]
      },
      {
        title: "Pair Programming: Creación de primera app",
        description: "Sesión práctica para crear tu primera aplicación completa",
        date: "Viernes, 10 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 5,
        tags: ["Pair Programming", "Práctica", "Primera App"]
      }
    ]
  },
  {
    title: "FASE 2: DISEÑO DE BASES DE DATOS",
    description: "Construye la arquitectura robusta de tu aplicación",
    week: "Semana 2 (14 al 18 de octubre)",
    difficulty: "Intermedio",
    progress: 0,
    sessions: [
      {
        title: "Lógica y diseño de bases de datos",
        description: "Fundamentos de modelado de datos y relaciones",
        date: "Martes, 14 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Bases de Datos", "Modelado", "Relaciones"]
      },
      {
        title: "Supabase desde cero",
        description: "Implementación y configuración de Supabase",
        date: "Jueves, 16 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 5,
        tags: ["Supabase", "Backend", "Autenticación"]
      },
      {
        title: "Pair Programming: Dashboards y visualización de datos",
        description: "Creación de dashboards interactivos con datos reales",
        date: "Viernes, 17 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["Dashboards", "Visualización", "Pair Programming"]
      }
    ]
  },
  {
    title: "FASE 3: IA Y AGENTES",
    description: "Automatización e inteligencia artificial para tu aplicación",
    week: "Semana 3 (21 al 25 de octubre)",
    difficulty: "Intermedio",
    progress: 0,
    sessions: [
      {
        title: "Automatización con n8n y agentes (Intro)",
        description: "Introducción a la automatización de procesos con n8n",
        date: "Martes, 21 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["n8n", "Automatización", "Agentes"]
      },
      {
        title: "Creación de agentes con IA avanzado",
        description: "Desarrollo de agentes inteligentes para automatización",
        date: "Jueves, 23 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 5,
        tags: ["IA", "Agentes", "Automatización"]
      },
      {
        title: "Pair Programming: Adaptación de agentes a nichos y mercados",
        description: "Personalización de agentes para diferentes industrias",
        date: "Viernes, 24 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["Pair Programming", "Agentes", "Mercados"]
      }
    ]
  },
  {
    title: "FASE 4: USUARIOS, INTEGRACIONES Y DEPLOY",
    description: "Gestión avanzada de usuarios y lanzamiento de tu aplicación",
    week: "Semana 4 (28 de octubre al 1 de noviembre)",
    difficulty: "Avanzado",
    progress: 0,
    sessions: [
      {
        title: "Flujo de usuarios y roles avanzados",
        description: "Sistema de autenticación y gestión de permisos",
        date: "Martes, 28 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Usuarios", "Roles", "Autenticación"]
      },
      {
        title: "Integraciones esenciales y deploy",
        description: "Conexión con servicios externos y despliegue a producción",
        date: "Jueves, 30 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 5,
        tags: ["Integraciones", "Deploy", "Producción"]
      },
      {
        title: "Pair Programming: Analítica de producto",
        description: "Implementación de métricas y análisis de uso",
        date: "Viernes, 31 de octubre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["Analítica", "Métricas", "Pair Programming"]
      }
    ]
  },
  {
    title: "FASE 5: LANZAMIENTO Y CRECIMIENTO",
    description: "Estrategias para lanzar y hacer crecer tu aplicación",
    week: "Semana 5 (4 al 8 de noviembre)",
    difficulty: "Avanzado",
    progress: 0,
    sessions: [
      {
        title: "Lanzamiento estratégico y captación de tráfico",
        description: "Planificación del lanzamiento y estrategias de marketing",
        date: "Martes, 04 de noviembre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Lanzamiento", "Marketing", "Tráfico"]
      },
      {
        title: "Contenido orgánico y posicionamiento",
        description: "SEO, contenido y posicionamiento en buscadores",
        date: "Jueves, 06 de noviembre",
        duration: "2h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["SEO", "Contenido", "Posicionamiento"]
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
    <section className="py-16 md:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/5 via-transparent to-labora-red/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center gap-2 mb-4 md:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-labora-neon/10 backdrop-blur-sm rounded-full shadow-lg border border-labora-neon/20">
              <Zap className="h-4 w-4 sm:h-5 sm:w-5 text-labora-neon" />
              <span className="text-labora-neon text-sm font-bold uppercase tracking-wider">Programa intensivo de 4 semanas</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 md:mb-6">
              PLAN DE ESTUDIOS
            </h2>
            
            <p className="text-gray-300 text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              Un recorrido práctico y completo para convertirte en creador de productos tecnológicos con IA y No Code.
            </p>
          </div>

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

          <div className="mt-8 md:mt-12 text-center text-gray-400 text-sm md:text-base max-w-3xl mx-auto">
            Cada módulo incluye clases en vivo, recursos adicionales, acceso a una comunidad de estudiantes y soporte personalizado de entrenadores.
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
