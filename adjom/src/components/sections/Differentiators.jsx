import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import WhatsAppButton from "../ui/WhatsAppButton";

const ITEMS = [
  {
    title: "Feito sob medida, de verdade",
    description:
      "Nada de template genérico com sua logo colada em cima. Cada site e sistema nasce do seu processo real de trabalho.",
  },
  {
    title: "Você entende o que está pagando",
    description:
      "Proposta clara, sem letras miúdas. Você sabe o escopo, o prazo e o que acontece depois da entrega.",
  },
  {
    title: "Tecnologia que não te prende",
    description:
      "Código organizado e documentado. O sistema é seu — sem dependência eterna de quem construiu.",
  },
  {
    title: "Suporte depois do lançamento",
    description:
      "Continuamos por perto para ajustes, novas funcionalidades e dúvidas do dia a dia da operação.",
  },
];

export default function Differentiators() {
  return (
    <section className="py-24 md:py-32 bg-amethyst text-white overflow-hidden relative">
      <div
        aria-hidden="true"
        className="absolute -bottom-40 -left-40 w-[560px] h-[560px] rounded-full opacity-25 blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(109,177,191,0.5), transparent 65%)",
        }}
      />
      <Container className="relative">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-16 items-start">
          <div>
            <SectionHeading
              kicker="por que a adjom"
              title="Tecnologia que roda invisível, resultado que aparece"
              light
            />
            <p className="mt-6 text-white/60 text-[15px] leading-relaxed max-w-md">
              Unimos o rigor técnico de quem constrói software robusto com a
              simplicidade que quem toca o negócio no dia a dia precisa.
            </p>
            <div className="mt-8">
              <WhatsAppButton
                variant="outlineLight"
                message="Quero entender melhor como a Adjom pode ajudar meu negócio."
              >
                Conversar com a Adjom
              </WhatsAppButton>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10">
            {ITEMS.map((item) => (
              <div key={item.title}>
                <h3 className="font-display font-semibold text-lg text-white">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-white/60 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
