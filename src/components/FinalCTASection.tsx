import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const FinalCTASection = () => {
  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/5 via-transparent to-labora-red/5"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          {/* Main Headline */}
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-white leading-tight">
            ¿Listo para crear tu primer proyecto con <span className="text-labora-neon">IA</span>?
          </h2>

          {/* Description */}
          <p className="text-gray-300 text-lg sm:text-xl mb-8 leading-relaxed">
            Únete a cientos de personas que ya están transformando sus ideas en proyectos reales con IA y No-Code.
          </p>

          {/* Main CTA */}
          <div className="mb-8">
            <Link to="/formulario-bootcamp">
              <Button className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-8 sm:px-12 py-4 sm:py-6 text-lg sm:text-xl transition-all shadow-lg shadow-labora-neon/25 transform hover:scale-105 w-full sm:w-auto group">
                PROBAR CLASE GRATIS
                <ArrowRight className="ml-3 h-5 w-5 sm:h-6 sm:w-6 transition-transform duration-300 group-hover:translate-x-1" />
              </Button>
            </Link>
          </div>

          {/* Enhanced guarantees with social proof */}
          <div className="space-y-4">
            {/* Social proof */}
            <div className="flex items-center justify-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 bg-gradient-to-br from-labora-neon to-green-400 rounded-full border-2 border-white shadow-lg"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-labora-red to-red-500 rounded-full border-2 border-white shadow-lg"></div>
                <div className="w-8 h-8 bg-gradient-to-br from-labora-neon to-labora-red rounded-full border-2 border-white shadow-lg"></div>
                <div className="w-8 h-8 bg-gray-300 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold text-gray-600 shadow-lg">+80</div>
              </div>
              <span className="text-gray-400 text-sm font-medium">estudiantes activos</span>
            </div>
            
            {/* Guarantees */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-gray-400 text-sm">
              <span>✅ Sin compromisos</span>
              <span>✅ Acceso inmediato</span>
              <span>✅ 100% práctico</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;
