import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import {
  Card,
  Note,
  Section,
  SectionHeading,
  TextLink,
  TwoColumn,
} from "@/components/ui";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

const PATH = "/control-accesos-vs-vigilante-seguridad/";

export const metadata: Metadata = pageMetadata({
  title: "Controlador de Accesos vs Vigilante de Seguridad | GaliControl",
  description:
    "Diferencias entre controlador de accesos y vigilante de seguridad: qué es cada figura, qué funciones corresponden a cada una y qué necesita tu local o tu evento.",
  path: PATH,
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Controlador vs vigilante de seguridad", path: PATH },
];

const comparison: { area: string; controlador: string; vigilante: string }[] = [
  {
    area: "Marco normativo",
    controlador:
      "Normativa autonómica de espectáculos públicos y actividades recreativas.",
    vigilante: "Normativa estatal de seguridad privada.",
  },
  {
    area: "Dónde presta servicio",
    controlador:
      "Acceso a locales de ocio, recintos y eventos abiertos al público.",
    vigilante:
      "Los servicios y lugares previstos en la normativa de seguridad privada.",
  },
  {
    area: "Objeto principal",
    controlador:
      "Organizar y controlar la entrada del público y aplicar las condiciones de admisión y aforo.",
    vigilante:
      "Funciones de seguridad legalmente reservadas al sector de la seguridad privada.",
  },
  {
    area: "Quién puede contratarlo",
    controlador:
      "Titulares de locales, organizadores de eventos y promotores.",
    vigilante:
      "Se contrata a través de una empresa de seguridad privada habilitada.",
  },
  {
    area: "Acreditación del personal",
    controlador:
      "Requisitos de formación y acreditación establecidos por la normativa autonómica.",
    vigilante:
      "Habilitación profesional expedida conforme a la normativa de seguridad privada.",
  },
];

export default function ComparativaPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Información"
        title="Diferencias entre controlador de accesos y vigilante de seguridad"
        cta="hero_comparativa"
        intro={
          <p>
            Son dos figuras distintas, con normativa y funciones diferentes.
            Esta página explica en qué se diferencian para ayudarte a decidir
            qué necesita tu local o tu evento, y qué pasa cuando hacen falta
            las dos.
          </p>
        }
        aside={
          <Card className="bg-white">
            <h2 className="text-base font-bold text-brand-900">
              En una línea
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700">
              El control de accesos organiza la entrada del público. La
              seguridad privada desarrolla funciones que la ley le reserva.
            </p>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700">
              GaliControl presta la primera y, cuando hace falta la segunda, la
              aporta a través de empresas habilitadas con las que colabora, con
              una sola propuesta y un solo interlocutor.
            </p>
          </Card>
        }
      />

      <Section>
        <Note>
          Esta información es divulgativa y no sustituye al asesoramiento
          jurídico ni a la consulta de la normativa aplicable en cada caso.{" "}
          <strong>
            GaliControl Brigantia no es una empresa de seguridad privada
          </strong>{" "}
          y no presta por sí misma servicios reservados a ese sector. Cuando un
          servicio necesita vigilantes de seguridad, los aportamos a través de
          empresas de seguridad privada habilitadas con las que colaboramos, y
          coordinamos el conjunto para que tengas un único interlocutor.
        </Note>
      </Section>

      <Section tone="soft">
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <h2 className="text-xl font-bold text-brand-900">
              Qué es un controlador de accesos
            </h2>
            <p className="mt-3 leading-relaxed text-ink-700">
              Es la persona encargada de organizar y controlar la entrada del
              público a un local de ocio, a un recinto o a un evento. Su trabajo
              se centra en el acceso: comprobar entradas, invitaciones o
              acreditaciones, ordenar la fila, informar a los asistentes y
              aplicar las condiciones de admisión y el control de aforo fijados
              por el titular del local o por el organizador, dentro de lo que
              establece la normativa aplicable.
            </p>
          </Card>

          <Card>
            <h2 className="text-xl font-bold text-brand-900">
              Qué es un vigilante de seguridad
            </h2>
            <p className="mt-3 leading-relaxed text-ink-700">
              Es un profesional del sector de la seguridad privada, con
              habilitación expedida conforme a la normativa estatal de seguridad
              privada, y que presta sus servicios a través de una empresa de
              seguridad privada habilitada. Sus funciones son las que esa
              normativa reserva a este personal y no pueden ser asumidas por
              otras figuras.
            </p>
          </Card>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Comparativa"
          title="Qué funciones corresponden a cada uno"
          intro="Resumen orientativo de las diferencias principales entre ambas figuras."
        />
        <div className="mt-8 overflow-x-auto rounded-2xl border border-brand-100">
          <table className="w-full min-w-[42rem] border-collapse text-left text-[0.95rem]">
            <caption className="sr-only">
              Comparativa entre controlador de accesos y vigilante de seguridad
            </caption>
            <thead>
              <tr className="bg-brand-50">
                <th scope="col" className="px-5 py-4 font-bold text-brand-900">
                  Aspecto
                </th>
                <th scope="col" className="px-5 py-4 font-bold text-brand-900">
                  Controlador de accesos
                </th>
                <th scope="col" className="px-5 py-4 font-bold text-brand-900">
                  Vigilante de seguridad
                </th>
              </tr>
            </thead>
            <tbody>
              {comparison.map((row) => (
                <tr key={row.area} className="border-t border-brand-100">
                  <th
                    scope="row"
                    className="px-5 py-4 align-top font-semibold text-brand-800"
                  >
                    {row.area}
                  </th>
                  <td className="px-5 py-4 align-top leading-relaxed text-ink-700">
                    {row.controlador}
                  </td>
                  <td className="px-5 py-4 align-top leading-relaxed text-ink-700">
                    {row.vigilante}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section tone="soft">
        <SectionHeading
          title="Qué no debe hacer un controlador de accesos"
          intro="El personal de control de accesos no asume funciones reservadas legalmente a la seguridad privada. En concreto, no le corresponde:"
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {[
            "Prestar servicios de vigilancia y protección propios de la seguridad privada.",
            "Presentarse ante el público como vigilante de seguridad ni utilizar distintivos que induzcan a confusión.",
            "Realizar funciones que la normativa de seguridad privada reserva expresamente a personal habilitado.",
          ].map((item) => (
            <Card key={item}>
              <p className="leading-relaxed text-ink-700">{item}</p>
            </Card>
          ))}
        </div>
        <Note>
          Ante una incidencia que exceda del ámbito del control de accesos, lo
          que corresponde es avisar a la organización, al titular del local y,
          cuando proceda, a las fuerzas y cuerpos de seguridad.
        </Note>
      </Section>

      <Section>
        <SectionHeading
          title="¿Qué necesita mi evento?"
          intro="Depende del tipo de actividad, del espacio y de la normativa aplicable. Como orientación general:"
        />
        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <Card className="bg-brand-50">
            <h3 className="text-lg font-bold text-brand-900">
              Suele encajar el control de accesos
            </h3>
            <p className="mt-3 leading-relaxed text-ink-700">
              Cuando lo que necesitas es organizar la entrada del público:
              comprobar entradas o invitaciones, gestionar acreditaciones,
              ordenar la fila, informar a los asistentes y aplicar las
              condiciones de admisión y aforo del local o del evento.
            </p>
          </Card>
          <Card className="bg-brand-50">
            <h3 className="text-lg font-bold text-brand-900">
              Puede requerirse también seguridad privada
            </h3>
            <p className="mt-3 leading-relaxed text-ink-700">
              Cuando la actividad exige funciones reservadas a ese sector o
              cuando la normativa aplicable al tipo de espectáculo o instalación
              lo establece. En ese caso no tienes que buscar por tu cuenta:
              aportamos los vigilantes a través de las empresas de seguridad
              privada habilitadas con las que colaboramos y coordinamos los dos
              servicios.
            </p>
          </Card>
        </div>
      </Section>

      <Section tone="soft">
        <TwoColumn
          heading={
            <SectionHeading
              eyebrow="Servicio integral"
              title="Sí pueden trabajar conjuntamente, y nosotros lo coordinamos"
            />
          }
        >
          <p>
            En muchos eventos conviven ambas figuras, cada una en su ámbito: el
            personal de control de accesos organiza la entrada del público y el
            personal de seguridad privada desarrolla las funciones que la
            normativa le reserva. Son servicios complementarios, no
            intercambiables.
          </p>
          <p>
            <strong>
              GaliControl trabaja con empresas de seguridad privada habilitadas
            </strong>{" "}
            para prestar servicios conjuntos. Si tu evento o tu local necesita
            vigilantes además de control de accesos, no tienes que buscar y
            contratar por separado ni hacer de intermediario entre dos
            proveedores: nosotros aportamos el personal de control de accesos y
            el apoyo auxiliar, y la parte de seguridad privada la cubre la
            empresa habilitada con la que colaboramos.
          </p>
          <p>
            Tú tratas con un único interlocutor y recibes una propuesta
            conjunta. Nosotros nos ocupamos de que las dos partes lleguen con
            las mismas instrucciones, sepan quién hace qué y trabajen
            coordinadas durante el servicio, que es donde suelen aparecer los
            problemas cuando cada empresa va por su cuenta.
          </p>
          <p className="text-[0.95rem] text-ink-500">
            Cada actividad se presta dentro de su marco legal:{" "}
            {`GaliControl Brigantia SL`} no realiza funciones reservadas a la
            seguridad privada, y los vigilantes son siempre personal habilitado
            de una empresa de seguridad privada inscrita.
          </p>
        </TwoColumn>
      </Section>

      <Section>
        <TwoColumn
          heading={
            <SectionHeading
              eyebrow="Siguiente paso"
              title="Cómo solicitar personal"
            />
          }
        >
          <p>
            Cuéntanos qué tipo de local o evento tienes, la fecha, el horario y
            el público previsto. Con esa información te decimos qué cubrimos
            nosotros directamente y qué parte, si la hay, corresponde a
            seguridad privada.
          </p>
          <p>
            Si hacen falta las dos cosas, te preparamos una propuesta conjunta
            con todo incluido y un solo teléfono al que llamar. No rechazamos un
            servicio porque necesite vigilantes: sumamos a quien haga falta y
            lo coordinamos.
          </p>
          <div className="pt-2">
            <TextLink href="/preguntas-frecuentes/">
              Ver preguntas frecuentes
            </TextLink>
          </div>
        </TwoColumn>
      </Section>

      <RelatedServices exclude={PATH} limit={4} />

      <CtaSection
        cta="cierre_comparativa"
        title="¿Tienes dudas sobre qué personal necesitas?"
        text="Cuéntanos tu caso y lo revisamos contigo sin compromiso."
      />

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
