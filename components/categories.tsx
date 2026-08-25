import Link from "next/link";
import {
  ArrowRight,
  Flower2,
  Laptop,
  PawPrint,
  Pill,
  ShoppingBasket,
  Sparkles,
  UtensilsCrossed,
} from "lucide-react";
import { Kicker } from "@/components/ui/kicker";

const CATEGORIES = [
  {
    name: "Restaurants",
    icon: UtensilsCrossed,
    accent: "text-coral",
  },
  {
    name: "Groceries",
    icon: ShoppingBasket,
    accent: "text-electric",
  },
  { name: "Pharmacy", icon: Pill, accent: "text-ink" },
  { name: "Flowers & gifts", icon: Flower2, accent: "text-coral" },
  { name: "Electronics", icon: Laptop, accent: "text-electric" },
  { name: "Pet supplies", icon: PawPrint, accent: "text-ink" },
  { name: "Beauty", icon: Sparkles, accent: "text-coral" },
];

export function Categories() {
  return (
    <section id="categories" className="bg-electric">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <Kicker
            text="What you can get"
            className="text-electric-foreground"
          />
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-electric-foreground sm:text-5xl">
            One app. Every kind of delivery.
          </h2>
          <p className="mt-4 text-lg text-electric-foreground/60">
            From tonight&apos;s dinner to tomorrow&apos;s prescription —
            Turbolan connects you to 40+ categories of stores near you.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {CATEGORIES.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href="#"
                className="group flex flex-col gap-4 rounded-2xl bg-electric-dark p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-foreground focus-visible:ring-offset-2"
              >
                <span
                  className={`flex h-12 w-12 items-center justify-center rounded-xl ${category.accent} bg-lavender/90`}
                >
                  <Icon className="h-5 w-5" />
                </span>
                <span className="font-medium text-electric-foreground">
                  {category.name}
                </span>
              </Link>
            );
          })}

          <Link
            href="#"
            className="group flex flex-col items-start justify-between gap-6 rounded-2xl bg-electric-dark p-6 transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric-foreground focus-visible:ring-offset-2"
          >
            <span className="font-mono text-2xl font-semibold text-electric-foreground">
              +32
            </span>
            <span className="flex items-center gap-1 font-medium text-electric-foreground/70">
              See all categories
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}
