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
            tone === "light" ? "text-accent-400" : "text-brand-600"
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
              tone === "light" ? "text-accent-400" : "text-brand-600"
            }`}
          />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

/**
 * Etiquetas informativas, SIN enlace. Deliberadamente planas y sin borde para
 * que no se confundan con <LinkPills />, que sí son pulsables.
 */
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

/**
 * Enlaces internos en forma de píldora. Llevan flecha para distinguirlos a
 * simple vista de <PillList />, que son etiquetas sin destino.
 */
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
            className="group inline-flex min-h-11 items-center gap-1.5 rounded-full border border-brand-200 bg-white pl-4 pr-3 text-sm font-medium text-brand-800 transition-colors hover:border-brand-400 hover:bg-brand-50"
          >
            {item.label}
            <ArrowRight
              aria-hidden="true"
              className="h-3.5 w-3.5 text-brand-400 transition-colors group-hover:text-brand-600"
            />
          </Link>
        </li>
      ))}
    </ul>
  );
}

/**
 * Proceso de cinco pasos. Son cinco por definición, así que no caben en una
 * rejilla de 2 o 3 columnas sin dejar una fila coja: hasta `lg` se muestran
 * como lista vertical compacta y en escritorio como fila de cinco.
 */
export function Steps({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="grid gap-3 lg:grid-cols-5 lg:gap-4">
      {steps.map((step, index) => (
        <li
          key={step.title}
          className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-5 lg:flex-col lg:gap-0"
        >
          <span className="inline-grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-800 text-sm font-bold text-white">
            {index + 1}
          </span>
          <div className="lg:mt-3.5">
            <h3 className="text-base font-bold text-brand-900">{step.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-ink-700">
              {step.text}
            </p>
          </div>
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

/**
 * Bloque de texto corrido. Para las secciones explicativas largas, donde el
 * contenido pesa más que la maquetación.
 */
export function Prose({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`max-w-3xl space-y-4 text-[1.02rem] leading-relaxed text-ink-700 ${className}`}
    >
      {children}
    </div>
  );
}

/** Lista numerada de fases de un servicio, con texto explicativo. */
export function PhaseList({
  phases,
}: {
  phases: { title: string; text: string }[];
}) {
  return (
    <ol className="mt-8 space-y-4">
      {phases.map((phase, index) => (
        <li
          key={phase.title}
          className="flex gap-4 rounded-2xl border border-brand-100 bg-white p-5 lg:p-6"
        >
          <span className="inline-grid h-9 w-9 shrink-0 place-items-center rounded-lg bg-brand-700 text-sm font-bold text-white">
            {index + 1}
          </span>
          <div>
            <h3 className="text-base font-bold text-brand-900 lg:text-lg">
              {phase.title}
            </h3>
            <p className="mt-2 leading-relaxed text-ink-700">{phase.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

/**
 * Sección a dos columnas: encabezado a la izquierda y texto a la derecha.
 *
 * Resuelve el problema de los bloques de texto que se quedaban estrechos
 * dentro de un contenedor ancho y parecían mal alineados. Aquí el texto llena
 * su columna, la sección ocupa todo el ancho de la web y la medida de lectura
 * sigue siendo cómoda.
 */
export function TwoColumn({
  heading,
  children,
  aside,
}: {
  heading: React.ReactNode;
  children: React.ReactNode;
  aside?: React.ReactNode;
}) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-4">
        <div className="lg:sticky lg:top-28">{heading}</div>
      </div>
      <div className="lg:col-span-8">
        <div className="space-y-4 text-[1.02rem] leading-relaxed text-ink-700">
          {children}
        </div>
        {aside ? <div className="mt-8">{aside}</div> : null}
      </div>
    </div>
  );
}

/**
 * Aviso o matiz al final de una sección.
 *
 * Va en una caja que ocupa todo el ancho del contenedor: antes eran párrafos
 * sueltos limitados a `max-w-3xl` detrás de una rejilla a ancho completo, y se
 * quedaban cortos sin que se entendiera por qué.
 */
export function Note({
  children,
  tone = "soft",
}: {
  children: React.ReactNode;
  tone?: "soft" | "plain";
}) {
  return (
    <div
      className={`mt-8 rounded-2xl border px-5 py-4 text-[0.97rem] leading-relaxed lg:px-6 lg:py-5 ${
        tone === "soft"
          ? "border-brand-200 bg-brand-50 text-ink-700"
          : "border-brand-100 bg-white text-ink-700"
      }`}
    >
      {children}
    </div>
  );
}
