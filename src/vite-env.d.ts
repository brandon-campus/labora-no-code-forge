
/// <reference types="vite/client" />

declare global {
  interface Window {
    fbq?: any;
    gtag?: (...args: any[]) => void;
    clarity?: (...args: any[]) => void;
  }
}

export { };
