import Link from "next/link";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";

import { CtaBox } from "@/components/CtaBox";
import { PriceBox, PriceFactors } from "@/components/PriceBox";
import { slugifyHeading } from "@/lib/blog";

/**
 * Tipografía del artículo: pensada para leerse en el móvil de alguien que
 * está buscando presupuesto. Interlineado amplio, párrafos cortos, títulos
 * que dejan respirar y bloques destacados para lo que hay que retener.
 */
const components = {
  // Componentes disponibles dentro de los .mdx
  PriceBox,
  PriceFactors,
  CtaBox,
  // El id se calcula del propio titular para que el índice lateral enlace.
  h2: ({ children, ...props }: React.ComponentProps<"h2">) => (
    <h2
      id={typeof children === "string" ? slugifyHeading(children) : undefined}
      className="mt-14 scroll-mt-28 text-[1.45rem] font-bold leading-tight text-brand-900 sm:text-[1.7rem]"
      {...props}
    >
      {children}
    </h2>
  ),
  h3: (props: React.ComponentProps<"h3">) => (
    <h3
      className="mt-10 scroll-mt-28 text-[1.15rem] font-bold text-brand-900 sm:text-[1.3rem]"
      {...props}
    />
  ),
  p: (props: React.ComponentProps<"p">) => (
    <p className="mt-5 text-[1.05rem] leading-[1.75] text-ink-700" {...props} />
  ),
  ul: (props: React.ComponentProps<"ul">) => (
    <ul
      className="mt-5 space-y-2.5 pl-5 text-[1.05rem] leading-[1.75] text-ink-700 [&>li]:list-disc [&>li]:pl-1.5 marker:text-brand-400"
      {...props}
    />
  ),
  ol: (props: React.ComponentProps<"ol">) => (
    <ol
      className="mt-5 space-y-2.5 pl-5 text-[1.05rem] leading-[1.75] text-ink-700 [&>li]:list-decimal [&>li]:pl-1.5 marker:font-semibold marker:text-brand-500"
      {...props}
    />
  ),
  strong: (props: React.ComponentProps<"strong">) => (
    <strong className="font-semibold text-brand-900" {...props} />
  ),
  a: ({ href = "", ...props }: React.ComponentProps<"a">) => {
    const className =
      "font-semibold text-brand-600 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-800 hover:decoration-brand-600";
    if (href.startsWith("/")) {
      return <Link href={href} className={className} {...props} />;
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      />
    );
  },
  blockquote: (props: React.ComponentProps<"blockquote">) => (
    <blockquote
      className="mt-7 rounded-2xl border border-brand-200 bg-brand-50 px-5 py-4 text-[1.02rem] leading-[1.7] text-ink-700 lg:px-6 lg:py-5 [&>p:first-child]:mt-0"
      {...props}
    />
  ),
  hr: () => <hr className="mt-12 border-brand-100" />,
  table: (props: React.ComponentProps<"table">) => (
    <div className="mt-7 overflow-x-auto rounded-2xl border border-brand-100">
      <table className="w-full min-w-[34rem] border-collapse text-left text-[0.97rem]" {...props} />
    </div>
  ),
  thead: (props: React.ComponentProps<"thead">) => (
    <thead className="bg-brand-50" {...props} />
  ),
  th: (props: React.ComponentProps<"th">) => (
    <th className="px-5 py-3.5 font-bold text-brand-900" {...props} />
  ),
  td: (props: React.ComponentProps<"td">) => (
    <td
      className="border-t border-brand-100 px-5 py-3.5 align-top leading-relaxed text-ink-700"
      {...props}
    />
  ),
};

export function MdxContent({ source }: { source: string }) {
  return (
    <MDXRemote
      source={source}
      components={components}
      options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
    />
  );
}
