
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { BookOpen, Calendar, MessageSquare, Rocket, Users } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";
import WizardAplicar from './WizardAplicar';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const ContactSection = () => {
  const [wizardOpen, setWizardOpen] = React.useState(false);

  return (
    <section id="contacto" className="bg-labora-dark py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Únete al <span className="text-labora-neon">bootcamp</span> y crea tu proyecto
            </h2>
            <p className="text-gray-300 text-lg mb-8">
              Completa el formulario y nos pondremos en contacto contigo para darte toda la información sobre nuestro programa.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-labora-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Calendar className="h-5 w-5 text-labora-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Duración</h3>
                  <p className="text-gray-300">Programa intensivo de 4 semanas</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-labora-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <BookOpen className="h-5 w-5 text-labora-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Metodología</h3>
                  <p className="text-gray-300">Clases 100% en vivo, 3 veces por semana</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-labora-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Users className="h-5 w-5 text-labora-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Acompañamiento</h3>
                  <p className="text-gray-300">Entrenadores especializados en IA y No-Code</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-labora-red/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <Rocket className="h-5 w-5 text-labora-red" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-white">Resultado</h3>
                  <p className="text-gray-300">Tu producto terminado y listo para lanzar</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100 animate-fade-in-up">
            <h3 className="text-2xl font-bold mb-6 text-labora-dark">¿Listo para iniciar con IA y No Code?</h3>
            
            <div className="space-y-6">
              <a
                href="/registro-curso"
                className="block"
              >
                <Button className="w-full bg-[#c1ff72] hover:bg-[#b0ff4a] text-black font-bold rounded-full px-10 pt-7 pb-7 text-base transition-all shadow-lg uppercase">
                  COMENZAR AHORA
                </Button>
              </a>
              
              <p className="text-gray-500 text-center">
                Fecha límite de inscripción: <span className="font-semibold">05 de Agosto, 2025</span>
              </p>
              
              <div className="border-t border-gray-100 pt-6 mt-6">
                <p className="text-gray-500 text-center">
                  También puedes contactarnos directamente a <a href="mailto:info@labora.ar" className="text-labora-red hover:underline">info@cohorte.labora.ar</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WizardAplicar open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </section>
  );
};

export default ContactSection;
