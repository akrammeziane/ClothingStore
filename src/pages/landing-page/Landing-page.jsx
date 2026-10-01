// import TopBar from "../compenants/TopBar";

import Hero from "./Hero";
import InfoStrip from "./InfoStrip";
import CategorySection from "./CategorySection";
import PromoSection from "./PromoSection";
import NewArrivalsSection from "./NewArrivalsSection";

import AboutSection from "@/pages/landing-page/AboutSection";

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-primary text-footer overflow-x-clip">
      {/* <TopBar /> */}
      <main>
        <Hero />
        <InfoStrip />
        <CategorySection />
        <NewArrivalsSection />

        <AboutSection />
        <PromoSection />
      </main>
    </div>
  );
}
