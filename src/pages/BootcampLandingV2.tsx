import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  ArrowRight, Play, Users, Star, CheckCircle, Zap, Target, 
  Code, Database, Bot, Rocket, Calendar, Clock, ChevronRight,
  Lightbulb, TrendingUp, Globe, MessageCircle 
} from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";
import WizardAplicar from '@/components/WizardAplicar';

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const BootcampLandingV2 = () => {
  const [wizardOpen, setWizardOpen] = useState(false);

  const handleCTAClick = () => {
    setWizardOpen(true);
    fbqTrack('BootcampLandingV2CTA');
    if (window.gtag) {
      window.gtag('event', 'bootcamp_landing_v2_cta', {
        event_category: 'engagement',
        event_label: 'BootcampLandingV2',
        value: 1
      });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Hero Section */}
      <section className="px-4 py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-blue-50 text-blue-600 rounded-full text-sm font-semibold border border-blue-200">
            <Star className="h-4 w-4" />
            <span>Clase de prueba gratuita disponible</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 text-slate-900">
            Aprende a crear proyectos con IA en vivo y empieza a <span className="text-blue-600">monetizarlos</span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Un Bootcamp intensivo de <strong>4 semanas</strong> para aprender IA + No Code creando tu propio proyecto desde cero. 
            <strong className="text-slate-900"> Accede gratis a la primera clase de prueba.</strong>
          </p>
          
          <Button
            onClick={handleCTAClick}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-full px-8 py-6 text-lg md:text-xl transition-all shadow-lg shadow-blue-600/25 mb-8 w-full md:w-auto"
          >
            <Play className="mr-3 h-6 w-6" />
            Agenda tu clase de prueba gratis
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          
          <div className="text-sm text-slate-500 mb-12">
            <span className="font-semibold text-slate-700">+100 alumnos y empresas confían en nosotros</span>
          </div>
          
          {/* Company Logos */}
          <div className="grid grid-cols-3 md:grid-cols-6 gap-8 opacity-60 items-center">
            <div className="h-8 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-xs text-slate-500">Logo 1</span>
            </div>
            <div className="h-8 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-xs text-slate-500">Logo 2</span>
            </div>
            <div className="h-8 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-xs text-slate-500">Logo 3</span>
            </div>
            <div className="h-8 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-xs text-slate-500">Logo 4</span>
            </div>
            <div className="h-8 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-xs text-slate-500">Logo 5</span>
            </div>
            <div className="h-8 bg-slate-200 rounded flex items-center justify-center">
              <span className="text-xs text-slate-500">Logo 6</span>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Esto es para mí? */}
      <section className="px-4 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            ¿Esto es para mí?
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Perfecto para personas con ideas que quieren convertirlas en realidad
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <Lightbulb className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Personas con ideas
              </h3>
              <p className="text-slate-600">
                Tienes una idea pero no sabes por dónde empezar a desarrollarla.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <Users className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Freelancers
              </h3>
              <p className="text-slate-600">
                Quieres crear tu propio estudio y dejar de trabajar por proyecto.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <TrendingUp className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Emprendedores
              </h3>
              <p className="text-slate-600">
                Buscas innovar con IA y crear productos digitales escalables.
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <Target className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Profesionales
              </h3>
              <p className="text-slate-600">
                Quieres adquirir nuevas habilidades y mantenerte competitivo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ¿Qué es el Bootcamp? */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-slate-900">
              ¿Qué es el Bootcamp?
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              4 semanas intensivas donde aprenderás a crear y monetizar proyectos usando IA y herramientas No-Code
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Play className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Aprender en vivo</h3>
              <p className="text-slate-600">
                Clases interactivas con mentores expertos y compañeros motivados
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Crear tu proyecto</h3>
              <p className="text-slate-600">
                Desarrollarás una aplicación real desde la idea hasta el lanzamiento
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Rocket className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Lanzarlo al mercado</h3>
              <p className="text-slate-600">
                Estrategias para conseguir usuarios y generar ingresos reales
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Qué aprenderás */}
      <section className="px-4 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Qué aprenderás
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Un roadmap completo desde la idea hasta el producto funcionando
          </p>

          {/* Timeline horizontal en desktop, vertical en mobile */}
          <div className="space-y-6 md:space-y-0 md:grid md:grid-cols-5 md:gap-4">
            <div className="flex md:flex-col items-start md:items-center text-left md:text-center">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4 md:mr-0 md:mb-4 flex-shrink-0">
                <span className="text-white font-bold">1</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">De idea a app</h3>
                <p className="text-sm text-slate-600">Convierte tu concepto en una aplicación funcional</p>
              </div>
            </div>

            <div className="flex md:flex-col items-start md:items-center text-left md:text-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4 md:mr-0 md:mb-4 flex-shrink-0">
                <span className="text-white font-bold">2</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">IA como copiloto</h3>
                <p className="text-sm text-slate-600">Usa IA para acelerar tu desarrollo y creatividad</p>
              </div>
            </div>

            <div className="flex md:flex-col items-start md:items-center text-left md:text-center">
              <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4 md:mr-0 md:mb-4 flex-shrink-0">
                <span className="text-white font-bold">3</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Bases de datos + APIs</h3>
                <p className="text-sm text-slate-600">Conecta y almacena información de forma profesional</p>
              </div>
            </div>

            <div className="flex md:flex-col items-start md:items-center text-left md:text-center">
              <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4 md:mr-0 md:mb-4 flex-shrink-0">
                <span className="text-white font-bold">4</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Automatizaciones</h3>
                <p className="text-sm text-slate-600">Crea agentes y flujos que trabajen por ti</p>
              </div>
            </div>

            <div className="flex md:flex-col items-start md:items-center text-left md:text-center">
              <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mr-4 md:mr-0 md:mb-4 flex-shrink-0">
                <span className="text-white font-bold">5</span>
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-2">Lanzamiento</h3>
                <p className="text-sm text-slate-600">Estrategias para conseguir usuarios reales</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Herramientas que dominarás */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Herramientas que dominarás
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            El stack tecnológico más moderno para crear sin límites
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {[
              { name: 'Cursor AI', icon: '🤖' },
              { name: 'Supabase', icon: '⚡' },
              { name: 'Windsurf', icon: '🏄‍♂️' },
              { name: 'V0', icon: '✨' },
              { name: 'n8n', icon: '🔄' },
              { name: 'GitHub', icon: '🐙' },
              { name: 'Make', icon: '🔧' },
              { name: 'Lovable', icon: '❤️' }
            ].map((tool, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-slate-100 rounded-2xl flex items-center justify-center mx-auto mb-3 text-2xl">
                  {tool.icon}
                </div>
                <p className="text-sm font-medium text-slate-700">{tool.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Proyectos que podrás crear */}
      <section className="px-4 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Proyectos que podrás crear
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            Ejemplos reales de aplicaciones que desarrollarás durante el bootcamp
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <Globe className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Marketplace de arte
              </h3>
              <p className="text-slate-600 text-sm">
                Plataforma para compra/venta de arte digital con pagos automatizados
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <Zap className="h-10 w-10 text-green-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                SaaS para freelancers
              </h3>
              <p className="text-slate-600 text-sm">
                Herramienta de gestión de proyectos con IA para optimizar workflows
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <Target className="h-10 w-10 text-purple-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Ecommerce automatizado
              </h3>
              <p className="text-slate-600 text-sm">
                Tienda online con inventario y marketing completamente automatizados
              </p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <Bot className="h-10 w-10 text-red-600 mb-4" />
              <h3 className="text-lg font-bold text-slate-900 mb-3">
                Agente con IA
              </h3>
              <p className="text-slate-600 text-sm">
                Asistente inteligente para atención al cliente 24/7
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Plan de Estudios */}
      <section className="px-4 py-16">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-slate-900">
            Plan de Estudios
          </h2>
          <p className="text-lg text-slate-600 text-center mb-12 max-w-3xl mx-auto">
            4 semanas estructuradas para llevarte de cero a experto
          </p>

          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">1</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Semana 1</h3>
                  <p className="text-slate-600">Fundamentos IA + No Code</p>
                </div>
              </div>
              <p className="text-slate-600 ml-16">
                Introducción a herramientas de IA, conceptos básicos de No-Code, y configuración del entorno de desarrollo.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">2</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Semana 2</h3>
                  <p className="text-slate-600">Bases de datos y APIs</p>
                </div>
              </div>
              <p className="text-slate-600 ml-16">
                Diseño de bases de datos con Supabase, integración de APIs externas y manejo de datos en tiempo real.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-purple-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">3</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Semana 3</h3>
                  <p className="text-slate-600">Automatizaciones y agentes</p>
                </div>
              </div>
              <p className="text-slate-600 ml-16">
                Creación de workflows automatizados, desarrollo de agentes inteligentes y integración de servicios.
              </p>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center mr-4">
                  <span className="text-white font-bold">4</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900">Semana 4</h3>
                  <p className="text-slate-600">Lanzamiento y adquisición de usuarios</p>
                </div>
              </div>
              <p className="text-slate-600 ml-16">
                Estrategias de marketing, deployment, analíticas y técnicas para conseguir tus primeros usuarios pagos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="px-4 py-16 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Lo que dicen nuestros estudiantes
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-slate-900">María González</h4>
                  <p className="text-sm text-slate-600">Emprendedora</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                "En 4 semanas lancé mi primera app y conseguí mis primeros 100 usuarios. La metodología es increíble."
              </p>
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-slate-900">Carlos Rodríguez</h4>
                  <p className="text-sm text-slate-600">Freelancer</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                "Pasé de cobrar por horas a crear productos propios. Mi vida profesional cambió completamente."
              </p>
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-slate-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-bold text-slate-900">Ana Martín</h4>
                  <p className="text-sm text-slate-600">Marketing Manager</p>
                </div>
              </div>
              <p className="text-slate-600 mb-4">
                "Conseguí automatizar procesos de mi empresa y ahorro 20 horas semanales. Increíble ROI."
              </p>
              <div className="flex text-yellow-400">
                {[1,2,3,4,5].map(i => <Star key={i} className="h-4 w-4 fill-current" />)}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-slate-900">
            Preguntas frecuentes
          </h2>

          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                ¿Necesito conocimientos previos de programación?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                No, el bootcamp está diseñado para personas sin experiencia técnica. Comenzamos desde cero y te guiamos paso a paso.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                ¿Cuánto tiempo necesito dedicar por semana?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Recomendamos 10-15 horas semanales: 6 horas de clases en vivo y 4-9 horas de práctica personal.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                ¿Qué pasa si no puedo asistir a una clase en vivo?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Todas las clases quedan grabadas y disponibles por 6 meses. También tendrás acceso al campus con materiales adicionales.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4" className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                ¿Hay garantía de devolución?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Sí, ofrecemos garantía de 7 días desde el inicio del bootcamp. Si no estás satisfecho, te devolvemos el 100% del dinero.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5" className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                ¿Incluye certificación?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Al completar el bootcamp recibes un certificado digital que puedes compartir en LinkedIn y agregar a tu portfolio.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6" className="bg-white rounded-2xl shadow-sm border border-slate-200 px-6">
              <AccordionTrigger className="text-left font-semibold text-slate-900">
                ¿Tendré soporte después del bootcamp?
              </AccordionTrigger>
              <AccordionContent className="text-slate-600">
                Sí, tendrás acceso de por vida a nuestra comunidad privada y 3 meses de mentorías grupales opcionales.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Call to Action Final */}
      <section className="px-4 py-16 bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Las próximas cohortes empiezan pronto
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            No te quedes afuera de la experiencia que ya transformó a <strong>+100 alumnos</strong>. 
            Agenda tu clase de prueba gratuita y descubre si este bootcamp es para ti.
          </p>
          
          <Button
            onClick={handleCTAClick}
            className="bg-white text-blue-600 hover:bg-slate-50 font-bold rounded-full px-8 py-6 text-lg md:text-xl transition-all shadow-lg mb-8 w-full md:w-auto"
          >
            <Play className="mr-3 h-6 w-6" />
            Reserva tu clase de prueba gratis ahora
            <ArrowRight className="ml-3 h-6 w-6" />
          </Button>
          
          <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Calendar className="h-5 w-5 text-blue-200" />
              <span className="text-blue-100 font-semibold">Próxima cohorte:</span>
            </div>
            <p className="text-2xl font-bold text-white">16 de Septiembre</p>
            <p className="text-blue-200 text-sm mt-1">Solo quedan 8 cupos disponibles</p>
          </div>
        </div>
      </section>

      <WizardAplicar open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </div>
  );
};

export default BootcampLandingV2;