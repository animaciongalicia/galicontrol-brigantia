import Link from "next/link";
import { ArrowRight } from "lucide-react";

const ALL = [
  {
    href: "/control-de-accesos/",
    title: "Control de accesos",
    text: "Personal para organizar la entrada de público en locales, recintos y eventos.",
  },
  {
    href: "/personal-eventos/",
    title: "Personal para eventos",
    text: "Conciertos, festivales, fiestas, bodas y eventos deportivos en A Coruña y Galicia.",
  },
  {
    href: "/control-accesos-locales/",
    title: "Control de accesos para locales",
    text: "Pubs, salas y discotecas, con cobertura puntual o servicio recurrente.",
  },
  {
    href: "/personal-auxiliar-empresas/",
    title: "Staff para empresas",
    text: "Acreditaciones, recepción y personal auxiliar para congresos y actos corporativos.",
  },
  {
    href: "/control-accesos-vs-vigilante-seguridad/",
    title: "Controlador o vigilante de seguridad",
    text: "Las diferencias entre ambas figuras y cuál necesita tu local o tu evento.",
  },
  {
    href: "/preguntas-frecuentes/",
    title: "Preguntas frecuentes",
    text: "Precios, mínimos, sustituciones, plazos de reserva y normativa aplicable.",
  },
];

/**
 * Enlaces internos al pie de cada página de servicio. Reparte autoridad entre
 * las páginas comerciales y da salida a quien ha llegado a la página que no
 * era. Se excluye la página actual pasando su ruta en `exclude`.
 */
export function RelatedServices({
  exclude,
  title = "Otros servicios que te pueden interesar",
  limit = 3,
}: {
  exclude: string;
  title?: string;
  limit?: number;
}) {
  const items = ALL.filter((item) => item.href !== exclude).slice(0, limit);

  return (
    <section className="border-t border-brand-100 bg-white py-14 lg:py-16">
      <div className="container-page">
        <h2 className="text-xl font-bold text-brand-900 lg:text-2xl">{title}</h2>
        {/* Con 3 tarjetas saltamos de 1 a 3 columnas: en tablet, 3 en una
            rejilla de 2 dejaría la última fila coja. */}
        <ul
          className={`mt-7 grid gap-5 ${
            items.length === 4
              ? "sm:grid-cols-2 lg:grid-cols-4"
              : "lg:grid-cols-3"
          }`}
        >
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-5 transition-colors hover:border-brand-300 hover:bg-brand-50"
              >
                <h3 className="text-base font-bold text-brand-900">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-ink-700">
                  {item.text}
                </p>
                <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-800">
                  Ver página
                  <ArrowRight aria-hidden="true" className="h-4 w-4" />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
