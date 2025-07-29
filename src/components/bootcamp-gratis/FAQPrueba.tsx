import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQPrueba = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      pregunta: "¿Realmente son 100% gratuitas las 2 clases?",
      respuesta: "Sí, completamente gratuitas. No hay ningún costo oculto ni compromiso de continuar. Solo queremos que experimentes el valor real del bootcamp."
    },
    {
      pregunta: "¿Necesito experiencia previa en programación?",
      respuesta: "No, no necesitas ninguna experiencia previa. Las clases están diseñadas para principiantes absolutos. Solo necesitas ganas de aprender y una computadora."
    },
    {
      pregunta: "¿Qué pasa si no puedo asistir a alguna de las clases?",
      respuesta: "Te enviamos la grabación de la clase que te perdiste, pero recomendamos asistir en vivo para aprovechar la interacción con los mentores y resolver dudas en tiempo real."
    },
    {
      pregunta: "¿Cuántos cupos hay disponibles?",
      respuesta: "Limitamos a 15 estudiantes por cohorte para garantizar atención personalizada. Los cupos se llenan rápido, por eso recomendamos reservar tu lugar cuanto antes."
    },
    {
      pregunta: "¿Qué herramientas necesito instalar?",
      respuesta: "Te enviaremos una guía de preparación con todo lo que necesitas instalar antes de las clases. Son herramientas gratuitas y fáciles de configurar."
    },
    {
      pregunta: "¿Puedo invitar a un amigo a las clases gratuitas?",
      respuesta: "¡Por supuesto! Cada persona debe registrarse individualmente para recibir su acceso personal al campus virtual y los materiales."
    },
    {
      pregunta: "¿Qué pasa después de las 2 clases gratuitas?",
      respuesta: "Al finalizar las 2 clases, tendrás la opción de continuar con el bootcamp completo con un descuento especial. No hay obligación, pero la mayoría de estudiantes deciden continuar."
    },
    {
      pregunta: "¿Puedo hacer preguntas durante las clases?",
      respuesta: "¡Absolutamente! Las clases son 100% interactivas. Puedes hacer preguntas en cualquier momento y los mentores te responderán en vivo."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Preguntas frecuentes sobre las <span className="text-labora-neon">clases gratuitas</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Resolvemos las dudas más comunes sobre la prueba gratuita del bootcamp.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-8 py-6 text-left bg-gray-50 hover:bg-gray-100 transition-colors flex items-center justify-between"
                >
                  <h3 className="text-lg font-semibold text-gray-900 pr-4">
                    {faq.pregunta}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-labora-neon flex-shrink-0" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-labora-neon flex-shrink-0" />
                  )}
                </button>
                
                {openIndex === index && (
                  <div className="px-8 py-6 bg-white border-t border-gray-200">
                    <p className="text-gray-700 leading-relaxed">
                      {faq.respuesta}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-labora-neon to-labora-red p-8 rounded-2xl text-white">
            <h3 className="text-2xl font-bold mb-4">
              ¿Tienes más preguntas?
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Nuestro equipo está aquí para ayudarte. Contáctanos y te responderemos en menos de 24 horas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="https://wa.me/5491178519054?text=%C2%A1Hola%20Labora!%20Tengo%20preguntas%20sobre%20las%20clases%20gratuitas"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-black font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-colors"
              >
                Hablar por Whatsapp
              </a>
              <button className="border-2 border-white text-white font-bold px-8 py-3 rounded-full hover:bg-white hover:text-black transition-colors">
                Enviar email
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQPrueba; 