"use client";

import { useActionState, useEffect, useId } from "react";
import { useFormStatus } from "react-dom";
import { CheckCircle2 } from "lucide-react";

import { PhoneButton, WhatsappButton } from "@/components/ContactButtons";
import { submitBudgetRequest } from "@/app/presupuesto/actions";
import { trackCta } from "@/lib/analytics";
import { initialBudgetState } from "@/lib/budget";

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      disabled={pending}
      className="inline-flex min-h-14 w-full items-center justify-center rounded-xl bg-accent-500 px-6 text-base font-bold text-brand-950 transition-colors hover:bg-accent-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
    >
      {pending ? "Enviando…" : "Enviar solicitud"}
    </button>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} role="alert" className="mt-1.5 text-sm font-medium text-red-700">
      {message}
    </p>
  );
}

export function BudgetForm({
  origen,
  cta,
}: {
  origen: string;
  cta: string;
}) {
  const [state, formAction] = useActionState(
    submitBudgetRequest,
    initialBudgetState,
  );
  const ids = useId();

  const nombreId = `${ids}-nombre`;
  const empresaId = `${ids}-empresa`;
  const telefonoId = `${ids}-telefono`;
  const fechaId = `${ids}-fecha`;
  const comentarioId = `${ids}-comentario`;

  useEffect(() => {
    if (state.status === "success") {
      trackCta("budget_success", { pathname: "/presupuesto/", cta, origin: origen });
    }
  }, [state.status, cta, origen]);

  if (state.status === "success") {
    return (
      <div className="rounded-2xl border border-brand-200 bg-brand-50 p-7 lg:p-9">
        <CheckCircle2
          aria-hidden="true"
          className="h-10 w-10 text-[#0F7A6D]"
        />
        <h2 className="mt-4 text-2xl font-bold text-brand-900">
          Solicitud enviada
        </h2>
        <p className="mt-3 max-w-xl leading-relaxed text-ink-700">
          Dani ha recibido tus datos. Si necesitas hablar con nosotros ahora,
          también puedes llamar o escribir por WhatsApp.
        </p>
        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
          <PhoneButton cta="presupuesto_exito" size="lg" />
          <WhatsappButton cta="presupuesto_exito" size="lg" />
        </div>
      </div>
    );
  }

  const inputClass =
    "mt-1.5 block w-full rounded-xl border border-brand-200 bg-white px-4 py-3.5 text-base text-ink-900 placeholder:text-ink-500/70 focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-300";
  const labelClass = "block text-sm font-semibold text-brand-900";

  return (
    <form
      action={formAction}
      onSubmit={() =>
        trackCta("budget_submit", {
          pathname: "/presupuesto/",
          cta,
          origin: origen,
        })
      }
      className="rounded-2xl border border-brand-100 bg-white p-6 lg:p-8"
      noValidate
    >
      <input type="hidden" name="origen" value={origen} />
      <input type="hidden" name="cta" value={cta} />

      {/* Honeypot antispam: invisible para las personas. */}
      <div className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden">
        <label htmlFor={`${ids}-web`}>No rellenar este campo</label>
        <input
          id={`${ids}-web`}
          type="text"
          name="web"
          tabIndex={-1}
          autoComplete="off"
        />
      </div>

      {state.status === "error" && state.message ? (
        <p
          role="alert"
          className="mb-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-800"
        >
          {state.message}
        </p>
      ) : null}

      <div className="grid gap-5 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor={nombreId} className={labelClass}>
            Nombre <span className="text-red-700">*</span>
          </label>
          <input
            id={nombreId}
            name="nombre"
            type="text"
            required
            autoComplete="name"
            aria-describedby={
              state.fieldErrors?.nombre ? `${nombreId}-error` : undefined
            }
            aria-invalid={state.fieldErrors?.nombre ? true : undefined}
            className={inputClass}
            placeholder="Tu nombre"
          />
          <FieldError
            id={`${nombreId}-error`}
            message={state.fieldErrors?.nombre}
          />
        </div>

        <div>
          <label htmlFor={telefonoId} className={labelClass}>
            Teléfono <span className="text-red-700">*</span>
          </label>
          <input
            id={telefonoId}
            name="telefono"
            type="tel"
            required
            inputMode="tel"
            autoComplete="tel"
            aria-describedby={
              state.fieldErrors?.telefono ? `${telefonoId}-error` : undefined
            }
            aria-invalid={state.fieldErrors?.telefono ? true : undefined}
            className={inputClass}
            placeholder="600 000 000"
          />
          <FieldError
            id={`${telefonoId}-error`}
            message={state.fieldErrors?.telefono}
          />
        </div>

        <div>
          <label htmlFor={fechaId} className={labelClass}>
            Fecha del servicio <span className="text-red-700">*</span>
          </label>
          <input
            id={fechaId}
            name="fecha"
            type="date"
            required
            aria-describedby={
              state.fieldErrors?.fecha ? `${fechaId}-error` : undefined
            }
            aria-invalid={state.fieldErrors?.fecha ? true : undefined}
            className={inputClass}
          />
          <FieldError
            id={`${fechaId}-error`}
            message={state.fieldErrors?.fecha}
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={empresaId} className={labelClass}>
            Empresa{" "}
            <span className="font-normal text-ink-500">(opcional)</span>
          </label>
          <input
            id={empresaId}
            name="empresa"
            type="text"
            autoComplete="organization"
            className={inputClass}
            placeholder="Nombre del local, empresa u organización"
          />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor={comentarioId} className={labelClass}>
            Cuéntanos brevemente qué necesitas{" "}
            <span className="font-normal text-ink-500">(opcional)</span>
          </label>
          <textarea
            id={comentarioId}
            name="comentario"
            rows={4}
            className={inputClass}
            placeholder="Tipo de evento o local, localidad, horario, asistentes previstos…"
          />
        </div>
      </div>

      <div className="mt-7">
        <SubmitButton />
      </div>

      <p className="mt-4 text-xs leading-relaxed text-ink-500">
        Al enviar el formulario aceptas que tratemos tus datos para responder a
        tu solicitud. Puedes consultar cómo lo hacemos en la{" "}
        <a
          href="/privacidad/"
          className="font-semibold text-brand-600 underline underline-offset-2"
        >
          política de privacidad
        </a>
        .
      </p>
    </form>
  );
}
