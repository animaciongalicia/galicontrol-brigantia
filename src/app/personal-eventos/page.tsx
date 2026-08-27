import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import {
  Card,
  CheckList,
  Note,
  Prose,
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
        photoSrc="/fotos/eventos.jpg"
        photoAlt="Equipo de GaliControl trabajando en la entrada de un evento"
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
        <Note>
          La dimensión final del equipo se confirma siempre en el presupuesto,
          en función de la disponibilidad y de las necesidades reales del
          evento.
        </Note>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Cómo se dimensiona"
          title="De qué depende el número de personas"
          intro="No hay una fórmula única, pero sí cuatro factores que determinan casi siempre la cobertura de un evento."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2">
          <Card>
            <h3 className="text-base font-bold text-brand-900">
              Cuántos puntos de acceso hay
            </h3>
            <p className="mt-2 leading-relaxed text-ink-700">
              Pesa más que el aforo. Un recinto con tres puertas necesita
              personal en las tres desde antes de abrir, aunque el público
              total sea moderado. Un recinto de la misma capacidad con una sola
              entrada se cubre con menos gente, pero necesita más control del
              ritmo de la fila.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-brand-900">
              Cómo llega el público
            </h3>
            <p className="mt-2 leading-relaxed text-ink-700">
              Un concierto con hora de inicio concentra casi toda la entrada en
              cuarenta o cincuenta minutos. Una fiesta que dura toda la noche
              reparte la llegada a lo largo de varias horas. El primer caso
              necesita refuerzo en la apertura; el segundo, continuidad.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-brand-900">
              Qué hay que comprobar en la entrada
            </h3>
            <p className="mt-2 leading-relaxed text-ink-700">
              No es lo mismo dejar pasar a quien enseña una entrada que
              contrastar un listado nominativo o entregar una acreditación.
              Cuanto más hay que comprobar, más baja el ritmo por persona y más
              cuenta el número de posiciones.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-brand-900">
              Cuántas horas dura el servicio
            </h3>
            <p className="mt-2 leading-relaxed text-ink-700">
              Un servicio largo necesita prever relevos y descansos. En eventos
              de jornada completa o de varios días, el planteamiento se hace por
              turnos, no por número total de personas.
            </p>
          </Card>
        </div>
        <Note>
          Con esos datos planteamos una propuesta y la explicamos: cuántas
          personas, en qué posiciones y en qué franjas. Si te parece que sobra o
          falta cobertura, se ajusta antes de cerrar el presupuesto.
        </Note>
      </Section>

      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Coordinación"
              title="Con quién se entiende el equipo durante el evento"
            />
            <Prose className="mt-6">
              <p>
                En un evento hay varios actores trabajando a la vez:
                producción, el personal del recinto, la empresa de sonido,
                barras, y —cuando el tipo de actividad lo requiere— seguridad
                privada contratada aparte. El personal de control de accesos
                tiene que saber a quién dirigirse en cada caso.
              </p>
              <p>
                Antes del servicio acordamos un{" "}
                <strong>interlocutor único por parte de la organización</strong>{" "}
                y, si el equipo es amplio, un responsable por nuestra parte que
                centraliza la comunicación. Así el organizador no tiene que dar
                instrucciones persona a persona ni buscar a nadie cuando surge
                algo.
              </p>
              <p>
                Cuando en el evento hay también vigilantes de seguridad, cada
                figura trabaja en su ámbito: nuestro personal organiza la
                entrada del público y la seguridad privada desarrolla las
                funciones que la normativa le reserva. Son servicios
                complementarios, y conviene tenerlo claro antes, no en mitad de
                una incidencia.
              </p>
            </Prose>
            <div className="mt-6">
              <TextLink href="/control-accesos-vs-vigilante-seguridad/">
                Ver diferencias entre controlador y vigilante de seguridad
              </TextLink>
            </div>
          </div>
          <div className="lg:col-span-5">
            <Card className="bg-brand-50">
              <h3 className="text-base font-bold text-brand-900">
                Cambios de última hora
              </h3>
              <p className="mt-3 leading-relaxed text-ink-700">
                En eventos casi siempre se mueve algo: la apertura se retrasa,
                aparecen invitados que no estaban en el listado, se abre una
                puerta que no estaba prevista o el aforo se llena antes de lo
                calculado.
              </p>
              <p className="mt-3 leading-relaxed text-ink-700">
                Lo que reduce el problema es haber decidido antes quién puede
                autorizar cada cosa. Si eso está acordado, un cambio se resuelve
                con una llamada. Si no, se acaba decidiendo en la puerta, con
                público delante y sin buena información.
              </p>
            </Card>
          </div>
        </div>
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

      <RelatedServices exclude={PATH} />

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
