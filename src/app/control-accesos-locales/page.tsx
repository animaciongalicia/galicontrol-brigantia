import type { Metadata } from "next";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BudgetButton } from "@/components/ContactButtons";
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
  TwoColumn,
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
        photoSrc="/fotos/locales.jpg"
        photoAlt="Controlador de accesos en la puerta de un local de ocio"
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

      <Section>
        <TwoColumn
          heading={
            <SectionHeading
              eyebrow="El arranque"
              title="Cómo empiezan las primeras semanas en un local nuevo"
              intro="Un servicio recurrente no funciona bien desde el primer día por casualidad. Las primeras semanas son de rodaje."
            />
          }
        >
          <PhaseList
          phases={[
            {
              title: "Reconocer el local antes de empezar",
              text: "Antes de la primera noche vemos el local: dónde está la puerta, cómo se forma la fila en la calle, dónde termina la acera, qué aforo tiene autorizado, dónde están las salidas y qué zonas quedan fuera del paso del público. También quién es el responsable de sala cada noche y cómo se le avisa.",
            },
            {
              title: "Fijar los criterios del local",
              text: "Cada local tiene sus condiciones de admisión y su forma de trabajar. Qué hacer con grupos grandes, cómo se gestionan las reservas o la lista de invitados si las hay, a partir de qué hora deja de entrar gente, cómo se controla la reentrada. Eso lo decide el titular del local y nosotros lo aplicamos con el mismo criterio todas las noches.",
            },
            {
              title: "Las primeras noches",
              text: "En las primeras semanas es normal ajustar cosas: adelantar o retrasar la hora de entrada del personal, añadir a alguien los sábados, cambiar dónde se coloca la fila. Lo importante es que esos ajustes se hagan hablando y queden fijados, no que cada noche se improvise otra vez.",
            },
            {
              title: "El equipo se estabiliza",
              text: "A partir de ahí el objetivo es que sean siempre las mismas personas las que cubren el local. Un equipo habitual conoce el público, reconoce a los clientes de siempre, sabe qué noches se complican y aplica los criterios sin tener que preguntar. Esa es la diferencia real entre contratar horas y tener un servicio.",
            },
            ]}
          />
        </TwoColumn>
      </Section>

      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading
              title="Un jueves no es un sábado"
              intro="La planificación mensual no consiste en poner el mismo número de personas todas las noches."
            />
            <Prose className="mt-6">
              <p>
                El volumen de público, la hora punta y el tipo de noche cambian
                mucho de un día a otro de la misma semana. Un jueves puede
                cubrirse con una persona y un sábado con dos, y una noche con
                actuación en directo o con fiesta temática puede necesitar
                refuerzo solo en el tramo de entrada.
              </p>
              <p>
                Por eso la planificación se hace por noches concretas y no como
                un paquete cerrado de horas. Sabes de antemano quién va cada
                día y en qué horario, y los refuerzos puntuales se piden con
                normalidad sin renegociar el servicio entero.
              </p>
            </Prose>
          </div>
          <div className="lg:col-span-6">
            <Card>
              <h3 className="text-base font-bold text-brand-900">
                Qué queda definido en la planificación
              </h3>
              <div className="mt-5">
                <CheckList
                  items={[
                    "Qué días de la semana se cubre el local y con cuántas personas.",
                    "Hora de entrada y hora de salida del personal cada día.",
                    "Las condiciones de admisión y de aforo que aplica el local.",
                    "Quién es el responsable de sala y cómo se le avisa ante una incidencia.",
                    "Cómo se piden los refuerzos para fechas especiales y con cuánta antelación.",
                    "Cómo se comunican y se facturan las horas adicionales si una noche se alarga.",
                  ]}
                />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      <Section>
        <TwoColumn
          heading={
            <SectionHeading
              title="Cuando cambia alguien del equipo"
              intro="Es la parte que más se nota cuando se trabaja con personas sueltas y no con una empresa."
            />
          }
        >
          <p>
            En un servicio recurrente antes o después hay una baja, una
            incidencia o alguien que deja el puesto. Si el local ha contratado
            directamente a esa persona, el problema es del local: hay que
            buscar sustituto, explicarle el sitio desde cero y confiar en que
            aparezca.
          </p>
          <p>
            Trabajando con nosotros, la sustitución la organizamos nosotros
            siempre que la disponibilidad operativa lo permita, y quien entra
            recibe las instrucciones del local antes de su primera noche: los
            criterios de admisión, el aforo, la forma de trabajar y con quién
            hablar. El responsable del local se entera del cambio, pero no
            tiene que gestionarlo.
          </p>
          <p>
            No prometemos que nunca vaya a faltar nadie, porque eso no lo puede
            garantizar nadie de forma absoluta. Lo que cambia es de quién es el
            problema y quién dedica el tiempo a resolverlo.
          </p>
        </TwoColumn>
      </Section>

      <Section tone="soft">
        <SectionHeading
          eyebrow="Dos modalidades"
          title="Puntual o recurrente"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="flex flex-col border-brand-200 bg-brand-50">
            <h3 className="text-xl font-bold text-brand-900">
              Cobertura puntual
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-700">
              Una baja, una fiesta, un refuerzo o una necesidad extraordinaria
              en una fecha concreta.
            </p>
            <div className="mt-6">
              <BudgetButton
                cta="locales_cobertura_puntual"
                size="lg"
                variant="solid"
                label="Necesito una cobertura puntual"
                className="w-full sm:w-auto"
              />
            </div>
          </Card>
          <Card className="flex flex-col border-brand-200 bg-brand-50">
            <h3 className="text-xl font-bold text-brand-900">
              Servicio recurrente
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-700">
              Personal varios días o noches al mes bajo una planificación
              continuada, con el mismo equipo siempre que sea posible.
            </p>
            <div className="mt-6">
              <BudgetButton
                cta="locales_servicio_recurrente"
                size="lg"
                variant="solid"
                label="Quiero un servicio recurrente"
                className="w-full sm:w-auto"
              />
            </div>
          </Card>
        </div>
      </Section>

      <Section>
        <TwoColumn
          heading={
            <SectionHeading title="Menos gestión para el responsable del local" />
          }
        >
          <p>
            No se trata simplemente de contratar una persona durante unas
            horas. Se trata de que tengas un servicio organizado, un
            interlocutor y capacidad de respuesta cuando surge una necesidad.
          </p>
          <p>
            El responsable de un local ya tiene bastante con la barra, la
            programación, los proveedores y el personal de sala. La puerta es
            una cosa más, y es de las pocas que se puede delegar entera: quién
            va cada noche, qué criterio aplica, qué pasa si alguien falla y a
            quién llamar cuando surge algo. Eso es lo que dejas de gestionar.
          </p>
        </TwoColumn>
      </Section>

      <RelatedServices exclude={PATH} />

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
