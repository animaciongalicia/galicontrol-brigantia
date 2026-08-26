import { CtaTrio } from "@/components/ContactButtons";
import { Photo } from "@/components/Photo";

/** Cabecera común de las páginas interiores. */
export function PageHero({
  eyebrow,
  title,
  intro,
  cta,
  photoLabel,
}: {
  eyebrow?: string;
  title: string;
  intro: React.ReactNode;
  cta: string;
  photoLabel?: string;
}) {
  return (
    <section className="border-b border-brand-100 bg-gradient-to-b from-brand-50 to-white">
      <div className="container-page grid gap-10 py-10 lg:grid-cols-12 lg:items-center lg:py-16">
        <div className="lg:col-span-7">
          {eyebrow ? (
            <p className="mb-3 text-xs font-bold uppercase tracking-[0.16em] text-brand-600">
              {eyebrow}
            </p>
          ) : null}
          <h1 className="text-[1.85rem] font-bold leading-[1.15] text-brand-900 sm:text-4xl lg:text-[2.6rem]">
            {title}
          </h1>
          <div className="mt-5 max-w-2xl space-y-3 text-[1.05rem] leading-relaxed text-ink-700">
            {intro}
          </div>
          <div className="mt-8">
            <CtaTrio cta={cta} align="start" />
          </div>
        </div>

        <div className="lg:col-span-5">
          <Photo
            ratio="4/3"
            label={photoLabel ?? "Fotografía del servicio"}
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </div>
    </section>
  );
}
