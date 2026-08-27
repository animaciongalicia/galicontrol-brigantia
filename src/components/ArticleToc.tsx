import { List } from "lucide-react";

/** Índice del artículo, fijo en la columna derecha en pantallas grandes. */
export function ArticleToc({
  headings,
}: {
  headings: { id: string; text: string }[];
}) {
  if (headings.length < 3) return null;

  return (
    <nav
      aria-labelledby="indice-articulo"
      className="rounded-2xl border border-brand-100 bg-brand-50 p-5"
    >
      <h2
        id="indice-articulo"
        className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-brand-600"
      >
        <List aria-hidden="true" className="h-4 w-4" />
        En este artículo
      </h2>
      <ol className="mt-4 space-y-2.5">
        {headings.map((heading) => (
          <li key={heading.id}>
            <a
              href={`#${heading.id}`}
              className="block text-[0.93rem] leading-snug text-ink-700 transition-colors hover:text-brand-700"
            >
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
