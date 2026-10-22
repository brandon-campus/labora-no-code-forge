import {
  Brain, Briefcase, Banknote, Building2, Clock, Code2, Headset, Lightbulb, Library, Network,
  Rocket, Split, UserPlus, UserX, Video, BrainCircuit, Workflow, Wrench, Zap, type LucideIcon,
} from 'lucide-react';

export * from '@/components/site/siteData';
import { APPLY_PATH, FREE_CLASS_PATH } from '@/components/site/siteData';



// Clientes reales de la agencia / capacitaciones (se pueden reemplazar por logos)
export const clients = [
  'Papelera Bertolín', 'Ditobanx', 'ChocoPlaza', 'Servant', 'Servasa', 'IDCE Consulting',
  'Baufest', 'Truora', 'Founder Institute', 'Omnia Salud',
];

// Testimonios con experiencia concluida (los de "recién empiezo" se omiten a propósito)
export const featuredTestimonials = ['Agustin Gonzalez', 'Gonzalo Carballo', 'Alirio Aguirre', 'Mauricio Madelat', 'Sebastián Acuña'];

export const problems: { icon: LucideIcon; tag: string; title: string; text: string; cost: string }[] = [
  { icon: Library, tag: '01 · DISPERSIÓN', title: 'Sobrecarga de tutoriales', text: 'Videos aislados sin arquitectura, sin estándares y sin un modelo de negocio aplicable.', cost: 'Pierdes semanas sin avanzar' },
  { icon: Split, tag: '02 · PARÁLISIS', title: 'No saber por dónde empezar', text: 'Dudas constantes sobre base de datos, APIs y herramientas. Saltas de una a otra sin publicar nada.', cost: 'Ningún proyecto terminado' },
  { icon: UserX, tag: '03 · SOLEDAD', title: 'Construir sin que nadie te revise', text: 'Te trabas con errores técnicos y no hay quien revise y valide tu avance en vivo.', cost: 'Frustración y abandono' },
];

export const methodSteps = [
  ['01', 'Idea y PRD', 'Defines qué construir y para quién.'],
  ['02', 'Base de datos', 'Estructuras y guardas la información de tu producto.'],
  ['03', 'Diseño de interfaz', 'Diseñas las pantallas que van a usar tus usuarios.'],
  ['04', 'Producto funcional', 'Construyes las funciones principales con IA.'],
  ['05', 'Automatizaciones', 'Conectas herramientas para que las tareas se hagan solas.'],
  ['06', 'Pruebas', 'Verificas que todo funcione antes de mostrarlo.'],
  ['07', 'Publicación', 'Pones tu producto online.'],
  ['08', 'Lanzamiento', 'Sales a buscar tus primeros usuarios.'],
] as const;


export const methodBullets: { icon: LucideIcon; title: string; text: string }[] = [
  { icon: Zap, title: 'Defines qué construir.', text: 'Conviertes tu idea en un PRD claro, con la IA como asistente de especificación.' },
  { icon: Workflow, title: 'Lo construyes con IA.', text: 'Base de datos, login, pantallas y automatizaciones, sin escribir código a mano.' },
  { icon: Rocket, title: 'Lo publicas.', text: 'Terminas con un producto online, probado y listo para mostrar a tus primeros usuarios.' },
];

export const instructorStats = [
  { value: '15+', label: 'cohortes dictadas' },
  { value: '#21', label: 'cohorte actual' },
  { value: '8', label: 'etapas, de la idea al lanzamiento' },
];

export const instructorFacts = [
  'Bootcamp en español de IA y No-Code para emprendedores y profesionales no técnicos, desde fines de 2024. Antes fue un bootcamp de Golang para devs junior.',
  'AI Product Builder en Ditobanx.',
  'Con la agencia de Labora desarrolló software para Papelera Bertolín, Ditobanx, ChocoPlaza y Servant.',
  'Diseñó programas de capacitación corporativa para Servasa, IDCE Consulting, Baufest, Truora, Founder Institute y Omnia Salud.',
  'Co-presentó con Hernán Lamanna en un congreso de relaciones laborales sobre IA, y juntos crearon El Club del Laburo.',
];

export type SecondaryProgram = {
  level: string; format: string; title: string; text: string;
  /** Ícono grande de la cabecera visual de la tarjeta */
  icon: LucideIcon;
  keywords: string[];
  features: { icon: LucideIcon; text: string }[];
  cta: string; to: string;
};

export const bootcampFeatures = [
  { icon: Video, text: 'Clases 100% en vivo, con grabaciones' },
  { icon: Wrench, text: 'Tu propio proyecto de punta a punta' },
  { icon: Headset, text: 'Acompañamiento y resolución de dudas' },
];

export const secondaryPrograms: SecondaryProgram[] = [
  {
    level: 'Nivel 2', format: 'Grupal · en vivo', title: 'Bootcamp Avanzado', icon: BrainCircuit,
    text: 'Arquitecturas complejas, RAG, Claude Code, automatización multiagente y backend escalable a nivel producción.',
    keywords: ['Agentes', 'RAG', 'Claude Code'],
    features: [{ icon: Clock, text: '4 semanas (Mar y Jue 20-22h)' }, { icon: BrainCircuit, text: 'Agentes y RAG avanzado' }],
    cta: 'Ver detalles', to: '/bootcamp',
  },
  {
    level: 'Nivel 3', format: 'Mentoría 1:1', title: 'Labora-Startup', icon: Rocket,
    text: 'Asesoría individual semanal de 7 semanas orientada a validación de mercado, estrategia comercial y primeros clientes.',
    keywords: ['Validación', 'Tracción', 'Go-To-Market'],
    features: [{ icon: Headset, text: 'Asesoría 1:1 semanal' }, { icon: UserPlus, text: 'Primeros usuarios y clientes' }],
    cta: 'Postular a Startup', to: APPLY_PATH,
  },
  {
    level: 'Nivel 3', format: 'Mentoría 1:1', title: 'Labora-Agency', icon: Briefcase,
    text: 'Crea y escala tu agencia de soluciones de software e IA. Propuestas de alto ticket, contratos y captación B2B.',
    keywords: ['Propuestas', 'Pricing', 'Clientes B2B'],
    features: [{ icon: Briefcase, text: '7 semanas de coaching 1:1' }, { icon: Banknote, text: 'Pricing y contratos B2B' }],
    cta: 'Postular a Agency', to: APPLY_PATH,
  },
];

export const audiences: { icon: LucideIcon; badge: string; title: string; text: string }[] = [
  { icon: Building2, badge: 'NO TÉCNICO', title: 'Profesional de industria', text: 'Finanzas, salud, legal o retail: crea tu propio software sin depender de agencias.' },
  { icon: Lightbulb, badge: 'FOUNDER', title: 'Emprendedor con una idea', text: 'Materializa tu MVP, valida con clientes reales y lanza con confianza.' },
  { icon: Network, badge: 'MAKER', title: 'Constructor desde cero', text: 'Aprende el stack moderno guiado por mentores, sin frustrarte con sintaxis tradicional.' },
  { icon: Code2, badge: 'DEV', title: 'Dev en reconversión', text: 'Integra agentes de código y reduce semanas de trabajo a días de despliegue.' },
];

export const enterpriseCards = [
  {
    id: 'empresas', tag: 'SOLUCIONES CORPORATIVAS', title: 'Labora Empresas',
    text: 'Capacitación in-company, remota o híbrida para equipos que necesitan desarrollar soluciones internas con IA, a la medida de tus flujos de trabajo.',
    items: ['Diagnóstico técnico inicial de tu equipo', 'Casos de uso reales de tu industria', 'Mentoría de entrega de MVPs internos'],
    cta: 'Consultar para mi empresa',
  },
  {
    id: 'agencia', tag: 'DESARROLLO DE PRODUCTO', title: 'Labora Agencia',
    text: 'Desarrollo de software a medida con nuestro equipo. Sprints ágiles, entrega con código propio, capacitación a tu equipo y soporte.',
    items: ['Proyectos para Bertolín, Ditobanx, ChocoPlaza y Servant', 'Entrega de código fuente y propiedad intelectual', 'Transferencia tecnológica a tu equipo'],
    cta: 'Cotizar proyecto',
  },
];

export const faqs = [
  ['¿Necesito saber programar?', 'No. El programa enseña las bases lógicas, la arquitectura y cómo orquestar herramientas de IA para que construyas software funcional sin experiencia previa en código tradicional.'],
  ['¿Qué pasa si no puedo conectarme en vivo?', 'Todas las sesiones se graban y quedan disponibles al finalizar la clase, junto con los materiales, prompts, guías y recursos complementarios.'],
  ['¿Cuánto tiempo a la semana necesito dedicarle?', 'Aproximadamente 4 a 6 horas semanales además de la clase en vivo para avanzar en tu proyecto, con guías paso a paso y soporte de la comunidad.'],
  ['¿Qué herramientas tengo que pagar?', 'Usamos herramientas con planes gratuitos o de costo mínimo para prototipar, como Claude, Vercel, Supabase y n8n. En la primera semana detallamos las opciones más convenientes para optimizar tus gastos.'],
  ['¿Puedo pagar en cuotas o con moneda local?', 'Sí. Hay pago único o en cuotas, y medios de pago locales para Argentina, Perú, Colombia, México y Chile. Los precios de la cohorte actual están en la sección de programas.'],
  ['¿Qué diferencia hay entre el Bootcamp y el Bootcamp Avanzado?', 'El Bootcamp te lleva desde cero al lanzamiento de tu primer producto completo. El Avanzado profundiza en Claude Code, RAG, arquitecturas multiagente y backend escalable a nivel de producción.'],
  ['¿Qué es Labora-Startup y Labora-Agency?', 'Son programas de asesoría 1:1 de 7 semanas enfocados en go-to-market, primeros usuarios y validación de modelo (Startup), o en ventas, pricing y captación de clientes de desarrollo (Agency).'],
  ['¿Cómo es la llamada?', 'Completas un formulario breve y eliges el día y horario que te quede mejor. Es una llamada gratuita de 15 minutos con nuestro equipo académico para conocer tu idea, resolver tus dudas y ver si el programa se adapta a tu objetivo.'],
] as const;


// Iconos usados solo por el hero/otros
export const heroChips: { icon: LucideIcon; text: string }[] = [
  { icon: Brain, text: '8 etapas, de la idea al lanzamiento' },
  { icon: Video, text: 'En vivo y con grabaciones' },
];
