import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import {
  Card,
  CheckList,
  LegalNote,
  PillList,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

const PATH = "/control-de-accesos/";

export const metadata: Metadata = pageMetadata({
  title: "Control de Accesos para Eventos en A Coruña | GaliControl",
  description:
    "Personal de control de accesos para eventos, locales y recintos en A Coruña y Galicia. Organización de entradas, acreditaciones y accesos.",
  path: PATH,
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Control de accesos", path: PATH },
];

export default function ControlDeAccesosPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Servicio"
        title="Personal de control de accesos en A Coruña y Galicia"
        cta="hero_control_accesos"
        photoLabel="Foto de un punto de acceso con personal"
        intro={
          <>
            <p>
              Hablamos de <strong>personal</strong>: personas que organizan y
              controlan la entrada de público. No instalamos ni vendemos tornos,
              lectores, cámaras ni sistemas electrónicos de control de acceso.
            </p>
            <p>
              Un servicio de acceso no empieza cuando llegan los asistentes. Es
              necesario definir horarios, entradas, personal, organización,
              instrucciones y funcionamiento para evitar improvisaciones durante
              el servicio.
            </p>
          </>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Para qué servicios"
          title="Dónde se presta el control de accesos"
          intro="Locales de ocio, recintos y eventos de tamaños muy distintos, con necesidades distintas de organización."
        />
        <div className="mt-8">
          <PillList
            items={[
              "Pubs",
              "Discotecas",
              "Salas",
              "Conciertos",
              "Festivales",
              "Fiestas",
              "Recintos",
              "Eventos deportivos",
              "Celebraciones",
              "Eventos de empresa",
            ]}
          />
        </div>
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              eyebrow="Qué puede incluir"
              title="Funciones habituales del servicio"
              intro="Siempre dentro del ámbito legal correspondiente al control de accesos y al personal auxiliar."
            />
          </div>
          <div className="lg:col-span-7">
            <Card>
              <CheckList
                items={[
                  "Organización de accesos y del flujo de entrada.",
                  "Gestión y comprobación de entradas.",
                  "Acreditaciones y comprobación de listados.",
                  "Orientación e información a los asistentes.",
                  "Apoyo en capacidad y admisión cuando legalmente corresponda.",
                  "Apoyo operativo durante el servicio.",
                  "Organización de público en accesos y zonas de espera.",
                ]}
              />
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Antes de contratar"
          title="Lo que conviene tener definido"
          intro="No hace falta que lo traigas todo cerrado: con estos datos podemos plantear el servicio."
        />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {[
            {
              title: "Fecha y horario",
              text: "Día, hora de apertura y hora prevista de cierre del acceso.",
            },
            {
              title: "Lugar y recinto",
              text: "Localidad, tipo de espacio y número de puntos de acceso.",
            },
            {
              title: "Público previsto",
              text: "Asistentes estimados y si hay entrada, invitación o acreditación.",
            },
            {
              title: "Necesidades",
              text: "Qué tiene que resolver el personal durante el servicio.",
            },
          ].map((item) => (
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
        <LegalNote
          title="¿Necesitas control de accesos o seguridad privada?"
          action={
            <TextLink href="/control-accesos-vs-vigilante-seguridad/">
              Conocer las diferencias
            </TextLink>
          }
        >
          <p>
            Son dos actividades diferentes, con normativa y funciones distintas.
            El control de accesos organiza la entrada y el acceso del público;
            la seguridad privada presta funciones legalmente reservadas a ese
            sector y la realizan empresas y vigilantes habilitados.
          </p>
          <p className="mt-3">
            GaliControl Brigantia presta servicios de control de accesos y
            personal auxiliar, no servicios de seguridad privada.
          </p>
        </LegalNote>
      </Section>

      <CtaSection
        cta="cierre_control_accesos"
        title="Cuéntanos fecha, lugar y horario"
        text="Con esos datos estudiamos qué necesitas y te preparamos un presupuesto."
      />

      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: "Control de accesos",
            serviceType: "Personal de control de accesos",
            description:
              "Personal de control de accesos para eventos, locales y recintos en A Coruña y Galicia: organización de accesos, gestión de entradas y acreditaciones.",
            path: PATH,
          }),
        ]}
      />
    </>
  );
}
