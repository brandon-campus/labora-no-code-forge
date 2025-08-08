import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';
import { Button } from "@/components/ui/button";

interface Testimonial {
  name: string;
  country: string;
  flag: string;
  image: string;
  quote: string;
  result: string;
  role: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alirio Aguirre",
    country: "Colombia",
    flag: "🇨🇴",
    image: "/lovable-uploads/alirioaguirre.png",
    quote: "Ya hice cinco aplicaciones y estoy enamorado de cómo las construí gracias al bootcamp. Logré hacer cosas que nunca pensé posibles.",
    result: "5 aplicaciones funcionales",
    role: "Empresario"
  },
  {
    name: "Mauricio Madelat",
    country: "México",
    flag: "🇲🇽",
    image: "/lovable-uploads/mauricio.png",
    quote: "Tenía un proyecto que venía planeando durante años. He podido crear mi Plataforma completa en este bootcamp y realmente me he desafiado.",
    result: "Plataforma completa lista",
    role: "Emprendedor"
  },
  {
    name: "Sebastián Acuña",
    country: "Argentina",
    flag: "🇦🇷",
    image: "/lovable-uploads/sebasacuna.png",
    quote: "Hoy me di cuenta de lo importante que fue todo lo que aprendimos: me ayudó a desbloquearme, a entender, y sobre todo, a creer que ya estoy listo.",
    result: "Confianza total para crear",
    role: "Profesional"
  }
];

const TestimonialsSectionModern = () => {
  const handleComenzarClick = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full bg-labora-neon/10 border border-labora-neon/20">
              <Star className="h-4 w-4 text-labora-neon fill-current" />
              <span className="text-labora-neon text-sm font-semibold">Resultados Reales</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              Lo que dicen nuestros <span className="text-labora-neon">estudiantes</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Estudiantes reales que transformaron sus carreras en solo 4 semanas.
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                {/* Card */}
                <div className="bg-gray-800 rounded-2xl p-6 border border-gray-700 hover:border-labora-neon/30 transition-all duration-300 hover:shadow-xl hover:shadow-labora-neon/10 transform hover:-translate-y-1">
                  {/* Quote Icon */}
                  <div className="absolute -top-3 left-6">
                    <div className="w-8 h-8 bg-labora-neon rounded-full flex items-center justify-center">
                      <Quote className="h-4 w-4 text-black" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="pt-4">
                    {/* Result Badge */}
                    <div className="inline-flex items-center px-3 py-1 rounded-full bg-labora-neon/20 border border-labora-neon/30 mb-4">
                      <span className="text-labora-neon text-sm font-semibold">
                        {testimonial.result}
                      </span>
                    </div>

                    {/* Quote */}
                    <blockquote className="text-gray-200 text-base leading-relaxed mb-6">
                      "{testimonial.quote}"
                    </blockquote>

                    {/* Author */}
                    <div className="flex items-center">
                      <div className="relative">
                        <img 
                          src={testimonial.image} 
                          alt={testimonial.name} 
                          className="w-12 h-12 rounded-full object-cover border-2 border-labora-neon/30"
                        />
                        <span className="absolute -bottom-1 -right-1 text-lg">
                          {testimonial.flag}
                        </span>
                      </div>
                      <div className="ml-4">
                        <h4 className="text-white font-semibold">{testimonial.name}</h4>
                        <p className="text-gray-400 text-sm">{testimonial.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Stats Section */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <div className="text-center">
              <div className="text-3xl font-bold text-labora-neon mb-2">80+</div>
              <div className="text-gray-400 text-sm">Estudiantes</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-labora-neon mb-2">95%</div>
              <div className="text-gray-400 text-sm">Satisfacción</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-labora-neon mb-2">4.8/5</div>
              <div className="text-gray-400 text-sm">Calificación</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-labora-neon mb-2">85+</div>
              <div className="text-gray-400 text-sm">Proyectos Creados</div>
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              ¿Quieres ser el próximo éxito?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Únete a cientos de personas que ya están creando aplicaciones con IA 
              y transformando sus vidas.
            </p>
            
            <Button
              onClick={handleComenzarClick}
              className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-8 py-6 text-lg transition-all shadow-lg shadow-labora-neon/25 transform hover:scale-105 hover:shadow-xl hover:shadow-labora-neon/40 active:scale-95"
            >
              EMPEZAR AHORA
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <p className="text-gray-400 text-sm mt-4">
              Acceso inmediato • Sin compromisos • Resultados garantizados
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSectionModern; 