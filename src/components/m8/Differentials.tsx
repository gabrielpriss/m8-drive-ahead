import { Truck, PackageCheck, Headset, Wallet } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    icon: PackageCheck,
    color: "var(--m8-blue)",
    title: "Pronta entrega quando o grande esgotou",
    text: "Estoque profundo de 2.000 pneus em barracão próprio. Quando faltou no fornecedor do seu fornecedor, tem aqui.",
  },
  {
    icon: Wallet,
    color: "var(--m8-green)",
    title: "Preço de distribuidor, sem atravessador",
    text: "Compramos em volume e repassamos a margem pra sua loja.",
  },
  {
    icon: Headset,
    color: "var(--m8-red)",
    title: "Vendedor dedicado, sem bot",
    text: "Atendimento humano por WhatsApp único. Sem fila, sem chatbot, sem URA.",
  },
  {
    icon: Truck,
    color: "var(--m8-blue)",
    title: "Frota própria em Curitiba e região",
    text: "Entrega no mesmo dia em Curitiba, São José, Campo Largo e Colombo.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Por que lojistas escolhem a M8"
          subtitle="Estrutura própria, estoque profundo e agilidade para sua loja não perder venda."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ITEMS.map((item) => (
            <div
              key={item.title}
              className="group relative border-chrome p-6 clip-chamfer hard-shadow transition-transform hover:-translate-y-1"
            >
              <div
                className="mb-5 inline-flex h-12 w-12 items-center justify-center clip-chamfer-sm"
                style={{ backgroundColor: item.color }}
              >
                <item.icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-display text-lg uppercase italic leading-tight text-white">
                {item.title}
              </h3>
              <p className="mt-3 text-sm text-white/70">{item.text}</p>
              <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                <div className="absolute inset-y-0 -left-1/3 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/10 to-transparent transition-all group-hover:translate-x-[400%] duration-700" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}