import { Warehouse, Truck, ShieldCheck } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const TAGS = [
  "Lojas de pneus",
  "Borracharias",
  "Auto centers",
  "Mecânicas e oficinas",
  "Frotistas e transportadoras",
  "Revendedores autônomos",
];

const COLORS = ["var(--m8-blue)", "var(--m8-green)", "var(--m8-red)"];

const CARDS = [
  {
    icon: Warehouse,
    title: "Barracão de 700m²",
    text: "Estoque organizado e seguro em São José dos Pinhais.",
    color: "var(--m8-blue)",
  },
  {
    icon: Truck,
    title: "Frota própria",
    text: "Entrega rápida em Curitiba, Campo Largo, Colombo e região.",
    color: "var(--m8-green)",
  },
  {
    icon: ShieldCheck,
    title: "Operação segura",
    text: "Conferência por nota e rastreabilidade do pedido.",
    color: "var(--m8-red)",
  },
];

export function ForWhom() {
  return (
    <section className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Para quem vende pneu"
          subtitle="A M8 é parceira de quem revende. Atendemos exclusivamente quem compra a partir de 8 pneus, com preço e prazo de distribuidor."
        />
        <div className="mt-10 flex flex-wrap gap-3">
          {TAGS.map((t, i) => (
            <span
              key={t}
              className="skew-tag inline-block bg-black px-4 py-2"
              style={{
                border: `1.5px solid ${COLORS[i % COLORS.length]}`,
              }}
            >
              <span className="font-display text-xs uppercase tracking-[0.18em] text-white">
                {t}
              </span>
            </span>
          ))}
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {CARDS.map((c) => (
            <div key={c.title} className="border-chrome p-6 clip-chamfer hard-shadow">
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center clip-chamfer-sm"
                style={{ backgroundColor: c.color }}
              >
                <c.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-lg uppercase italic text-white">{c.title}</h3>
              <p className="mt-2 text-sm text-white/70">{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}