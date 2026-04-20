import { Quote } from "lucide-react";

const reviews = [
  {
    name: "Alessandra V.",
    role: "Collector, Milan",
    text: "Drive sourced my dream 911 in eleven days. The provenance file alone was worth the call.",
  },
  {
    name: "Marcus Hale",
    role: "Founder, Vantage Capital",
    text: "Service like a five-star hotel; engineering like a Le Mans pit crew. Nothing else compares.",
  },
  {
    name: "Yuki Tanaka",
    role: "Architect, Tokyo",
    text: "I expected a transaction. I got a relationship — and a car that drives the way it looks.",
  },
  {
    name: "Lena Brandt",
    role: "Racing Driver",
    text: "Their track-day program is the best-kept secret in motorsport. Period.",
  },
];

export function Testimonials() {
  const items = [...reviews, ...reviews];
  return (
    <section className="relative overflow-hidden py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— Voices</span>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] md:text-6xl">
            Praise from<br />the discerning.
          </h2>
        </div>
      </div>

      <div className="relative mt-16">
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-32 bg-gradient-to-r from-background to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-32 bg-gradient-to-l from-background to-transparent" />

        <div className="flex w-max animate-marquee gap-6">
          {items.map((r, i) => (
            <figure
              key={i}
              className="flex w-[340px] shrink-0 flex-col gap-5 rounded-2xl border border-border bg-card p-7 md:w-[420px] md:p-8"
            >
              <Quote className="h-6 w-6 text-primary" />
              <blockquote className="text-base leading-relaxed text-foreground/90 md:text-lg">
                "{r.text}"
              </blockquote>
              <figcaption className="mt-auto flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 font-display text-sm font-bold text-primary">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <div className="text-sm font-semibold">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
