import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import {
  Card,
  CheckList,
  Section,
  SectionHeading,
  TextLink,
} from "@/components/ui";
import { breadcrumbJsonLd, serviceJsonLd } from "@/lib/jsonld";
import { pageMetadata } from "@/lib/seo";

const PATH = "/personal-eventos/";

export const metadata: Metadata = pageMetadata({
  title: "Personal para Eventos en A Coruña y Galicia | GaliControl",
  description:
    "Personal para eventos en A Coruña y Galicia: conciertos, festivales, fiestas, bodas, eventos deportivos y corporativos. Control de accesos y apoyo operativo.",
  path: PATH,
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Eventos", path: PATH },
];

const eventTypes = [
  {
    title: "Conciertos",
    text: "Accesos, comprobación de entradas y organización del público a la entrada del recinto.",
  },
  {
    title: "Festivales",
    text: "Varios puntos de acceso, acreditaciones y personal coordinado durante toda la jornada.",
  },
  {
    title: "Fiestas populares",
    text: "Accesos a recintos, carpas y zonas delimitadas en fiestas y celebraciones locales.",
  },
  {
    title: "Eventos deportivos",
    text: "Entrada de público, acreditaciones y apoyo en la organización de accesos.",
  },
  {
    title: "Bodas y celebraciones",
    text: "Recepción de invitados, control de invitación y apoyo a la organización del evento.",
  },
  {
    title: "Eventos privados",
    text: "Acceso por lista de invitados, discreción y coordinación con el anfitrión.",
  },
  {
    title: "Eventos corporativos",
    text: "Recepción, acreditaciones y staff para presentaciones y actos de empresa.",
  },
  {
    title: "Congresos",
    text: "Acreditación de asistentes, salas, orientación e información durante el congreso.",
  },
];

export default function PersonalEventosPage() {
  return (
    <>
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Servicio"
        title="Personal para eventos en A Coruña y Galicia"
        cta="hero_eventos"
        photoLabel="Foto de personal en un evento"
        intro={
          <p>
            Tú organizas el evento. Nosotros te ayudamos a cubrir y coordinar el
            personal necesario para que accesos, invitados y operativa funcionen
            correctamente.
          </p>
        }
      />

      <Section>
        <SectionHeading
          eyebrow="Tipos de eventos"
          title="Trabajamos en eventos muy distintos"
          intro="Cada evento tiene una operativa propia. El planteamiento de personal cambia según el recinto, el público y el horario."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {eventTypes.map((item) => (
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
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="Sin cálculos por tu cuenta"
              title="No tienes que saber cuántas personas necesitas"
              intro={
                <>
                  <p>
                    No necesitas calcular tú solo cuántas personas hacen falta.
                  </p>
                  <p className="mt-3">
                    Cuéntanos el tipo de evento, asistentes previstos, recinto,
                    horarios y necesidades y planteamos contigo una cobertura
                    razonable.
                  </p>
                </>
              }
            />
          </div>
          <div className="lg:col-span-6">
            <Card>
              <h3 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-600">
                Lo que nos ayuda a plantearlo
              </h3>
              <dl className="mt-5 grid gap-4 sm:grid-cols-2">
                {[
                  ["Fecha", "Día o días del evento."],
                  ["Localidad", "Dónde se celebra."],
                  ["Horario", "Inicio y fin previstos."],
                  ["Asistentes", "Público estimado."],
                  ["Tipo de recinto", "Sala, exterior, carpa, pabellón..."],
                  ["Necesidades", "Qué hay que cubrir."],
                ].map(([term, desc]) => (
                  <div key={term} className="rounded-xl bg-brand-50 px-4 py-3">
                    <dt className="text-sm font-bold text-brand-900">{term}</dt>
                    <dd className="mt-0.5 text-sm leading-relaxed text-ink-700">
                      {desc}
                    </dd>
                  </div>
                ))}
              </dl>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <SectionHeading
          eyebrow="Dimensión del servicio"
          title="Desde una necesidad puntual hasta un equipo coordinado"
          intro="Según el evento, el planteamiento puede ir desde una persona en un acceso hasta un equipo con varias posiciones y un responsable de coordinación."
        />
        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <Card>
            <h3 className="text-base font-bold text-brand-900">
              Una necesidad concreta
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-700">
              Un acceso, un punto de comprobación de entradas o un refuerzo para
              una franja horaria determinada.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-brand-900">
              Varias posiciones
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-700">
              Distintos puntos de acceso o funciones (entradas, acreditaciones,
              orientación) repartidos por el recinto.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-brand-900">
              Equipo con coordinación
            </h3>
            <p className="mt-2 text-[0.95rem] leading-relaxed text-ink-700">
              Cuando el servicio lo requiere, un responsable coordina al equipo
              y centraliza la comunicación con la organización.
            </p>
          </Card>
        </div>
        <p className="mt-6 max-w-3xl text-[0.95rem] leading-relaxed text-ink-500">
          La dimensión final del equipo se confirma siempre en el presupuesto,
          en función de la disponibilidad y de las necesidades reales del
          evento.
        </p>
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Transparencia"
              title="¿Y si el evento dura más de lo previsto?"
              intro="Los presupuestos pueden dejar definidas las horas incluidas y las condiciones de ampliación para evitar dudas si el evento termina más tarde."
            />
          </div>
          <div className="lg:col-span-5">
            <Card>
              <CheckList
                items={[
                  "Horas incluidas indicadas por escrito.",
                  "Condiciones de ampliación pactadas antes del servicio.",
                  "Sin sorpresas al terminar el evento.",
                ]}
              />
            </Card>
          </div>
        </div>
        <div className="mt-8">
          <TextLink href="/preguntas-frecuentes/">
            Ver todas las preguntas frecuentes
          </TextLink>
        </div>
      </Section>

      <CtaSection
        cta="cierre_eventos"
        title="¿Tienes ya la fecha del evento?"
        text="Cuéntanos fecha, localidad y horario y te planteamos la cobertura."
      />

      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          serviceJsonLd({
            name: "Personal para eventos",
            serviceType: "Personal auxiliar y control de accesos para eventos",
            description:
              "Personal para eventos en A Coruña y Galicia: conciertos, festivales, fiestas, bodas, eventos deportivos, privados y corporativos.",
            path: PATH,
          }),
        ]}
      />
    </>
  );
}
