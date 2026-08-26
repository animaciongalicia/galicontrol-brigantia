import {
  hasEmail,
  hasPhone,
  site,
  socialProfiles,
} from "@/config/site";
import { absoluteUrl } from "@/lib/links";

type Json = Record<string, unknown>;

const postalAddress: Json = {
  "@type": "PostalAddress",
  streetAddress: site.address.street,
  postalCode: site.address.postalCode,
  addressLocality: site.address.city,
  addressRegion: site.address.region,
  addressCountry: site.address.country,
};

/**
 * Solo publicamos teléfono/email cuando están realmente configurados.
 * Nunca publicamos reviews, ratings, precios, años de experiencia,
 * número de empleados ni certificaciones: no disponemos de esos datos.
 */
const contactFields: Json = {
  ...(hasPhone ? { telephone: site.contact.phone } : {}),
  ...(hasEmail ? { email: site.contact.email } : {}),
};

export function organizationJsonLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${site.url}/#organization`,
    name: site.longName,
    legalName: site.legalName,
    alternateName: site.name,
    url: site.url,
    description: site.tagline,
    address: postalAddress,
    areaServed: [site.serviceArea.primary, site.serviceArea.secondary],
    ...contactFields,
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
  };
}

export function localBusinessJsonLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#localbusiness`,
    name: site.longName,
    legalName: site.legalName,
    url: site.url,
    description: site.tagline,
    address: postalAddress,
    areaServed: [
      { "@type": "AdministrativeArea", name: "A Coruña" },
      { "@type": "AdministrativeArea", name: "Galicia" },
    ],
    ...contactFields,
    ...(socialProfiles.length > 0 ? { sameAs: socialProfiles } : {}),
  };
}

export function websiteJsonLd(): Json {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${site.url}/#website`,
    url: site.url,
    name: site.longName,
    inLanguage: "es-ES",
    publisher: { "@id": `${site.url}/#organization` },
  };
}

export function serviceJsonLd(input: {
  name: string;
  description: string;
  path: string;
  serviceType?: string;
}): Json {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: input.name,
    description: input.description,
    serviceType: input.serviceType ?? input.name,
    url: absoluteUrl(input.path),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: [
      { "@type": "AdministrativeArea", name: "A Coruña" },
      { "@type": "AdministrativeArea", name: "Galicia" },
    ],
  };
}

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): Json {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function faqJsonLd(items: { question: string; answer: string }[]): Json {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: { "@type": "Answer", text: item.answer },
    })),
  };
}
