import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BudgetButton } from "@/components/ContactButtons";
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

const PATH = "/control-accesos-locales/";

export const metadata: Metadata = pageMetadata({
  title: "Control de Accesos para Locales en A Coruña | GaliControl",
  description:
    "Personal de control de accesos para pubs, salas y locales de ocio en A Coruña. Cobertura recurrente, refuerzos y sustituciones.",
  path: PATH,
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Locales", path: PATH },
];

const benefits = [
  {
    title: "Continuidad",
    text: "Organizamos un equipo habitual para que conozca mejor el local, su funcionamiento y su público.",
  },
  {
    title: "Cobertura de bajas",
    text: "Si una persona no puede acudir por enfermedad o incidencia, organizamos una sustitución siempre que la disponibilidad operativa lo permita.",
  },
  {
    title: "Refuerzos puntuales",
    text: "Posibilidad de añadir personal para fiestas, fechas especiales, eventos o momentos de mayor actividad.",
  },
  {
    title: "Coordinación",
    text: "Cuando el servicio lo requiere, coordinación del equipo mediante walkies u otros medios de comunicación.",
  },
  {
    title: "Un único interlocutor",
    text: "El responsable del local no tiene que contactar individualmente con cada trabajador.",
  },
  {
    title: "Planificación",
    text: "Días, horarios, necesidades y personal definidos previamente, no improvisados cada semana.",
  },
];

export default function LocalesPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Servicio recurrente"
        title="Control de accesos para locales, pubs y salas en A Coruña"
        cta="hero_locales"
        photoLabel="Foto de acceso a un local de ocio"
        intro={
          <>
            <p>
              Personal de control de accesos para pubs, salas, discotecas y
              espacios de ocio, de forma puntual o con una planificación
              continuada.
            </p>
            <p>
              Un único interlocutor, un equipo organizado y capacidad de
              respuesta cuando surge una necesidad.
            </p>
          </>
        }
      />

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="El planteamiento"
              title="Deja de buscar personal cada fin de semana"
              intro="Si necesitas personal de forma habitual, el servicio debe funcionar como una solución recurrente y no como una contratación nueva cada semana."
            />
            <div className="mt-6">
              <BudgetButton
                cta="locales_mensaje_principal"
                size="lg"
                variant="solid"
                label="Quiero una propuesta para mi local"
                className="w-full sm:w-auto"
              />
            </div>
          </div>
          <div className="lg:col-span-6">
            <Card className="bg-brand-50">
              <CheckList
                items={[
                  "No tienes que buscar a alguien distinto cada semana.",
                  "No tienes que llamar uno a uno a los trabajadores.",
                  "No tienes que resolver tú una baja de última hora.",
                  "No empiezas de cero cada vez que cambia el equipo.",
                ]}
              />
            </Card>
          </div>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Qué aporta"
          title="Lo que cambia cuando el servicio está organizado"
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((item) => (
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

      <Section>
        <SectionHeading
          eyebrow="Servicios para"
          title="Espacios con los que trabajamos"
        />
        <div className="mt-8">
          <PillList
            items={[
              "Pubs",
              "Salas",
              "Discotecas",
              "Espacios de ocio",
              "Salas de conciertos",
              "Espacios de celebración",
            ]}
          />
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Dos modalidades"
          title="Puntual o recurrente"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card>
            <h3 className="text-xl font-bold text-brand-900">
              Cobertura puntual
            </h3>
            <p className="mt-3 leading-relaxed text-ink-700">
              Una baja, una fiesta, un refuerzo o una necesidad extraordinaria
              en una fecha concreta.
            </p>
          </Card>
          <Card>
            <h3 className="text-xl font-bold text-brand-900">
              Servicio recurrente
            </h3>
            <p className="mt-3 leading-relaxed text-ink-700">
              Personal varios días o noches al mes bajo una planificación
              continuada, con el mismo equipo siempre que sea posible.
            </p>
          </Card>
        </div>
        <div className="mt-8">
          <BudgetButton
            cta="locales_puntual_recurrente"
            size="lg"
            variant="solid"
            label="Quiero una propuesta para mi local"
            className="w-full sm:w-auto"
          />
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Menos gestión para el responsable del local"
          intro={
            <>
              <p>
                No se trata simplemente de contratar una persona durante unas
                horas.
              </p>
              <p className="mt-3">
                Se trata de que tengas un servicio organizado, un interlocutor y
                capacidad de respuesta cuando surge una necesidad.
              </p>
            </>
          }
        />
      </Section>

      <CtaSection
        cta="cierre_locales"
        title="¿Hablamos de tu local?"
        text="Cuéntanos qué días necesitas cobertura y te preparamos una propuesta."
      />

      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: "Control de accesos para locales",
            serviceType: "Control de accesos para locales de ocio",
            description:
              "Personal de control de accesos para pubs, salas, discotecas y espacios de ocio en A Coruña: cobertura recurrente, refuerzos y sustituciones.",
            path: PATH,
          }),
        ]}
      />
    </>
  );
}
