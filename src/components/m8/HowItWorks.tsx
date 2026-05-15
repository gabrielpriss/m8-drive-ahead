import { SectionHeader } from "./SectionHeader";
import { WhatsAppCTA, OutlineCTA } from "./Buttons";
import { whatsappLink } from "@/lib/whatsapp";

const REVENDA = [
  "Fale com nosso vendedor no WhatsApp",
  "Informe a cidade e os modelos que você precisa",
  "Receba a tabela exclusiva de atacado",
  "Faça seu primeiro pedido com pronta entrega",
];

const CONSUMIDOR = [
  "Mande a medida do pneu no WhatsApp",
  "Receba a cotação na hora",
  "Retire na loja ou agende a entrega",
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[var(--graphite)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          eyebrow="Como funciona"
          title="Como comprar com a M8"
          subtitle="Dois caminhos, mesma agilidade."
        />
        <div className="mt-12 grid gap-6 lg:grid-cols-[3fr_2fr]">
          {/* Revendedor — principal */}
          <div className="relative bg-[#0d0d0d] p-6 sm:p-8 clip-chamfer hard-shadow"
            style={{
              boxShadow:
                "inset 0 0 0 3px rgba(220,225,235,0.85), 0 12px 30px rgba(0,0,0,0.6)",
            }}
          >
            <span className="absolute -top-3 left-6 inline-block bg-[var(--m8-red)] px-3 py-1 font-display text-[10px] uppercase tracking-[0.28em] text-white clip-chamfer-sm">
              Principal
            </span>
            <h3 className="font-display text-xl uppercase italic text-white sm:text-2xl">
              Para revendedor (8+ pneus)
            </h3>
            <ol className="mt-6 flex flex-col gap-4">
              {REVENDA.map((s, i) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="font-display text-chrome text-3xl italic leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 font-display text-sm uppercase tracking-wide text-white sm:text-base">
                    {s}
                  </span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <WhatsAppCTA href={whatsappLink("como-funciona")}>
                Quero preço de atacado
              </WhatsAppCTA>
            </div>
          </div>

          {/* Consumidor — secundário */}
          <div className="relative border border-white/15 bg-[#0d0d0d]/70 p-6 sm:p-7 clip-chamfer">
            <h3 className="font-display text-lg uppercase italic text-white sm:text-xl">
              Para consumidor (1+ pneus)
            </h3>
            <ol className="mt-6 flex flex-col gap-4">
              {CONSUMIDOR.map((s, i) => (
                <li key={s} className="flex items-start gap-4">
                  <span className="font-display text-white/50 text-2xl italic leading-none">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="pt-1 text-sm text-white/80 sm:text-[15px]">{s}</span>
                </li>
              ))}
            </ol>
            <div className="mt-8">
              <OutlineCTA href={whatsappLink("consumidor-howitworks")} external>
                Quero cotar meu pneu
              </OutlineCTA>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}