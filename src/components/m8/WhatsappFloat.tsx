import { WhatsAppIcon } from "./Logo";
import { whatsappLink } from "@/lib/whatsapp";

export function WhatsappFloat() {
  return (
    <a
      href={whatsappLink("sticky")}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com vendedor no WhatsApp"
      className="group fixed bottom-5 right-5 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[var(--m8-green)] text-white shadow-2xl animate-wpp-pulse"
    >
      <WhatsAppIcon className="h-7 w-7" />
      <span className="pointer-events-none absolute right-full mr-3 hidden whitespace-nowrap rounded-sm bg-black/90 px-3 py-1.5 font-display text-xs uppercase tracking-[0.18em] text-white opacity-0 transition group-hover:opacity-100 lg:inline-block">
        Falar com vendedor
      </span>
    </a>
  );
}