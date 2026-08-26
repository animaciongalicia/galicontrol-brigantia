/**
 * CONFIGURACIÓN CENTRAL DE GALICONTROL BRIGANTIA
 * ---------------------------------------------------------------------------
 * Este es el ÚNICO archivo que hay que tocar para cambiar teléfono, WhatsApp,
 * email, dominio, redes sociales o los textos de los enlaces de WhatsApp.
 *
 * Los valores marcados como PENDIENTE_* son PLACEHOLDERS: no son datos reales
 * de la empresa. Sustitúyelos (o define la variable de entorno equivalente)
 * antes de publicar la web. Mientras sean placeholders NO se publican en los
 * datos estructurados (JSON-LD) para no dar información falsa a Google.
 */

/** Marcas de placeholder. Si un dato empieza por esto, se considera SIN CONFIGURAR. */
const PENDING_PREFIX = "PENDIENTE";

export function isPending(value: string | undefined | null): boolean {
  return !value || value.trim() === "" || value.startsWith(PENDING_PREFIX);
}

/** Teléfono en formato internacional sin espacios: +34XXXXXXXXX */
const phoneE164 = process.env.NEXT_PUBLIC_PHONE ?? "PENDIENTE_TELEFONO";
/** WhatsApp en formato wa.me: solo dígitos con prefijo país, p.ej. 34600000000 */
const whatsappNumber =
  process.env.NEXT_PUBLIC_WHATSAPP ?? "PENDIENTE_WHATSAPP";
const email = process.env.NEXT_PUBLIC_EMAIL ?? "PENDIENTE_EMAIL";
const siteUrl = (
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://galicontrolbrigantia.es"
).replace(/\/$/, "");

/** Formatea +34981123456 -> +34 981 12 34 56 (para mostrar en pantalla). */
function formatPhone(e164: string): string {
  if (isPending(e164)) return "Teléfono pendiente de configurar";
  const digits = e164.replace(/[^\d+]/g, "");
  const match = digits.match(/^\+34(\d{3})(\d{2})(\d{2})(\d{2})$/);
  if (!match) return e164;
  return `+34 ${match[1]} ${match[2]} ${match[3]} ${match[4]}`;
}

export const site = {
  /** Nombre comercial (el que se usa en la web). */
  name: "GaliControl",
  /** Nombre comercial largo. */
  longName: "GaliControl Brigantia",
  /** Razón social (facturación y avisos legales). */
  legalName: "GALICONTROL BRIGANTIA SL",
  /** CIF: pendiente de facilitar. Se muestra en el aviso legal cuando exista. */
  taxId: "PENDIENTE_CIF",

  tagline:
    "Control de accesos y personal auxiliar para eventos, locales y empresas en A Coruña y Galicia.",

  url: siteUrl,

  contact: {
    phone: phoneE164,
    phoneDisplay: formatPhone(phoneE164),
    phoneHref: isPending(phoneE164)
      ? "tel:+34000000000"
      : `tel:${phoneE164.replace(/\s/g, "")}`,
    whatsapp: whatsappNumber,
    email,
    emailDisplay: isPending(email) ? "Email pendiente de configurar" : email,
    emailHref: isPending(email) ? "mailto:" : `mailto:${email}`,
  },

  address: {
    street: "Calle San Andrés 29, 4ºD",
    postalCode: "15003",
    city: "A Coruña",
    region: "A Coruña",
    country: "ES",
    countryName: "España",
  },

  /** Área de servicio declarada. No prometemos cobertura fuera de esto. */
  serviceArea: {
    primary: "A Coruña",
    secondary: "Galicia",
    label: "A Coruña y Galicia",
    description:
      "Base en A Coruña. Servicios principalmente en la provincia de A Coruña y otros puntos de Galicia según las características de cada servicio.",
  },

  /** Redes sociales. Deja el valor en PENDIENTE_* si todavía no existe el perfil. */
  social: {
    instagram: process.env.NEXT_PUBLIC_INSTAGRAM ?? "PENDIENTE_INSTAGRAM",
    facebook: process.env.NEXT_PUBLIC_FACEBOOK ?? "PENDIENTE_FACEBOOK",
    linkedin: process.env.NEXT_PUBLIC_LINKEDIN ?? "PENDIENTE_LINKEDIN",
  },
} as const;

/** Perfiles sociales realmente configurados (para el JSON-LD `sameAs`). */
export const socialProfiles: string[] = Object.values(site.social).filter(
  (v) => !isPending(v),
);

export const hasPhone = !isPending(site.contact.phone);
export const hasWhatsapp = !isPending(site.contact.whatsapp);
export const hasEmail = !isPending(site.contact.email);

/**
 * Mensajes de WhatsApp por página. Sirven para que Dani sepa de dónde viene
 * cada contacto, ya que una llamada `tel:` no puede transmitir esa información.
 */
export const whatsappMessages: Record<string, string> = {
  "/": "Hola, vengo desde la web de GaliControl y quería información.",
  "/control-de-accesos/":
    "Hola, vengo desde la página de Control de Accesos de GaliControl y quería información.",
  "/personal-eventos/":
    "Hola, vengo desde la página de Eventos de GaliControl. Necesito personal para un evento.",
  "/control-accesos-locales/":
    "Hola, vengo desde la página de Locales de GaliControl. Necesito información para un local.",
  "/personal-auxiliar-empresas/":
    "Hola, vengo desde la página de Empresas de GaliControl. Necesito personal para un evento o servicio empresarial.",
  "/preguntas-frecuentes/":
    "Hola, vengo desde las preguntas frecuentes de GaliControl y quería información.",
  "/control-accesos-vs-vigilante-seguridad/":
    "Hola, vengo desde la web de GaliControl y tengo dudas sobre qué personal necesito.",
  "/presupuesto/":
    "Hola, vengo desde la web de GaliControl y quería pedir un presupuesto.",
};

export const DEFAULT_WHATSAPP_MESSAGE = whatsappMessages["/"];

/** Navegación principal (sin enlace "Home": el logo lleva a `/`). */
export const mainNav = [
  { href: "/control-de-accesos/", label: "Control de accesos" },
  { href: "/personal-eventos/", label: "Eventos" },
  { href: "/control-accesos-locales/", label: "Locales" },
  { href: "/personal-auxiliar-empresas/", label: "Empresas" },
  { href: "/preguntas-frecuentes/", label: "FAQs" },
] as const;

export const footerNav = {
  servicios: [
    { href: "/control-de-accesos/", label: "Control de accesos" },
    { href: "/personal-eventos/", label: "Eventos" },
    { href: "/control-accesos-locales/", label: "Locales" },
    { href: "/personal-auxiliar-empresas/", label: "Empresas" },
    { href: "/presupuesto/", label: "Pedir presupuesto" },
  ],
  informacion: [
    { href: "/preguntas-frecuentes/", label: "Preguntas frecuentes" },
    {
      href: "/control-accesos-vs-vigilante-seguridad/",
      label: "Controlador vs vigilante de seguridad",
    },
  ],
  legal: [
    { href: "/aviso-legal/", label: "Aviso legal" },
    { href: "/privacidad/", label: "Privacidad" },
    { href: "/cookies/", label: "Cookies" },
  ],
} as const;
