import React, { useState } from 'react';
import { CheckCircle, MessageCircle, MapPin, Calendar, Clock } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { fbqTrack } from "@/lib/fbqTrack";

const pricingByCountry = {
  Otro: { currency: "USD", symbol: "$", cuotas3: 110, cuotas2: 150, unico: 250, total3: 330, total2: 300, ahorras: 80 },
  Argentina: { currency: "ARS", symbol: "$", cuotas3: 156310, cuotas2: 213150, unico: 355250, total3: 468930, total2: 426300, ahorras: 113680 },
  Perú: { currency: "PEN", symbol: "S/", cuotas3: 374, cuotas2: 510, unico: 850, total3: 1122, total2: 1020, ahorras: 272 },
  Colombia: { currency: "COP", symbol: "$", cuotas3: 392480, cuotas2: 535200, unico: 892000, total3: 1177440, total2: 1070400, ahorras: 285440 },
  México: { currency: "MXN", symbol: "$", cuotas3: 1911, cuotas2: 2606, unico: 4343, total3: 5733, total2: 5211, ahorras: 1390 },
  Chile: { currency: "CLP", symbol: "$", cuotas3: 98120, cuotas2: 133800, unico: 223000, total3: 294360, total2: 267600, ahorras: 71360 },
};

type Country = keyof typeof pricingByCountry;

const PostAplicacionTikTok = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>('Otro');

  // Manejo de eventos de Facebook Pixel
  const handleInscribirse = (planName: string) => {
    fbqTrack('ClickInscribirseWhatsApp');
    const message = encodeURIComponent(`Apliqué al Bootcamp de IA y No Code y quiero inscribirme. En "${planName}" y soy del País: ${selectedCountry}`);
    window.open(`https://wa.me/5491138142899?text=${message}`, '_blank');
  };

  const handleInfo = () => {
    fbqTrack('ClickInfoWhatsApp');
    const message = encodeURIComponent("Quiero más info del Bootcamp de IA y No Code");
    window.open(`https://wa.me/5491138142899?text=${message}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-4 relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-labora-neon/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-labora-red/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-6xl mx-auto text-center relative z-10">

        <div className="inline-flex items-center justify-center w-20 h-20 bg-green-500/20 rounded-full mb-8 animate-fade-in-up">
          <CheckCircle className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="text-4xl md:text-6xl font-black mb-6 animate-fade-in-up delay-100">
          ¡Bienvenido al <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-labora-neon to-green-400">Bootcamp de IA y No Code!</span>
        </h1>

        <p className="text-xl text-gray-300 mb-12 max-w-xl mx-auto leading-relaxed animate-fade-in-up delay-200">
          Tu aplicación ha sido recibida correctamente. Estás a un paso de transformar tu carrera profesional.
        </p>

        <div className="flex flex-col gap-8 max-w-6xl mx-auto w-full animate-fade-in-up delay-300">
          
          {/* Información de Inicio */}
          <div className="bg-gradient-to-r from-gray-900/90 via-gray-800/80 to-gray-900/90 backdrop-blur-md border border-gray-700/50 px-8 py-6 md:px-12 md:py-8 rounded-[2rem] flex flex-col md:flex-row items-center justify-center gap-6 md:gap-16 shadow-[0_0_50px_rgba(0,0,0,0.5)] w-fit mx-auto relative overflow-hidden group">
            {/* Subtle glow effect behind */}
            <div className="absolute inset-0 bg-gradient-to-r from-labora-neon/0 via-labora-neon/5 to-labora-neon/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            
            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 rounded-full bg-labora-neon/10 flex items-center justify-center border border-labora-neon/20 shadow-[0_0_15px_rgba(205,255,100,0.1)]">
                <Calendar className="text-labora-neon w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-[10px] md:text-[11px] mb-1 uppercase tracking-[0.2em] font-bold flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
                  Próximo Inicio Confirmado
                </p>
                <p className="font-black text-white text-xl md:text-2xl tracking-tight">Sábado 06 de Junio</p>
              </div>
            </div>

            <div className="hidden md:block w-px h-16 bg-gradient-to-b from-transparent via-gray-600 to-transparent"></div>

            <div className="flex items-center gap-5 relative z-10">
              <div className="w-14 h-14 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 shadow-[0_0_15px_rgba(59,130,246,0.1)]">
                <Clock className="text-blue-400 w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-gray-400 text-[10px] md:text-[11px] mb-1 uppercase tracking-[0.2em] font-bold">7 Semanas • Modalidad Online</p>
                <p className="font-black text-white text-xl md:text-2xl tracking-tight">Sábados 10 a 14hs <span className="text-sm font-medium text-blue-400">(ARG)</span></p>
              </div>
            </div>
          </div>

          {/* Título de Precios */}
          <div className="text-center mb-6 mt-6">
             <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">Elige tu plan de pago</h3>
             
             {/* Selector de País */}
             <div className="bg-gray-900/60 border border-gray-800 p-4 rounded-xl max-w-md mx-auto flex items-center justify-center gap-4">
               <MapPin className="text-labora-neon w-5 h-5" />
               <span className="text-gray-300 font-medium">Ver precios en:</span>
               <select 
                 className="bg-gray-800 text-white border border-gray-700 rounded-lg px-3 py-1.5 outline-none focus:border-labora-neon transition-colors"
                 value={selectedCountry}
                 onChange={(e) => setSelectedCountry(e.target.value as Country)}
               >
                 <option value="Argentina">Argentina</option>
                 <option value="Perú">Perú</option>
                 <option value="Colombia">Colombia</option>
                 <option value="México">México</option>
                 <option value="Chile">Chile</option>
                 <option value="Otro">Otro (USD)</option>
               </select>
             </div>
          </div>

          {/* Grilla de Precios Estilo Platzi */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 items-stretch mt-4">
             {/* Option 1: 3 Cuotas */}
             <div className="bg-[#141824] border border-gray-800/80 p-8 rounded-2xl hover:border-gray-600 transition-all flex flex-col relative group order-2 md:order-1">
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-gray-300 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                 Flexibilidad
               </div>
               <h4 className="text-2xl font-semibold text-white mb-2 mt-2">3 Cuotas</h4>
               <p className="text-gray-400 text-sm mb-6 h-10">Paga en partes para mayor comodidad.</p>
               <div className="flex items-center gap-2 mb-1">
                 <span className="text-3xl lg:text-4xl font-black text-white">3 x {pricingByCountry[selectedCountry].symbol}{pricingByCountry[selectedCountry].cuotas3.toLocaleString()}</span>
                 <span className="text-gray-500 font-medium">{pricingByCountry[selectedCountry].currency}</span>
               </div>
               <p className="text-gray-500 text-sm mb-8 flex-grow">Total: {pricingByCountry[selectedCountry].symbol}{pricingByCountry[selectedCountry].total3.toLocaleString()} {pricingByCountry[selectedCountry].currency}</p>
               
               <ul className="space-y-4 mb-8 text-sm text-gray-300">
                 <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gray-500 shrink-0" /> Acceso a clases en vivo</li>
                 <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gray-500 shrink-0" /> Grabaciones de por vida</li>
                 <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gray-500 shrink-0" /> Soporte de la comunidad</li>
               </ul>

               <Button onClick={() => handleInscribirse('3 cuotas')} variant="outline" className="w-full bg-transparent border-gray-600 text-gray-300 hover:text-white hover:border-white font-semibold py-6 rounded-xl transition-all">
                 Elegir 3 cuotas
               </Button>
             </div>

             {/* Option 2: 2 Cuotas */}
             <div className="bg-[#141824] border border-gray-800/80 p-8 rounded-2xl hover:border-gray-600 transition-all flex flex-col relative group order-3 md:order-2">
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-gray-300 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
                 Intermedio
               </div>
               <h4 className="text-2xl font-semibold text-white mb-2 mt-2">2 Cuotas</h4>
               <p className="text-gray-400 text-sm mb-6 h-10">Equilibrio entre flexibilidad y precio final.</p>
               <div className="flex items-center gap-2 mb-1">
                 <span className="text-3xl lg:text-4xl font-black text-white">2 x {pricingByCountry[selectedCountry].symbol}{pricingByCountry[selectedCountry].cuotas2.toLocaleString()}</span>
                 <span className="text-gray-500 font-medium">{pricingByCountry[selectedCountry].currency}</span>
               </div>
               <p className="text-gray-500 text-sm mb-8 flex-grow">Total: {pricingByCountry[selectedCountry].symbol}{pricingByCountry[selectedCountry].total2.toLocaleString()} {pricingByCountry[selectedCountry].currency}</p>
               
               <ul className="space-y-4 mb-8 text-sm text-gray-300">
                 <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gray-500 shrink-0" /> Acceso a clases en vivo</li>
                 <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gray-500 shrink-0" /> Grabaciones de por vida</li>
                 <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-gray-500 shrink-0" /> Soporte de la comunidad</li>
               </ul>

               <Button onClick={() => handleInscribirse('2 cuotas')} variant="outline" className="w-full bg-transparent border-gray-600 text-gray-300 hover:text-white hover:border-white font-semibold py-6 rounded-xl transition-all">
                 Elegir 2 cuotas
               </Button>
             </div>

             {/* Option 3: Pago Único (Recomendado) */}
             <div className="bg-gradient-to-b from-[#1a2130] to-[#141824] border border-labora-neon p-8 rounded-2xl transform md:-translate-y-3 relative shadow-[0_0_30px_rgba(205,255,100,0.15)] flex flex-col order-1 md:order-3">
               <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-labora-neon text-black text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg whitespace-nowrap">
                 ⭐ AHORRAS {pricingByCountry[selectedCountry].symbol}{pricingByCountry[selectedCountry].ahorras.toLocaleString()} {pricingByCountry[selectedCountry].currency}
               </div>
               <h4 className="text-2xl font-bold text-labora-neon mb-2 mt-2">Pago Único</h4>
               <p className="text-gray-300 text-sm mb-6 h-10">Mejor precio garantizado. La opción más elegida.</p>
               <div className="flex items-center gap-2 mb-1">
                 <span className="text-4xl lg:text-5xl font-black text-white">{pricingByCountry[selectedCountry].symbol}{pricingByCountry[selectedCountry].unico.toLocaleString()}</span>
                 <span className="text-gray-400 font-medium text-xl">{pricingByCountry[selectedCountry].currency}</span>
               </div>
               <p className="text-labora-neon/80 text-sm mb-8 flex-grow font-medium">Único pago final</p>
               
               <ul className="space-y-4 mb-8 text-sm text-gray-200">
                 <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-labora-neon shrink-0" /> Acceso a clases en vivo</li>
                 <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-labora-neon shrink-0" /> Grabaciones de por vida</li>
                 <li className="flex items-start gap-3"><CheckCircle className="w-5 h-5 text-labora-neon shrink-0" /> Soporte de la comunidad</li>
               </ul>

               <Button onClick={() => handleInscribirse('Pago Único')} className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-bold py-6 text-lg rounded-xl shadow-[0_0_15px_rgba(205,255,100,0.3)] transform hover:-translate-y-1 transition-all mt-auto">
                 Elegir pago único
               </Button>
             </div>
          </div>

          {/* Botón Más Info - Secondary */}
          <div className="mt-4">
            <p className="text-gray-400 text-sm mb-4">¿Tienes dudas antes de inscribirte?</p>
            <Button
              variant="outline"
              onClick={handleInfo}
              className="w-full md:w-auto bg-transparent border border-gray-700 text-gray-300 hover:bg-white hover:text-black hover:border-white font-medium py-3 px-8 text-base rounded-xl transition-all"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Hablar con un asesor por WhatsApp
            </Button>
          </div>
        </div>

        <div className="mt-12 text-sm text-gray-500 animate-fade-in-up delay-500">
          <p>Al hacer clic serás redirigido a WhatsApp para continuar.</p>
        </div>

      </div>
    </div>
  );
};

export default PostAplicacionTikTok; 