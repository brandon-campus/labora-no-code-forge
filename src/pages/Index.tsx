
import React from 'react';
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
      subtitle: 'Colaborativo',
      price: '25 USD',
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
    },
    {
      id: 'estudio',
      title: 'Estudio Labora',
      subtitle: 'Servicios',
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
    }
  ];

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

  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Navigation */}
      <nav className="bg-gray-900/90 backdrop-blur-md border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/lovable-uploads/logolabora.webp" alt="Labora AI" className="h-8" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#productos" className="text-gray-300 hover:text-labora-neon transition-colors">Productos</a>
              <a href="#testimonios" className="text-gray-300 hover:text-labora-neon transition-colors">Testimonios</a>
              <a href="#nosotros" className="text-gray-300 hover:text-labora-neon transition-colors">Nosotros</a>
              <Button className="bg-labora-neon text-gray-900 hover:bg-labora-neon/80 shadow-neon-glow">
                Comenzar Ahora
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
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
              <Button size="lg" variant="outline" className="border-labora-neon text-labora-neon hover:bg-labora-neon/10">
                <BookOpen className="mr-2 h-5 w-5" />
                Explorar Cursos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-gray-900/80 backdrop-blur-md">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Nuestros Productos
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Desde principiante hasta experto, tenemos el programa perfecto para tu nivel y objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="relative overflow-hidden hover:shadow-2xl transition-all duration-300 group bg-white/10 backdrop-blur-md border border-labora-neon/10">
                {product.badge && (
                  <Badge className={`absolute top-4 right-4 ${product.color} text-white shadow-neon-glow`}>
                    {product.badge}
                  </Badge>
                )}
                {/* Imagen representativa */}
                <div className="w-full h-40 bg-gray-800/60 flex items-center justify-center overflow-hidden mb-4 rounded-t-xl">
                  <img src={product.image} alt={`${product.title} - ${product.description}`} className="object-cover w-full h-full" />
                </div>
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl mb-2 text-white">{product.title}</CardTitle>
                  <CardDescription className="text-base mb-4 text-gray-300">{product.description}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-400">
                    <div className="flex items-center gap-1">
                      <DollarSign className="h-4 w-4" />
                      {product.price}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-4 w-4" />
                      {product.duration}
                    </div>
                    <div className="flex items-center gap-1">
                      <Users className="h-4 w-4" />
                      {product.students}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-6">
                    {product.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-labora-neon mt-0.5 flex-shrink-0" />
                        <span className="text-gray-200">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={product.link}>
                    <Button className="w-full group-hover:bg-labora-neon group-hover:text-gray-900 transition-colors bg-labora-neon/80 text-gray-900 font-semibold shadow-neon-glow">
                      Conocer más
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Tabla comparativa de productos */}
      <section className="bg-gray-900/80 pb-20 backdrop-blur-md">
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
      <TestimonialsSection />

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-gray-900/80 backdrop-blur-md">
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

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-950 to-gray-900 text-white">
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
            <Button size="lg" variant="outline" className="border-labora-neon text-labora-neon hover:bg-labora-neon/10">
              <Briefcase className="mr-2 h-5 w-5" />
              Conocer Estudio Labora
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default Index;
