import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const CursoInicia = () => (
  <div className="min-h-screen bg-gray-950 text-gray-100 py-12">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold text-labora-neon mb-6 text-center">Curso "Inicia"</h1>
      <p className="text-xl text-gray-300 mb-8 text-center">
        El curso on-demand perfecto para principiantes absolutos que quieren una base sólida en IA y No-Code, sin horarios ni complicaciones.
      </p>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 rounded-3xl p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">¿Qué incluye?</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Contenido esencial de IA y No-Code</li>
          <li>Casos prácticos paso a paso</li>
          <li>Ejercicios interactivos</li>
          <li>Acceso de por vida</li>
        </ul>
        <h3 className="text-xl font-semibold text-labora-neon mb-2">Temario resumido</h3>
        <ul className="list-decimal list-inside text-gray-400 space-y-1 mb-4">
          <li>Introducción a la IA y No-Code</li>
          <li>Herramientas clave para crear sin programar</li>
          <li>Automatización de tareas y procesos</li>
          <li>Mini-proyecto final: tu primer producto digital</li>
        </ul>
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-labora-neon">65 USD</span>
          <Link to="/bootcamp">
            <Button className="bg-labora-neon text-gray-900 hover:bg-labora-neon/80 font-bold shadow-neon-glow">Inscribirme</Button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-900/80 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-4">Preguntas frecuentes</h3>
        <ul className="space-y-3 text-gray-300">
          <li><strong>¿Necesito experiencia previa?</strong> No, el curso está pensado para quienes empiezan desde cero.</li>
          <li><strong>¿Cuánto tiempo tengo acceso?</strong> Acceso de por vida al contenido.</li>
          <li><strong>¿Recibo certificado?</strong> Sí, al completar el curso obtienes un certificado digital.</li>
        </ul>
      </div>
      <div className="text-center">
        <Link to="/bootcamp">
          <Button className="bg-labora-neon text-gray-900 hover:bg-labora-neon/80 font-bold shadow-neon-glow text-lg px-8 py-4">¡Quiero empezar!</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default CursoInicia; 