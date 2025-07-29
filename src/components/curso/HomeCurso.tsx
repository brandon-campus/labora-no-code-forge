import React from 'react';

const HomeCurso = ({ nombre, camino, progreso, curso, onIrLecciones }: {
  nombre: string;
  camino: string;
  progreso: number;
  curso: { titulo: string };
  onIrLecciones: () => void;
}) => {
  return (
    <div className="w-full max-w-3xl mx-auto mt-10">
      <h1 className="text-3xl font-bold text-white mb-2">¡Hola, {nombre}!</h1>
      <p className="text-labora-neon font-semibold mb-6">Tu camino es: {camino === 'proyecto' ? 'Desarrollar mi proyecto' : 'Trabajar en Proyectos Para cliente'}</p>
      <h2 className="text-xl text-white font-bold mb-4">Continúa aprendiendo</h2>
      <div className="bg-[#101A2C] rounded-2xl shadow-lg p-8 flex flex-col md:flex-row items-center gap-8">
        <div className="flex-1">
          <h3 className="text-2xl font-bold text-labora-neon mb-2">{curso.titulo}</h3>
          <div className="mb-4">
            <div className="text-sm text-gray-300 mb-1">Progreso</div>
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div className="bg-labora-neon h-2 rounded-full" style={{ width: `${progreso}%` }} />
            </div>
            <div className="text-xs text-gray-200 font-semibold">{Math.round(progreso)}% completado</div>
          </div>
          <button
            className="bg-labora-neon text-black font-bold px-6 py-3 rounded-lg shadow hover:bg-labora-neon/80 transition"
            onClick={onIrLecciones}
          >
            Ir al curso
          </button>
        </div>
        {/* Aquí podrías agregar imagen o ícono del curso */}
      </div>
    </div>
  );
};

export default HomeCurso; 