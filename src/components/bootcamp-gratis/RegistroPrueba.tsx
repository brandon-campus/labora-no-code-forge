import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CheckCircle, ArrowRight, Clock, Users, Star } from 'lucide-react';
import { fbqTrack } from "@/lib/fbqTrack";

declare global {
  interface Window {
    gtag?: (...args: any[]) => void;
  }
}

const RegistroPrueba = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    experiencia: 'principiante'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular envío del formulario
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      fbqTrack('PruebaGratisRegistro');
      if (window.gtag) {
        window.gtag('event', 'prueba_gratis_registro', {
          event_category: 'conversion',
          event_label: 'RegistroPrueba',
          value: 1
        });
      }
    }, 2000);
  };

  const beneficios = [
    "2 clases completamente gratuitas",
    "Acceso al campus virtual por 1 semana",
    "Material de apoyo descargable",
    "Certificado de participación",
    "Descuento especial si continúas"
  ];

  if (isSubmitted) {
    return (
      <section className="py-20 bg-gradient-to-r from-labora-neon to-labora-red">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center text-white">
            <CheckCircle className="h-20 w-20 mx-auto mb-6 text-white" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              ¡Registro exitoso!
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Gracias por registrarte en las 2 clases gratuitas del bootcamp. 
              Te hemos enviado un email con toda la información y los próximos pasos.
            </p>
            <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 mb-8">
              <h3 className="text-xl font-bold mb-4">Próximos pasos:</h3>
              <div className="space-y-3 text-left">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">1</div>
                  <span>Revisa tu email y confirma tu registro</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">2</div>
                  <span>Recibirás la guía de preparación en 24hs</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black font-bold text-sm">3</div>
                  <span>Te contactaremos para confirmar horarios</span>
                </div>
              </div>
            </div>
            <a 
              href="https://wa.me/5491178519054?text=%C2%A1Hola%20Labora!%20Ya%20me%20registr%C3%A9%20para%20las%20clases%20gratuitas"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors inline-flex items-center gap-2"
            >
              Hablar por Whatsapp
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="registro-prueba" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Formulario */}
            <div className="bg-white p-8 rounded-2xl shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-4">
                  Reserva tu lugar <span className="text-labora-neon">GRATIS</span>
                </h2>
                <p className="text-gray-600">
                  Solo 15 cupos disponibles por cohorte
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="nombre" className="text-gray-700 font-semibold">
                    Nombre completo *
                  </Label>
                  <Input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={formData.nombre}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="Tu nombre completo"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-gray-700 font-semibold">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="tu@email.com"
                  />
                </div>

                <div>
                  <Label htmlFor="telefono" className="text-gray-700 font-semibold">
                    WhatsApp *
                  </Label>
                  <Input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    value={formData.telefono}
                    onChange={handleInputChange}
                    className="mt-2"
                    placeholder="+54 9 11 1234-5678"
                  />
                </div>

                <div>
                  <Label htmlFor="experiencia" className="text-gray-700 font-semibold">
                    Tu experiencia con tecnología
                  </Label>
                  <select
                    id="experiencia"
                    name="experiencia"
                    value={formData.experiencia}
                    onChange={handleInputChange}
                    className="mt-2 w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-labora-neon"
                  >
                    <option value="principiante">Principiante - Nunca programé</option>
                    <option value="basico">Básico - Alguna experiencia</option>
                    <option value="intermedio">Intermedio - Conozco algunas herramientas</option>
                    <option value="avanzado">Avanzado - Experiencia en desarrollo</option>
                  </select>
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-bold py-4 text-lg rounded-full transition-all shadow-lg"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Procesando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Star className="h-5 w-5" />
                      RESERVAR MI LUGAR GRATIS
                      <ArrowRight className="h-5 w-5" />
                    </div>
                  )}
                </Button>

                <p className="text-xs text-gray-500 text-center">
                  Al registrarte aceptas recibir información sobre las clases gratuitas. 
                  No compartimos tu información con terceros.
                </p>
              </form>
            </div>

            {/* Beneficios */}
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  ¿Qué incluye tu registro?
                </h3>
                <div className="space-y-4">
                  {beneficios.map((beneficio, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="h-6 w-6 text-labora-neon flex-shrink-0" />
                      <span className="text-gray-700">{beneficio}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-r from-labora-red to-labora-neon p-6 rounded-2xl text-white">
                <h4 className="text-xl font-bold mb-4">Próxima cohorte</h4>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Clock className="h-5 w-5" />
                    <span>Lunes y Miércoles 19:00hs</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Users className="h-5 w-5" />
                    <span>15 cupos disponibles</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="h-5 w-5" />
                    <span>Inicio: Próxima semana</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-100 p-6 rounded-2xl">
                <h4 className="text-lg font-bold text-gray-900 mb-3">
                  💡 ¿Por qué limitamos a 15 estudiantes?
                </h4>
                <p className="text-gray-700 text-sm">
                  Queremos garantizar atención personalizada y que puedas hacer todas las preguntas que necesites. 
                  Grupos pequeños = mejor aprendizaje.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegistroPrueba; 