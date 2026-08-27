import type { Metadata } from "next";
import { fontBody, fontDisplay, fontMono } from "@/lib/fonts";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://turbolan-junayed.vercel.app"),
  title: "Turbolan – A Fast, On-Demand, Same-Day Delivery Service in Kuwait",
  description:
    "Scale you business with Turbolan. It's a door-to-door, reliable, effortless, same-day local delivery service in Kuwait.",
  openGraph: {
    title: "Turbolan – A Fast, On-Demand, Same-Day Delivery Service in Kuwait",
    description:
      "Scale you business with Turbolan. It's a door-to-door, reliable, effortless, same-day local delivery service in Kuwait.",
    images: "/og-image.jpeg",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`antialiased ${fontBody.variable} ${fontDisplay.variable} ${fontMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
