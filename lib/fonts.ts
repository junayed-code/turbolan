import {
  Bricolage_Grotesque,
  Mona_Sans,
  Noto_Sans_Mono,
} from "next/font/google";

// Display: bold, wide, energetic — carries the headline personality.
export const fontDisplay = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  weight: ["500", "600", "700", "800"],
});

// Body: quiet, highly legible workhorse for copy.
export const fontBody = Mona_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
});

// Mono: utility face for stats, badges, and the "Now delivering" board —
// gives the data a live, dispatch-board feel.
export const fontMono = Noto_Sans_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});
