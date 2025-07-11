"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { useGSAPAnimation, useGSAPStagger } from "@/hooks/useGSAP";

interface CaseResult {
  id: string;
  title: string;
  category: string;
  outcome: string;
  description: string;
  impact: string;
  year: string;
}

const caseResults: CaseResult[] = [
  {
    id: "federal-conspiracy",
    title: "Federal Conspiracy Charges Dismissed",
    category: "Federal Defense",
    outcome: "All Charges Dismissed",
    description:
      "Successfully defended client against multi-count federal conspiracy charges through strategic pre-trial motions.",
    impact: "Client avoided 25+ years in federal prison",
    year: "2023",
  },
  {
    id: "white-collar",
    title: "White Collar Fraud Defense",
    category: "White Collar",
    outcome: "Probation Only",
    description:
      "Negotiated favorable plea agreement in complex securities fraud case, avoiding prison time.",
    impact: "$2M in potential fines reduced to community service",
    year: "2023",
  },
  {
    id: "drug-trafficking",
    title: "Drug Trafficking Acquittal",
    category: "Criminal Defense",
    outcome: "Not Guilty Verdict",
    description:
      "Jury trial victory in major drug trafficking case through expert witness testimony and evidence suppression.",
    impact: "Client acquitted of all charges",
    year: "2022",
  },
  {
    id: "civil-rights",
    title: "Civil Rights Settlement",
    category: "Civil Litigation",
    outcome: "$1.2M Settlement",
    description:
      "Secured substantial settlement for client in federal civil rights violation case.",
    impact: "Justice served and policy changes implemented",
    year: "2022",
  },
];

const testimonials = [
  {
    name: "J. Corbin",
    case: "Criminal Defense",
    rating: 5,
    text: "Fought hard to get my case dismissed. No plea deals!!",
    outcome: "Case Dismissed",
  },
  {
    name: "A. Alale",
    case: "Traffic Citation",
    rating: 5,
    text: "Mr. Seyi and Olowolafe Law Firm, LLC group Is by far the top and he's the best Man for the job. Almost immediately as I came in to his office, he handled it, very efficient and got the job done. I recommend Him for any tickets you have. And just in general a man of his word and a great man overall! We definitely need more of Him in society 🖤🖤🙌🏿🙌🏿",
    outcome: "Successful Resolution",
  },
];

const ResultsSection = () => {
  const [activeTab, setActiveTab] = useState<"results" | "testimonials">(
    "results",
  );
  const sectionRef = useGSAPAnimation();
  const resultsRef = useGSAPStagger(0.2);
  const testimonialsRef = useGSAPStagger(0.15);

  return (
    <section id="results" className="section-padding bg-navy-50">
      <div ref={sectionRef} className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-navy-800 mb-6">
            Proven Results
          </h2>
          <p className="text-luxury max-w-3xl mx-auto">
            Our track record speaks for itself. Federal prosecution experience
            combined with fierce advocacy delivers exceptional outcomes for our
            clients.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white rounded-lg p-1 shadow-card">
            <button
              onClick={() => setActiveTab("results")}
              className={cn(
                "px-8 py-3 rounded-md font-semibold transition-all duration-300",
                activeTab === "results"
                  ? "bg-gold-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gold-600",
              )}
            >
              Case Results
            </button>
            <button
              onClick={() => setActiveTab("testimonials")}
              className={cn(
                "px-8 py-3 rounded-md font-semibold transition-all duration-300",
                activeTab === "testimonials"
                  ? "bg-gold-500 text-white shadow-md"
                  : "text-gray-600 hover:text-gold-600",
              )}
            >
              Client Testimonials
            </button>
          </div>
        </div>

        {/* Case Results */}
        {activeTab === "results" && (
          <div ref={resultsRef} className="grid md:grid-cols-2 gap-8">
            {caseResults.map((result) => (
              <div
                key={result.id}
                className="card-luxury border-l-4 border-gold-500 hover:border-gold-600 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <div className="flex items-center space-x-3 mb-2">
                      <span className="px-3 py-1 bg-gold-100 text-gold-800 rounded-full text-xs font-medium">
                        {result.category}
                      </span>
                      <span className="text-gray-500 text-sm">
                        {result.year}
                      </span>
                    </div>
                    <h3 className="font-clarika font-semibold text-xl text-navy-800">
                      {result.title}
                    </h3>
                  </div>
                </div>

                {/* Outcome Badge */}
                <div className="mb-4">
                  <span className="inline-flex items-center px-4 py-2 bg-green-100 text-green-800 rounded-lg font-medium">
                    <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                    {result.outcome}
                  </span>
                </div>

                {/* Description */}
                <p className="text-gray-600 font-garamond mb-4">
                  {result.description}
                </p>

                {/* Impact */}
                <div className="bg-gold-50 rounded-lg p-4">
                  <h4 className="font-clarika font-medium text-navy-800 mb-2">
                    Impact
                  </h4>
                  <p className="text-gold-700 font-garamond">{result.impact}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Testimonials */}
        {activeTab === "testimonials" && (
          <div
            ref={testimonialsRef}
            className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto"
          >
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="card-luxury text-center relative overflow-hidden"
              >
                {/* Quote Icon */}
                <div className="absolute top-4 right-4 text-4xl text-gold-200">
                  "
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-gold-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-gray-700 font-garamond italic mb-6 relative z-10">
                  "{testimonial.text}"
                </blockquote>

                {/* Client Info */}
                <div className="border-t border-gray-200 pt-4">
                  <div className="font-clarika font-semibold text-navy-800 mb-1">
                    {testimonial.name}
                  </div>
                  <div className="text-gray-600 text-sm mb-2">
                    {testimonial.case}
                  </div>
                  <div className="inline-flex items-center px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">
                    <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2"></span>
                    {testimonial.outcome}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Call to Action */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-xl shadow-luxury p-8 lg:p-12 max-w-4xl mx-auto">
            <h3 className="heading-tertiary text-navy-800 mb-4">
              Ready to Achieve Similar Results?
            </h3>
            <p className="text-luxury mb-8">
              Every case is unique, but our approach remains consistent:
              thorough preparation, strategic thinking, and relentless advocacy
              for our clients.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="btn-primary">
                Schedule Free Consultation
              </a>
              <a href="tel:4029959554" className="btn-secondary">
                Call (402) 995-9554
              </a>
            </div>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-xs text-gray-500 font-garamond max-w-2xl mx-auto">
            <strong>Disclaimer:</strong> Past results do not guarantee future
            outcomes. Case results depend on a variety of factors unique to each
            case. These results should not be taken as a prediction of results
            in your case.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;
