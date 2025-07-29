import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';

const HeaderCurso = ({ nombre, onPerfil, onLogout }: { nombre: string; onPerfil: () => void; onLogout: () => void }) => {
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [open]);

  return (
    <header className="w-full bg-[#101A2C] flex justify-end items-center px-8 py-4 shadow">
      <div className="relative" ref={menuRef}>
        <button
          className="flex items-center gap-2 bg-labora-neon text-black font-bold px-4 py-2 rounded-full shadow hover:bg-labora-neon/80 transition"
          onClick={() => setOpen((v) => !v)}
        >
          {nombre}
          <ChevronDown size={18} />
        </button>
        {open && (
          <div className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg border z-50">
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 font-medium rounded-t-lg"
              onClick={() => { setOpen(false); onPerfil(); }}
            >
              Perfil
            </button>
            <button
              className="w-full text-left px-4 py-2 hover:bg-gray-100 text-gray-800 font-medium rounded-b-lg"
              onClick={() => { setOpen(false); onLogout(); }}
            >
              Cerrar sesión
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default HeaderCurso; 