import { Phone, Truck, Shield, Clock, MapPin, Sparkles } from "lucide-react";
import Button from "./Button";
import { business, telLink } from "../data/business";

export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-slate-950 py-16 sm:py-24 lg:py-32">
      {/* Dynamic Background Effects */}
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-60" />
      <div className="pointer-events-none absolute -top-40 left-1/2 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-gradient-to-tr from-amber-500/20 via-amber-600/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute bottom-0 right-0 h-[400px] w-[400px] rounded-full bg-amber-500/5 blur-3xl" />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-8">
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow Pill */}
          <div className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-slate-900/80 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-400 backdrop-blur-md shadow-[0_0_15px_rgba(245,158,11,0.15)]">
            <span className="flex h-2 w-2 rounded-full bg-amber-400 animate-pulse" />
            <MapPin size={13} className="text-amber-400" />
            <span>Sand Sourcing &amp; Bulk Supply · {business.serviceArea}</span>
          </div>

          {/* Main Title */}
          <h1 className="mt-8 font-display text-4xl font-extrabold tracking-tight text-white sm:text-6xl lg:text-7xl lg:leading-[1.1]">
            Premium Sand Supply for <br className="hidden sm:inline" />
            <span className="text-gradient-amber">Building Material</span> Retailers
          </h1>

          {/* Subtitle */}
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 sm:text-xl">
            Directly connecting building material suppliers and contractors with top-tier sand sources across Ballia district. Guaranteed volume, fast fulfillment, and seamless transport.
          </p>

          {/* Action Buttons */}
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
            <Button href="#enquiry" variant="primary" icon={<Sparkles size={18} />}>
              REQUEST BULK SUPPLY
            </Button>
            <Button href={telLink} variant="ghost" icon={<Phone size={18} />}>
              Call Direct: {business.phoneDisplay}
            </Button>
          </div>

          {/* Trust Badges Bar */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-4 text-xs font-semibold text-slate-400">
            <div className="flex items-center gap-2 rounded-lg bg-slate-900/60 px-3.5 py-2 border border-slate-800">
              <Truck size={14} className="text-amber-400" />
              <span>20+ Trucks Daily Delivery</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-900/60 px-3.5 py-2 border border-slate-800">
              <Shield size={14} className="text-amber-400" />
              <span>Verified Source Quality</span>
            </div>
            <div className="flex items-center gap-2 rounded-lg bg-slate-900/60 px-3.5 py-2 border border-slate-800">
              <Clock size={14} className="text-amber-400" />
              <span>10+ Years Sourcing Trust</span>
            </div>
          </div>

          {/* Stats Glass Grid */}
          <div className="mt-14 w-full">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:gap-6">
              {business.stats.map((s) => (
                <div
                  key={s.label}
                  className="glass-card rounded-2xl p-6 text-center shadow-xl"
                >
                  <p className="font-display text-3xl font-extrabold text-amber-400 sm:text-4xl">
                    {s.value}
                  </p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-slate-400 uppercase">
                    {s.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

