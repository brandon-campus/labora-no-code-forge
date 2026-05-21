import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const body = await req.json();
    console.log('Solicitud recibida:', JSON.stringify(body, null, 2));
    const { title, unit_price, quantity } = body;

    if (!title || !unit_price || !quantity) {
      throw new Error('Faltan parámetros requeridos (title, unit_price, quantity)');
    }

    const MP_ACCESS_TOKEN = Deno.env.get('MP_ACCESS_TOKEN');

    if (!MP_ACCESS_TOKEN) {
      throw new Error('No se encontró el token de acceso de Mercado Pago en las variables de entorno');
    }

    // Call Mercado Pago API to create preference
    const response = await fetch('https://api.mercadopago.com/checkout/preferences', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MP_ACCESS_TOKEN}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        items: [
          {
            title: title,
            description: title,
            quantity: quantity,
            currency_id: 'ARS',
            unit_price: Number(unit_price),
          }
        ],
        back_urls: {
          success: `${req.headers.get('origin') || 'http://localhost:5173'}`,
          failure: `${req.headers.get('origin') || 'http://localhost:5173'}`,
          pending: `${req.headers.get('origin') || 'http://localhost:5173'}`
        },
        auto_return: 'approved',
      }),
    });

    const data = await response.json();
    console.log('Respuesta de Mercado Pago:', JSON.stringify(data, null, 2));

    if (!response.ok) {
      throw new Error(data.message || 'Error al crear la preferencia en Mercado Pago');
    }

    return new Response(
      JSON.stringify({ init_point: data.init_point }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 200,
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: error.message }),
      { 
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        status: 400,
      },
    );
  }
});
