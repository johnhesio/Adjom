import { WHATSAPP_LINK } from "../../lib/constants";
import WhatsAppIcon from "../ui/WhatsAppIcon";

export default function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar agora no WhatsApp com a Adjom"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full bg-orange text-white pl-4 pr-5 py-3.5 shadow-xl shadow-orange-900/30 hover:bg-orange-soft transition-colors group"
    >
      <span className="absolute inset-0 rounded-full bg-orange animate-ping opacity-30 group-hover:opacity-0" />
      <WhatsAppIcon className="w-5 h-5 relative" />
      <span className="relative text-sm font-semibold hidden sm:inline">
        Fale conosco
      </span>
    </a>
  );
}
