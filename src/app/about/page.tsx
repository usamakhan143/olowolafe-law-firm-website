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
  const companyRef = useGSAPAnimation();

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
        {/* Hero Section */}
        <section className="bg-navy-900 text-white py-16">
          <div className="container-luxury text-center">
            <div ref={profileRef}>
              <h1 className="heading-primary text-white mb-6">
                About Olowolafe Law Firm
              </h1>
              <p className="text-luxury text-white/80 max-w-3xl mx-auto">
                Experienced legal representation in criminal defense, civil
                rights, and personal injury throughout Nebraska and Iowa. Former
                federal investigator providing fierce advocacy.
              </p>
            </div>
          </div>
        </section>
        <div className="container-luxury">
          {/* Company About Section */}
          <section ref={companyRef} className="mb-20 pt-16">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                  <h2 className="heading-secondary text-navy-800 mb-6">
                    Our Firm
                  </h2>
                  <p className="text-luxury leading-relaxed">
                    At Olowolafe Law Firm, our trial attorneys represent
                    individuals in criminal defense, civil rights, and personal
                    injury litigation throughout Nebraska and Iowa. Regardless
                    of your situation, our firm strives to understand the unique
                    legal concerns and the needs of each client.
                  </p>

                  <p className="text-luxury leading-relaxed">
                    We provide high-quality legal advocacy that is specifically
                    tailored to the unique concerns of each of our clients. We
                    pride ourselves on having strong relationships with each of
                    our clients through open communication and carefully
                    understanding the legal problems our clients face.
                  </p>
                </div>

                <div className="space-y-8">
                  <div className="bg-gold-50 rounded-xl p-8 border border-gold-200">
                    <h3 className="heading-tertiary text-navy-800 mb-4">
                      Our Commitment
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-navy-700">
                          Personalized legal strategies
                        </span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-navy-700">Open communication</span>
                      </li>
                      <li className="flex items-start">
                        <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                          <span className="text-white text-sm">✓</span>
                        </div>
                        <span className="text-navy-700">
                          Trial-ready representation
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className="card-luxury">
                    <h3 className="heading-tertiary text-navy-800 mb-4">
                      Our Approach
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our clients receive straightforward legal advice to help
                      them make an informed decision when navigating the legal
                      process. Our team presents all of the legal options without
                      the complicated legal jargon.
                    </p>
                  </div>

                  <div className="card-luxury">
                    <h3 className="heading-tertiary text-navy-800 mb-4">
                      Trial Experience
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      Our trial attorneys are comfortable appearing before juries,
                      judges, administrative hearing officers, as well as state
                      and federal appellate courts in Nebraska and Iowa.
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-navy-50 rounded-xl p-8 mt-12 text-center">
                <p className="text-luxury text-navy-800 mb-6">
                  Our firm strives to solve our client&apos;s legal problems
                  favorably, efficiently, and cost-effectively. Where a
                  client&apos;s legal problems are unable to be resolved short
                  of litigation, we are fully prepared and equipped to proceed
                  to a trial.
                </p>
                <p className="text-navy-700 font-semibold">
                  To discuss your legal problem, contact us today.
                </p>
              </div>
            </div>
          </section>

          {/* Attorney Profile Section */}
          <section className="mb-16">
            <div className="text-center mb-12">
              <h2 className="heading-secondary text-navy-800 mb-4">
                MEET OLUSEYI &quot;SEYI&quot; OLOWOLAFE
              </h2>
              <h3 className="heading-tertiary text-gold-600 mb-6">
                Criminal & Civil Trial Attorney
              </h3>
              <div className="w-24 h-1 bg-gold-500 mx-auto"></div>
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
                    After serving as a former Federal Investigator, Mr.
                    Olowolafe now serves as a trial attorney at Olowolafe Law
                    Firm, LLC, experienced in both criminal and civil matters.
                    Mr. Olowolafe passionately defends individuals under
                    investigation or who have been charged with a state federal
                    felony or misdemeanor throughout Nebraska and Iowa.
                  </p>

                  <p className="text-luxury leading-relaxed">
                    Mr. Olowolafe also represents individuals who have serious
                    civil rights and personal injury claims. Mr. Olowolafe
                    continually strives to give back to his community as a Board
                    Member for the Midlands African Chamber, Greater Omaha SCORE
                    Chapter volunteer mentor, Board Member for Nebraska Legal
                    Aid, and a volunteer attorney for the Iowa Legal Aid
                    COVID-19 Legal Advice Hotline.
                  </p>
                </div>


              </div>
            </div>
          </section>

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


        </div>
      </main>

      <Footer />
    </div>
  );
};

export default AboutOluwaseyi;
