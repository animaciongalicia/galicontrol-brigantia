import type { Metadata } from "next";

import { LegalLayout } from "@/components/LegalLayout";
import { hasEmail, site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Política de privacidad | GaliControl",
  description:
    "Política de privacidad de GALICONTROL BRIGANTIA SL: qué datos tratamos, con qué finalidad y cómo ejercer tus derechos.",
  path: "/privacidad/",
});

export default function PrivacidadPage() {
  return (
    <LegalLayout title="Política de privacidad" updated="septiembre de 2026">
      <h2>1. Responsable del tratamiento</h2>
      <ul>
        <li>
          <strong>Responsable:</strong> {site.legalName}
        </li>
        <li>
          <strong>Domicilio:</strong> {site.address.street},{" "}
          {site.address.postalCode} {site.address.city}
        </li>
        <li>
          <strong>Contacto:</strong>{" "}
          {hasEmail ? site.contact.email : "pendiente de incorporar"}
        </li>
      </ul>

      <h2>2. Qué datos tratamos</h2>
      <p>
        Solo tratamos los datos que nos facilitas voluntariamente al
        contactarnos:
      </p>
      <ul>
        <li>
          <strong>Formulario de presupuesto:</strong> nombre, teléfono, fecha
          del servicio y, opcionalmente, empresa y el comentario que escribas.
        </li>
        <li>
          <strong>Teléfono, WhatsApp o correo electrónico:</strong> los datos
          que aparezcan en la propia comunicación.
        </li>
      </ul>
      <p>
        Junto a la solicitud registramos la página de la web desde la que nos
        escribes y la fecha y hora del envío, para poder atenderte mejor.
      </p>

      <h2>3. Con qué finalidad</h2>
      <ul>
        <li>Responder a tu solicitud de información o de presupuesto.</li>
        <li>Preparar y enviar la propuesta de servicio correspondiente.</li>
        <li>
          Gestionar la relación comercial y contractual si finalmente contratas
          el servicio.
        </li>
      </ul>

      <h2>4. Base jurídica</h2>
      <p>
        El tratamiento se basa en tu consentimiento al enviarnos la solicitud y,
        cuando corresponda, en la aplicación de medidas precontractuales o en la
        ejecución del contrato.
      </p>

      <h2>5. Conservación</h2>
      <p>
        Conservamos los datos el tiempo necesario para atender tu solicitud y,
        si se formaliza un servicio, durante los plazos legalmente exigibles.
        Después se suprimen.
      </p>

      <h2>6. Destinatarios</h2>
      <p>
        No cedemos tus datos a terceros salvo obligación legal. Utilizamos
        proveedores tecnológicos que actúan como encargados del tratamiento para
        el alojamiento del sitio web y el envío de los correos generados por el
        formulario.
      </p>
      <p>
        Si aceptas las cookies analíticas, Google Ireland Limited trata datos de
        navegación agregados a través de Google Analytics y Google Tag Manager.
        Puedes consultar el detalle y revocar tu consentimiento en la{" "}
        <a href="/cookies/">política de cookies</a>.
      </p>

      <h2>7. Tus derechos</h2>
      <p>
        Puedes ejercer los derechos de acceso, rectificación, supresión,
        oposición, limitación del tratamiento y portabilidad escribiendo a{" "}
        {hasEmail ? site.contact.email : "la dirección de contacto indicada"} o
        a nuestro domicilio, indicando el derecho que deseas ejercer. También
        puedes presentar una reclamación ante la Agencia Española de Protección
        de Datos.
      </p>

      <h2>8. Seguridad</h2>
      <p>
        Aplicamos medidas técnicas y organizativas razonables para proteger los
        datos que nos facilitas.
      </p>
    </LegalLayout>
  );
}
