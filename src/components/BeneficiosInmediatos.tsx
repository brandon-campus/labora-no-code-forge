import React from 'react';
import { Button } from "@/components/ui/button";
import { 
  Play, 
  Video, 
  BookOpen, 
  Users,
  Zap,
  Gift,
  Star,
  ArrowRight
} from 'lucide-react';

const BeneficiosInmediatos = () => {
  const beneficios = [
    {
      icon: <Play className="h-6 w-6" />,
      title: "Acceso Inmediato",
      description: "Recibe acceso instantáneo a los primeros módulos del bootcamp sin esperas",
      color: "text-labora-neon",
      bgColor: "bg-labora-neon/10"
    },
    {
      icon: <Video className="h-6 w-6" />,
      title: "1 Clase Gratuita",
      description: "Disfruta de 1 clase de prueba en vivo con mentores expertos",
      color: "text-labora-red",
      bgColor: "bg-labora-red/10"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Material Premium",
      description: "Accede a recursos exclusivos, templates y guías paso a paso",
      color: "text-labora-neon",
      bgColor: "bg-labora-neon/10"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Comunidad Privada",
      description: "Únete a nuestra comunidad de emprendedores tecnológicos",
      color: "text-labora-red",
      bgColor: "bg-labora-red/10"
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Proyecto Funcional",
      description: "Crea tu primera aplicación con IA en menos de 30 minutos",
      color: "text-labora-neon",
      bgColor: "bg-labora-neon/10"
    },
    
  ];

  const handleCampusClick = () => {
    window.location.href = '/campus';
  };

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-gray-900 to-black relative overflow-hidden">
      {/* Background tecnológico sutil */}
      <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/5 to-labora-red/5 opacity-30"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-labora-neon/20 text-labora-neon rounded-full text-sm font-bold border border-labora-neon/30">
            <Gift className="h-4 w-4" />
            <span>BENEFICIOS INMEDIATOS</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 text-white">
            ¿Qué obtienes <span className="text-labora-neon">al registrarte</span>?
          </h2>
          
          <p className="text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Accede instantáneamente a nuestro campus y comienza a crear tu primera aplicación con IA en menos de 30 minutos.
          </p>
        </div>

        {/* Grid de beneficios */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-6xl mx-auto mb-12">
          {beneficios.map((beneficio, index) => (
            <div
              key={index}
              className="group relative bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 sm:p-8 border border-gray-700/50 hover:border-labora-neon/30 transition-all duration-300 hover:transform hover:scale-105"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Icono */}
              <div className={`w-12 h-12 ${beneficio.bgColor} rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ${beneficio.color}`}>
                {beneficio.icon}
              </div>
              
              {/* Contenido */}
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-labora-neon transition-colors duration-300">
                {beneficio.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {beneficio.description}
              </p>
              
              {/* Efecto hover */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-labora-neon/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-labora-neon/10 to-labora-red/10 rounded-2xl p-8 sm:p-12 border border-labora-neon/20 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Star className="h-5 w-5 text-labora-neon" />
              <span className="text-labora-neon font-bold text-lg">Accede a nuestro campus</span>
              <Star className="h-5 w-5 text-labora-neon" />
            </div>
            
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-4">
              ¡<span className="text-labora-neon">Construye con IA</span> por tiempo limitado!
            </h3>
            
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Solo necesitas registrarte para acceder a todo este contenido premium. Sin tarjetas, sin compromisos.
            </p>
            
            <Button
              onClick={handleCampusClick}
              className="bg-labora-neon hover:bg-labora-neon/90 text-black font-black rounded-full px-8 py-6 text-lg sm:text-xl transition-all shadow-lg shadow-labora-neon/25 transform hover:scale-105 animate-pulse"
            >
              <Zap className="mr-3 h-5 w-5" />
              ACCEDER AHORA
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>
            
            <p className="text-gray-400 text-sm mt-4">
              ✅ Acceso inmediato • 🔒 100% seguro
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosInmediatos; 