import {
  DEFAULT_WHATSAPP_MESSAGE,
  hasWhatsapp,
  site,
  whatsappMessages,
} from "@/config/site";

/** Normaliza un pathname a la forma con barra final usada en la web. */
export function normalizePath(pathname: string): string {
  if (!pathname) return "/";
  return pathname.endsWith("/") ? pathname : `${pathname}/`;
}

/** Mensaje de WhatsApp contextual según la página de origen. */
export function whatsappMessageFor(pathname: string): string {
  return whatsappMessages[normalizePath(pathname)] ?? DEFAULT_WHATSAPP_MESSAGE;
}

/** Enlace wa.me con el mensaje contextual de la página. */
export function whatsappHref(pathname: string, message?: string): string {
  const text = encodeURIComponent(message ?? whatsappMessageFor(pathname));
  if (!hasWhatsapp) {
    // Sin número configurado enviamos a wa.me sin destinatario para no
    // fabricar un teléfono que no existe.
    return `https://wa.me/?text=${text}`;
  }
  const number = site.contact.whatsapp.replace(/\D/g, "");
  return `https://wa.me/${number}?text=${text}`;
}

/** URL absoluta a partir de una ruta interna. */
export function absoluteUrl(path: string): string {
  return `${site.url}${path.startsWith("/") ? path : `/${path}`}`;
}
