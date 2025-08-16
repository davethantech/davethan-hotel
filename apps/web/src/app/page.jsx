import Header from "@/components/medicore/Header";
import HeroSection from "@/components/medicore/HeroSection";
import ProblemSection from "@/components/medicore/ProblemSection";
import SolutionSection from "@/components/medicore/SolutionSection";
import ResultsSection from "@/components/medicore/ResultsSection";
import FeaturesSection from "@/components/medicore/FeaturesSection";
import TestimonialsSection from "@/components/medicore/TestimonialsSection";
import CallToActionSection from "@/components/medicore/CallToActionSection";
import Footer from "@/components/medicore/Footer";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <Header />

      {/* HERO SECTION */}
      <HeroSection />

      {/* PROBLEM SECTION */}
      <ProblemSection />

      {/* SOLUTION SECTION */}
      <SolutionSection />

      {/* RESULTS SECTION */}
      <ResultsSection />

      {/* FEATURES SECTION */}
      <FeaturesSection />

      {/* TESTIMONIALS SECTION */}
      <TestimonialsSection />

      {/* CALL TO ACTION SECTION */}
      <CallToActionSection />

      {/* FOOTER */}
      <Footer />
    </div>
  );
}