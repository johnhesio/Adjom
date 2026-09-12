import { Link } from "react-router-dom";
import Container from "../components/ui/Container";
import WhatsAppButton from "../components/ui/WhatsAppButton";
import { useSEO } from "../lib/useSEO";

export default function NotFound() {
  useSEO({
    title: "Página não encontrada",
    description: "A página que você tentou acessar não existe.",
    path: "/404",
  });

  return (
    <section className="pt-40 pb-28 bg-white min-h-[70vh] flex items-center">
      <Container className="text-center max-w-lg">
        <p className="kicker mb-4 justify-center flex">erro 404</p>
        <h1 className="text-3xl md:text-4xl font-semibold text-amethyst">
          Essa página não existe
        </h1>
        <p className="mt-4 text-slate text-[15px] leading-relaxed">
          O link pode estar quebrado ou a página pode ter mudado de endereço.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold text-amethyst border border-amethyst/15 hover:border-amethyst/30"
          >
            Voltar para a home
          </Link>
          <WhatsAppButton message="Olá! Cheguei numa página que não encontrei no site.">
            Falar no WhatsApp
          </WhatsAppButton>
        </div>
      </Container>
    </section>
  );
}
