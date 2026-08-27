import Link from "next/link";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";

import { LogoMark } from "@/components/Logo";
import { footerNav, hasEmail, hasPhone, site } from "@/config/site";
import {
  PhoneFooterLink,
  WhatsappFooterLink,
} from "@/components/FooterContactLinks";

const year = 2026;

function ColumnTitle({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-brand-200">
      {children}
    </h2>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-900 text-brand-100">
      <div className="container-page py-14 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-5 lg:gap-12">
          {/* 2/5 — Marca */}
          <div className="lg:col-span-2">
            <LogoMark tone="dark" />
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed text-brand-200">
              Control de accesos y personal auxiliar para eventos, locales y
              empresas en A Coruña y Galicia.
            </p>
            <address className="mt-5 not-italic text-[0.95rem] leading-relaxed text-brand-200">
              {site.legalName}
              <br />
              {site.address.street}
              <br />
              {site.address.postalCode} {site.address.city}
            </address>
          </div>

          {/* 3/5 — Tres columnas */}
          <div className="grid gap-10 sm:grid-cols-3 lg:col-span-3">
            <div>
              <ColumnTitle>Servicios</ColumnTitle>
              <ul className="space-y-2.5 text-[0.95rem]">
                {footerNav.servicios.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-1 text-white/90 transition-colors hover:text-accent-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ColumnTitle>Información</ColumnTitle>
              <ul className="space-y-2.5 text-[0.95rem]">
                {footerNav.informacion.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="inline-block py-1 text-white/90 transition-colors hover:text-accent-400"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <ColumnTitle>Contacto</ColumnTitle>
              <ul className="space-y-3.5 text-[0.95rem]">
                <li>
                  <PhoneFooterLink href={site.contact.phoneHref}>
                    <Phone aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                    <span>
                      {hasPhone ? site.contact.phoneDisplay : "Teléfono"}
                      <span className="block text-xs text-brand-300">
                        Llamar ahora
                      </span>
                    </span>
                  </PhoneFooterLink>
                </li>
                <li>
                  <WhatsappFooterLink>
                    <MessageCircle
                      aria-hidden="true"
                      className="mt-0.5 h-4 w-4 shrink-0"
                    />
                    <span>
                      WhatsApp
                      <span className="block text-xs text-brand-300">
                        Escríbenos directamente
                      </span>
                    </span>
                  </WhatsappFooterLink>
                </li>
                {/* Sin email configurado no mostramos un mailto: vacío, que
                    abriría el gestor de correo sin destinatario. */}
                {hasEmail ? (
                  <li>
                    <a
                      href={site.contact.emailHref}
                      className="inline-flex items-start gap-2.5 py-1 break-all text-white/90 transition-colors hover:text-accent-400"
                    >
                      <Mail
                        aria-hidden="true"
                        className="mt-0.5 h-4 w-4 shrink-0"
                      />
                      <span>{site.contact.email}</span>
                    </a>
                  </li>
                ) : null}
                <li className="flex items-start gap-2.5 py-1 text-white/90">
                  <MapPin aria-hidden="true" className="mt-0.5 h-4 w-4 shrink-0" />
                  <span>
                    A Coruña y Galicia
                    <span className="block text-xs text-brand-300">
                      {site.address.street} · {site.address.postalCode}{" "}
                      {site.address.city}
                    </span>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Franja legal independiente, fuera de las columnas comerciales */}
      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-center gap-2 py-5 text-center text-xs text-brand-300 sm:flex-row sm:justify-between sm:text-left">
          <p>
            © {year} {site.legalName}
          </p>
          <ul className="flex flex-wrap items-center justify-center gap-x-2 gap-y-1">
            {footerNav.legal.map((item, index) => (
              <li key={item.href} className="flex items-center gap-2">
                {index > 0 ? <span aria-hidden="true">·</span> : null}
                <Link
                  href={item.href}
                  className="py-1 transition-colors hover:text-accent-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
