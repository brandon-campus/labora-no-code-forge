import React, { useState } from 'react';
import { Brain, Zap, Layout, Database, Rocket, Calendar, Clock, Video, ChevronDown, ChevronUp, Terminal, Shield, Cpu, Cloud } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

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
  date: string;
  duration: string;
  instructor: string;
  items?: number;
  technologies: string[];
}

interface ModuleProps {
  week: string;
  title: string;
  icon: React.ReactNode;
  description: string;
  difficulty: "Básico" | "Intermedio" | "Avanzado";
  progress: number;
  color: string;
  sessions: SessionProps[];
  prerequisites?: string[];
}

const Session = ({ title, date, duration, instructor, items, technologies }: SessionProps) => {
  return (
    <div className="relative">
      <div className="border-l-2 border-labora-neon/50 dark:border-labora-neon/30 pl-4 py-4 ml-4">
        <div className="absolute -left-1.5 top-6 h-4 w-4 rounded-full bg-labora-neon border-2 border-gray-900 shadow-[0_0_10px_rgba(0,255,170,0.3)]"></div>
        <div className={cn(
          "bg-gray-900/80 backdrop-blur-sm rounded-lg p-6",
          "hover:bg-gray-900/90 transition-all duration-300",
          "border border-labora-neon/10",
          "shadow-[0_0_20px_rgba(0,0,0,0.3)]",
          "group"
        )}>
          <h4 className="font-semibold text-white text-lg tracking-wide">{title}</h4>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-sm">
            <div className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-md",
              "bg-gray-800/80 border border-gray-700/50"
            )}>
              <Calendar className="h-4 w-4 text-labora-neon" />
              <span className="text-gray-200">{date}</span>
            </div>
            <div className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-md",
              "bg-gray-800/80 border border-gray-700/50"
            )}>
              <Clock className="h-4 w-4 text-labora-neon" />
              <span className="text-gray-200">{duration}</span>
            </div>
            <div className={cn(
              "flex items-center gap-2 px-3 py-1.5 rounded-md",
              "bg-gray-800/80 border border-gray-700/50"
            )}>
              <Terminal className="h-4 w-4 text-labora-neon" />
              <span className="text-gray-200">{instructor}</span>
            </div>
            {items && (
              <div className={cn(
                "flex items-center gap-2 px-3 py-1.5 rounded-md",
                "bg-gray-800/80 border border-gray-700/50"
              )}>
                <Video className="h-4 w-4 text-labora-neon" />
                <span className="text-gray-200">{items} recursos</span>
              </div>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {technologies.map((tech, index) => (
              <TechBadge key={index} name={tech} color="border-labora-neon/50" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const Module = ({ week, title, icon, description, sessions, difficulty, progress, prerequisites, color }: ModuleProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="group">
      <div className={cn(
        "bg-gray-900/80 backdrop-blur-sm rounded-xl overflow-hidden",
        "border border-gray-800/50",
        "transition-all duration-300",
        "hover:border-labora-neon/20",
        "shadow-[0_0_30px_rgba(0,0,0,0.3)]"
      )}>
        <div className="p-6">
          <div className="flex items-start justify-between">
            <div className="flex items-start gap-4">
              <div className={cn(
                "w-12 h-12 rounded-lg flex items-center justify-center",
                "bg-gradient-to-br from-gray-800 to-gray-900",
                "border border-gray-700",
                "shadow-[0_0_15px_rgba(0,0,0,0.2)]"
              )}>
                {React.cloneElement(icon as React.ReactElement, { className: "w-5 h-5 text-white" })}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-1 text-white tracking-wide text-shadow-[0_0_10px_rgba(255,255,255,0.2)]">
                  {title}
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-white font-semibold text-sm">{week}</span>
                  <span className={cn(
                    "px-2.5 py-1 rounded-full text-xs font-semibold",
                    "bg-gray-800/80 text-white border border-gray-700"
                  )}>{difficulty}</span>
                </div>
                <p className="text-white text-base leading-relaxed">{description}</p>
              </div>
            </div>
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className={cn(
                "p-2 rounded-lg transition-all duration-300",
                "hover:bg-gray-800/80",
                "border border-gray-700/50",
                "group-hover:border-labora-neon/20"
              )}
            >
              {isExpanded ? (
                <ChevronUp className="h-5 w-5 text-white group-hover:text-labora-neon" />
              ) : (
                <ChevronDown className="h-5 w-5 text-white group-hover:text-labora-neon" />
              )}
            </button>
          </div>

          <div className="mt-6">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-sm text-gray-300 font-medium">Progreso del módulo</span>
              <span className="text-sm text-labora-neon font-semibold">{progress}%</span>
            </div>
            <div className="relative h-2.5 w-full bg-gray-800/80 rounded-full overflow-hidden">
              <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat opacity-10"></div>
              <div 
                className={cn(
                  "h-full rounded-full transition-all duration-500",
                  "bg-gradient-to-r from-labora-neon via-labora-red to-labora-neon",
                  "shadow-[0_0_10px_rgba(255,59,48,0.3)]"
                )}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>

          {prerequisites && prerequisites.length > 0 && (
            <div className={cn(
              "mt-4 flex items-center gap-2 px-3 py-2 rounded-md",
              "bg-yellow-500/20 border border-yellow-500/30"
            )}>
              <Shield className="h-4 w-4 text-yellow-400" />
              <span className="text-sm text-yellow-100 font-medium">Prerrequisitos: {prerequisites.join(", ")}</span>
            </div>
          )}
        </div>
        
        {isExpanded && (
          <div className="border-t border-gray-800 p-6 space-y-4 bg-gray-900/40">
            {sessions.map((session, index) => (
              <Session key={index} {...session} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const CurriculumSection = () => {
  const modules: ModuleProps[] = [
    {
      week: "Semana 1",
      title: "Fundamentos de Desarrollo con IA y No Code",
      icon: <Rocket className="w-5 h-5" />,
      description: "Introducción al desarrollo moderno con herramientas No Code e Inteligencia Artificial",
      difficulty: "Básico",
      progress: 0,
      color: "hover:bg-green-500/10",
      sessions: [
        {
          title: "Estructura de un Proyecto de Software",
          date: "Martes, 6 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Proyectos No Code", "Planeamiento"],
          items: 4
        },
        {
          title: "Prototipo Inicial con Lovable",
          date: "Jueves, 8 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Lovable", "UX", "Prototipado"],
          items: 5
        },
        {
          title: "Pair Programming",
          date: "Viernes, 09 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Colaboración", "IA", "Iteración"],
          items: 2
        }
      ]
    },
    {
      week: "Semana 2",
      title: "De Prototipo a Plataforma y App Completa",
      icon: <Layout className="w-5 h-5" />,
      description: "Transformá ideas en productos funcionales usando herramientas impulsadas por IA",
      difficulty: "Intermedio",
      progress: 0,
      color: "hover:bg-yellow-500/10",
      sessions: [
        {
          title: "Construir Plataformas con Cursor AI",
          date: "Martes, 13 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Cursor AI", "Desarrollo Web", "IA Coding"],
          items: 4
        },
        {
          title: "Control de Flujo y Manejo de Errores",
          date: "Jueves, 15 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Lógica", "Validaciones", "Testing"],
          items: 3
        },
        {
          title: "Pair Programming",
          date: "Viernes, 16 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Debugging", "Refactorización", "Mejoras"],
          items: 2
        }
      ]
    },
    {
      week: "Semana 3",
      title: "Bases de Datos y Supabase",
      icon: <Database className="w-5 h-5" />,
      description: "Fundamentos y prácticas modernas para trabajar con datos",
      difficulty: "Intermedio",
      progress: 0,
      color: "hover:bg-blue-500/10",
      sessions: [
        {
          title: "Diseño y Arquitectura de una Base de Datos",
          date: "Martes, 20 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Bases de Datos", "Modelado", "Relaciones"],
          items: 4
        },
        {
          title: "Conexión con Supabase y Diseño de Tablas",
          date: "Jueves, 22 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Supabase", "Autenticación", "Storage"],
          items: 5
        },
        {
          title: "Pair Programming",
          date: "Viernes, 23 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Consultas SQL", "Optimización", "IA Assistant"],
          items: 2
        }
      ]
    },
    {
      week: "Semana 4",
      title: "Automatizaciones e Integraciones",
      icon: <Terminal className="w-5 h-5" />,
      description: "Creá flujos automáticos e integraciones inteligentes con herramientas IA",
      difficulty: "Avanzado",
      progress: 0,
      color: "hover:bg-purple-500/10",
      sessions: [
        {
          title: "Crear Agentes IA con N8N",
          date: "Martes, 27 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["N8N", "Automatización", "Agentes"],
          items: 4
        },
        {
          title: "Flujos de Trabajo con Make y N8N",
          date: "Jueves, 29 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Make", "N8N", "Integraciones"],
          items: 3
        },
        {
          title: "Desafío Final de Proyectos",
          date: "Viernes, 30 Mayo",
          duration: "2h",
          instructor: "Equipo Labora",
          technologies: ["Proyecto Final", "Presentación", "Feedback"],
          items: 1
        }
      ]
    }
  ];

  return (
    <section id="curriculum" className="relative py-20 bg-gray-950 overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-gray-950"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={cn(
            "inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full",
            "bg-gray-900/80 backdrop-blur-sm",
            "border border-labora-neon/20",
            "shadow-[0_0_20px_rgba(0,255,170,0.1)]"
          )}>
            <Cpu className="h-5 w-5 text-labora-neon" />
            <span className="text-gray-200 text-sm font-medium">Programa intensivo de 4 semanas</span>
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold mb-6",
            "bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent",
            "tracking-tight"
          )}>
            Plan de estudios
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Un recorrido práctico y completo para convertirte en creador de productos tecnológicos con IA y No Code.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {modules.map((module, index) => (
            <Module key={index} {...module} />
          ))}
        </div>
        
        <div className={cn(
          "mt-12 text-center px-6 py-4 rounded-lg",
          "bg-gray-900/50 backdrop-blur-sm",
          "border border-gray-800/50"
        )}>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto">
            Cada módulo incluye clases en vivo, recursos adicionales, acceso a una comunidad de estudiantes y soporte personalizado de entrenadores.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
