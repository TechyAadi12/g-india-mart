import { useState, type FormEvent } from "react";
import { Send, CheckCircle2 } from "lucide-react";
import Button from "./Button";
import { openWhatsAppForm, submitForm } from "../lib/submitForm";

const initialState = {
  name: "",
  sourceName: "",
  phone: "",
  location: "",
  material: "",
  capacity: "",
  message: "",
};

export default function SupplierSection() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "done">("idle");

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const payload = { ...form, source: "supplier-network-form" };
    const result = await submitForm(payload);

    if (result.ok) {
      openWhatsAppForm("Supplier Network Details", payload);
      setStatus("done");
      setForm(initialState);
    } else {
      setStatus("idle");
    }
  };

  return (
    <section className="relative bg-slate-950 py-20 sm:py-28">
      <div className="grain-bg pointer-events-none absolute inset-0 opacity-20" />
      <div className="relative mx-auto grid max-w-6xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-3.5 py-1 text-xs font-bold uppercase tracking-widest text-amber-400">
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            Join Our Network
          </div>
          <h2 className="font-display text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            Are You a Sand Supplier?
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-slate-400">
            If you operate a reliable sand source in or around Ballia
            district and want to partner with G India Mart, register your supply network today.
          </p>
        </div>

        <div className="glass-card rounded-3xl border border-slate-800 bg-slate-900/60 p-6 sm:p-8">
          {status === "done" ? (
            <div className="flex flex-col items-center gap-4 py-12 text-center">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <CheckCircle2 size={32} className="text-amber-400" />
              </div>
              <p className="text-lg font-bold text-white">
                Thank you! We've received your details and will reach out soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-4 sm:grid-cols-2">
              <input
                required
                placeholder="Name"
                value={form.name}
                onChange={(e) => update("name", e.target.value)}
                className={darkInput}
              />
              <input
                required
                placeholder="Business / Source Name"
                value={form.sourceName}
                onChange={(e) => update("sourceName", e.target.value)}
                className={darkInput}
              />
              <input
                required
                type="tel"
                placeholder="Phone"
                value={form.phone}
                onChange={(e) => update("phone", e.target.value)}
                className={darkInput}
              />
              <input
                required
                placeholder="Location"
                value={form.location}
                onChange={(e) => update("location", e.target.value)}
                className={darkInput}
              />
              <input
                placeholder="Material Available"
                value={form.material}
                onChange={(e) => update("material", e.target.value)}
                className={darkInput}
              />
              <input
                placeholder="Approx. Supply Capacity"
                value={form.capacity}
                onChange={(e) => update("capacity", e.target.value)}
                className={darkInput}
              />
              <textarea
                placeholder="Message"
                rows={3}
                value={form.message}
                onChange={(e) => update("message", e.target.value)}
                className={`${darkInput} sm:col-span-2`}
              />
              <Button
                type="submit"
                className="sm:col-span-2"
                icon={<Send size={17} />}
              >
                {status === "loading" ? "Sending..." : "Join Our Supply Network"}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const darkInput =
  "w-full rounded-xl border border-slate-700/60 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-amber-500/70 focus:bg-slate-900 focus:shadow-[0_0_0_3px_rgba(245,158,11,0.15)]";
