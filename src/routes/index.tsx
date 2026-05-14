import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/m8/Header";
import { Hero } from "@/components/m8/Hero";
import { Stats } from "@/components/m8/Stats";
import { Differentials } from "@/components/m8/Differentials";
import { HowItWorks } from "@/components/m8/HowItWorks";
import { Products } from "@/components/m8/Products";
import { Brands } from "@/components/m8/Brands";
import { Testimonials } from "@/components/m8/Testimonials";
import { ForWhom } from "@/components/m8/ForWhom";
import { Faq } from "@/components/m8/Faq";
import { ConsumerSection } from "@/components/m8/ConsumerSection";
import { Footer } from "@/components/m8/Footer";
import { WhatsappFloat } from "@/components/m8/WhatsappFloat";

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
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Header />
      <main>
        <Hero />
        <Stats />
        <Differentials />
        <HowItWorks />
        <ForWhom />
        <Products />
        <Brands />
        <Testimonials />
        <Faq />
        <ConsumerSection />
      </main>
      <Footer />
      <WhatsappFloat />
    </div>
  );
}
