import { SectionHeader } from "./SectionHeader";

const TAGS = [
  "Lojas de pneus",
  "Borracharias",
  "Auto centers",
  "Oficinas mecânicas",
  "Frotistas",
  "Revendedores",
];

const COLORS = ["var(--m8-blue)", "var(--m8-green)", "var(--m8-red)"];

export function ForWhom() {
  return (
    <section id="para-quem" className="bg-black py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          level={2}
          title="M8, seu parceiro em pneus"
          subtitle="Pronta entrega, negociação rápida e condições comerciais para sua loja atender o cliente sem demora."
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
        <p className="mt-8 max-w-3xl text-sm text-white/75 sm:text-base">
          Não tem loja mas precisa de pneus para seu veículo? Também atendemos
          consumidor final com entrega rápida e garantia de fábrica.
        </p>
      </div>
    </section>
  );
}
