import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import LocationHighlights from "@/components/LocationHighlights";
import Improvements from "@/components/Improvements";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import FloatingContact from "@/components/FloatingContact";
import OpenHouseModal from "@/components/OpenHouseModal";
import OpenHouseBanner from "@/components/OpenHouseBanner";

const SHOW_OPEN_HOUSE = process.env.NEXT_PUBLIC_SHOW_OPEN_HOUSE_MODAL !== "false";
const BANNER_HEIGHT = 38;

export default function Home() {
  return (
    <>
      {SHOW_OPEN_HOUSE && <OpenHouseBanner />}
      <TopBar topOffset={SHOW_OPEN_HOUSE ? BANNER_HEIGHT : 0} />
      <main>
        <Hero />
        <Gallery />
        <LocationHighlights />
        <Improvements />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingContact />
      {SHOW_OPEN_HOUSE && <OpenHouseModal />}
    </>
  );
}
