import { useState } from "react";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    q: "Qual o pedido mínimo?",
    a: "A partir de 8 pneus por pedido.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "Boleto, PIX e prazo para clientes cadastrados.",
  },
  {
    q: "Vocês emitem nota fiscal?",
    a: "Sim, todo pedido sai com NF-e.",
  },
  {
    q: "Qual a região de entrega?",
    a: "Curitiba, São José dos Pinhais, Campo Largo, Colombo e região metropolitana.",
  },
  {
    q: "Quanto tempo leva a entrega?",
    a: "Pedidos confirmados até 12h saem no mesmo dia para a região metropolitana.",
  },
  {
    q: "Como funciona a garantia?",
    a: "Garantia de fábrica direto com a marca, com suporte da M8 no processo.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section id="faq" className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-3xl px-4 lg:px-8">
        <SectionHeader title="Dúvidas frequentes de revendedor" />
        <div className="mt-10 flex flex-col gap-3">
          {ITEMS.map((item, i) => {
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
                {active && <p className="px-5 pb-5 text-sm text-white/75">{item.a}</p>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}