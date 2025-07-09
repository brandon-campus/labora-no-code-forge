import React from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Hackatones = () => (
  <div className="min-h-screen bg-gray-950 text-gray-100 py-12">
    <div className="container mx-auto px-4 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-bold text-purple-400 mb-6 text-center">Hackatones Mensuales</h1>
      <p className="text-xl text-gray-300 mb-8 text-center">
        Vive la experiencia de resolver desafíos reales en equipo, de manera presencial, usando IA y No-Code. ¡Ideal para practicar, hacer networking y sumar proyectos a tu portfolio!
      </p>
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 rounded-3xl p-8 mb-8 shadow-lg">
        <h2 className="text-2xl font-bold text-white mb-4">¿Por qué participar?</h2>
        <ul className="list-disc list-inside text-gray-300 space-y-2 mb-4">
          <li>Desafíos reales del mercado</li>
          <li>Trabajo en equipo colaborativo</li>
          <li>Mentorías durante el evento</li>
          <li>Certificado de participación</li>
        </ul>
        <h3 className="text-xl font-semibold text-purple-400 mb-2">¿Cómo funciona?</h3>
        <ul className="list-decimal list-inside text-gray-400 space-y-1 mb-4">
          <li>Te inscribes y eliges tu equipo</li>
          <li>Recibes el desafío y recursos</li>
          <li>Trabajas en la solución con mentoría</li>
          <li>Presentas tu proyecto y recibes feedback</li>
        </ul>
        <div className="flex items-center justify-between mt-6">
          <span className="text-2xl font-bold text-purple-400">35 USD</span>
          <Link to="/bootcamp">
            <Button className="bg-purple-400 text-gray-900 hover:bg-purple-300 font-bold shadow-neon-glow">Inscribirme</Button>
          </Link>
        </div>
      </div>
      <div className="bg-gray-900/80 rounded-2xl p-6 mb-8">
        <h3 className="text-xl font-bold text-white mb-4">Preguntas frecuentes</h3>
        <ul className="space-y-3 text-gray-300">
          <li><strong>¿Es necesario tener experiencia?</strong> No, puedes sumarte con cualquier nivel de conocimiento.</li>
          <li><strong>¿Dónde se realizan?</strong> Son presenciales, en sedes anunciadas cada mes.</li>
          <li><strong>¿Puedo ir solo?</strong> ¡Sí! Te ayudamos a encontrar equipo si lo necesitas.</li>
        </ul>
      </div>
      <div className="text-center">
        <Link to="/bootcamp">
          <Button className="bg-purple-400 text-gray-900 hover:bg-purple-300 font-bold shadow-neon-glow text-lg px-8 py-4">¡Quiero participar!</Button>
        </Link>
      </div>
    </div>
  </div>
);

export default Hackatones; 