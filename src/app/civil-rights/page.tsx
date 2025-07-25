"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useGSAPAnimation, useGSAPStagger } from "@/hooks/useGSAP";

const CivilRightsPage = () => {
  const headerRef = useGSAPAnimation();
  const contentRef = useGSAPStagger(0.05);

  const civilRightsTypes = [
    "False Arrest & Malicious Prosecution",
    "Excessive Force",
    "Illegal Search or Seizure",
    "Violations of the First Amendment",
    "Protest and Assembly",
    "Civil Disobedience",
    "Due Process",
    "Prisoner and Detainee Conditions of Confinement",
    "Discrimination/Equal Protection"
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
                Civil Rights
              </h1>
              <p className="text-luxury text-white/80 max-w-3xl mx-auto">
                Protecting your constitutional rights and ensuring justice when your civil liberties have been violated.
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
                    Your Constitutional Rights Matter
                  </h2>
                  
                  <div className="space-y-6 text-luxury">
                    <p className="leading-relaxed">
                      Your civil liberties are a fundamental aspect of being an American. The Constitution was specifically designed to prohibit the government from infringing on those rights, which include: freedom of speech, religion, assembly, the right to due process, the right to petition against the government, and equal protection.
                    </p>
                    
                    <p className="leading-relaxed">
                      Such rights should never be violated. However, when your civil rights have been violated, the process to obtain a legal remedy can be complicated and burdensome. At Olowolafe Law Firm, we have the expertise and skills to navigate the complex legal process to protect your legal rights.
                    </p>
                    
                    <p className="leading-relaxed">
                      We are devoted to ensuring our clients are justly compensated for when their rights are trampled upon.
                    </p>
                    
                    <p className="leading-relaxed">
                      If you believe your constitutional rights have been violated by a police officer, municipality, or government official, schedule your appointment for a consultation today to discuss whether you have a viable civil rights claim.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-luxury">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F824f9d3af5dd47149589b773dbbf1130?format=webp&width=800&quality=85"
                      alt="Lady Justice statue representing civil rights and constitutional law"
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
                    <div className="text-3xl font-bold gradient-text mb-1">100%</div>
                    <div className="text-sm text-gray-600 font-garamond">Committed</div>
                  </div>
                  <div className="text-center p-4 bg-gold-50 rounded-lg">
                    <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
                    <div className="text-sm text-gray-600 font-garamond">Available</div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-navy-50 rounded-xl p-8">
                  <h3 className="heading-tertiary text-navy-800 mb-4">
                    Rights Violated? Get Legal Help Now
                  </h3>
                  <p className="text-gray-700 mb-6">
                    Don't let violations of your constitutional rights go unchallenged. Contact us today for a confidential consultation about your civil rights claim.
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

            {/* Types of Civil Rights Claims */}
            <section className="bg-marble-50 rounded-xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="heading-secondary text-navy-800 mb-6">
                  Types of Civil Rights Claims
                </h2>
                <p className="text-luxury max-w-3xl mx-auto">
                  We handle a comprehensive range of civil rights violations, ensuring your constitutional rights are protected and enforced.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {civilRightsTypes.map((rightsType, index) => (
                  <div key={index} className="card-luxury text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">🗽</span>
                    </div>
                    <h3 className="font-clarika font-semibold text-navy-800 mb-2">
                      {rightsType}
                    </h3>
                    <div className="w-8 h-0.5 bg-gold-400 mx-auto"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Urgent Notice */}
            <div className="mt-16 bg-red-600 rounded-xl p-8 text-white text-center">
              <h3 className="font-clarika font-bold text-2xl mb-4">
                ⚠️ Civil Rights Violated?
              </h3>
              <p className="text-xl mb-6">
                Your constitutional rights are fundamental. If they've been violated, don't wait - contact us immediately.
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

export default CivilRightsPage;
