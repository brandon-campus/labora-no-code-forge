
import React from 'react';
import { Calendar } from 'lucide-react';

const MasterclassAgenda = () => {
  return (
    <section id="agenda" className="relative py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-labora-red/5">
            <Calendar className="h-5 w-5 text-labora-red" />
            <span className="text-gray-600 text-sm font-medium">Agenda del evento</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-labora-dark">
            Una masterclass <span className="text-labora-red">práctica y dinámica</span>
          </h2>
          
          <div className="grid gap-8">
            <div className="p-6 rounded-xl bg-white shadow-lg border border-gray-100">
              <div className="flex flex-col md:flex-row gap-6 items-center text-left">
                <div className="md:w-1/3">
                  <div className="font-bold text-xl mb-2 text-labora-dark">90 minutos en vivo</div>
                  <p className="text-gray-600">Jueves 2 de Mayo</p>
                  <p className="text-gray-600">19:00hs (ARG)</p>
                </div>
                
                <div className="md:w-2/3">
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-labora-red/10 flex items-center justify-center mt-1">
                        <span className="text-labora-red text-sm font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Introducción a No-Code + IA</p>
                        <p className="text-gray-600">Panorama actual y oportunidades</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-labora-red/10 flex items-center justify-center mt-1">
                        <span className="text-labora-red text-sm font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Demo práctica en vivo</p>
                        <p className="text-gray-600">Crearemos una aplicación desde cero</p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-labora-red/10 flex items-center justify-center mt-1">
                        <span className="text-labora-red text-sm font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">Preguntas y respuestas</p>
                        <p className="text-gray-600">Sesión interactiva con los participantes</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassAgenda;
