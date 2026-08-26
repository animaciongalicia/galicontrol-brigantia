import type { Metadata } from "next";

import { LegalLayout } from "@/components/LegalLayout";
import { hasEmail, hasPhone, isPending, site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Aviso legal | GaliControl",
  description:
    "Aviso legal de GALICONTROL BRIGANTIA SL: titularidad del sitio web, condiciones de uso y propiedad intelectual.",
  path: "/aviso-legal/",
});

export default function AvisoLegalPage() {
  return (
    <LegalLayout title="Aviso legal" updated="agosto de 2026">
      <h2>1. Titular del sitio web</h2>
      <p>
        En cumplimiento de la Ley 34/2002, de servicios de la sociedad de la
        información y de comercio electrónico, se informa de los siguientes
        datos identificativos:
      </p>
      <ul>
        <li>
          <strong>Denominación social:</strong> {site.legalName}
        </li>
        <li>
          <strong>Nombre comercial:</strong> {site.longName}
        </li>
        <li>
          <strong>Domicilio:</strong> {site.address.street},{" "}
          {site.address.postalCode} {site.address.city} ({site.address.countryName})
        </li>
        <li>
          <strong>CIF:</strong>{" "}
          {isPending(site.taxId) ? "pendiente de incorporar" : site.taxId}
        </li>
        <li>
          <strong>Teléfono:</strong>{" "}
          {hasPhone ? site.contact.phoneDisplay : "pendiente de incorporar"}
        </li>
        <li>
          <strong>Correo electrónico:</strong>{" "}
          {hasEmail ? site.contact.email : "pendiente de incorporar"}
        </li>
        <li>
          <strong>Sitio web:</strong> {site.url}
        </li>
      </ul>

      <h2>2. Objeto</h2>
      <p>
        Este sitio web tiene por objeto ofrecer información sobre los servicios
        de control de accesos y personal auxiliar prestados por{" "}
        {site.legalName} y facilitar el contacto con la empresa.
      </p>

      <h2>3. Alcance de los servicios</h2>
      <p>
        {site.legalName} presta servicios de control de accesos y personal
        auxiliar dentro de las funciones que legalmente corresponden a esas
        actividades. No es una empresa de seguridad privada y no presta
        servicios legalmente reservados a ese sector.
      </p>

      <h2>4. Condiciones de uso</h2>
      <p>
        El acceso a este sitio web es gratuito y supone la aceptación de las
        presentes condiciones. La persona usuaria se compromete a hacer un uso
        adecuado de los contenidos y a no emplearlos para actividades ilícitas
        o lesivas para terceros.
      </p>

      <h2>5. Propiedad intelectual e industrial</h2>
      <p>
        Los contenidos de este sitio web (textos, diseño, logotipo, imágenes y
        código) son titularidad de {site.legalName} o de terceros que han
        autorizado su uso. Queda prohibida su reproducción, distribución o
        transformación sin autorización expresa.
      </p>

      <h2>6. Responsabilidad</h2>
      <p>
        La información publicada tiene carácter informativo y puede
        actualizarse sin aviso previo. Las condiciones concretas de cada
        servicio se fijan siempre en el presupuesto y en el contrato
        correspondiente. La información divulgativa sobre normativa no
        constituye asesoramiento jurídico.
      </p>

      <h2>7. Enlaces externos</h2>
      <p>
        Si este sitio incluye enlaces a páginas de terceros, {site.legalName} no
        se responsabiliza de sus contenidos ni de sus políticas de privacidad.
      </p>

      <h2>8. Legislación aplicable</h2>
      <p>
        Las presentes condiciones se rigen por la legislación española.
      </p>
    </LegalLayout>
  );
}
