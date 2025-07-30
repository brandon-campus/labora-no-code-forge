import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const DatesSection = () => {
  return (
    <section id="dates" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-labora-neon text-sm uppercase tracking-wider mb-4 font-semibold">
            PRÓXIMA COHORTE DISPONIBLE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Conviértete en AI Builder en <span className="text-labora-neon">4 semanas</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Programa intensivo en vivo con mentoría personalizada y proyectos reales
          </p>
        </div>
        
        <div className="max-w-6xl mx-auto">
          {/* Main Cohort Card */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700">
            {/* Header */}
            <div className="bg-gradient-to-r from-labora-red to-labora-red/80 text-white p-6">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Cohorte #13 - En Vivo</h3>
                  <p className="text-gray-200">¡Últimas plazas disponibles!</p>
                </div>
                <div className="text-right">
                  <div className="bg-white/20 rounded-lg px-4 py-2">
                    <p className="text-sm text-gray-200">Inscripciones</p>
                    <p className="font-bold text-lg">Abiertas</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-3 divide-y lg:divide-y-0 lg:divide-x divide-gray-700">
              {/* Fechas y Duración */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-labora-red/20 rounded-full flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-labora-red" />
                  </div>
                  <h4 className="font-semibold text-white text-lg">Fechas del Programa</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Inicio:</span>
                    <span className="text-white font-semibold">7 de agosto</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Finalización:</span>
                    <span className="text-white font-semibold">13 de septiembre</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Duración total:</span>
                    <span className="text-labora-neon font-bold">4 semanas</span>
                  </div>
                </div>
              </div>
              
              {/* Horarios y Modalidad */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-labora-neon/20 rounded-full flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-labora-neon" />
                  </div>
                  <h4 className="font-semibold text-white text-lg">Horarios</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Sesiones:</span>
                    <span className="text-white font-semibold">3 por semana</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Duración:</span>
                    <span className="text-white font-semibold">2 horas c/u</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Dedicación:</span>
                    <span className="text-labora-neon font-bold">6h semanales</span>
                  </div>
                </div>
              </div>
              
              {/* Modalidad y Plazas */}
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-labora-red/20 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-labora-red" />
                  </div>
                  <h4 className="font-semibold text-white text-lg">Modalidad</h4>
                </div>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Formato:</span>
                    <span className="text-white font-semibold">100% online</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Plazas:</span>
                    <span className="text-labora-neon font-bold">30 estudiantes</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-300">Grabaciones:</span>
                    <span className="text-white font-semibold">Disponibles 24/7</span>
                  </div>
                </div>
              </div>
            </div>
            

          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="/curso-campus" className="bg-labora-neon text-black px-8 py-4 rounded-lg font-bold text-lg hover:bg-labora-neon/80 transition-all duration-200 transform hover:scale-105 shadow-lg inline-block text-center">
              COMENZAR AHORA
            </a>
            <a href="https://wa.me/5491178519054?text=%C2%A1Hola%20Labora!%20Quiero%20obtener%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20bootcamp%20de%20IA%20y%20No%20Code" target="_blank" rel="noopener noreferrer" className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-bold text-lg hover:bg-white hover:text-black transition-all duration-200 transform hover:scale-105 inline-block text-center">
              HABLAR POR WHATSAPP
            </a>
          </div>
          
          <p className="text-center text-gray-400 mt-6 text-sm">
            ¿No puedes unirte a esta cohorte? <a href="#contacto" className="text-labora-neon font-medium hover:underline">Déjanos tus datos</a> y te avisaremos cuando abra la siguiente.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DatesSection;