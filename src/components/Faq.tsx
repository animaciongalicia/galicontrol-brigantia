export type FaqItem = { question: string; answer: string };

/**
 * Preguntas y respuestas como texto HTML real (sin acordeones ni JavaScript),
 * para que buscadores y asistentes de IA puedan extraerlas directamente.
 */
export function FaqList({ items }: { items: FaqItem[] }) {
  return (
    <div className="mt-8 grid gap-5 lg:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.question}
          className="rounded-2xl border border-brand-100 bg-white p-6"
        >
          <h3 className="text-base font-bold text-brand-900 lg:text-lg">
            {item.question}
          </h3>
          <p className="mt-2.5 text-[0.97rem] leading-relaxed text-ink-700">
            {item.answer}
          </p>
        </article>
      ))}
    </div>
  );
}
