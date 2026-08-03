import React, { useState } from 'react';
import { Lightbulb, Layout, FileSearch, Rocket, Megaphone, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Lightbulb className="w-5 h-5 text-labora-red" />,
      title: "Idea y validación",
      description: "Definirás tu idea de producto y la validarás con técnicas de Design Thinking y métodos ágiles, identificando su potencial de mercado.",
      number: 1,
    },
    {
      icon: <Layout className="w-5 h-5 text-labora-red" />,
      title: "Arquitectura",
      description: "Diseñarás la estructura de tu producto, sus funcionalidades y experiencia de usuario, creando prototipos y mapas de navegación.",
      number: 2,
    },
    {
      icon: <FileSearch className="w-5 h-5 text-labora-red" />,
      title: "Desarrollo No-Code",
      description: "Implementarás tu producto utilizando herramientas de IA y No-Code como Lovable, Cursor AI y Supabase, con apoyo constante de entrenadores.",
      number: 3,
    },
    {
      icon: <Rocket className="w-5 h-5 text-labora-red" />,
      title: "Lanzamiento",
      description: "Prepararás tu producto para salir al mercado, con todas las configuraciones necesarias para su funcionamiento óptimo.",
      number: 4,
    },
    {
      icon: <Megaphone className="w-5 h-5 text-labora-red" />,
      title: "Adquisición de usuarios",
      description: "Aprenderás estrategias para promocionar tu producto y conseguir tus primeros usuarios o clientes, aplicando técnicas de growth hacking.",
      number: 5,
    },
    {
      icon: <Users className="w-5 h-5 text-labora-red" />,
      title: "Acompañamiento",
      description: "Durante todo el proceso contarás con el apoyo de entrenadores especializados que te guiarán y ayudarán a superar los desafíos.",
      number: 6,
    }
  ];

  const handleNext = () => {
    setActiveStep((prev) => Math.min(steps.length - 1, prev + 1));
  };

  const handlePrev = () => {
    setActiveStep((prev) => Math.max(0, prev - 1));
  };

  return (
    <section id="proceso" className="bg-[#f5f0ec] text-[#141414] py-14 px-4 sm:px-6">
      <div className="container mx-auto relative">
        
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl md:text-4xl font-black mb-4 text-[#141414] uppercase">
            <span className="text-labora-red">METODOLOGÍA</span> DEL PROGRAMA
          </h2>
          <p className="text-[#5c5c5c] text-[15px] sm:text-base max-w-2xl mx-auto leading-relaxed">
            Te acompañamos desde la idea hasta el lanzamiento de tu producto, siguiendo una metodología clara y efectiva.
          </p>
        </div>

        {/* Timeline Desktop Navigation */}
        <div className="hidden md:block mb-16 max-w-5xl mx-auto relative px-8">
          <div className="absolute top-6 left-[10%] right-[10%] h-1 bg-[#e8e4de] rounded-full"></div>
          
          <div className="flex justify-between relative z-10">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col items-center cursor-pointer w-32 group"
                onClick={() => setActiveStep(index)}
              >
                <div className={cn(
                  "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mb-3 transition-all duration-300 relative",
                  activeStep === index 
                    ? "bg-gradient-to-br from-labora-red/10 to-labora-neon/10" 
                    : "bg-white border-2 border-[#e8e4de] shadow-sm group-hover:border-labora-neon/50"
                )}>
                  {activeStep === index && (
                    <div className="absolute inset-[-4px] rounded-full border-2 border-labora-neon/70 shadow-[0_0_12px_rgba(170,255,0,0.3)]"></div>
                  )}
                  <div className={cn(
                    "w-full h-full flex items-center justify-center rounded-full z-10 text-xl",
                    activeStep === index 
                      ? "bg-gradient-to-br from-[#e54b5c] to-[#e54b5c]/80 text-white" 
                      : "text-gray-500"
                  )}>
                    {step.number}
                  </div>
                </div>
                <span className={cn(
                  "text-[14px] font-bold transition-colors text-center leading-[1.2]",
                  activeStep === index ? "text-labora-red" : "text-[#5c5c5c] group-hover:text-[#141414]"
                )}>
                  {step.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-3xl mx-auto overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${activeStep * 100}%)` }}
          >
            {steps.map((step, index) => (
              <div key={index} className="w-full flex-shrink-0 text-center px-4">
                <div className="relative w-24 h-24 mx-auto mb-8">
                  <div className="w-24 h-24 rounded-[26px] bg-labora-neon flex items-center justify-center text-[2.4rem] font-extrabold text-[#141414]">
                    {step.number}
                  </div>
                  <div className="absolute -bottom-1.5 -right-2.5 w-10 h-10 rounded-full bg-white shadow-[0_4px_14px_rgba(0,0,0,0.12)] flex items-center justify-center">
                    {step.icon}
                  </div>
                </div>
                
                <h3 className="text-[1.5rem] font-black tracking-[0.3px] uppercase mb-4">
                  {step.title}
                </h3>
                
                <p className="text-[15px] text-[#5c5c5c] leading-[1.65] max-w-[340px] mx-auto min-h-[80px]">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Carousel controls (Dots and arrows) */}
        <div className="flex md:hidden items-center justify-center gap-4 mt-6">
          <button 
            onClick={handlePrev}
            disabled={activeStep === 0}
            className="p-2 rounded-full bg-white shadow-sm border border-gray-200 disabled:opacity-30 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center justify-center gap-2 px-4">
            {steps.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setActiveStep(i)}
                className={cn(
                  "cursor-pointer transition-all",
                  i === activeStep 
                    ? "w-[34px] h-[5px] rounded-[4px] bg-gradient-to-r from-labora-red to-labora-neon" 
                    : "w-1.5 h-1.5 rounded-full bg-[#c9c9c1]"
                )}
              ></div>
            ))}
          </div>

          <button 
            onClick={handleNext}
            disabled={activeStep === steps.length - 1}
            className="p-2 rounded-full bg-white shadow-sm border border-gray-200 disabled:opacity-30 text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>

      </div>
    </section>
  );
};

export default ProcessSection;
