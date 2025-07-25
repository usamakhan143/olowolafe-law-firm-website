"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useGSAPAnimation, useGSAPStagger } from "@/hooks/useGSAP";

const CriminalDefensePage = () => {
  const headerRef = useGSAPAnimation();
  const contentRef = useGSAPStagger(0.05);

  const criminalCaseTypes = [
    "Driving under the Influence (DUI)",
    "Drug Charges",
    "Violent Crimes",
    "Sexual Offenses",
    "Traffic Citations",
    "White Collar Crimes",
    "Felonies",
    "Misdemeanors",
    "Appeals",
    "Post Conviction Relief"
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 pb-16">
        {/* Hero Section */}
        <section className="bg-navy-900 text-white py-16">
          <div className="container-luxury text-center">
            <div ref={headerRef}>
              <h1 className="heading-primary text-white mb-6">
                Criminal Defense
              </h1>
              <p className="text-luxury text-white/80 max-w-3xl mx-auto">
                Experienced criminal defense representation throughout Nebraska and Iowa. 
                Protecting your rights at every stage of your case.
              </p>
            </div>
          </div>
        </section>

        <div className="py-16">
          <div className="container-luxury">
            {/* Main Content Section */}
            <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
              {/* Left Column - Content */}
              <div ref={contentRef} className="space-y-8">
                <div>
                  <h2 className="heading-secondary text-navy-800 mb-6">
                    Expert Criminal Defense Representation
                  </h2>
                  
                  <div className="space-y-6 text-luxury">
                    <p className="leading-relaxed">
                      Whether you have been charged with a federal or state criminal offense, were placed under arrest, issued a traffic citation or notice of ordinance violation, or believe that you are under criminal investigation, we can help you.
                    </p>
                    
                    <p className="leading-relaxed">
                      Our criminal trial attorneys know and understand the anxiety, stress, questions, and fears that can come with any criminal charges, along with the potential hardships a criminal conviction may bring to you and your family.
                    </p>
                    
                    <p className="leading-relaxed">
                      We work proactively to defend our clients from conducting extensive pre-trial investigations to ensuring that their rights are upheld at every stage of their criminal case. We are also ready and willing to pursue available avenues of post-conviction relief.
                    </p>
                    
                    <p className="leading-relaxed">
                      If you are facing charges, schedule your appointment for a consultation today to discuss how Olowolafe Law Firm can assist you.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-luxury">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F507856f029bb4434bc1342efee89ebef?format=webp&width=800&quality=85"
                      alt="Justice scales representing criminal defense legal services"
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                      loading="eager"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                  
                  {/* Decorative Elements */}
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full opacity-80"></div>
                  <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-300 rounded-full opacity-60"></div>
                </div>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-4 bg-gold-50 rounded-lg">
                    <div className="text-3xl font-bold gradient-text mb-1">95%</div>
                    <div className="text-sm text-gray-600 font-garamond">Success Rate</div>
                  </div>
                  <div className="text-center p-4 bg-gold-50 rounded-lg">
                    <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
                    <div className="text-sm text-gray-600 font-garamond">Available</div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-navy-50 rounded-xl p-8">
                  <h3 className="heading-tertiary text-navy-800 mb-4">
                    Need Immediate Legal Assistance?
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Don't wait - your freedom and future depend on acting quickly. Contact us today for a confidential consultation.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <a href="/schedule-consultation" className="btn-primary">
                      Schedule Consultation
                    </a>
                    <a href="tel:4029959554" className="btn-secondary">
                      Call (402) 995-9554
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Types of Criminal Cases */}
            <section className="bg-marble-50 rounded-xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="heading-secondary text-navy-800 mb-6">
                  Types of Criminal Cases
                </h2>
                <p className="text-luxury max-w-3xl mx-auto">
                  We handle a wide range of criminal matters at both state and federal levels, 
                  providing experienced representation for all types of charges.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {criminalCaseTypes.map((caseType, index) => (
                  <div key={index} className="card-luxury text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">⚖️</span>
                    </div>
                    <h3 className="font-clarika font-semibold text-navy-800 mb-2">
                      {caseType}
                    </h3>
                    <div className="w-8 h-0.5 bg-gold-400 mx-auto"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Emergency Notice */}
            <div className="mt-16 bg-red-600 rounded-xl p-8 text-white text-center">
              <h3 className="font-clarika font-bold text-2xl mb-4">
                ⚠️ Arrested or Under Investigation?
              </h3>
              <p className="text-xl mb-6">
                Time is critical in criminal cases. Exercise your right to remain silent and call us immediately.
              </p>
              <a
                href="tel:4029959554"
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-all duration-300 text-xl shadow-lg transform hover:-translate-y-1"
              >
                📞 Call (402) 995-9554 Now
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default CriminalDefensePage;
