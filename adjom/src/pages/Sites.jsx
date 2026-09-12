import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import FinalCTA from "../components/sections/FinalCTA";
import { useSEO } from "../lib/useSEO";

const TYPES = [
  {
    title: "Landing page de conversão",
    description:
      "Uma única página, focada em transformar visitante em contato — ideal para campanhas, lançamentos e captação de leads pelo WhatsApp.",
  },
  {
    title: "Site institucional",
    description:
      "Várias páginas (início, sobre, serviços, contato) para transmitir credibilidade e explicar em detalhes o que seu negócio oferece.",
  },
  {
    title: "Portfólio profissional",
    description:
      "Para prestadores de serviço que vivem de mostrar resultado visual — fotógrafos, arquitetos, designers, profissionais de estética.",
  },
];

const INCLUDES = [
  "Design responsivo, funciona bem em celular, tablet e desktop",
  "Otimização de SEO on-page (títulos, meta descrições, estrutura de headings)",
  "Botão de WhatsApp integrado em pontos estratégicos da página",
  "Velocidade de carregamento otimizada",
  "Formulário de contato e/ou captação de leads",
  "Google Meu Negócio e dados estruturados para buscas locais",
];

export default function Sites() {
  useSEO({
    title: "Criação de sites profissionais para prestadores de serviço",
    description:
      "Sites institucionais e landing pages responsivas, otimizadas para SEO e conversão. Desenvolvimento sob medida para prestadores de serviço e startups.",
    path: "/sites",
  });

  return (
    <>
      <PageHero
        kicker="criação de sites"
        title="Um site que trabalha para você atrair clientes"
        description="Sites rápidos, responsivos e otimizados para aparecer no Google — construídos para transformar visita em mensagem no WhatsApp."
        ctaMessage="Olá! Quero um orçamento para criação de site."
      />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading
            kicker="tipos de site"
            title="Qual formato faz mais sentido para o seu negócio"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {TYPES.map((t) => (
              <div key={t.title}>
                <h3 className="font-display font-semibold text-lg text-amethyst">
                  {t.title}
                </h3>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  {t.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-linen">
        <Container className="grid md:grid-cols-[1fr_1fr] gap-14 items-start">
          <SectionHeading
            kicker="o que está incluso"
            title="Cada site sai pronto para vender e para o Google entender"
            description="Antes de escrever qualquer linha de código, mapeamos as palavras-chave e o comportamento do seu público para estruturar as páginas certas."
          />
          <ul className="space-y-4">
            {INCLUDES.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 16 16"
                  fill="none"
                  className="mt-0.5 shrink-0 text-orange"
                  aria-hidden="true"
                >
                  <path
                    d="M3 8.5l3 3 7-7"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="text-[15px] text-slate leading-relaxed">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="py-20 md:py-24 bg-white">
        <Container className="text-center max-w-2xl mx-auto">
          <h2 className="font-display font-semibold text-2xl md:text-3xl text-amethyst">
            Quer ver como ficaria o site do seu negócio?
          </h2>
          <p className="mt-4 text-slate text-[15px] leading-relaxed">
            Manda uma mensagem contando o que você faz — respondemos com uma
            direção inicial sem compromisso.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              size="lg"
              message="Olá! Quero um orçamento para criação de site."
            >
              Falar sobre meu site
            </WhatsAppButton>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
