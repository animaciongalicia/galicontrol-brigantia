import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import { Card, LegalNote, Section, TextLink } from "@/components/ui";
import { faqs } from "@/content/faqs";
import { breadcrumbJsonLd, faqJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

const PATH = "/preguntas-frecuentes/";

export const metadata: Metadata = pageMetadata({
  title: "Preguntas sobre Control de Accesos y Eventos | GaliControl",
  description:
    "Respuestas claras sobre control de accesos, personal para eventos, servicios recurrentes para locales, presupuestos y normativa aplicable en Galicia.",
  path: PATH,
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Preguntas frecuentes", path: PATH },
];

export default function FaqPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="FAQs"
        title="Preguntas frecuentes sobre control de accesos y personal para eventos"
        cta="hero_faqs"
        intro={
          <p>
            Respuestas breves y concretas sobre precios, mínimos, plazos,
            sustituciones y normativa aplicable. Si tu caso no aparece aquí,
            pregúntanoslo directamente por teléfono o WhatsApp.
          </p>
        }
        aside={
          <Card className="bg-white">
            <h2 className="text-base font-bold text-brand-900">
              Las cinco dudas más repetidas
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem] leading-relaxed text-ink-700">
              <li>Cuánto cuesta y de qué depende el precio.</li>
              <li>Si hay un mínimo de horas.</li>
              <li>Qué pasa si el servicio se alarga.</li>
              <li>Quién cubre una baja de última hora.</li>
              <li>Si hace falta controlador o vigilante de seguridad.</li>
            </ul>
          </Card>
        }
      />

      <Section>
        <FaqList items={faqs} />
      </Section>

      <Section tone="soft">
        <LegalNote
          title="Control de accesos y seguridad privada no son lo mismo"
          action={
            <TextLink href="/control-accesos-vs-vigilante-seguridad/">
              Ver diferencias entre controlador y vigilante de seguridad
            </TextLink>
          }
        >
          <p>
            Si tienes dudas sobre qué figura necesita tu local o tu evento, en
            esta página lo explicamos con detalle.
          </p>
        </LegalNote>
      </Section>

      <RelatedServices
        exclude={PATH}
        title="¿Buscas un servicio concreto?"
        limit={4}
      />

      <CtaSection
        cta="cierre_faqs"
        title="¿Tu pregunta no está aquí?"
        text="Escríbenos o llámanos y te respondemos directamente."
      />

      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(faqs)]} />
    </>
  );
}
