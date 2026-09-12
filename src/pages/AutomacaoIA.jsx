import PageHero from "../components/sections/PageHero";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import FinalCTA from "../components/sections/FinalCTA";
import { useSEO } from "../lib/useSEO";

const WHERE = [
  {
    title: "WhatsApp Business",
    description:
      "Primeira resposta automática, triagem por assunto e transferência para um atendente humano quando a conversa exige.",
  },
  {
    title: "Chat no site",
    description:
      "O visitante tira dúvidas, recebe um orçamento inicial ou já sai da conversa com um horário agendado.",
  },
  {
    title: "Follow-up automático",
    description:
      "Reengajamento de quem não respondeu ou abandonou a conversa, sem parecer spam.",
  },
];

const DELIVERS = [
  "Assistente treinado com as informações reais do seu negócio — preços, prazos e políticas",
  "Integração direta com WhatsApp Business API",
  "Transferência automática para um humano sempre que a IA não souber responder",
  "Painel simples para acompanhar as conversas e ajustar respostas",
  "Relatório de quantas conversas foram resolvidas sem intervenção humana",
];

export default function AutomacaoIA() {
  useSEO({
    title: "Automação de atendimento com Inteligência Artificial",
    description:
      "Assistentes com IA integrados ao WhatsApp e ao site para responder dúvidas, qualificar leads e agendar horários 24 horas por dia.",
    path: "/automacao-ia",
  });

  return (
    <>
      <PageHero
        kicker="automação com ia"
        title="Atendimento automático que não parece robótico"
        description="Assistentes com inteligência artificial que respondem no WhatsApp e no site, 24 horas por dia — sem perder o tom da sua marca."
        ctaMessage="Olá! Quero automatizar o atendimento do meu negócio com IA."
      />

      <section className="py-20 md:py-28 bg-white">
        <Container>
          <SectionHeading
            kicker="onde a ia atua"
            title="Presente nos canais onde seu cliente já está"
          />
          <div className="mt-14 grid md:grid-cols-3 gap-8">
            {WHERE.map((w) => (
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
            title="Uma IA que conhece o seu negócio antes de conversar com o cliente"
            description="Nada de respostas genéricas. O assistente é configurado com as informações reais da sua operação antes de entrar no ar."
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
            Quer ver como a IA se encaixa no seu atendimento?
          </h2>
          <p className="mt-4 text-slate text-[15px] leading-relaxed">
            Conta como funciona seu atendimento hoje — respondemos com uma
            direção inicial sem compromisso.
          </p>
          <div className="mt-7 flex justify-center">
            <WhatsAppButton
              size="lg"
              message="Olá! Quero automatizar o atendimento do meu negócio com IA."
            >
              Falar sobre automação de atendimento
            </WhatsAppButton>
          </div>
        </Container>
      </section>

      <FinalCTA />
    </>
  );
}
