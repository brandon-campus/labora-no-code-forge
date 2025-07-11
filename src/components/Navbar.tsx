
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { fbqTrack } from "@/lib/fbqTrack";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navItems = [{
    label: "Acerca del programa",
    href: "#about"
  }, {
    label: "Fechas",
    href: "#dates"
  }, {
    label: "Plan de estudios",
    href: "#curriculum"
  }, {
    label: "Metodología",
    href: "#proceso"
  }, {
    label: "Testimonios",
    href: "#testimonios"
  }, {
    label: "Proyectos",
    href: "#demo"
  }];
  return <nav className="w-full bg-labora-dark/95 backdrop-blur-md z-50 border-b border-gray-800">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            {/* Logo */}
            <Link to="/" className="flex-shrink-0">
              <img src="/lovable-uploads/logolabora.webp" alt="Labora" className="h-8" />
            </Link>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-2">
              {navItems.map((item, index) => <a key={index} href={item.href} className="text-gray-300 hover:text-labora-neon px-3 py-2 rounded-md text-sm font-medium transition-colors">
                  {item.label}
                </a>)}
              <a
                href="/bootcamp/aplicar"
                onClick={() => fbqTrack('NavbarAplicaAhoraClick')}
              >
                <Button className="bg-labora-red hover:bg-labora-red/90">Aplica ahora</Button>
              </a>
            </div>
          </div>
          
          <div className="md:hidden">
            <button onClick={toggleMenu} className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {isMenuOpen && <div className="md:hidden bg-labora-dark border-b border-gray-800">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item, index) => <a key={index} href={item.href} className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-labora-neon" onClick={toggleMenu}>
                {item.label}
              </a>)}
            <a
              href="/bootcamp/aplicar"
              onClick={() => {
                fbqTrack('NavbarMobileAplicaAhoraClick');
                toggleMenu();
              }}
            >
              <Button className="w-full bg-labora-red hover:bg-labora-red/90 mt-2">
                Conoce más
              </Button>
            </a>
          </div>
        </div>}
    </nav>;
};
export default Navbar;
