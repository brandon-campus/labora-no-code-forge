import React from 'react';
import { ChevronDown, ChevronUp, Calendar, Clock, Book, Users, Rocket } from 'lucide-react';
import { Badge } from "@/components/ui/badge";
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

interface ModuleProps {
  title: string;
  description: string;
  week: string;
  difficulty: string;
  progress: number;
  sessions: SessionProps[];
  isExpanded: boolean;
  onToggle: () => void;
}

const Module: React.FC<ModuleProps> = ({
  title,
  description,
  week,
  difficulty,
  progress,
  sessions,
  isExpanded,
  onToggle
}) => {
  return (
    <div className={cn(
      "bg-[#0F1117] rounded-xl p-6 border border-[#1A1F2C]",
      "transition-all duration-200"
    )}>
      <div className="flex flex-col">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-3">
              <div className="flex items-center gap-2">
                <Rocket className="w-5 h-5 text-labora-neon" />
                <Badge variant="outline" className="bg-[#1A1F2C] text-white border-[#2A2A2A] text-xs font-medium px-2 py-0.5">
                  {week}
                </Badge>
              </div>
              <Badge variant="outline" className="bg-[#1A1F2C] text-white border-[#2A2A2A] text-xs font-medium px-2 py-0.5">
                {difficulty}
              </Badge>
            </div>
            <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">{description}</p>
            <div className="h-1.5 bg-[#1A1F2C] rounded-full mt-4 overflow-hidden">
              <div 
                className="h-full bg-labora-neon rounded-full transition-all duration-500" 
                style={{ width: `${progress}%` }}
              />
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Progreso del módulo {progress}%
            </div>
          </div>
          <button
            onClick={onToggle}
            className="p-2 hover:bg-[#1A1F2C] rounded-lg transition-colors ml-4"
          >
            {isExpanded ? (
              <ChevronUp className="h-5 w-5 text-white" />
            ) : (
              <ChevronDown className="h-5 w-5 text-white" />
            )}
          </button>
        </div>

        {isExpanded && (
          <div className="relative mt-6 pl-4">
            <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-labora-neon/20" />
            <div className="space-y-4">
              {sessions.map((session, index) => (
                <div 
                  key={index} 
                  className={cn(
                    "relative",
                    "before:absolute before:left-[-1.125rem] before:top-1/2 before:-translate-y-1/2",
                    "before:w-2 before:h-2 before:rounded-full before:bg-labora-neon"
                  )}
                >
                  <div className="bg-[#1A1F2C]/50 rounded-lg p-4">
                    <h4 className="text-white font-semibold text-base mb-4">{session.title}</h4>
                    <div className="flex flex-wrap gap-3">
                      <div className="flex items-center gap-2 bg-[#0F1117] rounded-md px-3 py-2">
                        <Calendar className="h-4 w-4 text-labora-neon" />
                        <span className="text-sm text-white">{session.date}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#0F1117] rounded-md px-3 py-2">
                        <Clock className="h-4 w-4 text-labora-neon" />
                        <span className="text-sm text-white">{session.duration}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#0F1117] rounded-md px-3 py-2">
                        <Users className="h-4 w-4 text-labora-neon" />
                        <span className="text-sm text-white">{session.instructor}</span>
                      </div>
                      <div className="flex items-center gap-2 bg-[#0F1117] rounded-md px-3 py-2">
                        <Book className="h-4 w-4 text-labora-neon" />
                        <span className="text-sm text-white">{session.resources} recursos</span>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {session.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex}
                          variant="outline" 
                          className="bg-[#0F1117] text-labora-neon border-labora-neon/20 text-xs px-3 py-1"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Module; 