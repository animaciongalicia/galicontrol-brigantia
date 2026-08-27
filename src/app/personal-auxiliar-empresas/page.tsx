import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { RelatedServices } from "@/components/RelatedServices";
import {
  Card,
  CheckList,
  PhaseList,
  PillList,
  Prose,
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
    title: "Staff y apoyo operativo",
    text: "Personal auxiliar para los distintos puntos y funciones del evento, y para las necesidades concretas que surgen sobre la marcha.",
  },
  {
    title: "Accesos",
    text: "Organización de accesos dentro de las funciones legalmente correspondientes.",
  },
  {
    title: "Atención al público",
    text: "Apoyo e información a asistentes durante toda la jornada.",
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
        <SectionHeading
          eyebrow="Acreditaciones"
          title="Cómo funciona una acreditación, de principio a fin"
          intro="Es el servicio que más nos piden las empresas y las agencias, y el que más se nota cuando sale mal: la acreditación es lo primero que vive el asistente al llegar."
        />
        <PhaseList
          phases={[
            {
              title: "El listado llega antes, no el mismo día",
              text: "Trabajamos con el listado que nos facilita el organizador. Cuanto antes llegue, mejor: permite prever cuánta gente hay que acreditar, si hay perfiles distintos —ponentes, prensa, patrocinadores, público general— y si cada uno lleva una acreditación diferente. Un listado que llega la misma mañana obliga a improvisar el mostrador.",
            },
            {
              title: "Preparación del mostrador",
              text: "Antes de abrir se ordena el material: acreditaciones impresas, portanombres, cordones, documentación y cualquier obsequio que entregue el organizador. Si el listado es amplio, se reparte alfabéticamente entre posiciones para que nadie tenga que buscar entre todo el montón con una persona esperando delante.",
            },
            {
              title: "Recepción y comprobación",
              text: "El asistente llega, se identifica, se localiza en el listado y se le entrega su acreditación junto con la información que corresponda: dónde es la sala, a qué hora empieza, dónde está el guardarropa o el catering. La parte de informar pesa tanto como la de acreditar.",
            },
            {
              title: "Los que no están en la lista",
              text: "Siempre hay alguien que no aparece: se inscribió tarde, viene en representación de otra persona o hay un error en el nombre. Lo que evita el atasco es haber acordado de antemano quién decide en esos casos y cómo se le avisa, para resolverlo sin frenar la cola.",
            },
            {
              title: "Durante la jornada y cierre",
              text: "El mostrador se mantiene atendido para los que llegan tarde y como punto de información. Al terminar, se devuelve al organizador el material sobrante y, si lo pide, la relación de asistentes que efectivamente recogieron su acreditación.",
            },
          ]}
        />
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading
              title="Cómo se dimensiona el mostrador"
              intro="La pregunta no es cuánta gente viene, sino en cuánto tiempo."
            />
            <Prose className="mt-6">
              <p>
                Doscientos asistentes que llegan repartidos a lo largo de la
                mañana se atienden con un mostrador pequeño. Los mismos
                doscientos asistentes citados todos a las nueve, con
                acreditación nominativa y entrega de documentación, necesitan
                bastante más: cada persona tarda su tiempo, y ese tiempo se
                multiplica por la cola.
              </p>
              <p>
                Por eso preguntamos siempre por la <strong>hora de citación</strong>{" "}
                y por el <strong>momento de inicio del acto</strong>, no solo
                por el número total de invitados. Con eso se calcula cuántas
                posiciones hacen falta para que nadie entre a la sala con el
                acto ya empezado.
              </p>
              <p>
                Y se plantea el refuerzo donde hace falta: es habitual reforzar
                solo la primera hora y reducir el mostrador después, en lugar
                de mantener el mismo número de personas toda la jornada.
              </p>
            </Prose>
          </div>
          <div className="lg:col-span-6">
            <Card>
              <h3 className="text-base font-bold text-brand-900">
                Qué necesitamos saber de tu evento
              </h3>
              <div className="mt-5">
                <CheckList
                  items={[
                    "Fecha, espacio y horario del acto.",
                    "Asistentes previstos y hora a la que están citados.",
                    "Si hay perfiles distintos y si cada uno lleva acreditación diferente.",
                    "Quién imprime y aporta el material de acreditación.",
                    "Qué funciones hay que cubrir además del mostrador.",
                    "Quién es el interlocutor de la organización el día del evento.",
                  ]}
                />
              </div>
            </Card>
          </div>
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
        <Prose className="mt-8">
          <p>
            En todos los casos coordinamos con quien organiza: la propia
            empresa, la agencia de eventos o el espacio que acoge el acto. Si el
            recinto tiene su propio personal o sus normas de acceso, el equipo
            trabaja dentro de esas normas, no en paralelo.
          </p>
        </Prose>
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
