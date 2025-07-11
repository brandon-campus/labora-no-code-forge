
import React from 'react';
import { ArrowRight } from 'lucide-react';

const PersuasiveHeader = () => {
  return (
    <a
      href="/bootcamp/aplicar"
      className="block w-full bg-gradient-to-r from-[#e54b5c] to-[#c1ff72] text-white py-2 text-center font-semibold transition-all hover:brightness-110"
    >
      <div className="flex items-center justify-center gap-2">
        <span>Campamento de entrenamiento en IA y No Code</span>
        <ArrowRight className="h-4 w-4" />
      </div>
    </a>
  );
};

export default PersuasiveHeader;
