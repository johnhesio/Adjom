export const SITE = {
  name: "Adjom",
  domain: "https://adjom.com.br", // TODO: ajustar para o domínio final antes do deploy
  city: "Fortaleza",
  state: "CE",
  country: "BR",
  description:
    "Somos uma empresa de tecnologia dedicada a desenvolver o futuro de outros negócios. Criamos sistemas sob medida, sites e marcas para prestadores de serviço e startups.",
};

export const WHATSAPP_NUMBER = "558592147942";

export function buildWhatsappLink(message) {
  const encoded = encodeURIComponent(
    message || "Vim pelo site, queria tirar uma dúvida."
  );
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encoded}`;
}

export const WHATSAPP_LINK = buildWhatsappLink();
