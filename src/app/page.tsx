import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import PracticeAreas from "@/components/PracticeAreas";
import AttorneyProfile from "@/components/AttorneyProfile";
import ResultsSection from "@/components/ResultsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <PracticeAreas />
      <AttorneyProfile />
      <ResultsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
