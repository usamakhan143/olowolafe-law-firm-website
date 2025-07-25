"use client";

import Image from "next/image";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useGSAPAnimation, useGSAPStagger } from "@/hooks/useGSAP";

const PersonalInjuryPage = () => {
  const headerRef = useGSAPAnimation();
  const contentRef = useGSAPStagger(0.05);

  const personalInjuryTypes = [
    "Car Accidents",
    "Truck Accidents",
    "Motorcycle Accidents",
    "Construction Accidents",
    "Wrongful Death",
    "Dog Bites",
    "Bicycle Accidents",
    "Boating Accidents",
    "Premise Liability (Slip & Fall Accidents)"
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
                Personal Injury
              </h1>
              <p className="text-luxury text-white/80 max-w-3xl mx-auto">
                Fighting for full and fair compensation when you've been injured through someone else's fault.
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
                    Comprehensive Personal Injury Representation
                  </h2>
                  
                  <div className="space-y-6 text-luxury">
                    <p className="leading-relaxed">
                      An unexpected injury or even death can have a devastating impact on many lives. Dealing with insurance company representatives can be nerve-racking, irritating, and unnecessarily difficult.
                    </p>
                    
                    <p className="leading-relaxed">
                      Our firm knows and understands the vulnerability to exploitation that injured individuals and families face as a result of growing bills/debt and a lack of income, combined with the struggles to get answers and results from insurance company representatives. Such vulnerability can often lead people to settle for far less than they deserve.
                    </p>
                    
                    <p className="leading-relaxed">
                      At Olowolafe Law Firm, we will fight for you every step of the way. You will be represented by a lawyer from the start to the finish. Our personal injury attorneys are champions for our clients and have the expertise and skills necessary to ensure the rights of our clients are fully protected.
                    </p>
                    
                    <p className="leading-relaxed">
                      Our firm will fight to achieve full and fair compensation for your injuries. Such compensation may include pain and suffering, medical bills, lost wages, and emotional pain that you may have suffered. Our approach allows us to present all aspects of a client's claim to its fullest in order to maximize compensation.
                    </p>
                    
                    <p className="leading-relaxed">
                      At Olowolafe Law Firm, we take personal injury cases on a contingency basis. This means there are no attorney fees if we are not able to obtain compensation for your injuries.
                    </p>
                    
                    <p className="leading-relaxed">
                      If you or a family member has been injured through the fault of someone else, schedule your appointment for a consultation today, to discuss whether you have a viable personal injury claim.
                    </p>
                  </div>
                </div>
              </div>

              {/* Right Column - Image */}
              <div className="space-y-8">
                <div className="relative">
                  <div className="aspect-[4/3] rounded-xl overflow-hidden shadow-luxury">
                    <Image
                      src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F62336cbf44d84230a6f6303a07780db2?format=webp&width=800&quality=85"
                      alt="Personal injury legal representation and compensation"
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
                    <div className="text-3xl font-bold gradient-text mb-1">No Fee</div>
                    <div className="text-sm text-gray-600 font-garamond">Unless We Win</div>
                  </div>
                  <div className="text-center p-4 bg-gold-50 rounded-lg">
                    <div className="text-3xl font-bold gradient-text mb-1">24/7</div>
                    <div className="text-sm text-gray-600 font-garamond">Available</div>
                  </div>
                </div>

                {/* CTA Section */}
                <div className="bg-navy-50 rounded-xl p-8">
                  <h3 className="heading-tertiary text-navy-800 mb-4">
                    Injured? Get the Compensation You Deserve
                  </h3>
                  <p className="text-gray-700 mb-6">
                    No attorney fees unless we win your case. Free consultation to discuss your personal injury claim.
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

            {/* Types of Personal Injury Claims */}
            <section className="bg-marble-50 rounded-xl p-8 lg:p-12">
              <div className="text-center mb-12">
                <h2 className="heading-secondary text-navy-800 mb-6">
                  Types of Personal Injury Claims
                </h2>
                <p className="text-luxury max-w-3xl mx-auto">
                  We handle a wide variety of personal injury cases, fighting to get you the maximum compensation you deserve for your injuries and losses.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {personalInjuryTypes.map((injuryType, index) => (
                  <div key={index} className="card-luxury text-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-white font-bold">🚗</span>
                    </div>
                    <h3 className="font-clarika font-semibold text-navy-800 mb-2">
                      {injuryType}
                    </h3>
                    <div className="w-8 h-0.5 bg-gold-400 mx-auto"></div>
                  </div>
                ))}
              </div>
            </section>

            {/* Emergency Notice */}
            <div className="mt-16 bg-red-600 rounded-xl p-8 text-white text-center">
              <h3 className="font-clarika font-bold text-2xl mb-4">
                ⚠️ Injured in an Accident?
              </h3>
              <p className="text-xl mb-6">
                Time is critical in personal injury cases. Get medical attention first, then call us immediately for legal guidance.
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

export default PersonalInjuryPage;
