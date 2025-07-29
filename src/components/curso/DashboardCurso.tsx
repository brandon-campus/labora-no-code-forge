import React from 'react';

const DashboardCurso = ({ nombre, progreso, camino, cursoPagado, onIrLecciones, onIrPago }: {
  nombre: string;
  progreso: number;
  camino: string;
  cursoPagado: boolean;
  onIrLecciones: () => void;
  onIrPago: () => void;
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto bg-[#101A2C] rounded-2xl shadow-lg p-8 mt-10 text-white">
      <h1 className="text-3xl font-bold mb-2">¡Hola, {nombre}!</h1>
      <p className="mb-6 text-labora-neon font-semibold">Tu camino: {camino === 'proyecto' ? 'Desarrollar mi proyecto' : 'Proyectos para clientes'}</p>
      <div className="mb-6">
        <div className="text-sm mb-1">Progreso del curso</div>
        <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
          <div className="bg-labora-neon h-2 rounded-full" style={{ width: `${progreso}%` }} />
        </div>
        <div className="text-xs text-gray-200 font-semibold">{Math.round(progreso)}% completado</div>
      </div>
      <div className="flex flex-col md:flex-row gap-4 mb-6">
        <button
          className="flex-1 bg-labora-neon text-black font-bold py-3 rounded-lg shadow hover:bg-labora-neon/80 transition"
          onClick={onIrLecciones}
        >
          Ir a las lecciones
        </button>
        {!cursoPagado && (
          <button
            className="flex-1 bg-white text-labora-neon font-bold py-3 rounded-lg shadow border-2 border-labora-neon hover:bg-gray-100 transition"
            onClick={onIrPago}
          >
            Pagar y desbloquear todo
          </button>
        )}
      </div>
      <div className="text-center mt-4">
        <a href="https://wa.me/5491178519054" target="_blank" rel="noopener noreferrer" className="text-labora-neon font-semibold hover:underline">Soporte por WhatsApp</a>
      </div>
    </div>
  );
};

export default DashboardCurso; 