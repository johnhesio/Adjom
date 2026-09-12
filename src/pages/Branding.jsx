import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import FinalCTA from "../components/sections/FinalCTA";
import { useSEO } from "../lib/useSEO";

const DELIVERS = [
  "Logotipo em suas variações (completo, horizontal, símbolo isolado)",
  "Paleta de cores com hierarquia de uso definida",
  "Tipografia para títulos e textos",
  "Guia de marca (brandbook) com regras de uso e área de proteção",
  "Aplicações prontas para redes sociais e materiais impressos",
];

const WHO_FOR = [
  {
    title: "Startups em fase de lançamento",
    description:
      "Nascer com identidade sólida evita retrabalho e transmite confiança para os primeiros clientes e investidores.",
  },
  {
    title: "Prestadores de serviço em expansão",
    description:
      "Quando o boca a boca já não é suficiente, uma marca consistente sustenta o crescimento para novos públicos.",
  },
  {
    title: "Negócios em processo de reposicionamento",
    description:
      "Se a marca atual não representa mais o que o negócio se tornou, é hora de alinhar a imagem à realidade.",
  },
];

export default function Branding() {
  useSEO({
    title: "Criação de marca e identidade visual",
    description:
      "Desenvolvimento de identidade visual, logotipo e brandbook para startups e prestadores de serviço que querem transmitir confiança desde o primeiro contato.",
    path: "/branding",
  });

  return (
    <>
      <PageHero
        kicker="marca & identidade"
        title="Uma marca que transmite confiança antes da primeira conversa"
        description="Construímos identidades visuais completas — do logotipo ao guia de uso — para negócios que querem ser levados a sério."
        ctaMessage="Olá! Quero criar a identidade visual do meu negócio."
      />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading
            kicker="para quem é"
            title="Bom momento para investir em identidade visual"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {WHO_FOR.map((w) => (
              <div key={w.title}>
                <h3 className="font-display font-semibold text-lg text-amethyst">
                  {w.title}
                </h3>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  {w.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-20 md:py-28 bg-linen">
        <Container className="grid md:grid-cols-[1fr_1fr] gap-14 items-start">
          <SectionHeading
            kicker="o que entregamos"
            title="Uma identidade pronta para usar em qualquer aplicação"
            description="Cada elemento visual é pensado para funcionar junto — do cartão de visita ao sistema que você vai usar todos os dias."
          />
          <ul className="space-y-4">
            {DELIVERS.map((item) => (
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
            Quer ver direções de marca para o seu negócio?
          </h2>
          <p className="mt-4 text-slate text-[15px] leading-relaxed">
            Conta um pouco sobre o momento da sua empresa e já começamos a
            pensar em caminhos possíveis.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              size="lg"
              message="Olá! Quero criar a identidade visual do meu negócio."
            >
              Falar sobre minha marca
            </WhatsAppButton>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
