"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import {
  useGSAPAnimation,
  useGSAPStagger,
  useGSAPHover,
} from "@/hooks/useGSAP";

interface PracticeArea {
  id: string;
  title: string;
  icon: string;
  description: string;
  successRate: string;
  caseTypes: string[];
  features: string[];
}

const practiceAreas: PracticeArea[] = [
  {
    id: "criminal-defense",
    title: "Criminal Defense",
    icon: "⚖️",
    description:
      "Whether you have been charged with a federal or state criminal offense, were placed under arrest, issued a traffic citation or notice of ordinance violation, or believe that you are under criminal investigation, we can help you.",
    successRate: "95%",
    caseTypes: [
      "Federal Crimes",
      "State Crimes",
      "Traffic Citations",
      "Ordinance Violations",
      "Criminal Investigations",
    ],
    features: [
      "24/7 Emergency Response",
      "Jury Trial Experience",
      "Investigation Defense",
      "Appeals",
    ],
  },
  {
    id: "civil-rights",
    title: "Civil Rights",
    icon: "🛡️",
    description:
      "Your civil liberties are a fundamental aspect of being an American. However, when your civil rights have been violated, the process to obtain a legal remedy can be complicated and burdensome. Olowolafe Law Firm is here to help.",
    successRate: "92%",
    caseTypes: [
      "Civil Rights Violations",
      "Police Misconduct",
      "Constitutional Rights",
      "Federal Civil Rights",
    ],
    features: [
      "Constitutional Law Expert",
      "Federal Court Experience",
      "Government Accountability",
      "Damage Recovery",
    ],
  },
  {
    id: "personal-injury",
    title: "Personal Injury",
    icon: "🏥",
    description:
      "An unexpected injury or even death can have a devastating impact on many lives. Dealing with insurance company representatives can be difficult, nerve racking, and unduly perplexing. Olowolafe Law Firm is here to help.",
    successRate: "98%",
    caseTypes: [
      "Auto Accidents",
      "Medical Malpractice",
      "Wrongful Death",
      "Slip & Fall",
    ],
    features: [
      "Insurance Negotiations",
      "Medical Expert Network",
      "Maximum Compensation",
      "No Fee Unless We Win",
    ],
  },
];

const PracticeAreas = () => {
  const [selectedArea, setSelectedArea] = useState<string | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const sectionRef = useGSAPAnimation();
  const cardsRef = useGSAPStagger(0.08);

  return (
    <section id="practice" className="section-padding bg-marble-50">
      <div ref={sectionRef} className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-navy-800 mb-6">
            Practice Areas
          </h2>
          <p className="text-luxury max-w-3xl mx-auto">
            Our comprehensive legal services cover a wide range of practice
            areas, each backed by years of experience and a proven track record
            of success.
          </p>
        </div>

        {/* Practice Areas Grid */}
        <div
          ref={cardsRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
        >
          {practiceAreas.map((area) => (
            <div
              key={area.id}
              className={cn(
                "group cursor-pointer transition-all duration-500 transform perspective-1000",
                hoveredCard === area.id ? "scale-105 -translate-y-4" : "",
                selectedArea === area.id
                  ? "ring-4 ring-gold-400 ring-opacity-50"
                  : "",
              )}
              onMouseEnter={() => setHoveredCard(area.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                if (selectedArea === area.id) {
                  // If already selected, navigate to detail page
                  window.location.href = `/${area.id}`;
                } else {
                  // Otherwise, show detailed view
                  setSelectedArea(area.id);
                }
              }}
            >
              <div className="card-luxury h-full min-h-[320px] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 legal-pattern opacity-5"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Icon & Success Rate */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="text-4xl">{area.icon}</div>
                    <div className="text-right">
                      <div className="text-2xl font-bold gradient-text">
                        {area.successRate}
                      </div>
                      <div className="text-xs text-gray-500">Success Rate</div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="heading-tertiary text-navy-800 mb-4 group-hover:text-gold-600 transition-colors">
                    {area.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 font-garamond">
                    {area.description}
                  </p>

                  {/* Case Types */}
                  <div className="space-y-2">
                    {area.caseTypes.slice(0, 3).map((type, index) => (
                      <div
                        key={index}
                        className="flex items-center text-sm text-gray-700"
                      >
                        <div className="w-1.5 h-1.5 bg-gold-500 rounded-full mr-2"></div>
                        {type}
                      </div>
                    ))}
                    {area.caseTypes.length > 3 && (
                      <div className="text-sm text-gold-600 font-medium">
                        +{area.caseTypes.length - 3} more
                      </div>
                    )}
                  </div>

                  {/* Learn More Button */}
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <a
                      href={`/${area.id}`}
                      className="inline-flex items-center text-gold-600 hover:text-gold-700 font-medium text-sm transition-colors"
                      onClick={(e) => e.stopPropagation()}
                    >
                      Learn More
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed View */}
        {selectedArea && (
          <div className="bg-white rounded-xl shadow-luxury p-8 lg:p-12 animate-scale-in">
            {(() => {
              const area = practiceAreas.find((a) => a.id === selectedArea)!;
              return (
                <div className="grid lg:grid-cols-2 gap-12">
                  {/* Left Column */}
                  <div>
                    <div className="flex items-center mb-6">
                      <span className="text-5xl mr-4">{area.icon}</span>
                      <div>
                        <h3 className="heading-tertiary text-navy-800">
                          {area.title}
                        </h3>
                        <div className="flex items-center mt-2">
                          <span className="text-3xl font-bold gradient-text mr-2">
                            {area.successRate}
                          </span>
                          <span className="text-gray-600">Success Rate</span>
                        </div>
                      </div>
                    </div>

                    <p className="text-luxury mb-8">{area.description}</p>

                    <div className="flex gap-4">
                      <a href={`/${area.id}`} className="btn-primary">
                        Learn More
                      </a>
                      <button
                        onClick={() => setSelectedArea(null)}
                        className="btn-secondary"
                      >
                        Close
                      </button>
                    </div>
                  </div>

                  {/* Right Column */}
                  <div className="space-y-8">
                    {/* Case Types */}
                    <div>
                      <h4 className="font-clarika font-semibold text-xl text-navy-800 mb-4">
                        Case Types We Handle
                      </h4>
                      <div className="grid grid-cols-2 gap-3">
                        {area.caseTypes.map((type, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 bg-gold-50 rounded-lg"
                          >
                            <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                            <span className="text-sm font-medium text-navy-700">
                              {type}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 className="font-clarika font-semibold text-xl text-navy-800 mb-4">
                        Our Approach
                      </h4>
                      <div className="space-y-3">
                        {area.features.map((feature, index) => (
                          <div
                            key={index}
                            className="flex items-center p-3 border border-gray-200 rounded-lg hover:border-gold-300 transition-colors"
                          >
                            <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center mr-3">
                              <span className="text-white text-xs font-bold">
                                ✓
                              </span>
                            </div>
                            <span className="font-medium text-navy-700">
                              {feature}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })()}
          </div>
        )}

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-navy-800 rounded-xl p-8 lg:p-12">
            <h3 className="heading-tertiary text-white mb-4">
              Ready to Discuss Your Case?
            </h3>
            <p className="text-luxury text-white/80 mb-8 max-w-2xl mx-auto">
              Every case is unique. Let's discuss your specific situation and
              how our experience can help you achieve the best possible outcome.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/schedule-consultation" className="btn-primary">
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
    </section>
  );
};

export default PracticeAreas;
