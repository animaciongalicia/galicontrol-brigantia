import { CtaTrio } from "@/components/ContactButtons";

/** Bloque de conversión con el que termina toda página comercial. */
export function CtaSection({
  title = "¿Necesitas personal para tu próximo servicio?",
  text = "Cuéntanos fecha y necesidad y hablamos contigo.",
  cta,
}: {
  title?: string;
  text?: string;
  cta: string;
}) {
  return (
    <section className="bg-brand-900 py-14 text-white lg:py-16">
      <div className="container-page text-center">
        <h2 className="mx-auto max-w-2xl text-2xl font-bold leading-tight sm:text-3xl">
          {title}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-[1.05rem] leading-relaxed text-brand-100">
          {text}
        </p>
        <div className="mt-8">
          <CtaTrio cta={cta} />
        </div>
        <p className="mt-6 text-sm text-brand-300">
          Si prefieres hablar directamente, no hace falta rellenar ningún
          formulario.
        </p>
      </div>
    </section>
  );
}
