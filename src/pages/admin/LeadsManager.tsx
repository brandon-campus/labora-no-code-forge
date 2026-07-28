import React from 'react';
import { Hammer } from 'lucide-react';

export default function LeadsManager() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <div className="w-24 h-24 bg-blue-500/10 rounded-full flex items-center justify-center mb-6">
        <Hammer className="w-12 h-12 text-blue-500" />
      </div>
      <h1 className="text-3xl font-bold text-white mb-4">Módulo en construcción</h1>
      <p className="text-gray-400 text-lg max-w-md">
        Aquí estará el reemplazo de Tally Forms. Gestor de formularios públicos y registros de leads (Próximamente).
      </p>
    </div>
  );
}
