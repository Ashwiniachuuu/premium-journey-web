import aboutImg from "@/assets/about-interior.jpg";

const stats = [
  { value: "10K+", label: "Drivers Served" },
  { value: "50+", label: "Marques" },
  { value: "98%", label: "Satisfaction" },
  { value: "24/7", label: "Concierge" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-px mx-auto grid max-w-7xl gap-14 lg:grid-cols-2 lg:items-center lg:gap-20">
        <div className="relative">
          <div className="relative overflow-hidden rounded-2xl">
            <img
              src={aboutImg}
              alt="Interior of luxury vehicle"
              loading="lazy"
              width={1280}
              height={1280}
              className="aspect-[4/5] w-full object-cover transition-transform duration-[1200ms] hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
          <div className="glass absolute -bottom-8 -right-4 hidden rounded-xl p-5 md:block">
            <div className="font-display text-4xl font-black text-primary">A+</div>
            <div className="text-xs uppercase tracking-widest text-muted-foreground">Master Rated</div>
          </div>
          <div className="absolute -left-4 -top-4 -z-10 h-32 w-32 rounded-full bg-primary/30 blur-3xl animate-float-slow" />
        </div>

        <div>
          <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— About Drive</span>
          <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] md:text-6xl">
            Where engineering<br />meets <span className="italic font-light text-muted-foreground">obsession.</span>
          </h2>
          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            We don't sell cars. We deliver moments — the first turn of the key, the
            note of the exhaust, the precise weight of a hand-stitched wheel. Every
            vehicle in our atelier is selected, prepared, and presented by people
            who feel the road for a living.
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-border pt-10 md:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-display text-3xl font-black md:text-4xl">{s.value}</div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
