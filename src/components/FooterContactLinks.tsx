"use client";

import { usePathname } from "next/navigation";

import { trackCta } from "@/lib/analytics";
import { normalizePath, whatsappHref } from "@/lib/links";

/** Enlace de WhatsApp del footer, con mensaje contextual y medición. */
export function WhatsappFooterLink({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = normalizePath(usePathname());

  return (
    <a
      href={whatsappHref(pathname)}
      target="_blank"
      rel="noopener noreferrer"
      onClick={() => trackCta("whatsapp_click", { pathname, cta: "footer" })}
      className="inline-flex items-start gap-2.5 py-1 text-white/90 transition-colors hover:text-accent-400"
    >
      {children}
    </a>
  );
}

/** Enlace click-to-call del footer, con medición del origen. */
export function PhoneFooterLink({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) {
  const pathname = normalizePath(usePathname());

  return (
    <a
      href={href}
      onClick={() => trackCta("phone_click", { pathname, cta: "footer" })}
      className="inline-flex items-start gap-2.5 py-1 text-white/90 transition-colors hover:text-accent-400"
    >
      {children}
    </a>
  );
}
