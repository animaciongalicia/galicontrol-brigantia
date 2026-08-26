import Image from "next/image";

type PhotoProps = {
  /**
   * Ruta de la fotografía real dentro de /public.
   * Mientras sea `undefined` se muestra un marcador neutro con la misma
   * proporción, de forma que añadir la foto después no rompe el diseño.
   */
  src?: string;
  /** Texto alternativo real y descriptivo (obligatorio si hay imagen). */
  alt?: string;
  /** Proporción del hueco. */
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

  if (!src) {
    return (
      <div
        className={`${base} border border-dashed border-brand-200 bg-brand-50`}
        aria-hidden="true"
      >
        <div className="absolute inset-0 grid place-items-center px-4 text-center">
          <span className="text-xs font-medium uppercase tracking-widest text-brand-400">
            {label ?? "Fotografía"}
          </span>
        </div>
      </div>
    );
  }

  return (
    <div className={base}>
      <Image
        src={src}
        alt={alt ?? ""}
        fill
        sizes={sizes}
        priority={priority}
        className="object-cover"
      />
    </div>
  );
}
