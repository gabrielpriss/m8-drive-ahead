import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import { FAQ_ITEMS } from "@/lib/faq";

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionHeader level={2} title="Dúvidas frequentes" />
        <div className="mt-10 flex flex-col gap-3">
          {FAQ_ITEMS.map((item, i) => {
            const active = open === i;
            return (
              <div
                key={item.q}
                className={`border-l-[3px] transition-colors ${
                  active
                    ? "border-l-[var(--m8-red)] bg-[var(--graphite)]"
                    : "border-l-white/15 bg-[#0d0d0d]"
                }`}
              >
                <button
                  onClick={() => setOpen(active ? null : i)}
                  className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
                  aria-expanded={active}
                >
                  <span className="font-display text-sm uppercase tracking-wide text-white sm:text-base">
                    {item.q}
                  </span>
                  {active ? (
                    <Minus className="h-5 w-5 shrink-0 text-[var(--m8-red)]" />
                  ) : (
                    <Plus className="h-5 w-5 shrink-0 text-white/70" />
                  )}
                </button>
                {/* Sempre no DOM (apenas oculto) para o FAQPage do JSON-LD bater com a página. */}
                <p className="px-5 pb-5 text-sm text-white/75" hidden={!active}>
                  {item.a}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}