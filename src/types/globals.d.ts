export {};

declare global {
  interface Window {
    /** Lo define el script de consentimiento que se ejecuta en la cabecera. */
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}
