import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Container from "../ui/Container";
import WhatsAppButton from "../ui/WhatsAppButton";

const NAV_LINKS = [
  { to: "/sites", label: "Sites" },
  { to: "/sistemas", label: "Sistemas" },
  { to: "/branding", label: "Branding" },
  { to: "/contato", label: "Contato" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-40 transition-all duration-200 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md border-b border-amethyst/10"
          : "bg-transparent"
      }`}
    >
      <Container className="flex items-center justify-between py-4">
        <Link to="/" className="flex items-center gap-2" onClick={() => setOpen(false)}>
          <img
            src="/brand/symbol-gradient.jpg"
            alt="Adjom"
            className="w-8 h-8 rounded-lg bg-logo-bg"
            width="32"
            height="32"
          />
          <span className="font-display font-semibold text-lg text-amethyst">
            Adjom
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-1" aria-label="Navegação principal">
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              className={({ isActive }) =>
                `px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  isActive
                    ? "text-amethyst bg-amethyst/5"
                    : "text-slate hover:text-amethyst"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:block">
          <WhatsAppButton message="Vim pelo site, queria um orçamento.">
            Pedir orçamento
          </WhatsAppButton>
        </div>

        <button
          ref={toggleRef}
          type="button"
          className="md:hidden w-10 h-10 flex items-center justify-center rounded-lg text-amethyst"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none" aria-hidden="true">
            {open ? (
              <path d="M4 4L18 18M18 4L4 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M2 6h18M2 11h18M2 16h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <div
          id="mobile-menu"
          className="md:hidden bg-white border-t border-amethyst/10 px-6 py-6 flex flex-col gap-1"
        >
          {NAV_LINKS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                `px-4 py-3 rounded-lg text-[15px] font-medium ${
                  isActive ? "bg-amethyst/5 text-amethyst" : "text-slate"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
          <div className="mt-3">
            <WhatsAppButton
              className="w-full"
              message="Vim pelo site, queria um orçamento."
            >
              Pedir orçamento
            </WhatsAppButton>
          </div>
        </div>
      )}
    </header>
  );
}
