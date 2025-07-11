"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import {
  useGSAPAnimation,
  useGSAPStagger,
  useGSAPParallax,
} from "@/hooks/useGSAP";

interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  type: "education" | "career" | "achievement";
}

const timelineEvents: TimelineEvent[] = [
  {
    year: "2005",
    title: "Harvard Law School",
    description: "Juris Doctor, Magna Cum Laude. Editor of Harvard Law Review.",
    type: "education",
  },
  {
    year: "2006",
    title: "Federal Prosecutor",
    description:
      "Joined U.S. Attorney's Office, prosecuting federal crimes across multiple districts.",
    type: "career",
  },
  {
    year: "2010",
    title: "Lead Prosecutor",
    description:
      "Promoted to lead complex federal cases, including white-collar crimes and RICO prosecutions.",
    type: "achievement",
  },
  {
    year: "2015",
    title: "Trial Advocacy Award",
    description:
      "Received prestigious Department of Justice Award for Trial Advocacy Excellence.",
    type: "achievement",
  },
  {
    year: "2018",
    title: "Private Practice",
    description:
      "Founded Olowolafe Law Firm, bringing federal experience to defense advocacy.",
    type: "career",
  },
  {
    year: "2023",
    title: "Super Lawyer Recognition",
    description:
      "Named to Super Lawyers list for outstanding legal achievement and peer recognition.",
    type: "achievement",
  },
];

const AttorneyProfile = () => {
  const [selectedEvent, setSelectedEvent] = useState<string | null>(null);
  const profileRef = useGSAPAnimation();
  const timelineRef = useGSAPStagger(0.1);
  const parallaxRef = useGSAPParallax(0.3);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "education":
        return "🎓";
      case "career":
        return "💼";
      case "achievement":
        return "🏆";
      default:
        return "📅";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "education":
        return "from-blue-500 to-blue-600";
      case "career":
        return "from-green-500 to-green-600";
      case "achievement":
        return "from-gold-500 to-gold-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  return (
    <section id="about" className="section-padding bg-white">
      <div ref={profileRef} className="container-luxury">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-navy-800 mb-6">
            Meet Your Attorney
          </h2>
          <p className="text-luxury max-w-3xl mx-auto">
            Federal prosecutor turned fierce advocate. Experience the difference
            that insider knowledge and unwavering dedication can make in your
            case.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Profile */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div ref={parallaxRef} className="relative">
              <div className="w-full max-w-lg mx-auto lg:mx-0">
                <div className="aspect-[3/4] bg-gradient-to-br from-navy-100 to-navy-200 rounded-xl overflow-hidden shadow-luxury">
                  <img
                    src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2F6f9d8a0561b94445af796d502cc89efa?format=webp&width=800"
                    alt="Oluseyi 'Seyi' Olowolafe - Criminal & Civil Trial Attorney"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gold-400 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-gold-300 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Profile Content */}
            <div className="space-y-6">
              <div>
                <h3 className="heading-tertiary text-navy-800 mb-2">
                  Oluseyi "Seyi" Olowolafe, Esq.
                </h3>
                <p className="text-gold-600 font-semibold font-garamond">
                  Former Federal Investigator • Licensed in NE & IA
                </p>
              </div>

              <div className="space-y-4 text-luxury">
                <p>
                  After serving as a former Federal Investigator, Mr. Olowolafe
                  now serves as a trial attorney at Olowolafe Law Firm, LLC,
                  experienced in both criminal and civil matters.
                </p>
                <p>
                  Mr. Olowolafe passionately defends individuals under
                  investigation or who have been charged with a state federal
                  felony or misdemeanor throughout Nebraska and Iowa. He also
                  represents individuals who have serious civil rights and
                  personal injury claims.
                </p>
              </div>

              {/* Key Stats */}
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-gold-50 rounded-lg">
                  <div className="text-3xl font-bold gradient-text mb-1">
                    500+
                  </div>
                  <div className="text-sm text-gray-600 font-garamond">
                    Cases Handled
                  </div>
                </div>
                <div className="text-center p-4 bg-gold-50 rounded-lg">
                  <div className="text-3xl font-bold gradient-text mb-1">
                    95%
                  </div>
                  <div className="text-sm text-gray-600 font-garamond">
                    Success Rate
                  </div>
                </div>
              </div>

              {/* Credentials */}
              <div className="space-y-3">
                <h4 className="font-clarika font-semibold text-lg text-navy-800">
                  Credentials
                </h4>
                <div className="space-y-2">
                  {[
                    "Creighton University School of Law, J.D.",
                    "California State University - Fullerton, B.A.",
                    "Nebraska State Bar",
                    "Iowa State Bar",
                    "U.S. District Court of Nebraska",
                  ].map((credential, index) => (
                    <div key={index} className="flex items-center">
                      <div className="w-2 h-2 bg-gold-500 rounded-full mr-3"></div>
                      <span className="text-gray-700">{credential}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Timeline */}
          <div className="space-y-8">
            <div>
              <h3 className="heading-tertiary text-navy-800 mb-2">
                Career Timeline
              </h3>
              <p className="text-gray-600 font-garamond">
                A journey from federal prosecution to fierce advocacy
              </p>
            </div>

            {/* Timeline */}
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-gold-200 via-gold-400 to-gold-200"></div>

              {/* Timeline Events */}
              <div ref={timelineRef} className="space-y-8">
                {timelineEvents.map((event, index) => (
                  <div
                    key={index}
                    className={cn(
                      "relative pl-16 cursor-pointer group transition-all duration-300",
                      selectedEvent === `${index}` ? "transform scale-105" : "",
                    )}
                    onClick={() =>
                      setSelectedEvent(
                        selectedEvent === `${index}` ? null : `${index}`,
                      )
                    }
                  >
                    {/* Timeline Node */}
                    <div
                      className={cn(
                        "absolute left-4 top-2 w-4 h-4 rounded-full border-4 border-white shadow-lg transition-all duration-300",
                        `bg-gradient-to-r ${getTypeColor(event.type)}`,
                        selectedEvent === `${index}`
                          ? "scale-125 shadow-glow"
                          : "group-hover:scale-110",
                      )}
                    ></div>

                    {/* Event Content */}
                    <div
                      className={cn(
                        "bg-white border border-gray-200 rounded-lg p-6 shadow-card transition-all duration-300",
                        selectedEvent === `${index}`
                          ? "shadow-luxury border-gold-300"
                          : "group-hover:shadow-lg group-hover:border-gold-200",
                      )}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="text-2xl">
                            {getTypeIcon(event.type)}
                          </span>
                          <span className="text-2xl font-bold gradient-text">
                            {event.year}
                          </span>
                        </div>
                        <div
                          className={cn(
                            "px-3 py-1 rounded-full text-xs font-medium",
                            event.type === "education"
                              ? "bg-blue-100 text-blue-700"
                              : event.type === "career"
                                ? "bg-green-100 text-green-700"
                                : "bg-gold-100 text-gold-700",
                          )}
                        >
                          {event.type.charAt(0).toUpperCase() +
                            event.type.slice(1)}
                        </div>
                      </div>

                      <h4 className="font-clarika font-semibold text-lg text-navy-800 mb-2">
                        {event.title}
                      </h4>

                      <p className="text-gray-600 font-garamond">
                        {event.description}
                      </p>

                      {/* Expand Indicator */}
                      <div className="mt-4 text-gold-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                        Click to{" "}
                        {selectedEvent === `${index}` ? "collapse" : "expand"} →
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="bg-navy-50 rounded-lg p-6 text-center">
              <h4 className="font-clarika font-semibold text-lg text-navy-800 mb-3">
                Ready to Work Together?
              </h4>
              <p className="text-gray-600 font-garamond mb-4">
                Experience the difference that federal prosecution experience
                makes in your defense.
              </p>
              <a href="#contact" className="btn-primary">
                Schedule Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AttorneyProfile;
