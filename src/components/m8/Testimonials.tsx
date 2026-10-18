import { useState } from "react";
import { Star } from "lucide-react";
import { SectionHeader } from "./SectionHeader";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import googleLogo from "@/assets/download.png";
import dados from "@/data/avaliacoes.json";

// Avaliações reais do perfil no Google. As fotos de perfil são baixadas do Google
// para public/avaliacoes/ pelo workflow "Fotos das avaliações" (scripts/baixar-fotos-avaliacoes.py).
// Regra: nunca colocar link para as avaliações no Google, para o visitante não sair do site.

type Avaliacao = (typeof dados.avaliacoes)[number];

const LIMITE = 180;

function Estrelas({ tamanho = "h-4 w-4" }: { tamanho?: string }) {
  return (
    <div className="flex gap-0.5" role="img" aria-label="5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} className={`${tamanho} fill-[#FBBC04] text-[#FBBC04]`} aria-hidden="true" />
      ))}
    </div>
  );
}

function Cartao({ a }: { a: Avaliacao }) {
  const [aberto, setAberto] = useState(false);
  const longo = a.texto.length > LIMITE;
  const texto = longo && !aberto ? a.texto.slice(0, a.texto.lastIndexOf(" ", LIMITE)) + "…" : a.texto;

  return (
    <article className="bg-white rounded-xl p-6 shadow-md h-full flex flex-col">
      <div className="flex items-center justify-between gap-3 mb-3">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src={`/avaliacoes/${a.id}.webp`}
            alt={`Foto de ${a.nome}`}
            width={40}
            height={40}
            loading="lazy"
            decoding="async"
            className="h-10 w-10 flex-shrink-0 rounded-full object-cover bg-gray-100"
          />
          <div className="min-w-0">
            <div className="font-semibold text-sm text-gray-900 truncate">{a.nome}</div>
            <div className="text-xs text-gray-500">{a.selo}</div>
          </div>
        </div>
        <img
          src={googleLogo}
          alt="Google"
          width={68}
          height={24}
          loading="lazy"
          decoding="async"
          className="h-6 w-auto flex-shrink-0 opacity-80"
        />
      </div>
      <div className="flex items-center gap-2 mb-3">
        <Estrelas />
        <span className="text-xs text-gray-500">{a.quando}</span>
      </div>
      <p className="text-sm text-gray-700 flex-1 leading-relaxed">{texto}</p>
      {longo && (
        <button
          type="button"
          onClick={() => setAberto((v) => !v)}
          className="mt-3 self-start text-xs font-semibold text-[var(--m8-blue)] hover:underline"
          aria-expanded={aberto}
        >
          {aberto ? "Ler menos" : "Leia mais"}
        </button>
      )}
    </article>
  );
}

export function Testimonials() {
  return (
    <section id="depoimentos" className="bg-[var(--graphite)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          level={2}
          title="Quem compra na M8, continua com a M8"
          subtitle="Clientes que valorizam estoque, agilidade e atendimento rápido."
        />

        <div className="mt-10 flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-5">
          <img
            src={googleLogo}
            alt="Google"
            width={102}
            height={36}
            loading="lazy"
            decoding="async"
            className="h-9 w-auto rounded bg-white px-2 py-1"
          />
          <div className="flex items-center gap-3">
            <span className="font-display text-3xl font-bold text-white">{dados.nota}</span>
            <div className="flex flex-col gap-1">
              <Estrelas tamanho="h-5 w-5" />
              <span className="text-xs text-white/80">
                Com base em <strong className="text-white">{dados.total} avaliações</strong> no Google
              </span>
            </div>
          </div>
        </div>

        <div className="mt-10">
          <Carousel opts={{ align: "start", loop: true }} className="w-full">
            <CarouselContent className="-ml-4">
              {dados.avaliacoes.map((a) => (
                <CarouselItem key={a.id} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <Cartao a={a} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 -translate-x-1/2 border-white/20 bg-black/80 text-white hover:bg-black hover:text-white" />
            <CarouselNext className="right-0 translate-x-1/2 border-white/20 bg-black/80 text-white hover:bg-black hover:text-white" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}
