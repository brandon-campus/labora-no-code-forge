import React from 'react';
import { Database, Code2, Triangle, Workflow, Github, Sparkles } from 'lucide-react';

const HeroSectionOferta = () => {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden flex flex-col justify-center pt-24 pb-10">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-20%] right-[-10%] w-[70%] h-[70%] rounded-full bg-pink-600/20 blur-[150px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] rounded-full bg-fuchsia-900/20 blur-[150px]" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 flex-1 flex flex-col items-center text-center gap-8 max-w-4xl">
        
        {/* Header / Logo */}
        <div className="mb-2">
          <h3 className="text-gray-300 text-lg md:text-xl font-medium tracking-wide">Academia Labora</h3>
          <h1 className="text-4xl md:text-5xl font-extrabold flex items-center justify-center gap-2 mt-1">
            <span className="text-labora-neon">IA</span> NoCode<span className="text-pink-500">.</span>
          </h1>
        </div>

        {/* Offer Text */}
        <div className="space-y-2">
          <p className="text-2xl md:text-3xl font-semibold text-white mb-2">
            Este viernes y sábado
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-2 md:gap-6 leading-none">
            <h2 className="text-[6rem] md:text-[8rem] lg:text-[10rem] font-black text-labora-neon tracking-tighter drop-shadow-[0_0_20px_rgba(204,255,0,0.25)]">
              30%
            </h2>
            <h2 className="text-[5rem] md:text-[7rem] lg:text-[9rem] font-black text-white tracking-tighter">
              OFF
            </h2>
          </div>
          <p className="text-xl md:text-2xl text-gray-300 font-medium mt-4 max-w-2xl mx-auto">
            en nuestros programas <span className="text-labora-neon font-bold">Inicial y Avanzado.</span>
          </p>
        </div>

        <div className="w-24 h-1 bg-gray-600 my-4 rounded-full"></div>

        <a 
          href="/bootcamp/aplicar" 
          className="mt-6 bg-labora-neon text-black px-12 py-5 rounded-full font-bold text-xl hover:bg-white hover:text-black transition-all duration-300 transform hover:scale-105 shadow-[0_0_20px_rgba(204,255,0,0.4)]"
        >
          ¡Quiero mi descuento!
        </a>
      </div>

      {/* Logos Row */}
      <div className="container mx-auto px-4 mt-16 md:mt-24 relative z-10 border-t border-gray-800/60 pt-8 pb-4">
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-75">
          <div className="flex items-center gap-2"><Triangle className="text-[#3ECF8E] w-6 h-6" fill="currentColor" /> <span className="font-semibold text-lg">supabase</span></div>
          <div className="flex items-center gap-2"><Sparkles className="text-orange-400 w-6 h-6" /> <span className="font-semibold text-lg">Claude Code</span></div>
          <div className="flex items-center gap-2"><Triangle className="text-white rotate-180 w-6 h-6" fill="currentColor" /> <span className="font-semibold text-lg">Vercel</span></div>
          <div className="flex items-center gap-2"><Workflow className="text-red-500 w-6 h-6" /> <span className="font-semibold text-lg">n8n</span></div>
          <div className="flex items-center gap-2"><Github className="text-white w-6 h-6" /> <span className="font-semibold text-lg">GitHub</span></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSectionOferta;
