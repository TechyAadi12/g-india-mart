import SectionHeading from "./SectionHeading";
import { business } from "../data/business";
import { Star, Building2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="relative bg-slate-900/80 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_rgba(245,158,11,0.07),_transparent_60%)]" />
      <div className="relative mx-auto max-w-4xl px-5 sm:px-8">
        <SectionHeading eyebrow="About Us" title="About G India Mart" align="center" />

        <div className="mt-10 glass-card mx-auto rounded-3xl border border-slate-800 bg-slate-950/60 p-8 sm:p-12 text-center">
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-slate-300 sm:text-lg">
            {business.about}
          </p>

          <div className="mx-auto mt-10 flex max-w-sm items-center justify-center gap-5 border-t border-slate-800 pt-8">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-500 to-amber-700 font-display text-xl font-black text-slate-950 shadow-[0_0_20px_rgba(245,158,11,0.4)]">
              AK
            </div>
            <div className="text-left">
              <div className="flex items-center gap-2 mb-0.5">
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <Star size={14} className="text-amber-400 fill-amber-400" />
              </div>
              <p className="font-display text-lg font-extrabold text-white">
                {business.ownerName}
              </p>
              <div className="flex items-center gap-1.5 mt-0.5 text-slate-400 text-sm">
                <Building2 size={13} />
                <span>Owner &amp; Founder, G India Mart</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
