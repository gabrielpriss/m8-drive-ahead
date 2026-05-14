import { SectionHeader } from "./SectionHeader";
import { PrimaryCTA } from "./Buttons";
import { whatsappLink } from "@/lib/whatsapp";
import imgAuto from "@/assets/cat-automoveis.jpg";
import imgSuv from "@/assets/cat-suv.jpg";
import imgUtil from "@/assets/cat-utilitarios.jpg";
import imgCam from "@/assets/cat-caminhoes.jpg";

const CATS = [
  {
    title: "Automóveis",
    text: "Aro 13 ao 18 das principais marcas para o giro rápido da sua loja.",
    badge: "Automóveis",
    badgeColor: "var(--m8-blue)",
    img: imgAuto,
  },
  {
    title: "SUVs · Camionetes · Off Road",
    text: "Linhas H/T, A/T e M/T para SUVs, picapes e aventura.",
    badge: "SUV / 4x4",
    badgeColor: "var(--m8-green)",
    img: imgSuv,
  },
  {
    title: "Utilitários",
    text: "Vans, furgões e utilitários leves com sidewall reforçada.",
    badge: "Utilitários",
    badgeColor: "var(--m8-red)",
    img: imgUtil,
  },
  {
    title: "Caminhões (SC)",
    text: "Linha pesada para caminhão e ônibus, com margem para o lojista.",
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
          title="Pronta entrega em todas as linhas"
          subtitle="Estoque profundo das categorias que mais giram na sua loja."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {CATS.map((c) => (
            <article
              key={c.title}
              className="group relative overflow-hidden border-chrome clip-chamfer hard-shadow"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={c.img}
                  alt={c.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black/30" />
                <span
                  className="absolute left-4 top-4 px-3 py-1 font-display text-[11px] uppercase tracking-[0.22em] text-white clip-chamfer-sm"
                  style={{ backgroundColor: c.badgeColor }}
                >
                  {c.badge}
                </span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-xl uppercase italic text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-white/70">{c.text}</p>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <PrimaryCTA href={whatsappLink("produtos")} external>
            Pedir tabela completa
          </PrimaryCTA>
        </div>
      </div>
    </section>
  );
}