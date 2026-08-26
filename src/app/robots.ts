import type { MetadataRoute } from "next";

import { site } from "@/config/site";

export default function robots(): MetadataRoute.Robots {
  const allowAll = { allow: "/", disallow: [] as string[] };

  return {
    rules: [
      // Rastreo abierto: no bloqueamos ningún contenido comercial.
      { userAgent: "*", ...allowAll },
      { userAgent: "Googlebot", ...allowAll },
      { userAgent: "Bingbot", ...allowAll },
      { userAgent: "OAI-SearchBot", ...allowAll },
      { userAgent: "ChatGPT-User", ...allowAll },
      { userAgent: "PerplexityBot", ...allowAll },
    ],
    sitemap: `${site.url}/sitemap.xml`,
    host: site.url,
  };
}
