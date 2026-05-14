import { WhatsAppCTA, OutlineCTA } from "./Buttons";
import { whatsappLink } from "@/lib/whatsapp";
import heroBg from "@/assets/hero-tires.jpg";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-black">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.85)), url(${heroBg})`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 carbon-texture opacity-[0.06]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <p className="mb-5 inline-block bg-[var(--m8-red)] px-3 py-1 font-display text-[11px] uppercase tracking-[0.25em] text-white clip-chamfer-sm">
          Distribuidor M8 · São José dos Pinhais/PR
        </p>
        <h1 className="font-display text-chrome text-[34px] leading-[0.95] sm:text-5xl lg:text-6xl xl:text-7xl uppercase max-w-5xl">
          2.000 pneus em estoque. Entrega no mesmo dia.
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
          Atacado a partir de 8 pneus, com estoque profundo em Curitiba e região.
          Atendimento direto com vendedor, sem bot e sem fila.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <WhatsAppCTA href={whatsappLink("hero")}>Falar agora no WhatsApp</WhatsAppCTA>
          <OutlineCTA href={whatsappLink("form")} external>
            Receber tabela de atacado
          </OutlineCTA>
        </div>
        <p className="mt-6 font-display text-[12px] uppercase tracking-[0.18em] text-white/70">
          <a
            href={whatsappLink("hero")}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
          >
            Sou revendedor (8+ pneus)
          </a>
          <span className="mx-3 text-white/30">·</span>
          <a
            href={whatsappLink("consumidor-hero")}
            target="_blank"
            rel="noopener noreferrer"
            className="underline decoration-white/30 underline-offset-4 hover:text-white hover:decoration-white"
          >
            Sou consumidor (quero comprar pneu)
          </a>
        </p>
      </div>

      {/* faixa diagonal das 3 cores */}
      <div className="relative h-8 w-full overflow-hidden" aria-hidden="true">
        <div className="absolute -left-10 top-0 h-full w-[120%] -skew-y-2 stripes-bgr opacity-90" />
      </div>
    </section>
  );
}