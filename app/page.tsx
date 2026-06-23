import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import LocationHighlights from "@/components/LocationHighlights";
import Improvements from "@/components/Improvements";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import FloatingContact from "@/components/FloatingContact";
import OpenHouseModal from "@/components/OpenHouseModal";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Gallery />
        <LocationHighlights />
        <Improvements />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingContact />
      {process.env.NEXT_PUBLIC_SHOW_OPEN_HOUSE_MODAL !== "false" && (
        <OpenHouseModal />
      )}
    </>
  );
}
