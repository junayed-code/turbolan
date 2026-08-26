import { SiteHero } from "@/components/hero";
import { SiteNavbar } from "@/components/navbar";
import { HowItWorks } from "@/components/how-it-works";
import { Categories } from "@/components/categories";
import { Support } from "@/components/support";
import { BecomeCourier } from "@/components/become-courier";
import { Footer } from "@/components/footer";
import { DevelopmentStageAlert } from "@/components/development-stage-alert";

export default function Home() {
  return (
    <main>
      <DevelopmentStageAlert />
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
