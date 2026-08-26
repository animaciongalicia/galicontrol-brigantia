"use client";

import { track } from "@vercel/analytics";

export type CtaEvent =
  | "phone_click"
  | "whatsapp_click"
  | "budget_open"
  | "budget_submit"
  | "budget_success";

type CtaPayload = {
  /** Ruta desde la que se ha pulsado. */
  pathname: string;
  /** Identificador del CTA: header, hero, footer, mobile_bar, cta_section... */
  cta?: string;
  /** Origen adicional (por ejemplo la página que originó el formulario). */
  origin?: string;
};

/**
 * Registra un evento en Vercel Web Analytics.
 * Una llamada `tel:` no puede transmitir al teléfono qué página la originó,
 * por eso registramos aquí el pathname y el CTA pulsado.
 */
export function trackCta(event: CtaEvent, payload: CtaPayload): void {
  track(event, {
    pathname: payload.pathname,
    cta: payload.cta ?? "desconocido",
    origin: payload.origin ?? payload.pathname,
  });
}
