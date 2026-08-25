import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Turbolan – A Fast, On-Demand, Same-Day Delivery Service in Kuwait",
  description:
    "Scale you business with Turbolan. It's a door-to-door, reliable, effortless, same-day local delivery service in Kuwait.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={cn("antialiased", "font-sans", inter.variable)}>
      <body>{children}</body>
    </html>
  );
}
