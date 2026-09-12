import { Link } from "react-router-dom";
import Container from "../ui/Container";
import { WHATSAPP_LINK } from "../../lib/constants";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-amethyst text-white/70">
      <Container className="py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="/brand/symbol-gradient.jpg"
                alt="Adjom"
                className="w-8 h-8 rounded-lg bg-logo-bg"
                width="32"
                height="32"
              />
              <span className="font-display font-semibold text-lg text-white">
                Adjom
              </span>
            </div>
            <p className="text-sm leading-relaxed max-w-sm">
              Empresa de tecnologia dedicada a desenvolver o futuro de outros
              negócios. Sistemas sob medida, sites e marcas para prestadores
              de serviço e startups em Fortaleza e em todo o Brasil.
            </p>
          </div>

          <nav aria-label="Serviços">
            <p className="text-white text-sm font-semibold mb-4">Serviços</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/sites" className="hover:text-white">Criação de sites</Link></li>
              <li><Link to="/sistemas" className="hover:text-white">Sistemas sob medida</Link></li>
              <li><Link to="/automacao-ia" className="hover:text-white">Automação com IA</Link></li>
              <li><Link to="/branding" className="hover:text-white">Branding &amp; identidade</Link></li>
            </ul>
          </nav>

          <nav aria-label="Empresa">
            <p className="text-white text-sm font-semibold mb-4">Empresa</p>
            <ul className="space-y-3 text-sm">
              <li><Link to="/contato" className="hover:text-white">Contato</Link></li>
              <li>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  WhatsApp
                </a>
              </li>
              <li>Fortaleza, CE — Brasil</li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/60">
          <p>&copy; {year} Adjom. Todos os direitos reservados.</p>
          <p>Tecnologia que roda invisível nos bastidores.</p>
        </div>
      </Container>
    </footer>
  );
}
