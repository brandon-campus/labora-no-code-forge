import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, Calendar } from 'lucide-react';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';

const fallbackPricing = {
  Otro: { currency: "USD", symbol: "$", unico: 250, unicoOriginal: 350 },
  Argentina: { currency: "ARS", symbol: "$", unico: 248675, unicoOriginal: 355250 },
  Perú: { currency: "PEN", symbol: "S/", unico: 595, unicoOriginal: 850 },
  Colombia: { currency: "COP", symbol: "$", unico: 624400, unicoOriginal: 892000 },
  México: { currency: "MXN", symbol: "$", unico: 3040, unicoOriginal: 4343 },
  Chile: { currency: "CLP", symbol: "$", unico: 156100, unicoOriginal: 223000 },
};

type Country = keyof typeof fallbackPricing;

const PricingSingleAds = ({ applyUrl = '/ads/bootcamp/aplicar' }: { applyUrl?: string }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>('Otro');
  const { data: cohorte } = useActiveCohorte();

  // Tomamos los precios originales si existen en el hook, o los fallback.
  // Como simplificamos, mostramos directo el valor de "Pago Único" (que es el valor real).
  const currentPricing = cohorte?.precios_regionales || fallbackPricing;
  const pricingData = currentPricing[selectedCountry];
  
  // Usamos el unico de la db o el fallback. Si no tiene 'unicoOriginal', calculamos un valor tachado para que se vea la oportunidad.
  const precioFinal = pricingData.unico;
  const precioTachado = pricingData.unicoOriginal || precioFinal * 1.4;

  return (
    <section id="pricing" className="bg-[#0a0a0a] py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-6">
            OFERTA EXCLUSIVA DEL BOOTCAMP
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-[#12151a] border border-white/10 rounded-full px-4 py-2">
            <span className="text-labora-neon text-sm">📍</span>
            <span className="text-gray-300 text-sm">Ver precio en:</span>
            <select 
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value as Country)}
              className="bg-[#1a1f26] text-white border border-white/20 rounded-md px-2 py-1 text-sm outline-none focus:border-labora-neon"
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

        <div className="flex justify-center">
          {/* Única Tarjeta de Oferta */}
          <div className="bg-gradient-to-b from-[#1a2130] to-[#141824] border-2 border-labora-neon p-8 md:p-12 rounded-3xl relative shadow-[0_0_40px_rgba(205,255,100,0.15)] flex flex-col z-10 w-full max-w-2xl">
            
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-labora-neon text-black text-[11px] md:text-sm font-bold px-6 py-2 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg whitespace-nowrap">
              🔥 PLAZAS LIMITADAS
            </div>
            
            <h4 className="text-3xl font-bold text-labora-neon mb-4 mt-2 uppercase text-center">Todo el programa completo</h4>
            <p className="text-gray-300 text-center mb-8 text-lg">Tu pase directo para aprender IA y No-Code con acompañamiento 1 a 1.</p>
            
            <div className="flex items-center justify-center gap-3 mb-2 flex-wrap">
              <span className="text-gray-400 line-through text-3xl font-bold mr-2">{pricingData.symbol}{precioTachado.toLocaleString()}</span>
              <span className="text-5xl lg:text-6xl font-black text-white">{pricingData.symbol}{precioFinal.toLocaleString()}</span>
              <span className="text-gray-400 font-medium text-2xl">{pricingData.currency}</span>
            </div>
            <p className="text-labora-neon/80 text-center mb-10 font-medium">Único pago final (Sin costos ocultos)</p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-10">
              <ul className="space-y-4 text-base text-gray-200">
                <li className="flex items-start gap-3">
                  <div className="bg-labora-neon/20 rounded-full p-1 mt-0.5">
                    <Check className="w-5 h-5 text-labora-neon shrink-0 stroke-[3]" />
                  </div>
                  <span><strong className="text-white">7 Semanas</strong> intensivas</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-labora-neon/20 rounded-full p-1 mt-0.5">
                    <Check className="w-5 h-5 text-labora-neon shrink-0 stroke-[3]" />
                  </div>
                  <span>Clases <strong className="text-white">100% en vivo</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-labora-neon/20 rounded-full p-1 mt-0.5">
                    <Check className="w-5 h-5 text-labora-neon shrink-0 stroke-[3]" />
                  </div>
                  <span>Acompañamiento <strong className="text-white">personalizado</strong></span>
                </li>
              </ul>
              <ul className="space-y-4 text-base text-gray-200">
                <li className="flex items-start gap-3">
                  <div className="bg-labora-neon/20 rounded-full p-1 mt-0.5">
                    <Check className="w-5 h-5 text-labora-neon shrink-0 stroke-[3]" />
                  </div>
                  <span>Creación de <strong className="text-white">proyectos reales</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-labora-neon/20 rounded-full p-1 mt-0.5">
                    <Check className="w-5 h-5 text-labora-neon shrink-0 stroke-[3]" />
                  </div>
                  <span><strong className="text-white">Grabaciones</strong> de por vida</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="bg-labora-neon/20 rounded-full p-1 mt-0.5">
                    <Check className="w-5 h-5 text-labora-neon shrink-0 stroke-[3]" />
                  </div>
                  <span>Acceso a la <strong className="text-white">comunidad privada</strong></span>
                </li>
              </ul>
            </div>

            <a href={applyUrl} className="mt-auto w-full">
              <Button className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-extrabold py-8 text-xl rounded-2xl shadow-[0_0_20px_rgba(205,255,100,0.4)] transform hover:-translate-y-1 transition-all flex items-center justify-center gap-2">
                <Calendar className="w-6 h-6" />
                AGENDAR LLAMADA
              </Button>
              <p className="text-center text-gray-400 mt-4 text-sm font-medium">Llamada gratuita de 15 min para evaluar si el bootcamp es para ti.</p>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PricingSingleAds;
