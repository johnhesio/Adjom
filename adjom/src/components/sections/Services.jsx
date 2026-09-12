import { Link } from "react-router-dom";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";

const SERVICES = [
  {
    num: "01",
    title: "Sites que vendem",
    to: "/sites",
    description:
      "Sites institucionais e páginas de vendas rápidas, responsivas e otimizadas para converter visitantes em clientes — construídos para aparecer bem no Google desde o primeiro dia.",
    tags: ["Landing pages", "Sites institucionais", "SEO técnico"],
  },
  {
    num: "02",
    title: "Sistemas sob medida",
    to: "/sistemas",
    description:
      "Chega de planilha que trava. Desenvolvemos sistemas, painéis e automações desenhados exatamente para o fluxo do seu negócio, eliminando trabalho manual e retrabalho.",
    tags: ["Automação de processos", "Painéis de controle", "Integrações"],
  },
  {
    num: "03",
    title: "Marca & identidade",
    to: "/branding",
    description:
      "Construímos identidades visuais que comunicam confiança antes mesmo da primeira conversa — logotipo, paleta, tipografia e guia de uso para toda a operação.",
    tags: ["Identidade visual", "Naming", "Guia de marca"],
  },
];

export default function Services() {
  return (
    <section id="servicos" className="py-24 md:py-32 bg-white">
      <Container>
        <SectionHeading
          kicker="o que fazemos"
          title="Três frentes, um único objetivo: seu negócio rodando melhor"
          description="Cada solução pode ser contratada separadamente ou combinada num pacote completo, dependendo do estágio do seu negócio."
        />

        <div className="mt-16 divide-y divide-amethyst/10 border-y border-amethyst/10">
          {SERVICES.map((s) => (
            <Link
              key={s.num}
              to={s.to}
              className="group grid md:grid-cols-[80px_1fr_auto] gap-6 md:gap-10 items-start md:items-center py-10 px-2 -mx-2 rounded-xl hover:bg-linen/60 transition-colors"
            >
              <span className="font-mono text-sm text-pacific">{s.num}</span>
              <div>
                <h3 className="font-display text-2xl font-semibold text-amethyst group-hover:text-orange transition-colors">
                  {s.title}
                </h3>
                <p className="mt-3 text-[15px] text-slate leading-relaxed max-w-xl">
                  {s.description}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {s.tags.map((t) => (
                    <li
                      key={t}
                      className="text-xs font-medium text-amethyst bg-amethyst/5 px-3 py-1 rounded-full"
                    >
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
              <span className="hidden md:flex w-11 h-11 rounded-full border border-amethyst/15 items-center justify-center text-amethyst group-hover:bg-orange group-hover:border-orange group-hover:text-white transition-colors">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
