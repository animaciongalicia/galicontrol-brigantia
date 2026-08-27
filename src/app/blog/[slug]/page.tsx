import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Clock } from "lucide-react";

import { ArticleToc } from "@/components/ArticleToc";
import { Breadcrumbs } from "@/components/Breadcrumbs";
import { CtaSection } from "@/components/CtaSection";
import { JsonLd } from "@/components/JsonLd";
import { MdxContent } from "@/components/MdxContent";
import { RelatedServices } from "@/components/RelatedServices";
import { site } from "@/config/site";
import {
  formatDate,
  getHeadings,
  getPost,
  getPostSlugs,
  getRelatedPosts,
} from "@/lib/blog";
import { breadcrumbJsonLd } from "@/lib/jsonld";
import { absoluteUrl } from "@/lib/links";
import { ogImage, pageMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};

  const meta = pageMetadata({
    title: post.seoTitle ?? `${post.title} | GaliControl`,
    description: post.description,
    path: `/blog/${slug}/`,
  });

  return {
    ...meta,
    openGraph: {
      ...meta.openGraph,
      type: "article",
      publishedTime: post.date,
      modifiedTime: post.updated ?? post.date,
      images: [ogImage],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);
  const headings = getHeadings(post.content);
  const crumbs = [
    { name: "Inicio", path: "/" },
    { name: "Blog", path: "/blog/" },
    { name: post.title, path: `/blog/${slug}/` },
  ];

  return (
    <>
      <Breadcrumbs items={crumbs} />

      <article>
        <header className="border-b border-brand-100 bg-gradient-to-b from-brand-50 to-white">
          <div className="container-page py-10 lg:py-14">
            <div className="max-w-3xl">
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-semibold uppercase tracking-[0.14em] text-brand-600">
                <span>{post.tag}</span>
                <span aria-hidden="true" className="text-brand-300">
                  ·
                </span>
                <span className="inline-flex items-center gap-1 normal-case tracking-normal text-ink-500">
                  <Clock aria-hidden="true" className="h-3.5 w-3.5" />
                  {post.readingMinutes} min de lectura
                </span>
              </div>

              <h1 className="mt-4 text-[1.8rem] font-bold leading-[1.18] text-brand-900 sm:text-[2.2rem] lg:text-[2.5rem]">
                {post.title}
              </h1>
              <p className="mt-5 text-[1.1rem] leading-relaxed text-ink-700">
                {post.description}
              </p>
              <p className="mt-5 text-sm text-ink-500">
                Publicado el{" "}
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                {post.updated ? (
                  <>
                    {" "}
                    · Actualizado el{" "}
                    <time dateTime={post.updated}>
                      {formatDate(post.updated)}
                    </time>
                  </>
                ) : null}
              </p>
            </div>
          </div>
        </header>

        <div className="container-page py-12 lg:py-16">
          <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="min-w-0 lg:col-span-8">
              <MdxContent source={post.content} />
            </div>
            <aside className="order-first lg:order-none lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <ArticleToc headings={headings} />
              </div>
            </aside>
          </div>
        </div>
      </article>

      {related.length > 0 ? (
        <section className="border-t border-brand-100 bg-brand-50 py-14 lg:py-16">
          <div className="container-page">
            <h2 className="text-xl font-bold text-brand-900 lg:text-2xl">
              Seguir leyendo
            </h2>
            <ul className="mt-7 grid gap-5 lg:grid-cols-3">
              {related.map((item) => (
                <li key={item.slug}>
                  <Link
                    href={`/blog/${item.slug}/`}
                    className="group flex h-full flex-col rounded-2xl border border-brand-100 bg-white p-5 transition-colors hover:border-brand-300"
                  >
                    <h3 className="text-base font-bold leading-snug text-brand-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-ink-700">
                      {item.description}
                    </p>
                    <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-600 group-hover:text-brand-800">
                      Leer
                      <ArrowRight aria-hidden="true" className="h-4 w-4" />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      ) : null}

      <RelatedServices exclude="/blog/" limit={4} />

      <CtaSection cta={`cierre_blog_${slug}`} />

      <JsonLd
        data={[
          breadcrumbJsonLd(crumbs),
          {
            "@context": "https://schema.org",
            "@type": "BlogPosting",
            headline: post.title,
            description: post.description,
            datePublished: post.date,
            dateModified: post.updated ?? post.date,
            inLanguage: "es-ES",
            mainEntityOfPage: absoluteUrl(`/blog/${slug}/`),
            image: absoluteUrl(ogImage.url),
            author: { "@id": `${site.url}/#organization` },
            publisher: { "@id": `${site.url}/#organization` },
          },
        ]}
      />
    </>
  );
}
