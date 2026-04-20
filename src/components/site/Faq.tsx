import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  {
    q: "Do you ship internationally?",
    a: "Yes. We coordinate enclosed transport, customs, and registration in over 40 countries — your vehicle arrives detailed and ready to drive.",
  },
  {
    q: "What does your warranty cover?",
    a: "Every certified vehicle ships with a two-year mechanical and electrical warranty, extendable up to five years.",
  },
  {
    q: "Can you find a specific car?",
    a: "Sourcing is what we do best. Tell us the spec — colour, year, options, history — and we'll bring it to your door.",
  },
  {
    q: "How are track days organised?",
    a: "Members-only days at Spa, Silverstone, and Portimão. Coaching, telemetry, garage and lunch included.",
  },
  {
    q: "Do you accept trade-ins?",
    a: "Absolutely. Submit your vehicle for a no-obligation valuation and we'll respond within 24 hours.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="relative py-28 md:py-36">
      <div className="container-px mx-auto grid max-w-7xl gap-14 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— FAQ</span>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] md:text-5xl">
            Questions, answered.
          </h2>
          <p className="mt-5 max-w-md text-sm text-muted-foreground">
            Can't find what you're looking for? Our concierge team is one
            message away — we typically reply within the hour.
          </p>
        </div>
        <div className="divide-y divide-border border-y border-border">
          {faqs.map((f, i) => {
            const isOpen = open === i;
            return (
              <button
                key={i}
                onClick={() => setOpen(isOpen ? null : i)}
                className="block w-full py-6 text-left"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="font-display text-lg font-semibold md:text-xl">{f.q}</span>
                  <span
                    className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border transition-all duration-300 ${
                      isOpen ? "rotate-45 bg-primary text-primary-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <Plus className="h-4 w-4" />
                  </span>
                </div>
                <div
                  className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-500 ${
                    isOpen ? "mt-4 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <p className="overflow-hidden pr-12 text-muted-foreground">{f.a}</p>
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
