import { Phone, MapPin, MessageCircle, ShieldCheck } from "lucide-react";
import { business, telLink, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "../data/business";

const footerLinks = [
  { label: "Home", href: "#home" },
  { label: "Materials", href: "#materials" },
  // { label: "How It Works", href: "#how-it-works" },
  { label: "Service Area", href: "#service-area" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const FacebookIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const InstagramIcon = () => (
  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
);

const socialLinks = [
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: whatsappLink(DEFAULT_WHATSAPP_MESSAGE),
    external: true,
    isComponent: true,
  },
  {
    icon: FacebookIcon,
    label: "Facebook",
    href: business.socials.facebook,
    external: true,
    isComponent: false,
  },
  {
    icon: InstagramIcon,
    label: "Instagram",
    href: business.socials.instagram,
    external: true,
    isComponent: false,
  },
];

export default function Footer() {
  return (
    <footer className="relative bg-slate-950 border-t border-slate-800/80 text-white">
      {/* Subtle glow at top */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      {/* Main Footer Content */}
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-400 to-amber-600 text-slate-950 shadow-[0_0_15px_rgba(245,158,11,0.3)]">
                <ShieldCheck size={20} className="stroke-[2.5]" />
              </div>
              <div>
                <div className="flex items-baseline gap-1 font-display">
                  <span className="text-xl font-extrabold text-white">G INDIA</span>
                  <span className="text-xl font-extrabold text-amber-500">MART</span>
                </div>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-slate-500">
                  Industrial Sand Supply
                </span>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-slate-400 max-w-xs">
              {business.tagline} — serving {business.serviceArea} for over a decade with unmatched sourcing reliability.
            </p>

            {/* Social Links */}
            <div className="flex gap-3 pt-1">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.external ? "_blank" : undefined}
                    rel={social.external ? "noopener noreferrer" : undefined}
                    aria-label={social.label}
                    className="flex h-9 w-9 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-400 transition-all hover:border-amber-500/50 hover:bg-amber-500 hover:text-slate-950 hover:scale-110"
                  >
                    {social.isComponent ? <Icon size={16} /> : <Icon />}
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5">
              Navigate
            </h4>
            <ul className="space-y-3">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 transition-colors hover:text-amber-400"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5">
              Services
            </h4>
            <ul className="space-y-3">
              <li><p className="text-sm text-slate-400">{business.materials[0]?.name}</p></li>
              <li><p className="text-sm text-slate-400">{business.materials[1]?.name}</p></li>
              <li><p className="text-sm text-slate-400">Bulk Transport Coordination</p></li>
              <li><p className="text-sm text-slate-400">Local Quarry Sourcing</p></li>
              <li><p className="text-sm text-slate-400">Same-Day Dispatch Available</p></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-widest text-amber-400 mb-5">
              Get In Touch
            </h4>
            <div className="space-y-4">
              <a
                href={telLink}
                className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-300 transition-all hover:border-amber-500/50 hover:text-amber-400"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                  <Phone size={15} />
                </div>
                <span className="font-semibold">{business.phoneDisplay}</span>
              </a>
              <div className="flex items-start gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-3 text-sm text-slate-300">
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400 mt-0.5">
                  <MapPin size={15} />
                </div>
                <div>
                  <p className="font-semibold text-slate-200">{business.serviceArea}</p>
                  <p className="mt-0.5 text-xs text-slate-500 leading-snug">{business.address}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom strip */}
        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-slate-800 pt-8 text-center sm:flex-row">
          <p className="text-xs text-slate-600">
            © {new Date().getFullYear()} G India Mart. All rights reserved.
          </p>
          <p className="text-xs text-slate-600">
            Sand sourcing &amp; supply across Ballia, UP
          </p>
        </div>
      </div>
    </footer>
  );
}
