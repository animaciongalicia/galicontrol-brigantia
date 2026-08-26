import type { Metadata } from "next";
import { headers } from "next/headers";
import { Clock, PhoneCall, ShieldCheck } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { BudgetForm } from "@/components/BudgetForm";
import { PhoneButton, WhatsappButton } from "@/components/ContactButtons";
import { JsonLd } from "@/components/JsonLd";
import { Card } from "@/components/ui";
import { site } from "@/config/site";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { normalizePath } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";

const PATH = "/presupuesto/";

export const metadata: Metadata = pageMetadata({
  title: "Pedir Presupuesto de Personal para Eventos | GaliControl",
  description:
    "Pide presupuesto de personal de control de accesos o staff para tu local, evento o empresa en A Coruña y Galicia. Tres datos y te respondemos.",
  path: PATH,
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Pedir presupuesto", path: PATH },
];

const KNOWN_PATHS = new Set([
  "/",
  "/control-de-accesos/",
  "/personal-eventos/",
  "/control-accesos-locales/",
  "/personal-auxiliar-empresas/",
  "/preguntas-frecuentes/",
  "/control-accesos-vs-vigilante-seguridad/",
  "/presupuesto/",
]);

/** Origen del contacto: query string primero, cabecera Referer como respaldo. */
async function resolveOrigin(queryOrigin?: string): Promise<string> {
  if (queryOrigin) {
    const candidate = normalizePath(queryOrigin);
    if (KNOWN_PATHS.has(candidate)) return candidate;
  }

  const referer = (await headers()).get("referer");
  if (referer) {
    try {
      const url = new URL(referer);
      const candidate = normalizePath(url.pathname);
      if (KNOWN_PATHS.has(candidate)) return candidate;
    } catch {
      // Referer no válido: seguimos con el valor por defecto.
    }
  }

  return PATH;
}

export default async function PresupuestoPage({
  searchParams,
}: {
  searchParams: Promise<{ origen?: string; cta?: string }>;
}) {
  const params = await searchParams;
  const origen = await resolveOrigin(params.origen);
  const cta = params.cta?.slice(0, 80) ?? "directo";

  return (
    <>
      <Breadcrumbs items={crumbs} />

      <section className="container-page py-10 lg:py-14">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <h1 className="text-[1.85rem] font-bold leading-[1.15] text-brand-900 sm:text-4xl">
              Cuéntanos qué necesitas
            </h1>
            <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-700">
              Con el nombre, un teléfono y la fecha ya podemos empezar. Si
              quieres, añade dos líneas explicando el servicio y lo tenemos
              todo.
            </p>

            <div className="mt-8">
              <BudgetForm origen={origen} cta={cta} />
            </div>
          </div>

          <aside className="lg:col-span-5">
            <Card className="bg-brand-50">
              <h2 className="text-lg font-bold text-brand-900">
                ¿Prefieres hablar directamente?
              </h2>
              <p className="mt-2.5 text-[0.95rem] leading-relaxed text-ink-700">
                No hace falta rellenar el formulario. Llámanos o escríbenos por
                WhatsApp y lo vemos al momento.
              </p>
              <div className="mt-5 flex flex-col gap-3">
                <PhoneButton cta="presupuesto_lateral" size="lg" />
                <WhatsappButton cta="presupuesto_lateral" size="lg" />
              </div>
            </Card>

            <Card className="mt-5">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-600">
                Qué pasa después
              </h2>
              <ul className="mt-5 space-y-4 text-[0.95rem] leading-relaxed text-ink-700">
                <li className="flex items-start gap-3">
                  <PhoneCall
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                  />
                  <span>
                    Te contactamos para concretar los detalles que falten.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Clock
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                  />
                  <span>
                    Te enviamos el presupuesto con las horas incluidas y las
                    condiciones por escrito.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <ShieldCheck
                    aria-hidden="true"
                    className="mt-0.5 h-5 w-5 shrink-0 text-brand-600"
                  />
                  <span>
                    Si tu caso requiere seguridad privada, te lo decimos con
                    claridad.
                  </span>
                </li>
              </ul>
            </Card>

            <Card className="mt-5">
              <h2 className="text-sm font-bold uppercase tracking-[0.14em] text-brand-600">
                {site.legalName}
              </h2>
              <address className="mt-3 not-italic text-[0.95rem] leading-relaxed text-ink-700">
                {site.address.street}
                <br />
                {site.address.postalCode} {site.address.city}
              </address>
            </Card>
          </aside>
        </div>
      </section>

      <JsonLd data={breadcrumbJsonLd(crumbs)} />
    </>
  );
}
