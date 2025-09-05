import React from 'react';
import { Calendar, Clock, Users, Star, ArrowRight, CheckCircle, Zap, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Link } from 'react-router-dom';

const DatesSectionOptimized = () => {

  return (
    <section id="dates" className="py-20 relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-16 left-1/4 w-32 h-32 bg-gradient-to-br from-labora-neon/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-1/3 w-24 h-24 bg-gradient-to-br from-labora-red/30 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-32 left-1/3 w-40 h-40 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-16 right-1/4 w-28 h-28 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-2xl animate-pulse"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6 px-6 py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
            <Zap className="h-5 w-5 text-labora-neon fill-current animate-pulse" />
            <span className="text-gray-700 text-sm font-bold uppercase tracking-wider">Próxima Cohorte Disponible</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black mb-6 text-gray-900 leading-tight">
            Conviértete en AI Builder<br />
            en <span className="bg-gradient-to-r from-labora-neon to-green-400 bg-clip-text text-transparent">4 semanas</span>
          </h2>
          <p className="text-gray-600 text-xl max-w-3xl mx-auto leading-relaxed">
            Programa intensivo en vivo para que puedas crear y lanzar proyectos al mercado con IA y No-Code
          </p>
        </div>
        
        <div className="max-w-5xl mx-auto">
          {/* Main Timeline Card */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl overflow-hidden shadow-2xl border border-white/30 mb-8">
            {/* Header with gradient */}
            <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white p-6 sm:p-8 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/10 via-transparent to-labora-red/10"></div>
              <div className="relative flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-labora-neon rounded-2xl flex items-center justify-center shadow-lg">
                      <Star className="h-6 w-6 text-black" />
                    </div>
                    <h3 className="text-2xl sm:text-3xl font-black">Cohorte #14 - En Vivo</h3>
                  </div>
                  <p className="text-gray-300 text-lg">Cupos limitadas</p>
                </div>
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30 text-center">
                    <p className="text-gray-300 text-sm font-medium">Estado</p>
                    <p className="font-black text-xl text-labora-neon">ABIERTO</p>
                  </div>
                  <div className="bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-4 border border-white/30 text-center">
                    <p className="text-gray-300 text-sm font-medium">Inicio</p>
                    <p className="font-black text-xl text-white">16 SEP</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Enhanced Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-0">
              {/* Fechas y Duración */}
              <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-gray-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-labora-red to-red-600 rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Calendar className="h-7 w-7 text-white" />
                  </div>
                  <h4 className="font-black text-gray-900 text-lg">Cronograma</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Inicio:</span>
                    <span className="text-gray-900 font-bold">16 Septiembre</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Finalización:</span>
                    <span className="text-gray-900 font-bold">17 Octubre</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">Duración:</span>
                    <span className="text-labora-neon font-black text-lg">4 Semanas</span>
                  </div>
                </div>
              </div>
              
              {/* Horarios */}
              <div className="p-6 sm:p-8 border-b lg:border-b-0 lg:border-r border-gray-200/50">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-labora-neon to-labora-red rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Clock className="h-7 w-7 text-black" />
                  </div>
                  <h4 className="font-black text-gray-900 text-lg">Horarios</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Sesiones:</span>
                    <span className="text-gray-900 font-bold">3 por semana</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Duración:</span>
                    <span className="text-gray-900 font-bold">2 horas c/u</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">Total:</span>
                    <span className="text-labora-neon font-black text-lg">6h/semana</span>
                  </div>
                </div>
              </div>
              
              {/* Modalidad */}
              <div className="p-6 sm:p-8">
                <div className="flex items-center mb-6">
                  <div className="w-14 h-14 bg-gradient-to-br from-labora-red to-labora-neon rounded-2xl flex items-center justify-center mr-4 shadow-lg">
                    <Globe className="h-7 w-7 text-black" />
                  </div>
                  <h4 className="font-black text-gray-900 text-lg">Modalidad</h4>
                </div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Formato:</span>
                    <span className="text-gray-900 font-bold">100% Online</span>
                  </div>
                  <div className="flex justify-between items-center py-2 border-b border-gray-100">
                    <span className="text-gray-600 font-medium">Plazas:</span>
                    <span className="text-gray-900 font-bold">20 estudiantes</span>
                  </div>
                  <div className="flex justify-between items-center py-2">
                    <span className="text-gray-600 font-medium">Grabaciones:</span>
                    <span className="text-labora-neon font-black">24/7 ✓</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Benefits Banner */}
            <div className="bg-gradient-to-r from-gray-50 to-white p-6 border-t border-gray-200/50">
              <div className="flex flex-wrap justify-center gap-6">
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">Mentorías 1:1</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">Proyecto Final</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">Comunidad Activa</span>
                </div>
                <div className="flex items-center gap-2 text-gray-700">
                  <CheckCircle className="h-5 w-5 text-green-500" />
                  <span className="font-semibold">Certificación</span>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced CTA Section */}
          <div className="text-center">
            <div className="max-w-2xl mx-auto bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/30">
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                🚀 ¿Listo para transformar tu futuro?
              </h3>
              <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                Aplica a tu clase de prueba gratuita y descubre si este bootcamp es para ti.
              </p>
              
              <div className="space-y-6">
                {/* Main CTA Button */}
                <div className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/40 to-green-400/40 rounded-full blur-xl opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
                  
                  <Link to="/formulario-bootcamp">
                    <Button className="relative bg-gradient-to-r from-labora-neon to-green-400 hover:from-green-400 hover:to-labora-neon text-black font-black rounded-full px-10 py-5 text-lg transition-all duration-300 shadow-2xl transform hover:scale-105 w-full sm:w-auto group">
                      PROBAR CLASE GRATIS
                      <ArrowRight className="ml-3 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1" />
                    </Button>
                  </Link>
                </div>

                {/* Trust indicators */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full border-2 border-white"></div>
                      <div className="w-6 h-6 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full border-2 border-white"></div>
                    </div>
                    <span className="font-medium">+100 personas construyendo proyectos con IA</span>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatesSectionOptimized; 