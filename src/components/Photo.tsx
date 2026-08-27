import fs from "node:fs";
import path from "node:path";

import Image from "next/image";

/**
 * HUECO DE FOTOGRAFÍA
 * ---------------------------------------------------------------------------
 * Cada hueco tiene un nombre de archivo asignado. El componente comprueba en
 * el build si ese archivo existe dentro de `public/`:
 *
 *   - si existe, muestra la foto optimizada con next/image;
 *   - si no existe, muestra un marcador con la misma proporción que indica
 *     qué archivo hay que subir.
 *
 * Es decir: para poner una foto basta con subirla a `public/fotos/` con el
 * nombre correcto. No hay que tocar ni una línea de código.
 */

type PhotoProps = {
  /** Ruta dentro de /public, p. ej. "/fotos/home-acceso.jpg". */
  src?: string;
  /** Texto alternativo real y descriptivo. */
  alt?: string;
  ratio?: "16/9" | "4/3" | "1/1" | "3/4";
  /** Nota visible en el marcador para saber qué foto va aquí. */
  label?: string;
  priority?: boolean;
  className?: string;
  sizes?: string;
};

const ratioClass: Record<NonNullable<PhotoProps["ratio"]>, string> = {
  "16/9": "aspect-[16/9]",
  "4/3": "aspect-[4/3]",
  "1/1": "aspect-square",
  "3/4": "aspect-[3/4]",
};

/** ¿Está ya subido el archivo? Se comprueba en el build, no en el navegador. */
function existsInPublic(src: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", src));
  } catch {
    return false;
  }
}

export function Photo({
  src,
  alt,
  ratio = "16/9",
  label,
  priority = false,
  className = "",
  sizes = "(min-width: 1024px) 33vw, 100vw",
}: PhotoProps) {
  const base = `relative overflow-hidden rounded-2xl ${ratioClass[ratio]} ${className}`;
  const ready = Boolean(src) && existsInPublic(src!);

  if (!ready) {
    return (
      <div
        className={`${base} border border-dashed border-brand-200 bg-brand-50`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 grid place-items-center px-5 text-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-brand-400">
              {label ?? "Fotografía"}
            </p>
            {src ? (
              <p className="mt-2 font-mono text-[0.7rem] text-brand-300">
                sube el archivo {src}
              </p>
            ) : null}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={base}>
      <Image
        src={src!}
        alt={alt ?? ""}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
