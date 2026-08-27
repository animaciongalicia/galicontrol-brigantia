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
  PhaseList,
  PillList,
  Section,
  SectionHeading,
  TextLink,
  TwoColumn,
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
    title: "Recepción de asistentes",
    text: "Personal en la entrada que recibe, informa y orienta desde el primer minuto. Es la primera impresión del acto y la que marca el tono.",
  },
  {
    title: "Acomodación",
    text: "Organización de los asistentes dentro del espacio: dirigirlos a su sala, llenar las filas por orden y mantener libres los pasillos y las zonas reservadas.",
  },
  {
    title: "Staff y apoyo operativo",
    text: "Personal auxiliar repartido por los puntos que necesite el evento y disponible para lo que surja durante la jornada.",
  },
  {
    title: "Control de accesos",
    text: "Organización de la entrada y del paso a las distintas zonas, dentro de las funciones que legalmente corresponden.",
  },
  {
    title: "Atención al público",
    text: "Un punto de información atendido durante todo el acto para resolver dudas sin que nadie tenga que buscar al organizador.",
  },
  {
    title: "Acreditaciones",
    text: "Comprobación de listados y entrega de acreditaciones según las instrucciones del organizador, cuando el acto lo requiere.",
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
        photoSrc="/fotos/empresas.jpg"
        photoAlt="Staff de GaliControl en el mostrador de recepción de un congreso"
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
        <TwoColumn
          heading={
            <SectionHeading
              eyebrow="Cómo se controla"
              title="Cómo se organiza un congreso o un acto de empresa"
              intro="Lo que hace que un acto salga bien no es tener gente: es tener a cada persona en el sitio correcto en el momento correcto."
            />
          }
        >
          <PhaseList
            phases={[
              {
                title: "Reconocer el espacio antes del acto",
                text: "Vemos el espacio con la organización: por dónde entra el público, dónde se puede formar cola sin bloquear el paso, cuántas salas hay y cómo se llega a cada una, dónde están el guardarropa, los aseos y el catering, y qué zonas quedan reservadas. Con eso decidimos cuántas posiciones hacen falta y dónde va cada persona.",
              },
              {
                title: "Instrucciones al equipo",
                text: "Antes de abrir, todo el equipo sabe lo mismo: horario del acto, programa, nombres de los ponentes, quién accede a cada zona, qué se responde a las preguntas habituales y a quién se avisa si aparece algo que no está previsto. Un asistente no debería recibir dos respuestas distintas según a quién pregunte.",
              },
              {
                title: "La llegada",
                text: "Es el tramo crítico. La mayor parte del público llega en pocos minutos y hay que moverlo sin que se forme un tapón en la puerta. Personal en la entrada recibiendo y orientando, personal dirigiendo hacia la sala y personal dentro acomodando. Los tres puntos a la vez, no uno detrás de otro.",
              },
              {
                title: "Durante el acto",
                text: "Cuando el acto arranca, el equipo se reorganiza: se refuerza la atención a quien llega tarde, se controla el acceso a las zonas restringidas y se mantiene un punto de información. En congresos con salas simultáneas, personal en cada sala gestionando los cambios de sesión.",
              },
              {
                title: "Pausas, cambios de sala y cierre",
                text: "Las pausas y los cambios de sesión mueven a todo el público a la vez y son el segundo momento de tensión de la jornada. Ahí hace falta gente orientando. Al cerrar, se comprueba que las salas y los accesos quedan despejados y se traslada a la organización cualquier incidencia.",
              },
            ]}
          />
        </TwoColumn>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Qué resolvemos"
          title="Los cuatro servicios que más nos piden"
          intro="Más que una lista de funciones, lo que aportamos es que estas cuatro cosas dejen de ser un problema para quien organiza."
        />

        <div className="mt-10 space-y-6">
          <Card>
            <h3 className="text-xl font-bold text-brand-900">
              Recepción de asistentes
            </h3>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              <div className="space-y-3 leading-relaxed text-ink-700">
                <p>
                  El asistente llega a un sitio que no conoce, muchas veces con
                  el tiempo justo y sin saber a dónde tiene que ir. Si en la
                  entrada no hay nadie, pregunta a quien pilla —recepción del
                  hotel, personal de limpieza, otro invitado— y esa persona
                  responde lo que buenamente sabe.
                </p>
                <p>
                  Ponemos personal en la puerta desde antes de la hora de
                  citación, con la información del acto aprendida: dónde es,
                  cómo se llega, a qué hora empieza y qué hay que hacer al
                  entrar. La gente entra derecha a donde tiene que ir.
                </p>
              </div>
              <div className="rounded-2xl bg-brand-50 p-5">
                <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-600">
                  Lo que resuelve
                </h4>
                <div className="mt-4">
                  <CheckList
                    items={[
                      "Nadie se queda parado en la puerta buscando a alguien a quien preguntar.",
                      "La organización deja de responder las mismas cinco preguntas cien veces.",
                      "El acto empieza a su hora porque el público ya está dentro.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-brand-900">Acomodación</h3>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              <div className="space-y-3 leading-relaxed text-ink-700">
                <p>
                  Dejar entrar a la gente en una sala sin nadie que la acomode
                  tiene siempre el mismo resultado: las últimas filas llenas,
                  las primeras vacías, huecos sueltos por el medio y gente de
                  pie al fondo mientras quedan asientos libres.
                </p>
                <p>
                  Nuestro personal dirige el llenado por orden, ocupa desde
                  delante, mantiene libres los pasillos y las salidas y reserva
                  las zonas que la organización haya marcado para ponentes,
                  autoridades o prensa. Si hay que sentar a alguien en un sitio
                  concreto, se sabe de antemano.
                </p>
              </div>
              <div className="rounded-2xl bg-brand-50 p-5">
                <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-600">
                  Lo que resuelve
                </h4>
                <div className="mt-4">
                  <CheckList
                    items={[
                      "La sala se ve llena desde el escenario y desde las fotos.",
                      "Los invitados con sitio asignado lo encuentran sin buscarlo.",
                      "Pasillos y salidas despejados durante todo el acto.",
                      "Los que llegan tarde entran sin cortar la sesión.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-brand-900">
              Staff y apoyo operativo
            </h3>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              <div className="space-y-3 leading-relaxed text-ink-700">
                <p>
                  En todo evento hay una lista de cosas que no son de nadie:
                  vigilar que la puerta de la sala se mantenga cerrada durante
                  la ponencia, acompañar a un ponente hasta el backstage,
                  reponer la documentación de la mesa de entrada, indicar dónde
                  está el catering, cubrir un puesto mientras alguien descansa.
                </p>
                <p>
                  Ese trabajo, si no hay staff, lo acaba haciendo el organizador
                  —que debería estar pendiente del acto— o no lo hace nadie.
                  Aportamos personal auxiliar repartido por los puntos que haga
                  falta y con margen para lo que surja, que en un evento siempre
                  surge algo.
                </p>
              </div>
              <div className="rounded-2xl bg-brand-50 p-5">
                <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-600">
                  Lo que resuelve
                </h4>
                <div className="mt-4">
                  <CheckList
                    items={[
                      "El organizador puede estar en el acto y no apagando fuegos.",
                      "Cada punto del evento tiene a alguien responsable.",
                      "Los imprevistos se resuelven sin parar nada.",
                      "El equipo se reorganiza durante la jornada según dónde haga falta.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </Card>

          <Card>
            <h3 className="text-xl font-bold text-brand-900">
              Control de accesos
            </h3>
            <div className="mt-4 grid gap-6 lg:grid-cols-2">
              <div className="space-y-3 leading-relaxed text-ink-700">
                <p>
                  En un acto de empresa el acceso no suele ser un filtro duro,
                  pero sí tiene que estar ordenado: quién entra a la sala
                  principal, quién pasa al espacio reservado, quién accede al
                  backstage o a la zona de prensa, y a partir de qué momento se
                  cierra el paso para no interrumpir.
                </p>
                <p>
                  Nuestro personal aplica los criterios que fija la
                  organización, dentro de las funciones que legalmente le
                  corresponden. Si además hace falta seguridad privada, la
                  aportamos a través de las empresas habilitadas con las que
                  colaboramos y coordinamos los dos equipos.
                </p>
              </div>
              <div className="rounded-2xl bg-brand-50 p-5">
                <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-600">
                  Lo que resuelve
                </h4>
                <div className="mt-4">
                  <CheckList
                    items={[
                      "Las zonas reservadas se respetan sin que nadie tenga que discutir.",
                      "El acto no se interrumpe por entradas a destiempo.",
                      "Criterio uniforme: todo el equipo aplica lo mismo.",
                      "Si hace falta seguridad privada, la coordinamos nosotros.",
                    ]}
                  />
                </div>
              </div>
            </div>
          </Card>
        </div>

        <div className="mt-8">
          <TextLink href="/control-accesos-vs-vigilante-seguridad/">
            Cómo trabajamos con empresas de seguridad privada
          </TextLink>
        </div>
      </Section>

      <Section>
        <SectionHeading
          title="Un congreso no se cubre como una presentación de producto"
          intro="El tipo de acto cambia por completo dónde hay que poner al personal."
        />
        <div className="mt-9 grid gap-5 lg:grid-cols-3">
          <Card>
            <h3 className="text-base font-bold text-brand-900">Congresos</h3>
            <p className="mt-2 leading-relaxed text-ink-700">
              Varias jornadas, salas simultáneas y asistentes que entran y salen
              todo el día. Hace falta mostrador permanente, personal en los
              accesos a cada sala y gente que oriente por el recinto. La
              acreditación se entrega una vez y tiene que servir durante todo el
              congreso.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-brand-900">
              Presentaciones y actos de empresa
            </h3>
            <p className="mt-2 leading-relaxed text-ink-700">
              Duran poco y se concentran en una franja muy corta. Casi todo el
              esfuerzo va a la entrada y a la acomodación: que la gente pase
              rápido, encuentre su sitio y el acto empiece a la hora prevista.
            </p>
          </Card>
          <Card>
            <h3 className="text-base font-bold text-brand-900">
              Convenciones y actos institucionales
            </h3>
            <p className="mt-2 leading-relaxed text-ink-700">
              Suele haber protocolo, invitados con tratamiento diferenciado y
              zonas reservadas. El personal tiene que conocer de antemano quién
              accede a cada espacio y cómo se identifica, porque ahí no cabe
              preguntar sobre la marcha.
            </p>
          </Card>
        </div>
        <Note>
          En todos los casos coordinamos con quien organiza: la propia empresa,
          la agencia de eventos o el espacio que acoge el acto. Si el recinto
          tiene su propio personal o sus normas de acceso, el equipo trabaja
          dentro de esas normas, no en paralelo.
        </Note>
      </Section>

      <Section tone="soft">
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

      <RelatedServices exclude={PATH} />

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
