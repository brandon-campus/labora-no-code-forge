import React, { useState } from 'react';
import { Lightbulb, Layout, FileSearch, Rocket, Megaphone, Users, ArrowLeft, ArrowRight, CircuitBoard, Cpu } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext, type CarouselApi } from "@/components/ui/carousel";
import { cn } from "@/lib/utils";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  isActive?: boolean;
}

const ProcessStep = ({ icon, title, description, number, isActive = false }: ProcessStepProps) => {
  return (
    <div className={cn(
      "flex flex-col gap-6 transition-all duration-500 h-full",
      isActive ? "scale-105" : "opacity-80",
      "group hover:scale-105"
    )}>
      <div className="flex items-center justify-center">
        <div className={cn(
          "w-16 h-16 rounded-full flex items-center justify-center text-xl relative mx-auto",
          "bg-gradient-to-br from-labora-neon to-labora-neon/80 text-labora-dark font-bold",
          "before:absolute before:inset-0 before:rounded-full before:bg-labora-neon/20",
          "before:animate-pulse before:blur-sm",
          isActive && "ring-4 ring-labora-neon/30"
        )}>
          {number}
          <div className={cn(
            "absolute -right-1 -bottom-1 w-8 h-8 bg-white rounded-full",
            "flex items-center justify-center shadow-lg",
            "transition-transform duration-300 group-hover:scale-110",
            "border border-labora-neon/20"
          )}>
            {icon}
          </div>
        </div>
      </div>
      <div className="text-center">
        <h3 className="text-xl font-semibold mb-4 text-labora-dark">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      icon: <Lightbulb className="h-4 w-4 text-labora-red" />,
      title: "Idea y validación",
      description: "Definirás tu idea de producto y la validarás con técnicas de Design Thinking y métodos ágiles, identificando su potencial de mercado.",
      number: 1,
    },
    {
      icon: <Layout className="h-4 w-4 text-labora-red" />,
      title: "Arquitectura",
      description: "Diseñarás la estructura de tu producto, sus funcionalidades y experiencia de usuario, creando prototipos y mapas de navegación.",
      number: 2,
    },
    {
      icon: <FileSearch className="h-4 w-4 text-labora-red" />,
      title: "Desarrollo No-Code",
      description: "Implementarás tu producto utilizando herramientas de IA y No-Code como Lovable, Cursor AI y Supabase, con apoyo constante de entrenadores.",
      number: 3,
    },
    {
      icon: <Rocket className="h-4 w-4 text-labora-red" />,
      title: "Lanzamiento",
      description: "Prepararás tu producto para salir al mercado, con todas las configuraciones necesarias para su funcionamiento óptimo.",
      number: 4,
    },
    {
      icon: <Megaphone className="h-4 w-4 text-labora-red" />,
      title: "Adquisición de usuarios",
      description: "Aprenderás estrategias para promocionar tu producto y conseguir tus primeros usuarios o clientes, aplicando técnicas de growth hacking.",
      number: 5,
    },
    {
      icon: <Users className="h-4 w-4 text-labora-red" />,
      title: "Acompañamiento",
      description: "Durante todo el proceso contarás con el apoyo de entrenadores especializados que te guiarán y ayudarán a superar los desafíos.",
      number: 6,
    }
  ];

  const handleStepChange = (index: number) => {
    setActiveStep(index);
  };

  return (
    <section id="proceso" className="relative process-gradient py-20 overflow-hidden">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat"></div>
      </div>

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full bg-white/5 backdrop-blur-sm border border-labora-red/20">
            <CircuitBoard className="h-5 w-5 text-labora-red" />
            <span className="text-gray-600 text-sm font-medium">Proceso paso a paso</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-labora-dark">
            <span className="text-labora-red">Metodología</span> del programa
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Te acompañamos desde la idea hasta el lanzamiento de tu producto, siguiendo una metodología clara y efectiva.
          </p>
        </div>
        
        {/* Desktop view - Horizontal process with numbers and active indicators */}
        <div className="hidden lg:block relative">
          <div className="flex justify-between items-center mb-12 max-w-5xl mx-auto relative">
            {/* Progress line with tech pattern */}
            <div className="absolute top-1/2 left-0 right-0 -translate-y-1/2">
              <div className="h-1 bg-gray-200 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat-x opacity-20"></div>
              </div>
              <div 
                className={cn(
                  "absolute top-0 left-0 h-1 transition-all duration-700",
                  "bg-gradient-to-r from-labora-red via-labora-neon to-labora-red",
                  "animate-pulse"
                )}
                style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
              ></div>
            </div>
            
            {/* Step indicators */}
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={cn(
                  "relative flex flex-col items-center cursor-pointer z-10",
                  "transition-transform duration-300 hover:scale-110"
                )}
                onClick={() => handleStepChange(index)}
              >
                <div 
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg",
                    "transition-all duration-300 transform",
                    "hover:shadow-lg hover:shadow-labora-neon/20",
                    index <= activeStep ? [
                      "bg-gradient-to-br from-labora-red to-labora-neon text-white",
                      "ring-2 ring-labora-neon ring-offset-2",
                      index === activeStep && "animate-pulse"
                    ] : "bg-white text-gray-500 border-2 border-gray-200"
                  )}
                >
                  {step.number}
                </div>
                <span 
                  className={cn(
                    "mt-2 text-sm font-medium transition-all duration-300",
                    index <= activeStep ? "text-labora-red" : "text-gray-500"
                  )}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          
          {/* Active step details */}
          <div className={cn(
            "relative bg-white rounded-xl p-8 shadow-lg max-w-4xl mx-auto",
            "border border-labora-neon/20",
            "before:absolute before:inset-0 before:rounded-xl",
            "before:bg-gradient-to-r before:from-labora-neon/5 before:to-labora-red/5",
            "before:opacity-50 before:-z-10",
            "animate-fade-in-up"
          )}>
            {/* Corner decorations */}
            <div className="absolute -top-1 -left-1 w-4 h-4 border-t-2 border-l-2 border-labora-neon rounded-tl-xl"></div>
            <div className="absolute -top-1 -right-1 w-4 h-4 border-t-2 border-r-2 border-labora-neon rounded-tr-xl"></div>
            <div className="absolute -bottom-1 -left-1 w-4 h-4 border-b-2 border-l-2 border-labora-neon rounded-bl-xl"></div>
            <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-labora-neon rounded-br-xl"></div>

            <div className="flex items-start gap-8">
              <div className={cn(
                "w-20 h-20 rounded-full flex-shrink-0",
                "bg-gradient-to-br from-labora-neon/20 to-labora-red/20",
                "flex items-center justify-center",
                "relative"
              )}>
                <div className={cn(
                  "w-12 h-12 rounded-full",
                  "bg-gradient-to-br from-labora-neon to-labora-red",
                  "flex items-center justify-center",
                  "text-white font-bold text-xl",
                  "shadow-lg shadow-labora-neon/20",
                  "animate-pulse"
                )}>
                  {steps[activeStep].number}
                </div>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className="text-2xl font-bold text-labora-dark">{steps[activeStep].title}</h3>
                  {steps[activeStep].icon}
                </div>
                <p className="text-gray-600 text-lg">{steps[activeStep].description}</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center mt-8">
              <button 
                onClick={() => handleStepChange(Math.max(0, activeStep - 1))}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md",
                  "transition-all duration-300",
                  "hover:bg-labora-red/5 hover:scale-105",
                  activeStep > 0 ? "text-labora-red" : "text-gray-300 cursor-not-allowed"
                )}
                disabled={activeStep === 0}
              >
                <ArrowLeft className="h-4 w-4" />
                Anterior
              </button>

              <div className="flex items-center gap-2 text-sm text-gray-500">
                <Cpu className="h-4 w-4" />
                <span>{activeStep + 1}/{steps.length}</span>
              </div>

              <button 
                onClick={() => handleStepChange(Math.min(steps.length - 1, activeStep + 1))}
                className={cn(
                  "flex items-center gap-2 px-4 py-2 rounded-md",
                  "transition-all duration-300",
                  "hover:bg-labora-red/5 hover:scale-105",
                  activeStep < steps.length - 1 ? "text-labora-red" : "text-gray-300 cursor-not-allowed"
                )}
                disabled={activeStep === steps.length - 1}
              >
                Siguiente
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile view - Custom navigation */}
        <div className="lg:hidden">
          <div className="relative overflow-hidden">
            <div 
              className="transition-transform duration-500 ease-in-out flex"
              style={{ transform: `translateX(-${activeStep * 100}%)` }}
            >
              {steps.map((step, index) => (
                <div 
                  key={index} 
                  className="w-full flex-shrink-0 px-4"
                >
                  <ProcessStep
                    icon={step.icon}
                    title={step.title}
                    description={step.description}
                    number={step.number}
                    isActive={index === activeStep}
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-between mt-8 px-4">
            <button 
              onClick={() => handleStepChange(Math.max(0, activeStep - 1))}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md",
                "transition-all duration-300",
                "hover:bg-labora-red/5 hover:scale-105",
                "border border-gray-200",
                activeStep > 0 ? "text-labora-red bg-white" : "text-gray-300 cursor-not-allowed bg-gray-50"
              )}
              disabled={activeStep === 0}
            >
              <ArrowLeft className="h-4 w-4" />
              Anterior
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-500 bg-white px-3 py-1 rounded-full border border-gray-200">
              <Cpu className="h-4 w-4" />
              <span>{activeStep + 1}/{steps.length}</span>
            </div>

            <button 
              onClick={() => handleStepChange(Math.min(steps.length - 1, activeStep + 1))}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-md",
                "transition-all duration-300",
                "hover:bg-labora-red/5 hover:scale-105",
                "border border-gray-200",
                activeStep < steps.length - 1 ? "text-labora-red bg-white" : "text-gray-300 cursor-not-allowed bg-gray-50"
              )}
              disabled={activeStep === steps.length - 1}
            >
              Siguiente
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
          
          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <button
                key={index}
                onClick={() => handleStepChange(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300",
                  "cursor-pointer hover:opacity-80",
                  index === activeStep ? [
                    "w-8 bg-gradient-to-r from-labora-red to-labora-neon",
                    "animate-pulse"
                  ] : "w-2 bg-gray-300"
                )}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
