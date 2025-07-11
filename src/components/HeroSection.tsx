"use client";

import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import {
  useGSAPAnimation,
  useGSAPFloat,
  useGSAPStagger,
} from "@/hooks/useGSAP";

const HeroSection = () => {
  const [displayText, setDisplayText] = useState("");
  const [showCursor, setShowCursor] = useState(true);
  const heroRef = useGSAPAnimation();
  const statsRef = useGSAPStagger(0.2);
  const floatRef1 = useGSAPFloat();
  const floatRef2 = useGSAPFloat();
  const floatRef3 = useGSAPFloat();

  const fullText =
    "Olowolafe Law Firm | Criminal Defense, Civil Rights & Personal Injury";

  useEffect(() => {
    let i = 0;
    const typeTimer = setInterval(() => {
      if (i < fullText.length) {
        setDisplayText(fullText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(typeTimer);
        setTimeout(() => setShowCursor(false), 2000);
      }
    }, 80);

    return () => clearInterval(typeTimer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        <div className="w-full h-full bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700">
          {/* Animated Legal Pattern */}
          <div className="absolute inset-0 legal-pattern opacity-20"></div>

          {/* Floating Elements */}
          <div
            ref={floatRef1}
            className="absolute top-1/4 left-1/4 w-2 h-2 bg-gold-400 rounded-full opacity-60"
          ></div>
          <div
            ref={floatRef2}
            className="absolute top-3/4 right-1/4 w-3 h-3 bg-gold-300 rounded-full opacity-40"
          ></div>
          <div
            ref={floatRef3}
            className="absolute top-1/2 left-3/4 w-1 h-1 bg-gold-500 rounded-full opacity-70"
          ></div>
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 video-overlay"></div>
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 container-luxury text-center px-4"
      >
        <div className="max-w-5xl mx-auto py-8">
          {/* Main Heading with Typewriter Effect */}
          <div className="mb-8 lg:mb-12">
            <h1 className="heading-primary text-white mb-4 min-h-[1.2em]">
              <span className="inline-block">
                {displayText}
                {showCursor && <span className="typewriter-cursor"></span>}
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div
            className="mb-8 lg:mb-12 animate-fade-in-up"
            style={{ animationDelay: "4.5s", animationFillMode: "both" }}
          >
            <p className="text-luxury text-white/90 max-w-3xl mx-auto">
              Regardless of your situation, our firm strives to understand the
              unique legal concerns and needs of each individual client. We
              deliver high quality legal advocacy that is specifically tailored
              to the unique concerns of each of our clients.
            </p>
          </div>

          {/* Key Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12"
          >
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                95%
              </div>
              <div className="text-white/80 font-garamond">
                Case Success Rate
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                15+
              </div>
              <div className="text-white/80 font-garamond">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl lg:text-5xl font-bold gradient-text mb-2">
                500+
              </div>
              <div className="text-white/80 font-garamond">Cases Won</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up"
            style={{ animationDelay: "5.5s", animationFillMode: "both" }}
          >
            <a href="#contact" className="btn-primary text-lg px-10 py-5">
              Get Free Consultation
            </a>
            <a
              href="tel:4029959554"
              className="btn-secondary text-lg px-10 py-5 border-2 border-white/20 hover:border-gold-400"
            >
              Call (402) 995-9554
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className="mt-16 pt-8 border-t border-white/20 animate-fade-in-up"
            style={{ animationDelay: "6s", animationFillMode: "both" }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/60">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="font-garamond">Licensed in NE & IA</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="font-garamond">
                  Former Federal Investigator
                </span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="font-garamond">Trial Attorneys</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
