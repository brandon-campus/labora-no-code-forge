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
    console.log('Solicitud recibida de pago:', JSON.stringify(body, null, 2));

    const MP_ACCESS_TOKEN = Deno.env.get('MP_ACCESS_TOKEN');

    if (!MP_ACCESS_TOKEN) {
      throw new Error('No se encontró el token de acceso de Mercado Pago');
    }

    // Call Mercado Pago API to process payment
    const response = await fetch('https://api.mercadopago.com/v1/payments', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${MP_ACCESS_TOKEN}`,
        'X-Idempotency-Key': crypto.randomUUID(),
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();
    console.log('Respuesta de Mercado Pago (Payment):', JSON.stringify(data, null, 2));

    if (!response.ok) {
      throw new Error(data.message || 'Error al procesar el pago en Mercado Pago');
    }

    return new Response(
      JSON.stringify(data),
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
