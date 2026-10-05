// Constantes de SEO/social. Um único lugar para o domínio e o card de compartilhamento.
export const SITE_URL = "https://m8pneus.com.br/";
export const OG_IMAGE = "https://m8pneus.com.br/assets/og-m8.jpg";

export const LOCAL_BUSINESS_JSONLD = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${SITE_URL}#localbusiness`,
  name: "M8 Pneus",
  description:
    "Distribuidor de pneus para revenda com pronta entrega em Curitiba e região metropolitana.",
  url: SITE_URL,
  image: OG_IMAGE,
  telephone: "+5541997492838",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Av. Marginal BR-376, 2612 - São Pedro",
    addressLocality: "São José dos Pinhais",
    addressRegion: "PR",
    postalCode: "83010-500",
    addressCountry: "BR",
  },
  areaServed: "Curitiba e Região Metropolitana",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Saturday"],
      opens: "08:00",
      closes: "12:00",
    },
  ],
};

// Gera o FAQPage a partir das mesmas perguntas renderizadas na seção #faq,
// para o schema não sair do ar quando a copy mudar.
export function faqJsonLd(items: ReadonlyArray<{ q: string; a: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };
}
