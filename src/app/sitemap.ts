import type { MetadataRoute } from "next";

import { absoluteUrl } from "@/lib/links";

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
};

const entries: Entry[] = [
  { path: "/", priority: 1, changeFrequency: "monthly" },
  { path: "/control-de-accesos/", priority: 0.9, changeFrequency: "monthly" },
  { path: "/personal-eventos/", priority: 0.9, changeFrequency: "monthly" },
  {
    path: "/control-accesos-locales/",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  {
    path: "/personal-auxiliar-empresas/",
    priority: 0.9,
    changeFrequency: "monthly",
  },
  { path: "/presupuesto/", priority: 0.8, changeFrequency: "yearly" },
  { path: "/preguntas-frecuentes/", priority: 0.7, changeFrequency: "monthly" },
  {
    path: "/control-accesos-vs-vigilante-seguridad/",
    priority: 0.7,
    changeFrequency: "yearly",
  },
  { path: "/aviso-legal/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/privacidad/", priority: 0.2, changeFrequency: "yearly" },
  { path: "/cookies/", priority: 0.2, changeFrequency: "yearly" },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return entries.map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}
