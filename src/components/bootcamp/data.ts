import { FALLBACK_START_DATE } from '@/components/site/siteData';
import { CalendarDays, Clock, Code2, Hourglass, MonitorPlay, Rocket, Users, Video, type LucideIcon } from 'lucide-react';

export const heroChips: { icon: LucideIcon; text: string }[] = [
  { icon: Code2, text: 'Sin código' },
  { icon: Rocket, text: 'Proyectos reales' },
  { icon: Video, text: '100% en vivo' },
];

type Cohorte = {
  fecha_inicio?: string | null; semanas_duracion?: string | null; horario?: string | null; plazas_totales?: number | null;
} | null | undefined;

// Ficha rápida: valores de la cohorte activa en Supabase, con los mismos respaldos que usaba DatesSection
export const facts = (c: Cohorte): { icon: LucideIcon; label: string; value: string }[] => [
  { icon: CalendarDays, label: 'Inicio', value: c?.fecha_inicio || FALLBACK_START_DATE },
  { icon: Hourglass, label: 'Duración', value: c?.semanas_duracion || '7 semanas' },
  { icon: Clock, label: 'Horario (Arg)', value: c?.horario || 'Sábados 10-14hs' },
  { icon: MonitorPlay, label: 'Modalidad', value: '100% online, en vivo' },
  { icon: Video, label: 'Grabaciones', value: 'Disponibles de por vida' },
  { icon: Users, label: 'Cupos', value: `${c?.plazas_totales || 20} estudiantes` },
];

export const includes = [
  '7 semanas intensivas',
  'Clases 100% en vivo',
  'Acompañamiento personalizado',
  'Creación de proyectos reales',
  'Grabaciones de por vida',
  'Acceso a la comunidad privada',
];

export const bootcampFaqs = [
  ['¿Necesito saber programar?', 'No. El bootcamp enseña las bases lógicas, la arquitectura y cómo orquestar herramientas de IA para que construyas software funcional sin experiencia previa en código tradicional.'],
  ['¿Cuánto dura y cuánto tiempo necesito?', 'Son 7 semanas con clases en vivo de 4 horas semanales. Además conviene reservar tiempo para avanzar en tu proyecto entre clases.'],
  ['¿Qué pasa si no puedo conectarme en vivo?', 'Todas las clases se graban y quedan disponibles de por vida, junto con los materiales y recursos complementarios.'],
  ['¿Qué me llevo al terminar?', 'Tu propio producto funcionando y publicado, que presentas en el Demo Day de la última semana, y el método para seguir creando por tu cuenta.'],
  ['¿Qué herramientas tengo que pagar?', 'Usamos herramientas con planes gratuitos o de costo mínimo para prototipar, como Claude, Supabase, n8n y Vercel. En la primera semana te mostramos las opciones más convenientes.'],
  ['¿Hay precios en mi moneda?', 'Sí. Hay precios en moneda local para Argentina, Perú, Colombia, México y Chile; puedes verlos en la sección de precio eligiendo tu país.'],
  ['¿Qué pasa después de aplicar?', 'Coordinamos una llamada gratuita de 15 minutos para conocer tu idea, resolver tus dudas y ver si el bootcamp es para ti.'],
] as const;
