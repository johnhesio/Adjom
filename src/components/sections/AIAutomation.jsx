import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import WhatsAppButton from "../ui/WhatsAppButton";

const FEATURES = [
  {
    title: "Respostas instantâneas",
    description:
      "Preços, prazos e dúvidas frequentes respondidos na hora, sem seu time parar o que está fazendo.",
  },
  {
    title: "Qualificação de leads",
    description:
      "A IA identifica quem já está pronto pra comprar e direciona a conversa pro atendente certo.",
  },
  {
    title: "Agendamento automático",
    description:
      "Marcação de horários e reuniões direto na conversa, sem ida e volta manual.",
  },
];

export default function AIAutomation() {
  return (
    <section className="py-24 md:py-32 bg-linen">
      <Container className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
        <div>
          <SectionHeading
            kicker="automação com ia"
            title="Atendimento automático que não parece robótico"
          />
          <p className="mt-6 text-slate text-[15px] leading-relaxed max-w-md">
            Configuramos assistentes com inteligência artificial integrados ao
            WhatsApp e ao site para responder dúvidas, qualificar leads e
            marcar horários — 24 horas por dia, com transferência para um
            humano sempre que a conversa exigir.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-5">
            <WhatsAppButton message="Olá! Quero automatizar o atendimento do meu negócio com IA.">
              Quero automatizar meu atendimento
            </WhatsAppButton>
            <Link
              to="/automacao-ia"
              className="text-sm font-semibold text-amethyst hover:text-orange transition-colors"
            >
              Ver como funciona →
            </Link>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
          {FEATURES.map((f) => (
            <div key={f.title}>
              <h3 className="font-display font-semibold text-lg text-amethyst">
                {f.title}
              </h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                {f.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
