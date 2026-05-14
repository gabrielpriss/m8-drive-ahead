import { Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";

const ITEMS = [
  {
    name: "Lojista parceiro",
    role: "Loja de pneus, Curitiba",
    since: "2022",
    color: "var(--m8-blue)",
    text: "Quando o grande distribuidor diz que tá sem, eu ligo na M8 e sai no mesmo dia. Não perco mais venda por falta de estoque.",
  },
  {
    name: "Borracharia parceira",
    role: "Borracharia, Campo Largo",
    since: "2021",
    color: "var(--m8-green)",
    text: "Atendimento direto com o vendedor, sem fila e sem rodeio. Pedido fechado no WhatsApp e nota saindo certinha.",
  },
  {
    name: "Auto Center parceiro",
    role: "Auto Center, Colombo",
    since: "2023",
    color: "var(--m8-red)",
    text: "Preço fechou e entrega chegou rápido. Hoje a M8 é o fornecedor que eu chamo primeiro pra repor estoque.",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[var(--graphite)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          title="Quem revende com a M8 não troca"
          subtitle="Clientes fiéis há mais de 3 anos."
        />
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {ITEMS.map((t) => (
            <article
              key={t.role}
              className="border-chrome bg-[#0d0d0d] p-6 clip-chamfer hard-shadow"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 font-display text-lg text-white">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <div className="font-display text-sm uppercase tracking-wider text-white">
                    {t.name}
                  </div>
                  <div className="text-xs text-white/60">{t.role}</div>
                </div>
              </div>
              <span
                className="mt-4 inline-block px-2.5 py-1 font-display text-[10px] uppercase tracking-[0.22em] text-white clip-chamfer-sm"
                style={{ backgroundColor: t.color }}
              >
                Cliente desde {t.since}
              </span>
              <p className="mt-4 text-sm text-white/80">{t.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="flex gap-1" aria-label="5 estrelas">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[var(--m8-red)] text-[var(--m8-red)]" />
            ))}
          </div>
          <a
            href="https://www.google.com/business"
            target="_blank"
            rel="noopener noreferrer"
            className="font-display text-xs uppercase tracking-[0.22em] text-white/80 hover:text-white"
          >
            Ver avaliações no Google Meu Negócio
          </a>
        </div>
      </div>
    </section>
  );
}