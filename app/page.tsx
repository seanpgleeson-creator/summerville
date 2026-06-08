import TopBar from "@/components/TopBar";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import Improvements from "@/components/Improvements";
import ContactSection from "@/components/ContactSection";
import SiteFooter from "@/components/SiteFooter";
import FloatingContact from "@/components/FloatingContact";

export default function Home() {
  return (
    <>
      <TopBar />
      <main>
        <Hero />
        <Gallery />
        <Improvements />
        <ContactSection />
      </main>
      <SiteFooter />
      <FloatingContact />
    </>
  );
}
