import { LifeBuoy, Mail, MessageCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Kicker } from "@/components/ui/kicker";

const FAQS = [
  {
    question: "How much does delivery cost?",
    answer:
      "Delivery fees depend on distance and demand, and you'll always see the total before you check out. Turbolan Plus members get free delivery on eligible orders.",
  },
  {
    question: "Can I track my order in real time?",
    answer:
      "Yes. Once a courier picks up your order, you'll see their live location on the map along with an updated arrival estimate.",
  },
  {
    question: "What if something's missing or wrong?",
    answer:
      "Report it from your order in the app within 48 hours and we'll send a refund or a replacement, whichever makes sense.",
  },
  {
    question: "Which areas does Turbolan deliver to?",
    answer:
      "Turbolan is live in 300+ cities. Enter your address on the home screen to check what's available in your neighborhood.",
  },
  {
    question: "How do I become a courier?",
    answer:
      'Head to the "Become a courier" section above, add your vehicle details, and most people start delivering within a few days of signing up.',
  },
];

const CHANNELS = [
  {
    icon: MessageCircle,
    title: "Live chat",
    description: "Get an answer in minutes, day or night.",
    action: "Start a chat",
  },
  {
    icon: Mail,
    title: "Email",
    description: "For anything that isn't urgent.",
    action: "Send an email",
  },
  {
    icon: LifeBuoy,
    title: "Help center",
    description: "Browse guides for orders, payments, and your account.",
    action: "Visit help center",
  },
];

export function Support() {
  return (
    <section id="support" className="bg-paper">
      <div className="mx-auto max-w-7xl px-6 py-20 lg:px-8 lg:py-28">
        <div className="max-w-2xl">
          <Kicker text="Support" />
          <h2 className="mt-3 font-display text-4xl font-semibold tracking-tight text-ink sm:text-5xl">
            Here if you need us.
          </h2>
          <p className="mt-4 text-lg text-ink/60">
            Most answers are below. If yours isn&apos;t, real humans are one tap
            away.
          </p>
        </div>

        <div className="mt-14 grid gap-12 lg:grid-cols-[3fr_2fr]">
          <Accordion className="w-full">
            {FAQS.map((faq, index) => (
              <AccordionItem key={faq.question} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-display text-lg font-medium text-ink hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-ink/60">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="flex flex-col gap-4">
            {CHANNELS.map((channel) => {
              const Icon = channel.icon;
              return (
                <div
                  key={channel.title}
                  className="rounded-2xl border border-ink/10 bg-lavender/40 p-6"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-electric">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-semibold text-ink">
                    {channel.title}
                  </h3>
                  <p className="mt-1 text-sm text-ink/60">
                    {channel.description}
                  </p>
                  <Button
                    variant="link"
                    className="mt-3 h-auto p-0 font-medium text-electric hover:text-electric-dark"
                  >
                    {channel.action} →
                  </Button>
                </div>
              );
            })}

            <p className="mt-2 font-mono text-xs uppercase tracking-wide text-ink/40">
              Average response time: under 2 minutes
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
