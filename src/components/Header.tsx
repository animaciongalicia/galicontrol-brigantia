import { LogoLink } from "@/components/Logo";
import { PhoneButton, WhatsappButton } from "@/components/ContactButtons";
import { DesktopNav } from "@/components/NavLinks";
import { MobileNav } from "@/components/MobileNav";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-100 bg-white">
      <div className="container-page flex h-[72px] items-center justify-between gap-4">
        <LogoLink />

        <DesktopNav />

        <div className="hidden items-center gap-2 xl:flex">
          <PhoneButton cta="header" size="sm" />
          <WhatsappButton cta="header" size="sm" />
        </div>

        <MobileNav />
      </div>
    </header>
  );
}
