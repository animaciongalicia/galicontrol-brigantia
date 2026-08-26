import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";

export function Section({
  children,
  className = "",
  tone = "white",
  id,
}: {
  children: React.ReactNode;
  className?: string;
  tone?: "white" | "soft" | "dark" | "accent";
  id?: string;
}) {
  const toneClass =
    tone === "soft"
      ? "bg-brand-50"
      : tone === "dark"
        ? "bg-brand-900 text-white"
        : tone === "accent"
          ? "bg-accent-100"
          : "bg-white";

  return (
    <section id={id} className={`${toneClass} py-14 lg:py-20 ${className}`}>
      <div className="container-page">{children}</div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "start",
  tone = "dark",
  as: Tag = "h2",
}: {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "start" | "center";
  tone?: "dark" | "light";
  as?: "h2" | "h3";
}) {
  const alignClass = align === "center" ? "text-center mx-auto" : "";
  const titleColor = tone === "light" ? "text-white" : "text-brand-900";
  const introColor = tone === "light" ? "text-brand-100" : "text-ink-700";

  return (
    <div className={`max-w-3xl ${alignClass}`}>
      {eyebrow ? (
        <p
          className={`mb-3 text-xs font-bold uppercase tracking-[0.16em] ${
            tone === "light" ? "text-accent-400" : "text-brand-500"
          }`}
        >
          {eyebrow}
        </p>
      ) : null}
      <Tag
        className={`text-2xl font-bold leading-tight sm:text-3xl lg:text-[2.1rem] ${titleColor}`}
      >
        {title}
      </Tag>
      {intro ? (
        <div className={`mt-4 text-[1.05rem] leading-relaxed ${introColor}`}>
          {intro}
        </div>
      ) : null}
    </div>
  );
}

export function Card({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl border border-brand-100 bg-white p-6 shadow-[0_1px_2px_rgba(11,44,66,0.04)] ${className}`}
    >
      {children}
    </div>
  );
}

/** Tarjeta enlazada a otra página (bloques "¿Qué necesitas?"). */
export function LinkCard({
  href,
  title,
  children,
  cta = "Ver servicio",
}: {
  href: string;
  title: string;
  children: React.ReactNode;
  cta?: string;
}) {
  return (
    <Link
      href={href}
      className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 transition-colors hover:border-brand-300 hover:bg-brand-50"
    >
      <h3 className="text-lg font-bold text-brand-900">{title}</h3>
      <p className="mt-2.5 flex-1 text-[0.95rem] leading-relaxed text-ink-700">
        {children}
      </p>
      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-800">
        {cta}
        <ArrowRight aria-hidden="true" className="h-4 w-4" />
      </span>
    </Link>
  );
}

export function CheckList({
  items,
  columns = 1,
  tone = "dark",
}: {
  items: React.ReactNode[];
  columns?: 1 | 2;
  tone?: "dark" | "light";
}) {
  return (
    <ul
      className={`grid gap-3 ${columns === 2 ? "sm:grid-cols-2" : ""} ${
        tone === "light" ? "text-brand-100" : "text-ink-700"
      }`}
    >
      {items.map((item, index) => (
        <li key={index} className="flex items-start gap-2.5 leading-relaxed">
          <Check
            aria-hidden="true"
            className={`mt-1 h-4 w-4 shrink-0 ${
              tone === "light" ? "text-accent-400" : "text-brand-500"
            }`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/** Lista de etiquetas (tipos de servicio, zonas...). */
export function PillList({
  items,
  tone = "soft",
}: {
  items: string[];
  tone?: "soft" | "dark";
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li
          key={item}
          className={`rounded-full px-3.5 py-1.5 text-sm font-medium ${
            tone === "dark"
              ? "bg-white/10 text-brand-100"
              : "bg-brand-50 text-brand-800"
          }`}
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

/** Enlaces internos en forma de etiqueta (tipos de servicio de la home). */
export function LinkPills({
  items,
}: {
  items: { label: string; href: string }[];
}) {
  return (
    <ul className="flex flex-wrap gap-2">
      {items.map((item) => (
        <li key={item.label}>
          <Link
            href={item.href}
            className="inline-flex min-h-11 items-center rounded-full border border-brand-200 bg-white px-4 text-sm font-medium text-brand-800 transition-colors hover:border-brand-400 hover:bg-brand-50"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function Steps({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="relative rounded-2xl border border-brand-100 bg-white p-5"
        >
          <span className="inline-grid h-9 w-9 place-items-center rounded-lg bg-brand-800 text-sm font-bold text-white">
            {index + 1}
          </span>
          <h3 className="mt-3.5 text-base font-bold text-brand-900">
            {step.title}
          </h3>
          <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
            {step.text}
          </p>
        </li>
      ))}
    </ol>
  );
}

/** Frase textual de un cliente tipo. No es un testimonio real. */
export function PainList({ items }: { items: string[] }) {
  return (
    <ul className="grid gap-3 sm:grid-cols-2">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-2xl border-l-4 border-accent-400 bg-white px-5 py-4 text-[0.98rem] font-medium leading-relaxed text-ink-900 shadow-[0_1px_2px_rgba(11,44,66,0.05)]"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export function TextLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-1.5 font-semibold text-brand-600 underline decoration-brand-300 underline-offset-4 transition-colors hover:text-brand-800 hover:decoration-brand-600"
    >
      {children}
      <ArrowRight aria-hidden="true" className="h-4 w-4" />
    </Link>
  );
}

/** Aviso legal destacado sobre el alcance del servicio. */
export function LegalNote({
  title,
  children,
  action,
}: {
  title: string;
  children: React.ReactNode;
  action?: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-brand-200 bg-brand-50 p-6 lg:p-8">
      <h2 className="text-xl font-bold text-brand-900 lg:text-2xl">{title}</h2>
      <div className="mt-3 max-w-3xl text-[1.02rem] leading-relaxed text-ink-700">
        {children}
      </div>
      {action ? <div className="mt-5">{action}</div> : null}
    </div>
  );
}
