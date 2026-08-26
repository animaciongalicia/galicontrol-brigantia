"use server";

import { headers } from "next/headers";

import { site } from "@/config/site";
import type { BudgetState } from "@/lib/budget";


/** Etiqueta legible de la página desde la que se pidió el presupuesto. */
const ORIGIN_LABELS: Record<string, string> = {
  "/": "Home",
  "/control-de-accesos/": "Control de accesos",
  "/personal-eventos/": "Eventos",
  "/control-accesos-locales/": "Locales",
  "/personal-auxiliar-empresas/": "Empresas",
  "/preguntas-frecuentes/": "Preguntas frecuentes",
  "/control-accesos-vs-vigilante-seguridad/": "Controlador vs vigilante",
  "/presupuesto/": "Presupuesto",
};

function originLabel(path: string): string {
  return ORIGIN_LABELS[path] ?? "Web";
}

/** Control básico de envíos repetidos por IP (memoria del proceso). */
const submissions = new Map<string, number[]>();
const WINDOW_MS = 10 * 60 * 1000;
const MAX_PER_WINDOW = 3;

function isRateLimited(key: string): boolean {
  const now = Date.now();
  const recent = (submissions.get(key) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_PER_WINDOW) {
    submissions.set(key, recent);
    return true;
  }
  recent.push(now);
  submissions.set(key, recent);
  return false;
}

function clean(value: FormDataEntryValue | null, max = 500): string {
  return typeof value === "string" ? value.trim().slice(0, max) : "";
}

function formatDate(iso: string): string {
  const [year, month, day] = iso.split("-");
  if (!year || !month || !day) return iso;
  return `${day}/${month}/${year}`;
}

export async function submitBudgetRequest(
  _prevState: BudgetState,
  formData: FormData,
): Promise<BudgetState> {
  // Honeypot: si viene relleno es un bot. Devolvemos éxito silencioso.
  if (clean(formData.get("web"))) {
    return { status: "success" };
  }

  const nombre = clean(formData.get("nombre"), 120);
  const empresa = clean(formData.get("empresa"), 120);
  const telefono = clean(formData.get("telefono"), 40);
  const fecha = clean(formData.get("fecha"), 20);
  const comentario = clean(formData.get("comentario"), 2000);
  const origen = clean(formData.get("origen"), 200) || "/presupuesto/";
  const ctaOrigen = clean(formData.get("cta"), 80) || "directo";

  const fieldErrors: BudgetState["fieldErrors"] = {};
  if (nombre.length < 2) fieldErrors.nombre = "Indícanos tu nombre.";
  if (telefono.replace(/\D/g, "").length < 9) {
    fieldErrors.telefono = "Necesitamos un teléfono válido para llamarte.";
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(fecha)) {
    fieldErrors.fecha = "Indica la fecha del servicio.";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return {
      status: "error",
      message: "Revisa los campos marcados.",
      fieldErrors,
    };
  }

  const headerList = await headers();
  const ip =
    headerList.get("x-forwarded-for")?.split(",")[0]?.trim() ?? "desconocida";

  if (isRateLimited(ip)) {
    return {
      status: "error",
      message:
        "Ya hemos recibido varias solicitudes desde aquí. Si es urgente, llámanos o escríbenos por WhatsApp.",
    };
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEADS_EMAIL;
  const from = process.env.FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.error(
      "[GaliControl] Faltan variables de entorno: RESEND_API_KEY, LEADS_EMAIL o FROM_EMAIL. Revisa .env.example.",
    );
    return {
      status: "error",
      message:
        "Ahora mismo no podemos enviar el formulario. Llámanos o escríbenos por WhatsApp y te atendemos.",
    };
  }

  const enviadoEl = new Date().toLocaleString("es-ES", {
    timeZone: "Europe/Madrid",
  });

  const subject = `[WEB GALICONTROL] Solicitud desde ${originLabel(origen)} – ${formatDate(fecha)}`;

  const lines = [
    `Nombre: ${nombre}`,
    `Empresa: ${empresa || "(no indicada)"}`,
    `Teléfono: ${telefono}`,
    `Fecha del servicio: ${formatDate(fecha)}`,
    "",
    "Comentario:",
    comentario || "(sin comentario)",
    "",
    "---",
    `Página de origen: ${site.url}${origen}`,
    `CTA pulsado: ${ctaOrigen}`,
    `Fecha/hora de envío: ${enviadoEl}`,
  ];

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [to],
        subject,
        text: lines.join("\n"),
      }),
    });

    if (!response.ok) {
      const detail = await response.text();
      console.error("[GaliControl] Resend respondió con error:", detail);
      return {
        status: "error",
        message:
          "No hemos podido enviar la solicitud. Inténtalo de nuevo o llámanos directamente.",
      };
    }
  } catch (error) {
    console.error("[GaliControl] Error enviando el formulario:", error);
    return {
      status: "error",
      message:
        "No hemos podido enviar la solicitud. Inténtalo de nuevo o llámanos directamente.",
    };
  }

  return { status: "success" };
}
