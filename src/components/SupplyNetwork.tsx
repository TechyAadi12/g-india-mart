import { Link2 } from "lucide-react";
import { business } from "../data/business";

export default function SupplyNetwork() {
  return (
    <section className="bg-white py-20 sm:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-3 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-(--color-amber)">
              <span className="h-px w-6 bg-(--color-amber)" />
              Sourcing Network
            </p>
            <h2 className="font-display text-3xl font-bold leading-tight text-(--color-ink) sm:text-4xl">
              A Local Supply Network You Can Rely On
            </h2>
            <p className="mt-4 text-base leading-relaxed text-(--color-steel)">
              G India Mart works with sand sources across Ballia, Phephna,
              Sikandarpur, Rasra, Bairiya and Bashdih to coordinate reliable
              supply for building-material shops across Ballia district.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {business.serviceAreas.map((loc) => (
              <span
                key={loc}
                className="flex items-center gap-2 rounded-full border border-(--color-ink)/15 bg-(--color-paper) px-5 py-2.5 text-sm font-semibold text-(--color-ink)"
              >
                <Link2 size={14} className="text-(--color-amber)" />
                {loc}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
