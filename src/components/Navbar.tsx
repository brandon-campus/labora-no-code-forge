
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="sticky top-0 w-full bg-labora-dark/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <a href="#" className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-white">
                <span className="text-labora-red">Labor</span>
                <span className="text-labora-neon">a</span>
              </h1>
            </a>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-4">
              <a href="#beneficios" className="text-gray-300 hover:text-labora-neon px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Beneficios
              </a>
              <a href="#proceso" className="text-gray-300 hover:text-labora-neon px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Proceso
              </a>
              <a href="#testimonios" className="text-gray-300 hover:text-labora-neon px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Testimonios
              </a>
              <a href="#contacto">
                <Button className="bg-labora-red hover:bg-labora-red/90">
                  Inscríbete
                </Button>
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-labora-dark border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a
              href="#beneficios"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-labora-neon"
              onClick={toggleMenu}
            >
              Beneficios
            </a>
            <a
              href="#proceso"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-labora-neon"
              onClick={toggleMenu}
            >
              Proceso
            </a>
            <a
              href="#testimonios"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-labora-neon"
              onClick={toggleMenu}
            >
              Testimonios
            </a>
            <a
              href="#contacto"
              onClick={toggleMenu}
            >
              <Button className="w-full bg-labora-red hover:bg-labora-red/90 mt-2">
                Inscríbete
              </Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
