import { createFileRoute } from "@tanstack/react-router";
import { PackageCheck, Truck, BadgePercent, MessageCircle } from "lucide-react";
import { Header } from "@/components/m8/Header";
import { HeroBackground } from "@/components/m8/HeroBackground";
import { WhatsAppCTA } from "@/components/m8/Buttons";
import { SectionHeader } from "@/components/m8/SectionHeader";
import { Products } from "@/components/m8/Products";
import { Brands } from "@/components/m8/Brands";
import { Testimonials } from "@/components/m8/Testimonials";
import { Faq } from "@/components/m8/Faq";
import { LocationMap } from "@/components/m8/LocationMap";
import { Footer } from "@/components/m8/Footer";
import { WhatsappFloat } from "@/components/m8/WhatsappFloat";
import { whatsappLink } from "@/lib/whatsapp";
import { LOCAL_BUSINESS_JSONLD, OG_IMAGE, SITE_URL, faqJsonLd } from "@/lib/seo";
import xbriLogo from "@/assets/brands/xbri.webp";

// Página do grupo de anúncios de marca XBRI no Google Ads (aprovada em 17/10/2026).
const PAGE_URL = `${SITE_URL}xbri`;

const XBRI_FAQ = [
  {
    q: "Vocês vendem pneus XBRI no atacado?",
    a: "Sim. Trabalhamos com pneus XBRI para revenda, com pronta entrega em Curitiba e região metropolitana. Consulte medidas e condições com nosso vendedor pelo WhatsApp.",
  },
  {
    q: "Quais medidas XBRI vocês têm em estoque?",
    a: "Trabalhamos com as medidas de maior giro para automóveis, SUVs, utilitários e pickups. Como o estoque gira rápido, confirmamos a disponibilidade da sua medida na hora, pelo WhatsApp.",
  },
  {
    q: "Qual a região de entrega?",
    a: "Atendemos Curitiba e toda a Região Metropolitana com entrega rápida. Consulte sua localização com nossa equipe comercial.",
  },
  {
    q: "Quais formas de pagamento vocês aceitam?",
    a: "PIX, cartão e boleto para clientes cadastrados, mediante análise e aprovação de crédito.",
  },
];

const REASONS = [
  {
    icon: PackageCheck,
    color: "var(--m8-blue)",
    title: "XBRI à pronta entrega",
    text: "Estoque pronto para você não perder venda quando o grande distribuidor esgotou.",
  },
  {
    icon: BadgePercent,
    color: "var(--m8-green)",
    title: "Preço de atacado",
    text: "Condições comerciais pensadas para lojas de pneus, borracharias e auto centers.",
  },
  {
    icon: Truck,
    color: "var(--m8-red)",
    title: "Entrega rápida",
    text: "Seu pedido XBRI com agilidade em Curitiba e Região Metropolitana.",
  },
  {
    icon: MessageCircle,
    color: "var(--m8-blue)",
    title: "Atendimento direto",
    text: "Negociação direta com nosso vendedor no WhatsApp, sem fila e sem robô.",
  },
];

export const Route = createFileRoute("/xbri")({
  head: () => ({
    meta: [
      { title: "Distribuidor de Pneus XBRI para Revenda | M8 Pneus Curitiba" },
      {
        name: "description",
        content:
          "Pneus XBRI no atacado para revenda, com pronta entrega em Curitiba e região metropolitana. Fale com um vendedor da M8 pelo WhatsApp.",
      },
      { property: "og:title", content: "Pneus XBRI para Revenda | M8 Pneus" },
      {
        property: "og:description",
        content: "Distribuidor de pneus XBRI com pronta entrega em Curitiba e região.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: PAGE_URL },
      { property: "og:image", content: OG_IMAGE },
      { "script:ld+json": LOCAL_BUSINESS_JSONLD },
      { "script:ld+json": faqJsonLd(XBRI_FAQ) },
    ],
    links: [{ rel: "canonical", href: PAGE_URL }],
  }),
  component: XbriPage,
});

function XbriPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header linkBase="/" />
      <main>
        <section id="top" className="relative isolate overflow-hidden bg-black">
          <HeroBackground />
          <div className="absolute inset-0 -z-10 carbon-texture opacity-[0.06]" aria-hidden="true" />
          <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 pb-20 pt-14 sm:pt-20 lg:grid-cols-[1fr_auto] lg:px-8 lg:pb-28 lg:pt-28">
            <div>
              <p className="mb-5 inline-block bg-[var(--m8-red)] px-3 py-1 font-display text-[11px] uppercase tracking-[0.25em] text-white clip-chamfer-sm">
                Distribuidor XBRI · Curitiba e região
              </p>
              <h1 className="font-display text-chrome text-[34px] leading-[0.95] sm:text-5xl lg:text-6xl xl:text-7xl uppercase max-w-4xl">
                Pneus XBRI para revenda{" "}
                <span className="mt-2 block text-[18px] leading-tight sm:text-2xl lg:text-3xl xl:text-4xl">
                  com pronta entrega em Curitiba e região.
                </span>
              </h1>
              <p className="mt-6 max-w-2xl text-base text-white/85 sm:text-lg">
                Somos distribuidor de pneus XBRI para lojas, borracharias e auto
                centers. Estoque pronto, preço de atacado e atendimento direto com
                nosso vendedor.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
                <WhatsAppCTA href={whatsappLink("xbri")}>Cotar XBRI no WhatsApp</WhatsAppCTA>
              </div>
            </div>
            <div className="hidden lg:block">
              <div className="flex h-40 w-80 items-center justify-center bg-white p-4 clip-chamfer hard-shadow">
                <img
                  src={xbriLogo}
                  alt="Pneus XBRI"
                  width={264}
                  height={120}
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
          </div>
          <div className="relative h-8 w-full overflow-hidden" aria-hidden="true">
            <div className="absolute -left-10 top-0 h-full w-[120%] -skew-y-2 stripes-bgr opacity-90" />
          </div>
        </section>

        <section id="por-que-xbri" className="bg-black py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <SectionHeader
              eyebrow="XBRI na M8"
              title="Por que comprar XBRI com a M8"
              subtitle="Distribuidor em São José dos Pinhais, atendendo Curitiba e toda a região metropolitana."
            />
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {REASONS.map((item) => (
                <div
                  key={item.title}
                  className="relative border-chrome p-6 clip-chamfer hard-shadow"
                >
                  <div
                    className="mb-5 inline-flex h-12 w-12 items-center justify-center clip-chamfer-sm"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                  </div>
                  <h3 className="font-display text-lg uppercase italic leading-tight text-white">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm text-white/70">{item.text}</p>
                </div>
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <WhatsAppCTA href={whatsappLink("xbri")}>Consultar medidas XBRI</WhatsAppCTA>
            </div>
          </div>
        </section>

        <Products />
        <Brands />
        <Testimonials />
        <Faq items={XBRI_FAQ} />
      </main>
      <LocationMap />
      <Footer linkBase="/" />
      <WhatsappFloat />
    </div>
  );
}
