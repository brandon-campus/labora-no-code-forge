
/**
 * Envía un evento personalizado al Meta Pixel si está disponible.
 * @param eventName Nombre del evento personalizado (string, sin espacios)
 */
export function fbqTrack(eventName: string) {
  if (window && typeof window.fbq === "function") {
    window.fbq('track', eventName);
  }
}
