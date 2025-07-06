import React, { useState, useEffect } from 'react';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface Testimonial {
  name: string;
  country: string;
  flag: string;
  image: string;
  quote: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Sebastián Acuña",
    country: "Argentina",
    flag: "🇦🇷",
    image: "/lovable-uploads/sebasacuna.png",
    quote: "Hoy me di cuenta de lo importante que fue todo lo que aprendimos: me ayudó a desbloquearme, a entender, y sobre todo, a creer que ya estoy listo para empezar a crear por mi cuenta. Me siento muy agradecido."
  },
  {
    name: "Alirio Aguirre",
    country: "Colombia",
    flag: "🇨🇴",
    image: "/lovable-uploads/alirioaguirre.png",
    quote: "Ya hice cinco aplicaciones y estoy enamorado de cómo las construí gracias al bootcamp. Logré hacer cosas que nunca pensé posibles. Ahora solo me queda montarlas y darles los últimos detalles. Estoy feliz porque incluso pude aplicar lo que sé sobre juegos de azar, donde soy experto."
  },
  {
    name: "German Dominguez",
    country: "Chile",
    flag: "🇨🇱",
    image: "/lovable-uploads/german1.png",
    quote: "Me emociona todo lo que puedo llegar a aprender después de escuchar cada clase. Cada encuentro me deja con más ganas de seguir creciendo."
  },
  {
    name: "Lucas Parolini",
    country: "Argentina",
    flag: "🇦🇷",
    image: "/lovable-uploads/lucas.png",
    quote: "Estoy emocionado con el comienzo del bootcamp. Quiero aprender a fondo cómo utilizar herramientas de inteligencia artificial."
  },
  {
    name: "Mauricio Madelat",
    country: "México",
    flag: "🇲🇽",
    image: "/lovable-uploads/mauricio.png",
    quote: "Tenía un proyecto que venía planeando durante años. He podido crear mi Plataforma completa en este bootcamp y realmente me he desafiado a no solo a hacer un MVP sino un producto completo. Está increíble."
  }
];

interface TestimonialsSectionProps {
  lightBg?: boolean;
}

const TestimonialsSection = ({ lightBg = false }: TestimonialsSectionProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => 
      (prevIndex + 1) % testimonials.length
    );
  };

  return (
    <section id="testimonials" className={`relative py-20 ${lightBg ? 'bg-white' : 'bg-gray-950'} overflow-hidden`}>
      {/* Tech Grid Background */}
      {!lightBg && (
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-5"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950 to-gray-950"></div>
        </div>
      )}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className={cn(
            "inline-flex items-center gap-2 mb-4 px-4 py-2 rounded-full",
            "bg-gray-900/80 backdrop-blur-sm",
            "border border-labora-neon/20",
            "shadow-[0_0_20px_rgba(0,255,170,0.1)]"
          )}>
            <Quote className="h-5 w-5 text-labora-neon" />
            <span className="text-gray-200 text-sm font-medium">Historias de éxito</span>
          </div>
          <h2 className={cn(
            "text-4xl md:text-5xl font-bold mb-6",
            "bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent",
            "tracking-tight"
          )}>
            Lo que dicen nuestros estudiantes
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto leading-relaxed">
            Descubrí cómo nuestros estudiantes están transformando sus carreras y creando productos increíbles.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto relative">
          <div className="relative h-[400px]">
          {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className={cn(
                  "absolute inset-0 transition-all duration-500",
                  "flex flex-col items-center text-center",
                  "bg-gray-900/80 backdrop-blur-sm rounded-xl p-8",
                  "border border-gray-800/50",
                  "shadow-[0_0_30px_rgba(0,0,0,0.3)]",
                  index === currentIndex ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
                )}
              >
                <div className="w-24 h-24 rounded-full overflow-hidden mb-6 border-2 border-labora-neon/30">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex items-center gap-2 mb-4">
                  <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
                  <span className="text-2xl">{testimonial.flag}</span>
              </div>
                <p className="text-gray-300 text-lg leading-relaxed">
                  "{testimonial.quote}"
                </p>
            </div>
          ))}
        </div>
        
          {/* Navigation Buttons */}
          <button
            onClick={goToPrevious}
            className={cn(
              "absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12",
              "p-3 rounded-full",
              "bg-gray-900/80 backdrop-blur-sm",
              "border border-labora-neon/20",
              "shadow-[0_0_20px_rgba(0,255,170,0.1)]",
              "transition-all duration-300",
              "hover:bg-labora-neon/20 hover:border-labora-neon/50",
              "focus:outline-none focus:ring-2 focus:ring-labora-neon/50",
              "group"
            )}
          >
            <ChevronLeft className="w-6 h-6 text-white group-hover:text-labora-neon" />
          </button>

          <button
            onClick={goToNext}
            className={cn(
              "absolute right-0 top-1/2 -translate-y-1/2 translate-x-12",
              "p-3 rounded-full",
              "bg-gray-900/80 backdrop-blur-sm",
              "border border-labora-neon/20",
              "shadow-[0_0_20px_rgba(0,255,170,0.1)]",
              "transition-all duration-300",
              "hover:bg-labora-neon/20 hover:border-labora-neon/50",
              "focus:outline-none focus:ring-2 focus:ring-labora-neon/50",
              "group"
            )}
          >
            <ChevronRight className="w-6 h-6 text-white group-hover:text-labora-neon" />
          </button>

          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  index === currentIndex ? "bg-labora-neon" : "bg-gray-700",
                  "hover:bg-labora-neon/50"
                )}
              />
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
