import React from 'react';

const FormularioBootcamp = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-5 pointer-events-none"></div>
      
      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-labora-neon/5 via-transparent to-labora-red/5"></div>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-labora-neon/10 via-transparent to-transparent"></div>
      
      {/* Main Content */}
      <div className="relative z-10 min-h-screen flex items-center justify-center p-4">
        <div className="w-full max-w-2xl">
          
          {/* Form Container */}
          <div className="bg-transparent rounded-3xl p-6 sm:p-8 border border-white/10">
            
            {/* Minimal Header */}
            <div className="text-center mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-3">
                Bootcamp de IA y No Code
              </h1>
              <p className="text-gray-300 text-base">
                Completa el formulario para acceder a tu clase gratuita
              </p>
            </div>

            {/* Tally Form Embed */}
            <div className="w-full">
              <iframe
                src="https://tally.so/embed/w49bBo?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="650"
                frameBorder="0"
                marginHeight={0}
                marginWidth={0}
                title="Aplicación al Bootcamp AI Builder"
                className="rounded-lg"
                style={{
                  background: 'transparent',
                  border: 'none'
                }}
              />
            </div>

            {/* Minimal Security Note */}
            <div className="text-center mt-6">
              <p className="text-gray-400 text-xs">
                🔒 Información segura y protegida
              </p>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormularioBootcamp;
