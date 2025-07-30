import React from 'react';
import { Home, BookOpen, CreditCard } from 'lucide-react';

export type VistaCurso = 'home' | 'cursos' | 'pagos' | 'lecciones';

const SidebarCurso = ({ active, onNavigate, progreso }: { active: VistaCurso; onNavigate: (section: VistaCurso) => void; progreso: number }) => {
  return (
    <aside className="w-16 lg:w-20 bg-white/10 backdrop-blur-lg border-r border-labora-neon/20 flex flex-col items-center pt-[6rem] lg:pt-[7rem] py-6 lg:py-8 min-h-screen relative">
      <button
        className={`mb-6 lg:mb-8 ${active === 'home' ? 'text-labora-neon' : 'text-white'} hover:text-labora-neon transition-colors`}
        onClick={() => onNavigate('home')}
        title="Home"
      >
        <Home size={24} className="lg:w-7 lg:h-7" />
      </button>
      <button
        className={`mb-6 lg:mb-8 ${active === 'cursos' ? 'text-labora-neon' : 'text-white'} hover:text-labora-neon transition-colors`}
        onClick={() => onNavigate('cursos')}
        title="Mis cursos"
      >
        <BookOpen size={24} className="lg:w-7 lg:h-7" />
      </button>
      <button
        className={`${active === 'pagos' ? 'text-labora-neon' : 'text-white'} hover:text-labora-neon transition-colors`}
        onClick={() => onNavigate('pagos')}
        title="Mis pagos"
      >
        <CreditCard size={24} className="lg:w-7 lg:h-7" />
      </button>
      <div className="absolute bottom-6 lg:bottom-8 left-0 w-full px-2 lg:px-4">
        <div className="h-1.5 lg:h-2 bg-white/20 rounded-full overflow-hidden">
          <div className="h-1.5 lg:h-2 bg-labora-neon transition-all duration-500 shadow-neon-glow" style={{ width: `${progreso}%` }} />
        </div>
        <div className="text-[8px] lg:text-[10px] text-gray-300 font-semibold mt-1 text-center">{Math.round(progreso)}%</div>
      </div>
    </aside>
  );
};

export default SidebarCurso; 