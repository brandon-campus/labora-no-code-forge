import { useEffect } from 'react';
import { CalendarDays, CheckCircle2, MessageCircle } from 'lucide-react';
import { fbqTrack } from '@/lib/fbqTrack';
import { useActiveCohorte } from '@/hooks/useActiveCohorte';
import { Container, SitePage } from '@/components/site/primitives';
import { FALLBACK_START_DATE, whatsappUrl } from '@/components/site/siteData';

export type PostApplicationConfig = {
  /** Evento de Pixel al llegar a la página (después de completar el formulario de Tally) */
  completeEvent: string;
  whatsappText: string;
  whatsappEvent: string;
};

// Mismos eventos y mensajes que las versiones anteriores de cada página
export const POST_APPLICATION = {
  organico: {
    completeEvent: 'CompleteRegistrationOrganico',
    whatsappText: '¡Hola Labora! (Vengo del orgánico) Quiero hablar con alguien sobre el bootcamp',
    whatsappEvent: 'ContactWhatsAppOrganico',
  },
  ads: {
    completeEvent: 'CompleteRegistrationAds',
    whatsappText: '¡Hola Labora! (Vengo desde los anuncios) Quiero hablar con alguien sobre el bootcamp',
    whatsappEvent: 'ContactWhatsAppAds',
  },
} satisfies Record<string, PostApplicationConfig>;

// Los parámetros de color adaptan el calendario al tema oscuro (Calendly los ignora si el plan no los permite)
const CALENDLY_URL = 'https://calendly.com/brandoncandia-labora/bootcamp?hide_gdpr_banner=1&background_color=11131a&text_color=ffffff&primary_color=e11d48';

const callGoals = [
  'Entender tu situación actual y la idea del proyecto que quieres desarrollar.',
  'Diseñar juntos un plan de acción para crear tu producto con IA y No-Code.',
  'Evaluar si el Bootcamp es el vehículo correcto para tus objetivos. Si es así, te invitamos a sumarte.',
];

const PostApplicationPage = ({ config }: { config: PostApplicationConfig }) => {
  const { data: cohorte } = useActiveCohorte();

  useEffect(() => {
    fbqTrack(config.completeEvent);

    const prevTitle = document.title;
    document.title = 'Reserva tu llamada | Labora';

    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.title = prevTitle;
      if (document.head.contains(script)) document.head.removeChild(script);
    };
  }, [config.completeEvent]);

  return (
    <SitePage>
      {/* Sin navegación: es un paso del embudo, el único objetivo es reservar la llamada */}
      <header className="w-full border-b border-white/[0.06]">
        <Container className="h-16 flex items-center">
          <img src="/lovable-uploads/logolabora.webp" alt="Labora" className="h-7 w-auto object-contain" />
        </Container>
      </header>

      <main className="relative w-full overflow-hidden">
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-b from-primary-container/20 via-secondary-container/10 to-transparent blur-3xl opacity-60" />
        <Container className="relative py-space-lg md:py-space-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg lg:gap-space-xl items-start">
            <div className="lg:col-span-4 lg:sticky lg:top-space-xl flex flex-col gap-space-md">
              <div className="inline-flex items-center gap-space-xs px-space-sm py-1 rounded-full bg-labora-neon/10 border border-labora-neon/30 w-fit">
                <CheckCircle2 className="w-3.5 h-3.5 text-labora-neon" />
                <span className="text-badge-caps uppercase tracking-wider text-labora-neon">Aplicación recibida · Último paso</span>
              </div>
              <div>
                <h1 className="text-headline-xl md:text-display-hero-mobile lg:text-headline-xl text-on-surface tracking-tight normal-case">Reserva tu llamada</h1>
                <p className="text-body-md md:text-body-lg text-on-surface-variant mt-space-xs">
                  Elige el día y horario que te quede mejor. Son 15 minutos, gratis y sin compromiso.
                </p>
                <a
                  href={whatsappUrl(config.whatsappText)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => fbqTrack(config.whatsappEvent)}
                  className="lg:hidden inline-block mt-space-xs text-body-sm text-primary underline-offset-4 hover:underline"
                >
                  ¿Ningún horario te sirve? Escríbenos por WhatsApp
                </a>
              </div>

              <div className="hidden lg:block"><CallInfo /></div>

              <p className="hidden lg:flex items-center gap-2 text-body-sm text-on-surface-variant">
                <CalendarDays className="w-4 h-4 text-primary shrink-0" />
                Próxima cohorte: <strong className="text-on-surface">{cohorte?.fecha_inicio || FALLBACK_START_DATE}</strong>
              </p>
              <div className="hidden lg:block">
                <WhatsappButton config={config} />
              </div>
            </div>

            <div className="lg:col-span-8">
              <div className="rounded-2xl overflow-hidden border border-white/[0.07] bg-surface-container-low shadow-2xl h-[1020px] sm:h-[760px] lg:h-[700px]">
                <div className="calendly-inline-widget" data-url={CALENDLY_URL} style={{ minWidth: '320px', height: '100%' }} />
              </div>
            </div>

            {/* En mobile el calendario va primero; la explicación y el contacto alternativo, debajo */}
            <div className="lg:hidden flex flex-col gap-space-md">
              <CallInfo />
              <p className="flex items-center gap-2 text-body-sm text-on-surface-variant">
                <CalendarDays className="w-4 h-4 text-primary shrink-0" />
                Próxima cohorte: <strong className="text-on-surface">{cohorte?.fecha_inicio || FALLBACK_START_DATE}</strong>
              </p>
              <WhatsappButton config={config} />
            </div>
          </div>
        </Container>
      </main>

      <footer className="w-full border-t border-white/[0.06] py-space-md">
        <Container>
          <p className="text-body-sm text-on-surface-variant text-center">© {new Date().getFullYear()} Academia Labora (labora.ar)</p>
        </Container>
      </footer>
    </SitePage>
  );
};

const CallInfo = () => (
  <div className="bg-surface-container-low border border-white/[0.07] rounded-2xl p-space-md">
    <h2 className="text-headline-sm text-on-surface normal-case mb-space-sm">¿Para qué es esta llamada?</h2>
    <ul className="space-y-3">
      {callGoals.map((g) => (
        <li key={g} className="list-none flex items-start gap-2 text-body-sm text-on-surface-variant">
          <CheckCircle2 className="w-[18px] h-[18px] text-labora-neon shrink-0 mt-0.5" /> <span>{g}</span>
        </li>
      ))}
    </ul>
  </div>
);

const WhatsappButton = ({ config }: { config: PostApplicationConfig }) => (
  <a
    href={whatsappUrl(config.whatsappText)}
    target="_blank"
    rel="noopener noreferrer"
    onClick={() => fbqTrack(config.whatsappEvent)}
    className="w-full inline-flex items-center justify-center gap-space-xs text-label-md text-on-surface bg-white/[0.03] border border-white/10 hover:border-primary-container transition-colors rounded-full px-space-lg py-space-sm"
  >
    <MessageCircle className="w-[18px] h-[18px] text-primary" />
    <span>Prefiero hablar por WhatsApp</span>
  </a>
);

export default PostApplicationPage;
