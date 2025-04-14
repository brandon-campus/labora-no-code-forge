
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  delay: number;
}

const TestimonialCard = ({ name, role, image, quote, delay }: TestimonialProps) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 testimonial-card animate-fade-in-up"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="flex items-center gap-1 mb-4 text-yellow-400">
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
      </div>
      <p className="text-gray-700 mb-6 italic">"{quote}"</p>
      <div className="flex items-center gap-3">
        <img 
          src={image} 
          alt={name} 
          className="w-12 h-12 rounded-full object-cover"
        />
        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className="text-gray-500 text-sm">{role}</p>
        </div>
      </div>
    </div>
  );
};

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Carlos Méndez",
      role: "Emprendedor",
      image: "https://randomuser.me/api/portraits/men/32.jpg",
      quote: "Llegué sin saber nada de tecnología y en tres meses desarrollé una plataforma para mi emprendimiento. Labora cambió mi visión del desarrollo.",
      delay: 1
    },
    {
      name: "María González",
      role: "Diseñadora UX",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "La metodología de Labora es fantástica. Aprendí a utilizar IA para crear aplicaciones completas sin escribir código. Ahora puedo materializar mis diseños.",
      delay: 2
    },
    {
      name: "Javier Rodríguez",
      role: "Consultor de Negocios",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      quote: "Como consultor, ahora puedo ofrecer soluciones tecnológicas a mis clientes sin depender de un equipo técnico. El bootcamp superó mis expectativas.",
      delay: 3
    },
    {
      name: "Ana Martínez",
      role: "Fundadora de Startup",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Gracias a Labora pude lanzar mi MVP en tiempo récord utilizando herramientas No-Code y atraer mi primera inversión. Los entrenadores son excelentes.",
      delay: 4
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Lo que dicen nuestros <span className="gradient-text">estudiantes</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Historias reales de personas que transformaron sus ideas en productos tecnológicos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              quote={testimonial.quote}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
