import { CtaTrio } from "@/components/ContactButtons";

/** Llamada a la acción intercalada en mitad de un artículo. */
export function CtaBox({
  title = "¿Te lo miramos?",
  text = "Cuéntanos fecha, lugar y horario y te decimos qué necesitas y cuánto cuesta.",
  cta = "articulo",
}: {
  title?: string;
  text?: string;
  cta?: string;
}) {
  return (
    <div className="mt-10 rounded-2xl border border-brand-200 bg-brand-50 p-6 lg:p-7">
      <h3 className="text-lg font-bold text-brand-900">{title}</h3>
      <p className="mt-2.5 leading-relaxed text-ink-700">{text}</p>
      <div className="mt-5">
        <CtaTrio cta={cta} align="start" />
      </div>
    </div>
  );
}
