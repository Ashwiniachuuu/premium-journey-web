import { Instagram, Twitter, Youtube, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background py-16">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2 font-display text-2xl font-black">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary glow-red" />
              DRIVE<span className="text-primary">.</span>
            </div>
            <p className="mt-5 max-w-xs text-sm text-muted-foreground">
              A performance atelier for those who measure life in apex points
              and exhaust notes.
            </p>
            <div className="mt-6 flex gap-3">
              {[Instagram, Twitter, Youtube, Facebook].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  aria-label="Social"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-all hover:border-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          <FooterCol title="Explore" links={["Home", "About", "Services", "Gallery", "Contact"]} />
          <FooterCol title="Atelier" links={["Sourcing", "Service", "Detailing", "Track Days", "Storage"]} />
          <FooterCol title="Studio" links={["Press", "Careers", "Privacy", "Terms", "Cookies"]} />
        </div>

        <div className="mt-14 flex flex-col items-start justify-between gap-3 border-t border-border pt-8 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Drive Studio. All rights reserved.</p>
          <p className="uppercase tracking-[0.25em]">Crafted in London — Driven Worldwide</p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, links }: { title: string; links: string[] }) {
  return (
    <div>
      <div className="mb-5 text-xs font-semibold uppercase tracking-[0.3em] text-foreground">{title}</div>
      <ul className="space-y-3">
        {links.map((l) => (
          <li key={l}>
            <a href="#" className="text-sm text-muted-foreground transition-colors hover:text-primary">
              {l}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
