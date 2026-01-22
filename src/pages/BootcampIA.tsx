import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import {
  ArrowRight,
  Play,
  Users,
  Clock,
  Star,
  Zap,
  CheckCircle,
  Rocket,
  Code,
  Target,
  Brain,
  Sparkles,
  Award,
  TrendingUp,
  Shield,
  BookOpen,
  Video,
  MessageCircle,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { analytics } from "@/lib/analytics";
import WizardAplicar from '@/components/WizardAplicar';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const BootcampIA = () => {
  const [wizardOpen, setWizardOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  const handleCTAClick = () => {
    setWizardOpen(true);
    analytics.trackEvent('bootcamp_ia_cta', {
      event_category: 'engagement',
      event_label: 'BootcampIA',
      value: 1
    });
  };

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const faqItems = [
    {
      question: "¿Necesito experiencia previa en programación o IA?",
      answer: "No, el bootcamp está diseñado para principiantes. Te enseñamos desde cero cómo usar herramientas de IA y No-Code para crear proyectos reales. Solo necesitas ganas de aprender y una computadora con internet."
    },
    {
      question: "¿Cuánto tiempo dura el bootcamp?",
      answer: "El bootcamp completo tiene una duración de 8 semanas con clases en vivo 2 veces por semana. Además, tendrás acceso al campus virtual con material complementario y proyectos prácticos."
    },
    {
      question: "¿Qué herramientas aprenderé a usar?",
      answer: "Aprenderás a dominar herramientas como ChatGPT, Cursor AI, Bubble, Zapier, Make, y otras plataformas No-Code. También te enseñaremos a combinar IA con automatizaciones para crear productos digitales completos."
    },
    {
      question: "¿Recibiré un certificado al finalizar?",
      answer: "Sí, al completar el bootcamp recibirás un certificado que podrás agregar a tu LinkedIn y portfolio. Este certificado valida tus habilidades en desarrollo con IA y No-Code."
    },
    {
      question: "¿Puedo acceder a las grabaciones de las clases?",
      answer: "Sí, todas las clases quedan grabadas y disponibles en el campus virtual para que puedas revisarlas cuando quieras. También tendrás acceso a material complementario y recursos exclusivos."
    },
    {
      question: "¿Hay algún requisito técnico especial?",
      answer: "Solo necesitas una computadora (Windows, Mac o Linux) con conexión a internet estable. No necesitas software especial ni equipos costosos. Te guiaremos en la instalación de las herramientas necesarias."
    }
  ];

  const beneficios = [
    {
      icon: Brain,
      title: "Domina la IA Generativa",
      description: "Aprende a usar ChatGPT, Cursor AI y otras herramientas de IA para generar código, crear contenido y automatizar tareas complejas.",
      color: "text-labora-neon"
    },
    {
      icon: Code,
      title: "Desarrollo No-Code",
      description: "Crea aplicaciones web y móviles sin escribir código usando plataformas como Bubble, Webflow y otras herramientas visuales.",
      color: "text-labora-red"
    },
    {
      icon: Rocket,
      title: "Proyectos Reales",
      description: "No solo teoría: construirás proyectos reales que podrás usar en tu portfolio o convertir en productos comerciales.",
      color: "text-labora-neon"
    },
    {
      icon: Zap,
      title: "Automatizaciones Avanzadas",
      description: "Aprende a conectar herramientas con Zapier y Make para crear flujos de trabajo automatizados que ahorran tiempo y dinero.",
      color: "text-labora-red"
    },
    {
      icon: Users,
      title: "Comunidad Activa",
      description: "Únete a una comunidad de emprendedores y desarrolladores que están creando productos con IA y No-Code.",
      color: "text-labora-neon"
    },
    {
      icon: Award,
      title: "Certificación",
      description: "Obtén un certificado reconocido que valida tus habilidades y te ayuda a destacar en el mercado laboral.",
      color: "text-labora-red"
    }
  ];

  const modulos = [
    {
      numero: "01",
      titulo: "Fundamentos de IA y No-Code",
      temas: [
        "Introducción a la Inteligencia Artificial",
        "Herramientas de IA generativa (ChatGPT, Claude, etc.)",
        "Conceptos básicos de desarrollo No-Code",
        "Ecosistema de herramientas disponibles"
      ]
    },
    {
      numero: "02",
      titulo: "Cursor AI: Desarrollo con IA",
      temas: [
        "Instalación y configuración de Cursor AI",
        "Generación de código con IA",
        "Creación de aplicaciones web completas",
        "Debugging y optimización asistida por IA"
      ]
    },
    {
      numero: "03",
      titulo: "Bubble: Aplicaciones Web Sin Código",
      temas: [
        "Interfaz y fundamentos de Bubble",
        "Diseño de bases de datos",
        "Workflows y lógica de negocio",
        "Integraciones y APIs"
      ]
    },
    {
      numero: "04",
      titulo: "Automatizaciones con Zapier y Make",
      temas: [
        "Conectar herramientas y servicios",
        "Crear flujos de trabajo automatizados",
        "Webhooks y APIs",
        "Automatizaciones complejas"
      ]
    },
    {
      numero: "05",
      titulo: "Proyecto Final Integrador",
      temas: [
        "Ideación y validación de ideas",
        "Arquitectura de la solución",
        "Desarrollo completo del proyecto",
        "Deploy y lanzamiento"
      ]
    }
  ];

  const testimonios = [
    {
      nombre: "María González",
      rol: "Emprendedora",
      testimonio: "En 2 meses pasé de no saber nada de programación a tener mi primera app funcionando. El bootcamp me cambió la vida.",
      rating: 5
    },
    {
      nombre: "Carlos Rodríguez",
      rol: "Freelancer",
      testimonio: "Ahora ofrezco servicios de desarrollo No-Code y automatizaciones. El bootcamp me abrió una nueva fuente de ingresos.",
      rating: 5
    },
    {
      nombre: "Ana Martínez",
      rol: "Product Manager",
      testimonio: "Aprendí a crear prototipos funcionales sin depender de desarrolladores. Esto aceleró mucho mi trabajo.",
      rating: 5
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden hero-gradient">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-gray-950/50 to-gray-950"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-labora-neon/20 text-labora-neon rounded-full text-sm font-semibold border border-labora-neon/30">
              <Sparkles className="h-4 w-4" />
              <span>Bootcamp de IA y No-Code - 8 Semanas</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black leading-tight mb-6 text-white">
              Domina la <span className="text-labora-neon">Inteligencia Artificial</span> y crea productos <span className="text-labora-red">sin programar</span>
            </h1>

            <p className="text-gray-300 text-xl md:text-2xl mb-8 leading-relaxed max-w-3xl mx-auto">
              Aprende a desarrollar aplicaciones, automatizaciones y productos digitales usando IA y herramientas No-Code.
              <strong className="text-white"> Crea proyectos reales</strong> desde la primera clase.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button
                onClick={handleCTAClick}
                className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-12 py-6 text-xl transition-all shadow-lg shadow-labora-neon/25 uppercase"
              >
                <Play className="mr-3 h-6 w-6" />
                INSCRIBIRME AHORA
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                onClick={() => document.getElementById('curriculum')?.scrollIntoView({ behavior: 'smooth' })}
                className="border-2 border-gray-700 text-white hover:bg-gray-800 font-bold rounded-full px-12 py-6 text-xl transition-all"
              >
                Ver Programa
              </Button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto">
              <div className="flex flex-col items-center gap-2">
                <Users className="h-8 w-8 text-labora-neon" />
                <span className="text-sm text-gray-300">Clases en vivo</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Clock className="h-8 w-8 text-labora-red" />
                <span className="text-sm text-gray-300">8 semanas</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Award className="h-8 w-8 text-labora-neon" />
                <span className="text-sm text-gray-300">Certificado</span>
              </div>
              <div className="flex flex-col items-center gap-2">
                <Video className="h-8 w-8 text-labora-red" />
                <span className="text-sm text-gray-300">Grabaciones</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Beneficios Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                ¿Qué vas a <span className="text-labora-neon">aprender</span>?
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Un programa completo que te lleva de cero a crear productos digitales con IA y No-Code
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {beneficios.map((beneficio, index) => {
                const Icon = beneficio.icon;
                return (
                  <div
                    key={index}
                    className="bg-gray-800 p-8 rounded-2xl border border-gray-700 hover:border-labora-neon/50 transition-all hover:shadow-lg hover:shadow-labora-neon/10"
                  >
                    <Icon className={`h-12 w-12 ${beneficio.color} mb-4`} />
                    <h3 className="text-xl font-bold text-white mb-3">
                      {beneficio.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {beneficio.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum Section */}
      <section id="curriculum" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Programa del <span className="text-labora-neon">Bootcamp</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                5 módulos intensivos diseñados para que construyas proyectos reales
              </p>
            </div>

            <div className="space-y-6">
              {modulos.map((modulo, index) => (
                <div
                  key={index}
                  className="bg-gray-900 p-8 rounded-2xl border border-gray-800 hover:border-labora-neon/30 transition-all"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-gradient-to-br from-labora-neon to-labora-red flex items-center justify-center">
                        <span className="text-2xl font-black text-black">{modulo.numero}</span>
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {modulo.titulo}
                      </h3>
                      <ul className="space-y-2">
                        {modulo.temas.map((tema, temaIndex) => (
                          <li key={temaIndex} className="flex items-start gap-3 text-gray-300">
                            <CheckCircle className="h-5 w-5 text-labora-neon flex-shrink-0 mt-0.5" />
                            <span>{tema}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Lo que dicen nuestros <span className="text-labora-neon">estudiantes</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {testimonios.map((testimonio, index) => (
                <div
                  key={index}
                  className="bg-gray-800 p-8 rounded-2xl border border-gray-700"
                >
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonio.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-labora-neon fill-labora-neon" />
                    ))}
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    "{testimonio.testimonio}"
                  </p>
                  <div>
                    <p className="font-bold text-white">{testimonio.nombre}</p>
                    <p className="text-sm text-gray-400">{testimonio.rol}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Preguntas <span className="text-labora-neon">Frecuentes</span>
              </h2>
            </div>

            <div className="space-y-4">
              {faqItems.map((item, index) => (
                <div
                  key={index}
                  className="bg-gray-900 rounded-xl border border-gray-800 overflow-hidden"
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-gray-800 transition-colors"
                  >
                    <span className="font-semibold text-white pr-4">{item.question}</span>
                    {openFAQ === index ? (
                      <ChevronUp className="h-5 w-5 text-labora-neon flex-shrink-0" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                    )}
                  </button>
                  {openFAQ === index && (
                    <div className="px-6 py-4 bg-gray-800/50">
                      <p className="text-gray-300 leading-relaxed">{item.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-950">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gradient-to-r from-labora-neon/20 to-labora-red/20 p-12 rounded-3xl border border-labora-neon/30">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                ¿Listo para crear tu futuro con <span className="text-labora-neon">IA</span>?
              </h2>
              <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Únete al bootcamp más completo de IA y No-Code de Latinoamérica.
                Aprende creando proyectos reales desde el primer día.
              </p>

              <Button
                onClick={handleCTAClick}
                className="bg-labora-neon hover:bg-labora-neon/90 text-black font-bold rounded-full px-12 py-6 text-xl transition-all shadow-lg shadow-labora-neon/25 uppercase mb-4"
              >
                <Play className="mr-3 h-6 w-6" />
                INSCRIBIRME AHORA
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>

              <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="h-4 w-4 text-labora-neon" />
                  <span>Garantía de satisfacción</span>
                </div>
                <div className="flex items-center gap-2">
                  <TrendingUp className="h-4 w-4 text-labora-red" />
                  <span>Resultados comprobados</span>
                </div>
                <div className="flex items-center gap-2">
                  <MessageCircle className="h-4 w-4 text-labora-neon" />
                  <span>Soporte continuo</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <WizardAplicar open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </div>
  );
};

export default BootcampIA;


