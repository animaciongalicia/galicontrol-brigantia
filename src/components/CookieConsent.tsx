"use client";

import { useCallback, useEffect, useState } from "react";
import Link from "next/link";
import Script from "next/script";

import {
  CONSENT_KEY,
  REOPEN_CONSENT_EVENT,
  type ConsentValue,
} from "@/lib/consent";
import { googleAnalyticsId, googleTagManagerId } from "@/config/site";

function leerConsentimiento(): ConsentValue | null {
  try {
    const v = localStorage.getItem(CONSENT_KEY);
    return v === "granted" || v === "denied" ? v : null;
  } catch {
    return null;
  }
}

/**
 * Banner de cookies y carga condicional de la medición de Google.
 *
 * Los scripts de Tag Manager y Analytics solo se renderizan —y por tanto solo
 * se descargan— cuando el consentimiento es "granted". Si la persona rechaza,
 * no se carga nada de Google en ningún momento.
 */
export function CookieConsent() {
  const [consent, setConsent] = useState<ConsentValue | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const guardado = leerConsentimiento();
    setConsent(guardado);
    setVisible(guardado === null);
  }, []);

  // El enlace del footer y de la política de cookies reabre el banner.
  useEffect(() => {
    const abrir = () => setVisible(true);
    window.addEventListener(REOPEN_CONSENT_EVENT, abrir);
    return () => window.removeEventListener(REOPEN_CONSENT_EVENT, abrir);
  }, []);

  const decidir = useCallback((valor: ConsentValue) => {
    try {
      localStorage.setItem(CONSENT_KEY, valor);
    } catch {
      // Navegación privada o almacenamiento bloqueado: seguimos igualmente.
    }
    const concedido = valor === "granted";
    window.gtag?.("consent", "update", {
      ad_storage: concedido ? "granted" : "denied",
      ad_user_data: concedido ? "granted" : "denied",
      ad_personalization: concedido ? "granted" : "denied",
      analytics_storage: concedido ? "granted" : "denied",
    });
    setConsent(valor);
    setVisible(false);
  }, []);

  const cargarGoogle = consent === "granted";

  return (
    <>
      {cargarGoogle && googleTagManagerId ? (
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${googleTagManagerId}');`}
        </Script>
      ) : null}

      {cargarGoogle && googleAnalyticsId ? (
        <>
          <Script
            id="ga4-src"
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=${googleAnalyticsId}`}
          />
          <Script id="ga4-config" strategy="afterInteractive">
            {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
window.gtag = window.gtag || gtag;
gtag('js', new Date());
gtag('config', '${googleAnalyticsId}');`}
          </Script>
        </>
      ) : null}

      {visible ? (
        <div
          role="dialog"
          aria-labelledby="cookies-titulo"
          aria-describedby="cookies-texto"
          className="fixed inset-x-0 bottom-16 z-[60] px-3 pb-3 xl:bottom-0 xl:px-5 xl:pb-5"
        >
          <div className="container-page">
            <div className="rounded-2xl border border-brand-200 bg-white p-5 shadow-[0_8px_30px_rgba(11,44,66,0.18)] lg:p-6">
              <div className="lg:flex lg:items-start lg:justify-between lg:gap-8">
                <div className="max-w-2xl">
                  <h2
                    id="cookies-titulo"
                    className="text-base font-bold text-brand-900"
                  >
                    Cookies
                  </h2>
                  <p
                    id="cookies-texto"
                    className="mt-2 text-[0.95rem] leading-relaxed text-ink-700"
                  >
                    Usamos cookies propias necesarias para que la web funcione
                    y, si nos das permiso, cookies de Google Analytics para
                    saber qué páginas se visitan. Puedes rechazarlas y la web
                    funcionará igual. Más detalle en la{" "}
                    <Link
                      href="/cookies/"
                      className="font-semibold text-brand-600 underline underline-offset-2"
                    >
                      política de cookies
                    </Link>
                    .
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-3 sm:flex-row lg:mt-0 lg:shrink-0">
                  <button
                    type="button"
                    onClick={() => decidir("denied")}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl border-2 border-brand-200 px-5 font-semibold text-brand-800 transition-colors hover:border-brand-400 hover:bg-brand-50"
                  >
                    Rechazar
                  </button>
                  <button
                    type="button"
                    onClick={() => decidir("granted")}
                    className="inline-flex min-h-12 items-center justify-center rounded-xl bg-brand-700 px-6 font-semibold text-white transition-colors hover:bg-brand-800"
                  >
                    Aceptar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

/** Enlace para volver a abrir el banner y cambiar la decisión. */
export function CookieSettingsLink({
  className = "",
  children = "Preferencias de cookies",
}: {
  className?: string;
  children?: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new Event(REOPEN_CONSENT_EVENT))}
      className={className}
    >
      {children}
    </button>
  );
}
