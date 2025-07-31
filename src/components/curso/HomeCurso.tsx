import React, { useState } from 'react';

// Interface para los módulos de la BD
interface ModuloBD {
  id: string;
  orden: number;
  titulo: string;
  tipo: string;
  descripcion?: string;
  seccion?: string;
}

const HomeCurso = ({ 
  nombre, 
  camino, 
  progreso, 
  curso, 
  onIrLecciones,
  lecciones = [] // Recibir lecciones desde la BD
}: {
  nombre: string;
  camino: string;
  progreso: number;
  curso: { titulo: string };
  onIrLecciones: () => void;
  lecciones?: ModuloBD[];
}) => {
  const [hoveredModulo, setHoveredModulo] = useState<number | null>(null);

  // Función para determinar si un módulo es accesible (gratuito)
  const esModuloGratuito = (index: number) => {
    return index < 1; // Solo el primer módulo es gratuito
  };

  // Función para obtener icono basado en el tipo o título
  const obtenerIcono = (modulo: ModuloBD) => {
    const titulo = modulo.titulo.toLowerCase();
    if (titulo.includes('app') || titulo.includes('aplicación')) return '🤖';
    if (titulo.includes('agente') || titulo.includes('bot')) return '⚡';
    if (titulo.includes('automatización') || titulo.includes('proceso')) return '🔄';
    if (titulo.includes('chatbot') || titulo.includes('chat')) return '💬';
    if (titulo.includes('datos') || titulo.includes('análisis')) return '📊';
    if (titulo.includes('contenido') || titulo.includes('generación')) return '✍️';
    if (titulo.includes('api') || titulo.includes('integración')) return '🔗';
    if (titulo.includes('proyecto') || titulo.includes('final')) return '';
    return '📚'; // Icono por defecto
  };

  // Función para obtener duración estimada
  const obtenerDuracion = (modulo: ModuloBD) => {
    const titulo = modulo.titulo.toLowerCase();
    if (titulo.includes('app') || titulo.includes('agente')) return '2-3 horas';
    if (titulo.includes('automatización') || titulo.includes('datos')) return '4 horas';
    if (titulo.includes('chatbot') || titulo.includes('contenido')) return '3 horas';
    if (titulo.includes('api') || titulo.includes('integración')) return '4 horas';
    if (titulo.includes('proyecto') || titulo.includes('final')) return '6 horas';
    return '3 horas';
  };

  const handleModuloClick = (modulo: ModuloBD, index: number) => {
    if (esModuloGratuito(index)) {
      onIrLecciones();
    } else {
      // Solo mostrar overlay informativo, no redirigir
      // El usuario debe ir a la sección motivacional para convertirse
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto mt-8 sm:mt-10 px-4 sm:px-6">
      {/* Header Section */}
      <section className="mb-8">
        <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
          ¡Hola, <span className="text-labora-neon">{nombre}</span>!
        </h1>
        <p className="text-labora-neon font-semibold text-sm sm:text-base">
          Tu camino es: {camino === 'proyecto' ? 'Desarrollar mi proyecto' : 'Trabajar en Proyectos Para cliente'}
        </p>
      </section>
      
      {/* Sección del curso actual - Compacta */}
      <section className="mb-8">
        <div className="bg-gradient-to-br from-[#101A2C] to-[#1a2332] rounded-xl shadow-lg p-4 sm:p-6 border border-gray-700/30">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h3 className="text-lg sm:text-xl font-bold text-labora-neon mb-2">
                {curso.titulo || 'Curso On Demand de IA y No Code'}
              </h3>
              <p className="text-xs text-gray-400 mb-2">Acceso gratuito a 1 módulo</p>
              <div className="flex items-center gap-4">
                <div className="flex-1">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-xs text-gray-300">Progreso en módulos gratuitos</span>
                    <span className="text-xs text-gray-200 font-semibold">{Math.round(progreso)}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                    <div 
                      className="bg-gradient-to-r from-labora-neon to-labora-neon/80 h-2 rounded-full transition-all duration-700 ease-out shadow-neon-glow" 
                      style={{ width: `${progreso}%` }} 
                    />
                  </div>
                  <p className="text-xs text-gray-400 mt-1">
                    {Math.round(progreso) === 0 && "Comienza con el primer módulo"}
                    {Math.round(progreso) > 0 && Math.round(progreso) < 100 && "¡Sigue así! Completa los módulos gratuitos"}
                    {Math.round(progreso) === 100 && "¡Excelente! Has completado los módulos gratuitos"}
                  </p>
                </div>
                <button
                  className="bg-gradient-to-r from-labora-neon to-labora-neon/90 text-black font-bold px-4 py-2 rounded-lg shadow hover:from-labora-neon/90 hover:to-labora-neon transition-all duration-300 shadow-neon-glow hover:shadow-neon-glow/80 text-sm"
                  onClick={onIrLecciones}
                >
                  Continuar
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sección: Tu Ruta Profesional */}
      <section className="mb-10">
        <div className="mb-6">
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-2">
            Tu Ruta Profesional
          </h2>
          <p className="text-gray-300 text-sm sm:text-base">
            Descubre tu camino hacia convertirte en un AI Builder profesional
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
          {lecciones.map((modulo, index) => {
            const esGratuito = esModuloGratuito(index);
            const icono = obtenerIcono(modulo);
            const duracion = obtenerDuracion(modulo);
            
            return (
              <button
                key={modulo.id}
                onClick={() => handleModuloClick(modulo, index)}
                onMouseEnter={() => setHoveredModulo(index)}
                onMouseLeave={() => setHoveredModulo(null)}
                className={`group relative bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm border rounded-xl p-4 sm:p-5 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 text-left min-h-[200px] sm:min-h-[220px] ${
                  esGratuito 
                    ? 'border-gray-700/50 hover:border-labora-neon/50 hover:shadow-neon-glow hover:scale-105 focus:ring-labora-neon/50' 
                    : 'border-gray-600/30 hover:border-gray-500/50 focus:ring-gray-500/50 cursor-pointer'
                }`}
                aria-label={`${modulo.titulo}: ${modulo.descripcion || ''}. ${esGratuito ? 'Accesible' : 'Requiere bootcamp completo'}`}
              >
                {/* Indicador de estado */}
                <div className="absolute top-3 right-3">
                  <div className={`w-3 h-3 rounded-full ${
                    esGratuito 
                      ? 'bg-labora-neon animate-pulse' 
                      : 'bg-gray-500'
                  }`} />
                </div>
                
                <div className="flex items-center justify-between mb-3">
                  <span className="text-2xl sm:text-3xl">{icono}</span>
                  <div className="flex items-center space-x-2">
                    <div className={`w-2 h-2 rounded-full animate-pulse ${
                      esGratuito ? 'bg-labora-neon' : 'bg-gray-500'
                    }`}></div>
                    <span className="text-xs text-gray-400 font-medium">{duracion}</span>
                  </div>
                </div>
                
                <h3 className={`font-semibold mb-2 transition-colors text-sm sm:text-base ${
                  esGratuito 
                    ? 'text-white group-hover:text-labora-neon' 
                    : 'text-gray-400'
                }`}>
                  {modulo.titulo}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-2 leading-relaxed ${
                  esGratuito ? 'text-gray-400' : 'text-gray-500'
                }`}>
                  {modulo.descripcion || 'Descripción del módulo'}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className={`text-xs font-medium ${
                    esGratuito ? 'text-labora-neon' : 'text-gray-500'
                  }`}>
                    Módulo {modulo.orden}
                  </span>
                  <div className="flex items-center space-x-1">
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      esGratuito ? 'bg-labora-neon' : 'bg-gray-500'
                    }`}></div>
                    <span className={`text-xs font-medium ${
                      esGratuito ? 'text-gray-500' : 'text-gray-600'
                    }`}>
                      {esGratuito ? 'Disponible' : 'Premium'}
                    </span>
                  </div>
                </div>
                
                {/* Efecto de hover */}
                <div className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none ${
                  esGratuito 
                    ? 'bg-gradient-to-br from-labora-neon/5 to-transparent' 
                    : 'bg-gradient-to-br from-gray-500/5 to-transparent'
                }`} />
                
                {/* Overlay para módulos premium */}
                {!esGratuito && (
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm rounded-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="bg-labora-red text-white px-3 py-1 rounded-lg text-xs font-medium">
                      Requiere Bootcamp Completo
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>
      </section>

      {/* Sección motivacional mejorada - Punto de conversión principal */}
      <section className="mb-8">
        <div className="bg-gradient-to-r from-labora-neon/10 via-labora-red/5 to-labora-neon/10 border border-labora-neon/20 rounded-2xl p-6 sm:p-8 hover:border-labora-neon/30 transition-all duration-300">
          <div className="text-center">
            <h3 className="text-lg sm:text-xl font-bold text-white mb-3">
              🚀 ¿Listo para transformar tu carrera?
            </h3>
            <p className="text-gray-300 mb-6 text-sm sm:text-base leading-relaxed">
              Al completar el bootcamp completo, tendrás las habilidades para crear soluciones de IA sin código, 
              automatizar procesos empresariales y generar ingresos como AI Builder profesional.
            </p>
            
            {/* Beneficios destacados */}
            <div className="flex flex-wrap justify-center gap-4 sm:gap-6 text-xs sm:text-sm text-gray-400 mb-6">
              <span className="flex items-center bg-gray-800/50 px-3 py-2 rounded-lg">
                <span className="w-2 h-2 bg-labora-neon rounded-full mr-2 animate-pulse"></span>
                Certificación oficial
              </span>
              <span className="flex items-center bg-gray-800/50 px-3 py-2 rounded-lg">
                <span className="w-2 h-2 bg-labora-neon rounded-full mr-2 animate-pulse"></span>
                Acceso de por vida
              </span>
              <span className="flex items-center bg-gray-800/50 px-3 py-2 rounded-lg">
                <span className="w-2 h-2 bg-labora-neon rounded-full mr-2 animate-pulse"></span>
                Soporte personalizado
              </span>
            </div>

            {/* CTA Principal */}
            <button
              onClick={() => window.open('/bootcamp/quiero-crear-con-ia', '_blank')}
              className="bg-gradient-to-r from-labora-red to-labora-red/80 hover:from-labora-red/90 hover:to-labora-red/70 text-white font-bold py-3 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-labora-red/30 mb-4"
            >
              <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
                <span className="text-base sm:text-lg">Conviértete en un AI Builder en 4 semanas</span>
                <span className="text-sm bg-white/20 px-3 py-1 rounded-full">
                  Próxima cohorte #13
                </span>
              </div>
            </button>

            {/* Texto adicional motivacional */}
            <p className="text-gray-400 text-xs sm:text-sm">
              Únete a cientos de profesionales que ya transformaron su carrera con nuestro bootcamp
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomeCurso;