import { Truck, PackageCheck, Warehouse, Award } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    icon: PackageCheck,
    color: "var(--m8-blue)",
    title: "O pneu que você precisa está aqui na M8!",
    text: "Variedade, disponibilidade e condições especiais para você comprar com segurança.",
  },
  {
    icon: Truck,
    color: "var(--m8-green)",
    title: "Entrega rápida",
    text: "Seu pedido com mais velocidade e menos espera. (Curitiba e Região Metropolitana)",
  },
  {
    icon: Warehouse,
    color: "var(--m8-red)",
    title: "Estrutura própria",
    text: "Espaço preparado para garantir agilidade, estoque e atendimento de qualidade.",
  },
  {
    icon: Award,
    color: "var(--m8-blue)",
    title: "As principais marcas em um só lugar",
    text: "Qualidade, variedade e as melhores opções para você comprar com confiança.",
  },
];

export function Differentials() {
  return (
    <section id="diferenciais" className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          eyebrow="Diferenciais"
          title="Estoque, preço e entrega rápida"
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