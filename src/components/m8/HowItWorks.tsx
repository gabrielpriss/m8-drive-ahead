import { SectionHeader } from "./SectionHeader";
import { PrimaryCTA } from "./Buttons";
import { whatsappLink } from "@/lib/whatsapp";

const STEPS = [
  "Fale com nosso vendedor no WhatsApp",
  "Envie seu CNPJ e cidade",
  "Receba a tabela exclusiva de atacado",
  "Faça seu primeiro pedido com pronta entrega",
];

export function HowItWorks() {
  return (
    <section id="como-funciona" className="bg-[var(--graphite)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader title="Como virar revendedor M8 em 4 passos" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => (
            <div
              key={step}
              className="relative flex flex-col gap-4 border-chrome bg-[#0d0d0d] p-6 clip-chamfer hard-shadow"
            >
              <div className="font-display text-chrome text-6xl italic leading-none">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="font-display text-base uppercase italic tracking-wide text-white">
                {step}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <PrimaryCTA href={whatsappLink("como-funciona")} external>
            Começar agora
          </PrimaryCTA>
        </div>
      </div>
    </section>
  );
}