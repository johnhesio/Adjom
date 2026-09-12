import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const STEPS = [
  {
    step: "diagnóstico",
    title: "Entendemos seu negócio",
    description:
      "Mapeamos os gargalos do dia a dia, o público que você quer atingir e onde a tecnologia pode gerar mais retorno.",
  },
  {
    step: "proposta",
    title: "Desenhamos a solução",
    description:
      "Definimos escopo, prazos e investimento com clareza — você sabe exatamente o que vai receber antes de começar.",
  },
  {
    step: "construção",
    title: "Desenvolvemos sob medida",
    description:
      "Código, design e conteúdo são produzidos em ciclos curtos, com pontos de validação para você acompanhar de perto.",
  },
  {
    step: "lançamento",
    title: "Colocamos no ar",
    description:
      "Publicamos, testamos e ajustamos. Depois do lançamento, seguimos disponíveis para evoluir junto com você.",
  },
];

export default function Process() {
  return (
    <section className="py-24 md:py-32 bg-linen">
      <Container>
        <SectionHeading
          kicker="como trabalhamos"
          title="Um processo direto, sem enrolação"
          description="Da primeira conversa no WhatsApp ao sistema no ar — cada etapa tem um responsável, um prazo e um entregável claro."
        />

        <div className="mt-16 relative grid md:grid-cols-4 gap-10 md:gap-6">
          <div
            className="hidden md:block absolute top-[18px] left-0 right-0 h-px bg-amethyst/15"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <div key={s.step} className="relative">
              <div className="relative z-10 w-9 h-9 rounded-full bg-white border-2 border-orange text-orange font-mono text-xs flex items-center justify-center font-medium">
                {String(i + 1).padStart(2, "0")}
              </div>
              <p className="kicker mt-5 mb-1">{s.step}</p>
              <h3 className="font-display font-semibold text-lg text-amethyst">
                {s.title}
              </h3>
              <p className="mt-2 text-sm text-slate leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
