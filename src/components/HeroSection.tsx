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
  const statsRef = useGSAPStagger(0.1);
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
        setTimeout(() => setShowCursor(false), 1000);
      }
    }, 50);

    return () => clearInterval(typeTimer);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <div
          className="w-full h-full bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2Fd6703d310d194cb98ce31e497116a021?format=webp&width=1920&quality=85')`
          }}
        >
          {/* Elegant Overlay for Readability */}
          <div className="absolute inset-0 bg-gradient-to-br from-navy-900/40 via-navy-800/35 to-navy-700/30"></div>

          {/* Subtle Legal Pattern */}
          <div className="absolute inset-0 legal-pattern opacity-10"></div>

          {/* Floating Elements for Elegance */}
          <div
            ref={floatRef1}
            className="absolute top-1/4 left-1/4 w-3 h-3 bg-gold-400 rounded-full opacity-70"
          ></div>
          <div
            ref={floatRef2}
            className="absolute top-3/4 right-1/4 w-4 h-4 bg-gold-300 rounded-full opacity-50"
          ></div>
          <div
            ref={floatRef3}
            className="absolute top-1/2 left-3/4 w-2 h-2 bg-gold-500 rounded-full opacity-80"
          ></div>
        </div>
      </div>

      {/* Content */}
      <div
        ref={heroRef}
        className="relative z-10 container-luxury text-center px-4"
      >
        <div className="max-w-6xl mx-auto py-12 lg:py-16">
          {/* Professional Badge */}
          <div
            className="inline-flex items-center px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full mb-8 animate-fade-in-up border border-white/20"
            style={{ animationDelay: "1s", animationFillMode: "both" }}
          >
            <span className="text-gold-400 mr-2">⚖️</span>
            <span className="text-white/90 font-garamond text-lg">Experienced Legal Advocates</span>
          </div>

          {/* Main Heading with Typewriter Effect */}
          <div className="mb-10 lg:mb-14">
            <h1 className="heading-primary text-white mb-6 min-h-[1.2em] drop-shadow-lg">
              <span className="inline-block">
                {displayText}
                {showCursor && <span className="typewriter-cursor"></span>}
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div
            className="mb-10 lg:mb-14 animate-fade-in-up"
            style={{ animationDelay: "4.5s", animationFillMode: "both" }}
          >
            <p className="text-luxury text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-sm">
              Regardless of your situation, our firm strives to understand the
              unique legal concerns and needs of each individual client. We
              deliver high quality legal advocacy that is specifically tailored
              to the unique concerns of each of our clients.
            </p>
          </div>

          {/* Key Stats */}
          <div
            ref={statsRef}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14"
          >
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-5xl lg:text-6xl font-bold gradient-text mb-3 drop-shadow-lg">
                  95%
                </div>
                <div className="text-white/90 font-garamond text-lg">
                  Case Success Rate
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-5xl lg:text-6xl font-bold gradient-text mb-3 drop-shadow-lg">
                  15+
                </div>
                <div className="text-white/90 font-garamond text-lg">
                  Years Experience
                </div>
              </div>
            </div>
            <div className="text-center group">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-gold-400/50 transition-all duration-300 hover:transform hover:-translate-y-2">
                <div className="text-5xl lg:text-6xl font-bold gradient-text mb-3 drop-shadow-lg">
                  500+
                </div>
                <div className="text-white/90 font-garamond text-lg">Cases Won</div>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-6 justify-center animate-fade-in-up"
            style={{ animationDelay: "5.5s", animationFillMode: "both" }}
          >
            <a
              href="/schedule-consultation"
              className="btn-primary text-xl px-12 py-6 shadow-2xl hover:shadow-glow transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Get Free Consultation
            </a>
            <a
              href="tel:4029959554"
              className="inline-flex items-center justify-center px-12 py-6 bg-white/10 backdrop-blur-sm text-white font-semibold text-xl rounded-lg border-2 border-white/30 hover:border-gold-400 hover:bg-white/20 transition-all duration-300 transform hover:-translate-y-1"
            >
              📞 Call (402) 995-9554
            </a>
          </div>

          {/* Trust Badges */}
          <div
            className="mt-20 pt-10 border-t border-white/30 animate-fade-in-up"
            style={{ animationDelay: "6s", animationFillMode: "both" }}
          >
            <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <span className="font-garamond text-white/90 text-lg font-medium">Licensed in NE & IA</span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <span className="font-garamond text-white/90 text-lg font-medium">
                  Former Federal Investigator
                </span>
              </div>
              <div className="flex items-center space-x-3 bg-white/10 backdrop-blur-sm px-6 py-4 rounded-full border border-white/20">
                <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-lg font-bold">✓</span>
                </div>
                <span className="font-garamond text-white/90 text-lg font-medium">Trial Attorneys</span>
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
