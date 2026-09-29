import React, { useEffect } from 'react';
import { fbqTrack } from "@/lib/fbqTrack";

const PostAplicacion = () => {
  useEffect(() => {
    // Registramos que llegó a esta página después de completar el Tally (Orgánico)
    fbqTrack('CompleteRegistrationOrganico');
    
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

            <div className="mt-6 animate-fade-in-up delay-300">
              <a 
                href="https://wa.me/5491138142899?text=¡Hola%20Labora!%20(Vengo%20del%20orgánico)%20Quiero%20hablar%20con%20alguien%20sobre%20el%20bootcamp"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full gap-2 px-6 py-4 text-[15px] font-bold text-white transition-all border-2 border-gray-800 rounded-xl hover:bg-gray-800/80 hover:border-gray-600 bg-gray-900/40"
                onClick={() => fbqTrack('ContactWhatsAppOrganico')}
              >
                <svg className="w-5 h-5 text-[#25D366]" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
                </svg>
                Quiero hablar con alguien
              </a>
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

export default PostAplicacion;