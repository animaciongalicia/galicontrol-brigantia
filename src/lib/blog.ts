import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const BLOG_DIR = path.join(process.cwd(), "src", "content", "blog");

export type PostMeta = {
  slug: string;
  title: string;
  /** Título para la pestaña y Google. Si falta se usa `title`. */
  seoTitle?: string;
  description: string;
  /** Fecha de publicación en formato AAAA-MM-DD. Si es futura, el artículo
   *  no aparece todavía: así se pueden dejar varios escritos y programados. */
  date: string;
  updated?: string;
  /** Etiqueta corta para la tarjeta del listado. */
  tag: string;
  /** Minutos de lectura, calculados a partir del texto. */
  readingMinutes: number;
};

export type Post = PostMeta & { content: string };

function readAll(): Post[] {
  if (!fs.existsSync(BLOG_DIR)) return [];

  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => {
      const raw = fs.readFileSync(path.join(BLOG_DIR, file), "utf8");
      const { data, content } = matter(raw);
      const words = content.split(/\s+/).length;

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: String(data.title ?? ""),
        seoTitle: data.seoTitle ? String(data.seoTitle) : undefined,
        description: String(data.description ?? ""),
        date: String(data.date ?? ""),
        updated: data.updated ? String(data.updated) : undefined,
        tag: String(data.tag ?? "Artículo"),
        readingMinutes: Math.max(2, Math.round(words / 200)),
        content,
      };
    });
}

/** ¿Ya toca publicarlo? Comparamos solo la fecha, en horario de Madrid. */
function isPublished(post: Post): boolean {
  const today = new Date().toLocaleDateString("sv-SE", {
    timeZone: "Europe/Madrid",
  });
  return post.date <= today;
}

/** Artículos publicados, del más reciente al más antiguo. */
export function getPosts(): Post[] {
  return readAll()
    .filter(isPublished)
    .sort((a, b) => b.date.localeCompare(a.date));
}

export function getPost(slug: string): Post | undefined {
  return getPosts().find((post) => post.slug === slug);
}

/** Rutas a generar en el build. Incluye solo lo ya publicado. */
export function getPostSlugs(): string[] {
  return getPosts().map((post) => post.slug);
}

/** Otros artículos para el pie del post. */
export function getRelatedPosts(slug: string, limit = 3): Post[] {
  return getPosts()
    .filter((post) => post.slug !== slug)
    .slice(0, limit);
}

/** 12 de septiembre de 2026 */
export function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-").map(Number);
  if (!year || !month || !day) return iso;
  return new Date(Date.UTC(year, month - 1, day)).toLocaleDateString("es-ES", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}

/** Convierte un titular en un ancla: "¿Cuánto cuesta?" -> "cuanto-cuesta" */
export function slugifyHeading(text: string): string {
  return text
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/** Titulares de nivel 2 del artículo, para el índice lateral. */
export function getHeadings(content: string): { id: string; text: string }[] {
  return content
    .split("\n")
    .filter((line) => line.startsWith("## "))
    .map((line) => {
      const text = line.slice(3).trim();
      return { id: slugifyHeading(text), text };
    });
}
