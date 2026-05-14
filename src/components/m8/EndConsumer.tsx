export function EndConsumer() {
  return (
    <section className="bg-black py-6">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 sm:flex-row lg:px-8">
        <p className="text-sm text-white/70">
          É consumidor final? Fale com uma loja parceira da M8 perto de você.
        </p>
        <a
          href="#marcas"
          className="inline-flex items-center justify-center px-4 py-2 font-display text-xs uppercase tracking-[0.2em] text-white clip-chamfer-sm border-chrome-dark"
        >
          Ver lojas parceiras
        </a>
      </div>
    </section>
  );
}