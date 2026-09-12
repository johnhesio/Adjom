import Container from "../ui/Container";
import WhatsAppButton from "../ui/WhatsAppButton";

const STATS = [
  { value: "100%", label: "sob medida — nada de templates prontos" },
  { value: "3 áreas", label: "sites, sistemas e branding num só lugar" },
  { value: "1 time", label: "que acompanha do briefing ao pós-lançamento" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pt-36 pb-24 md:pt-44 md:pb-32">
      <div
        aria-hidden="true"
        className="absolute -top-40 right-[-220px] w-[720px] h-[720px] rounded-full opacity-40 blur-3xl"
        style={{
          background:
            "radial-gradient(circle at 30% 30%, rgba(194,65,12,0.35), transparent 65%)",
        }}
      />
      <Container className="relative grid lg:grid-cols-[1.05fr_0.95fr] gap-16 items-center">
        <div>
          <p className="kicker mb-5">tecnologia sob medida · fortaleza / ce</p>
          <h1 className="text-[2.6rem] leading-[1.08] md:text-6xl font-semibold text-amethyst">
            Desenvolvemos o futuro do seu negócio.
          </h1>
          <p className="mt-6 text-lg text-slate leading-relaxed max-w-xl">
            Criamos sistemas sob medida, sites e marcas para prestadores de
            serviço e startups — traduzindo tecnologia complexa em soluções
            simples, rápidas e acessíveis.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <WhatsAppButton
              size="lg"
              message="Olá! Vi o site da Adjom e quero um orçamento personalizado."
            >
              Solicitar orçamento no WhatsApp
            </WhatsAppButton>
            <a
              href="#servicos"
              className="text-sm font-semibold text-amethyst hover:text-orange transition-colors"
            >
              Ver o que fazemos ↓
            </a>
          </div>

          <dl className="mt-14 grid grid-cols-3 gap-6 max-w-xl">
            {STATS.map((s) => (
              <div key={s.label} className="border-t border-amethyst/10 pt-4">
                <dt className="sr-only">{s.label}</dt>
                <dd className="font-display font-semibold text-xl text-amethyst">
                  {s.value}
                </dd>
                <p className="mt-1 text-xs text-slate leading-snug">
                  {s.label}
                </p>
              </div>
            ))}
          </dl>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-full max-w-sm">
            <div className="absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-orange/15 to-amethyst/10 blur-2xl" aria-hidden="true" />
            <div className="relative rounded-3xl border border-amethyst/10 bg-white shadow-2xl shadow-amethyst/10 overflow-hidden animate-float-slow">
              <div className="bg-amethyst px-5 py-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <img
                    src="/brand/symbol-orange.jpg"
                    alt=""
                    width="20"
                    height="20"
                    className="w-5 h-5 rounded-md"
                  />
                  <span className="text-white text-sm font-semibold font-display">
                    painel Adjom
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-pacific animate-pulse-soft" />
              </div>
              <div className="p-6">
                <p className="kicker mb-2">status</p>
                <p className="text-amethyst font-display font-semibold text-lg mb-6">
                  Sistema sincronizado
                </p>
                <div className="flex items-end gap-2 h-20 mb-6">
                  {[40, 65, 30, 85, 55, 70, 45].map((h, i) => (
                    <span
                      key={i}
                      className="flex-1 rounded-t-sm"
                      style={{
                        height: `${h}%`,
                        background: i % 3 === 0 ? "#c2410c" : "#6db1bf",
                      }}
                    />
                  ))}
                </div>
                <div className="flex gap-2">
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-orange/10 text-orange">
                    + nova automação
                  </span>
                  <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-linen text-amethyst">
                    exportar
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
