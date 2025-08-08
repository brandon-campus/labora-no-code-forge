import React from 'react';
import { Link } from 'react-router-dom';

const HeaderSimple = () => {
  return (
    <header className="w-full bg-transparent backdrop-blur-sm z-50 fixed top-0 left-0 right-0">
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