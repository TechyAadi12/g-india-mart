import { MapPin, Navigation, ShieldCheck, Truck } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { business } from "../data/business";

const coverageHighlights = [
  {
    title: "Reliable Dispatch",
    text: "Coordinated delivery planning for construction sites and material dealers.",
    icon: Truck,
  },
  {
    title: "Local Network",
    text: "Direct access to nearby suppliers across Ballia and surrounding hubs.",
    icon: Navigation,
  },
  {
    title: "Quality First",
    text: "Material sourcing matched to your project needs with consistent supply flow.",
    icon: ShieldCheck,
  },
];

export default function ServiceArea() {
  return (
    <section id="service-area" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Service Coverage"
          title="Bulk Sand Delivery Across Ballia District"
          description="Deep quarry partnerships and coordinated logistics covering all major construction hubs in Ballia."
        />

        <div className="mt-12 grid gap-8 lg:grid-cols-[1.3fr_0.9fr] lg:items-stretch">
          <div className="glass-card rounded-3xl border border-slate-800 bg-slate-900/60 p-7 sm:p-9">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
              <MapPin size={12} />
              <span>Active Delivery Zones</span>
            </div>

            <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {business.serviceAreas.map((loc) => (
                <div
                  key={loc}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-950/60 px-4 py-3 transition-all hover:border-amber-500/40 hover:bg-slate-900"
                >
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-amber-500/10 text-amber-400">
                    <MapPin size={14} />
                  </div>
                  <span className="text-sm font-semibold text-slate-100">{loc}</span>
                </div>
              ))}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-800 bg-slate-950/40 p-5">
              <div className="flex items-center gap-2 text-amber-400 mb-2">
                <Navigation size={16} />
                <h3 className="font-display text-base font-bold text-white">Local Sourcing Network</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-400">
                We coordinate sand supply through a dependable local network spanning Ballia, Phephna, Sikandarpur, Rasra, Bairiya and Bashdih — keeping material flow consistent for all construction needs.
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="glass-card rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-7">
              <p className="text-xs font-bold uppercase tracking-[0.24em] text-amber-400">Primary zone</p>
              <h3 className="mt-3 font-display text-2xl font-bold text-white">{business.serviceArea}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-400">
                Serving contractors, retailers and construction teams with dependable supply coordination across the full district.
              </p>
            </div>

            <div className="space-y-3">
              {coverageHighlights.map(({ title, text, icon: Icon }) => (
                <div
                  key={title}
                  className="glass-card flex items-start gap-3 rounded-2xl border border-slate-800 bg-slate-900/60 p-4"
                >
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-amber-500/20 bg-amber-500/10 text-amber-400">
                    <Icon size={17} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">{title}</h4>
                    <p className="mt-1 text-sm leading-relaxed text-slate-400">{text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

