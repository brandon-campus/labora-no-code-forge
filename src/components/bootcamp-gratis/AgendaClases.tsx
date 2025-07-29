import React from 'react';
import { Calendar, Clock, Play, CheckCircle, ArrowRight } from 'lucide-react';

const AgendaClases = () => {
  const clases = [
    {
      numero: "01",
      titulo: "Fundamentos de IA y No-Code",
      duracion: "2 horas",
      fecha: "Lunes 19:00hs",
      contenido: [
        "Introducción al ecosistema de IA generativa",
        "Herramientas No-Code más demandadas del mercado",
        "Casos de éxito reales de emprendedores",
        "Configuración de tu entorno de trabajo",
        "Primer proyecto: Crear una landing page con IA"
      ],
      resultado: "Tendrás tu primera página web creada con IA"
    },
    {
      numero: "02", 
      titulo: "Creando tu primera aplicación",
      duracion: "2 horas",
      fecha: "Miércoles 19:00hs",
      contenido: [
        "Integración de IA con herramientas No-Code",
        "Automatización de procesos con Zapier/Make",
        "Creación de bases de datos sin código",
        "Desarrollo de funcionalidades avanzadas",
        "Deploy y lanzamiento de tu aplicación"
      ],
      resultado: "Aplicación funcional lista para usar"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Agenda de las <span className="text-labora-neon">2 clases gratuitas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Cada clase es práctica e intensiva. Aprenderás haciendo y tendrás resultados tangibles.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {clases.map((clase, index) => (
            <div 
              key={index}
              className="bg-gradient-to-r from-gray-50 to-white border-2 border-labora-neon/20 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-labora-neon rounded-full flex items-center justify-center text-black font-bold text-xl">
                    {clase.numero}
                  </div>
                </div>
                
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-4">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {clase.titulo}
                    </h3>
                    <div className="flex items-center gap-2 text-labora-red">
                      <Clock className="h-4 w-4" />
                      <span className="font-semibold">{clase.duracion}</span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 mb-6 text-gray-600">
                    <Calendar className="h-4 w-4" />
                    <span>{clase.fecha}</span>
                  </div>
                  
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <Play className="h-4 w-4 text-labora-neon" />
                      Contenido de la clase:
                    </h4>
                    <ul className="space-y-2">
                      {clase.contenido.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start gap-3">
                          <CheckCircle className="h-5 w-5 text-labora-neon mt-0.5 flex-shrink-0" />
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="bg-labora-neon/10 border border-labora-neon/20 rounded-lg p-4">
                    <div className="flex items-center gap-2">
                      <ArrowRight className="h-5 w-5 text-labora-neon" />
                      <span className="font-semibold text-gray-900">
                        Resultado al finalizar:
                      </span>
                    </div>
                    <p className="text-gray-700 mt-1 ml-7">
                      {clase.resultado}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-labora-red to-labora-neon p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              ⚡ Clases 100% en vivo y prácticas
            </h3>
            <p className="text-lg opacity-90 mb-4">
              No son grabaciones. Interactúa directamente con mentores expertos y resuelve dudas en tiempo real.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <span className="bg-white/20 px-3 py-1 rounded-full">Máximo 15 estudiantes</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Sesiones de Q&A incluidas</span>
              <span className="bg-white/20 px-3 py-1 rounded-full">Material de apoyo gratuito</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaClases; 