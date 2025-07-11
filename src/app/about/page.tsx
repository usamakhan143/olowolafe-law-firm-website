"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/utils/cn";
import { useGSAPAnimation, useGSAPStagger } from "@/hooks/useGSAP";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const AboutOluwaseyi = () => {
  const profileRef = useGSAPAnimation();
  const educationRef = useGSAPStagger(0.1);
  const membershipsRef = useGSAPStagger(0.1);

  const education = [
    {
      degree: "J.D., Creighton University School of Law",
      type: "Juris Doctor",
    },
    {
      degree:
        "B.A. in Public Administration, California State University - Fullerton",
      type: "Bachelor's Degree",
    },
  ];

  const barAdmissions = [
    "State of Nebraska",
    "State of Iowa",
    "U.S. District Court of Nebraska",
  ];

  const memberships = [
    "Nebraska State Bar Association",
    "Iowa State Bar Association",
    "Omaha Bar Association",
    "Midlands Bar Association",
    "Nebraska Criminal Defense Attorney Association",
    "American Bar Association",
    "Phi Delta Phi International Legal Honor Society",
  ];

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-24 pb-16">
        <div className="container-luxury">
          {/* Hero Section */}
          <div ref={profileRef} className="text-center mb-16">
            <h1 className="heading-primary text-navy-800 mb-4">
              MEET OLUSEYI "SEYI" OLOWOLAFE
            </h1>
            <h2 className="heading-secondary text-gold-600 mb-8">
              Criminal & Civil Trial Attorney
            </h2>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-16">
            {/* Left Column - Photo */}
            <div className="space-y-8">
              <div className="relative mx-auto max-w-lg">
                <div className="aspect-[3/4] rounded-xl overflow-hidden shadow-luxury">
                  <Image
                    src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F6f9d8a0561b94445af796d502cc89efa?format=webp&width=800"
                    alt="Oluseyi 'Seyi' Olowolafe - Criminal & Civil Trial Attorney"
                    width={800}
                    height={1067}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-300 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Right Column - Content */}
            <div className="space-y-8">
              <div className="prose prose-lg">
                <p className="text-luxury leading-relaxed">
                  After serving as a former Federal Investigator, Mr. Olowolafe
                  now serves as a trial attorney at Olowolafe Law Firm, LLC,
                  experienced in both criminal and civil matters. Mr. Olowolafe
                  passionately defends individuals under investigation or who
                  have been charged with a state federal felony or misdemeanor
                  throughout Nebraska and Iowa.
                </p>

                <p className="text-luxury leading-relaxed">
                  Mr. Olowolafe also represents individuals who have serious
                  civil rights and personal injury claims. Mr. Olowolafe
                  continually strives to give back to his community as a Board
                  Member for the Midlands African Chamber, Greater Omaha SCORE
                  Chapter volunteer mentor, Board Member for Nebraska Legal Aid,
                  and a volunteer attorney for the Iowa Legal Aid COVID-19 Legal
                  Advice Hotline.
                </p>
              </div>

              {/* CTA Button */}
              <div className="pt-6">
                <a href="#contact" className="btn-primary text-lg px-10 py-4">
                  Schedule Consultation
                </a>
              </div>
            </div>
          </div>

          {/* Qualifications Section */}
          <div className="bg-marble-50 rounded-xl p-8 lg:p-12">
            <h2 className="heading-secondary text-navy-800 text-center mb-12">
              Qualifications
            </h2>

            <div className="grid lg:grid-cols-3 gap-12">
              {/* Education */}
              <div ref={educationRef} className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🎓</span>
                  </div>
                  <h3 className="heading-tertiary text-navy-800 mb-4">
                    Education
                  </h3>
                </div>

                <div className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="card-luxury">
                      <div className="text-sm text-gold-600 font-semibold mb-1">
                        {edu.type}
                      </div>
                      <div className="text-navy-700 font-medium">
                        {edu.degree}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bar Admissions */}
              <div className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">⚖️</span>
                  </div>
                  <h3 className="heading-tertiary text-navy-800 mb-4">
                    Bar Admissions
                  </h3>
                </div>

                <div className="space-y-3">
                  {barAdmissions.map((admission, index) => (
                    <div
                      key={index}
                      className="flex items-center p-4 bg-white rounded-lg shadow-card"
                    >
                      <div className="w-3 h-3 bg-gold-500 rounded-full mr-3"></div>
                      <span className="text-navy-700 font-medium">
                        {admission}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Memberships */}
              <div ref={membershipsRef} className="space-y-6">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gold-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white text-2xl">🏛️</span>
                  </div>
                  <h3 className="heading-tertiary text-navy-800 mb-4">
                    Memberships
                  </h3>
                </div>

                <div className="space-y-3">
                  {memberships.map((membership, index) => (
                    <div
                      key={index}
                      className="flex items-start p-3 bg-white rounded-lg shadow-card"
                    >
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3 mt-2 flex-shrink-0"></div>
                      <span className="text-navy-700 text-sm leading-relaxed">
                        {membership}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center mt-16">
            <div className="bg-navy-800 rounded-xl p-8 lg:p-12">
              <h3 className="heading-tertiary text-white mb-4">
                Ready to Work with Experienced Legal Counsel?
              </h3>
              <p className="text-luxury text-white/80 mb-8 max-w-2xl mx-auto">
                Contact Olowolafe Law Firm today to discuss your legal matter
                and learn how our experience can help you achieve the best
                possible outcome.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="#contact" className="btn-primary">
                  Schedule Free Consultation
                </a>
                <a
                  href="tel:4029959554"
                  className="btn-secondary border-2 border-white/20 hover:border-gold-400"
                >
                  Call (402) 995-9554
                </a>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutOluwaseyi;
