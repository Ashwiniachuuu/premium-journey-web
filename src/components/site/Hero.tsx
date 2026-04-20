import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-car.jpg";

export function Hero() {
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current) return;
      const y = window.scrollY;
      imgRef.current.style.transform = `translate3d(0, ${y * 0.25}px, 0) scale(${1 + y * 0.0004})`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section id="home" className="relative h-screen min-h-[640px] w-full overflow-hidden">
      {/* Parallax background */}
      <div ref={imgRef} className="absolute inset-0 -z-10 will-change-transform">
        <img
          src={heroImg}
          alt="Black luxury sports car with red rim lighting"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
        <div className="absolute inset-0 opacity-70" style={{ background: "var(--gradient-radial-red)" }} />
      </div>

      <div className="container-px relative mx-auto flex h-full max-w-7xl flex-col justify-end pb-20 md:justify-center md:pb-0">
        <div className="max-w-3xl">
          <span className="reveal inline-flex items-center gap-2 rounded-full border border-border bg-background/40 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground backdrop-blur">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" /> Est. 2024 — Performance Atelier
          </span>
          <h1 className="reveal reveal-delay-1 mt-6 font-display text-5xl font-black leading-[0.95] tracking-tight md:text-7xl lg:text-8xl">
            Drive Your<br />
            <span className="text-gradient">Dream</span> <span className="italic font-light">Experience</span>
          </h1>
          <p className="reveal reveal-delay-2 mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            A curated collection of the world's most coveted machines —
            engineered for precision, sculpted for the road, built for the few.
          </p>
          <div className="reveal reveal-delay-3 mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#gallery"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground shadow-[0_20px_60px_-20px_var(--primary)] transition-all hover:scale-[1.03] hover:bg-primary/90"
            >
              Explore Collection
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#about"
              className="group inline-flex items-center gap-3 rounded-full border border-border bg-background/30 px-6 py-4 text-sm font-semibold text-foreground backdrop-blur transition-colors hover:bg-background/60"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-primary/15 text-primary">
                <Play className="h-3 w-3 fill-current" />
              </span>
              Watch Film
            </a>
          </div>
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground md:flex">
          Scroll
          <span className="relative block h-12 w-px bg-border">
            <span className="absolute inset-x-0 top-0 h-1/2 animate-pulse bg-primary" />
          </span>
        </div>
      </div>
    </section>
  );
}
