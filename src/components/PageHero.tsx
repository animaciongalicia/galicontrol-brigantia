import { CtaTrio } from "@/components/ContactButtons";
import { Photo } from "@/components/Photo";

/**
 * Cabecera común de TODAS las páginas interiores.
 *
 * Antes convivían dos arquitecturas: las páginas de servicio abrían con banda
 * azul, foto y botones, y FAQs, comparativa y presupuesto abrían en blanco.
 * Ahora todas usan este componente y solo varían dos interruptores:
 *  - `photoLabel`: si se omite, no se reserva hueco de foto y el texto ocupa
 *    todo el ancho (páginas informativas).
 *  - `showCta`: se desactiva donde los botones ya están en otro sitio de la
 *    misma pantalla, como en el formulario de presupuesto.
 */
export function PageHero({
  eyebrow,
  title,
  intro,
  cta,
  photoLabel,
  showCta = true,
}: {
  eyebrow?: string;
  title: string;
  intro: React.ReactNode;
  cta: string;
  photoLabel?: string;
  showCta?: boolean;
}) {
  const hasPhoto = Boolean(photoLabel);

  return (
    <section className="border-b border-brand-100 bg-gradient-to-b from-brand-50 to-white">
      <div
        className={`container-page py-10 lg:py-16 ${
          hasPhoto ? "grid gap-10 lg:grid-cols-12 lg:items-center" : ""
        }`}
      >
        <div className={hasPhoto ? "lg:col-span-7" : ""}>
          {eyebrow ? (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="max-w-3xl text-[1.85rem] font-bold leading-[1.15] text-brand-900 sm:text-4xl lg:text-[2.6rem]">
            {title}
          </h1>
          <div className="mt-5 max-w-2xl space-y-3 text-[1.05rem] leading-relaxed text-ink-700">
            {intro}
          </div>
          {showCta ? (
            <div className="mt-8">
              <CtaTrio cta={cta} align="start" />
            </div>
          ) : null}
        </div>

        {hasPhoto ? (
          <div className="lg:col-span-5">
            <Photo
              ratio="4/3"
              label={photoLabel}
              sizes="(min-width: 1024px) 40vw, 100vw"
            />
          </div>
        ) : null}
      </div>
    </section>
  );
}
