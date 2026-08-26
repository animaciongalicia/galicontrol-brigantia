"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessageCircle, Phone } from "lucide-react";

import { site } from "@/config/site";
import { trackCta } from "@/lib/analytics";
import { normalizePath, whatsappHref } from "@/lib/links";

type Size = "sm" | "md" | "lg";

const sizeClass: Record<Size, string> = {
  sm: "min-h-11 px-3.5 text-sm gap-1.5",
  md: "min-h-12 px-5 text-[0.95rem] gap-2",
  lg: "min-h-13 px-6 text-base gap-2",
};

const baseClass =
  "inline-flex items-center justify-center rounded-xl font-semibold transition-colors focus-visible:outline-offset-2";

export function PhoneButton({
  cta,
  size = "md",
  variant = "solid",
  label = "Llamar",
  className = "",
}: {
  cta: string;
  size?: Size;
  variant?: "solid" | "outline" | "bar";
  label?: string;
  className?: string;
}) {
  const pathname = normalizePath(usePathname());

  const styles =
    variant === "solid"
      ? "bg-brand-700 text-white hover:bg-brand-800"
      : variant === "outline"
        ? "border-2 border-brand-700 text-brand-800 hover:bg-brand-50"
        : "bg-brand-800 text-white hover:bg-brand-900";

  return (
    <a
      href={site.contact.phoneHref}
      onClick={() => trackCta("phone_click", { pathname, cta })}
      className={`${baseClass} ${sizeClass[size]} ${styles} ${className}`}
    >
      <Phone aria-hidden="true" className="h-[1.15em] w-[1.15em]" />
      <span>{label}</span>
    </a>
  );
}

export function WhatsappButton({
  cta,
  size = "md",
  variant = "solid",
  label = "WhatsApp",
  message,
  className = "",
}: {
  cta: string;
  size?: Size;
  variant?: "solid" | "outline" | "bar";
  label?: string;
  message?: string;
  className?: string;
}) {
  const pathname = normalizePath(usePathname());

  const styles =
    variant === "solid"
      ? "bg-[#128C7E] text-white hover:bg-[#0e6f64]"
      : variant === "outline"
        ? "border-2 border-[#128C7E] text-[#0b5a52] hover:bg-[#128C7E]/10"
        : "bg-[#128C7E] text-white hover:bg-[#0e6f64]";

  return (
    <a
      href={whatsappHref(pathname, message)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCta("whatsapp_click", { pathname, cta })}
      className={`${baseClass} ${sizeClass[size]} ${styles} ${className}`}
    >
      <MessageCircle aria-hidden="true" className="h-[1.15em] w-[1.15em]" />
      <span>{label}</span>
    </a>
  );
}

export function BudgetButton({
  cta,
  size = "md",
  variant = "outline",
  label = "Pedir presupuesto",
  className = "",
}: {
  cta: string;
  size?: Size;
  variant?: "solid" | "outline" | "accent";
  label?: string;
  className?: string;
}) {
  const pathname = normalizePath(usePathname());

  const styles =
    variant === "solid"
      ? "bg-brand-800 text-white hover:bg-brand-900"
      : variant === "accent"
        ? "bg-accent-500 text-brand-950 hover:bg-accent-400"
        : "border-2 border-brand-200 bg-white text-brand-800 hover:border-brand-400 hover:bg-brand-50";

  return (
    <Link
      href={{ pathname: "/presupuesto/", query: { origen: pathname, cta } }}
      onClick={() => trackCta("budget_open", { pathname, cta })}
      className={`${baseClass} ${sizeClass[size]} ${styles} ${className}`}
    >
      {label}
    </Link>
  );
}

/** Trío de CTA usado al cierre de cada página comercial. */
export function CtaTrio({
  cta,
  align = "center",
}: {
  cta: string;
  align?: "center" | "start";
}) {
  return (
    <div
      className={`flex flex-col gap-3 sm:flex-row sm:flex-wrap ${
        align === "center" ? "sm:justify-center" : ""
      }`}
    >
      <PhoneButton cta={cta} size="lg" />
      <WhatsappButton cta={cta} size="lg" />
      <BudgetButton cta={cta} size="lg" />
    </div>
  );
}
