import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import {
  Card,
  CheckList,
  LegalNote,
  LinkPills,
  PhaseList,
  Prose,
  Section,
  SectionHeading,
  TextLink,
  TwoColumn,
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
          <LinkPills
            items={[
              { label: "Pubs", href: "/control-accesos-locales/" },
              { label: "Discotecas", href: "/control-accesos-locales/" },
              { label: "Salas", href: "/control-accesos-locales/" },
              { label: "Conciertos", href: "/personal-eventos/" },
              { label: "Festivales", href: "/personal-eventos/" },
              { label: "Fiestas", href: "/personal-eventos/" },
              { label: "Eventos deportivos", href: "/personal-eventos/" },
              { label: "Celebraciones", href: "/personal-eventos/" },
              { label: "Eventos de empresa", href: "/personal-auxiliar-empresas/" },
              { label: "Congresos", href: "/personal-auxiliar-empresas/" },
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
        <TwoColumn
          heading={
            <SectionHeading
              eyebrow="Cómo se organiza"
              title="Un servicio de accesos, paso a paso"
              intro="El trabajo que evita problemas en la puerta se hace antes de que llegue el primer asistente."
            />
          }
        >
          <PhaseList
          phases={[
            {
              title: "Antes del servicio",
              text: "Definimos con el organizador o con el titular del local cuántos puntos de acceso hay, en qué horario abre cada uno, qué documento da derecho a entrar —entrada, invitación, listado o acreditación— y cuáles son las condiciones de admisión y el aforo autorizado. También acordamos a quién avisa el equipo si surge una incidencia y por qué vía. Todo eso llega al personal antes de empezar, no sobre la marcha.",
            },
            {
              title: "Llegada y montaje del punto de acceso",
              text: "El equipo se presenta con antelación al horario de apertura para reconocer el espacio: dónde se forma la fila, por dónde entra el público, dónde está la salida, dónde se acredita el personal interno y qué zonas quedan restringidas. Si hay que colocar vallado, señalización o un mostrador, se hace en ese momento.",
            },
            {
              title: "Apertura",
              text: "El primer tramo es el que marca el resto de la noche. Es cuando llega más público de golpe, cuando se forma la cola y cuando aparecen las primeras dudas. Ahí lo que importa es que la fila avance a un ritmo constante y que quien llega sepa en todo momento dónde ponerse y qué tiene que enseñar.",
            },
            {
              title: "Durante el servicio",
              text: "Comprobación de entradas y acreditaciones, control del aforo, información a los asistentes, gestión de las salidas y reentradas si el evento las permite, y atención a las indicaciones de la organización. Cuando hay varios puntos de acceso, el equipo se mantiene en contacto para reequilibrar personal si en una puerta se acumula gente.",
            },
            {
              title: "Cierre",
              text: "Control de la salida del público, revisión de que las zonas de acceso quedan despejadas y traslado a la organización de cualquier incidencia relevante que se haya producido durante el servicio.",
            },
            ]}
          />
        </TwoColumn>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading
              title="Un acceso de local no se organiza como uno de recinto"
              intro="Aunque el trabajo se llame igual, la operativa cambia bastante según dónde se preste."
            />
            <Prose className="mt-6">
              <p>
                En un <strong>local de ocio</strong> el público llega repartido
                a lo largo de varias horas, en grupos pequeños, y muchas veces
                es gente que ya conoce el sitio. El acceso es un único punto,
                normalmente estrecho, y lo que más pesa es aplicar bien las
                condiciones de admisión y el aforo, y mantener la fila en orden
                sin generar tensión en la calle.
              </p>
              <p>
                En un <strong>recinto o un evento con entrada</strong> el
                público llega concentrado en una franja corta, casi todo el
                mundo entra en la primera hora y suele haber varios puntos de
                acceso simultáneos. Ahí lo determinante es el ritmo: cuántas
                personas por minuto pueden pasar por cada puerta y cómo se
                reparte el público entre ellas para que ninguna se colapse.
              </p>
            </Prose>
          </div>
          <div className="lg:col-span-6">
            <Card className="bg-brand-50">
              <h3 className="text-base font-bold text-brand-900">
                Errores que acaban generando problemas en la puerta
              </h3>
              <div className="mt-5">
                <CheckList
                  items={[
                    "Poner al personal justo a la hora de apertura, sin margen para reconocer el espacio.",
                    "No dejar claro por escrito quién decide en caso de duda sobre una admisión.",
                    "Abrir un solo punto de acceso cuando el público llega concentrado en poco tiempo.",
                    "No prever la reentrada: si no está decidida de antemano, se decide en la puerta y con público delante.",
                    "Ajustar tanto el número de personas que una incidencia en una puerta deja otra sin cubrir.",
                    "No avisar al equipo de los cambios de última hora en horarios o listados.",
                  ]}
                />
              </div>
            </Card>
          </div>
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
            GaliControl Brigantia presta control de accesos y personal auxiliar.
            Cuando un servicio necesita también vigilantes,{" "}
            <strong>
              los aportamos a través de empresas de seguridad privada
              habilitadas con las que colaboramos
            </strong>{" "}
            y coordinamos los dos equipos, para que tengas un solo interlocutor
            y una sola propuesta.
          </p>
        </LegalNote>
      </Section>

      <RelatedServices exclude={PATH} />

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
