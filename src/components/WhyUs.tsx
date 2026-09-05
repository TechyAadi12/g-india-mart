import { Award, Truck, ShieldCheck, MapPin, Layers } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { business } from "../data/business";

const icons = [Award, ShieldCheck, Truck, MapPin, Layers];

export default function WhyUs() {
  return (
    <section className="relative bg-slate-900/80 py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="The G India Mart Edge"
          title="Why Leading Builders & Retailers Trust Us"
          description="Built on a decade of deep local quarry relationships, guaranteed delivery timelines, and scalable transport capacity."
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {business.whyUs.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div
                key={item.title}
                className="glass-card group relative flex flex-col justify-between rounded-2xl p-6 border border-slate-800 bg-slate-950/60 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1.5"
              >
                <div>
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500/20 to-amber-600/5 border border-amber-500/30 text-amber-400 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 font-display text-lg font-bold text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-xs leading-relaxed text-slate-400">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 h-1 w-full rounded-full bg-slate-800 group-hover:bg-gradient-to-r group-hover:from-amber-500 group-hover:to-amber-300 transition-all duration-500" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

