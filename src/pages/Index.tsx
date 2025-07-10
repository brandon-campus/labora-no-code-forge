
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  BookOpen, 
  Users, 
  Clock, 
  DollarSign, 
  Zap, 
  Target, 
  Calendar,
  Briefcase,
  ArrowRight,
  CheckCircle,
  Star,
  Play
} from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from '@/components/Footer';
import WhatsAppButton from '@/components/WhatsAppButton';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  const products = [
    {
      id: 'bootcamp',
      title: 'Bootcamp de IA y No Code',
      subtitle: '100% en vivo',
      price: '250 USD',
      duration: '4 semanas',
      frequency: '3 clases por semana',
      students: '10-25 personas',
      description: 'Programa intensivo para crear tu primer proyecto con IA y No-Code desde cero hasta el lanzamiento.',
      features: [
        'Clases en vivo con mentores expertos',
        'Proyecto real funcionando al finalizar',
        'Cohortes reducidas para atención personalizada',
        'Acceso al campus virtual exclusivo'
      ],
      badge: 'Más Popular',
      color: 'bg-labora-red',
      link: '/bootcamp',
      image: 'https://images.unsplash.com/photo-1513258496099-48168024aec0?auto=format&fit=crop&w=600&q=80' // Bootcamp
    },
    {
      id: 'inicia',
      title: 'Curso "Inicia"',
      subtitle: 'On-Demand',
      price: '65 USD',
      duration: 'A tu ritmo',
      frequency: 'Acceso permanente',
      students: 'Individual',
      description: 'Curso asincrónico perfecto para principiantes absolutos que quieren una base sólida sin horarios.',
      features: [
        'Contenido esencial de IA y No-Code',
        'Casos prácticos paso a paso',
        'Ejercicios interactivos',
        'Acceso de por vida'
      ],
      badge: 'Principiantes',
      color: 'bg-labora-neon',
      link: '/curso-inicia',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=600&q=80' // Online Course
    },
    {
      id: 'hackatones',
      title: 'Hackatones Mensuales',
      subtitle: 'Presencial',
      price: '35 USD',
      duration: 'Fin de semana',
      frequency: 'Cada mes',
      students: 'Equipos',
      description: 'Resuelve desafíos reales usando IA y No-Code. Ideal para afianzar conocimientos y sumar al portfolio.',
      features: [
        'Desafíos reales del mercado',
        'Trabajo en equipo colaborativo',
        'Mentorías durante el evento',
        'Certificado de participación'
      ],
      badge: 'Networking',
      color: 'bg-purple-600',
      link: '/hackatones',
      image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=600&q=80' // Hackathon
    }
  ];

  // Definir el producto de Estudio Labora aparte
  const estudioLabora = {
    id: 'estudio',
    title: 'Estudio Labora',
    subtitle: 'Servicios para empresas',
    price: '500-2000 USD',
    duration: '2-8 semanas',
    frequency: 'Por proyecto',
    students: 'Empresas',
    description: 'Soluciones ágiles de desarrollo para empresas usando IA, No-Code y automatizaciones.',
    features: [
      'Equipo de egresados y mentores',
      'Soluciones empresariales ágiles',
      'IA, No-Code y automatizaciones',
      'Soporte post-lanzamiento'
    ],
    badge: 'Empresas',
    color: 'bg-gray-700',
    link: '/estudio-labora',
    image: 'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80' // Teamwork
  };

  const testimonials = [
    {
      name: 'María González',
      role: 'Bootcamp Graduate',
      content: 'En 4 semanas lancé mi primera app con IA. Los mentores son increíbles y el formato en vivo hace toda la diferencia.',
      rating: 5
    },
    {
      name: 'Carlos Rodríguez',
      role: 'Freelancer',
      content: 'Gracias al curso Inicia pude empezar desde cero. Ahora trabajo como freelancer creando automatizaciones.',
      rating: 5
    },
    {
      name: 'Ana Martínez',
      role: 'Startup Founder',
      content: 'Los hackatones me ayudaron a validar mi idea y conocer a mi co-founder. Ambiente súper colaborativo.',
      rating: 5
    }
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100" role="main">
      {/* Navigation */}
      <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link to="/">
                <img src="/lovable-uploads/logolabora.webp" alt="Logo Labora AI" className="h-8" />
              </Link>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <Link to="/bootcamp" className="text-gray-300 hover:text-labora-neon transition-colors">Bootcamp</Link>
              <a href="#" className="text-gray-400 cursor-not-allowed opacity-60 transition-colors">Curso Inicia</a>
              <a href="#" className="text-gray-400 cursor-not-allowed opacity-60 transition-colors">Hackatones</a>
              <a href="#" className="text-gray-400 cursor-not-allowed opacity-60 transition-colors">Empresas</a>
              <Link to="/campus" className="text-gray-300 hover:text-labora-neon transition-colors">Campus</Link>
              <Link to="/bootcamp">
                <Button className="bg-labora-neon text-gray-900 hover:bg-labora-neon/80 shadow-neon-glow">
                  Comenzar Ahora
                </Button>
              </Link>
            </div>
            {/* Botón menú hamburguesa para mobile */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-white focus:outline-none">
                {isMenuOpen ? (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>
        </div>
        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-900 border-b border-gray-800">
            <div className="px-4 py-4 flex flex-col space-y-4">
              <Link to="/bootcamp" className="text-gray-300 hover:text-labora-neon text-lg" onClick={() => setIsMenuOpen(false)}>Bootcamp</Link>
              <a href="#" className="text-gray-400 cursor-not-allowed opacity-60 text-lg">Curso Inicia</a>
              <a href="#" className="text-gray-400 cursor-not-allowed opacity-60 text-lg">Hackatones</a>
              <a href="#" className="text-gray-400 cursor-not-allowed opacity-60 text-lg">Empresas</a>
              <Link to="/campus" className="text-gray-300 hover:text-labora-neon text-lg" onClick={() => setIsMenuOpen(false)}>Campus</Link>
              <Link to="/bootcamp" onClick={() => setIsMenuOpen(false)}>
                <Button className="w-full bg-labora-neon text-gray-900 hover:bg-labora-neon/80 shadow-neon-glow mt-2">
                  Comenzar Ahora
                </Button>
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950" data-aos="fade-up">
        <div className="absolute inset-0 bg-[url('/tech-grid.svg')] bg-repeat opacity-10 pointer-events-none"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-labora-neon/10 text-labora-neon border-labora-neon">
              Academia de IA y No-Code
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Crea proyectos con{' '}
              <span className="text-labora-neon">Inteligencia Artificial</span>
              {' '}sin programar
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Formamos creadores digitales desde cero. Aprende a lanzar tus propios proyectos al mercado 
              usando IA, herramientas No-Code y dinámicas colaborativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bootcamp">
                <Button size="lg" className="bg-labora-neon text-gray-900 hover:bg-labora-neon/80 shadow-neon-glow">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Bootcamp
                </Button>
              </Link>
              <Button size="lg" variant="outline" className="border-labora-neon text-gray-900 hover:bg-labora-neon/10 font-bold">
                <BookOpen className="mr-2 h-5 w-5" />
                Explorar Cursos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-gray-900/80 backdrop-blur-md" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Elige el programa que se adapte a ti
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Desde principiante hasta experto, tenemos el programa perfecto para tu nivel y objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto">
            {(() => {
              // Ordenar productos para que el bootcamp esté en el centro
              const bootcampIndex = products.findIndex(p => p.id === 'bootcamp');
              let ordered = [...products];
              if (bootcampIndex !== -1 && products.length === 3) {
                // Si hay 3 productos, poner bootcamp en el centro
                ordered = [products[1], products[0], products[2]];
                if (products[1].id === 'bootcamp') {
                  ordered = [products[0], products[1], products[2]];
                } else if (products[2].id === 'bootcamp') {
                  ordered = [products[0], products[2], products[1]];
                }
              }
              return ordered.map((product, idx) => (
                <div
                  key={product.id}
                  className={`relative group rounded-3xl overflow-visible shadow-lg transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 border border-labora-neon/10 p-6 flex flex-col items-center ${product.id === 'bootcamp' ? 'border-4 border-labora-neon' : ''}`}
                  data-aos={product.id === 'bootcamp' ? 'zoom-in' : (idx % 2 === 0 ? 'fade-right' : 'fade-left')}
                >
                  {/* Etiqueta flotante */}
                  {product.badge && (
                    <span className={`absolute -top-4 left-6 z-10 px-4 py-1 rounded-full text-xs font-bold shadow-neon-glow ${product.color} text-white border-2 border-white/20`}>
                      {product.badge}
                    </span>
                  )}
                  {/* Imagen circular superpuesta */}
                  <div className="relative -mt-16 mb-4 z-10">
                    <img
                      src={product.image}
                      alt={`Imagen representativa de ${product.title}`}
                      className="w-28 h-28 rounded-full object-cover border-4 border-labora-neon shadow-lg bg-white"
                    />
                  </div>
                  <div className="flex-1 flex flex-col items-center text-center">
                    <h3 className="text-2xl font-bold text-white mb-2">{product.title}</h3>
                    <span className="text-labora-neon mb-2 font-semibold">{product.subtitle}</span>
                    <div className="flex items-center justify-center gap-4 mb-2 text-gray-400 text-sm">
                      <span className="font-semibold text-gray-300">{product.price}</span>
                      <span>|</span>
                      <span>{product.duration}</span>
                    </div>
                    <div className="flex items-center justify-center gap-2 mb-2 text-gray-400 text-sm">
                      <Users className="h-4 w-4 text-labora-neon" />
                      <span>{product.students}</span>
                    </div>
                    <p className="text-gray-300 mb-4 min-h-[60px]">{product.description}</p>
                    <ul className="list-disc list-inside text-gray-400 text-sm mb-4 text-left mx-auto max-w-xs">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <Link to={product.link} className="w-full mt-auto">
                    <Button
                      className="w-full bg-labora-neon text-gray-900 hover:bg-labora-neon/80 shadow-neon-glow font-bold transition-all duration-200 group-hover:scale-105"
                      disabled={product.id === 'inicia' || product.id === 'hackatones'}
                    >
                      {product.id === 'inicia' || product.id === 'hackatones' ? 'Próximamente' : 'Conocer más'}
                    </Button>
                  </Link>
                </div>
              ));
            })()}
          </div>
        </div>
      </section>

      {/* Tabla comparativa de productos */}
      <section className="bg-gray-900/80 pb-20 backdrop-blur-md" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
          <div className="mb-8 text-center">
            <h3 className="text-2xl font-bold text-white mb-2">Comparativa rápida</h3>
            <p className="text-gray-300">Compara nuestros programas y elige el que mejor se adapte a tus objetivos</p>
          </div>
          <div className="overflow-x-auto rounded-lg shadow">
            <table className="min-w-full bg-gray-950/80 border border-labora-neon/10 text-gray-100">
              <thead>
                <tr className="bg-gray-800/80">
                  <th className="py-3 px-4 text-left font-semibold text-labora-neon">Producto</th>
                  <th className="py-3 px-4 text-left font-semibold text-labora-neon">Modalidad</th>
                  <th className="py-3 px-4 text-left font-semibold text-labora-neon">Duración</th>
                  <th className="py-3 px-4 text-left font-semibold text-labora-neon">Precio</th>
                  <th className="py-3 px-4 text-left font-semibold text-labora-neon">Ideal para</th>
                  <th className="py-3 px-4 text-left font-semibold text-labora-neon">Objetivo</th>
                </tr>
              </thead>
              <tbody>
                {products.map((product) => (
                  <tr key={product.id} className="border-t border-gray-800 hover:bg-gray-900/60 transition-colors">
                    <td className="py-3 px-4 font-medium text-labora-neon">{product.title}</td>
                    <td className="py-3 px-4">{product.subtitle}</td>
                    <td className="py-3 px-4">{product.duration}</td>
                    <td className="py-3 px-4">{product.price}</td>
                    <td className="py-3 px-4">
                      {product.id === 'bootcamp' && 'Quienes quieren aprender en vivo y lanzar un proyecto'}
                      {product.id === 'inicia' && 'Principiantes absolutos, autodidactas'}
                      {product.id === 'hackatones' && 'Quienes buscan práctica y networking'}
                      {product.id === 'estudio' && 'Empresas que necesitan soluciones ágiles'}
                    </td>
                    <td className="py-3 px-4">
                      {product.id === 'bootcamp' && 'Proyecto funcionando en 4 semanas'}
                      {product.id === 'inicia' && 'Base sólida de IA y No-Code'}
                      {product.id === 'hackatones' && 'Resolver desafíos reales en equipo'}
                      {product.id === 'estudio' && 'Desarrollo de soluciones a medida'}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsSection data-aos="fade-up" />

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-900/80 backdrop-blur-md" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Sobre Labora AI
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Somos una academia enfocada en educación <strong>divertida, experimental y accesible</strong>. 
              Nuestra misión es formar creadores digitales desde cero, ayudándolos a lanzar sus propios 
              proyectos al mercado o trabajar para clientes mediante el uso de Inteligencia Artificial, 
              herramientas No-Code y dinámicas colaborativas de aprendizaje.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-labora-neon/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-labora-neon" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Práctico y Real</h3>
                <p className="text-gray-300">Proyectos reales que puedes lanzar al mercado</p>
              </div>
              <div className="text-center">
                <div className="bg-labora-neon/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-labora-neon" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Innovador</h3>
                <p className="text-gray-300">Las últimas tecnologías de IA y No-Code</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-900/30 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-labora-neon" />
                </div>
                <h3 className="text-xl font-semibold mb-2 text-white">Colaborativo</h3>
                <p className="text-gray-300">Aprende en comunidad con otros creadores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nueva sección para Estudio Labora */}
      <section id="estudio-labora" className="py-20 bg-gray-950 border-t border-gray-800" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
          {/* Imagen a la izquierda */}
          <div className="flex-1 flex justify-center">
            <img
              src={estudioLabora.image}
              alt="Equipo Estudio Labora trabajando en soluciones digitales"
              className="rounded-3xl w-full max-w-md object-cover shadow-lg border border-labora-neon/20"
            />
          </div>
          {/* Contenido a la derecha */}
          <div className="flex-1 max-w-xl">
            <span className="text-labora-neon font-semibold text-lg mb-2 block">Para empresas</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              ¿Tu <span className="bg-labora-neon text-gray-900 px-2 rounded">empresa</span><br />necesita soluciones tech?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Impulsa tu negocio con productos digitales hechos a medida usando IA, No-Code y automatizaciones. Nuestro equipo de expertos y egresados te ayuda a innovar rápido y sin complicaciones técnicas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to={estudioLabora.link}>
                <Button size="lg" variant="outline" className="border-labora-neon text-gray-900 hover:bg-labora-neon/10 font-bold">
                  Transforma tu empresa
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-white" data-aos="fade-up">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-labora-neon">
            ¿Listo para crear tu primer proyecto con IA?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto text-gray-200">
            Únete a cientos de estudiantes que ya están construyendo el futuro con Inteligencia Artificial y No-Code
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bootcamp">
              <Button size="lg" className="bg-labora-neon text-gray-900 hover:bg-labora-neon/80 shadow-neon-glow">
                <Calendar className="mr-2 h-5 w-5" />
                Ver Próximas Fechas
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-labora-neon text-gray-900 hover:bg-labora-neon/10">
              <Briefcase className="mr-2 h-5 w-5" />
              Conocer Estudio Labora
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
      <style>{`
  a:focus, button:focus {
    outline: 2px solid #00FFD0;
    outline-offset: 2px;
    box-shadow: 0 0 0 2px #00FFD033;
  }
`}</style>
    </div>
  );
};

export default Index;
