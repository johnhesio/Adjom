import { buildWhatsappLink } from "../../lib/constants";
import WhatsAppIcon from "./WhatsAppIcon";

const VARIANTS = {
  primary:
    "bg-orange text-white hover:bg-orange-soft shadow-lg shadow-orange-900/20",
  dark: "bg-amethyst text-white hover:bg-amethyst-ink",
  ghost:
    "bg-white text-amethyst border border-amethyst/15 hover:border-amethyst/30",
  outlineLight:
    "bg-transparent text-white border border-white/40 hover:bg-white/10",
};

export default function WhatsAppButton({
  message,
  children = "Falar no WhatsApp",
  variant = "primary",
  className = "",
  size = "md",
  showIcon = true,
  ariaLabel,
}) {
  const href = buildWhatsappLink(message);
  const sizeClass =
    size === "lg" ? "px-7 py-4 text-[15.5px]" : "px-5 py-3 text-sm";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel || `${children} — Adjom`}
      className={`inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-colors duration-150 ${sizeClass} ${VARIANTS[variant]} ${className}`}
    >
      {showIcon && <WhatsAppIcon className="w-[18px] h-[18px]" />}
      {children}
    </a>
  );
}
