
export const GA_MEASUREMENT_ID = 'G-Q56JFBH0VC';

type EventName =
    | 'view_item'
    | 'begin_checkout'
    | 'purchase'
    | 'lead'
    | 'contact'
    | 'bootcamp_ia_cta'
    | 'aplicar_ahora_click'
    | string; // Allow custom strings but encourage typed ones

interface EventParams {
    [key: string]: string | number | boolean | undefined;
}

export const analytics = {
    /**
     * Tracks a page view across all configured analytics services.
     * Essential for SPA routing where the page doesn't actually reload.
     */
    trackPageView: (url: string) => {
        // Google Analytics 4
        if (typeof window.gtag === 'function') {
            window.gtag('config', GA_MEASUREMENT_ID, {
                page_path: url,
            });
        }

        // Facebook Pixel
        if (typeof window.fbq === 'function') {
            window.fbq('track', 'PageView');
        }
    },

    /**
     * Sends a custom event to all configured analytics services.
     */
    trackEvent: (eventName: EventName, params?: EventParams) => {
        // Google Analytics 4
        if (typeof window.gtag === 'function') {
            window.gtag('event', eventName, params);
        }

        // Facebook Pixel
        // Map some common GA events to FB Pixel standard events if needed
        if (typeof window.fbq === 'function') {
            // Basic implementation sends custom events to FB
            // You can add more complex mapping logic here if needed
            window.fbq('trackCustom', eventName, params);
        }
    }
};
