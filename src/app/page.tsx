import type { Metadata } from "next";

import {
  BudgetButton,
  PhoneButton,
  WhatsappButton,
} from "@/components/ContactButtons";
import { CtaSection } from "@/components/CtaSection";
import { FaqList } from "@/components/Faq";
import { Photo } from "@/components/Photo";
import {
  CheckList,
  Card,
  LegalNote,
  LinkCard,
  LinkPills,
  PainList,
  PillList,
  Section,
  SectionHeading,
  Prose,
  Steps,
  TextLink,
} from "@/components/ui";
import { homeFaqs } from "@/content/faqs";
import { site } from "@/config/site";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title:
    "Control de Accesos y Personal para Eventos en A Coruña | GaliControl",
  description:
    "Personal de control de accesos y apoyo para eventos, locales y empresas en A Coruña y Galicia. Servicios puntuales y recurrentes.",
  path: "/",
});

const serviceTypes = [
  { label: "Pubs", href: "/control-accesos-locales/" },
  { label: "Discotecas", href: "/control-accesos-locales/" },
  { label: "Salas", href: "/control-accesos-locales/" },
  { label: "Conciertos", href: "/personal-eventos/" },
  { label: "Festivales", href: "/personal-eventos/" },
  { label: "Fiestas", href: "/personal-eventos/" },
  { label: "Bodas", href: "/personal-eventos/" },
  { label: "Eventos privados", href: "/personal-eventos/" },
  { label: "Eventos deportivos", href: "/personal-eventos/" },
  { label: "Congresos", href: "/personal-auxiliar-empresas/" },
  { label: "Eventos corporativos", href: "/personal-auxiliar-empresas/" },
  { label: "Actos institucionales", href: "/personal-auxiliar-empresas/" },
];

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="border-b border-brand-100 bg-gradient-to-b from-brand-50 to-white">
        <div className="container-page grid gap-10 py-12 lg:grid-cols-12 lg:items-center lg:py-20">
          <div className="lg:col-span-7">
            <p className="mb-4 inline-flex rounded-full bg-white px-3.5 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-brand-600 ring-1 ring-brand-200">
              A Coruña · Galicia
            </p>
            <h1 className="text-[2rem] font-bold leading-[1.12] text-brand-900 sm:text-4xl lg:text-[2.9rem]">
              Control de accesos y personal para eventos en A Coruña y Galicia
            </h1>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-700 lg:text-lg">
              Organizamos el personal que necesitas para controlar accesos,
              gestionar entradas y público y apoyar la operativa de locales,
              fiestas, conciertos y eventos.
            </p>
            <p className="mt-3 max-w-2xl text-[1.05rem] leading-relaxed text-ink-700 lg:text-lg">
              Servicios puntuales o recurrentes con personal coordinado y
              adaptado a cada necesidad.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <PhoneButton cta="hero_home" size="lg" />
              <WhatsappButton cta="hero_home" size="lg" />
            </div>
            <div className="mt-3">
              <BudgetButton
                cta="hero_home_secundario"
                size="lg"
                className="w-full sm:w-auto"
              />
            </div>

            <div className="mt-8">
              <PillList
                items={[
                  "A Coruña",
                  "Galicia",
                  "Locales",
                  "Eventos",
                  "Conciertos",
                  "Empresas",
                ]}
              />
            </div>
          </div>

          <div className="lg:col-span-5">
            <Photo
              ratio="4/3"
              label="Foto de equipo GaliControl en un acceso"
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        </div>
      </section>

      {/* ¿QUÉ NECESITAS? */}
      <Section>
        <SectionHeading
          eyebrow="¿Qué necesitas?"
          title="Elige el punto de partida"
          intro="Cuatro formas de trabajar con nosotros según el tipo de servicio que tengas entre manos."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          <LinkCard href="/control-de-accesos/" title="Control de accesos">
            Personal para gestionar y organizar accesos dentro de las funciones
            legalmente correspondientes.
          </LinkCard>
          <LinkCard href="/personal-eventos/" title="Eventos">
            Personal para fiestas, conciertos, festivales, celebraciones,
            eventos deportivos y otros eventos.
          </LinkCard>
          <LinkCard href="/control-accesos-locales/" title="Locales">
            Cobertura puntual o recurrente para pubs, salas, discotecas y
            espacios de ocio.
          </LinkCard>
          <LinkCard
            href="/personal-auxiliar-empresas/"
            title="Empresas"
          >
            Staff, acreditaciones, recepción y personal auxiliar para congresos,
            actos y eventos corporativos.
          </LinkCard>
        </div>
      </Section>

      {/* DOLOR */}
      <Section tone="soft">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-5">
            <SectionHeading
              title="Tu problema no es encontrar personas. Es conseguir que el servicio funcione."
              intro={
                <>
                  <p>
                    Buscar personal, confirmar disponibilidad, organizar
                    horarios, cubrir bajas y coordinar varias personas consume
                    tiempo y genera problemas.
                  </p>
                  <p className="mt-3">
                    GaliControl organiza el servicio para que tú puedas
                    centrarte en tu local, empresa o evento.
                  </p>
                </>
              }
            />
          </div>
          <div className="lg:col-span-7">
            <PainList
              items={[
                "«Necesito personal para una fecha concreta.»",
                "«No quiero estar pendiente de quién viene.»",
                "«Necesito cubrir una baja o una urgencia.»",
                "«Mi evento necesita varias personas coordinadas.»",
                "«Tengo un local y necesito continuidad.»",
                "«Quiero hablar con una sola persona, no con cinco.»",
              ]}
            />
          </div>
        </div>
      </Section>

      {/* EVENTOS VS RECURRENTE */}
      <Section>
        <SectionHeading
          eyebrow="Dos formas de contratar"
          title="Un evento concreto o un servicio que se repite"
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <Card className="flex flex-col border-brand-200 bg-brand-50">
            <h3 className="text-xl font-bold text-brand-900">
              Eventos puntuales
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-700">
              Fiestas, conciertos, festivales, celebraciones, eventos
              deportivos, privados o corporativos.
            </p>
            <div className="mt-6">
              <BudgetButton
                cta="home_eventos_puntuales"
                size="lg"
                variant="solid"
                label="Necesito personal para un evento"
                className="w-full sm:w-auto"
              />
            </div>
          </Card>

          <Card className="flex flex-col border-brand-200 bg-brand-50">
            <h3 className="text-xl font-bold text-brand-900">
              Servicios recurrentes
            </h3>
            <p className="mt-3 flex-1 leading-relaxed text-ink-700">
              Locales y espacios que necesitan personal determinados días o
              varias veces al mes.
            </p>
            <div className="mt-6">
              <BudgetButton
                cta="home_servicios_recurrentes"
                size="lg"
                variant="solid"
                label="Necesito personal para mi local"
                className="w-full sm:w-auto"
              />
            </div>
          </Card>
        </div>
      </Section>

      {/* CÓMO TRABAJAMOS */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Cómo trabajamos"
          title="Cinco pasos, sin complicaciones"
        />
        <div className="mt-10">
          <Steps
            steps={[
              {
                title: "Cuéntanos qué necesitas",
                text: "Por teléfono, WhatsApp o formulario. Con los datos que tengas.",
              },
              {
                title: "Dimensionamos el servicio",
                text: "Fecha, horario, recinto y necesidades para plantear una cobertura razonable.",
              },
              {
                title: "Recibes presupuesto",
                text: "Con las horas incluidas y las condiciones claras antes de contratar.",
              },
              {
                title: "Organizamos el equipo",
                text: "Asignamos y coordinamos a las personas y les damos las instrucciones del servicio.",
              },
              {
                title: "Realizamos el servicio",
                text: "El equipo trabaja en tu local o evento con un único interlocutor para ti.",
              },
            ]}
          />
        </div>
      </Section>

      {/* TIPOS DE SERVICIO */}
      <Section>
        <SectionHeading
          eyebrow="Tipos de servicio"
          title="Dónde trabajamos habitualmente"
          intro="Pulsa cualquiera para ver la página del servicio correspondiente."
        />
        <div className="mt-8">
          <LinkPills items={serviceTypes} />
        </div>
      </Section>

      {/* CUÁNDO NOS LLAMAN */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Situaciones habituales"
          title="Cuándo nos suele llamar la gente"
          intro="No hace falta que encaje exactamente con ninguna de estas. Sirven para hacerte una idea del tipo de encargo que resolvemos."
        />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Tengo fecha y no tengo personal",
              text: "Un concierto, una fiesta o una celebración con día cerrado y sin nadie confirmado para la puerta. Cuéntanos fecha, sitio y horario y te decimos qué podemos cubrir.",
            },
            {
              title: "Me han fallado a última hora",
              text: "Alguien no puede acudir esta noche o este fin de semana. Es un encargo habitual: dinos qué franja hay que cubrir y lo miramos al momento.",
            },
            {
              title: "Estoy cansado de organizarlo cada semana",
              text: "Un local que necesita personal varios días al mes y quiere dejar de buscar gente cada viernes. Se plantea como servicio recurrente con planificación por noches.",
            },
            {
              title: "Necesito varias personas coordinadas",
              text: "Un evento con más de un punto de acceso, donde no basta con poner gente: hace falta que el equipo se comunique y se reparta según cómo llegue el público.",
            },
            {
              title: "Tengo un congreso y no sé cómo montar la acreditación",
              text: "Listado de asistentes, entrega de acreditaciones y recepción. Te planteamos cuántas posiciones hacen falta según la hora a la que esté citada la gente.",
            },
            {
              title: "No sé si necesito controladores o vigilantes",
              text: "Es la duda más frecuente y conviene resolverla antes de contratar nada. Te decimos con claridad qué podemos cubrir nosotros y qué no.",
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

      {/* POR QUÉ UNA EMPRESA */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-6">
            <SectionHeading
              eyebrow="La diferencia"
              title="Contratar a una empresa no es lo mismo que contratar horas sueltas"
            />
            <Prose className="mt-6">
              <p>
                Se puede llamar a un conocido que haga puertas y que venga el
                sábado. Funciona hasta que ese sábado no puede venir, hasta que
                hay que explicarle el local otra vez a otra persona o hasta que
                surge una incidencia y no hay a quién llamar.
              </p>
              <p>
                Trabajar con una empresa significa que hay alguien que organiza
                el servicio, que da las instrucciones al equipo, que resuelve
                las sustituciones y que responde de la relación laboral y de la
                facturación. Tú hablas con una sola persona, y esa persona se
                ocupa del resto.
              </p>
            </Prose>
          </div>
          <div className="lg:col-span-6">
            <Card className="bg-brand-50">
              <h3 className="text-base font-bold text-brand-900">
                Lo que sí va incluido
              </h3>
              <div className="mt-5">
                <CheckList
                  columns={1}
                  items={[
                    "Un único interlocutor para todo el servicio.",
                    "Instrucciones al equipo antes de empezar, no sobre la marcha.",
                    "Organización de las sustituciones cuando la disponibilidad lo permite.",
                    "Personal contratado en regla, con su relación laboral en orden.",
                    "Presupuesto por escrito con las horas incluidas y las condiciones de ampliación.",
                    "Factura de empresa.",
                  ]}
                />
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* LEGAL */}
      <Section tone="soft">
        <LegalNote
          title="Control de accesos no es seguridad privada"
          action={
            <TextLink href="/control-accesos-vs-vigilante-seguridad/">
              Ver diferencias entre controlador y vigilante de seguridad
            </TextLink>
          }
        >
          <p>
            Los servicios de control de accesos y personal auxiliar no deben
            confundirse con los servicios legalmente reservados a la seguridad
            privada. GaliControl presta control de accesos y apoyo dentro de las
            funciones que legalmente le corresponden.
          </p>
          <p className="mt-3">
            <strong>
              Si tu servicio necesita además vigilantes de seguridad, también lo
              resolvemos.
            </strong>{" "}
            Colaboramos con empresas de seguridad privada habilitadas: te
            preparamos una propuesta conjunta, con un único interlocutor y los
            dos equipos coordinados, cada uno dentro de su marco legal.
          </p>
        </LegalNote>
      </Section>

      {/* ZONA */}
      <Section>
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
          <div className="lg:col-span-7">
            <SectionHeading
              eyebrow="Zona de trabajo"
              title="A Coruña y Galicia"
              intro="GaliControl tiene su base en A Coruña y presta servicios principalmente en la provincia de A Coruña y otros puntos de Galicia según las características y necesidades de cada servicio."
            />
            <div className="mt-6">
              <CheckList
                columns={2}
                items={[
                  "Base en A Coruña ciudad",
                  "Provincia de A Coruña",
                  "Otros puntos de Galicia a consultar",
                  "Servicios puntuales y recurrentes",
                ]}
              />
            </div>
          </div>
          <div className="lg:col-span-5">
            <Card className="bg-brand-50">
              <h3 className="text-base font-bold text-brand-900">
                {site.legalName}
              </h3>
              <address className="mt-2 not-italic leading-relaxed text-ink-700">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </address>
              <p className="mt-4 text-sm leading-relaxed text-ink-500">
                {site.serviceArea.description}
              </p>
            </Card>
          </div>
        </div>
      </Section>

      {/* FAQ */}
      <Section tone="soft">
        <SectionHeading
          eyebrow="Preguntas frecuentes"
          title="Lo que más nos preguntan"
        />
        <FaqList items={homeFaqs} />
        <div className="mt-8">
          <TextLink href="/preguntas-frecuentes/">
            Ver todas las preguntas frecuentes
          </TextLink>
        </div>
      </Section>

      <CtaSection cta="cierre_home" />
    </>
  );
}
