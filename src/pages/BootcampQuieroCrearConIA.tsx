import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";

const FECHA_LIMITE = new Date("2025-07-16T23:59:59-03:00");
const CUPOS = 4; // Puedes cambiar este número fácilmente

function useCountdown(targetDate) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const target = targetDate.getTime ? targetDate.getTime() : targetDate;
      const diff = target - now;
      if (diff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        clearInterval(interval);
      } else {
        const days = Math.floor(diff / (1000 * 60 * 60 * 24));
        const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const minutes = Math.floor((diff / (1000 * 60)) % 60);
        const seconds = Math.floor((diff / 1000) % 60);
        setTimeLeft({ days, hours, minutes, seconds });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [targetDate]);

  return timeLeft;
}

const BootcampQuieroCrearConIA = () => {
  const [open, setOpen] = useState(false);
  const countdown = useCountdown(FECHA_LIMITE.getTime());

  // Evento Lead al cargar la página
  useEffect(() => {
    if (window.fbq) {
      window.fbq('track', 'Lead');
    }
  }, []);

  // Handler para InitiateCheckout
  const handleInitiateCheckout = () => {
    if (window.fbq) {
      window.fbq('track', 'InitiateCheckout');
    }
  };

  // Handler para Contact (WhatsApp)
  const handleContact = () => {
    if (window.fbq) {
      window.fbq('track', 'Contact');
    }
  };

  // Handler para CompleteRegistration (pago)
  const handleCompleteRegistration = () => {
    if (window.fbq) {
      window.fbq('track', 'CompleteRegistration');
    }
  };

  return (
    <div className="min-h-screen bg-labora-dark flex flex-col items-center justify-center px-4 py-12">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-6 md:p-10 flex flex-col items-center">
        {/* Bloque de urgencia */}
        <div className="w-full mb-4">
          <div className="bg-labora-red/90 text-white rounded-lg px-4 py-3 flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-3 font-bold text-base sm:text-lg shadow animate-pulse text-center">
            <span>⏰ Inscripciones cierran en:</span>
            <span className="font-mono bg-white/10 px-2 py-1 rounded">
              {`${String(countdown.days).padStart(2, '0')} días ${String(countdown.hours).padStart(2, '0')}:${String(countdown.minutes).padStart(2, '0')}:${String(countdown.seconds).padStart(2, '0')}`}
            </span>
            <span className="hidden sm:inline">•</span>
            <span>¡Quedan solo {CUPOS} cupos!</span>
          </div>
        </div>
        {/* Video de bienvenida */}
        <div style={{ position: "relative", paddingBottom: "56.25%", height: 0 }} className="w-full mb-6 rounded-lg overflow-hidden">
          <iframe
            style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: 0 }}
            src="https://www.tella.tv/video/cmd4zbb33000d0cl12tsheo0j/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1"
            allowFullScreen
            allowTransparency
            title="Bienvenida Bootcamp Labora"
          />
        </div>
        {/* Texto resumen */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-labora-dark mb-2">¡Estás a un paso de transformar tu futuro!</h2>
          <p className="text-lg text-gray-700 mb-2">🎯 <b>Próxima cohorte:</b> Julio 2025</p>
          <p className="text-lg text-gray-700 mb-2">Cupos: <b>solo 25 personas por grupo</b></p>
          <p className="text-lg text-gray-700 mb-2">Acceso a comunidad exclusiva, clases en vivo, grabaciones y soporte personalizado</p>
        </div>
        {/* Botones */}
        <div className="flex flex-col gap-4 w-full">
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <button
                className="w-full bg-labora-neon text-gray-900 font-bold py-3 rounded-lg text-lg hover:bg-labora-neon/90 transition"
                onClick={handleInitiateCheckout}
              >
                ✅ Inscribirme ahora
              </button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>¿Desde dónde te inscribes?</DialogTitle>
                <DialogDescription>
                  Selecciona tu país para continuar con el proceso de inscripción.
                </DialogDescription>
              </DialogHeader>
              <div className="flex flex-col gap-4 mt-4">
                <a
                  href="https://mpago.la/1WaRMSR"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    handleCompleteRegistration();
                  }}
                >
                  <button className="w-full bg-labora-red text-white font-bold py-3 rounded-lg text-lg hover:bg-labora-red/90 transition">
                    🇦🇷 Soy de Argentina
                  </button>
                </a>
                <a
                  href="https://checkout.dlocalgo.com/validate/recurring/EXK7eKO7VdXeRwb6MpvoncgS4hq5JAcS"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full"
                  onClick={() => {
                    setOpen(false);
                    handleCompleteRegistration();
                  }}
                >
                  <button className="w-full bg-labora-neon text-gray-900 font-bold py-3 rounded-lg text-lg hover:bg-labora-neon/90 transition">
                    🌎 Soy de otro país
                  </button>
                </a>
              </div>
            </DialogContent>
          </Dialog>
          <a
            href="https://wa.me/5491138142899?text=%C2%A1Hola%20Labora!%20Me%20pre-inscrib%C3%AD%20al%20programa%20y%20deseo%20obtener%20m%C3%A1s%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full"
            onClick={handleContact}
          >
            <button className="w-full bg-labora-red text-white font-bold py-3 rounded-lg text-lg hover:bg-labora-red/90 transition">
              💬 Quiero hablar por WhatsApp
            </button>
          </a>
        </div>
        {/* Opcional: Testimonios */}
        <div className="mt-8 text-center text-gray-500 text-sm">
          <p>“Gracias a Labora, lancé mi primer producto en 1 mes.” — Ana, Cohorte 12</p>
        </div>
      </div>
    </div>
  );
};

export default BootcampQuieroCrearConIA; 