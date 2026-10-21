// Datos y clases compartidos por las landings con el diseño v2 (home, bootcamp)

export const APPLY_PATH = '/aplicar';
export const BOOTCAMP_APPLY_PATH = '/bootcamp/aplicar';
export const FREE_CLASS_PATH = '/clase-gratuita-ia';
export const WHATSAPP_NUMBER = '5491138142899';
export const whatsappUrl = (text: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
export const WHATSAPP_URL = whatsappUrl('Hola Labora, quiero más información.');
export const LINKEDIN_URL = 'https://www.linkedin.com/in/brandon-candia-edtech/';

export const programLinks = [
  { title: 'Bootcamp IA y No-Code', desc: 'De cero a producto funcional y publicado', to: '/bootcamp' },
  { title: 'Bootcamp Avanzado', desc: 'Productos escalables con IA', to: '/bootcamp' },
  { title: 'Labora-Startup', desc: 'Mentoría 1:1 para validar y conseguir clientes', to: APPLY_PATH },
  { title: 'Labora-Agency', desc: 'Mentoría 1:1 para crear tu agencia de software con IA', to: APPLY_PATH },
];

// Anclas absolutas ("/#id") para que funcionen desde cualquier página
export const navLinks = [
  { label: 'Casos', href: '/#casos' },
  { label: 'Metodología', href: '/#metodologia' },
  { label: 'Quién enseña', href: '/#instructor' },
  { label: 'Empresas', href: '/#empresas' },
  { label: 'Recursos', href: '/guia-prd' },
];

export const footerColumns = [
  { title: 'Programas', links: programLinks.map((p) => ({ label: p.title, href: p.to })) },
  { title: 'Academia', links: [
    { label: 'Casos de alumnos', href: '/#casos' }, { label: 'Metodología', href: '/#metodologia' },
    { label: 'Quién enseña', href: '/#instructor' }, { label: 'Empresas y Agencia', href: '/#empresas' },
  ] },
  { title: 'Recursos', links: [
    { label: 'Clase gratuita', href: FREE_CLASS_PATH }, { label: 'Guía PRD gratuita', href: '/guia-prd' }, { label: 'Link in Bio', href: '/links' },
  ] },
];

// Fila con scroll horizontal y snap en mobile; grilla desde md
export const snapRow = 'flex md:grid overflow-x-auto md:overflow-visible snap-x snap-mandatory scroll-px-5 -mx-margin-mobile px-margin-mobile md:mx-0 md:px-0 gap-space-sm md:gap-space-md pb-space-sm md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden';
export const snapItem = 'snap-start shrink-0 w-[84%] sm:w-[60%] md:w-auto';

// Precios de respaldo del Bootcamp si Supabase no responde (mismos que PricingSingleAds)
export const fallbackBootcampPricing: Record<string, { currency: string; unico: number; unicoOriginal?: number; cuotas3?: number }> = {
  Otro: { currency: 'USD', unico: 250, unicoOriginal: 350 },
  Argentina: { currency: 'ARS', unico: 248675, unicoOriginal: 355250 },
  Perú: { currency: 'PEN', unico: 595, unicoOriginal: 850 },
  Colombia: { currency: 'COP', unico: 624400, unicoOriginal: 892000 },
  México: { currency: 'MXN', unico: 3040, unicoOriginal: 4343 },
  Chile: { currency: 'CLP', unico: 156100, unicoOriginal: 223000 },
};

// Fecha de inicio a mostrar si la cohorte activa no la tiene cargada en el admin (/admin/cohortes)
export const FALLBACK_START_DATE = 'Sábado 14 de noviembre';
