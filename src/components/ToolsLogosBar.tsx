import React, { useState, useEffect } from 'react';

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
          {/* Carrusel automático */}
          <div className="flex items-center justify-center transition-transform duration-1000 ease-in-out">
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
          
          {/* Indicadores de progreso */}
          <div className="flex justify-center mt-6 space-x-2">
            {tools.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-labora-neon w-6' 
                    : 'bg-gray-600 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToolsLogosBar;
