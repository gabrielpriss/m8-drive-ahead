const STATS = [
  { value: "2.000+", label: "Pneus em estoque" },
  { value: "Mesmo dia", label: "Entrega na região" },
  { value: "700m²", label: "De barracão próprio" },
  { value: "8 pneus", label: "Pedido mínimo" },
];

export function Stats() {
  return (
    <section className="bg-[var(--graphite)] py-10 lg:py-14">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 lg:grid-cols-4 lg:gap-0 lg:px-8">
        {STATS.map((s, i) => (
          <div
            key={s.label}
            className={`flex flex-col items-center text-center lg:px-6 ${
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
            <div className="font-display text-chrome text-4xl uppercase italic sm:text-5xl">
              {s.value}
            </div>
            <div className="mt-2 font-display text-[12px] uppercase tracking-[0.22em] text-white/80">
              {s.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}