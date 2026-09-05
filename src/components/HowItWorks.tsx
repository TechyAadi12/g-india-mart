import SectionHeading from "./SectionHeading";
import { business } from "../data/business";
import { ClipboardList, Pickaxe, Truck, CheckCircle } from "lucide-react";

const icons = [ClipboardList, Pickaxe, Truck, CheckCircle];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="Simplified Workflow"
          title="Seamless Sand Procurement in 4 Steps"
          description="We eliminate complexity by handling everything from quarry sourcing to on-site truck dispatch."
        />

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {business.howItWorks.map((step, i) => {
            const Icon = icons[i] || ClipboardList;
            return (
              <div
                key={step.step}
                className="glass-card group relative rounded-2xl p-7 border border-slate-800 bg-slate-900/50 backdrop-blur-md transition-all duration-300 hover:border-amber-500/40 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors duration-300">
                    <Icon size={24} />
                  </div>
                  <span className="font-display text-3xl font-extrabold text-slate-700 group-hover:text-amber-500/50 transition-colors">
                    {step.step}
                  </span>
                </div>

                <h3 className="mt-6 font-display text-xl font-bold text-white">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-400">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

