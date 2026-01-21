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

        <div className="grid gap-6 md:grid-cols-2 max-w-2xl mx-auto animate-fade-in-up delay-300">
          {/* Botón Inscribirse */}
          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl hover:border-labora-neon/50 transition-all group">
            <h3 className="text-lg font-bold mb-4 text-white">¿Estás listo para comenzar?</h3>
            <p className="text-gray-400 text-sm mb-6">Confirma tu inscripción ahora mismo y asegura tu lugar en la próxima cohorte.</p>
            <Button
              onClick={handleInscribirse}
              className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-bold py-6 text-lg rounded-xl shadow-lg shadow-labora-neon/10"
            >
              <CheckCircle className="mr-2 h-5 w-5" />
              INSCRIBIRSE AHORA
            </Button>
          </div>

          {/* Botón Más Info */}
          <div className="bg-gray-900/50 border border-gray-800 p-8 rounded-2xl hover:border-white/30 transition-all group">
            <h3 className="text-lg font-bold mb-4 text-white">¿Tienes dudas?</h3>
            <p className="text-gray-400 text-sm mb-6">Habla con nuestro equipo de admisiones para resolver cualquier consulta que tengas.</p>
            <Button
              variant="default"
              onClick={handleInfo}
              className="w-full bg-white text-black hover:bg-gray-200 font-bold py-6 text-lg rounded-xl transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              HABLAR POR WHATSAPP
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