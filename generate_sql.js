const fs = require('fs');
const modules = require('./extract.js');
const precios = {
  Otro: { currency: 'USD', symbol: '$', cuotas3: 110, cuotas2: 150, unico: 175, total3: 330, total2: 300, ahorras: 155, unicoOriginal: 250 },
  Argentina: { currency: 'ARS', symbol: '$', cuotas3: 156310, cuotas2: 213150, unico: 248675, total3: 468930, total2: 426300, ahorras: 220255, unicoOriginal: 355250 },
  Perú: { currency: 'PEN', symbol: 'S/', cuotas3: 374, cuotas2: 510, unico: 595, total3: 1122, total2: 1020, ahorras: 527, unicoOriginal: 850 },
  Colombia: { currency: 'COP', symbol: '$', cuotas3: 392480, cuotas2: 535200, unico: 624400, total3: 1177440, total2: 1070400, ahorras: 553040, unicoOriginal: 892000 },
  México: { currency: 'MXN', symbol: '$', cuotas3: 1911, cuotas2: 2606, unico: 3040, total3: 5733, total2: 5211, ahorras: 2693, unicoOriginal: 4343 },
  Chile: { currency: 'CLP', symbol: '$', cuotas3: 98120, cuotas2: 133800, unico: 156100, total3: 294360, total2: 267600, ahorras: 138260, unicoOriginal: 223000 }
};

const query = \
INSERT INTO public.cohortes (
    numero, estado, fecha_inicio, semanas_duracion, horario, plazas_totales, fecha_bienvenida,
    promocion_texto_banner, promocion_texto_badge,
    precios_regionales,
    temario
) VALUES (
    20, 'activa', 'Sábado 18 de Julio', '7 semanas', 'Sábados 10-14hs', 20, 'Sábado, 06 de junio',
    '🚀 ¡30% de descuento en el Pago Único hasta el 05/07!', '⭐ 30% DE DESCUENTO HASTA EL 05/07',
    '\'::jsonb,
    '\'::jsonb
) ON CONFLICT DO NOTHING;
\;

fs.writeFileSync('insert_cohorte.sql', query);
console.log('SQL file created');
