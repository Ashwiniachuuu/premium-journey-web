import { useEffect, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Menu, Search, User, X } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "backdrop-blur-xl bg-background/75 border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container-px mx-auto flex h-16 max-w-7xl items-center justify-between md:h-20">
        <Link to="/" className="flex items-center gap-2 font-display text-xl font-black tracking-tight">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-primary glow-red" />
          DRIVE<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-9 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-primary transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1">
          <button
            aria-label="Search"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:inline-flex"
          >
            <Search className="h-4 w-4" />
          </button>
          <button
            aria-label="Account"
            className="hidden h-10 w-10 items-center justify-center rounded-full text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground md:inline-flex"
          >
            <User className="h-4 w-4" />
          </button>
          <a
            href="#contact"
            className="ml-2 hidden rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[0_8px_30px_-10px_var(--primary)] transition-all hover:scale-[1.03] hover:bg-primary/90 md:inline-block"
          >
            Book a Drive
          </a>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full text-foreground md:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile sheet */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height] duration-500 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="container-px mx-auto flex max-w-7xl flex-col gap-1 bg-background/95 pb-6 pt-2 backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-lg px-3 py-3 text-base font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="mt-2 rounded-full bg-primary px-5 py-3 text-center text-sm font-semibold text-primary-foreground"
          >
            Book a Drive
          </a>
        </div>
      </div>
    </header>
  );
}
