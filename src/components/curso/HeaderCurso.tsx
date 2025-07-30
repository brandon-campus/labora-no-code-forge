import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeaderCurso = ({ nombre, onPerfil, onLogout }: { nombre: string; onPerfil: () => void; onLogout: () => void }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      // Solo cerrar si el clic NO está dentro del menú ni en el botón
      if (menuRef.current && 
          !menuRef.current.contains(e.target as Node) && 
          buttonRef.current && 
          !buttonRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);

  const handleBootcampClick = () => {
    // Redirigir a la página del bootcamp
    window.location.href = '/bootcamp/quiero-crear-con-ia';
  };

  const handlePerfilClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setOpen(false);
    onPerfil();
  };

  const handleLogoutClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    console.log('Botón logout clickeado');
    setOpen(false);
    onLogout();
  };

  return (
    <header className="w-full bg-white/10 backdrop-blur-lg border-b border-labora-neon/20 flex justify-between items-center px-4 sm:px-8 py-3 sm:py-4 shadow-lg">
      {/* Logo de Labora */}
      <div className="flex items-center">
        <img 
          src="/lovable-uploads/logolabora.webp" 
          alt="Labora Logo" 
          className="h-8 sm:h-10 w-auto"
        />
        <span className="ml-2 sm:ml-3 text-white font-bold text-sm sm:text-base hidden sm:block">
          Campus
        </span>
      </div>

      {/* Botón Bootcamp y menú de usuario */}
      <div className="flex items-center space-x-3 sm:space-x-4">
        {/* Botón Ingresar al Bootcamp */}
        <button
          onClick={handleBootcampClick}
          className="bg-gradient-to-r from-labora-red to-labora-red/80 hover:from-labora-red/90 hover:to-labora-red/70 text-white px-3 sm:px-4 py-2 rounded-lg font-bold text-xs sm:text-sm shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 border border-labora-red/30 hidden sm:block"
        >
          Ingresar al Bootcamp
        </button>

        {/* Menú de usuario */}
        <div className="relative">
          <button
            ref={buttonRef}
            className="flex items-center gap-1 sm:gap-2 bg-labora-neon text-black font-bold px-3 sm:px-4 py-2 rounded-full shadow hover:bg-labora-neon/80 transition text-sm sm:text-base shadow-neon-glow"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="hidden sm:inline">{nombre}</span>
            <span className="sm:hidden">{nombre.split(' ')[0]}</span>
            <ChevronDown size={16} className="sm:w-[18px] sm:h-[18px]" />
          </button>
          
          {open && (
            <div 
              ref={menuRef}
              className="absolute right-0 mt-2 w-32 sm:w-40 bg-white/10 backdrop-blur-lg border border-labora-neon/20 rounded-lg shadow-lg z-50"
            >
              <button
                className="w-full text-left px-3 sm:px-4 py-2 hover:bg-white/10 text-white font-medium rounded-t-lg text-sm sm:text-base transition-colors cursor-pointer"
                onClick={handlePerfilClick}
                onMouseDown={(e) => e.preventDefault()}
              >
                Perfil
              </button>
              <button
                className="w-full text-left px-3 sm:px-4 py-2 hover:bg-white/10 text-white font-medium rounded-b-lg text-sm sm:text-base transition-colors cursor-pointer"
                onClick={handleLogoutClick}
                onMouseDown={(e) => e.preventDefault()}
              >
                Cerrar sesión
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default HeaderCurso; 