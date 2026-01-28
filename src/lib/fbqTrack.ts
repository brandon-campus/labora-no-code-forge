export const fbqTrack = (event: string, options: any = {}) => {
    if (typeof window !== 'undefined' && (window as any).fbq) {
        // If it's a standard event, it might be better to use 'track', but 
        // 'trackCustom' is safer for arbitrary strings like 'ClickInscribirseWhatsApp'.
        // However, standard events (PageView, Lead, etc.) should use 'track'.
        // We'll treat standard events specially if needed, but for now, 
        // based on usage 'ClickInscribirseWhatsApp' and 'AplicarAhoraClick', 
        // 'trackCustom' is the correct method for custom events.
        (window as any).fbq('trackCustom', event, options);
    } else {
        console.log('fbqTrack event skipped (fbq not found):', event, options);
    }
};
