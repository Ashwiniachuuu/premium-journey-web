import { useMemo, useState } from "react";
import { X } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g2 from "@/assets/gallery-2.jpg";
import g3 from "@/assets/gallery-3.jpg";
import g4 from "@/assets/gallery-4.jpg";
import g5 from "@/assets/gallery-5.jpg";
import g6 from "@/assets/gallery-6.jpg";

type Item = { src: string; title: string; tag: "Road" | "Detail" | "Studio" };

const items: Item[] = [
  { src: g1, title: "Coastal Run", tag: "Road" },
  { src: g2, title: "Forged Carbon", tag: "Detail" },
  { src: g3, title: "Obsidian Grille", tag: "Detail" },
  { src: g4, title: "Last Light", tag: "Road" },
  { src: g5, title: "Midnight City", tag: "Road" },
  { src: g6, title: "The Atelier", tag: "Studio" },
];

const filters = ["All", "Road", "Detail", "Studio"] as const;

export function Gallery() {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const [active, setActive] = useState<Item | null>(null);

  const visible = useMemo(
    () => (filter === "All" ? items : items.filter((i) => i.tag === filter)),
    [filter],
  );

  return (
    <section id="gallery" className="relative bg-card py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— Gallery</span>
            <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] md:text-6xl">
              Moments in<br />motion.
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`rounded-full px-5 py-2 text-xs font-semibold uppercase tracking-widest transition-all ${
                  filter === f
                    ? "bg-primary text-primary-foreground"
                    : "bg-background text-muted-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid auto-rows-[280px] grid-cols-2 gap-3 md:grid-cols-4 md:gap-5">
          {visible.map((item, i) => (
            <button
              key={item.src}
              onClick={() => setActive(item)}
              className={`group relative overflow-hidden rounded-xl bg-background ${
                i % 5 === 0 ? "md:col-span-2 md:row-span-2" : ""
              }`}
            >
              <img
                src={item.src}
                alt={item.title}
                loading="lazy"
                width={1024}
                height={1024}
                className="h-full w-full object-cover transition-transform duration-[900ms] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-transparent opacity-80" />
              <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-4 text-left md:p-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.25em] text-primary">{item.tag}</div>
                  <div className="font-display text-base font-bold md:text-lg">{item.title}</div>
                </div>
                <span className="translate-y-2 rounded-full bg-primary/90 px-3 py-1 text-[10px] font-semibold uppercase tracking-widest text-primary-foreground opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  View
                </span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {active && (
        <div
          onClick={() => setActive(null)}
          className="fixed inset-0 z-[60] flex items-center justify-center bg-background/90 p-4 backdrop-blur-md animate-in fade-in duration-300"
        >
          <button
            aria-label="Close"
            className="absolute right-6 top-6 flex h-11 w-11 items-center justify-center rounded-full bg-secondary text-foreground transition hover:bg-primary hover:text-primary-foreground"
          >
            <X className="h-5 w-5" />
          </button>
          <img
            src={active.src}
            alt={active.title}
            className="max-h-[85vh] max-w-[95vw] rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
}
