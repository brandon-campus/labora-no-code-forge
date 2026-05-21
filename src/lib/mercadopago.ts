import { supabase } from './supabaseClient';

export const createMercadoPagoPreference = async (productDetails: {
  title: string;
  unit_price: number;
  quantity: number;
}): Promise<string> => {
  try {
    const { data, error } = await supabase.functions.invoke('create-mp-preference', {
      body: productDetails,
    });

    if (error) {
      throw error;
    }

    if (!data.init_point) {
      throw new Error('No se recibió la URL de pago (init_point)');
    }

    return data.init_point;
  } catch (error) {
    console.error('Error creando preferencia MP:', error);
    throw error;
  }
};

export const processMercadoPagoPayment = async (paymentData: any): Promise<any> => {
  try {
    const { data, error } = await supabase.functions.invoke('process-mp-payment', {
      body: paymentData,
    });

    if (error) {
      throw error;
    }

    return data;
  } catch (error) {
    console.error('Error procesando pago MP:', error);
    throw error;
  }
};
