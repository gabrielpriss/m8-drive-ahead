import { SectionHeader } from "./SectionHeader";
import { PrimaryCTA } from "./Buttons";
import { whatsappLink } from "@/lib/whatsapp";

const CATS = [
  {
    title: "Linha carro e caminhonete",
    text: "Aro 13 ao 20 das principais marcas para giro rápido.",
    badge: "Carro",
    badgeColor: "var(--m8-blue)",
    img: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&q=70&auto=format",
  },
  {
    title: "Linha de carga e comercial",
    text: "Vans, utilitários e frotas com condições por volume.",
    badge: "Carga",
    badgeColor: "var(--m8-green)",
    img: "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=900&q=70&auto=format",
  },
  {
    title: "Linha pesada e caminhão",
    text: "Pneus de caminhão e ônibus com margem para o lojista.",
    badge: "Pesada",
    badgeColor: "var(--m8-red)",
    img: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=70&auto=format",
  },
];

export function Products() {
  return (
    <section id="produtos" className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Linhas em pronta entrega"
          subtitle="Estoque profundo das categorias que mais giram na sua loja."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
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