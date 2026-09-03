import type { Metadata } from "next";

import { CookieSettingsLink } from "@/components/CookieConsent";
import { LegalLayout } from "@/components/LegalLayout";
import { hasEmail, site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Política de cookies | GaliControl",
  description:
    "Política de cookies de GALICONTROL BRIGANTIA SL: qué cookies utiliza esta web y cómo se mide el tráfico.",
  path: "/cookies/",
});

export default function CookiesPage() {
  return (
    <LegalLayout title="Política de cookies" updated="septiembre de 2026">
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en tu
        dispositivo al visitarlo, y que permiten reconocer el navegador o
        recordar información entre páginas.
      </p>

      <h2>2. Cookies que utiliza esta web</h2>

      <h3>Cookies técnicas (no requieren consentimiento)</h3>
      <p>
        Las estrictamente necesarias para que la web funcione y se sirva
        correctamente. También se guarda en tu navegador tu decisión sobre esta
        misma política, para no volver a preguntártelo en cada visita.
      </p>

      <h3>Medición sin cookies (no requiere consentimiento)</h3>
      <p>
        Utilizamos Vercel Web Analytics, un sistema de analítica agregada que{" "}
        <strong>no emplea cookies</strong> ni recopila datos que permitan
        identificarte personalmente. Nos sirve para saber qué páginas se visitan
        y qué botones de contacto se pulsan.
      </p>

      <h3>Cookies analíticas (solo si las aceptas)</h3>
      <p>
        Si das tu consentimiento, cargamos Google Analytics 4 y Google Tag
        Manager, de Google Ireland Limited. Estas herramientas instalan cookies
        propias de Google que permiten analizar de forma agregada cómo se usa la
        web: páginas vistas, procedencia del tráfico y comportamiento de
        navegación.
      </p>
      <ul>
        <li>
          <strong>Finalidad:</strong> medir y mejorar el rendimiento del sitio y
          entender qué contenidos resultan útiles.
        </li>
        <li>
          <strong>Base jurídica:</strong> tu consentimiento.
        </li>
        <li>
          <strong>Responsable:</strong> Google Ireland Limited.
        </li>
        <li>
          <strong>Duración:</strong> según la configuración de cada cookie de
          Google, con caducidades que suelen ir de la sesión a 24 meses.
        </li>
        <li>
          <strong>Transferencias internacionales:</strong> Google puede tratar
          datos fuera del Espacio Económico Europeo con las garantías previstas
          en la normativa de protección de datos.
        </li>
      </ul>
      <p>
        <strong>
          Mientras no aceptes, estos scripts no se cargan en ningún momento
        </strong>{" "}
        y no se instala ninguna cookie de Google. Si rechazas, la web funciona
        exactamente igual.
      </p>

      <h2>3. Cómo cambiar tu decisión</h2>
      <p>
        Puedes cambiar de opinión cuando quieras desde este mismo enlace:{" "}
        <CookieSettingsLink className="font-semibold text-brand-600 underline underline-offset-2">
          abrir preferencias de cookies
        </CookieSettingsLink>
        .
      </p>
      <p>
        También puedes configurar tu navegador para bloquear o eliminar las
        cookies desde sus opciones de privacidad. Bloquear las cookies técnicas
        puede afectar al funcionamiento de la web.
      </p>

      <h2>4. Servicios externos</h2>
      <p>
        Si pulsas el botón de WhatsApp saldrás de esta web y accederás a un
        servicio de un tercero, con sus propias condiciones y política de
        privacidad.
      </p>

      <h2>5. Contacto</h2>
      <p>
        Si tienes cualquier duda sobre esta política puedes escribirnos a{" "}
        {hasEmail ? site.contact.email : "la dirección de contacto indicada"} o
        consultar nuestra <a href="/privacidad/">política de privacidad</a>.
      </p>
      <p>
        Responsable: {site.legalName} — {site.address.street},{" "}
        {site.address.postalCode} {site.address.city}.
      </p>
    </LegalLayout>
  );
}
