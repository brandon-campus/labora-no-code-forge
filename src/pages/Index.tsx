import React, { useState } from 'react';
import ProcessSection from '@/components/ProcessSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Map, MapPin, Zap, Star, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Index = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const programs = [
    {
      id: 'bootcamp',
      title: 'Bootcamp de IA y No Code',
      subtitle: 'El programa más completo de LATAM',
      features: ['Clases 100% en vivo', 'Proyectos Reales y Funcionales', 'Sin experiencia previa'],
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=800&q=80',
      link: '/bootcamp',
      badge: 'Más Popular',
      size: 'large'
    },
    {
      id: 'avanzado',
      title: 'Bootcamp Avanzado',
      subtitle: 'Lleva tus habilidades al siguiente nivel',
      features: ['Arquitecturas Complejas', 'Integraciones Avanzadas'],
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80',
      link: '/bootcamp',
      badge: 'Próximamente',
      size: 'small'
    },
    {
      id: 'cowork',
      title: 'Labora Cowork',
      subtitle: 'Programas Personalizados para Empresas',
      features: ['Capacitación In-Company', 'Soluciones a Medida'],
      image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=600&q=80',
      link: '/bootcamp',
      badge: 'Empresas',
      size: 'small'
    }
  ];

  const countries = [
    'Argentina', 'Colombia', 'Perú', 'Chile', 'Venezuela', 'Bolivia', 'Costa Rica', 'México', 'Uruguay'
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white">
      {/* Navigation */}
      <nav className="w-full bg-[#0a0a0a]/95 backdrop-blur-md z-50 border-b border-white/10 fixed top-0">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link to="/" className="flex-shrink-0">
                <img src="/lovable-uploads/logolabora.webp" alt="Labora" className="h-8" />
              </Link>
            </div>

            <div className="hidden md:flex items-center space-x-8">
              <a href="#programas" className="text-gray-300 hover:text-labora-neon text-sm font-bold uppercase transition-colors tracking-wide">
                Programas
              </a>
              <a href="#clases-gratis" className="text-gray-300 hover:text-labora-neon text-sm font-bold uppercase transition-colors tracking-wide">
                Clases Gratis
              </a>
              <a href="#empresas" className="text-gray-300 hover:text-labora-neon text-sm font-bold uppercase transition-colors tracking-wide">
                Empresas
              </a>
              <Link to="/campus">
                <Button className="bg-labora-neon hover:bg-labora-neon/80 text-black font-black uppercase tracking-wider rounded-full px-8 py-6 text-sm transition-all shadow-[0_0_15px_rgba(170,255,0,0.2)]">
                  Campus
                </Button>
              </Link>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-[#12151a] border-b border-white/10 absolute w-full left-0">
            <div className="px-4 pt-4 pb-6 space-y-4">
              <a href="#programas" className="block px-3 py-2 text-base font-bold text-gray-300 hover:text-labora-neon uppercase" onClick={() => setIsMenuOpen(false)}>
                Programas
              </a>
              <a href="#clases-gratis" className="block px-3 py-2 text-base font-bold text-gray-300 hover:text-labora-neon uppercase" onClick={() => setIsMenuOpen(false)}>
                Clases Gratis
              </a>
              <a href="#empresas" className="block px-3 py-2 text-base font-bold text-gray-300 hover:text-labora-neon uppercase" onClick={() => setIsMenuOpen(false)}>
                Empresas
              </a>
              <Link to="/campus" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-labora-neon hover:bg-labora-neon/80 text-black font-black rounded-full px-10 py-6 text-base transition-all shadow-lg uppercase mt-2">
                  Campus
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-28 overflow-hidden bg-[#0a0a0a]">
        {/* Grid background sutil */}
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-[0.03] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Lado izquierdo: Textos */}
            <div className="flex-1 text-center lg:text-left">
              <Badge className="mb-6 bg-labora-neon/10 text-labora-neon border-labora-neon/30 hover:bg-labora-neon/20 px-4 py-1.5 text-sm font-bold uppercase tracking-wider">
                N°1 EN EDUCACIÓN TECH
              </Badge>
              <h1 className="text-[2.5rem] sm:text-5xl lg:text-[4rem] font-black text-white mb-6 leading-[1.05] uppercase tracking-[-1px]">
                La mejor academia de <span className="text-labora-neon">IA y No Code</span> de Latinoamérica
              </h1>
              <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto lg:mx-0 font-medium">
                Únete a la revolución digital. Aprende a crear productos de software reales sin escribir código y potencia tu carrera profesional.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/bootcamp">
                  <Button size="lg" className="bg-labora-neon text-[#0a0a0a] hover:bg-labora-neon/90 shadow-[0_0_20px_rgba(170,255,0,0.3)] font-black uppercase tracking-wider px-8 py-7 text-base rounded-[40px] w-full sm:w-auto transition-transform hover:-translate-y-1">
                    Conocer Programas
                  </Button>
                </Link>
              </div>
            </div>

            {/* Lado derecho: Mapa representativo */}
            <div className="flex-1 w-full max-w-xl mx-auto relative">
              <div className="relative aspect-[4/3] rounded-[32px] bg-[#12151a] border border-white/5 p-8 overflow-hidden shadow-2xl flex flex-col items-center justify-center group">
                <div className="absolute inset-0 bg-gradient-to-br from-labora-neon/5 to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-700"></div>
                
                {/* Gráfico de Mapa */}
                <div className="relative z-10 text-center mb-6 w-full">
                  <Map className="w-24 h-24 sm:w-32 sm:h-32 text-labora-neon mx-auto mb-6 opacity-90" strokeWidth={1} />
                  <h3 className="text-2xl font-bold text-white mb-2">Presencia en LATAM</h3>
                  <p className="text-sm text-gray-400 mb-6">Impactando a estudiantes en toda la región</p>
                </div>

                {/* Etiquetas de Países */}
                <div className="flex flex-wrap gap-2.5 justify-center relative z-10">
                  {countries.map((country) => (
                    <div key={country} className="flex items-center gap-1.5 bg-black/60 border border-white/10 rounded-full px-3 sm:px-4 py-1.5 text-xs sm:text-sm font-semibold text-gray-300 hover:text-labora-neon hover:border-labora-neon/50 transition-colors cursor-default">
                      <MapPin className="w-3.5 h-3.5 text-labora-neon" />
                      {country}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Metodología Labora (Lo que nos hace únicos) */}
      <ProcessSection />

      {/* Programas */}
      <section id="programas" className="py-24 bg-[#0a0a0a] relative">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-black mb-4 text-white uppercase leading-[1.2]">
              Rutas de <span className="text-labora-neon">Formación</span>
            </h2>
            <p className="text-[#a0a0a0] text-[15px] sm:text-[16px] max-w-2xl mx-auto">
              Programas diseñados para cada etapa de tu carrera profesional y objetivos empresariales.
            </p>
          </div>

          {/* Grid de Programas */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Tarjeta Principal (Ocupa 2 columnas en desktop) */}
            {programs.filter(p => p.size === 'large').map((program) => (
              <div key={program.id} className="md:col-span-2 relative group overflow-hidden rounded-[24px] border border-white/10 bg-[#12151a] hover:border-labora-neon/30 transition-all duration-300">
                <div className="flex flex-col md:flex-row h-full">
                  <div className="p-8 sm:p-12 md:w-3/5 flex flex-col justify-center">
                    {program.badge && (
                      <span className="inline-block bg-labora-neon text-black text-xs font-black uppercase px-3 py-1 rounded-full w-fit mb-5">
                        {program.badge}
                      </span>
                    )}
                    <h3 className="text-3xl md:text-4xl font-black text-white mb-3">{program.title}</h3>
                    <p className="text-labora-neon font-bold text-lg mb-8">{program.subtitle}</p>
                    
                    <ul className="space-y-4 mb-10">
                      {program.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center gap-3 text-gray-300 font-medium">
                          <div className="bg-white/5 p-1.5 rounded-full">
                            <Zap className="w-5 h-5 text-labora-neon fill-labora-neon/20" />
                          </div>
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto">
                      <Link to={program.link}>
                        <Button className="bg-labora-neon text-[#0a0a0a] hover:bg-labora-neon/90 font-black uppercase px-8 py-6 rounded-[40px] w-fit shadow-[0_4px_14px_rgba(170,255,0,0.25)] transition-transform hover:-translate-y-1">
                          Ver Detalles
                        </Button>
                      </Link>
                    </div>
                  </div>
                  <div className="md:w-2/5 relative min-h-[300px] md:min-h-full">
                    <div className="absolute inset-0 bg-gradient-to-r from-[#12151a] via-[#12151a]/50 to-transparent z-10 hidden md:block"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#12151a] via-[#12151a]/50 to-transparent z-10 md:hidden"></div>
                    <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
              </div>
            ))}

            {/* Tarjetas Pequeñas */}
            {programs.filter(p => p.size === 'small').map((program) => (
              <div key={program.id} className="relative group overflow-hidden rounded-[24px] border border-white/10 bg-[#12151a] hover:border-white/30 transition-all duration-300 flex flex-col">
                <div className="relative h-56 sm:h-64 w-full overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#12151a] via-transparent to-transparent z-10"></div>
                  <img src={program.image} alt={program.title} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  {program.badge && (
                    <span className="absolute top-5 left-5 z-20 bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-bold uppercase px-3 py-1.5 rounded-full">
                      {program.badge}
                    </span>
                  )}
                </div>
                
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-black text-white mb-2">{program.title}</h3>
                  <p className="text-gray-400 font-medium mb-6">{program.subtitle}</p>
                  
                  <ul className="space-y-3 mb-8">
                    {program.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-gray-400 text-sm">
                        <Star className="w-4 h-4 text-white/50" />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <div className="mt-auto pt-4">
                    <Link to={program.link}>
                      <Button variant="outline" className="border-white/20 text-white hover:bg-white hover:text-black font-bold uppercase w-full py-6 rounded-[40px] transition-colors">
                        Más Información
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* Casos de Éxito (Testimonials) */}
      <TestimonialsSection />

      {/* Contacto */}
      <ContactSection />

      <Footer />
      <WhatsAppButton />
      
      <style>{`
        a:focus, button:focus {
          outline: 2px solid #aaff00;
          outline-offset: 2px;
          box-shadow: 0 0 0 2px rgba(170, 255, 0, 0.3);
        }
      `}</style>
    </div>
  );
};

export default Index;
