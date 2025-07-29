import React from 'react';
import { Star, Quote, ArrowRight } from 'lucide-react';

const TestimoniosPrueba = () => {
  const testimonios = [
    {
      nombre: "María González",
      rol: "Diseñadora UX",
      foto: "https://images.unsplash.com/photo-1494790108755-2616b612b786?auto=format&fit=crop&w=150&q=80",
      testimonio: "Las 2 clases gratuitas me convencieron completamente. En solo 4 horas ya había creado mi primera app con IA. Ahora estoy en el bootcamp completo y ya tengo 3 clientes.",
      rating: 5,
      resultado: "3 clientes en 2 meses"
    },
    {
      nombre: "Carlos Rodríguez",
      rol: "Emprendedor",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
      testimonio: "No tenía experiencia en programación, pero las clases gratuitas me mostraron que realmente podía crear proyectos sin código. El bootcamp completo fue la mejor inversión.",
      rating: 5,
      resultado: "SaaS con 50 usuarios activos"
    },
    {
      nombre: "Ana Silva",
      rol: "Marketing Digital",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
      testimonio: "Empecé con las 2 clases gratis por curiosidad. Terminé creando una herramienta de automatización que ahora uso en mi trabajo. Sin duda, vale la pena probar.",
      rating: 5,
      resultado: "Herramienta de automatización"
    }
  ];

  const estadisticas = [
    { numero: "200+", texto: "Estudiantes probaron las clases gratis" },
    { numero: "85%", texto: "Se inscribieron al bootcamp completo" },
    { numero: "4.9/5", texto: "Calificación promedio de las clases" },
    { numero: "2", texto: "Proyectos creados en promedio" }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Lo que dicen quienes <span className="text-labora-neon">probaron las clases gratis</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Estudiantes que empezaron con las 2 clases gratuitas y ahora tienen proyectos funcionando.
          </p>
        </div>

        {/* Estadísticas */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {estadisticas.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-labora-neon mb-2">
                {stat.numero}
              </div>
              <div className="text-gray-600 text-sm md:text-base">
                {stat.texto}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonios */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonios.map((testimonio, index) => (
            <div 
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonio.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <div className="mb-6">
                <Quote className="h-8 w-8 text-labora-neon/30 mb-4" />
                <p className="text-gray-700 leading-relaxed italic">
                  "{testimonio.testimonio}"
                </p>
              </div>
              
              <div className="flex items-center gap-4 mb-4">
                <img 
                  src={testimonio.foto} 
                  alt={testimonio.nombre}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonio.nombre}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonio.rol}
                  </div>
                </div>
              </div>
              
              <div className="bg-labora-neon/10 border border-labora-neon/20 rounded-lg p-3">
                <div className="flex items-center gap-2">
                  <ArrowRight className="h-4 w-4 text-labora-neon" />
                  <span className="text-sm font-semibold text-gray-900">
                    Resultado:
                  </span>
                </div>
                <p className="text-sm text-gray-700 mt-1 ml-6">
                  {testimonio.resultado}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-labora-red to-labora-neon p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              🚀 ¿Quieres ser el próximo caso de éxito?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Únete a más de 200 estudiantes que ya probaron las clases gratuitas y ahora tienen proyectos funcionando.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Reservar mi lugar gratis
              </button>
              <a 
                href="https://wa.me/5491178519054?text=%C2%A1Hola%20Labora!%20Quiero%20conocer%20m%C3%A1s%20casos%20de%20%C3%A9xito%20de%20las%20clases%20gratuitas"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors"
              >
                Hablar con un mentor
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimoniosPrueba; 