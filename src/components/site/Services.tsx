import { Gauge, ShieldCheck, Wrench, Sparkles, Key, Trophy } from "lucide-react";

const services = [
  { icon: Gauge, title: "Performance Tuning", desc: "Bespoke remapping and exhaust work tuned by engineers, not algorithms." },
  { icon: ShieldCheck, title: "Certified Pre-Owned", desc: "200-point inspection, full provenance, two-year mechanical warranty." },
  { icon: Wrench, title: "Service Atelier", desc: "Factory-trained technicians, OEM parts, white-glove collection & return." },
  { icon: Sparkles, title: "Detail & PPF", desc: "Ceramic coating, paint protection film, and hand-finished correction." },
  { icon: Key, title: "Concierge Sales", desc: "Source any vehicle, anywhere. Discreet, fast, and on your terms." },
  { icon: Trophy, title: "Track Days", desc: "Private circuit access with professional instruction and lap data." },
];

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— Services</span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl font-black leading-[1.05] md:text-6xl">
              Every detail,<br />deliberately considered.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            From the first conversation to the last service, our craft is invisible
            until you need it — then it's everything.
          </p>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="group relative bg-background p-8 transition-all duration-500 hover:bg-card md:p-10"
            >
              <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-secondary text-primary transition-all duration-500 group-hover:bg-primary group-hover:text-primary-foreground group-hover:shadow-[0_10px_30px_-10px_var(--primary)]">
                <s.icon className="h-5 w-5" />
              </div>
              <h3 className="font-display text-xl font-bold">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground">{s.desc}</p>
              <span className="absolute right-8 top-8 font-display text-xs text-muted-foreground/40">
                0{i + 1}
              </span>
              <div className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-primary transition-transform duration-500 group-hover:scale-x-100" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
