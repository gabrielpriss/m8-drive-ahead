import { SectionHeader } from "./SectionHeader";
import { PrimaryCTA } from "./Buttons";
import { whatsappLink } from "@/lib/whatsapp";
import imgAuto from "@/assets/pneus/automoveis.jpeg";
import imgSuv from "@/assets/pneus/4x4.jpeg";
import imgUtil from "@/assets/pneus/utilitarios.jpeg";
import imgCam from "@/assets/pneus/caminhoes.jpeg";

const CATS = [
  {
    title: "Alto giro",
    subtitle: "Medidas mais vendidas",
    text: "As medidas com maior saída disponíveis à pronta entrega para sua revenda.",
    badge: "Automóveis",
    badgeColor: "var(--m8-blue)",
    img: imgAuto,
  },
  {
    title: "SUV e crossover",
    subtitle: "Linhas com maior demanda",
    text: "Pneus para SUVs e crossovers com excelente giro e procura no mercado.",
    badge: "SUV / 4x4",
    badgeColor: "var(--m8-green)",
    img: imgSuv,
  },
  {
    title: "Linha comercial",
    subtitle: "Utilitários e vans",
    text: "Resistência e durabilidade para uso comercial e carga leve.",
    badge: "Utilitários",
    badgeColor: "var(--m8-red)",
    img: imgUtil,
  },
  {
    title: "Pickups • Off road",
    subtitle: "Força e performance",
    text: "Opções para estrada, trabalho pesado e uso misto.",
    badge: "Caminhões",
    badgeColor: "var(--m8-blue)",
    img: imgCam,
  },
];

export function Products() {
  return (
    <section id="produtos" className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          eyebrow="Produtos"
          title="Estoque inteligente para sua revenda"
          subtitle="As categorias e medidas que mais vendem disponíveis à pronta entrega."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATS.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden border-chrome clip-chamfer hard-shadow"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                <span
                  className="absolute left-4 top-4 px-3 py-1 font-display text-[11px] uppercase tracking-[0.22em] text-white clip-chamfer-sm"
                  style={{ backgroundColor: c.badgeColor }}
                >
                  {c.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl uppercase italic text-white">{c.title}</h3>
                <p className="mt-1 font-display text-[11px] uppercase tracking-[0.22em] text-[var(--m8-green)]">
                  {c.subtitle}
                </p>
                <p className="mt-2 text-sm text-white/70">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <PrimaryCTA href={whatsappLink("produtos")} external>
            Falar com atendente
          </PrimaryCTA>
        </div>
      </div>
    </section>
  );
}