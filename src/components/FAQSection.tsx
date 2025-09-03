import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, MessageCircle, Users, Zap, CheckCircle } from 'lucide-react';

interface FAQItem {
  question: string;
  answer: string;
  icon: React.ElementType;
  category: 'general' | 'technical' | 'pricing';
}

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]); // Primer item abierto por defecto

  const faqItems: FAQItem[] = [
    {
      question: "¿Necesito alguna experiencia previa en programación?",
      answer: "No. Esta clase está diseñada desde cero para principiantes. Nuestro método te guía paso a paso sin necesidad de conocimientos técnicos previos.",
      icon: Users,
      category: 'general'
    },
    {
      question: "¿La clase es en vivo o grabada?",
      answer: "Es una sesión en vivo para que puedas hacer preguntas en tiempo real y interactuar con otros participantes. Además, te enviaremos la grabación después para que puedas revisarla cuando quieras.",
      icon: Zap,
      category: 'technical'
    },
    {
      question: "¿Qué necesito para la clase?",
      answer: "Solo una computadora con conexión a internet y muchas ganas de aprender. No necesitas instalar ningún software especial ni tener equipos costosos.",
      icon: CheckCircle,
      category: 'technical'
    },
    {
      question: "¿Esto tiene algún costo oculto?",
      answer: "No. La clase de prueba es 100% gratuita y sin compromiso. No hay costos ocultos, no pedimos tarjeta de crédito, y nuestro objetivo es que conozcas nuestro método y veas el potencial que tienes.",
      icon: HelpCircle,
      category: 'pricing'
    },
    {
      question: "¿Qué pasa después de la clase gratuita?",
      answer: "Al final de la clase, presentaremos opcionalmente los detalles del Bootcamp completo para quienes quieran llevar sus habilidades al siguiente nivel. Pero no hay presión: la decisión es completamente tuya.",
      icon: MessageCircle,
      category: 'general'
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'general':
        return 'from-labora-neon to-green-400';
      case 'technical':
        return 'from-labora-red to-red-500';
      case 'pricing':
        return 'from-labora-neon to-labora-red';
      default:
        return 'from-gray-400 to-gray-500';
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" style={{ backgroundColor: '#F7F7F7' }}>
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-1/4 w-32 h-32 bg-gradient-to-br from-blue-400/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute top-32 right-1/4 w-40 h-40 bg-gradient-to-br from-labora-neon/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/3 w-28 h-28 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-gradient-to-br from-pink-400/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 mb-4 sm:mb-6 px-4 sm:px-6 py-2 sm:py-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-gray-200">
            <HelpCircle className="h-4 w-4 sm:h-5 sm:w-5 text-labora-neon" />
            <span className="text-gray-700 text-xs sm:text-sm font-bold uppercase tracking-wider">Preguntas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 sm:mb-6 text-gray-900 leading-tight px-4">
            Resolvemos tus <span className="bg-gradient-to-r from-labora-neon to-green-400 bg-clip-text text-transparent">dudas</span>
          </h2>
          <p className="text-gray-600 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed px-4">
            Las preguntas más comunes que recibimos sobre nuestra clase gratuita y el bootcamp
          </p>
        </div>

        {/* FAQ Items */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">
            {faqItems.map((item, index) => {
              const isOpen = openItems.includes(index);
              const IconComponent = item.icon;
              
              return (
                <div 
                  key={index}
                  className="group bg-white/80 backdrop-blur-xl rounded-2xl shadow-lg border border-white/30 hover:shadow-xl transition-all duration-300 overflow-hidden"
                >
                  {/* Question Header */}
                  <button
                    onClick={() => toggleItem(index)}
                    className="w-full p-4 sm:p-6 text-left transition-all duration-300 hover:bg-white/90"
                  >
                    <div className="flex items-start sm:items-center justify-between gap-3">
                      <div className="flex items-start sm:items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br ${getCategoryColor(item.category)} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 flex-shrink-0`}>
                          <IconComponent className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>
                        <h3 className="text-base sm:text-lg font-bold text-gray-900 group-hover:text-gray-800 transition-colors leading-tight pr-2">
                          {item.question}
                        </h3>
                      </div>
                      <div className="flex-shrink-0">
                        <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-gray-200 transition-colors">
                          {isOpen ? (
                            <ChevronUp className="h-4 w-4 text-gray-600" />
                          ) : (
                            <ChevronDown className="h-4 w-4 text-gray-600" />
                          )}
                        </div>
                      </div>
                    </div>
                  </button>

                  {/* Answer Content */}
                  <div className={`transition-all duration-300 ease-in-out ${
                    isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  } overflow-hidden`}>
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6">
                      <div className="pl-13 sm:pl-16 pr-2 sm:pr-12">
                        <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-3 sm:p-4 border border-gray-100">
                          <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                            {item.answer}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
