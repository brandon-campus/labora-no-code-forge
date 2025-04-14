
import React, { useState } from 'react';
import { Lightbulb, Layout, FileSearch, Rocket, Megaphone, Users, ArrowLeft, ArrowRight } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface ProcessStepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
  isActive?: boolean;
}

const ProcessStep = ({ icon, title, description, number, isActive = false }: ProcessStepProps) => {
  return (
    <div className={`flex flex-col gap-6 transition-all duration-300 h-full ${isActive ? 'scale-105' : 'opacity-80'}`}>
      <div className="flex items-center justify-center">
        <div className="w-16 h-16 bg-labora-neon rounded-full flex items-center justify-center text-labora-dark font-bold text-xl relative mx-auto">
          {number}
          <div className="absolute -right-1 -bottom-1 w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-md">
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
    <section id="proceso" className="process-gradient py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
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
            {/* Progress line */}
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 -translate-y-1/2"></div>
            <div 
              className="absolute top-1/2 left-0 h-1 bg-labora-red -translate-y-1/2 transition-all duration-700"
              style={{ width: `${(activeStep / (steps.length - 1)) * 100}%` }}
            ></div>
            
            {/* Step indicators */}
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`relative flex flex-col items-center cursor-pointer z-10`}
                onClick={() => handleStepChange(index)}
              >
                <div 
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-300
                    ${index <= activeStep ? 'bg-labora-red text-white' : 'bg-white text-gray-500 border-2 border-gray-200'}`}
                >
                  {step.number}
                </div>
                <span 
                  className={`mt-2 text-sm font-medium transition-all duration-300
                    ${index <= activeStep ? 'text-labora-red' : 'text-gray-500'}`}
                >
                  {step.title}
                </span>
              </div>
            ))}
          </div>
          
          {/* Active step details */}
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-4xl mx-auto">
            <div className="flex items-start gap-8">
              <div className="w-20 h-20 bg-labora-neon/10 rounded-full flex-shrink-0 flex items-center justify-center">
                <div className="w-12 h-12 bg-labora-neon rounded-full flex items-center justify-center text-labora-dark font-bold text-xl">
                  {steps[activeStep].number}
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-4 text-labora-dark">{steps[activeStep].title}</h3>
                <p className="text-gray-600 text-lg">{steps[activeStep].description}</p>
              </div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button 
                onClick={() => handleStepChange(Math.max(0, activeStep - 1))}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors
                  ${activeStep > 0 ? 'text-labora-red hover:bg-labora-red/5' : 'text-gray-300 cursor-not-allowed'}`}
                disabled={activeStep === 0}
              >
                <ArrowLeft className="h-4 w-4" />
                Anterior
              </button>
              <button 
                onClick={() => handleStepChange(Math.min(steps.length - 1, activeStep + 1))}
                className={`flex items-center gap-2 px-4 py-2 rounded-md transition-colors
                  ${activeStep < steps.length - 1 ? 'text-labora-red hover:bg-labora-red/5' : 'text-gray-300 cursor-not-allowed'}`}
                disabled={activeStep === steps.length - 1}
              >
                Siguiente
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
        
        {/* Mobile view - Carousel */}
        <div className="lg:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
            onSelect={(api) => {
              const selectedIndex = api?.selectedScrollSnap() || 0;
              setActiveStep(selectedIndex);
            }}
          >
            <CarouselContent>
              {steps.map((step, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-4">
                    <ProcessStep
                      icon={step.icon}
                      title={step.title}
                      description={step.description}
                      number={step.number}
                      isActive={index === activeStep}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative left-0 right-auto" />
              <CarouselNext className="relative right-0 left-auto" />
            </div>
          </Carousel>
          
          {/* Progress Indicators */}
          <div className="flex justify-center gap-2 mt-6">
            {steps.map((_, index) => (
              <div 
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${index === activeStep ? 'bg-labora-red w-4' : 'bg-gray-300'}`}
                onClick={() => handleStepChange(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
