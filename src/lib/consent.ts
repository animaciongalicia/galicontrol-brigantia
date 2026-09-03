/**
 * CONSENTIMIENTO DE COOKIES
 * ---------------------------------------------------------------------------
 * En España, las cookies de analítica exigen consentimiento previo: los
 * scripts de Google no pueden cargarse hasta que la persona acepta. Aquí está
 * la lógica compartida entre el script que se ejecuta en la cabecera y el
 * banner.
 *
 * Vercel Web Analytics no pasa por aquí: no usa cookies y por eso puede medir
 * también a quien rechaza.
 */

export const CONSENT_KEY = "galicontrol-consent";

export type ConsentValue = "granted" | "denied";

/**
 * Script que se ejecuta antes que nada en el navegador.
 *
 * 1. Declara el estado por defecto del Consent Mode v2 de Google: todo
 *    denegado. Así, si alguna etiqueta se cargara antes de tiempo, no
 *    escribiría cookies.
 * 2. Si la persona ya aceptó en una visita anterior, restaura ese permiso de
 *    inmediato para que la medición no pierda el primer evento.
 */
export const consentBootstrapScript = `
(function(){
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  window.gtag = window.gtag || gtag;
  gtag('consent', 'default', {
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied',
    analytics_storage: 'denied',
    functionality_storage: 'granted',
    security_storage: 'granted',
    wait_for_update: 500
  });
  try {
    if (localStorage.getItem('${CONSENT_KEY}') === 'granted') {
      gtag('consent', 'update', {
        ad_storage: 'granted',
        ad_user_data: 'granted',
        ad_personalization: 'granted',
        analytics_storage: 'granted'
      });
    }
  } catch (e) {}
})();
`;

/** Evento que dispara el enlace «cambiar preferencia» para reabrir el banner. */
export const REOPEN_CONSENT_EVENT = "galicontrol:abrir-cookies";
