import React, { useState } from 'react';
import { CheckCircle, Clock, Users, Calendar, ArrowRight, Zap, Star, Globe } from 'lucide-react';
import { Button } from "@/components/ui/button";

const PostAplicacion = () => {
  const [selectedTime, setSelectedTime] = useState<string>('');

  const handleTimeSelection = (time: string) => {
    setSelectedTime(time);
  };

  const handleConfirmClass = () => {
    if (selectedTime) {
      const message = encodeURIComponent(
        `¡Hola Labora! Me pre-inscribí en el Bootcamp de IA y No Code y quiero confirmar mi asistencia a la CLASE GRATUITA del Lunes 8 de Septiembre en el horario de ${selectedTime}. Por favor, envíenme toda la información necesaria.`
      );
    window.open(`https://wa.me/5491138142899?text=${message}`, '_blank');
    }
  };

  const timeSlots = [
    {
      id: 'morning',
      time: '10:00 - 12:00',
      timezone: 'Hora Argentina',
      label: 'Mañana',
      available: true,
      otherTimezones: {
        peru: '08:00 - 10:00',
        colombia: '08:00 - 10:00', 
        mexico: '07:00 - 09:00',
        chile: '09:00 - 11:00'
      }
    },
    {
      id: 'afternoon', 
      time: '15:00 - 17:00',
      timezone: 'Hora Argentina',
      label: 'Tarde',
      available: true,
      otherTimezones: {
        peru: '13:00 - 15:00',
        colombia: '13:00 - 15:00',
        mexico: '12:00 - 14:00', 
        chile: '14:00 - 16:00'
      }
    },
    {
      id: 'evening',
      time: '20:00 - 22:00', 
      timezone: 'Hora Argentina',
      label: 'Noche',
      available: true,
      otherTimezones: {
        peru: '18:00 - 20:00',
        colombia: '18:00 - 20:00',
        mexico: '17:00 - 19:00',
        chile: '19:00 - 21:00'
      }
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Header Simple */}
      <header className="w-full bg-transparent backdrop-blur-sm z-50 fixed top-0 left-0 right-0">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center h-14 sm:h-16">
            <img 
              src="/lovable-uploads/logolabora.webp" 
              alt="Labora" 
              className="h-6 sm:h-8 md:h-10 w-auto"
            />
          </div>
        </div>
      </header>

      <div className="pt-14 sm:pt-16">
        {/* Success Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4">
          <div className="max-w-4xl mx-auto text-center">
            {/* Success Badge */}
            <div className="inline-flex items-center gap-2 mb-6 sm:mb-8 px-4 sm:px-6 py-2 sm:py-3 bg-labora-neon/20 text-labora-neon rounded-full text-xs sm:text-sm font-bold border border-labora-neon/30">
              <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5" />
              <span>¡PRE-INSCRIPCIÓN COMPLETADA!</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 text-white leading-tight">
              ¡Perfecto! Ahora elige tu <span className="text-labora-neon">clase gratuita</span>
            </h1>

            {/* Subheadline */}
            <p className="text-base sm:text-lg md:text-xl mb-8 sm:mb-12 max-w-2xl mx-auto text-gray-300 leading-relaxed">
              Te hemos reservado un lugar en nuestra clase gratuita en vivo del <span className="text-labora-neon font-bold">Lunes 8 de Septiembre</span>. 
              Elige el horario que mejor te convenga.
            </p>

            {/* Class Details Card */}
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-2xl max-w-3xl mx-auto mb-8">
              {/* Class Icon */}
              <div className="w-16 h-16 sm:w-20 sm:h-20 bg-labora-neon rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6">
                <Zap className="h-8 w-8 sm:h-10 sm:w-10 text-black" />
              </div>

              {/* Class Title */}
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 sm:mb-4 text-white">
                Clase Gratuita en Vivo
              </h2>

              {/* Class Description */}
              <p className="text-sm sm:text-base md:text-lg mb-6 sm:mb-8 text-gray-300 leading-relaxed">
                Aprende a crear tu primera aplicación con IA y No Code en solo 2 horas. 
                <span className="text-labora-neon font-bold"> Sin conocimientos previos necesarios.</span>
              </p>

              {/* Class Features */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <Clock className="h-4 w-4 text-labora-neon" />
                  <span>2 horas intensivas</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <Users className="h-4 w-4 text-labora-neon" />
                  <span>Clase en vivo</span>
                </div>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-300">
                  <Star className="h-4 w-4 text-labora-neon" />
                  <span>100% práctica</span>
                </div>
              </div>

              {/* Date Badge */}
              <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-gray-700/50 text-gray-300 rounded-lg text-sm font-medium border border-gray-600">
                <Calendar className="h-4 w-4 text-labora-neon" />
                <span>Lunes 8 de Septiembre</span>
              </div>
            </div>

            {/* Time Selection */}
            <div className="bg-gray-800 rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700 shadow-2xl max-w-4xl mx-auto mb-8">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-6 text-white text-center">
                Elige tu horario preferido
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6">
                {timeSlots.map((slot) => (
                  <button
                    key={slot.id}
                    onClick={() => handleTimeSelection(slot.time)}
                    className={`p-4 rounded-lg border-2 transition-all duration-200 ${
                      selectedTime === slot.time
                        ? 'border-labora-neon bg-labora-neon/10 text-labora-neon'
                        : 'border-gray-600 bg-gray-700 hover:border-gray-500 text-gray-300 hover:text-white'
                    } ${!slot.available ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
                    disabled={!slot.available}
                  >
                    <div className="text-center">
                      <div className="text-lg font-bold mb-1">{slot.label}</div>
                      <div className="text-sm font-semibold">{slot.time}</div>
                      <div className="text-xs text-gray-400 mt-1">{slot.timezone}</div>
                      {!slot.available && (
                        <div className="text-xs text-red-400 mt-1">Completo</div>
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {/* Timezone Converter */}
              <div className="bg-gray-700 rounded-lg p-4 border border-gray-600">
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="h-4 w-4 text-labora-neon" />
                  <h4 className="text-white font-semibold text-sm">Horarios en otros países</h4>
                </div>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
                  <div className="text-center">
                    <div className="text-labora-neon font-semibold mb-1">🇵🇪 Perú</div>
                    <div className="text-gray-300">
                      {selectedTime && timeSlots.find(s => s.time === selectedTime)?.otherTimezones.peru}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-labora-neon font-semibold mb-1">🇨🇴 Colombia</div>
                    <div className="text-gray-300">
                      {selectedTime && timeSlots.find(s => s.time === selectedTime)?.otherTimezones.colombia}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-labora-neon font-semibold mb-1">🇲🇽 México</div>
                    <div className="text-gray-300">
                      {selectedTime && timeSlots.find(s => s.time === selectedTime)?.otherTimezones.mexico}
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-labora-neon font-semibold mb-1">🇨🇱 Chile</div>
                    <div className="text-gray-300">
                      {selectedTime && timeSlots.find(s => s.time === selectedTime)?.otherTimezones.chile}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Confirm Button */}
            <Button
              onClick={handleConfirmClass}
              disabled={!selectedTime}
              className={`font-bold rounded-full px-8 py-6 text-lg transition-all shadow-lg transform hover:scale-105 w-full sm:w-auto ${
                selectedTime
                  ? 'bg-labora-neon hover:bg-labora-neon/90 text-black shadow-labora-neon/25'
                  : 'bg-gray-600 text-gray-400 cursor-not-allowed'
              }`}
            >
              {selectedTime ? `CONFIRMAR CLASE - ${selectedTime}` : 'SELECCIONA UN HORARIO'}
              <ArrowRight className="ml-3 h-5 w-5" />
            </Button>

            {/* Trust Signals */}
            <div className="mt-6 sm:mt-8 flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 sm:gap-6 text-gray-400 text-xs sm:text-sm">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-labora-neon rounded-full mr-2"></div>
                Cupos limitados
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-labora-neon rounded-full mr-2"></div>
                Sin costo
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-labora-neon rounded-full mr-2"></div>
                Certificado incluido
              </div>
            </div>
          </div>
        </section>

        {/* What You'll Learn Section */}
        <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-900/50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8 sm:mb-12">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4 text-white">
                ¿Qué aprenderás en esta <span className="text-labora-neon">clase gratuita</span>?
              </h2>
              <p className="text-sm sm:text-base md:text-lg text-gray-300">
                En solo 2 horas tendrás las bases para crear tu primera aplicación.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">🚀 Crear tu primera app</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Aprende a usar herramientas de IA para generar código y crear una aplicación funcional desde cero.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">⚡ Automatizar procesos</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Descubre cómo usar No Code para automatizar tareas repetitivas y ahorrar horas de trabajo.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg"> Generar ingresos</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Conoce las estrategias para monetizar tus creaciones y empezar a generar ingresos con IA.
                </p>
              </div>

              <div className="bg-gray-800 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-gray-700">
                <h3 className="text-white font-semibold mb-2 sm:mb-3 text-base sm:text-lg">🎯 Proyecto real</h3>
                <p className="text-gray-300 text-xs sm:text-sm leading-relaxed">
                  Termina la clase con un proyecto real que podrás usar como portfolio o para tu negocio.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostAplicacion; 