import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const DatesSectionOptimized = () => {

  return (
    <section id="dates" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-labora-neon text-sm uppercase tracking-wider mb-4 font-semibold">
            PRÓXIMA COHORTE DISPONIBLE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
            Conviértete en AI Builder en <span className="text-labora-neon">4 semanas</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Programa intensivo en vivo para que puedas crear y lanzar proyectos al mercado.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          {/* Urgency Badge - Mobile First */}
          <div className="text-center mb-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-red-50 border border-red-200 rounded-full text-red-700 text-sm font-semibold animate-pulse">
              <span className="w-2 h-2 bg-red-500 rounded-full animate-ping"></span>
              ¡Solo quedan 3 plazas disponibles!
            </div>
          </div>

          {/* Main Cohort Card - Mobile First */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 mb-8">
            {/* Header - Mobile First */}
            <div className="bg-gradient-to-r from-labora-red to-labora-red/90 text-white p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h3 className="text-xl sm:text-2xl font-bold mb-2">Cohorte #14 - En Vivo</h3>
                  <p className="text-gray-100 text-sm sm:text-base">¡Últimas plazas disponibles!</p>
                </div>
                <div className="flex justify-center sm:justify-end">
                  <div className="bg-white/20 backdrop-blur-sm rounded-xl px-4 py-2 border border-white/30">
                    <p className="text-xs sm:text-sm text-gray-100">Inscripciones</p>
                    <p className="font-bold text-lg sm:text-xl text-white">Abiertas</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Grid - Mobile First */}
            <div className="grid grid-cols-1 divide-y divide-gray-100">
              {/* Fechas y Duración */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-10 sm:h-10 bg-labora-red/10 rounded-2xl sm:rounded-full flex items-center justify-center mr-4 sm:mr-3">
                    <Calendar className="h-6 w-6 sm:h-5 sm:w-5 text-labora-red" />
                  </div>
                  <h4 className="font-bold sm:font-semibold text-gray-900 text-lg sm:text-lg">Fechas del Programa</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Inicio:</span>
                    <span className="text-gray-900 font-semibold text-sm sm:text-base">16 de septiembre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Finalización:</span>
                    <span className="text-gray-900 font-semibold text-sm sm:text-base">17 de octubre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Duración total:</span>
                    <span className="text-labora-neon font-bold text-sm sm:text-base">4 semanas</span>
                  </div>
                </div>
              </div>
              
              {/* Horarios y Modalidad */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-10 sm:h-10 bg-labora-neon/10 rounded-2xl sm:rounded-full flex items-center justify-center mr-4 sm:mr-3">
                    <Clock className="h-6 w-6 sm:h-5 sm:w-5 text-labora-neon" />
                  </div>
                  <h4 className="font-bold sm:font-semibold text-gray-900 text-lg sm:text-lg">Horarios</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Sesiones:</span>
                    <span className="text-gray-900 font-semibold text-sm sm:text-base">3 por semana</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Duración:</span>
                    <span className="text-gray-900 font-semibold text-sm sm:text-base">2 horas c/u</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Dedicación:</span>
                    <span className="text-labora-neon font-bold text-sm sm:text-base">6h semanales</span>
                  </div>
                </div>
              </div>
              
              {/* Modalidad y Plazas */}
              <div className="p-4 sm:p-6">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 sm:w-10 sm:h-10 bg-labora-red/10 rounded-2xl sm:rounded-full flex items-center justify-center mr-4 sm:mr-3">
                    <Users className="h-6 w-6 sm:h-5 sm:w-5 text-labora-red" />
                  </div>
                  <h4 className="font-bold sm:font-semibold text-gray-900 text-lg sm:text-lg">Modalidad</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Formato:</span>
                    <span className="text-gray-900 font-semibold text-sm sm:text-base">100% online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Plazas:</span>
                    <span className="text-gray-900 font-semibold text-sm sm:text-base">20 estudiantes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600 text-sm sm:text-base">Grabaciones:</span>
                    <span className="text-gray-900 font-semibold text-sm sm:text-base">Disponibles 24/7</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section - Mobile First */}
          <div className="text-center space-y-6">
            {/* Main CTA Button */}
            <div className="relative group">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/40 to-labora-red/40 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              
              {/* Button */}
              <Link to="/formulario-bootcamp">
                <Button
                  className="relative bg-gradient-to-r from-labora-neon to-labora-neon/90 hover:from-labora-neon/90 hover:to-labora-neon text-black font-bold rounded-full px-6 sm:px-8 py-4 sm:py-6 text-base sm:text-lg transition-all duration-300 shadow-2xl shadow-labora-neon/30 transform hover:scale-105 hover:shadow-labora-neon/50 w-full sm:w-auto"
                >
                  PROBAR CLASE GRATIS
                  <ArrowRight className="ml-2 sm:ml-3 h-4 w-4 sm:h-5 sm:w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
              </Link>
            </div>
            
            
            
            
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatesSectionOptimized; 