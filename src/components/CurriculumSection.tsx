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
    week: "Semana 1",
    difficulty: "Básico",
    progress: 0,
    sessions: [
      {
        title: "De Cero a App",
        description: "Introducción al desarrollo y creación de la primera app",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["App", "Introducción", "Desarrollo"]
      },
      {
        title: "Ecosistema de Claude: Claude Coworks y Skills",
        description: "Aprovechando Claude para potenciar tu productividad y desarrollo",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["Claude", "IA", "Productividad"]
      }
    ]
  },
  {
    title: "ENTORNO DE DESARROLLO",
    description: "Configura tu entorno de trabajo y herramientas como un profesional",
    week: "Semana 2",
    difficulty: "Básico",
    progress: 0,
    sessions: [
      {
        title: "Google Antigravity/Cursor - Copiloto",
        description: "Domina las herramientas de IA para asistir en tu código",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Cursor", "Antigravity", "IA"]
      },
      {
        title: "Github para No Técnicos",
        description: "Control de versiones y colaboración en proyectos",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 3,
        tags: ["GitHub", "Colaboración", "Control de versiones"]
      }
    ]
  },
  {
    title: "BASES DE DATOS - SUPABASE",
    description: "Construye la arquitectura robusta de tu aplicación",
    week: "Semana 3",
    difficulty: "Intermedio",
    progress: 0,
    sessions: [
      {
        title: "Bases de datos: Supabase",
        description: "Implementación y configuración de Supabase desde cero",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 5,
        tags: ["Supabase", "Backend", "Bases de Datos"]
      },
      {
        title: "Dashboard y Visualización de Datos",
        description: "Creación de paneles administrativos y gráficos",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Dashboard", "Visualización", "UI"]
      }
    ]
  },
  {
    title: "ESCALABILIDAD Y AGENTES",
    description: "Seguridad, control de accesos y primeras automatizaciones",
    week: "Semana 4",
    difficulty: "Intermedio",
    progress: 0,
    sessions: [
      {
        title: "Políticas RLS, Tipos de Usuarios",
        description: "Seguridad a nivel de filas y gestión avanzada de roles",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Seguridad", "RLS", "Usuarios"]
      },
      {
        title: "Automatizaciones",
        description: "Introducción a automatizaciones para procesos recurrentes",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Automatización", "Procesos"]
      }
    ]
  },
  {
    title: "AGENTES N8N",
    description: "Automatización avanzada e inteligencia artificial integrada",
    week: "Semana 5",
    difficulty: "Avanzado",
    progress: 0,
    sessions: [
      {
        title: "Creación de Agentes IA",
        description: "Desarrollo de agentes inteligentes con n8n",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 5,
        tags: ["n8n", "Agentes", "IA"]
      },
      {
        title: "Adaptación de Agentes RAG",
        description: "Sistemas RAG (Retrieval-Augmented Generation) para tus agentes",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 5,
        tags: ["RAG", "IA", "n8n"]
      }
    ]
  },
  {
    title: "INTEGRACIONES Y DEPLOY",
    description: "Manejo de errores, integraciones clave y lanzamiento",
    week: "Semana 6",
    difficulty: "Avanzado",
    progress: 0,
    sessions: [
      {
        title: "Control de flujo, Manejo de errores, Testing",
        description: "Asegurando la calidad y estabilidad de tu aplicación",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Testing", "Errores", "Calidad"]
      },
      {
        title: "Integraciones: ADS, Analytics, Microsoft Clarity",
        description: "Conecta tu app con herramientas de análisis y marketing",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 4,
        tags: ["Analytics", "ADS", "Clarity"]
      }
    ]
  },
  {
    title: "LANZAMIENTO DE PRODUCTO",
    description: "Presentación final y estrategias de crecimiento",
    week: "Semana 7",
    difficulty: "Avanzado",
    progress: 0,
    sessions: [
      {
        title: "Adquisición de usuarios y clientes + Modelos de Negocio VibeCoding",
        description: "Estrategias de monetización y crecimiento para tu producto",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 5,
        tags: ["Negocios", "Growth", "VibeCoding"]
      },
      {
        title: "Presentación de Proyectos",
        description: "Demo Day: Muestra tu aplicación terminada",
        date: "Sábado",
        duration: "4h",
        instructor: "Equipo Labora",
        resources: 2,
        tags: ["Demo Day", "Proyectos", "Presentación"]
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
              <span className="text-labora-neon text-sm font-bold uppercase tracking-wider">El bootcamp más completo de LATAM</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 md:mb-6">
              PLAN DE ESTUDIOS
            </h2>

            <p className="text-gray-300 text-center text-lg md:text-xl mb-12 max-w-3xl mx-auto leading-relaxed">
              En 7 semanas desde cero al lanzamiento de tu producto.
            </p>
          </div>

          {/* Clase de Bienvenida */}
          <div className="mb-8 max-w-4xl mx-auto">
            <div className="bg-gradient-to-r from-labora-neon/20 to-labora-red/20 backdrop-blur-sm rounded-2xl p-6 border border-labora-neon/30">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-labora-neon" />
                <h3 className="text-xl font-bold text-white">Clase de Bienvenida</h3>
              </div>
              <p className="text-gray-300 text-base">
                <span className="font-semibold text-labora-neon">Sábado, 06 de junio</span> - Sesión introductoria donde conocerás al equipo, la metodología y te prepararás para comenzar el programa.
              </p>
            </div>
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
