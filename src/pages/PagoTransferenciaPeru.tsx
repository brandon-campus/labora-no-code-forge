import React from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { Copy, CheckCircle, ArrowLeft, Mail, Landmark, ShieldCheck } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

const PagoTransferenciaPeru = () => {
  const [searchParams] = useSearchParams();
  const amount = searchParams.get('amount') || '595';
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
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-orange-500/10 rounded-full blur-[100px]"></div>
      </div>

      <div className="w-full max-w-3xl mx-auto relative z-10">
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
           <div className="w-12 h-12 bg-[#161b22] border border-gray-800 rounded-xl flex items-center justify-center text-orange-400 shadow-lg">
             <Landmark className="h-6 w-6" />
           </div>
           <h1 className="text-2xl md:text-3xl font-bold">Transferencia BCP</h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6 shadow-lg">
             <h3 className="text-gray-400 text-sm font-medium mb-1">Titular</h3>
             <p className="text-lg font-semibold text-white mb-5">Brandon Candia Bocangel</p>

             <h3 className="text-gray-400 text-sm font-medium mb-1">Cuenta BCP (Soles)</h3>
             <div className="flex items-center justify-between bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-2.5 mb-5 group">
               <span className="font-mono text-labora-neon">21576511776017</span>
               <button onClick={() => handleCopy('21576511776017', 'Número de cuenta')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                 <Copy className="h-4 w-4" /> <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">Copiar</span>
               </button>
             </div>
             
             <h3 className="text-gray-400 text-sm font-medium mb-1">CCI (Interbancario)</h3>
             <div className="flex items-center justify-between bg-[#0d1117] border border-gray-700 rounded-lg px-4 py-2.5 mb-2 group">
               <span className="font-mono text-labora-neon">00221517651177601720</span>
               <button onClick={() => handleCopy('00221517651177601720', 'CCI')} className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 text-sm">
                 <Copy className="h-4 w-4" /> <span className="hidden sm:inline opacity-0 group-hover:opacity-100 transition-opacity">Copiar</span>
               </button>
             </div>
          </div>

          <div className="bg-gradient-to-br from-orange-900/20 to-red-900/20 border border-orange-500/30 rounded-xl p-6 flex flex-col justify-center items-center text-center shadow-lg">
             <h3 className="text-gray-400 text-sm font-medium mb-2">Monto a transferir (PEN)</h3>
             <p className="text-5xl font-black text-white mb-2">S/ {Number(amount).toLocaleString('es-PE')}</p>
             <p className="text-sm text-orange-300 font-medium">Por favor, transfiere exactamente este monto.</p>
          </div>
        </div>

        <div className="bg-[#161b22] border border-gray-800 rounded-xl p-6 md:p-8 shadow-lg">
          <h2 className="text-xl font-bold mb-6 border-b border-gray-800 pb-4">Pasos a seguir</h2>
          
          <div className="space-y-8">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center font-bold text-sm">1</div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">Realiza la transferencia</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Ingresa a la app de tu banco y realiza la transferencia al número de cuenta proporcionado. Utiliza el CCI si transfieres desde otro banco.
                </p>
              </div>
            </div>
            
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-gray-800 text-gray-300 rounded-full flex items-center justify-center font-bold text-sm">2</div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">Descarga el comprobante</h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  Una vez realizada, guarda la constancia de transferencia o toma una captura de pantalla donde se vea el número de operación y el monto.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-green-500/20 text-green-400 border border-green-500/30 rounded-full flex items-center justify-center font-bold"><CheckCircle className="h-5 w-5" /></div>
              <div>
                <h4 className="font-semibold text-white text-lg mb-1">Confirma tu inscripción</h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-4">
                  Envíanos el comprobante a nuestro equipo para validar el pago y darte acceso inmediato al programa.
                </p>
                <a href={`https://wa.me/5491138142899?text=${encodeURIComponent('Hola Labora, ya hice el pago del programa por transferencia BCP. Adjunto mi comprobante:')}`} target="_blank" rel="noopener noreferrer" className="inline-flex items-center bg-gray-800 hover:bg-gray-700 border border-gray-700 text-white font-medium py-3 px-5 rounded-xl text-sm transition-colors shadow-lg">
                  <Mail className="mr-2 h-4 w-4" /> Enviar comprobante por WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default PagoTransferenciaPeru;
