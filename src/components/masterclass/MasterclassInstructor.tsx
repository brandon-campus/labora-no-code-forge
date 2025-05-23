
import React from 'react';

const MasterclassInstructor = () => {
  return (
    <section id="instructor" className="relative py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="md:w-1/3">
              <div className="rounded-full overflow-hidden w-48 h-48 border-4 border-labora-neon">
                <img 
                  src="/lovable-uploads/portada.png"
                  alt="Instructor"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            
            <div className="md:w-2/3 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-4 text-labora-dark">Conocé a tu instructor</h3>
              <p className="text-gray-600 mb-4">
                Franco Benedetti es el fundador de Labora y experto en desarrollo No-Code. 
                Ha ayudado a cientos de personas a crear sus primeras aplicaciones sin necesidad 
                de escribir código.
              </p>
              <div className="flex flex-wrap gap-4 justify-center md:justify-start">
                <div className="px-4 py-2 bg-gray-50 rounded-full">
                  <span className="text-gray-600">+500 estudiantes</span>
                </div>
                <div className="px-4 py-2 bg-gray-50 rounded-full">
                  <span className="text-gray-600">+50 proyectos</span>
                </div>
                <div className="px-4 py-2 bg-gray-50 rounded-full">
                  <span className="text-gray-600">5 años de experiencia</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MasterclassInstructor;
