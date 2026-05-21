import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { CheckCircle, Shield } from 'lucide-react';
import { initMercadoPago, Payment } from '@mercadopago/sdk-react';
import { processMercadoPagoPayment } from '@/lib/mercadopago';
import { toast } from 'sonner';

// Inicializar SDK con la Public Key
initMercadoPago('TEST-7813fd9d-74b5-47c3-bee6-0e6776df3575', { locale: 'es-AR' });

const Checkout = () => {
  const [isProcessing, setIsProcessing] = useState(false);

  const initialization = {
    amount: 150000,
  };

  const customization = {
    paymentMethods: {
      creditCard: 'all',
      debitCard: 'all',
      mercadoPago: 'all',
    },
    visual: {
      style: {
        theme: 'dark' as const,
      }
    }
  };

  const onSubmit = async (
    { selectedPaymentMethod, formData }: any
  ) => {
    setIsProcessing(true);
    try {
      // Enviar datos al backend (Edge Function)
      const response = await processMercadoPagoPayment({
        ...formData,
        description: 'Bootcamp IA y No-Code',
      });
      
      console.log('Respuesta del pago:', response);
      
      if (response.status === 'approved') {
        toast.success("¡Pago aprobado! Bienvenido al Bootcamp.");
        setTimeout(() => {
          window.location.href = '/curso-campus';
        }, 2000);
      } else if (response.status === 'in_process' || response.status === 'pending') {
        toast.info("El pago está en proceso de revisión.");
      } else {
        toast.error(`El pago fue rechazado o ocurrió un error (${response.status})`);
      }
    } catch (error) {
      console.error(error);
      toast.error('Hubo un error al procesar el pago. Inténtalo de nuevo.');
    } finally {
      setIsProcessing(false);
    }
  };

  const onError = async (error: any) => {
    console.error('Error en Payment Brick:', error);
  };

  const onReady = async () => {
    console.log('Payment Brick listo');
  };

  return (
    <div className="min-h-screen bg-gray-950 flex flex-col">
      <Navbar />
      
      <main className="flex-1 container mx-auto px-4 py-16 flex flex-col lg:flex-row gap-8 justify-center items-start">
        {/* Columna de Resumen */}
        <div className="w-full lg:w-1/2 max-w-xl bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-white mb-2">
              Resumen de tu <span className="text-labora-neon">Inscripción</span>
            </h1>
            <p className="text-gray-400">Estás a un paso de comenzar tu formación.</p>
          </div>

          <div className="bg-gray-950 rounded-2xl p-6 border border-gray-800 mb-6">
            <div className="flex justify-between items-center mb-6 pb-6 border-b border-gray-800">
              <div>
                <h3 className="text-xl font-bold text-white">Bootcamp IA y No-Code</h3>
                <p className="text-gray-400 text-sm mt-1">Programa intensivo de 8 semanas</p>
              </div>
              <div className="text-right">
                <span className="text-2xl font-black text-labora-neon">$150.000 ARS</span>
              </div>
            </div>

            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-labora-neon" />
                <span>Acceso a todas las clases en vivo y grabaciones</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-labora-neon" />
                <span>Material de estudio y proyectos prácticos</span>
              </li>
              <li className="flex items-center gap-3 text-gray-300">
                <CheckCircle className="h-5 w-5 text-labora-neon" />
                <span>Certificado oficial al finalizar</span>
              </li>
            </ul>
          </div>
          
          <p className="text-center text-sm text-gray-500 flex items-center justify-center gap-2 mt-4">
            <Shield className="h-4 w-4" />
            Pago 100% seguro procesado por Mercado Pago
          </p>
        </div>

        {/* Columna de Pago (Brick) */}
        <div className="w-full lg:w-1/2 max-w-xl bg-gray-900 border border-gray-800 rounded-3xl p-8 shadow-2xl relative">
          <h2 className="text-2xl font-bold text-white mb-6">Método de Pago</h2>
          
          {/* Si está procesando mostramos un overlay para evitar doble click */}
          {isProcessing && (
            <div className="absolute inset-0 bg-gray-900/80 rounded-3xl z-10 flex items-center justify-center">
              <div className="text-labora-neon font-bold text-xl flex flex-col items-center gap-3">
                <div className="animate-spin rounded-full h-10 w-10 border-t-2 border-b-2 border-labora-neon"></div>
                Procesando pago...
              </div>
            </div>
          )}

          <div className="min-h-[400px]">
            <Payment
              initialization={initialization}
              customization={customization}
              onSubmit={onSubmit}
              onReady={onReady}
              onError={onError}
            />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Checkout;
