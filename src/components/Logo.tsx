import Link from "next/link";

import { site } from "@/config/site";

/**
 * LOGO DE GALICONTROL BRIGANTIA
 * ---------------------------------------------------------------------------
 * La rosa de los vientos es el isotipo de la marca, redibujado como SVG en
 * línea: se ve nítido a cualquier tamaño, funciona sobre fondo claro y oscuro
 * y no genera ninguna petición extra (importa para el LCP de la portada).
 *
 * Si en algún momento se dispone del logotipo horizontal original en SVG o PNG
 * con fondo transparente, basta con dejarlo en `public/logo.svg` y sustituir el
 * contenido de <LogoMark /> por:
 *   <Image src="/logo.svg" alt="GaliControl Brigantia" width={220} height={48}
 *          priority className="h-11 w-auto" />
 * (importando `Image` desde "next/image"). El resto de la web no cambia.
 *
 * Los colores salen de los tokens `--color-brand-*` de globals.css, tomados
 * del propio logo.
 */

const MARK_LIGHT = "M60.00 2.00L53.69 44.76L60.00 60.00ZM97.48 22.52L66.31 44.76L60.00 60.00ZM118.00 60.00L75.24 53.69L60.00 60.00ZM97.48 97.48L75.24 66.31L60.00 60.00ZM60.00 118.00L66.31 75.24L60.00 60.00ZM22.52 97.48L53.69 75.24L60.00 60.00ZM2.00 60.00L44.76 66.31L60.00 60.00ZM22.52 22.52L44.76 53.69L60.00 60.00Z";
const MARK_BLUE = "M60.00 2.00L66.31 44.76L60.00 60.00ZM97.48 22.52L75.24 53.69L60.00 60.00ZM118.00 60.00L75.24 66.31L60.00 60.00ZM97.48 97.48L66.31 75.24L60.00 60.00ZM60.00 118.00L53.69 75.24L60.00 60.00ZM22.52 97.48L44.76 66.31L60.00 60.00ZM2.00 60.00L44.76 53.69L60.00 60.00ZM22.52 22.52L53.69 44.76L60.00 60.00Z";

/** Rosa de los vientos de la marca. */
export function CompassMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <circle cx="60" cy="60" r="40.00" fill="var(--color-brand-600)" />
      <circle
        cx="60"
        cy="60"
        r="30.50"
        fill="none"
        stroke="var(--color-brand-50)"
        strokeWidth="5.00"
      />
      <path d={MARK_LIGHT} fill="var(--color-brand-50)" />
      <path d={MARK_BLUE} fill="var(--color-brand-600)" />
    </svg>
  );
}

type LogoProps = {
  /** Variante de color: sobre fondo claro u oscuro. */
  tone?: "light" | "dark";
  className?: string;
};

export function LogoMark({ tone = "light", className = "" }: LogoProps) {
  const wordColor = tone === "dark" ? "text-white" : "text-brand-900";
  const subColor = tone === "dark" ? "text-brand-300" : "text-brand-600";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <CompassMark className="h-11 w-11 shrink-0" />
      <span className="flex flex-col leading-none">
        <span
          className={`text-[1.05rem] font-bold uppercase tracking-[0.045em] sm:text-[1.15rem] ${wordColor}`}
        >
          Galicontrol
        </span>
        <span
          className={`mt-1.5 text-[0.58rem] font-semibold uppercase tracking-[0.19em] ${subColor}`}
        >
          Brigantia S.L.
        </span>
      </span>
    </span>
  );
}

/** Logo enlazado a la portada. No existe enlace "Home" en el menú. */
export function LogoLink({ tone = "light", className = "" }: LogoProps) {
  return (
    <Link
      href="/"
      aria-label={`${site.longName} — Ir a la portada`}
      className={`inline-flex rounded-lg transition-opacity hover:opacity-85 ${className}`}
    >
      <LogoMark tone={tone} />
    </Link>
  );
}
