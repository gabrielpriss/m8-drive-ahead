// Único lugar para trocar o número quando o cliente fornecer o definitivo.
export const WHATSAPP_NUMBER = "5541997492838";

export type WhatsAppContext =
  | "hero"
  | "como-funciona"
  | "produtos"
  | "sticky"
  | "header"
  | "diferenciais"
  | "form"
  | "depoimentos"
  | "consumidor-hero"
  | "consumidor-howitworks"
  | "consumidor-forwhom"
  | "consumidor-section";

const MESSAGES: Record<WhatsAppContext, string> = {
  hero: "Olá! Sou lojista e quero cotação no atacado (8+ pneus).",
  "como-funciona": "Olá! Quero começar como revendedor M8.",
  produtos: "Olá! Quero falar com um atendente sobre o atacado da M8.",
  sticky: "Olá! Tenho uma dúvida sobre a M8 Pneus.",
  header: "Olá! Sou lojista e quero falar sobre o atacado da M8.",
  diferenciais: "Olá! Quero entender melhor as condições de revenda da M8.",
  form: "Olá! Acabei de me cadastrar no site e quero receber a tabela de atacado.",
  depoimentos: "Olá! Quero virar revendedor M8.",
  "consumidor-hero":
    "Olá! Quero comprar pneu para meu carro. Pode me ajudar com uma cotação?",
  "consumidor-howitworks":
    "Olá! Quero cotar pneu para meu carro. Minha medida é [digite aqui].",
  "consumidor-forwhom": "Olá! Quero cotar pneu como consumidor final.",
  "consumidor-section":
    "Olá! Quero cotar pneu para meu carro. Minha medida é [digite aqui].",
};

export function whatsappLink(context: WhatsAppContext): string {
  const text = encodeURIComponent(MESSAGES[context]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}