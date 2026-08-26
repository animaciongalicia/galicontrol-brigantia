import Link from "next/link";

import { site } from "@/config/site";

/**
 * LOGO DE GALICONTROL
 * ---------------------------------------------------------------------------
 * Marca provisional construida con HTML+CSS para que se vea nítida en
 * cualquier pantalla mientras no esté disponible el archivo original.
 *
 * PARA PONER EL LOGO REAL:
 *   1. Copia el archivo a `public/logo.svg` (o .png).
 *   2. Sustituye el contenido de <LogoMark /> por:
 *        <Image src="/logo.svg" alt="GaliControl Brigantia" width={200}
 *               height={48} priority className="h-10 w-auto" />
 *      importando `Image` desde "next/image".
 * El resto de la web no necesita ningún cambio.
 */

type LogoProps = {
  /** Variante de color: sobre fondo claro u oscuro. */
  tone?: "light" | "dark";
  className?: string;
};

export function LogoMark({ tone = "light", className = "" }: LogoProps) {
  const wordColor = tone === "dark" ? "text-white" : "text-brand-800";
  const subColor = tone === "dark" ? "text-brand-200" : "text-brand-600";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <span
        aria-hidden="true"
        className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-brand-800 text-[0.95rem] font-bold tracking-tight text-white shadow-sm"
      >
        GC
      </span>
      <span className="flex flex-col leading-none">
        <span className={`text-lg font-bold tracking-tight ${wordColor}`}>
          Gali<span className="text-accent-500">Control</span>
        </span>
        <span
          className={`mt-1 text-[0.6rem] font-semibold uppercase tracking-[0.18em] ${subColor}`}
        >
          Brigantia
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
