import { Alert, AlertDescription } from "@/components/ui/alert";

export function DevelopmentStageAlert() {
  return (
    <Alert className="rounded-none border-none bg-ink">
      <AlertDescription className="text-center text-yellow">
        This website is under development by{" "}
        <a
          href="https://junayedakbor.vercel.app"
          target="_blank"
          className="text-lavender/50 hover:text-lavender!"
        >
          Junayed Akbor
        </a>
      </AlertDescription>
    </Alert>
  );
}
