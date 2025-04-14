
import React from 'react';
import { Calendar, Clock, Users } from 'lucide-react';

const DatesSection = () => {
  return (
    <section id="dates" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
            <span className="text-labora-red">Fechas</span> del programa
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Organiza tu tiempo y prepárate para embarcarte en esta experiencia transformadora.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl overflow-hidden shadow-lg border border-gray-100 animate-fade-in">
            <div className="bg-labora-dark text-white p-6">
              <h3 className="text-2xl font-bold mb-2">Próxima cohorte: Mayo 2025</h3>
              <p className="text-gray-300">¡Las inscripciones ya están abiertas!</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-labora-red/10 rounded-full flex items-center justify-center mr-3">
                    <Calendar className="h-5 w-5 text-labora-red" />
                  </div>
                  <h4 className="font-semibold text-labora-dark">Fechas clave</h4>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Inscripciones:</span>
                    <span className="font-medium">1 Abr - 25 Abr</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Inicio del programa:</span>
                    <span className="font-medium">2 de Mayo</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Demo Day:</span>
                    <span className="font-medium">28 de Julio</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-labora-neon/10 rounded-full flex items-center justify-center mr-3">
                    <Clock className="h-5 w-5 text-labora-neon" />
                  </div>
                  <h4 className="font-semibold text-labora-dark">Duración</h4>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Total del programa:</span>
                    <span className="font-medium">12 semanas</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Sesiones en vivo:</span>
                    <span className="font-medium">2 por semana</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Dedicación estimada:</span>
                    <span className="font-medium">10h semanales</span>
                  </li>
                </ul>
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-labora-red/10 rounded-full flex items-center justify-center mr-3">
                    <Users className="h-5 w-5 text-labora-red" />
                  </div>
                  <h4 className="font-semibold text-labora-dark">Modalidad</h4>
                </div>
                <ul className="space-y-3 text-gray-600">
                  <li className="flex justify-between">
                    <span>Formato:</span>
                    <span className="font-medium">100% online</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Plazas disponibles:</span>
                    <span className="font-medium">30 por cohorte</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Grabaciones:</span>
                    <span className="font-medium">Disponibles 24/7</span>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="p-6 bg-gray-50 border-t border-gray-100">
              <p className="text-center text-gray-600">
                ¿No puedes unirte a esta cohorte? <a href="#contacto" className="text-labora-red font-medium hover:underline">Déjanos tus datos</a> y te avisaremos cuando abra la siguiente.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatesSection;
