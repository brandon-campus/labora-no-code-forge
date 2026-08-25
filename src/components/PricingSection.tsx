import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Check, MessageCircle } from 'lucide-react';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';

// Fallback pricing identical to PostAplicacion.tsx
const fallbackPricing = {
  Otro: { currency: "USD", symbol: "$", cuotas3: 110, cuotas2: 150, unico: 175, total3: 330, total2: 300, ahorras: 155, unicoOriginal: 250 },
  Argentina: { currency: "ARS", symbol: "$", cuotas3: 156310, cuotas2: 213150, unico: 248675, total3: 468930, total2: 426300, ahorras: 220255, unicoOriginal: 355250 },
  Perú: { currency: "PEN", symbol: "S/", cuotas3: 374, cuotas2: 510, unico: 595, total3: 1122, total2: 1020, ahorras: 527, unicoOriginal: 850 },
  Colombia: { currency: "COP", symbol: "$", cuotas3: 392480, cuotas2: 535200, unico: 624400, total3: 1177440, total2: 1070400, ahorras: 553040, unicoOriginal: 892000 },
  México: { currency: "MXN", symbol: "$", cuotas3: 1911, cuotas2: 2606, unico: 3040, total3: 5733, total2: 5211, ahorras: 2693, unicoOriginal: 4343 },
  Chile: { currency: "CLP", symbol: "$", cuotas3: 98120, cuotas2: 133800, unico: 156100, total3: 294360, total2: 267600, ahorras: 138260, unicoOriginal: 223000 },
};

type Country = keyof typeof fallbackPricing;

const PricingSection = ({ applyUrl = '/bootcamp/aplicar', whatsappUrl = 'https://wa.me/5491138142899?text=Hola%20Labora%2C%20tengo%20dudas%20sobre%20los%20planes%20de%20pago%20del%20Bootcamp.' }: { applyUrl?: string, whatsappUrl?: string }) => {
  const [selectedCountry, setSelectedCountry] = useState<Country>('Otro');
  const { data: cohorte } = useActiveCohorte();

  const currentPricing = cohorte?.precios_regionales || fallbackPricing;
  const pricingData = currentPricing[selectedCountry];

  return (
    <section id="pricing" className="bg-[#0a0a0a] py-20 px-4 sm:px-6 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-[2rem] sm:text-4xl md:text-5xl font-black text-white uppercase tracking-wider mb-6">
            ELIGE TU PLAN DE PAGO
          </h2>
          
          <div className="inline-flex items-center gap-2 bg-[#12151a] border border-white/10 rounded-full px-4 py-2">
            <span className="text-labora-neon text-sm">📍</span>
            <span className="text-gray-300 text-sm">Ver precios en:</span>
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-6 items-stretch">
          
          {/* Option 1: 3 Cuotas */}
          <div className="bg-[#141824] border border-gray-800/80 p-8 rounded-2xl hover:border-gray-600 transition-all flex flex-col relative group">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-gray-300 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
              Flexibilidad
            </div>
            <h4 className="text-2xl font-semibold text-white mb-2 mt-2">3 Cuotas</h4>
            <p className="text-gray-400 text-sm mb-6 h-10">Paga en partes para mayor comodidad.</p>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-3xl lg:text-4xl font-black text-white">3 x {pricingData.symbol}{pricingData.cuotas3.toLocaleString()}</span>
              <span className="text-gray-500 font-medium">{pricingData.currency}</span>
            </div>
            <p className="text-gray-500 text-sm mb-8 flex-grow">Total: {pricingData.symbol}{pricingData.total3.toLocaleString()} {pricingData.currency}</p>
            
            <ul className="space-y-4 mb-8 text-sm text-gray-300">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Acceso a clases en vivo</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Grabaciones de por vida</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Soporte de la comunidad</li>
            </ul>

            <a href={applyUrl} className="mt-auto">
              <Button variant="outline" className="w-full bg-transparent border-gray-600 text-gray-300 hover:text-white hover:border-white font-semibold py-6 rounded-xl transition-all">
                Elegir 3 cuotas
              </Button>
            </a>
          </div>

          {/* Option 2: 2 Cuotas */}
          <div className="bg-[#141824] border border-gray-800/80 p-8 rounded-2xl hover:border-gray-600 transition-all flex flex-col relative group">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-gray-800 text-gray-300 text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest whitespace-nowrap">
              Intermedio
            </div>
            <h4 className="text-2xl font-semibold text-white mb-2 mt-2">2 Cuotas</h4>
            <p className="text-gray-400 text-sm mb-6 h-10">Equilibrio entre flexibilidad y precio final.</p>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-3xl lg:text-4xl font-black text-white">2 x {pricingData.symbol}{pricingData.cuotas2.toLocaleString()}</span>
              <span className="text-gray-500 font-medium">{pricingData.currency}</span>
            </div>
            <p className="text-gray-500 text-sm mb-8 flex-grow">Total: {pricingData.symbol}{pricingData.total2.toLocaleString()} {pricingData.currency}</p>
            
            <ul className="space-y-4 mb-8 text-sm text-gray-300">
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Acceso a clases en vivo</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Grabaciones de por vida</li>
              <li className="flex items-start gap-3"><Check className="w-5 h-5 text-gray-500 shrink-0" /> Soporte de la comunidad</li>
            </ul>

            <a href={applyUrl} className="mt-auto">
              <Button variant="outline" className="w-full bg-transparent border-gray-600 text-gray-300 hover:text-white hover:border-white font-semibold py-6 rounded-xl transition-all">
                Elegir 2 cuotas
              </Button>
            </a>
          </div>

          {/* Option 3: Pago Único (Destacado) */}
          <div className="bg-gradient-to-b from-[#1a2130] to-[#141824] border border-labora-neon p-8 rounded-2xl transform md:-translate-y-3 relative shadow-[0_0_30px_rgba(205,255,100,0.15)] flex flex-col z-10">
            {cohorte?.promocion_texto_badge && (
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-labora-neon text-black text-[10px] font-bold px-5 py-1.5 rounded-full uppercase tracking-widest flex items-center gap-1 shadow-lg whitespace-nowrap">
                {cohorte.promocion_texto_badge}
              </div>
            )}
            <h4 className="text-2xl font-bold text-labora-neon mb-2 mt-2 uppercase">Pago Único</h4>
            <p className="text-gray-300 text-sm mb-6 h-10">Mejor precio garantizado. Ahorras {pricingData.symbol}{pricingData.ahorras.toLocaleString()} {pricingData.currency}.</p>
            <div className="flex items-center gap-2 mb-1 flex-wrap">
              <span className="text-gray-400 line-through text-2xl font-bold mr-2">{pricingData.symbol}{pricingData.unicoOriginal.toLocaleString()}</span>
              <span className="text-4xl lg:text-5xl font-black text-white">{pricingData.symbol}{pricingData.unico.toLocaleString()}</span>
              <span className="text-gray-400 font-medium text-xl">{pricingData.currency}</span>
            </div>
            <p className="text-labora-neon/80 text-sm mb-8 flex-grow font-medium">Único pago final</p>
            
            <ul className="space-y-4 mb-8 text-sm text-gray-200">
              <li className="flex items-start gap-3">
                <div className="bg-labora-neon/20 rounded-full p-0.5">
                  <Check className="w-4 h-4 text-labora-neon shrink-0 stroke-[3]" />
                </div>
                Acceso a clases en vivo
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-labora-neon/20 rounded-full p-0.5">
                  <Check className="w-4 h-4 text-labora-neon shrink-0 stroke-[3]" />
                </div>
                Grabaciones de por vida
              </li>
              <li className="flex items-start gap-3">
                <div className="bg-labora-neon/20 rounded-full p-0.5">
                  <Check className="w-4 h-4 text-labora-neon shrink-0 stroke-[3]" />
                </div>
                Soporte de la comunidad
              </li>
            </ul>

            <a href={applyUrl} className="mt-auto">
              <Button className="w-full bg-labora-neon hover:bg-labora-neon/90 text-black font-bold py-6 text-lg rounded-xl shadow-[0_0_15px_rgba(205,255,100,0.3)] transform hover:-translate-y-1 transition-all">
                Elegir pago único
              </Button>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default PricingSection;
