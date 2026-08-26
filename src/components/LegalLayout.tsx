import { Breadcrumbs } from "@/components/Breadcrumbs";

/** Contenedor de las páginas legales: texto sobrio y legible. */
export function LegalLayout({
  title,
  updated,
  children,
}: {
  title: string;
  updated: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <Breadcrumbs
        items={[
          { name: "Inicio", path: "/" },
          { name: title, path: "#" },
        ]}
      />
      <article className="container-page py-10 lg:py-14">
        <h1 className="max-w-3xl text-[1.75rem] font-bold leading-tight text-brand-900 sm:text-3xl">
          {title}
        </h1>
        <p className="mt-3 text-sm text-ink-500">Última actualización: {updated}</p>
        <div className="mt-8 max-w-3xl space-y-6 text-[1rem] leading-relaxed text-ink-700 [&_h2]:mt-10 [&_h2]:text-xl [&_h2]:font-bold [&_h2]:text-brand-900 [&_h3]:mt-6 [&_h3]:text-base [&_h3]:font-bold [&_h3]:text-brand-900 [&_li]:leading-relaxed [&_ul]:list-disc [&_ul]:space-y-2 [&_ul]:pl-5 [&_a]:font-semibold [&_a]:text-brand-600 [&_a]:underline [&_a]:underline-offset-2">
          {children}
        </div>
      </article>
    </>
  );
}
