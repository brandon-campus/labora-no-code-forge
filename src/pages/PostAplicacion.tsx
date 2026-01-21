import React, { useEffect } from 'react';
import { CheckCircle, Phone, MessageCircle, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { fbqTrack } from "@/lib/fbqTrack";

const PostAplicacion = () => {

  const handleInscribirse = () => {
    fbqTrack('ClickInscribirseWhatsApp');
    const message = encodeURIComponent("Apliqué al Bootcamp de IA y No Code y quiero inscribirme");
    window.open(`https://wa.me/5491138142899?text=${message}`, '_blank');
  };

  const handleInfo = () => {
    fbqTrack('ClickInfoWhatsApp');
    const message = encodeURIComponent("Quiero más info del Bootcamp de IA y No Code");
    window.open(`https://wa.me/5491138142899?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-labora-neon/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-labora-red/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="max-w-3xl mx-auto text-center relative z-10">

        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-8 animate-fade-in-up">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in-up delay-100">
          ¡Bienvenido al <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-labora-neon to-green-400">Bootcamp de IA y No Code!</span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Tu aplicación ha sido recibida correctamente. Estás a un paso de transformar tu carrera profesional.
        </p>

        <div className="flex flex-col gap-6 max-w-2xl mx-auto animate-fade-in-up delay-300">
          {/* Botón Inscribirse - Primary & Larger */}
          <div className="bg-gray-900/80 border border-labora-neon/30 p-8 md:p-10 rounded-3xl hover:border-labora-neon/60 transition-all group shadow-2xl shadow-labora-neon/5 ring-1 ring-white/5">
            <h3 className="text-xl md:text-2xl font-bold mb-2 text-white">¿Estás listo para comenzar?</h3>
            <div className="inline-block bg-labora-neon/20 border border-labora-neon/40 rounded-lg px-6 py-4 mb-4 text-left max-w-md w-full">
              <p className="text-labora-neon font-bold text-sm mb-2 text-center uppercase tracking-wider">Próximos Inicios Confirmados</p>
              <ul className="text-gray-300 text-sm space-y-3">
                <li className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-labora-neon/20 pb-2">
                  <span className="font-bold text-white">4 de Feb:</span>
                  <span className="text-gray-400">Mié 10-12hs + Sáb 10-14hs</span>
                </li>
                <li className="flex flex-col sm:flex-row sm:items-center justify-between pt-1">
                  <span className="font-bold text-white">19 de Feb:</span>
                  <span className="text-gray-400">Mar, Jue, Vie 10-12hs</span>
                </li>
              </ul>
            </div>
            <p className="text-gray-300 text-base md:text-lg mb-8 max-w-lg mx-auto">Confirma tu inscripción ahora mismo y asegura tu lugar.</p>
            <Button
              onClick={handleInscribirse}
              className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-bold py-8 text-lg md:text-xl rounded-2xl shadow-xl shadow-labora-neon/20 transform hover:-translate-y-1 transition-all"
            >
              <CheckCircle className="mr-3 h-6 w-6" />
              INSCRIBIRSE AHORA
            </Button>
          </div>

          {/* Botón Más Info - Secondary */}
          <div className="mt-4">
            <p className="text-gray-400 text-sm mb-4">¿Tienes dudas antes de inscribirte?</p>
            <Button
              variant="outline"
              onClick={handleInfo}
              className="w-full md:w-auto bg-transparent border border-gray-700 text-gray-300 hover:bg-white hover:text-black hover:border-white font-medium py-3 px-8 text-base rounded-xl transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablar con un asesor por WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500 animate-fade-in-up delay-500">
          <p>Al hacer clic serás redirigido a WhatsApp para continuar.</p>
        </div>

      </div>
    </div>
  );
};

export default PostAplicacion; 