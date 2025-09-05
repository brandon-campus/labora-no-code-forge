import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const ToolsLogosBar = () => {
  const tools = [
    {
      name: "Cursor AI",
      logo: "🤖",
      description: "IA para desarrollo"
    },
    {
      name: "Claude",
      logo: "🧠",
      description: "Asistente IA"
    },
    {
      name: "GitHub Copilot",
      logo: "🚀",
      description: "Copiloto de código"
    },
    {
      name: "N8N",
      logo: "⚡",
      description: "Automatización"
    },
    {
      name: "Supabase",
      logo: "🗄️",
      description: "Base de datos"
    },
    {
      name: "Vercel",
      logo: "🌐",
      description: "Deploy"
    },
    {
      name: "Airtable",
      logo: "📊",
      description: "Base de datos"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, [isPaused, tools.length]);

  // Pause on hover
  const handleMouseEnter = () => setIsPaused(true);
  const handleMouseLeave = () => setIsPaused(false);

  // Navigation functions
  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + tools.length) % tools.length);
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % tools.length);
  };

  return (
    <div className="w-full">
      {/* Título */}
      <div className="text-center mb-8">
        <h3 className="text-xl font-semibold text-gray-300 mb-2">
          Herramientas que dominarás
        </h3>
        <p className="text-gray-400 text-sm">
          Tecnologías de vanguardia para crear sin límites
        </p>
      </div>
      
      {/* Barra de logos */}
      <div 
        className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 overflow-hidden"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative">
          {/* Flechas de navegación - Mobile First */}
          <button
            onClick={goToPrevious}
            className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-gray-800/80 hover:bg-gray-700/90 backdrop-blur-sm rounded-full border border-gray-600/50 hover:border-labora-neon/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-labora-neon/20 group"
            aria-label="Herramienta anterior"
          >
            <ChevronLeft className="h-5 w-5 md:h-6 md:w-6 text-gray-300 group-hover:text-labora-neon transition-colors duration-300" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 md:right-4 top-1/2 -translate-y-1/2 z-30 w-10 h-10 md:w-12 md:h-12 bg-gray-800/80 hover:bg-gray-700/90 backdrop-blur-sm rounded-full border border-gray-600/50 hover:border-labora-neon/50 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-labora-neon/20 group"
            aria-label="Siguiente herramienta"
          >
            <ChevronRight className="h-5 w-5 md:h-6 md:w-6 text-gray-300 group-hover:text-labora-neon transition-colors duration-300" />
          </button>

          {/* Carrusel automático */}
          <div className="flex items-center justify-center transition-transform duration-1000 ease-in-out px-12 md:px-16">
            <div className="flex items-center space-x-8 md:space-x-12">
              {tools.map((tool, index) => {
                const isActive = index === currentIndex;
                const isNext = index === (currentIndex + 1) % tools.length;
                const isPrev = index === (currentIndex - 1 + tools.length) % tools.length;
                
                let opacity = 'opacity-30';
                let scale = 'scale-90';
                let zIndex = 'z-0';
                
                if (isActive) {
                  opacity = 'opacity-100';
                  scale = 'scale-110';
                  zIndex = 'z-20';
                } else if (isNext || isPrev) {
                  opacity = 'opacity-70';
                  scale = 'scale-100';
                  zIndex = 'z-10';
                }
                
                return (
                  <div 
                    key={index} 
                    className={`flex flex-col items-center group cursor-pointer transition-all duration-500 ${opacity} ${scale} ${zIndex}`}
                  >
                    {/* Logo/Icono */}
                    <div className={`w-12 h-12 bg-gradient-to-br from-gray-700/50 to-gray-800/50 rounded-xl flex items-center justify-center mb-2 border transition-all duration-500 ${
                      isActive 
                        ? 'border-labora-neon/50 shadow-lg shadow-labora-neon/20' 
                        : 'border-gray-600/30 group-hover:border-labora-neon/30'
                    }`}>
                      <span className="text-2xl">{tool.logo}</span>
                    </div>
                    
                    {/* Nombre */}
                    <span className={`text-xs font-medium text-center transition-colors duration-500 ${
                      isActive 
                        ? 'text-labora-neon font-bold' 
                        : 'text-gray-300 group-hover:text-labora-neon'
                    }`}>
                      {tool.name}
                    </span>
                    
                    {/* Descripción */}
                    <span className={`text-xs text-center mt-1 transition-colors duration-500 ${
                      isActive 
                        ? 'text-gray-200' 
                        : 'text-gray-500'
                    }`}>
                      {tool.description}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          {/* Indicadores de progreso mejorados */}
          <div className="flex justify-center mt-8 space-x-3">
            {tools.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`relative transition-all duration-300 hover:scale-110 ${
                  index === currentIndex 
                    ? 'w-8 h-3 bg-gradient-to-r from-labora-neon to-green-400 rounded-full shadow-lg shadow-labora-neon/30' 
                    : 'w-3 h-3 bg-gray-600 rounded-full hover:bg-gray-400 hover:shadow-md'
                }`}
                aria-label={`Ir a herramienta ${index + 1}: ${tools[index].name}`}
              >
                {index === currentIndex && (
                  <div className="absolute inset-0 bg-gradient-to-r from-labora-neon to-green-400 rounded-full animate-pulse opacity-50"></div>
                )}
              </button>
            ))}
          </div>
          
          {/* Barra de progreso automático */}
          <div className="mt-4 w-full bg-gray-700/30 rounded-full h-1 overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-labora-neon to-green-400 rounded-full transition-all duration-300 ease-linear"
              style={{
                width: isPaused ? '100%' : `${((currentIndex + 1) / tools.length) * 100}%`,
                opacity: isPaused ? 0.5 : 1
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsLogosBar;
