import type { Metadata } from "next";

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
    <LegalLayout title="Política de cookies" updated="agosto de 2026">
      <h2>1. Qué son las cookies</h2>
      <p>
        Las cookies son pequeños archivos que un sitio web guarda en tu
        dispositivo al visitarlo, y que permiten reconocer el navegador o
        recordar información entre páginas.
      </p>

      <h2>2. Cookies que utiliza esta web</h2>
      <p>
        Esta web <strong>no utiliza cookies publicitarias ni de perfilado</strong>{" "}
        y no instala cookies de terceros con fines de marketing.
      </p>
      <ul>
        <li>
          <strong>Cookies técnicas:</strong> las estrictamente necesarias para
          que la web funcione y se sirva correctamente. Están exentas del deber
          de consentimiento.
        </li>
        <li>
          <strong>Medición de tráfico:</strong> utilizamos Vercel Web Analytics,
          un sistema de analítica agregada que no emplea cookies ni recopila
          datos que permitan identificarte personalmente. Nos sirve para saber
          qué páginas se visitan y qué botones de contacto se pulsan.
        </li>
      </ul>

      <h2>3. Cómo gestionar las cookies</h2>
      <p>
        Puedes configurar tu navegador para bloquear o eliminar las cookies en
        cualquier momento desde sus opciones de privacidad. Bloquear las cookies
        técnicas puede afectar al funcionamiento de la web.
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
