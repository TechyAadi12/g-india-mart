import { Phone, MapPin, MessageCircle, Send, UserRound } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { business, telLink, whatsappLink, DEFAULT_WHATSAPP_MESSAGE } from "../data/business";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Get In Touch"
          title="Contact G India Mart"
          description="Reach out directly via phone or WhatsApp for the fastest response."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          {/* Contact Details Card */}
          <div className="glass-card rounded-3xl border border-slate-800 bg-slate-900/60 p-7 sm:p-9">
            <div className="flex items-center gap-4 mb-7 pb-7 border-b border-slate-800">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/20 text-amber-400">
                <UserRound size={26} />
              </div>
              <div>
                <h3 className="font-display text-xl font-extrabold text-white">
                  {business.businessName}
                </h3>
                <p className="mt-0.5 text-sm text-slate-400">
                  Owner: {business.ownerName}
                </p>
              </div>
            </div>

            <div className="space-y-5">
              <div className="flex items-start gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <MapPin size={18} />
                </div>
                <p className="text-sm leading-relaxed text-slate-300">
                  {business.address}
                </p>
              </div>

              <div className="flex items-center gap-4 rounded-xl border border-slate-800 bg-slate-950/50 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400">
                  <Phone size={18} />
                </div>
                <a href={telLink} className="text-sm font-bold text-slate-100 hover:text-amber-400 transition-colors">
                  {business.phoneDisplay}
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {business.serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-lg border border-slate-800 bg-slate-900 px-3 py-1 text-xs font-semibold text-slate-400"
                  >
                    {area}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button href={telLink} icon={<Phone size={16} />} className="flex-1">
                Call Now
              </Button>
              <Button
                href={whatsappLink(DEFAULT_WHATSAPP_MESSAGE)}
                target="_blank"
                variant="ghost"
                icon={<MessageCircle size={16} />}
                className="flex-1"
              >
                WhatsApp
              </Button>
            </div>
            <Button href="#enquiry" variant="ghost" icon={<Send size={16} />} className="mt-3 w-full">
              Submit Enquiry Form
            </Button>
          </div>

          {/* Stat Card */}
          <div className="flex flex-col justify-center items-center gap-6 overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/50 p-8 text-center sm:p-10">
            <div className="pointer-events-none absolute h-64 w-64 rounded-full bg-amber-500/5 blur-3xl" />

            <div className="relative">
              <p className="font-display text-7xl font-extrabold text-amber-400">
                {business.experience}
              </p>
              <p className="mt-2 text-sm font-bold uppercase tracking-widest text-slate-300">
                Years in Ballia Sand Supply
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 w-full text-center">
              {business.stats.slice(1).map((s) => (
                <div key={s.label} className="rounded-xl bg-slate-950/60 border border-slate-800 p-4">
                  <p className="font-display text-2xl font-extrabold text-amber-400">{s.value}</p>
                  <p className="mt-1 text-[10px] font-semibold uppercase tracking-wide text-slate-500">{s.label}</p>
                </div>
              ))}
            </div>

            <p className="text-sm leading-relaxed text-slate-500 max-w-xs">
              Fastest response via phone or WhatsApp during business hours.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
