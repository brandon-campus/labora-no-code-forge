import React, { useState } from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogClose
} from "@/components/ui/dialog";

const BootcampQuieroCrearConIA = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-labora-dark px-4 py-12">
      <h1 className="text-3xl md:text-5xl font-black text-white mb-8 text-center">
        Bienvenido al <span className="text-labora-neon">Bootcamp de IA y No Code</span>
      </h1>
      <div className="w-full max-w-2xl aspect-video mb-4 rounded-xl overflow-hidden shadow-lg">
        <iframe
          src="https://www.tella.tv/video/cmd4zbb33000d0cl12tsheo0j/embed?b=1&title=1&a=1&loop=0&t=0&muted=0&wt=1"
          title="Bienvenida Bootcamp Labora"
          allowFullScreen
          className="w-full h-full"
          style={{ border: 0 }}
        />
      </div>
      <p className="text-center text-xs text-gray-400 mb-8 -mt-2">
        Solo hoy: 30% de descuento en tu inscripción en una sola cuota
      </p>
      <div className="flex flex-col gap-4 w-full max-w-xs">
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <button
              className="w-full bg-[#c1ff72] hover:bg-[#b0ff4a] text-black font-bold rounded-full px-10 py-5 text-lg transition-all shadow-lg uppercase"
            >
              Inscribirse
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
                onClick={() => setOpen(false)}
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
                onClick={() => setOpen(false)}
              >
                <button className="w-full bg-[#c1ff72] text-gray-900 font-bold py-3 rounded-lg text-lg hover:bg-[#b0ff4a] transition">
                  🌎 Soy de otro país
                </button>
              </a>
            </div>
          </DialogContent>
        </Dialog>
        <a
          href="https://wa.me/5491138142899?text=%C2%A1Hola%20Labora!%20Me%20pre-inscrib%C3%AD%20al%20bootcamp%20de%20IA%20y%20No%20Code%20y%20quiero%20obtener%20m%C3%A1s%20informaci%C3%B3n."
          target="_blank"
          rel="noopener noreferrer"
          className="block"
        >
          <button className="w-full border border-white text-white font-bold rounded-full px-10 py-5 text-lg transition-all hover:bg-white hover:text-labora-dark uppercase">
            Hablar por WhatsApp
          </button>
        </a>
      </div>
    </div>
  );
};

export default BootcampQuieroCrearConIA; 