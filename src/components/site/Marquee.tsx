const brands = ["Aston Martin", "Porsche", "Ferrari", "McLaren", "Lamborghini", "Bentley", "Maserati", "Bugatti"];

export function Marquee() {
  const items = [...brands, ...brands];
  return (
    <div className="border-y border-border bg-background py-6">
      <div className="overflow-hidden">
        <div className="flex w-max animate-marquee gap-16 px-8">
          {items.map((b, i) => (
            <span
              key={i}
              className="font-display text-2xl font-bold uppercase tracking-[0.2em] text-muted-foreground/40 md:text-3xl"
            >
              {b}
              <span className="mx-8 text-primary">★</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
