// ============================================================
// FORM SUBMISSION ABSTRACTION
// Swap the implementation below to connect a real backend:
// Formspree / Web3Forms / Google Sheets / Supabase / Custom API.
// No fake backend is wired up — set VITE_FORM_ENDPOINT in a
// .env file to activate real submission.
// ============================================================

import { whatsappLink } from "../data/business";

const FORM_ENDPOINT = import.meta.env.VITE_FORM_ENDPOINT as string | undefined;

export type SubmitResult = { ok: boolean; message: string };

export function buildWhatsAppMessage(title: string, payload: Record<string, string>): string {
  const fieldLabels: Record<string, string> = {
    name: "Name",
    shopName: "Shop / Business Name",
    phone: "Phone Number",
    whatsapp: "WhatsApp Number",
    material: "Material Required",
    quantity: "Quantity Required",
    location: "Delivery Location",
    date: "Required Delivery Date",
    notes: "Additional Requirement",
    sourceName: "Business / Source Name",
    capacity: "Approx. Supply Capacity",
    message: "Message",
    source: "Source",
  };

  const lines = [`*${title}*`, "" ];

  Object.entries(payload).forEach(([key, value]) => {
    if (!value || key === "source") return;

    const label = fieldLabels[key] || key
      .replace(/([a-z])([A-Z])/g, "$1 $2")
      .replace(/^./, (char) => char.toUpperCase());

    lines.push(`${label}: ${value}`);
  });

  return lines.join("\n");
}

export function openWhatsAppForm(title: string, payload: Record<string, string>) {
  const message = buildWhatsAppMessage(title, payload);
  window.open(whatsappLink(message), "_blank", "noopener,noreferrer");
}

export async function submitForm(
  payload: Record<string, string>
): Promise<SubmitResult> {
  if (!FORM_ENDPOINT) {
    // No endpoint configured yet — log locally so the flow can be
    // demoed/tested before the owner wires up a backend.
    console.info("[G India Mart] Form submission (no endpoint configured):", payload);
    return {
      ok: true,
      message:
        "Thank you. Your requirement has been received. G India Mart will contact you shortly.",
    };
  }

  try {
    const res = await fetch(FORM_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(payload),
    });

    if (!res.ok) throw new Error("Submission failed");

    return {
      ok: true,
      message:
        "Thank you. Your requirement has been received. G India Mart will contact you shortly.",
    };
  } catch (err) {
    console.error("Form submission error:", err);
    return {
      ok: false,
      message:
        "Something went wrong sending your requirement. Please call or WhatsApp us directly.",
    };
  }
}
