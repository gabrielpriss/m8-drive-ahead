import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/m8/Header";
import { Hero } from "@/components/m8/Hero";
import { Differentials } from "@/components/m8/Differentials";
import { Products } from "@/components/m8/Products";
import { Brands } from "@/components/m8/Brands";
import { Testimonials } from "@/components/m8/Testimonials";
import { ForWhom } from "@/components/m8/ForWhom";
import { Faq } from "@/components/m8/Faq";
import { ConsumerSection } from "@/components/m8/ConsumerSection";
import { LocationMap } from "@/components/m8/LocationMap";
import { Footer } from "@/components/m8/Footer";
import { WhatsappFloat } from "@/components/m8/WhatsappFloat";
import { FAQ_ITEMS } from "@/lib/faq";
import { LOCAL_BUSINESS_JSONLD, OG_IMAGE, SITE_URL, faqJsonLd } from "@/lib/seo";
export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title: "M8 Distribuidor de Pneus | Atacado para Revenda em Curitiba e Região",
      },
      {
        name: "description",
        content:
          "Distribuidor de pneus para revenda a partir de 8 unidades. Pronta entrega em Curitiba e região metropolitana. Fale com um vendedor de atacado agora.",
      },
      {
        property: "og:title",
        content: "M8 Distribuidor de Pneus | Atacado para Revenda",
      },
      {
        property: "og:description",
        content:
          "Pronta entrega quando o grande distribuidor esgotou. Atacado a partir de 8 pneus em Curitiba e região metropolitana.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: SITE_URL },
      { property: "og:image", content: OG_IMAGE },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:image", content: OG_IMAGE },
      { "script:ld+json": LOCAL_BUSINESS_JSONLD },
      { "script:ld+json": faqJsonLd(FAQ_ITEMS) },
    ],
    links: [{ rel: "canonical", href: SITE_URL }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Differentials />
        <ForWhom />
        <Products />
        <Brands />
        <Testimonials />
        <Faq />
        <ConsumerSection />
      </main>
      <LocationMap />
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
