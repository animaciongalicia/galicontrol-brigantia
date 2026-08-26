"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

import { mainNav } from "@/config/site";
import { normalizePath } from "@/lib/links";

const items = [...mainNav, { href: "/presupuesto/", label: "Pedir presupuesto" }];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = normalizePath(usePathname());

  // Cerrar el menú al cambiar de página.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  // Bloquear el scroll del fondo mientras el menú está abierto.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="lg:hidden">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls="menu-movil"
        className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-brand-200 text-brand-800 transition-colors hover:bg-brand-50"
      >
        {open ? (
          <X aria-hidden="true" className="h-6 w-6" />
        ) : (
          <Menu aria-hidden="true" className="h-6 w-6" />
        )}
        <span className="sr-only">{open ? "Cerrar menú" : "Abrir menú"}</span>
      </button>

      {open ? (
        <div
          id="menu-movil"
          className="fixed inset-x-0 bottom-0 top-[72px] z-40 overflow-y-auto border-t border-brand-100 bg-white px-5 pb-28 pt-4"
        >
          <nav aria-label="Navegación principal">
            <ul className="flex flex-col gap-2">
              {items.map((item) => {
                const active = pathname === item.href;
                const isCta = item.href === "/presupuesto/";
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`flex min-h-14 items-center rounded-xl px-4 text-lg font-semibold transition-colors ${
                        isCta
                          ? "bg-accent-500 text-brand-950"
                          : active
                            ? "bg-brand-50 text-brand-800"
                            : "bg-brand-50/60 text-ink-900 hover:bg-brand-50"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
