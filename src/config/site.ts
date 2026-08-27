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

/**
 * Lee una variable de entorno tolerando que exista pero esté vacía.
 * `??` solo cubre undefined: una variable creada en Vercel sin valor devuelve
 * "" y rompería el build. Siempre con acceso literal a `process.env.X`, que es
 * la única forma en que Next.js sustituye las NEXT_PUBLIC_* en el bundle.
 */
function envOr(value: string | undefined, fallback: string): string {
  const clean = value?.trim();
  return clean ? clean : fallback;
}

// Dominio definitivo. El apex galicontrolbrigantia.com redirige aquí.
const DEFAULT_SITE_URL = "https://www.galicontrolbrigantia.com";

/**
 * Normaliza el dominio: admite que se escriba sin protocolo o con barra final,
 * y si el valor no es una URL válida vuelve al dominio por defecto en lugar de
 * tumbar el build.
 */
function normalizeSiteUrl(value: string | undefined): string {
  const raw = value?.trim();
  if (!raw) return DEFAULT_SITE_URL;
  const withProtocol = /^https?:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(withProtocol);
    return `${url.protocol}//${url.host}`;
  } catch {
    return DEFAULT_SITE_URL;
  }
}

/** Teléfono en formato internacional sin espacios: +34XXXXXXXXX */
const phoneE164 = envOr(process.env.NEXT_PUBLIC_PHONE, "+34626588172");
/** WhatsApp en formato wa.me: solo dígitos con prefijo país, p.ej. 34600000000 */
const whatsappNumber = envOr(process.env.NEXT_PUBLIC_WHATSAPP, "34626588172");
const email = envOr(process.env.NEXT_PUBLIC_EMAIL, "PENDIENTE_EMAIL");
const siteUrl = normalizeSiteUrl(process.env.NEXT_PUBLIC_SITE_URL);

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
  taxId: envOr(process.env.NEXT_PUBLIC_TAX_ID, "PENDIENTE_CIF"),

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

  /**
   * PRECIOS ORIENTATIVOS
   * -----------------------------------------------------------------------
   * Fuente única de las cifras que aparecen en el blog. Cambiando estos
   * valores se actualizan todos los artículos a la vez: ninguno los repite
   * escritos a mano.
   *
   * Son orientativos y así se dice siempre que se muestran. El precio
   * definitivo se confirma por escrito en cada presupuesto.
   */
  pricing: {
    hourMin: 25,
    hourMax: 40,
    /** Ejemplo de referencia: una persona en la puerta de un local. */
    exampleLabel: "Un controlador en la puerta de un local, un sábado",
    exampleHours: "4-5 h",
    exampleTotal: 150,
    /** De qué depende que el precio suba o baje. */
    factors: [
      "El número de personas y de horas del servicio.",
      "El día de la semana y la franja horaria: los fines de semana y la noche cuestan más.",
      "La distancia y los desplazamientos hasta el lugar del servicio.",
      "Las características del servicio y del público previsto.",
      "Si es un servicio puntual o recurrente: la continuidad mejora las condiciones.",
    ],
  },

  /** Redes sociales. Deja el valor en PENDIENTE_* si todavía no existe el perfil. */
  social: {
    instagram: envOr(
      process.env.NEXT_PUBLIC_INSTAGRAM,
      "PENDIENTE_INSTAGRAM",
    ),
    facebook: envOr(process.env.NEXT_PUBLIC_FACEBOOK, "PENDIENTE_FACEBOOK"),
    linkedin: envOr(process.env.NEXT_PUBLIC_LINKEDIN, "PENDIENTE_LINKEDIN"),
  },
} as const;

/** Perfiles sociales realmente configurados (para el JSON-LD `sameAs`). */
export const socialProfiles: string[] = Object.values(site.social).filter(
  (v) => !isPending(v),
);

/**
 * Código de verificación de Google Search Console (la cadena de la etiqueta
 * `google-site-verification`, no la etiqueta entera). Se define en Vercel como
 * NEXT_PUBLIC_GSC_VERIFICATION. Si está vacío no se imprime nada.
 */
export const googleSiteVerification = (
  process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? ""
).trim();

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
  "/blog/":
    "Hola, vengo desde el blog de GaliControl y quería información.",
};

export const DEFAULT_WHATSAPP_MESSAGE = whatsappMessages["/"];

/** Navegación principal (sin enlace "Home": el logo lleva a `/`). */
export const mainNav = [
  { href: "/control-de-accesos/", label: "Control de accesos" },
  { href: "/personal-eventos/", label: "Eventos" },
  { href: "/control-accesos-locales/", label: "Locales" },
  { href: "/personal-auxiliar-empresas/", label: "Empresas" },
  { href: "/blog/", label: "Blog" },
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
    { href: "/blog/", label: "Blog" },
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
