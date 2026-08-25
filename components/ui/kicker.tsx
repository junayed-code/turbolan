import { cn } from "@/lib/utils";
import { cva, type VariantProps } from "class-variance-authority";

const kickerVariants = cva(
  "font-mono text-xs font-medium uppercase tracking-wide inline-flex items-center gap-2.5 before:w-8 before:h-px after:w-8 after:h-px",
  {
    variants: {
      color: {
        default: "text-coral before:bg-coral after:bg-coral",
        electric: "text-electric before:bg-electric after:bg-electric",
        yellow: "text-yellow before:bg-yellow after:bg-yellow",
      },
    },
    defaultVariants: {
      color: "default",
    },
  },
);

export function Kicker({
  text,
  className,
  color,
}: {
  text: string;
  className?: string;
} & VariantProps<typeof kickerVariants>) {
  return (
    <span className={cn(kickerVariants({ className, color }))}>{text}</span>
  );
}
