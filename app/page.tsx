import { SiteHero } from "@/components/hero";
import { SiteNavbar } from "@/components/navbar";
import { HowItWorks } from "@/components/how-it-works";
import { Categories } from "@/components/categories";
import { Support } from "@/components/support";
import { BecomeCourier } from "@/components/become-courier";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <SiteNavbar />
      <SiteHero />
      <HowItWorks />
      <Categories />
      <BecomeCourier />
      <Support />
      <Footer />
    </main>
  );
}
