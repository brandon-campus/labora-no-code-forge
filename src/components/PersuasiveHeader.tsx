
import React from 'react';
import { ArrowRight } from 'lucide-react';

const PersuasiveHeader = () => {
  return (
    <a
      href="https://tally.so/r/w49bBo"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed top-0 left-0 z-50 block w-full bg-gradient-to-r from-[#e54b5c] to-[#c1ff72] text-white py-2 text-center font-semibold transition-all hover:brightness-110"
    >
      <div className="flex items-center justify-center gap-2">
        <span>30% de Descuento - Aplicar ahora</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
};

export default PersuasiveHeader;
