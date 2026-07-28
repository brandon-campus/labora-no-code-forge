import React from 'react';
import { Hammer } from 'lucide-react';

export default function ClasesManager() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-24 h-24 bg-labora-red/10 rounded-full flex items-center justify-center mb-6">
        <Hammer className="w-12 h-12 text-labora-red" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-4">Módulo en construcción</h1>
      <p className="text-gray-400 text-lg max-w-md">
        Aquí estará el generador de landings VSL para las clases gratuitas y campañas de captación (Próximamente).
      </p>
    </div>
  );
}
