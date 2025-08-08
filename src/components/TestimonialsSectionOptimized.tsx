import React from 'react';
import { Star } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { ArrowRight } from 'lucide-react';

interface Testimonial {
  name: string;
  country: string;
  flag: string;
  image: string;
  quote: string;
  result?: string;
  background?: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Alirio Aguirre",
    country: "Colombia",
    flag: "🇨🇴",
    image: "/lovable-uploads/alirioaguirre.png",
    quote: "Ya hice cinco aplicaciones y estoy enamorado de cómo las construí gracias al bootcamp. Logré hacer cosas que nunca pensé posibles.",
    result: "Creó 5 aplicaciones funcionales",
    },
  {
    name: "Mauricio Madelat",
    country: "México",
    flag: "🇲🇽",
    image: "/lovable-uploads/mauricio.png",
    quote: "Tenía un proyecto que venía planeando durante años. He podido crear mi Plataforma completa en este bootcamp y realmente me he desafiado.",
    result: "Plataforma completa lista para lanzar",
  },
  {
    name: "Sebastián Acuña",
    country: "Argentina",
    flag: "🇦🇷",
    image: "/lovable-uploads/sebasacuna.png",
    quote: "Hoy me di cuenta de lo importante que fue todo lo que aprendimos: me ayudó a desbloquearme, a entender, y sobre todo, a creer que ya estoy listo.",
    result: "Confianza total para crear por su cuenta",
 }
];

const TestimonialsSectionOptimized = () => {
  const handleComenzarClick = () => {
    window.location.href = '/registro-curso';
  };

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
              Resultados de nuestros alumnos
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Estudiantes reales que transformaron sus carreras con nuestro bootcamp.
            </p>
          </div>

          {/* Featured Testimonial */}
          <div className="bg-gray-800 rounded-2xl overflow-hidden shadow-2xl border border-gray-700 mb-8">
            {/* Testimonial Image */}
            <div className="relative h-64 sm:h-80">
              <img 
                src={testimonials[0].image} 
                alt={testimonials[0].name} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent"></div>
            </div>
            
            {/* Testimonial Content */}
            <div className="p-6 sm:p-8">
              {/* Result Highlight */}
              <div className="mb-4">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                  {testimonials[0].result}
                </h3>
                <p className="text-labora-neon font-semibold text-lg">
                  en solo 4 semanas
                </p>
              </div>
              
              {/* Background Context */}
              <p className="text-gray-300 text-sm sm:text-base mb-4 leading-relaxed">
                {testimonials[0].background}
              </p>
              
              {/* Quote */}
              <blockquote className="text-gray-200 text-base sm:text-lg italic mb-4 leading-relaxed">
                "{testimonials[0].quote}"
              </blockquote>
              
              {/* Author */}
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <span className="text-2xl mr-2">{testimonials[0].flag}</span>
                  <span className="text-white font-semibold">{testimonials[0].name}</span>
                </div>
                <div className="flex items-center text-labora-neon">
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                  <Star className="h-4 w-4 fill-current" />
                </div>
              </div>
            </div>
          </div>

          {/* Additional Results Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {testimonials.slice(1).map((testimonial, index) => (
              <div key={index} className="bg-gray-800 rounded-xl p-4 border border-gray-700">
                <div className="flex items-center mb-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="text-white font-semibold text-sm">{testimonial.name}</h4>
                    <div className="flex items-center">
                      <span className="text-lg mr-1">{testimonial.flag}</span>
                      <span className="text-gray-400 text-xs">{testimonial.country}</span>
                    </div>
                  </div>
                </div>
                <p className="text-labora-neon font-semibold text-sm mb-2">
                  {testimonial.result}
                </p>
                <p className="text-gray-300 text-xs leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Quieres ser el próximo éxito?
            </h3>
            <p className="text-gray-300 mb-6">
              Únete a cientos de estudiantes que ya están creando aplicaciones con IA.
            </p>
            
            <Button
              onClick={handleComenzarClick}
              className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-8 py-6 text-lg transition-all shadow-lg shadow-labora-neon/25 transform hover:scale-105 w-full sm:w-auto"
            >
              COMENZAR AHORA
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

export default TestimonialsSectionOptimized; 