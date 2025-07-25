"use client";

import Navigation from "@/components/Navigation";
import PracticeAreas from "@/components/PracticeAreas";
import Footer from "@/components/Footer";

const PracticeAreasPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-navy-900 text-white py-16">
          <div className="container-luxury text-center">
            <h1 className="heading-primary text-white mb-6">
              Our Practice Areas
            </h1>
            <p className="text-luxury text-white/80 max-w-3xl mx-auto">
              Comprehensive legal services across Criminal Defense, Civil
              Rights, and Personal Injury cases throughout Nebraska and Iowa.
            </p>
          </div>
        </section>

        <PracticeAreas />
      </main>

      <Footer />
    </div>
  );
};

export default PracticeAreasPage;
