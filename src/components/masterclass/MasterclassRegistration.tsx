
import React from 'react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

const MasterclassRegistration = () => {
  return (
    <section id="registro" className="relative py-20 bg-gray-950">
      {/* Tech Grid Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-gray-950"></div>
      </div>
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
            ¿Listo para crear tu primera <span className="text-labora-neon">app con IA</span>?
          </h2>
          
          <p className="text-gray-300 mb-8">
            Reservá tu lugar gratis en esta masterclass única y comenzá tu viaje en el mundo 
            del desarrollo No-Code + IA.
          </p>
          
          <Button 
            size="lg"
            className="bg-labora-neon hover:bg-labora-neon/90 text-gray-900 font-semibold"
            onClick={() => window.location.href = "https://tally.so/r/w49bBo"}
          >
            Reservar mi lugar gratis
            <ArrowRight className="ml-2" />
          </Button>
          
          <p className="mt-6 text-gray-400 text-sm">
            Cupos limitados. Las grabaciones solo estarán disponibles para los asistentes en vivo.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MasterclassRegistration;
