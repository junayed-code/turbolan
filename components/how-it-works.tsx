import { PackageCheck, Bike, Search } from "lucide-react";
import { Kicker } from "@/components/ui/kicker";

const STEPS = [
  {
    number: "01",
    title: "Tell us what you need",
    description:
      "Pick a store, a category, or search for exactly what you want — groceries, medicine, flowers, anything nearby.",
    icon: Search,
    accent: "text-electric",
  },
  {
    number: "02",
    title: "A shopper picks it up",
    description:
      "A nearby store or shopper gets your order ready and hands it straight to a courier.",
    icon: PackageCheck,
    accent: "text-coral",
  },
  {
    number: "03",
    title: "It's at your door",
    description:
      "Track your delivery in real time and get a notification the second it arrives.",
    icon: Bike,
    accent: "text-ink",
  },
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <Kicker text="How Turbolan works" />
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Order anything. We handle the rest.
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Three steps, no matter what you&apos;re ordering or where it&apos;s
            coming from.
          </p>
        </div>

        <div className="relative isolate mt-16">
          {/* Decorative route line — desktop only, sits behind the step icons */}
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-8 -z-10 hidden border-t border-dashed border-ink/15 lg:block"
          />

          <ol className="grid gap-10 lg:grid-cols-3 lg:gap-8">
            {STEPS.map((step) => {
              const Icon = step.icon;
              return (
                <li key={step.number}>
                  <div className="flex items-center gap-4">
                    <span
                      className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white shadow-sm ${step.accent}`}
                    >
                      <Icon className="h-6 w-6" />
                    </span>
                    <span className="font-mono text-sm text-ink/30">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-5 font-display text-xl font-semibold text-ink">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-ink/60">{step.description}</p>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
