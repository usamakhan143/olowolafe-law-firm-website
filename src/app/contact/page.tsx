"use client";

import Navigation from "@/components/Navigation";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24">
        {/* Hero Section */}
        <section className="bg-navy-900 text-white py-16">
          <div className="container-luxury text-center">
            <h1 className="heading-primary text-white mb-6">Contact Us</h1>
            <p className="text-luxury text-white/80 max-w-3xl mx-auto">
              Get your free consultation today. We're here to help with your
              legal needs throughout Nebraska and Iowa.
            </p>
          </div>
        </section>

        <ContactSection />
      </main>

      <Footer />
    </div>
  );
};

export default ContactPage;
