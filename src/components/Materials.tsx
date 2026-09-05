import { ArrowRight, Layers, CheckCircle2, ShieldAlert } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { business, whatsappLink } from "../data/business";

export default function Materials() {
  return (
    <section id="materials" className="relative bg-slate-900/90 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Industrial Grade Materials"
          title="Sand Sourcing for Every Construction Need"
          description="Sourced directly from verified quarries and riverbed sites across Ballia to guarantee quality standards."
        />

        <div className="mt-14 grid gap-8 lg:grid-cols-2">
          {business.materials.map((m, i) => (
            <div
              key={m.id}
              className="glass-card group relative overflow-hidden rounded-3xl p-1 border border-slate-800 bg-slate-950/60 transition-all duration-300 hover:border-amber-500/40 hover:shadow-[0_20px_50px_rgba(245,158,11,0.15)]"
            >
              <div className="relative flex h-52 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-slate-900 via-slate-950 to-slate-900">
                <img
                  src={m.id === "gitti" ? "/Gitti.jpg" : "/Balu.jpg"}
                  alt={`${m.name} material stock`}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />

                {/* Overlay Gradient Badge */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                <div className="absolute top-4 left-4 flex items-center gap-2 rounded-full border border-amber-500/30 bg-slate-950/80 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-400 backdrop-blur-md">
                  <Layers size={14} />
                  <span>Grade {i === 0 ? "A Construction" : "A Masonry"}</span>
                </div>

                <div className="absolute bottom-4 left-6">
                  <h3 className="font-display text-3xl font-extrabold text-white">
                    {m.name}
                  </h3>
                  <p className="mt-1 text-xs font-bold tracking-wider text-amber-400 uppercase">
                    Primary Application: {m.useCase}
                  </p>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-sm leading-relaxed text-slate-300">
                  {m.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2 text-xs font-semibold text-slate-400 border-t border-slate-800/80 pt-5">
                  <div className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 border border-slate-800">
                    <CheckCircle2 size={13} className="text-amber-400" />
                    <span>Direct Quarry Sourced</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 border border-slate-800">
                    <CheckCircle2 size={13} className="text-amber-400" />
                    <span>High Density &amp; Clean</span>
                  </div>
                  <div className="flex items-center gap-1.5 rounded-lg bg-slate-900 px-3 py-1.5 border border-slate-800">
                    <ShieldAlert size={13} className="text-amber-400" />
                    <span>Tested Sieve Specs</span>
                  </div>
                </div>

                <div className="mt-6">
                  <Button
                    href={whatsappLink(
                      `Hello, I would like to enquire about ${m.name} supply from G India Mart.`
                    )}
                    target="_blank"
                    variant="primary"
                    icon={<ArrowRight size={16} />}
                    className="w-full !py-3 !text-xs"
                  >
                    Order {m.name} via WhatsApp
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

