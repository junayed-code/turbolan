import Image from "next/image";
import { ArrowRight, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import HeroBg from "@/assets/delivery-motorcycle.jpg";

export function SiteHero() {
  return (
    <section className="relative overflow-hidden">
      <BackgroundGrid />

      <div className="relative mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        {/* Left column — thesis + CTA */}
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-ink/10 bg-white px-3 py-1.5 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-coral opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-coral" />
            </span>
            <span className="font-mono text-xs font-medium uppercase tracking-wide text-ink/70">
              Live in 300+ cities
            </span>
          </div>

          <h1 className="mt-6 font-display text-5xl font-semibold leading-[1.05] tracking-tight text-paper sm:text-6xl">
            Everything your city sells, delivered in{" "}
            <span className="text-coral">minutes.</span>
          </h1>

          <p className="mt-6 max-w-md text-lg text-paper/80">
            Groceries, medicine, gifts, gadgets — whatever the shops nearby have
            in stock, Zippa picks it up and brings it to your door. One app,
            every category.
          </p>

          <form className="mt-8 flex max-w-lg flex-col gap-3 sm:flex-row">
            <div className="relative flex-1">
              <MapPin className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/40" />
              <Input
                type="text"
                placeholder="Enter your delivery address"
                aria-label="Delivery address"
                className="h-14 rounded-full border-ink/15 bg-white pl-11 text-base"
              />
            </div>
            <Button
              type="submit"
              className="h-14 rounded-full bg-electric px-6 text-base text-white hover:bg-electric-dark"
            >
              Check availability
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>

          <p className="mt-4 font-mono text-xs uppercase tracking-wide text-paper/50">
            12 min avg delivery · 40+ categories · no subscription required
          </p>
        </div>
      </div>
    </section>
  );
}

function BackgroundGrid() {
  return (
    <div className="absolute inset-0">
      <div className="absolute inset-0 bg-black/40" />
      <Image
        alt=""
        src={HeroBg}
        loading="eager"
        placeholder="blur"
        className="w-full h-full object-cover object-right xl:object-center"
      />
    </div>
  );
}
