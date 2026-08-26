import { PhoneButton, WhatsappButton } from "@/components/ContactButtons";

/** Barra fija inferior en móvil: llamar y WhatsApp siempre disponibles. */
export function MobileCtaBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-brand-100 bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_-2px_10px_rgba(11,44,66,0.08)] lg:hidden">
      <div className="grid grid-cols-2 gap-2 px-3 py-2">
        <PhoneButton cta="barra_movil" size="md" variant="bar" />
        <WhatsappButton cta="barra_movil" size="md" variant="bar" />
      </div>
    </div>
  );
}
