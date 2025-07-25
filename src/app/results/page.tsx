"use client";

import Navigation from "@/components/Navigation";
import ResultsSection from "@/components/ResultsSection";
import Footer from "@/components/Footer";

const ResultsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-navy-900 text-white py-16">
          <div className="container-luxury text-center">
            <h1 className="heading-primary text-white mb-6">
              Our Results & Testimonials
            </h1>
            <p className="text-luxury text-white/80 max-w-3xl mx-auto">
              See the successful outcomes we&apos;ve achieved for our clients and
              read what they have to say about our legal representation.
            </p>
          </div>
        </section>

        <ResultsSection />
      </main>

      <Footer />
    </div>
  );
};

export default ResultsPage;
