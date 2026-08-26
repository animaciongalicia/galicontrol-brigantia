import type { Metadata } from "next";

import { site } from "@/config/site";
import { absoluteUrl } from "@/lib/links";

/**
 * Imagen para compartir en WhatsApp, redes y buscadores.
 * Es un archivo estático (`public/og.png`, 1200x630). Para cambiarla basta
 * con sustituir ese archivo manteniendo el mismo tamaño.
 */
export const ogImage = {
  url: "/og.png",
  width: 1200,
  height: 630,
  alt: "GaliControl Brigantia — Control de accesos y personal para eventos en A Coruña y Galicia",
};

type PageMetaInput = {
  title: string;
  description: string;
  path: string;
};

/** Metadata coherente (canonical + OpenGraph + Twitter) para cada página. */
export function pageMetadata({
  title,
  description,
  path,
}: PageMetaInput): Metadata {
  const url = absoluteUrl(path);
  return {
    // `absolute` evita que la plantilla del layout añada un segundo
    // "| GaliControl" a los títulos que ya lo llevan.
    title: { absolute: title },
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url,
      siteName: site.longName,
      title,
      description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [ogImage.url],
    },
  };
}
