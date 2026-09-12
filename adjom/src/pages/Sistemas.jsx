import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import FinalCTA from "../components/sections/FinalCTA";
import { useSEO } from "../lib/useSEO";

const PROBLEMS = [
  {
    title: "Planilhas que travam",
    description:
      "Arquivos gigantes, fórmulas quebradas e versões diferentes circulando entre a equipe.",
  },
  {
    title: "Retrabalho manual",
    description:
      "A mesma informação digitada em três lugares diferentes, todos os dias.",
  },
  {
    title: "Times que não se falam",
    description:
      "Vendas, financeiro e operação enxergando números diferentes para a mesma pergunta.",
  },
];

const DELIVERS = [
  "Levantamento detalhado do processo atual antes de programar qualquer linha",
  "Painel de controle com os dados que realmente importam para a tomada de decisão",
  "Integração com ferramentas que você já usa (planilhas, WhatsApp, e-mail, pagamentos)",
  "Permissões de acesso por pessoa ou setor",
  "Treinamento da equipe para uso do sistema no dia a dia",
  "Documentação técnica — o sistema é seu, sem dependência eterna da Adjom",
];

export default function Sistemas() {
  useSEO({
    title: "Sistemas sob medida e automação de processos",
    description:
      "Desenvolvimento de sistemas, painéis de controle e automações sob medida para eliminar planilhas travadas e retrabalho manual no seu negócio.",
    path: "/sistemas",
  });

  return (
    <>
      <PageHero
        kicker="sistemas sob medida"
        title="Chega de planilha travada e trabalho manual"
        description="Desenvolvemos sistemas desenhados exatamente para o seu processo — não o contrário."
        ctaMessage="Olá! Quero automatizar um processo do meu negócio."
      />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading
            kicker="problemas comuns"
            title="Se algum destes cenários é familiar, dá pra resolver"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {PROBLEMS.map((p) => (
              <div
                key={p.title}
                className="rounded-2xl border border-amethyst/10 p-7 bg-linen/50"
              >
                <h3 className="font-display font-semibold text-lg text-amethyst">
                  {p.title}
                </h3>
                <p className="mt-3 text-sm text-slate leading-relaxed">
                  {p.description}
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
            title="Um sistema construído em cima do seu processo real"
            description="Antes de qualquer código, entendemos como a informação circula hoje — só então desenhamos o que deveria circular."
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
            Descreva o processo que mais consome seu tempo
          </h2>
          <p className="mt-4 text-slate text-[15px] leading-relaxed">
            Em uma conversa rápida já conseguimos apontar se dá para
            automatizar e como.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              size="lg"
              message="Olá! Quero automatizar um processo do meu negócio."
            >
              Explicar meu processo
            </WhatsAppButton>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
