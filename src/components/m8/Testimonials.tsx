import { Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const REVIEWS = [
  {
    name: "Anselmo Bortoto",
    badge: "Local Guide",
    color: "var(--m8-blue)",
    initials: "AB",
    time: "4 meses atrás",
    text: "Ótimo preço, atendimento top, desde o primeiro contato para orçamento até o serviço a maior e melhor definição de profissionalismo",
  },
  {
    name: "Heliel Lucas",
    badge: "Cliente Google",
    color: "var(--m8-green)",
    initials: "HL",
    time: "4 meses atrás",
    text: "Excelente atendimento, produtos de alta qualidade com preço acessivel, tomei até café enquanto comprava pneu",
  },
  {
    name: "Carlos K",
    badge: "Local Guide",
    color: "var(--m8-red)",
    initials: "CK",
    time: "2 meses atrás",
    text: "Pessoal simpático, preços bons, atendimento ágil.",
  },
  {
    name: "Gustavo Bruno",
    badge: "Cliente Google",
    color: "var(--m8-blue)",
    initials: "GB",
    time: "4 meses atrás",
    text: "Recentemente, adquiri um jogo de pneus na referida loja e fiquei impressionado com a competitividade dos preços oferecidos, que, após pesquisa de mercado, constatei serem os melhores da cidade. Além do excelente custo-benefício...",
  },
  {
    name: "Eduardo Klinguerffuss",
    badge: "Cliente Google",
    color: "var(--m8-green)",
    initials: "EK",
    time: "4 meses atrás",
    text: "Ótimo atendimento! Empresa top!",
  },
  {
    name: "Black Power",
    badge: "Local Guide",
    color: "var(--m8-red)",
    initials: "BP",
    time: "um ano atrás",
    text: "Ótimo atendimento! pneus de qualidade, recomendo 😀",
  },
  {
    name: "Valdinei Martins",
    badge: "Cliente Google",
    color: "var(--m8-blue)",
    initials: "VM",
    time: "2 anos atrás",
    text: "Ótimo atendimento, honestidade nos preços e excelente serviço",
  },
  {
    name: "Thomaz Toledo",
    badge: "Local Guide",
    color: "var(--m8-green)",
    initials: "TT",
    time: "um ano atrás",
    text: "Preço e atendimento muito bons",
  },
  {
    name: "Marcelo Batista",
    badge: "Cliente Google",
    color: "var(--m8-red)",
    initials: "MB",
    time: "2 anos atrás",
    text: "Excelente atendimento! Super recomendo!!",
  },
  {
    name: "Deu Ruim RMC",
    badge: "Cliente Google",
    color: "var(--m8-blue)",
    initials: "DR",
    time: "10 meses atrás",
    text: "Nota 10",
  },
  {
    name: "LEE Dacoreggio",
    badge: "Local Guide",
    color: "var(--m8-green)",
    initials: "LD",
    time: "4 meses atrás",
    text: "Ótimo",
  },
];

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[var(--graphite)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          level={2}
          title="Quem compra na M8, continua com a M8"
          subtitle="Clientes que valorizam estoque, agilidade e atendimento rápido."
        />
        <div className="mt-12">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {REVIEWS.map((r) => (
                <CarouselItem key={r.name} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <article className="border-chrome bg-[#0d0d0d] p-6 clip-chamfer hard-shadow h-full flex flex-col">
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full font-display font-bold text-sm text-white"
                        style={{ backgroundColor: r.color }}
                      >
                        {r.initials}
                      </div>
                      <div>
                        <div className="font-display text-sm uppercase tracking-wider text-white">
                          {r.name}
                        </div>
                        <div className="text-xs text-white/60">{r.badge}</div>
                      </div>
                    </div>
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex gap-0.5" aria-label="5 estrelas">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            className="h-3.5 w-3.5 fill-[var(--m8-red)] text-[var(--m8-red)]"
                          />
                        ))}
                      </div>
                      <span
                        className="px-2 py-0.5 font-display text-[10px] uppercase tracking-[0.18em] text-white clip-chamfer-sm"
                        style={{ backgroundColor: r.color }}
                      >
                        {r.time}
                      </span>
                    </div>
                    <p className="mt-4 text-sm text-white/80 flex-1">{r.text}</p>
                  </article>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2 border-white/20 bg-black/80 text-white hover:bg-black hover:text-white" />
            <CarouselNext className="right-0 translate-x-1/2 border-white/20 bg-black/80 text-white hover:bg-black hover:text-white" />
          </Carousel>
        </div>
        <div className="mt-10 flex flex-col items-center gap-2">
          <div className="flex gap-1" aria-label="5 estrelas">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-[var(--m8-red)] text-[var(--m8-red)]" />
            ))}
          </div>
          <a
            href="https://share.google/5QdQx03mrLid7Wl49"
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
