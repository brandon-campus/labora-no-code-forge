import React, { useState } from 'react';
import { Zap, Calendar, ChevronDown, ChevronUp, Loader2 } from 'lucide-react';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';
import { cn } from "@/lib/utils";

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

const fallbackModules: ModuleData[] = [
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
  const { data: cohorte, isLoading } = useActiveCohorte();

  const currentModules = cohorte?.temario || fallbackModules;

  const handleToggleModule = (index: number) => {
    setExpandedModules(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section>
      {/* Curriculum Head */}
      <div className="pt-14 pb-10 px-4 sm:px-6 bg-gradient-to-br from-labora-neon via-[#5c6b30] to-[#0a0a0a]">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-black leading-[1.15] text-white">
            Conviertete en un AI Builder en <span className="text-labora-neon bg-transparent" style={{ WebkitTextFillColor: '#aaff00' }}>7</span> semanas
          </h2>
        </div>
      </div>

      {/* Curriculum Body */}
      <div className="px-4 sm:px-6 pb-16 pt-8 bg-[#0a0a0a]">
        <div className="container mx-auto max-w-4xl relative">
          
          {/* Clase de Bienvenida (Conservada del original, adaptada al estilo oscuro) */}
          <div className="mb-8 relative z-10">
            <div className="bg-[#12151a] rounded-2xl p-6 border border-labora-neon/30 shadow-lg">
              <div className="flex items-center gap-3 mb-2">
                <Calendar className="h-5 w-5 text-labora-neon" />
                <h3 className="text-xl font-bold text-white">Clase de Bienvenida</h3>
              </div>
              <p className="text-[#c9c9c9] text-base">
                Sesión introductoria donde conocerás al equipo, la metodología y te prepararás para comenzar el programa.
              </p>
            </div>
          </div>

          <div className="border-2 border-labora-neon rounded-[26px] p-6 sm:p-8 shadow-[0_0_40px_rgba(170,255,0,0.08)] bg-[#0a0a0a]">
            {isLoading ? (
               <div className="flex justify-center py-10"><Loader2 className="animate-spin text-labora-neon w-8 h-8" /></div>
            ) : (
               currentModules.map((module: any, index: number) => {
                 const weekNum = index + 1;
                 const isLast = index === currentModules.length - 1;
                 
                 return (
                   <React.Fragment key={index}>
                     <div 
                       className="grid grid-cols-[56px_1px_1fr] sm:grid-cols-[72px_1px_1fr] gap-4 sm:gap-6 py-5 sm:py-6 first:pt-0 last:pb-0 cursor-pointer group"
                       onClick={() => handleToggleModule(index)}
                     >
                       {/* Week Number */}
                       <div className="flex flex-col items-start">
                         <span className="text-[11px] font-extrabold text-labora-red tracking-[0.5px] -mb-1">SEMANA</span>
                         <span className="text-[3.2rem] sm:text-[4rem] font-black leading-none bg-gradient-to-br from-labora-red to-labora-neon bg-clip-text text-transparent group-hover:scale-105 transition-transform origin-left">
                           {weekNum}
                         </span>
                       </div>
                       
                       {/* Divider */}
                       <div className="bg-white/15 w-[1px] h-full"></div>
                       
                       {/* Content */}
                       <div className="flex flex-col justify-center">
                         <div className="flex justify-between items-start">
                           <div className="text-[1.1rem] sm:text-[1.3rem] font-extrabold text-labora-red leading-[1.2] mb-1.5 uppercase pr-2">
                             {module.title.replace(/FASE \d+: /i, '')}
                           </div>
                           <div className="text-labora-neon flex-shrink-0 mt-0.5 opacity-50 group-hover:opacity-100 transition-opacity">
                             {expandedModules.includes(index) ? <ChevronUp className="w-5 h-5" /> : <ChevronDown className="w-5 h-5" />}
                           </div>
                         </div>
                         <div className="text-[14px] sm:text-[15px] text-[#d8d8d8] leading-[1.5]">
                           {module.description}
                         </div>
                         
                         {/* Expanded Sessions Details (Added functionality over prototype) */}
                         {expandedModules.includes(index) && module.sessions && (
                           <div className="mt-4 pt-4 border-t border-white/10 space-y-3 animate-fade-in">
                             {module.sessions.map((session: any, sIdx: number) => (
                               <div key={sIdx} className="bg-white/5 rounded-xl p-4 border border-white/5">
                                 <div className="text-white font-bold text-sm sm:text-base mb-1">{session.title}</div>
                                 <div className="text-[#a0a0a0] text-xs sm:text-sm mb-3">{session.description}</div>
                                 <div className="flex flex-wrap gap-2">
                                   {session.tags.map((tag: string, tIdx: number) => (
                                     <span key={tIdx} className="text-[10px] px-2 py-0.5 rounded-full border border-labora-neon/30 text-labora-neon bg-labora-neon/5 font-medium tracking-wide uppercase">
                                       {tag}
                                     </span>
                                   ))}
                                 </div>
                               </div>
                             ))}
                           </div>
                         )}
                       </div>
                     </div>
                     {!isLast && <hr className="border-t border-white/10 m-0" />}
                   </React.Fragment>
                 )
               })
            )}
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default CurriculumSection;
