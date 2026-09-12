import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import WhatsAppButton from "../ui/WhatsAppButton";

const PACKAGES = [
  {
    name: "Site institucional",
    tagline: "Para prestadores de serviço que precisam de presença profissional",
    features: [
      "Site responsivo de até 6 páginas",
      "Otimização de SEO on-page",
      "Botão de WhatsApp integrado",
      "Formulário de contato",
    ],
    highlight: false,
  },
  {
    name: "Sistema sob medida",
    tagline: "Para negócios que precisam automatizar processos internos",
    features: [
      "Levantamento do processo atual",
      "Painel de controle personalizado",
      "Integrações com suas ferramentas",
      "Treinamento da equipe",
    ],
    highlight: true,
  },
  {
    name: "Marca + site completo",
    tagline: "Para quem está começando e quer nascer com identidade forte",
    features: [
      "Identidade visual (logo, cores, tipografia)",
      "Site institucional ou landing page",
      "Guia de uso da marca",
      "Materiais para redes sociais",
    ],
    highlight: false,
  },
];

export default function Packages() {
  return (
    <section id="pacotes" className="py-24 md:py-32 bg-white">
      <Container>
        <SectionHeading
          kicker="soluções"
          title="Escolha o ponto de partida certo para o seu momento"
          description="Todo projeto é orçado sob medida — os pacotes abaixo mostram o que costuma compor cada tipo de solução."
        />

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {PACKAGES.map((p) => (
            <div
              key={p.name}
              className={`rounded-2xl p-8 flex flex-col ${
                p.highlight
                  ? "bg-amethyst text-white ring-1 ring-amethyst"
                  : "bg-linen/60 text-amethyst-ink border border-amethyst/10"
              }`}
            >
              {p.highlight && (
                <span className="kicker mb-4 text-pacific">mais procurado</span>
              )}
              <h3
                className={`font-display font-semibold text-xl ${
                  p.highlight ? "text-white" : "text-amethyst"
                }`}
              >
                {p.name}
              </h3>
              <p
                className={`mt-2 text-sm leading-relaxed ${
                  p.highlight ? "text-white/65" : "text-slate"
                }`}
              >
                {p.tagline}
              </p>

              <ul className="mt-6 space-y-3 flex-1">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      className={`mt-0.5 shrink-0 ${
                        p.highlight ? "text-pacific" : "text-orange"
                      }`}
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
                    <span className={p.highlight ? "text-white/85" : "text-slate"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              <p
                className={`mt-8 mb-4 text-xs font-mono ${
                  p.highlight ? "text-white/50" : "text-slate"
                }`}
              >
                investimento sob consulta
              </p>
              <WhatsAppButton
                variant={p.highlight ? "outlineLight" : "dark"}
                className="w-full"
                message={`Olá! Quero saber mais sobre o pacote "${p.name}".`}
              >
                Falar sobre este pacote
              </WhatsAppButton>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
