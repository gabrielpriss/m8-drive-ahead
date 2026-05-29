const STATS = [
  {
    title: "O pneu que você precisa está aqui na M8",
    text: "Variedade, disponibilidade e condições especiais para você comprar com segurança.",
  },
  {
    title: "Entrega rápida",
    text: "Seu pedido com mais velocidade e menos espera. (Curitiba e Região Metropolitana)",
  },
  {
    title: "Estrutura própria",
    text: "Espaço preparado para garantir agilidade, estoque e atendimento de qualidade.",
  },
  {
    title: "As principais marcas em um só lugar",
    text: "Qualidade, variedade e as melhores opções para você comprar com confiança.",
  },
];

export function Stats() {
  return (
    <section className="bg-[var(--graphite)] py-10 lg:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-y-8 px-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-0 lg:px-8">
        {STATS.map((s, i) => (
          <div
            key={s.title}
            className={`flex h-full flex-col items-center justify-start text-center lg:px-6 ${
              i < STATS.length - 1 ? "lg:border-r" : ""
            }`}
            style={
              i < STATS.length - 1
                ? {
                    borderImage:
                      "linear-gradient(180deg, var(--m8-blue), var(--m8-green), var(--m8-red)) 1",
                  }
                : undefined
            }
          >
            <h3 className="font-display text-chrome text-lg uppercase italic leading-tight sm:text-xl">
              {s.title}
            </h3>
            <p className="mt-3 max-w-[28ch] text-sm leading-relaxed text-white/75">
              {s.text}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
