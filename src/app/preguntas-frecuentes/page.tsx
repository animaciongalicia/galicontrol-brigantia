import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { FaqList } from "@/components/Faq";
import { JsonLd } from "@/components/JsonLd";
import { LegalNote, Section, TextLink } from "@/components/ui";
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

      <Section>
        <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
          FAQs
        </p>
        <h1 className="max-w-3xl text-[1.85rem] font-bold leading-[1.15] text-brand-900 sm:text-4xl">
          Preguntas frecuentes sobre control de accesos y personal para eventos
        </h1>
        <p className="mt-5 max-w-3xl text-[1.05rem] leading-relaxed text-ink-700">
          Respuestas breves y concretas. Si tu caso no aparece aquí,
          pregúntanoslo directamente por teléfono o WhatsApp.
        </p>

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

      <CtaSection
        cta="cierre_faqs"
        title="¿Tu pregunta no está aquí?"
        text="Escríbenos o llámanos y te respondemos directamente."
      />

      <JsonLd data={[breadcrumbJsonLd(crumbs), faqJsonLd(faqs)]} />
    </>
  );
}
