import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { M8Logo, WhatsAppIcon } from "./Logo";
import { whatsappLink } from "@/lib/whatsapp";

const NAV = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#como-funciona", label: "Como funciona" },
  { href: "#produtos", label: "Produtos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
  { href: "#cadastro", label: "Cadastro" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    NAV.forEach(({ href }) => {
      const el = document.querySelector(href);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([e]) => {
          if (e.isIntersecting) setActive(href);
        },
        { rootMargin: "-40% 0px -55% 0px" },
      );
      obs.observe(el);
      observers.push(obs);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, []);

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur supports-[backdrop-filter]:bg-black/80">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
        <a href="#top" className="flex items-center">
          <M8Logo />
        </a>
        <nav className="hidden items-center gap-6 lg:flex">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative font-display text-[13px] uppercase tracking-[0.18em] text-white/85 transition hover:text-white"
            >
              {item.label}
              {active === item.href && (
                <span className="absolute -bottom-2 left-0 h-[2px] w-full bg-[var(--m8-red)]" />
              )}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href={whatsappLink("header")}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-2 bg-[var(--m8-green)] px-4 py-2.5 font-display uppercase tracking-[0.15em] text-sm text-white clip-chamfer-sm btn-shine sm:inline-flex"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span>WhatsApp Atacado</span>
          </a>
          <button
            aria-label="Abrir menu"
            onClick={() => setOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center text-white lg:hidden"
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
      </div>
      <div className="stripes-divider" />

      {/* mobile slide-in */}
      <div
        className={`fixed inset-0 z-50 bg-black/70 transition-opacity lg:hidden ${
          open ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
        onClick={() => setOpen(false)}
      >
        <aside
          onClick={(e) => e.stopPropagation()}
          className={`absolute right-0 top-0 flex h-full w-[82%] max-w-sm flex-col bg-black transition-transform ${
            open ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="stripes-divider" />
          <div className="flex items-center justify-between p-4">
            <M8Logo />
            <button
              aria-label="Fechar menu"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center text-white"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <nav className="flex flex-col gap-1 px-4">
            {NAV.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="border-b border-white/10 py-4 font-display text-base uppercase tracking-[0.2em] text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-auto p-4">
            <a
              href={whatsappLink("header")}
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-full items-center justify-center gap-2 bg-[var(--m8-green)] px-4 py-4 font-display uppercase tracking-[0.18em] text-white clip-chamfer-sm"
            >
              <WhatsAppIcon className="h-5 w-5" />
              WhatsApp Atacado
            </a>
          </div>
        </aside>
      </div>
    </header>
  );
}