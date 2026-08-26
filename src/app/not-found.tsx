import type { Metadata } from "next";

import { CtaTrio } from "@/components/ContactButtons";
import { LinkPills } from "@/components/ui";

export const metadata: Metadata = {
  title: "Página no encontrada",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <section className="container-page py-16 lg:py-24">
      <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-500">
        Error 404
      </p>
      <h1 className="mt-3 max-w-2xl text-[1.85rem] font-bold leading-tight text-brand-900 sm:text-4xl">
        No hemos encontrado esta página
      </h1>
      <p className="mt-5 max-w-2xl text-[1.05rem] leading-relaxed text-ink-700">
        Puede que el enlace haya cambiado o que la dirección esté mal escrita.
        Desde aquí puedes ir a cualquiera de nuestros servicios o escribirnos
        directamente.
      </p>

      <div className="mt-8">
        <LinkPills
          items={[
            { label: "Inicio", href: "/" },
            { label: "Control de accesos", href: "/control-de-accesos/" },
            { label: "Eventos", href: "/personal-eventos/" },
            { label: "Locales", href: "/control-accesos-locales/" },
            { label: "Empresas", href: "/personal-auxiliar-empresas/" },
            { label: "Preguntas frecuentes", href: "/preguntas-frecuentes/" },
            { label: "Pedir presupuesto", href: "/presupuesto/" },
          ]}
        />
      </div>

      <div className="mt-10">
        <CtaTrio cta="404" align="start" />
      </div>
    </section>
  );
}
