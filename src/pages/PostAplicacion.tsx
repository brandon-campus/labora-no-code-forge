import React, { useState, useEffect } from 'react';
import { Calendar, Clock, CreditCard, Landmark, ShieldCheck, ChevronDown, ChevronUp, MessageCircle, Mail, CheckCircle2, AlertCircle, Flame } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { fbqTrack } from "@/lib/fbqTrack";
import { useActiveCohorte } from '@/hooks/useActiveCohorte';

// Fallback if no cohort exists
const fallbackPricing = {
  Otro: { currency: "USD", symbol: "$", cuotas3: 110, cuotas2: 150, unico: 175, total3: 330, total2: 300, ahorras: 155, unicoOriginal: 250 },
  Argentina: { currency: "ARS", symbol: "$", cuotas3: 156310, cuotas2: 213150, unico: 248675, total3: 468930, total2: 426300, ahorras: 220255, unicoOriginal: 355250 },
  Perú: { currency: "PEN", symbol: "S/", cuotas3: 374, cuotas2: 510, unico: 595, total3: 1122, total2: 1020, ahorras: 527, unicoOriginal: 850 },
  Colombia: { currency: "COP", symbol: "$", cuotas3: 392480, cuotas2: 535200, unico: 624400, total3: 1177440, total2: 1070400, ahorras: 553040, unicoOriginal: 892000 },
  México: { currency: "MXN", symbol: "$", cuotas3: 1911, cuotas2: 2606, unico: 3040, total3: 5733, total2: 5211, ahorras: 2693, unicoOriginal: 4343 },
  Chile: { currency: "CLP", symbol: "$", cuotas3: 98120, cuotas2: 133800, unico: 156100, total3: 294360, total2: 267600, ahorras: 138260, unicoOriginal: 223000 },
};

type Country = keyof typeof fallbackPricing;

const PostAplicacion = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>('Otro');
  const [selectedPlan, setSelectedPlan] = useState<string>('Pago Único');
  const [showCuotas, setShowCuotas] = useState(false);
  const [formData, setFormData] = useState({ nombre: '', email: '', whatsapp: '' });
  const [errors, setErrors] = useState({ nombre: '', email: '', whatsapp: '' });
  const [paymentStarted, setPaymentStarted] = useState(false);

  const { data: cohorte } = useActiveCohorte();

  const currentPricing = cohorte?.precios_regionales || fallbackPricing;
  const pricing = currentPricing[selectedCountry];

  let usdAmount = currentPricing['Otro']?.unico || 175;
  if (selectedPlan === '3 cuotas') usdAmount = currentPricing['Otro']?.cuotas3 || 110;
  else if (selectedPlan === '2 cuotas') usdAmount = currentPricing['Otro']?.cuotas2 || 150;

  let totalAmount = pricing.unico;
  if (selectedPlan === '3 cuotas') totalAmount = pricing.cuotas3 * 3;
  else if (selectedPlan === '2 cuotas') totalAmount = pricing.cuotas2 * 2;

  let displayAmount = pricing.unico;
  if (selectedPlan === '3 cuotas') displayAmount = pricing.cuotas3;
  else if (selectedPlan === '2 cuotas') displayAmount = pricing.cuotas2;

  const getPaymentMethods = () => {
    const paypalUrl = `https://paypal.me/academialabora/${usdAmount}`;
    const argTransferUrl = `/pago-transferencia-arg?amount=${totalAmount}`;
    const peruTransferUrl = `/pago-transferencia-peru?amount=${totalAmount}`;
    const global66Url = `/pago-global66?amount=${usdAmount}`;

    if (selectedCountry === 'Argentina') {
      return [
        { id: 'mp', name: 'Mercado Pago', url: '#', icon: <CreditCard className="w-5 h-5 text-blue-400" /> },
        { id: 'transfer_arg', name: 'Transferencia Bancaria', url: argTransferUrl, icon: <Landmark className="w-5 h-5 text-green-400" /> }
      ];
    }
    if (selectedCountry === 'Perú') {
      return [
        { id: 'transfer_bcp', name: 'Transferencia BCP', url: peruTransferUrl, icon: <Landmark className="w-5 h-5 text-orange-400" /> },
        { id: 'transfer_cci', name: 'Transferencia Interbancaria', url: peruTransferUrl, icon: <Landmark className="w-5 h-5 text-green-400" /> },
        { id: 'paypal', name: 'PayPal', url: paypalUrl, icon: <CreditCard className="w-5 h-5 text-blue-500" /> }
      ];
    }
    return [
      { id: 'paypal', name: 'PayPal', url: paypalUrl, icon: <CreditCard className="w-5 h-5 text-blue-500" /> },
      { id: 'global66', name: 'Global 66', url: global66Url, icon: <Landmark className="w-5 h-5 text-purple-400" /> }
    ];
  };

  const methods = getPaymentMethods();
  const [selectedMethod, setSelectedMethod] = useState<string>(methods[0].id);

  // Update selectedMethod if methods change and current is not available
  useEffect(() => {
    if (!methods.find(m => m.id === selectedMethod)) {
      setSelectedMethod(methods[0].id);
    }
  }, [selectedCountry, methods, selectedMethod]);

  const getDisplaySchedule = () => {
    switch(selectedCountry) {
      case 'Argentina': return 'Sábados de 10:00 a 14:00 hs';
      case 'Perú': return 'Sábados de 08:00 a 12:00 hs';
      case 'Colombia': return 'Sábados de 08:00 a 12:00 hs';
      case 'México': return 'Sábados de 07:00 a 11:00 hs (CDMX)';
      case 'Chile': return 'Sábados de 09:00 a 13:00 hs';
      default: return cohorte?.horario || 'Sábados de 10:00 a 14:00 hs (ARG)';
    }
  };

  const handlePay = () => {
    // Validate form
    let valid = true;
    const newErrors = { nombre: '', email: '', whatsapp: '' };
    if (!formData.nombre.trim()) { newErrors.nombre = 'Ingresa tu nombre'; valid = false; }
    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) { newErrors.email = 'Email inválido'; valid = false; }
    if (!formData.whatsapp.trim()) { newErrors.whatsapp = 'Ingresa tu WhatsApp'; valid = false; }
    
    setErrors(newErrors);
    
    if (!valid) {
       document.getElementById('checkout-form')?.scrollIntoView({ behavior: 'smooth' });
       return;
    }

    fbqTrack('InitiateCheckout');

    const method = methods.find(m => m.id === selectedMethod);
    if (method) {
       const isInternal = method.url.startsWith('/');
       if (isInternal) {
         window.location.href = method.url; 
       } else {
         window.open(method.url, '_blank');
         setPaymentStarted(true);
       }
    }
  };

  if (paymentStarted) {
    return (
      <div className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center justify-center p-4 relative overflow-hidden font-sans">
        {/* Background Gradients */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none fixed">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-md w-full bg-[#161b22] border border-gray-800 rounded-2xl p-8 text-center shadow-[0_0_40px_rgba(0,0,0,0.5)] relative z-10">
          <div className="relative w-24 h-24 mx-auto mb-6">
            <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping opacity-75"></div>
            <div className="relative w-full h-full bg-[#1c2128] border border-blue-500/30 rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(59,130,246,0.3)]">
              <Clock className="w-10 h-10 text-blue-400" />
            </div>
          </div>
          
          <h2 className="text-3xl font-black mb-3 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-labora-neon">¡Último paso!</h2>
          <p className="text-gray-300 mb-8 leading-relaxed text-sm">
            Para asegurar tu cupo y procesar la activación de tu plan, <strong className="text-white font-semibold">necesitamos ver tu comprobante de pago.</strong>
          </p>
          
          <a href={`https://wa.me/5491138142899?text=${encodeURIComponent(`Hola Labora, ya hice el pago del programa por ${methods.find(m => m.id === selectedMethod)?.name || 'Paypal/MercadoPago'}. Adjunto mi comprobante:`)}`} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center w-full bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold py-4 rounded-xl transition-all mb-8 shadow-[0_0_20px_rgba(37,211,102,0.4)] transform hover:-translate-y-1">
            <MessageCircle className="mr-2 h-5 w-5" /> Enviar comprobante por WhatsApp
          </a>
          
          <div className="bg-gradient-to-br from-gray-900 to-[#0d1117] rounded-xl p-5 text-left border border-gray-800">
            <h4 className="font-bold text-sm mb-4 text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> ¿Qué pasa después?
            </h4>
            <div className="space-y-4">
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">1</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">Validaremos tu comprobante en nuestro sistema en menos de 24 horas.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-blue-400 text-xs font-bold">2</span>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">Te daremos acceso al campus con tu usuario y contraseña.</p>
              </div>
              <div className="flex gap-3 items-start">
                <div className="w-6 h-6 rounded-full bg-labora-neon/10 flex items-center justify-center flex-shrink-0 mt-0.5 border border-labora-neon/20">
                  <span className="text-labora-neon text-xs font-bold">3</span>
                </div>
                <p className="text-xs text-gray-300 font-medium leading-relaxed">Te daremos acceso al grupo de WhatsApp exclusivo para estudiantes.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0d1117] text-white pb-32 font-sans relative">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none fixed">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-labora-neon/5 rounded-full blur-[100px]"></div>
      </div>

      {/* Header */}
      <header className="border-b border-gray-800 bg-[#0d1117]/90 backdrop-blur-md sticky top-0 z-50 p-4 flex justify-between items-center">
        <div className="font-black text-xl tracking-tighter text-white">LABORA</div>
        <div className="flex items-center gap-1.5 text-gray-400 text-sm font-medium">
          <ShieldCheck className="w-4 h-4 text-green-500" />
          Pago seguro
        </div>
      </header>

      <main className="max-w-2xl mx-auto p-4 md:p-6 space-y-6 mt-2 relative z-10">
        
        {/* Bootcamp Summary */}
        <section className="bg-[#161b22] border border-gray-800 rounded-2xl p-5 shadow-lg">
           <h2 className="text-xl font-bold mb-5">Resumen de tu compra</h2>
           <div className="flex gap-4 items-start mb-4">
             <div className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden shadow-lg mt-1 border border-gray-800">
               <img src="/bootcamp-cover.png" alt="Bootcamp IA y No Code" className="w-full h-full object-cover" />
             </div>
             <div>
               <h3 className="font-bold text-lg leading-tight mb-1">Bootcamp de IA y No Code</h3>
               <p className="text-sm text-gray-400 flex items-center gap-1.5 mt-1.5"><Calendar className="w-3.5 h-3.5 text-gray-500" /> Inicia {cohorte?.fecha_inicio || '05 de Septiembre'}</p>
               <p className="text-sm text-gray-400 flex items-center gap-1.5 mt-1"><Clock className="w-3.5 h-3.5 text-gray-500" /> {cohorte?.semanas_duracion || '7 Semanas'} • {getDisplaySchedule()} • Online</p>
             </div>
           </div>
           
           <div className="bg-[#0d1117] rounded-xl p-4 border border-gray-800/50">
             <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Qué incluye tu inscripción:</p>
             <ul className="space-y-2.5">
               <li className="flex items-start gap-2.5 text-sm text-gray-300">
                 <CheckCircle2 className="w-4 h-4 text-labora-neon shrink-0 mt-0.5" />
                 <span>Clases en vivo y acceso a las grabaciones en el campus.</span>
               </li>
               <li className="flex items-start gap-2.5 text-sm text-gray-300">
                 <CheckCircle2 className="w-4 h-4 text-labora-neon shrink-0 mt-0.5" />
                 <span>Proyectos prácticos para armar tu portfolio.</span>
               </li>
               <li className="flex items-start gap-2.5 text-sm text-gray-300">
                 <CheckCircle2 className="w-4 h-4 text-labora-neon shrink-0 mt-0.5" />
                 <span>Acceso de por vida a la comunidad exclusiva de WhatsApp y Discord.</span>
               </li>
               <li className="flex items-start gap-2.5 text-sm text-gray-300">
                 <CheckCircle2 className="w-4 h-4 text-labora-neon shrink-0 mt-0.5" />
                 <span>Soporte, feedback y mentoría directa.</span>
               </li>
             </ul>
           </div>
        </section>

        {/* Plan Selection */}
        <section className="bg-[#161b22] border border-gray-800 rounded-2xl p-5 shadow-lg">
           <div className="flex justify-between items-center mb-4">
             <h2 className="text-lg font-bold">Elegí tu plan</h2>
             <div className="relative">
               <select 
                 className="appearance-none bg-[#0d1117] text-white border border-gray-700 rounded-lg pl-3 pr-8 py-2 text-sm outline-none focus:border-labora-neon max-w-[120px] md:max-w-none cursor-pointer"
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
               <ChevronDown className="w-4 h-4 text-gray-400 absolute right-2.5 top-1/2 transform -translate-y-1/2 pointer-events-none" />
             </div>
           </div>
           
           <div className="flex flex-col md:flex-row gap-3 mb-4">
             <div className="bg-orange-500/10 border border-orange-500/20 text-orange-400 text-xs font-semibold px-3 py-2 rounded-lg flex items-center gap-1.5 w-full">
               <Flame className="w-4 h-4" /> ¡Últimos 3 cupos disponibles!
             </div>
           </div>

           <div className="space-y-3">
             {/* Pago Único */}
             <div onClick={() => setSelectedPlan('Pago Único')} className={`block border rounded-xl p-4 cursor-pointer transition-all ${selectedPlan === 'Pago Único' ? 'border-labora-neon bg-labora-neon/5 shadow-[0_0_15px_rgba(205,255,100,0.1)]' : 'border-gray-700 hover:border-gray-500'}`}>
               <div className="flex items-start gap-3">
                 <div className="mt-1 flex-shrink-0">
                   <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPlan === 'Pago Único' ? 'border-labora-neon bg-labora-neon' : 'border-gray-500'}`}>
                     {selectedPlan === 'Pago Único' && <div className="w-2 h-2 rounded-full bg-black"></div>}
                   </div>
                 </div>
                 <div className="flex-grow">
                   <div className="flex justify-between items-start mb-1">
                     <span className="font-bold text-lg text-white">Pago Único</span>
                     <span className="bg-labora-neon text-black text-[10px] font-bold px-2 py-0.5 rounded uppercase tracking-wider">Recomendado</span>
                   </div>
                   <div className="flex items-baseline gap-1 mt-1">
                     <span className="text-2xl font-black text-white">{pricing.symbol}{pricing.unico.toLocaleString()}</span>
                     <span className="text-gray-500 text-sm font-medium">{pricing.currency}</span>
                     {pricing.unicoOriginal && (
                       <span className="ml-2 text-sm text-gray-500 line-through font-medium">{pricing.symbol}{pricing.unicoOriginal.toLocaleString()}</span>
                     )}
                   </div>
                   <p className="text-labora-neon/90 text-xs mt-1.5 font-medium">Mejor precio garantizado. Ahorras {pricing.symbol}{pricing.ahorras.toLocaleString()} {pricing.currency}</p>
                 </div>
               </div>
             </div>

             {/* Cuotas Expandable */}
             <div className="border border-gray-700 rounded-xl overflow-hidden bg-[#0d1117]/50">
                <button 
                  onClick={() => setShowCuotas(!showCuotas)}
                  className="w-full p-4 flex justify-between items-center text-gray-300 hover:text-white hover:bg-gray-800/50 transition-colors"
                >
                  <span className="font-medium text-sm">¿Preferís financiarlo? Ver cuotas</span>
                  {showCuotas ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                </button>
                
                {showCuotas && (
                  <div className="p-4 border-t border-gray-700 bg-gray-900/40 space-y-3">
                    <div onClick={() => setSelectedPlan('2 cuotas')} className={`block border rounded-xl p-4 cursor-pointer transition-all ${selectedPlan === '2 cuotas' ? 'border-white bg-white/5' : 'border-gray-700 hover:border-gray-500'}`}>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPlan === '2 cuotas' ? 'border-white bg-white' : 'border-gray-500'}`}>
                             {selectedPlan === '2 cuotas' && <div className="w-2 h-2 rounded-full bg-black"></div>}
                          </div>
                        </div>
                        <div>
                          <span className="font-bold text-white block">2 Cuotas</span>
                          <div className="flex items-baseline gap-1 mt-1">
                            <span className="text-lg font-bold text-white">2 x {pricing.symbol}{pricing.cuotas2.toLocaleString()}</span>
                            <span className="text-gray-500 text-xs font-medium">{pricing.currency}</span>
                          </div>
                          <p className="text-gray-400 text-xs mt-1">Total: {pricing.symbol}{(pricing.cuotas2 * 2).toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                    <div onClick={() => setSelectedPlan('3 cuotas')} className={`block border rounded-xl p-4 cursor-pointer transition-all ${selectedPlan === '3 cuotas' ? 'border-white bg-white/5' : 'border-gray-700 hover:border-gray-500'}`}>
                      <div className="flex items-start gap-3">
                        <div className="mt-1 flex-shrink-0">
                          <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${selectedPlan === '3 cuotas' ? 'border-white bg-white' : 'border-gray-500'}`}>
                             {selectedPlan === '3 cuotas' && <div className="w-2 h-2 rounded-full bg-black"></div>}
                          </div>
                        </div>
                        <div>
                          <span className="font-bold text-white block">3 Cuotas</span>
                          <div className="flex items-baseline gap-1 mt-1">
                            <span className="text-lg font-bold text-white">3 x {pricing.symbol}{pricing.cuotas3.toLocaleString()}</span>
                            <span className="text-gray-500 text-xs font-medium">{pricing.currency}</span>
                          </div>
                          <p className="text-gray-400 text-xs mt-1">Total: {pricing.symbol}{(pricing.cuotas3 * 3).toLocaleString()}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
             </div>
           </div>
        </section>

        {/* User Form */}
        <section id="checkout-form" className="bg-[#161b22] border border-gray-800 rounded-2xl p-5 shadow-lg">
           <h2 className="text-lg font-bold mb-1">Tus datos</h2>
           <p className="text-sm text-gray-400 mb-5">Los necesitamos para confirmar tu pago y darte acceso a la comunidad.</p>
           
           <div className="space-y-4">
             <div>
               <input 
                 type="text" 
                 placeholder="Nombre completo" 
                 value={formData.nombre}
                 onChange={e => setFormData({...formData, nombre: e.target.value})}
                 className={`w-full bg-[#0d1117] border ${errors.nombre ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-labora-neon transition-colors`}
               />
               {errors.nombre && <p className="text-red-500 text-xs mt-1.5">{errors.nombre}</p>}
             </div>
             <div>
               <input 
                 type="email" 
                 placeholder="Correo electrónico" 
                 value={formData.email}
                 onChange={e => setFormData({...formData, email: e.target.value})}
                 className={`w-full bg-[#0d1117] border ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-labora-neon transition-colors`}
               />
               {errors.email && <p className="text-red-500 text-xs mt-1.5">{errors.email}</p>}
             </div>
             <div>
               <input 
                 type="tel" 
                 placeholder="WhatsApp (ej. +54911...)" 
                 value={formData.whatsapp}
                 onChange={e => setFormData({...formData, whatsapp: e.target.value})}
                 className={`w-full bg-[#0d1117] border ${errors.whatsapp ? 'border-red-500' : 'border-gray-700'} rounded-lg px-4 py-3.5 text-white focus:outline-none focus:border-labora-neon transition-colors`}
               />
               {errors.whatsapp && <p className="text-red-500 text-xs mt-1.5">{errors.whatsapp}</p>}
             </div>
           </div>
        </section>

        {/* Payment Method */}
        <section className="bg-[#161b22] border border-gray-800 rounded-2xl p-5 shadow-lg">
           <h2 className="text-lg font-bold mb-5">Medio de pago</h2>
           
           <div className="space-y-3">
             {methods.map(method => (
                <div key={method.id} onClick={() => setSelectedMethod(method.id)} className={`flex items-center gap-4 border rounded-xl p-4 cursor-pointer transition-all ${selectedMethod === method.id ? 'border-blue-500 bg-blue-900/10' : 'border-gray-700 hover:border-gray-600'}`}>
                  <div className={`w-5 h-5 rounded-full border flex flex-shrink-0 items-center justify-center ${selectedMethod === method.id ? 'border-blue-500 bg-blue-500' : 'border-gray-500'}`}>
                    {selectedMethod === method.id && <div className="w-2 h-2 rounded-full bg-white"></div>}
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="bg-gray-800 p-1.5 rounded-md">
                      {method.icon}
                    </div>
                    <span className="font-semibold text-white">{method.name}</span>
                  </div>
                </div>
             ))}
           </div>
           
           <div className="mt-6 pt-5 border-t border-gray-800 text-center">
             <p className="text-xs text-gray-500 mb-2">¿Tienes dudas antes de pagar?</p>
             <a href={`https://wa.me/5491138142899?text=${encodeURIComponent('Hola, tengo unas dudas antes de inscribirme al Bootcamp')}`} target="_blank" rel="noopener noreferrer" className="inline-flex text-sm text-gray-400 hover:text-white transition-colors items-center justify-center gap-1.5">
               <MessageCircle className="w-4 h-4" /> Hablar con un asesor por WhatsApp
             </a>
           </div>
        </section>

        {/* Small spacer to ensure nothing is hidden behind fixed bar on edge cases */}
        <div className="h-6"></div>
      </main>

      {/* Sticky Bottom Bar */}
      <div className="fixed bottom-0 left-0 w-full bg-[#161b22] border-t border-gray-800 p-4 pb-6 md:pb-4 z-50 shadow-[0_-20px_40px_rgba(0,0,0,0.6)]">
         <div className="max-w-2xl mx-auto flex flex-row justify-between items-center gap-4">
            <div className="flex flex-col">
              <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold mb-0.5">Total a pagar</span>
              <div className="flex items-baseline gap-1.5">
                <span className="text-2xl md:text-3xl font-black text-white">{pricing.symbol}{displayAmount.toLocaleString()}</span>
                <span className="text-gray-400 text-sm font-medium">{pricing.currency}</span>
              </div>
              {selectedPlan !== 'Pago Único' && (
                <span className="text-[11px] text-labora-neon mt-0.5">Plan de {selectedPlan}</span>
              )}
            </div>
            
            <Button onClick={handlePay} className="bg-blue-600 hover:bg-blue-500 text-white font-bold py-6 px-6 md:px-10 text-base rounded-xl shadow-[0_0_20px_rgba(37,99,235,0.4)] transform hover:-translate-y-0.5 transition-all w-auto whitespace-nowrap">
              Pagar y finalizar
            </Button>
         </div>
      </div>
    </div>
  );
};

export default PostAplicacion;