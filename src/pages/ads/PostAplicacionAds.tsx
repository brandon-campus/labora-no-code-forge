import React, { useEffect } from 'react';
import { fbqTrack } from "@/lib/fbqTrack";

const PostAplicacionAds = () => {
  useEffect(() => {
    // Registramos que llegó a esta página después de completar el Tally
    fbqTrack('CompleteRegistrationAds');
    
    // Load Calendly script
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);

    return () => {
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex flex-col p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-labora-neon/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-labora-red/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 pt-4 md:pt-10">
        
        <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 items-start">
          
          {/* Left Column: Info */}
          <div className="w-full lg:w-1/3 flex flex-col text-left lg:sticky lg:top-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black mb-4 animate-fade-in-up delay-100 leading-tight uppercase">
              Reserva tu llamada
            </h1>

            <div className="bg-gray-900/60 border border-gray-800 rounded-xl p-5 animate-fade-in-up delay-200">
              <h3 className="text-lg font-bold text-labora-neon mb-3">¿Para qué es esta llamada de 15 min?</h3>
              <ul className="space-y-3 text-gray-300 text-sm">
                <li className="flex items-start gap-2">
                  <span className="text-labora-neon mt-0.5">✔</span>
                  <span>Entender tu situación actual y la idea del proyecto que quieres desarrollar.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-labora-neon mt-0.5">✔</span>
                  <span>Diseñar juntos un plan de acción para crear tu producto con IA y No-Code.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-labora-neon mt-0.5">✔</span>
                  <span>Evaluar si nuestro Bootcamp es el vehículo correcto para tus objetivos. Si es así, te invitaremos a sumarte.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column: Calendly Widget */}
          <div className="w-full lg:w-2/3 h-[700px] bg-white rounded-2xl overflow-hidden shadow-[0_0_40px_rgba(205,255,100,0.1)] border border-gray-800 animate-fade-in-up delay-300">
            <div 
              className="calendly-inline-widget" 
              data-url="https://calendly.com/brandoncandia-labora/bootcamp?hide_gdpr_banner=1" 
              style={{ minWidth: "320px", height: "100%" }}
            />
          </div>

        </div>

      </div>
    </div>
  );
};

export default PostAplicacionAds;
