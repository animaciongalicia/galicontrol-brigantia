/**
 * Tipos y estado inicial del formulario de presupuesto.
 * Vive fuera del archivo "use server" porque un módulo de Server Actions
 * solo puede exportar funciones asíncronas.
 */
export type BudgetState = {
  status: "idle" | "error" | "success";
  message?: string;
  fieldErrors?: Partial<Record<"nombre" | "telefono" | "fecha", string>>;
};

export const initialBudgetState: BudgetState = { status: "idle" };
