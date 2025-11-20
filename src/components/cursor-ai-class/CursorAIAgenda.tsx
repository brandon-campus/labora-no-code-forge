
import React from 'react';
import { Calendar, Clock, Video, Code2, Rocket, MessageCircle } from 'lucide-react';

const CursorAIAgenda = () => {
  const agendaItems = [
    {
      time: "00:00 - 15:00",
      icon: Code2,
      title: "Introducción a Cursor AI",
      description: "¿Qué es Cursor AI? Instalación, configuración inicial y primeros pasos. Configuración del entorno de trabajo."
    },
    {
      time: "15:00 - 45:00",
      icon: Rocket,
      title: "Desarrollo práctico en vivo",
      description: "Construcción de una aplicación completa desde cero. Frontend, backend y integraciones usando Cursor AI."
    },
    {
      time: "45:00 - 90:00",
      icon: Video,
      title: "Técnicas avanzadas",
      description: "Prompts efectivos, refactorización inteligente, debugging asistido y optimización de código con IA."
    },
    {
      time: "90:00 - 120:00",
      icon: MessageCircle,
      title: "Q&A y casos de uso",
      description: "Sesión interactiva de preguntas y respuestas. Casos de uso reales y mejores prácticas para tu trabajo diario."
    }
  ];

  return (
    <section id="agenda" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-labora-red/5">
              <Calendar className="h-5 w-5 text-labora-red" />
              <span className="text-gray-600 text-sm font-medium">Agenda de la clase</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
              Una clase <span className="text-labora-red">práctica y completa</span>
            </h2>
            
            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <Clock className="h-4 w-4 text-labora-red" />
                <span className="text-gray-700 font-medium">2 horas en vivo</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm">
                <Video className="h-4 w-4 text-labora-red" />
                <span className="text-gray-700 font-medium">Grabación disponible</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-6">
            {agendaItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className="relative p-6 rounded-xl bg-white shadow-lg border border-gray-100 hover:border-labora-neon/30 transition-all duration-300"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/4 flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-labora-red/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="h-6 w-6 text-labora-red" />
                      </div>
                      <div>
                        <div className="font-bold text-lg text-labora-dark">{item.time}</div>
                      </div>
                    </div>
                    
                    <div className="md:w-3/4">
                      <h3 className="text-xl font-bold mb-2 text-labora-dark">
                        {item.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                  
                  {index < agendaItems.length - 1 && (
                    <div className="absolute left-8 md:left-12 top-full w-0.5 h-6 bg-gradient-to-b from-labora-red/30 to-transparent"></div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 p-6 rounded-xl bg-gradient-to-r from-labora-red/5 to-labora-neon/5 border border-labora-red/20 text-center">
            <p className="text-gray-700 font-medium">
              <span className="text-labora-red font-bold">Bonus:</span> Todos los participantes recibirán acceso a la grabación, 
              material complementario y certificado de participación.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CursorAIAgenda;




