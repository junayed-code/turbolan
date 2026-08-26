import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Kicker } from "@/components/ui/kicker";

const BENEFITS = [
  "Set your own hours — deliver mornings, nights, or whenever works",
  "Keep 100% of your tips, every time",
  "Get paid weekly, straight to your bank account",
  "Ride a bike, scooter, or car, or go on foot in dense areas",
];

const STATS = [
  { label: "Avg. hourly earnings*", value: "1KD/delivery" },
  { label: "Active couriers", value: "15,000+" },
  { label: "Courier rating", value: "4.9★" },
];

export function BecomeCourier() {
  return (
    <section id="business" className="bg-ink">
      <div className="mx-auto grid max-w-7xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:px-8 lg:py-28">
        <div>
          <Kicker text="Deliver with Turbolan" color="yellow" />
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl">
            Turn your bike, car, or scooter into a paycheck.
          </h2>
          <p className="mt-4 max-w-lg text-lg text-white/60">
            No office, no boss standing over your shoulder — just orders nearby
            and a payout every week.
          </p>

          <ul className="mt-8 flex flex-col gap-3">
            {BENEFITS.map((benefit) => (
              <li
                key={benefit}
                className="flex items-start gap-3 text-white/80"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>

          <form className="mt-8 flex max-w-md flex-col gap-3 sm:flex-row">
            <Input
              type="tel"
              placeholder="Your phone number"
              aria-label="Phone number"
              className="h-14 rounded-full border-white/15 bg-white/5 text-base text-white placeholder:text-white/40 focus-visible:ring-yellow"
            />
            <Button
              type="submit"
              className="h-14 shrink-0 rounded-full bg-yellow px-6 text-base text-ink hover:bg-yellow/90"
            >
              Get started
              <ArrowRight className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="flex items-center justify-between border-b border-white/10 pb-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-widest text-white/50">
              Courier snapshot
            </span>
            <span className="flex items-center gap-1.5 font-mono text-xs text-white/50">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow" />
              This week
            </span>
          </div>

          <dl className="divide-y divide-white/10">
            {STATS.map((stat) => (
              <div
                key={stat.label}
                className="flex items-center justify-between py-4"
              >
                <dt className="text-sm text-white/60">{stat.label}</dt>
                <dd className="font-mono text-xl font-semibold text-yellow">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>

          <p className="mt-4 font-mono text-[11px] leading-relaxed text-white/30">
            *Estimated before tips and expenses. Actual earnings vary by city,
            vehicle type, and time of day.
          </p>
        </div>
      </div>
    </section>
  );
}
