import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { site } from "@/config/site";

/**
 * Bloque de precios orientativos para los artículos del blog.
 *
 * Las cifras salen de `site.pricing`, no del texto de cada artículo: si
 * cambian, se cambian en un único sitio. Siempre acompañadas del aviso de que
 * son orientativas.
 */
export function PriceBox() {
  const { hourMin, hourMax, exampleLabel, exampleHours, exampleTotal } =
    site.pricing;

  return (
    <div className="mt-8 overflow-hidden rounded-2xl border border-brand-200">
      <div className="bg-brand-900 px-5 py-4 lg:px-6">
        <h3 className="text-base font-bold text-white lg:text-lg">
          Precios orientativos
        </h3>
      </div>

      <div className="divide-y divide-brand-100 bg-white">
        <div className="px-5 py-5 lg:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-600">
            Tarifa por persona y hora
          </p>
          <p className="mt-2 text-2xl font-bold text-brand-900 lg:text-3xl">
            entre {hourMin} € y {hourMax} €
          </p>
          <p className="mt-2 text-[0.97rem] leading-relaxed text-ink-700">
            Según el día, el horario, los desplazamientos y las características
            del servicio.
          </p>
        </div>

        <div className="px-5 py-5 lg:px-6">
          <p className="text-sm font-semibold uppercase tracking-[0.12em] text-brand-600">
            Ejemplo de referencia
          </p>
          <p className="mt-2 text-[1.02rem] leading-relaxed text-ink-700">
            {exampleLabel}, {exampleHours}:{" "}
            <strong className="text-xl font-bold text-brand-900">
              en torno a {exampleTotal} €
            </strong>
          </p>
        </div>

        <div className="bg-brand-50 px-5 py-4 lg:px-6">
          <p className="text-[0.92rem] leading-relaxed text-ink-500">
            Cifras orientativas, sin IVA, para hacerte una idea antes de
            llamar. El precio definitivo depende de cada servicio y se confirma
            siempre por escrito en el presupuesto, con las horas incluidas y las
            condiciones de ampliación.
          </p>
          <Link
            href="/presupuesto/"
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 hover:text-brand-800"
          >
            Pedir presupuesto para mi caso
            <ArrowRight aria-hidden="true" className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}

/** Lista de factores que hacen subir o bajar el precio. */
export function PriceFactors() {
  return (
    <ul className="mt-5 space-y-2.5 pl-5 text-[1.05rem] leading-[1.75] text-ink-700 marker:text-brand-400 [&>li]:list-disc [&>li]:pl-1.5">
      {site.pricing.factors.map((factor) => (
        <li key={factor}>{factor}</li>
      ))}
    </ul>
  );
}
