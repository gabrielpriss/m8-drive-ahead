import { WhatsAppCTA } from "./Buttons";
import { whatsappLink } from "@/lib/whatsapp";
import heroBg from "@/assets/banner-principal.png";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-black">
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.6)), url(${heroBg})`,
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 carbon-texture opacity-[0.06]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <p className="mb-5 inline-block bg-[var(--m8-red)] px-3 py-1 font-display text-[11px] uppercase tracking-[0.25em] text-white clip-chamfer-sm">
          Distribuidor M8 · São José dos Pinhais/PR
        </p>
        <h1 className="font-display text-chrome text-[34px] leading-[0.95] sm:text-5xl lg:text-6xl xl:text-7xl uppercase max-w-5xl">
          Pneus em atacado{" "}
          <span className="mt-2 block text-[18px] leading-tight sm:text-2xl lg:text-3xl xl:text-4xl">
            à pronta entrega em Curitiba e região.
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
          Grande variedade de pneus à pronta entrega, condições especiais para
          atacado e agilidade no atendimento. Fale direto com nossos vendedores.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <WhatsAppCTA href={whatsappLink("hero")}>Falar agora no WhatsApp</WhatsAppCTA>
        </div>
      </div>

      {/* faixa diagonal das 3 cores */}
      <div className="relative h-8 w-full overflow-hidden" aria-hidden="true">
        <div className="absolute -left-10 top-0 h-full w-[120%] -skew-y-2 stripes-bgr opacity-90" />
      </div>
    </section>
  );
}