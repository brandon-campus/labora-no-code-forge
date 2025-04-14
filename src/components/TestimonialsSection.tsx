
import React from 'react';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from "@/components/ui/carousel";

interface TestimonialProps {
  name: string;
  role: string;
  image: string;
  quote: string;
  project: string;
}

const TestimonialCard = ({ name, role, image, quote, project }: TestimonialProps) => {
  return (
    <div className="bg-white rounded-xl overflow-hidden shadow-lg h-full flex flex-col">
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-1 mb-4 text-labora-red">
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
          <Star className="h-4 w-4 fill-current" />
        </div>
        <p className="text-gray-700 mb-6 flex-grow italic text-sm">"{quote}"</p>
        <div className="flex items-center gap-4">
          <img 
            src={image} 
            alt={name} 
            className="w-14 h-14 rounded-full object-cover border-2 border-labora-red/20"
          />
          <div>
            <h4 className="font-semibold text-labora-dark">{name}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
            <p className="text-sm text-labora-red mt-1">Proyecto: {project}</p>
          </div>
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
    },
    {
      name: "María González",
      role: "Diseñadora UX",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      quote: "La metodología de Labora es fantástica. Aprendí a utilizar IA para crear aplicaciones completas sin escribir código. Ahora puedo materializar mis diseños y ofrecer soluciones completas a mis clientes sin depender de programadores externos.",
      project: "Plataforma de portfolios digitales",
    },
    {
      name: "Javier Rodríguez",
      role: "Consultor de Negocios",
      image: "https://randomuser.me/api/portraits/men/62.jpg",
      quote: "Como consultor, ahora puedo ofrecer soluciones tecnológicas a mis clientes sin depender de un equipo técnico. Aprendí a crear flujos de trabajo automatizados con n8n y bases de datos eficientes con Supabase, lo que ha transformado mi servicio.",
      project: "Sistema de gestión para consultoras",
    },
    {
      name: "Ana Martínez",
      role: "Fundadora de Startup",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      quote: "Gracias a Labora pude lanzar mi MVP en tiempo récord utilizando herramientas No-Code y atraer mi primera inversión. Los entrenadores son excelentes y la comunidad de estudiantes proporciona un apoyo invaluable durante todo el proceso de creación.",
      project: "Marketplace de productos artesanales",
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
        
        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="flex flex-col h-full">
              <img 
                src={testimonial.image} 
                alt={testimonial.name} 
                className="w-full aspect-square object-cover rounded-lg mb-4"
              />
              <div className="bg-white p-6 rounded-lg flex-grow">
                <h4 className="font-semibold text-labora-dark text-lg mb-2">{testimonial.name}</h4>
                <p className="text-gray-500 text-sm mb-3">{testimonial.role}</p>
                <div className="flex items-center gap-1 mb-4 text-labora-red">
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                  <Star className="h-3 w-3 fill-current" />
                </div>
                <p className="text-gray-700 text-sm italic mb-4">"{testimonial.quote.substring(0, 120)}..."</p>
                <p className="text-sm text-labora-red font-medium">Proyecto: {testimonial.project}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile Carousel */}
        <div className="md:hidden">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <TestimonialCard 
                      name={testimonial.name}
                      role={testimonial.role}
                      image={testimonial.image}
                      quote={testimonial.quote}
                      project={testimonial.project}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8 gap-2">
              <CarouselPrevious className="relative left-0 right-auto bg-white text-labora-dark hover:bg-labora-neon hover:text-labora-dark" />
              <CarouselNext className="relative right-0 left-auto bg-white text-labora-dark hover:bg-labora-neon hover:text-labora-dark" />
            </div>
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
