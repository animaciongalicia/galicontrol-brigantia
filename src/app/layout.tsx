import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import { CookieConsent } from "@/components/CookieConsent";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { JsonLd } from "@/components/JsonLd";
import { MobileCtaBar } from "@/components/MobileCtaBar";
import { googleSiteVerification, site } from "@/config/site";
import {
  localBusinessJsonLd,
  organizationJsonLd,
  websiteJsonLd,
} from "@/lib/jsonld";
import { consentBootstrapScript } from "@/lib/consent";
import { ogImage } from "@/lib/seo";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Control de Accesos y Personal para Eventos en A Coruña | GaliControl",
    template: "%s | GaliControl",
  },
  description:
    "Personal de control de accesos y apoyo para eventos, locales y empresas en A Coruña y Galicia. Servicios puntuales y recurrentes.",
  applicationName: site.longName,
  authors: [{ name: site.legalName }],
  creator: site.legalName,
  publisher: site.legalName,
  formatDetection: { telephone: true, address: false, email: false },
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    siteName: site.longName,
    url: site.url,
    images: [ogImage],
  },
  twitter: { card: "summary_large_image", images: [ogImage.url] },
  ...(googleSiteVerification
    ? { verification: { google: googleSiteVerification } }
    : {}),
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
};

export const viewport: Viewport = {
  themeColor: "#0b2c42",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es" className={inter.variable}>
      <head>
        {/* Consent Mode v2: todo denegado por defecto. Debe ejecutarse antes
            que cualquier etiqueta de Google. */}
        <Script id="consent-default" strategy="beforeInteractive">
          {consentBootstrapScript}
        </Script>
      </head>
      <body className="flex min-h-dvh flex-col antialiased">
        <a
          href="#contenido"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-brand-800 focus:px-4 focus:py-3 focus:text-white"
        >
          Saltar al contenido
        </a>

        <Header />

        <main id="contenido" className="flex-1">
          {children}
        </main>

        <Footer />

        {/* Espacio para que la barra fija inferior no tape el final del contenido */}
        <div aria-hidden="true" className="h-16 xl:hidden" />
        <MobileCtaBar />

        <JsonLd
          data={[organizationJsonLd(), localBusinessJsonLd(), websiteJsonLd()]}
        />
        {/* Vercel Web Analytics no usa cookies, así que no depende del
            consentimiento y mide también a quien lo rechaza. */}
        <Analytics />
        <CookieConsent />
      </body>
    </html>
  );
}
