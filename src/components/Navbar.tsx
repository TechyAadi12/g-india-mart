import { useEffect, useState } from "react";
import { Menu, X, Phone, ShieldCheck, Sparkles } from "lucide-react";
import { business, telLink } from "../data/business";

const links = [
  { label: "Home", href: "#home" },
  { label: "Materials", href: "#materials" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Service Area", href: "#service-area" },
  { label: "About Us", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800/80 shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
          : "bg-slate-950/60 backdrop-blur-md border-b border-slate-800/40"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3.5 sm:px-8">
        <a href="#home" className="group flex items-center gap-2.5 font-display">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.4)] transition-transform duration-300 group-hover:scale-105">
            <ShieldCheck size={22} className="stroke-[2.5]" />
          </div>
          <div className="flex flex-col">
            <div className="flex items-baseline gap-1">
              <span className="text-xl font-extrabold tracking-tight text-white">G INDIA</span>
              <span className="text-xl font-extrabold tracking-tight text-amber-500">MART</span>
            </div>
            <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-400">
              Industrial Sand Supply
            </span>
          </div>
        </a>

        <nav className="hidden items-center gap-1 rounded-full border border-slate-800/80 bg-slate-900/60 px-4 py-1.5 backdrop-blur-md lg:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-xs font-semibold tracking-wide text-slate-300 transition-all hover:bg-amber-500/10 hover:text-amber-400"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href={telLink}
            className="flex items-center gap-2 text-xs font-semibold text-slate-300 transition-colors hover:text-amber-400"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-800 text-amber-400">
              <Phone size={14} />
            </div>
            <span>{business.phoneDisplay}</span>
          </a>
          <a
            href="#enquiry"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 via-amber-600 to-amber-700 px-5 py-2.5 text-xs font-extrabold uppercase tracking-wider text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all hover:shadow-[0_0_30px_rgba(245,158,11,0.5)] hover:scale-[1.02]"
          >
            <Sparkles size={14} />
            <span>Request Supply</span>
          </a>
        </div>

        <button
          className="rounded-lg border border-slate-800 bg-slate-900 p-2 text-slate-200 lg:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <div className="border-t border-slate-800 bg-slate-950/95 px-5 pb-6 pt-3 backdrop-blur-2xl lg:hidden">
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-4 py-3 text-sm font-semibold text-slate-200 transition-colors hover:bg-amber-500/10 hover:text-amber-400"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <a
            href="#enquiry"
            onClick={() => setOpen(false)}
            className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-3.5 text-center text-sm font-extrabold uppercase tracking-wider text-slate-950 shadow-lg"
          >
            <Sparkles size={16} />
            <span>Request Quote</span>
          </a>
        </div>
      )}
    </header>
  );
}

