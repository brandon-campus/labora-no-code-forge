import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Video, Calendar, ArrowRight } from 'lucide-react';

export default function AdminHub() {
  const modules = [
    {
      title: 'Cohortes',
      description: 'Edita fechas, precios y promociones del bootcamp sin tocar código.',
      icon: Calendar,
      path: '/admin/cohortes',
      color: 'bg-labora-neon/20 text-labora-neon',
      borderColor: 'border-labora-neon/30',
      hoverColor: 'group-hover:border-labora-neon'
    },
    {
      title: 'Leads (Formulario)',
      description: 'Gestión de formulario propio y registros de alumnos.',
      icon: Users,
      path: '/admin/leads',
      color: 'bg-blue-500/20 text-blue-400',
      borderColor: 'border-blue-500/30',
      hoverColor: 'group-hover:border-blue-400'
    },
    {
      title: 'Clases Gratuitas',
      description: 'Generador de landings tipo VSL a partir de plantillas.',
      icon: Video,
      path: '/admin/clases',
      color: 'bg-labora-red/20 text-labora-red',
      borderColor: 'border-labora-red/30',
      hoverColor: 'group-hover:border-labora-red'
    }
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <div className="mb-10">
        <h1 className="text-4xl font-bold text-white mb-2">Panel de Control</h1>
        <p className="text-gray-400 text-lg">Selecciona un módulo para administrar.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {modules.map((mod, idx) => {
          const Icon = mod.icon;
          return (
            <Link 
              key={idx} 
              to={mod.path}
              className={`group flex flex-col p-6 rounded-2xl bg-gray-900 border ${mod.borderColor} ${mod.hoverColor} transition-all duration-300 hover:bg-gray-800/80 hover:-translate-y-1 shadow-lg`}
            >
              <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${mod.color}`}>
                <Icon className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-3">{mod.title}</h2>
              <p className="text-gray-400 flex-grow mb-6">{mod.description}</p>
              
              <div className="flex items-center text-sm font-semibold text-gray-300 group-hover:text-white mt-auto">
                Acceder al módulo
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
