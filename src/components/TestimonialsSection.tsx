
import React from 'react';
import { Star } from 'lucide-react';

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  project: string;
  delay: number;
}

const TestimonialCard = ({ name, role, image, quote, project, delay }: TestimonialProps) => {
  return (
    <div 
      className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 testimonial-card animate-fade-in-up relative overflow-hidden"
      style={{ animationDelay: `${delay * 100}ms` }}
    >
      <div className="flex items-center gap-1 mb-4 text-labora-red">
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
        <Star className="h-4 w-4 fill-current" />
      </div>
      <p className="text-gray-700 mb-8 italic">"{quote}"</p>
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-24"></div>
      <div className="flex items-center gap-4 relative z-10 mt-4">
        <img 
          src={image} 
          alt={name} 
          className="w-16 h-16 rounded-full object-cover border-2 border-labora-red/20"
        />
        <div>
          <h4 className="font-semibold text-labora-dark text-lg">{name}</h4>
          <p className="text-gray-500">{role}</p>
          <p className="text-sm text-labora-red mt-1">Proyecto: {project}</p>
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
      quote: "Llegué sin saber nada de tecnología y en tres meses desarrollé una plataforma para mi emprendimiento que me permitió automatizar procesos y escalar mi negocio. El acompañamiento durante todo el programa fue clave para superar los desafíos técnicos.",
      project: "App de reservas para restaurantes",
      delay: 1
    },
    {
      name: "María González",
      role: "Diseñadora UX",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "La metodología de Labora es fantástica. Aprendí a utilizar IA para crear aplicaciones completas sin escribir código. Ahora puedo materializar mis diseños y ofrecer soluciones completas a mis clientes sin depender de programadores externos.",
      project: "Plataforma de portfolios digitales",
      delay: 2
    },
    {
      name: "Javier Rodríguez",
      role: "Consultor de Negocios",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      quote: "Como consultor, ahora puedo ofrecer soluciones tecnológicas a mis clientes sin depender de un equipo técnico. Aprendí a crear flujos de trabajo automatizados con n8n y bases de datos eficientes con Supabase, lo que ha transformado mi servicio.",
      project: "Sistema de gestión para consultoras",
      delay: 3
    },
    {
      name: "Ana Martínez",
      role: "Fundadora de Startup",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Gracias a Labora pude lanzar mi MVP en tiempo récord utilizando herramientas No-Code y atraer mi primera inversión. Los entrenadores son excelentes y la comunidad de estudiantes proporciona un apoyo invaluable durante todo el proceso de creación.",
      project: "Marketplace de productos artesanales",
      delay: 4
    },
  ];

  return (
    <section id="testimonios" className="py-20 bg-labora-dark text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Lo que dicen nuestros <span className="text-labora-neon">estudiantes</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Historias reales de personas que transformaron sus ideas en productos tecnológicos exitosos.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={index}
              name={testimonial.name}
              role={testimonial.role}
              image={testimonial.image}
              quote={testimonial.quote}
              project={testimonial.project}
              delay={testimonial.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
