import { WHATSAPP_NUMBER } from "@/lib/whatsapp";
import { M8Logo } from "./Logo";

const NAV = [
  { href: "#diferenciais", label: "Diferenciais" },
  { href: "#para-quem", label: "Para quem é" },
  { href: "#produtos", label: "Produtos" },
  { href: "#marcas", label: "Marcas" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#faq", label: "FAQ" },
];

export function Footer() {
  return (
    <footer className="bg-black">
      <div className="stripes-divider" />
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 lg:grid-cols-3 lg:px-8">
        <div>
          <M8Logo />
          <p className="mt-4 text-sm text-white/65">
            Distribuidor de pneus. Atacado para revenda e venda direta ao
            consumidor. Pronta entrega em Curitiba e região.
          </p>
        </div>
        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.22em] text-white/85">
            Atendimento
          </h4>
          <ul className="mt-4 space-y-2 text-sm text-white/65">
            <li>Av. Marginal BR-376, 2612, São Pedro, São José dos Pinhais/PR</li>
            <li>CEP 83010-500</li>
            <li>Curitiba, Campo Largo, Colombo e região metropolitana</li>
            <li>Seg a Sex 8h-18h · Sáb 8h-12h</li>
            <li>
              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                WhatsApp: (41) 99749-2838
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-xs uppercase tracking-[0.22em] text-white/85">
            Links rápidos
          </h4>
          <ul className="mt-4 grid grid-cols-2 gap-2 text-sm text-white/65">
            {NAV.map((n) => (
              <li key={n.href}>
                <a href={n.href} className="hover:text-white">
                  {n.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-4 py-5 text-xs text-white/55 sm:flex-row sm:justify-between lg:px-8">
          <span>CNPJ 59.116.144/0001-50</span>
          <span>© 2026 M8 Pneus. Todos os direitos reservados.</span>
        </div>
      </div>
    </footer>
  );
}