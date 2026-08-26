import * as React from "react";
import Link from "next/link";
import { Download } from "lucide-react";
import { LogoMark } from "@/components/ui/logo-mark";

const COMPANY_LINKS = [
  { label: "About us", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Press", href: "#" },
];

const PRODUCT_LINKS = [
  { label: "How it works", href: "#how-it-works" },
  { label: "Categories", href: "#categories" },
  { label: "Turbolan Plus", href: "#" },
  { label: "Gift cards", href: "#" },
];

const SUPPORT_LINKS = [
  { label: "Help center", href: "#support" },
  { label: "Contact us", href: "#support" },
  { label: "Become a courier", href: "#business" },
  { label: "Safety", href: "#" },
];

const LEGAL_LINKS = [
  { label: "Terms of service", href: "#" },
  { label: "Privacy policy", href: "#" },
  { label: "Cookie settings", href: "#" },
  { label: "Accessibility", href: "#" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* CTA band */}
        <div className="flex flex-col items-start justify-between gap-8 border-b border-white/10 py-16 lg:flex-row lg:items-center">
          <div className="max-w-lg">
            <h2 className="font-display text-3xl font-semibold tracking-tight sm:text-4xl">
              Delivery for everything, right in your pocket.
            </h2>
            <p className="mt-3 text-white/60">
              Download the app to order, track, and manage deliveries on the go.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <AppBadge label="Download on the" store="App Store" />
            <AppBadge label="Get it on" store="Google Play" />
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-12 py-16 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr] lg:gap-8">
          <div>
            <Link
              href="/"
              className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              <LogoMark />
              <span className="font-display text-xl font-semibold tracking-tight">
                Turbolan
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm text-white/50">
              Everything your city sells, delivered in minutes. Live in 300+
              cities.
            </p>
            <div className="mt-6 flex items-center gap-3">
              <SocialLink label="Instagram" href="#" icon={InstagramIcon} />
              <SocialLink label="X" href="#" icon={XIcon} />
              <SocialLink label="TikTok" href="#" icon={TikTokIcon} />
              <SocialLink label="Facebook" href="#" icon={FacebookIcon} />
            </div>
          </div>

          <FooterColumn title="Company" links={COMPANY_LINKS} />
          <FooterColumn title="Product" links={PRODUCT_LINKS} />
          <FooterColumn title="Support" links={SUPPORT_LINKS} />
          <FooterColumn title="Legal" links={LEGAL_LINKS} />
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-4 border-t border-white/10 py-8 font-mono text-xs text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <span>
            © {year} Turbolan, Inc. All rights reserved. Developed by{" "}
            <a
              href="https://junayedakbor.vercel.app"
              target="_blank"
              className="underline text-lavender"
            >
              Junayed Akbor
            </a>
          </span>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            <Link href="#" className="transition-colors hover:text-white/70">
              Terms
            </Link>
            <Link href="#" className="transition-colors hover:text-white/70">
              Privacy
            </Link>
            <Link href="#" className="transition-colors hover:text-white/70">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="font-mono text-xs font-medium uppercase tracking-wide text-white/40">
        {title}
      </h3>
      <ul className="mt-4 flex flex-col gap-3">
        {links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="rounded-md text-sm text-white/70 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function AppBadge({ label, store }: { label: string; store: string }) {
  return (
    <Link
      href="#"
      className="flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 px-5 py-3 transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      <Download className="h-5 w-5 text-yellow" />
      <span className="flex flex-col leading-tight">
        <span className="text-[11px] text-white/50">{label}</span>
        <span className="text-sm font-semibold text-white">{store}</span>
      </span>
    </Link>
  );
}

function SocialLink({
  label,
  href,
  icon: Icon,
}: {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-white/60 transition-colors hover:border-white/30 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
    >
      <Icon className="h-4 w-4" />
    </Link>
  );
}

// Simple monoline glyphs (not brand logo assets) kept in-house so the
// social row doesn't depend on any icon package shipping these platforms.
function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17" cy="7" r="0.6" fill="currentColor" stroke="none" />
    </svg>
  );
}

function XIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <line x1="5" y1="5" x2="19" y2="19" />
      <line x1="19" y1="5" x2="5" y2="19" />
    </svg>
  );
}

function TikTokIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M14 4v10.5a3.5 3.5 0 1 1-3-3.46" />
      <path d="M14 4c.5 2.5 2.3 4 5 4.3" />
    </svg>
  );
}

function FacebookIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <path d="M15 8h-2a2 2 0 0 0-2 2v9" />
      <path d="M8 13h6" />
    </svg>
  );
}
