import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const HeaderSimple = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Ocultar header cuando se hace scroll hacia abajo
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } 
      // Mostrar header cuando se hace scroll hacia arriba
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header className={`w-full bg-transparent backdrop-blur-sm z-50 fixed top-0 left-0 right-0 transition-transform duration-300 ${
      isVisible ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          {/* Logo Centrado */}
          <Link to="/" className="flex-shrink-0">
            <img 
              src="/lovable-uploads/logolabora.webp" 
              alt="Labora" 
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default HeaderSimple;