import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock } from "lucide-react";

import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { PageHero } from "@/components/PageHero";
import { Card, Section } from "@/components/ui";
import { formatDate, getPosts } from "@/lib/blog";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/lib/links";
import { pageMetadata } from "@/lib/seo";

const PATH = "/blog/";

export const metadata: Metadata = pageMetadata({
  title: "Blog sobre Control de Accesos y Personal para Eventos | GaliControl",
  description:
    "Respuestas prácticas a lo que se pregunta antes de contratar personal: qué figura necesita tu evento, cuánto cuesta y qué puedes resolver sin seguridad privada.",
  path: PATH,
});

const crumbs = [
  { name: "Inicio", path: "/" },
  { name: "Blog", path: PATH },
];

export default function BlogIndexPage() {
  const posts = getPosts();

  return (
    <>
      <Breadcrumbs items={crumbs} />

      <PageHero
        eyebrow="Blog"
        title="Lo que hay que saber antes de contratar personal para un evento o un local"
        cta="hero_blog"
        intro={
          <p>
            Artículos que responden a lo que nos preguntáis por teléfono: qué
            figura necesita cada servicio, cuánto cuesta y qué se puede resolver
            sin contratar seguridad privada.
          </p>
        }
        aside={
          <Card className="bg-white">
            <h2 className="text-base font-bold text-brand-900">
              ¿Tienes prisa?
            </h2>
            <p className="mt-3 text-[0.95rem] leading-relaxed text-ink-700">
              Si ya sabes lo que necesitas, no hace falta que leas nada:
              llámanos o escríbenos por WhatsApp y te lo presupuestamos.
            </p>
          </Card>
        }
      />

      <Section>
        {posts.length === 0 ? (
          <p className="text-[1.05rem] text-ink-700">
            Todavía no hay artículos publicados.
          </p>
        ) : (
          <ul className="grid gap-6 lg:grid-cols-2">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}/`}
                  className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-6 transition-colors hover:border-brand-300 hover:bg-brand-50 lg:p-7"
                >
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.12em] text-brand-600">
                    <span>{post.tag}</span>
                    <span aria-hidden="true" className="text-brand-300">
                      ·
                    </span>
                    <span className="inline-flex items-center gap-1 normal-case tracking-normal text-ink-500">
                      <Clock aria-hidden="true" className="h-3.5 w-3.5" />
                      {post.readingMinutes} min
                    </span>
                  </div>

                  <h2 className="mt-3 text-lg font-bold leading-snug text-brand-900 lg:text-xl">
                    {post.title}
                  </h2>
                  <p className="mt-3 flex-1 text-[0.98rem] leading-relaxed text-ink-700">
                    {post.description}
                  </p>

                  <div className="mt-5 flex items-center justify-between gap-4">
                    <time
                      dateTime={post.date}
                      className="text-sm text-ink-500"
                    >
                      {formatDate(post.date)}
                    </time>
                    <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-800">
                      Leer
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </Section>

      <CtaSection
        cta="cierre_blog"
        title="¿Prefieres preguntárnoslo directamente?"
        text="Cuéntanos qué evento o local tienes y te decimos qué necesitas."
      />

      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "Blog",
            "@id": `${absoluteUrl(PATH)}#blog`,
            name: "Blog de GaliControl Brigantia",
            url: absoluteUrl(PATH),
            inLanguage: "es-ES",
            blogPost: posts.map((post) => ({
              "@type": "BlogPosting",
              headline: post.title,
              description: post.description,
              datePublished: post.date,
              url: absoluteUrl(`/blog/${post.slug}/`),
            })),
          },
        ]}
      />
    </>
  );
}
