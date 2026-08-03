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
    name: "Agustin Gonzalez",
    country: "Argentina",
    flag: "🇦🇷",
    image: "/lovable-uploads/agustin.png",
    quote: "Mi experiencia fue muy buena en todo sentido, me sentí acompañado en cada momento del bootcamp. Me llevo muchas cosas pero las más esenciales son la configuración de bases de datos, la creación de agentes en n8n y sobretodo el tiempo para resolver dudas y problemas que me sirvieron bastante"
  },
  {
    name: "Gonzalo Carballo",
    country: "Argentina",
    flag: "🇦🇷",
    image: "/lovable-uploads/gonzalo.jpg",
    quote: "Lo que me aporto el bootcamp es tener una guia de como conectar las herramientas para lograr un producto final que resuelve un problema real. Mi proyecto fue encontrar solucion al problema de la gestion comercial de vendedores de una agencia de viajes. El CRM se centro en la gestion de base de datos e inteligencia de agentes IA como soporte al humano y no como un reemplazo."
  },
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
    <section id="testimonials" className="py-16 md:py-20 bg-[#0a0a0a] text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <div className="text-center mb-10">
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-black mb-3 text-white uppercase leading-[1.2]">
            LO QUE DICEN <br className="hidden sm:block" /><span className="text-labora-neon">NUESTROS ALUMNOS</span>
          </h2>
          <p className="text-[#c9c9c9] text-[15px] sm:text-[16px] max-w-2xl mx-auto">
            Únete a cientos de profesionales que ya están transformando su carrera con nosotros.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto overflow-hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2 sm:px-4">
                <div className="bg-[#12151a] border border-white/10 rounded-[24px] p-8 sm:p-10 flex flex-col items-center text-center">
                  <div className="w-20 h-20 rounded-full overflow-hidden mb-5 bg-[#333]">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-[15px] sm:text-[16px] leading-[1.6] italic text-[#e4e4e4] mb-6">
                    "{testimonial.quote}"
                  </p>
                  <div className="font-extrabold text-[16px] text-labora-neon uppercase tracking-wide flex items-center justify-center gap-2">
                    {testimonial.name} <span className="text-xl">{testimonial.flag}</span>
                  </div>
                  <div className="text-[13px] text-[#888] mt-1 uppercase tracking-wider font-semibold">
                    {testimonial.country}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Carousel controls */}
        <div className="flex items-center gap-4 mt-8 max-w-3xl mx-auto justify-center">
          <button 
            onClick={goToPrevious}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          <div className="flex items-center justify-center gap-2.5 px-4">
            {testimonials.map((_, i) => (
              <div 
                key={i} 
                onClick={() => setCurrentIndex(i)}
                className={cn(
                  "cursor-pointer transition-all",
                  i === currentIndex 
                    ? "w-[34px] h-[6px] rounded-[4px] bg-gradient-to-r from-labora-red to-labora-neon" 
                    : "w-2 h-2 rounded-full bg-white/20 hover:bg-white/40"
                )}
              ></div>
            ))}
          </div>

          <button 
            onClick={goToNext}
            className="p-2 rounded-full bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
