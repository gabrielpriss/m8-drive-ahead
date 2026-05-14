import { WhatsAppCTA, OutlineCTA } from "./Buttons";
import { whatsappLink } from "@/lib/whatsapp";

export function Hero() {
  return (
    <section id="top" className="relative isolate overflow-hidden bg-black">
      {/* Placeholder: substituir por foto real do barracão da M8 */}
      <div
        className="absolute inset-0 -z-10 bg-cover bg-center"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.85)), url('https://images.unsplash.com/photo-1487754180451-c456f719a1fc?w=1600&q=70&auto=format')",
        }}
        aria-hidden="true"
      />
      <div className="absolute inset-0 -z-10 carbon-texture opacity-[0.06]" aria-hidden="true" />

      <div className="mx-auto max-w-7xl px-4 pb-20 pt-14 sm:pt-20 lg:px-8 lg:pb-28 lg:pt-28">
        <p className="mb-5 inline-block bg-[var(--m8-red)] px-3 py-1 font-display text-[11px] uppercase tracking-[0.25em] text-white clip-chamfer-sm">
          Distribuidor M8 · São José dos Pinhais/PR
        </p>
        <h1 className="font-display text-chrome text-[40px] leading-[0.95] sm:text-6xl lg:text-7xl xl:text-8xl uppercase max-w-5xl">
          Pneu pronto pra entregar quando o distribuidor grande disse que acabou
        </h1>
        <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
          Atacado a partir de 8 pneus, com estoque profundo em Curitiba e região.
          Atendimento direto com vendedor, sem bot e sem fila.
        </p>
        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
          <WhatsAppCTA href={whatsappLink("hero")}>Falar agora no WhatsApp</WhatsAppCTA>
          <OutlineCTA href="#cadastro">Receber tabela de atacado</OutlineCTA>
        </div>
      </div>

      {/* faixa diagonal das 3 cores */}
      <div className="relative h-8 w-full overflow-hidden" aria-hidden="true">
        <div className="absolute -left-10 top-0 h-full w-[120%] -skew-y-2 stripes-bgr opacity-90" />
      </div>
    </section>
  );
}