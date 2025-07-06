
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
      link: '/bootcamp'
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
      link: '/curso-inicia'
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
      link: '/hackatones'
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
      link: '/estudio-labora'
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Navigation */}
      <nav className="bg-white/90 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <img src="/lovable-uploads/logolabora.webp" alt="Labora AI" className="h-8" />
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#productos" className="text-gray-600 hover:text-labora-red transition-colors">Productos</a>
              <a href="#testimonios" className="text-gray-600 hover:text-labora-red transition-colors">Testimonios</a>
              <a href="#nosotros" className="text-gray-600 hover:text-labora-red transition-colors">Nosotros</a>
              <Button className="bg-labora-red hover:bg-labora-red/90">
                Comenzar Ahora
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <Badge className="mb-6 bg-labora-neon/10 text-labora-neon border-labora-neon">
              Academia de IA y No-Code
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Crea proyectos con{' '}
              <span className="text-labora-red">Inteligencia Artificial</span>
              {' '}sin programar
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Formamos creadores digitales desde cero. Aprende a lanzar tus propios proyectos al mercado 
              usando IA, herramientas No-Code y dinámicas colaborativas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/bootcamp">
                <Button size="lg" className="bg-labora-red hover:bg-labora-red/90">
                  <Play className="mr-2 h-5 w-5" />
                  Ver Bootcamp
                </Button>
              </Link>
              <Button size="lg" variant="outline">
                <BookOpen className="mr-2 h-5 w-5" />
                Explorar Cursos
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section id="productos" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Nuestros Productos
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Desde principiante hasta experto, tenemos el programa perfecto para tu nivel y objetivos
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {products.map((product) => (
              <Card key={product.id} className="relative overflow-hidden hover:shadow-xl transition-all duration-300 group">
                {product.badge && (
                  <Badge className={`absolute top-4 right-4 ${product.color} text-white`}>
                    {product.badge}
                  </Badge>
                )}
                <CardHeader className="pb-4">
                  <CardTitle className="text-2xl mb-2">{product.title}</CardTitle>
                  <CardDescription className="text-base mb-4">{product.description}</CardDescription>
                  <div className="flex items-center gap-4 text-sm text-gray-600">
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
                        <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to={product.link}>
                    <Button className="w-full group-hover:bg-labora-red group-hover:text-white transition-colors">
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

      {/* Testimonials */}
      <section id="testimonios" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Lo que dicen nuestros estudiantes
            </h2>
            <p className="text-xl text-gray-600">
              Historias reales de transformación digital
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <div className="flex justify-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="nosotros" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">
              Sobre Labora AI
            </h2>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Somos una academia enfocada en educación <strong>divertida, experimental y accesible</strong>. 
              Nuestra misión es formar creadores digitales desde cero, ayudándolos a lanzar sus propios 
              proyectos al mercado o trabajar para clientes mediante el uso de Inteligencia Artificial, 
              herramientas No-Code y dinámicas colaborativas de aprendizaje.
            </p>
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="bg-labora-red/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Target className="h-8 w-8 text-labora-red" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Práctico y Real</h3>
                <p className="text-gray-600">Proyectos reales que puedes lanzar al mercado</p>
              </div>
              <div className="text-center">
                <div className="bg-labora-neon/10 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Zap className="h-8 w-8 text-labora-neon" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovador</h3>
                <p className="text-gray-600">Las últimas tecnologías de IA y No-Code</p>
              </div>
              <div className="text-center">
                <div className="bg-purple-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Users className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Colaborativo</h3>
                <p className="text-gray-600">Aprende en comunidad con otros creadores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-20 bg-gradient-to-r from-labora-red to-pink-600 text-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            ¿Listo para crear tu primer proyecto con IA?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Únete a cientos de estudiantes que ya están construyendo el futuro con Inteligencia Artificial y No-Code
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/bootcamp">
              <Button size="lg" className="bg-white text-labora-red hover:bg-gray-100">
                <Calendar className="mr-2 h-5 w-5" />
                Ver Próximas Fechas
              </Button>
            </Link>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
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
