import { useState } from "react";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="contact" className="relative bg-card py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid gap-14 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">— Contact</span>
            <h2 className="mt-4 font-display text-4xl font-black leading-[1.05] md:text-6xl">
              Start the<br />conversation.
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Whether you're sourcing a unicorn, booking a service, or simply
              want to talk about cars over an espresso — we're listening.
            </p>

            <ul className="mt-10 space-y-5">
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <MapPin className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Atelier</div>
                  <div className="font-medium">12 Berkeley Square, London W1J</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Phone className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Concierge</div>
                  <div className="font-medium">+44 20 7946 0114</div>
                </div>
              </li>
              <li className="flex items-center gap-4">
                <span className="flex h-11 w-11 items-center justify-center rounded-full bg-primary/15 text-primary">
                  <Mail className="h-4 w-4" />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-widest text-muted-foreground">Email</div>
                  <div className="font-medium">hello@drive.studio</div>
                </div>
              </li>
            </ul>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
              setTimeout(() => setSent(false), 4000);
            }}
            className="rounded-2xl border border-border bg-background p-8 md:p-10"
          >
            <div className="grid gap-5">
              <Field label="Full name" name="name" required />
              <Field label="Email" name="email" type="email" required />
              <Field label="Phone (optional)" name="phone" />
              <div>
                <label className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="w-full resize-none rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:bg-secondary"
                  placeholder="Tell us what you're looking for..."
                />
              </div>
              <button
                type="submit"
                className="group mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-4 text-sm font-semibold text-primary-foreground transition-all hover:scale-[1.02] hover:bg-primary/90"
              >
                {sent ? "Message Sent ✓" : "Send Message"}
                {!sent && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full rounded-lg border border-border bg-secondary/40 px-4 py-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/60 focus:border-primary focus:bg-secondary"
      />
    </div>
  );
}
