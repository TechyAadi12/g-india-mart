import { useState, type FormEvent } from "react";
import { CheckCircle2, Sparkles } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Button from "./Button";
import { business } from "../data/business";
import { openWhatsAppForm, submitForm } from "../lib/submitForm";

const initialState = {
  name: "",
  shopName: "",
  phone: "",
  whatsapp: "",
  material: "",
  quantity: "",
  location: "",
  date: "",
  notes: "",
};

export default function EnquiryForm() {
  const [form, setForm] = useState(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "done" | "error">("idle");
  const [message, setMessage] = useState("");

  const update = (key: keyof typeof form, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    const payload = { ...form, source: "website-enquiry-form" };
    const result = await submitForm(payload);
    setMessage(result.message);
    setStatus(result.ok ? "done" : "error");

    if (result.ok) {
      openWhatsAppForm("Website Enquiry Details", payload);
      setForm(initialState);
    }
  };

  return (
    <section id="enquiry" className="relative bg-slate-900/80 py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(245,158,11,0.08),_transparent_60%)]" />
      <div className="relative mx-auto max-w-5xl px-5 sm:px-8">
        <SectionHeading
          eyebrow="REQUEST BULK SUPPLY"
          title="Request Your Sand Supply"
          align="center"
          description="Tell us your requirement and we'll coordinate sourcing, pricing, and delivery details."
        />

        <div className="mt-12 overflow-hidden rounded-3xl border border-slate-800 bg-slate-950/80 shadow-2xl backdrop-blur-xl">
          {status === "done" ? (
            <div className="flex flex-col items-center gap-5 px-8 py-24 text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-amber-500/10 border border-amber-500/30">
                <CheckCircle2 size={40} className="text-amber-400" />
              </div>
              <p className="max-w-md text-xl font-bold text-white">{message}</p>
              <p className="text-sm text-slate-400">We'll reach out on WhatsApp shortly.</p>
              <Button variant="ghost" onClick={() => setStatus("idle")} className="mt-2">
                Submit Another Requirement
              </Button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid gap-6 p-7 sm:grid-cols-2 sm:p-10 lg:p-12">
              <Field label="Name" required>
                <input
                  required
                  value={form.name}
                  onChange={(e) => update("name", e.target.value)}
                  className={inputClass}
                  placeholder="Your full name"
                />
              </Field>

              <Field label="Shop / Business Name" required>
                <input
                  required
                  value={form.shopName}
                  onChange={(e) => update("shopName", e.target.value)}
                  className={inputClass}
                  placeholder="Your shop name"
                />
              </Field>

              <Field label="Phone Number" required>
                <input
                  required
                  type="tel"
                  value={form.phone}
                  onChange={(e) => update("phone", e.target.value)}
                  className={inputClass}
                  placeholder="10-digit mobile number"
                />
              </Field>

              <Field label="WhatsApp Number">
                <input
                  type="tel"
                  value={form.whatsapp}
                  onChange={(e) => update("whatsapp", e.target.value)}
                  className={inputClass}
                  placeholder="If different from phone"
                />
              </Field>

              <Field label="Material Required" required>
                <select
                  required
                  value={form.material}
                  onChange={(e) => update("material", e.target.value)}
                  className={inputClass}
                >
                  <option value="">Select material</option>
                  {business.materials.map((m) => (
                    <option key={m.id} value={m.name}>
                      {m.name}
                    </option>
                  ))}
                </select>
              </Field>

              <Field label="Quantity Required" required>
                <input
                  required
                  value={form.quantity}
                  onChange={(e) => update("quantity", e.target.value)}
                  className={inputClass}
                  placeholder="e.g. 2 trucks, 500 sq ft"
                />
              </Field>

              <Field label="Delivery Location" required>
                <input
                  required
                  value={form.location}
                  onChange={(e) => update("location", e.target.value)}
                  className={inputClass}
                  placeholder="Village / town / landmark"
                />
              </Field>

              <Field label="Required Delivery Date">
                <input
                  type="date"
                  value={form.date}
                  onChange={(e) => update("date", e.target.value)}
                  className={inputClass}
                />
              </Field>

              <div className="sm:col-span-2">
                <Field label="Additional Requirement">
                  <textarea
                    value={form.notes}
                    onChange={(e) => update("notes", e.target.value)}
                    rows={3}
                    className={inputClass}
                    placeholder="Any other details"
                  />
                </Field>
              </div>

              {status === "error" && (
                <p className="sm:col-span-2 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-medium text-red-400">
                  {message}
                </p>
              )}

              <div className="sm:col-span-2">
                <Button
                  type="submit"
                  className="w-full !py-4 !text-sm"
                  icon={<Sparkles size={17} />}
                >
                  {status === "loading" ? "Submitting..." : "Submit Your Requirement"}
                </Button>
              </div>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

const inputClass =
  "w-full rounded-xl border border-slate-700/60 bg-slate-900/80 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 outline-none transition-all duration-200 focus:border-amber-500/70 focus:bg-slate-900 focus:shadow-[0_0_0_3px_rgba(245,158,11,0.15)] focus:ring-0";

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-xs font-bold uppercase tracking-widest text-slate-400">
        {label} {required && <span className="text-amber-400">*</span>}
      </span>
      {children}
    </label>
  );
}
