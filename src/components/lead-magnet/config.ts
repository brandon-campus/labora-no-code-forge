/**
 * Lead magnets (clases gratuitas en video). Todas usan LeadMagnetPage.
 * - /clase-gratuita-ia: pauta en Meta Ads a público frío -> embudo de anuncios (/ads/bootcamp).
 * - El resto: se comparten en videos orgánicos -> /bootcamp-2 (embudo orgánico / Link en Bio).
 */
export type LeadMagnetConfig = {
  /** Identificador para los eventos de tracking (parámetro `page`) */
  id: string;
  tag: string;
  titleMain: string;
  titleHighlight: string;
  description: string;
  /** URL de embed (YouTube o Tella) */
  videoUrl: string;
  /** Portada del video (solo orgánicas); si falta y es YouTube se usa la miniatura automática */
  poster?: string;
  step1Title: string;
  step1Bullets: string[];
  bootcampText: string;
  bootcampPath: string;
  /**
   * Origen del tráfico. Además de marcar los mensajes de WhatsApp define la variante:
   * - ads: video de Tella/YouTube directo + tarjeta "¿Quieres ver el programa completo?".
   * - organico: portada con play + tarjeta para recibir los recursos por WhatsApp (captura contactos).
   */
  source: 'ads' | 'organico';
};

const ORGANIC_BOOTCAMP = '/bootcamp-2';

const DEFAULT_BOOTCAMP_TEXT = 'Domina el ciclo completo: desarrollo, bases de datos, automatización y lanzamiento.';

const claseGratuitaBase = {
  titleMain: 'Cómo crear productos con IA:',
  titleHighlight: 'el ciclo completo',
  description: 'Sin registros ni rodeos. Aprende el framework exacto que usamos para lanzar productos digitales en tiempo récord.',
  videoUrl: 'https://www.tella.tv/video/creacion-de-productos-con-ia-4p5u/embed?share=0',
  step1Title: 'Clase gratuita: cómo crear productos con IA',
  step1Bullets: ['Valida ideas con IA sin costo', 'Prototipa rápido tu solución'],
  bootcampText: DEFAULT_BOOTCAMP_TEXT,
};

export const LEAD_MAGNETS = {
  claseGratuitaAds: {
    id: 'clase-gratuita-ia', tag: 'Clase gratuita', ...claseGratuitaBase,
    bootcampPath: '/ads/bootcamp', source: 'ads',
  },
  claseGratuitaTikTok: {
    id: 'tiktok-clase-gratuita-ia', tag: 'Clase exclusiva de TikTok', ...claseGratuitaBase,
    poster: '/lovable-uploads/fotobrandoportada.png',
    bootcampPath: ORGANIC_BOOTCAMP, source: 'organico',
  },
  claseGratuitaOrganica: {
    id: 'clase-gratuita', tag: 'Clase gratuita', ...claseGratuitaBase,
    poster: '/lovable-uploads/fotobrandoportada.png',
    bootcampPath: ORGANIC_BOOTCAMP, source: 'organico',
  },
  claseEnVivo: {
    id: 'clase-en-vivo', tag: 'Masterclass de deploy',
    titleMain: '¿Cómo deployar una app', titleHighlight: 'creada con IA?',
    description: 'Aprende todo sobre el proceso de deployment. Pasa de tu versión local a producción conectando GitHub, Vercel y tu base de datos (Supabase).',
    videoUrl: 'https://www.youtube-nocookie.com/embed/LUZvJ3zMy1g?rel=0',
    step1Title: 'Masterclass: deploy a producción',
    step1Bullets: ['Entiende el stack completo: frontend y backend', 'Configura variables de entorno y dominios'],
    bootcampText: DEFAULT_BOOTCAMP_TEXT, bootcampPath: ORGANIC_BOOTCAMP, source: 'organico',
  },
  claseHerramientasApp: {
    id: 'clase-herramientas-app', tag: 'Clase exclusiva de herramientas',
    titleMain: '3 herramientas fundamentales', titleHighlight: 'para construir tu app',
    description: 'Descubre cómo Supabase, n8n y Vercel se combinan con IA (como Claude Code) para crear productos de forma profesional y escalable.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/3RS-DTHOktw?rel=0',
    step1Title: 'Dominando el stack',
    step1Bullets: ['Backend escalable con Supabase', 'Automatización total con n8n', 'Despliegue rápido con Vercel'],
    bootcampText: 'Lleva todo esto a la práctica construyendo productos reales de inicio a fin.',
    bootcampPath: ORGANIC_BOOTCAMP, source: 'organico',
  },
  guiaPrd: {
    id: 'guia-prd', tag: 'Guía práctica exclusiva',
    titleMain: 'El documento que necesitas antes de', titleHighlight: 'construir cualquier app con IA',
    description: 'Guía PRD: aprende el paso a paso exacto para definir tu producto antes de escribir una sola línea de código o usar herramientas No-Code.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/v1jTFGGjfEk?rel=0',
    step1Title: 'Guía PRD: documentación estratégica',
    step1Bullets: ['Estructura tu idea claramente', 'Define el alcance con precisión'],
    bootcampText: 'Pasa de la documentación a la creación. Construye tu app con IA y lánzala al mercado.',
    bootcampPath: ORGANIC_BOOTCAMP, source: 'organico',
  },
  seguridadIA: {
    id: 'seguridad-ia', tag: 'Alerta de seguridad',
    titleMain: 'Te van a hackear si construiste tu app', titleHighlight: 'con IA (Lovable, Claude, etc.)',
    description: 'Hay una probabilidad muy alta de que tu app tenga al menos uno de los 3 problemas graves de seguridad de los que hablamos en este video.',
    videoUrl: 'https://www.youtube-nocookie.com/embed/0cuAgUPsGgw?rel=0',
    step1Title: 'Identificar las vulnerabilidades',
    step1Bullets: ['Descubre los errores comunes generados por IA', 'Aprende por qué ocurren estos fallos'],
    bootcampText: 'Aprende a construir apps reales y seguras, con buenas prácticas desde el inicio.',
    bootcampPath: ORGANIC_BOOTCAMP, source: 'organico',
  },
} satisfies Record<string, LeadMagnetConfig>;

/** Convierte una fila de `lead_magnets` (admin /admin/clases) a la config de la página */
export const fromLeadMagnetRow = (row: {
  slug: string; tag_text: string; title_main: string; title_highlight: string; description: string;
  video_url: string; step1_title: string; step1_bullet1: string; step1_bullet2: string;
}): LeadMagnetConfig => ({
  id: `clase-${row.slug}`,
  tag: row.tag_text,
  titleMain: row.title_main,
  titleHighlight: row.title_highlight,
  description: row.description,
  videoUrl: row.video_url,
  step1Title: row.step1_title,
  step1Bullets: [row.step1_bullet1, row.step1_bullet2].filter(Boolean),
  bootcampText: DEFAULT_BOOTCAMP_TEXT,
  bootcampPath: ORGANIC_BOOTCAMP,
  source: 'organico',
});

/** Portada automática para videos de YouTube (Tella no expone una imagen pública) */
export const youtubePoster = (embedUrl: string) => {
  const id = embedUrl.match(/(?:embed\/|youtu\.be\/|v=)([A-Za-z0-9_-]{11})/)?.[1];
  return id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : undefined;
};
