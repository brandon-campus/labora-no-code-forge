import { createContext, useContext, type ReactNode } from 'react';
import { fbqTrack } from '@/lib/fbqTrack';
import { analytics } from '@/lib/analytics';
import { whatsappUrl } from '@/components/site/siteData';

/**
 * Configuración de cada landing del Bootcamp (/bootcamp y sus embudos).
 * Cada embudo conserva su destino de "Aplicar", su mensaje de WhatsApp y sus eventos de Pixel/GA
 * tal como estaban en las versiones anteriores, para no romper la atribución de campañas.
 */
export type LandingConfig = {
  /** Identificador usado en las etiquetas de eventos (event_label) */
  id: string;
  title: string;
  applyPath: string;
  whatsappText: string;
  applyEvent: { fbq: string; gtag: string; category: string };
  whatsappEvent: { fbq: string };
  /** 'site': header/footer con navegación del sitio. 'funnel': solo anclas internas, sin fugas a otras páginas */
  nav: 'site' | 'funnel';
  showPricing: boolean;
  /** Banner de promoción de la cohorte (solo en las landings que ya lo tenían) */
  showPromoBanner: boolean;
};

const organicEvents = {
  applyEvent: { fbq: 'AplicarAhoraClick', gtag: 'aplicar_ahora_click', category: 'conversion' },
  whatsappEvent: { fbq: 'ContactWhatsAppOrganico' },
};

const BASE_TEXT = '¡Hola Labora! Quiero obtener más información sobre el bootcamp de IA y No Code';

export const LANDINGS = {
  bootcamp: {
    id: 'Bootcamp', title: 'Bootcamp de IA y No-Code en vivo | Labora',
    applyPath: '/bootcamp/aplicar',
    whatsappText: '¡Hola Labora! (Vengo del orgánico) Quiero obtener más información sobre el bootcamp de IA y No Code',
    ...organicEvents, nav: 'site', showPricing: true, showPromoBanner: true,
  },
  ads: {
    id: 'Ads', title: 'Bootcamp de IA y No-Code en vivo | Labora',
    applyPath: '/ads/bootcamp/aplicar',
    whatsappText: '¡Hola Labora! (Vengo desde los anuncios) Quiero obtener más información sobre el bootcamp de IA y No Code',
    applyEvent: { fbq: 'AgendarLlamadaClickAds', gtag: 'agendar_llamada_click', category: 'conversion' },
    whatsappEvent: { fbq: 'ContactWhatsAppAds' },
    nav: 'funnel', showPricing: true, showPromoBanner: false,
  },
  tiktok: {
    id: 'TikTok', title: 'Bootcamp de IA y No-Code en vivo | Labora',
    applyPath: '/tiktok/bootcamp/aplicar',
    whatsappText: '¡Hola Labora! (Vengo del orgánico) Quiero obtener más información sobre el bootcamp de IA y No Code',
    ...organicEvents, nav: 'funnel', showPricing: false, showPromoBanner: false,
  },
  bootcamp2: {
    id: 'Bootcamp2', title: 'Bootcamp de IA y No-Code en vivo | Labora',
    applyPath: '/aplicar',
    whatsappText: `${BASE_TEXT} (Vengo de tu Link en Bio/Orgánico)`,
    ...organicEvents, nav: 'funnel', showPricing: true, showPromoBanner: true,
  },
  oferta: {
    id: 'Oferta', title: '30% OFF en el Bootcamp de IA y No-Code | Labora',
    applyPath: '/bootcamp/aplicar',
    whatsappText: BASE_TEXT,
    ...organicEvents, nav: 'funnel', showPricing: false, showPromoBanner: true,
  },
} satisfies Record<string, LandingConfig>;

type LandingValue = LandingConfig & {
  whatsappUrl: string;
  trackApply: (location: string) => void;
  trackWhatsapp: (location: string) => void;
};

const LandingContext = createContext<LandingValue | null>(null);

export const LandingProvider = ({ config, children }: { config: LandingConfig; children: ReactNode }) => {
  const value: LandingValue = {
    ...config,
    whatsappUrl: whatsappUrl(config.whatsappText),
    trackApply: (location) => {
      fbqTrack(config.applyEvent.fbq);
      analytics.trackEvent(config.applyEvent.gtag, { event_category: config.applyEvent.category, event_label: `${config.id}${location}`, value: 1 });
    },
    trackWhatsapp: (location) => {
      fbqTrack(config.whatsappEvent.fbq);
      analytics.trackEvent('whatsapp_click', { event_category: 'contact', event_label: `${config.id}${location}`, value: 1 });
    },
  };
  return <LandingContext.Provider value={value}>{children}</LandingContext.Provider>;
};

export const useLanding = () => {
  const ctx = useContext(LandingContext);
  if (!ctx) throw new Error('useLanding debe usarse dentro de <LandingProvider>');
  return ctx;
};
