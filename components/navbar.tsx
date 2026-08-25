"use client";

import * as React from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/ui/logo-mark";

const NAV_LINKS = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#categories", label: "Categories" },
  { href: "#business", label: "For business" },
  { href: "#support", label: "Support" },
];

export function SiteNavbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 lg:px-8">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
        >
          <LogoMark />
          <span className="font-display text-xl font-semibold tracking-tight text-ink">
            Turbolan
          </span>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="rounded-md text-sm font-medium text-ink/70 transition-colors hover:text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <Button className="rounded-full bg-electric px-5 text-white hover:bg-electric-dark">
            <Link
              href="https://wa.me/96566730742?text=Hi!%20I%27d%20like%20to%20book%20a%20delivery."
              target="_blank"
              rel="noopener"
            >
              Book on WhatsApp
            </Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center justify-center rounded-full p-2 text-ink focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-electric focus-visible:ring-offset-2 lg:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-ink/10 bg-paper px-6 pb-6 pt-2 lg:hidden">
          <nav className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-base font-medium text-ink/80 hover:bg-lavender hover:text-ink"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-4 flex flex-col gap-2 border-t border-ink/10 pt-4">
            <Button className="rounded-full bg-electric text-white hover:bg-electric-dark">
              <Link
                href="https://wa.me/96566730742?text=Hi!%20I%27d%20like%20to%20book%20a%20delivery."
                target="_blank"
                rel="noopener"
                onClick={() => setOpen(false)}
              >
                Book on WhatsApp
              </Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
