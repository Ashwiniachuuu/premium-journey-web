import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Gallery } from "@/components/site/Gallery";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq } from "@/components/site/Faq";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Drive — Your Dream Driving Experience" },
      {
        name: "description",
        content:
          "A performance atelier sourcing, servicing, and celebrating the world's most coveted machines. Built for the discerning driver.",
      },
      { property: "og:title", content: "Drive — Your Dream Driving Experience" },
      {
        property: "og:description",
        content:
          "A performance atelier sourcing, servicing, and celebrating the world's most coveted machines.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <Hero />
      <Marquee />
      <About />
      <Services />
      <Gallery />
      <Testimonials />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
