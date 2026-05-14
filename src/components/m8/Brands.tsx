import { SectionHeader } from "./SectionHeader";

// Logos reais serão fornecidos pelo cliente.
const BRANDS = [
  "Continental",
  "Hankook",
  "Pirelli",
  "Michelin",
  "Goodyear",
  "Bridgestone",
  "Firestone",
  "Dunlop",
];

export function Brands() {
  return (
    <section id="marcas" className="bg-[var(--graphite)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          level={2}
          title="Marcas em estoque"
          subtitle="Trabalhamos com as marcas mais buscadas pelo seu cliente."
        />
        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {BRANDS.map((b) => (
            <div
              key={b}
              className="flex h-24 items-center justify-center bg-[#0d0d0d] border-chrome-dark clip-chamfer-sm"
            >
              <span className="font-display text-base uppercase tracking-[0.2em] text-white/55">
                {b}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}