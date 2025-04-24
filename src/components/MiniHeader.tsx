import React, { useState, useEffect } from 'react';
import { 
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { MenuIcon, X } from 'lucide-react';

const masterclassSections = [
  { id: "about", label: "¿Qué aprenderás?" },
  { id: "agenda", label: "Agenda" },
  { id: "instructor", label: "Instructor" },
  { id: "registro", label: "Reservar lugar" },
];

const sections = [
  { id: "about", label: "Acerca del programa" },
  { id: "dates", label: "Fechas del programa" },
  { id: "curriculum", label: "Plan de estudios" },
  { id: "proceso", label: "Metodología" },
  { id: "testimonios", label: "Testimonios" },
  { id: "demo", label: "Proyectos" },
  { id: "contacto", label: "Unirse" },
];

const MiniHeader = () => {
  const [visible, setVisible] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMasterclass = window.location.pathname === '/masterclass';
  const sections = isMasterclass ? masterclassSections : [
    { id: "about", label: "Acerca del programa" },
    { id: "dates", label: "Fechas del programa" },
    { id: "curriculum", label: "Plan de estudios" },
    { id: "proceso", label: "Metodología" },
    { id: "testimonios", label: "Testimonios" },
    { id: "demo", label: "Proyectos" },
    { id: "contacto", label: "Unirse" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      // Make the mini header visible after scrolling past the hero section
      if (currentScrollPos > 500) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  if (!visible) return null;

  return (
    <div className="fixed top-0 left-0 right-0 bg-labora-dark/95 backdrop-blur-md text-white z-50 shadow-lg transition-all duration-300 transform">
      {/* Desktop Menu */}
      <div className="hidden md:flex items-center justify-center h-14 px-6">
        <NavigationMenu>
          <NavigationMenuList className="gap-1">
            {sections.map((section) => (
              <NavigationMenuItem key={section.id}>
                <a 
                  href={`#${section.id}`} 
                  className="text-sm text-gray-300 hover:text-labora-neon px-3 py-2 rounded-md transition-colors"
                >
                  {section.label}
                </a>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center justify-between h-14 px-4">
        <h3 className="text-lg font-bold">
          <span className="text-labora-red">Labor</span>
          <span className="text-labora-neon">a</span>
        </h3>
        <button 
          onClick={toggleMobileMenu}
          className="p-2 rounded-md text-gray-300 hover:text-white focus:outline-none"
        >
          {mobileMenuOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-labora-dark border-t border-gray-800 animate-fade-in">
          <div className="flex flex-col py-2">
            {sections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-3 text-gray-300 hover:text-labora-neon hover:bg-labora-dark/80 text-sm font-medium"
                onClick={() => setMobileMenuOpen(false)}
              >
                {section.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MiniHeader;
