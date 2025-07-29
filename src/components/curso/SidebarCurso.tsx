import React from 'react';
import { Home, BookOpen, CreditCard } from 'lucide-react';

export type VistaCurso = 'home' | 'cursos' | 'pagos' | 'lecciones';

const SidebarCurso = ({ active, onNavigate, progreso }: { active: VistaCurso; onNavigate: (section: VistaCurso) => void; progreso: number }) => {
  return (
    <aside className="w-20 bg-[#101A2C] flex flex-col items-center pt-[7rem] py-8 min-h-screen relative">
      <button
        className={`mb-8 ${active === 'home' ? 'text-labora-neon' : 'text-white'} hover:text-labora-neon transition`}
        onClick={() => onNavigate('home')}
        title="Home"
      >
        <Home size={28} />
      </button>
      <button
        className={`mb-8 ${active === 'cursos' ? 'text-labora-neon' : 'text-white'} hover:text-labora-neon transition`}
        onClick={() => onNavigate('cursos')}
        title="Mis cursos"
      >
        <BookOpen size={28} />
      </button>
      <button
        className={`${active === 'pagos' ? 'text-labora-neon' : 'text-white'} hover:text-labora-neon transition`}
        onClick={() => onNavigate('pagos')}
        title="Mis pagos"
      >
        <CreditCard size={28} />
      </button>
      <div className="absolute bottom-8 left-0 w-full px-4">
        <div className="h-2 bg-gray-700 rounded-full overflow-hidden">
          <div className="h-2 bg-labora-neon transition-all duration-500" style={{ width: `${progreso}%` }} />
        </div>
        <div className="text-[10px] text-gray-300 font-semibold mt-1 text-center">{Math.round(progreso)}%</div>
      </div>
    </aside>
  );
};

export default SidebarCurso; 