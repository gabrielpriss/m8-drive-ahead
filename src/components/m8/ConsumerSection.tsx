import { WhatsAppCTA } from "./Buttons";
import { whatsappLink } from "@/lib/whatsapp";

export function ConsumerSection() {
  return (
    <section className="bg-[var(--graphite)] py-10 lg:py-14">
      <div className="mx-auto max-w-5xl px-4 lg:px-8">
        <div className="flex flex-col items-start gap-5 border-l-[3px] border-l-[var(--m8-green)] bg-[#0d0d0d] p-6 sm:p-8 clip-chamfer-sm hard-shadow lg:flex-row lg:items-center lg:justify-between">
          <div className="max-w-2xl">
            <h3 className="font-display text-2xl uppercase italic text-white sm:text-3xl">
              Precisa de pneu para o seu carro?
            </h3>
            <p className="mt-3 text-sm text-white/75 sm:text-base">
              Também vendemos para consumidor final. Pneu novo, nota fiscal e
              garantia de fábrica. Mande a medida do seu pneu no WhatsApp e a gente
              cota na hora.
            </p>
          </div>
          <WhatsAppCTA href={whatsappLink("consumidor-section")}>
            Cotar meu pneu agora
          </WhatsAppCTA>
        </div>
      </div>
    </section>
  );
}