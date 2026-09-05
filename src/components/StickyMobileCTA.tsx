import { Phone, MessageCircle } from "lucide-react";
import { telLink, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "../data/business";

export default function StickyMobileCTA() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 flex items-center gap-2 border-t border-slate-800 bg-slate-950/90 px-3 py-3 backdrop-blur-xl lg:hidden">
      <a
        href={telLink}
        className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-slate-700 bg-slate-900 py-3 text-sm font-bold text-white transition-colors hover:border-amber-500/50"
      >
        <Phone size={16} className="text-amber-400" />
        Call Now
      </a>
      <a
        href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
        target="_blank"
        rel="noopener noreferrer"
        className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 py-3 text-sm font-extrabold text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]"
      >
        <MessageCircle size={16} />
        WhatsApp
      </a>
    </div>
  );
}

