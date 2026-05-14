// Único lugar para trocar o número quando o cliente fornecer o definitivo.
export const WHATSAPP_NUMBER = "5541998653615";

export type WhatsAppContext =
  | "hero"
  | "como-funciona"
  | "produtos"
  | "sticky"
  | "header"
  | "diferenciais"
  | "form"
  | "depoimentos";

const MESSAGES: Record<WhatsAppContext, string> = {
  hero: "Olá! Sou lojista e quero cotação no atacado (8+ pneus).",
  "como-funciona": "Olá! Quero começar como revendedor M8.",
  produtos: "Olá! Gostaria de receber a tabela completa de atacado.",
  sticky: "Olá! Tenho uma dúvida sobre o atacado da M8.",
  header: "Olá! Sou lojista e quero falar sobre o atacado da M8.",
  diferenciais: "Olá! Quero entender melhor as condições de revenda da M8.",
  form: "Olá! Acabei de me cadastrar no site e quero receber a tabela de atacado.",
  depoimentos: "Olá! Quero virar revendedor M8.",
};

export function whatsappLink(context: WhatsAppContext): string {
  const text = encodeURIComponent(MESSAGES[context]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}