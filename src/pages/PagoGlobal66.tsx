import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, Smartphone, Globe, ArrowLeft, Mail, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PagoGlobal66 = () => {
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount') || '175';
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    toast({
      title: "Copiado",
      description: `${label} copiado al portapapeles.`,
    });
  };

  return (
    <div className="min-h-screen bg-[#0d1117] text-white flex flex-col items-center py-12 px-4 relative overflow-hidden font-sans">
      {/* Background Gradients */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-4xl mx-auto relative z-10">
        <div className="flex justify-between items-center mb-6">
          <Button variant="ghost" onClick={() => navigate(-1)} className="text-gray-400 hover:text-white">
            <ArrowLeft className="mr-2 h-4 w-4" /> Volver
          </Button>
          <div className="flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-green-400" />
            <span className="text-xs text-gray-400 font-medium tracking-widest uppercase">Pago seguro</span>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-8">
           <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center font-black text-purple-600 text-xl overflow-hidden shadow-lg p-2">
             <span className="text-[14px] leading-tight text-center">G66</span>
           </div>
           <h1 className="text-2xl md:text-3xl font-bold">Pago con Global66</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6 shadow-lg flex flex-col justify-between">
             <div>
               <h3 className="text-gray-400 text-sm font-medium mb-1">Destinatario</h3>
               <p className="text-lg font-semibold text-white mb-5">Brandon Candia Bocangel</p>

               <h3 className="text-gray-400 text-sm font-medium mb-1">Alias / Usuario Global66</h3>
               <div className="flex items-center justify-between bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-2.5 mb-5 group">
                 <span className="font-mono text-labora-neon">@BRACAN994</span>
                 <button onClick={() => handleCopy('@BRACAN994', 'Alias')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                   <Copy className="h-4 w-4" /> <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">Copiar</span>
                 </button>
               </div>
             </div>

             <div>
               <h3 className="text-gray-400 text-sm font-medium mb-1">Monto a enviar a dólares</h3>
               <p className="text-4xl font-black text-white">${amount} <span className="text-xl text-gray-500 font-medium">USD</span></p>
             </div>
          </div>

          <div className="bg-gradient-to-br from-purple-900/20 to-blue-900/20 border border-purple-500/30 rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden">
             {/* QR placeholder representation */}
             <div className="bg-white p-3 rounded-xl mb-6 shadow-md">
               <div className="w-32 h-32 border-4 border-black p-1 bg-white relative grid grid-cols-5 grid-rows-5 gap-1">
                 {/* Decorative QR-like pattern */}
                 <div className="col-span-2 row-span-2 bg-black"></div>
                 <div className="col-start-4 col-span-2 row-span-2 bg-black"></div>
                 <div className="row-start-4 col-span-2 row-span-2 bg-black"></div>
                 <div className="col-start-3 row-start-3 bg-black"></div>
                 <div className="col-start-4 row-start-4 bg-black"></div>
                 <div className="col-start-5 row-start-5 bg-black"></div>
               </div>
             </div>
             
             <h3 className="text-xl font-bold mb-2">Escanea o Descarga</h3>
             <p className="text-sm text-gray-300 mb-6 px-4">Usa este enlace para descargar la app o abrirla directamente en tu celular.</p>
             <a href="https://share.global66.com/BRACAN994" target="_blank" rel="noopener noreferrer" className="bg-purple-600 hover:bg-purple-500 text-white font-bold py-3 px-8 rounded-full transition-colors w-full sm:w-auto shadow-[0_0_15px_rgba(147,51,234,0.3)]">
               Abrir Global66
             </a>
          </div>
        </div>

        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-6 border-b border-gray-800 pb-4">¿Cómo pagar con Global66?</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">Descargá la app y registrate</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Descargá la app desde el botón de arriba. Registrate con tu mail y creá tu cuenta — es <strong className="text-gray-300">gratis</strong>, sin costo de apertura ni mantenimiento.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">Verificá tu identidad</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Te van a pedir una foto de tu DNI/pasaporte y una selfie. Es obligatorio por seguridad, pero tarda un par de minutos.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center font-bold text-sm">3</div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">Cargá saldo a tu cuenta</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Cargá saldo en tu cuenta Global66 desde tu banco o tarjeta de débito local.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center font-bold text-sm">4</div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">Hacé el envío</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Andá a <strong>"Enviar dinero"</strong> → elegí enviar a otro usuario de Global66 (así evitás comisiones de transferencias bancarias/SWIFT). Usá el alias <strong className="text-labora-neon">@BRACAN994</strong> e ingresá el monto de <strong>${amount} USD</strong>.
                </p>
                <div className="bg-[#0d1117] border border-gray-700/50 rounded p-3 mt-3 inline-block">
                   <p className="text-xs text-gray-400">
                     Antes de confirmar, la app te muestra el tipo de cambio y el costo total — no hay cobros ocultos después.
                   </p>
                </div>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center font-bold"><CheckCircle className="h-5 w-5" /></div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">Confirmá y envíanos el comprobante</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Confirmá con tu PIN y listo. Una vez realizado el pago, envíanos el comprobante a nuestro equipo para activar tu plan e inscripción.
                </p>
                <a href={`https://wa.me/5491138142899?text=${encodeURIComponent('Hola Labora, ya hice el pago del programa por Global66. Adjunto mi comprobante:')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium py-3 px-5 rounded-xl text-sm transition-colors shadow-lg mt-4">
                  <Mail className="mr-2 h-4 w-4" /> Enviar comprobante por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 bg-gray-900/50 border border-gray-800 rounded-xl p-6 md:p-8">
           <div className="flex flex-col md:flex-row items-start gap-6">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0 border border-blue-500/20">
                <Globe className="h-6 w-6 text-blue-400" />
              </div>
              <div>
                 <h4 className="font-semibold text-white mb-2 text-lg">¿Qué es Global66?</h4>
                 <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                   Es una fintech latinoamericana (no es un banco) que te deja mandar plata al exterior de forma rápida, segura y sin las comisiones ni vueltas de un banco tradicional. Ya la usan cientos de miles de personas en Latinoamérica para hacer pagos internacionales.
                 </p>
                 <h4 className="font-semibold text-white mb-2 text-lg">¿Desde qué países la puedo usar?</h4>
                 <p className="text-gray-400 text-sm leading-relaxed">
                   Podés abrir tu Cuenta Global y operar de forma completa si estás en <strong className="text-gray-300">Argentina, Chile, Colombia, Perú, México, Ecuador, Brasil o Estados Unidos</strong>. Igualmente, la app se puede descargar y usar para enviar dinero desde más de 165 países del mundo, y permite mandar transferencias a más de 60 destinos distintos.
                 </p>
              </div>
           </div>
        </div>
        
        <div className="mt-8 text-center flex items-center justify-center gap-2 text-gray-500 text-xs">
           <ShieldCheck className="w-4 h-4" /> Pago 100% seguro, protegemos tus datos.
        </div>

      </div>
    </div>
  );
};

export default PagoGlobal66;
