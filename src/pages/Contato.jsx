import Container from "../components/ui/Container";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import { useSEO } from "../lib/useSEO";

const QUICK_OPTIONS = [
  {
    label: "Quero um site",
    message: "Olá! Quero um orçamento para criação de site.",
  },
  {
    label: "Quero um sistema sob medida",
    message: "Olá! Quero um orçamento para um sistema sob medida.",
  },
  {
    label: "Quero criar minha marca",
    message: "Olá! Quero um orçamento para identidade visual.",
  },
  {
    label: "Ainda não sei, quero conversar",
    message: "Olá! Vi o site da Adjom e queria entender melhor como vocês trabalham.",
  },
];

export default function Contato() {
  useSEO({
    title: "Contato",
    description:
      "Fale com a Adjom pelo WhatsApp e receba um orçamento sob medida para site, sistema ou identidade visual do seu negócio em Fortaleza.",
    path: "/contato",
  });

  return (
    <section className="pt-36 pb-28 md:pt-44 md:pb-36 bg-white min-h-[80vh]">
      <Container className="max-w-3xl text-center">
        <p className="kicker mb-4 justify-center flex">fale com a gente</p>
        <h1 className="text-4xl md:text-5xl font-semibold text-amethyst leading-tight">
          O primeiro passo é uma mensagem
        </h1>
        <p className="mt-5 text-lg text-slate leading-relaxed max-w-xl mx-auto">
          Escolha o que você precisa ou mande uma mensagem direta — respondemos
          rápido e sem enrolação.
        </p>

        <div className="mt-12 grid sm:grid-cols-2 gap-4 text-left">
          {QUICK_OPTIONS.map((opt) => (
            <div
              key={opt.label}
              className="rounded-2xl border border-amethyst/10 bg-linen/50 p-6 flex flex-col justify-between"
            >
              <p className="font-display font-medium text-amethyst text-[15px]">
                {opt.label}
              </p>
              <div className="mt-5">
                <WhatsAppButton message={opt.message} className="w-full">
                  Chamar no WhatsApp
                </WhatsAppButton>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-amethyst/10 grid sm:grid-cols-3 gap-8 text-sm text-slate">
          <div>
            <p className="font-display font-semibold text-amethyst mb-1">
              Localização
            </p>
            <p>Fortaleza, CE — Brasil</p>
          </div>
          <div>
            <p className="font-display font-semibold text-amethyst mb-1">
              Atendimento
            </p>
            <p>Segunda a sexta, 9h às 18h</p>
          </div>
          <div>
            <p className="font-display font-semibold text-amethyst mb-1">
              Canal principal
            </p>
            <p>WhatsApp</p>
          </div>
        </div>
      </Container>
    </section>
  );
}
