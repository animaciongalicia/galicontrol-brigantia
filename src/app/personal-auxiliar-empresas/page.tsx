import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import {
  Card,
  CheckList,
  PillList,
  Section,
  SectionHeading,
} from "@/components/ui";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

const PATH = "/personal-auxiliar-empresas/";

export const metadata: Metadata = pageMetadata({
  title: "Staff para Eventos Corporativos en A Coruña | GaliControl",
  description:
    "Staff y personal auxiliar para congresos, acreditaciones, recepción y eventos corporativos en A Coruña y Galicia.",
  path: PATH,
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Empresas", path: PATH },
];

const services = [
  {
    title: "Acreditaciones",
    text: "Recepción, comprobación de listados y entrega de acreditaciones según las instrucciones del organizador.",
  },
  {
    title: "Recepción de asistentes",
    text: "Bienvenida, información y orientación desde el primer momento.",
  },
  {
    title: "Acomodación",
    text: "Organización y orientación de invitados y asistentes dentro del espacio.",
  },
  {
    title: "Staff para eventos",
    text: "Personal auxiliar para diferentes puntos o funciones operativas del evento.",
  },
  {
    title: "Accesos",
    text: "Organización de accesos dentro de las funciones legalmente correspondientes.",
  },
  {
    title: "Atención al público",
    text: "Apoyo e información a asistentes durante toda la jornada.",
  },
  {
    title: "Apoyo operativo",
    text: "Personal auxiliar para necesidades concretas que surgen en cada evento.",
  },
];

export default function EmpresasPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Servicio para empresas"
        title="Staff y personal auxiliar para eventos corporativos"
        cta="hero_empresas"
        photoLabel="Foto de staff en un congreso"
        intro={
          <>
            <p>
              Congresos, presentaciones, convenciones y eventos de empresa
              necesitan personas que reciban, orienten, acrediten y ayuden a que
              asistentes y organización funcionen correctamente.
            </p>
            <p>
              Personal auxiliar y staff para eventos corporativos en A Coruña y
              Galicia, con un único interlocutor para la organización.
            </p>
          </>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Servicios"
          title="Qué puede cubrir nuestro personal"
          intro="Funciones de personal auxiliar y atención, siempre dentro del ámbito legal correspondiente."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((item) => (
            <Card key={item.title}>
              <h3 className="text-base font-bold text-brand-900">
                {item.title}
              </h3>
              <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-700">
                {item.text}
              </p>
            </Card>
          ))}
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Para quién"
          title="Con quién trabajamos"
        />
        <div className="mt-8">
          <PillList
            items={[
              "Empresas",
              "Agencias de eventos",
              "Promotores",
              "Organizadores de congresos",
              "Hoteles",
              "Espacios de eventos",
              "Administraciones",
              "Instalaciones deportivas",
              "Asociaciones y organizaciones",
            ]}
          />
        </div>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Beneficios"
              title="Por qué externalizar el staff del evento"
            />
          </div>
          <div className="lg:col-span-7">
            <Card>
              <CheckList
                columns={1}
                items={[
                  <>
                    <strong>Un único interlocutor</strong> para toda la
                    organización del personal.
                  </>,
                  <>
                    <strong>Equipo organizado</strong>, con instrucciones y
                    funciones definidas antes del evento.
                  </>,
                  <>
                    <strong>Personal adaptado al evento</strong> según el tipo
                    de acto y el perfil de asistentes.
                  </>,
                  <>
                    <strong>Cobertura puntual</strong>: contratas solo los días
                    y las horas que necesitas.
                  </>,
                  <>
                    <strong>Capacidad para coordinar diferentes funciones</strong>{" "}
                    dentro del mismo evento.
                  </>,
                ]}
              />
            </Card>
          </div>
        </div>
      </Section>

      <CtaSection
        cta="cierre_empresas"
        title="Cuéntanos tu próximo evento"
        text="Fecha, espacio, asistentes previstos y qué funciones necesitas cubrir. Con eso te preparamos la propuesta."
      />

      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: "Staff y personal auxiliar para empresas",
            serviceType: "Personal auxiliar para eventos corporativos",
            description:
              "Staff y personal auxiliar para congresos, acreditaciones, recepción y eventos corporativos en A Coruña y Galicia.",
            path: PATH,
          }),
        ]}
      />
    </>
  );
}
