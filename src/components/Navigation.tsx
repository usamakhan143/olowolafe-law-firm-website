"use client";

import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPracticeAreasOpen, setIsPracticeAreasOpen] = useState(false);
  const [isMobilePracticeAreasOpen, setIsMobilePracticeAreasOpen] = useState(false);
  const [dropdownTimeout, setDropdownTimeout] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (dropdownTimeout) {
        clearTimeout(dropdownTimeout);
      }
    };
  }, [dropdownTimeout]);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Results", href: "/results" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
  ];

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-luxury">
        <div className="container-luxury">
          <div className="flex items-center justify-between h-20 lg:h-24">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-16 h-16 lg:w-18 lg:h-18">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2Fa9dee2ca9ed24cb0930308ba5a655b3e?format=webp&width=200&quality=90"
                  alt="OLO Law Firm Logo"
                  className="w-full h-full object-contain"
                  loading="eager"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-clarika font-bold text-lg lg:text-xl text-navy-800">
                  Olowolafe Law Firm
                </h1>
                <p className="text-sm lg:text-base font-garamond text-gray-600">
                  Criminal Defense • Civil Rights • Personal Injury
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item.label} className="relative">
                  {item.label === "Practice Areas" ? (
                    <div
                      className="relative"
                      onMouseEnter={() => {
                        if (dropdownTimeout) {
                          clearTimeout(dropdownTimeout);
                          setDropdownTimeout(null);
                        }
                        setIsPracticeAreasOpen(true);
                      }}
                      onMouseLeave={() => {
                        const timeout = setTimeout(() => {
                          setIsPracticeAreasOpen(false);
                        }, 150);
                        setDropdownTimeout(timeout);
                      }}
                    >
                      <Link
                        href={item.href}
                        className="font-medium transition-colors duration-200 hover:text-gold-600 text-navy-800 flex items-center"
                      >
                        {item.label}
                        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </Link>

                      {/* Dropdown Menu */}
                      {isPracticeAreasOpen && (
                        <>
                          {/* Invisible bridge for easier mouse movement */}
                          <div className="absolute top-full left-0 w-64 h-2 z-40"></div>
                          <div
                            className="absolute top-full left-0 mt-1 w-64 bg-white rounded-lg shadow-luxury border border-gray-100 py-2 z-50"
                          onMouseEnter={() => {
                            if (dropdownTimeout) {
                              clearTimeout(dropdownTimeout);
                              setDropdownTimeout(null);
                            }
                            setIsPracticeAreasOpen(true);
                          }}
                          onMouseLeave={() => {
                            const timeout = setTimeout(() => {
                              setIsPracticeAreasOpen(false);
                            }, 150);
                            setDropdownTimeout(timeout);
                          }}
                        >
                          <Link
                            href="/criminal-defense"
                            className="block px-4 py-3 text-navy-800 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                          >
                            <div className="font-medium">Criminal Defense</div>
                            <div className="text-sm text-gray-600">Federal & State Criminal Cases</div>
                          </Link>
                          <Link
                            href="/civil-rights"
                            className="block px-4 py-3 text-navy-800 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                          >
                            <div className="font-medium">Civil Rights</div>
                            <div className="text-sm text-gray-600">Constitutional Rights Protection</div>
                          </Link>
                          <Link
                            href="/personal-injury"
                            className="block px-4 py-3 text-navy-800 hover:bg-gold-50 hover:text-gold-600 transition-colors"
                          >
                            <div className="font-medium">Personal Injury</div>
                            <div className="text-sm text-gray-600">Accident & Injury Claims</div>
                          </Link>
                          </div>
                        </>
                      )}
                    </div>
                  ) : (
                    <Link
                      href={item.href}
                      className="font-medium transition-colors duration-200 hover:text-gold-600 text-navy-800"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="tel:4029959554" className="btn-primary">
                Call (402) 995-9554
              </a>
            </div>

            {/* Mobile Header Actions */}
            <div className="lg:hidden flex items-center space-x-3">
              {/* Schedule Consultation Button */}
              <a
                href="/schedule-consultation"
                className="bg-gradient-to-r from-gold-500 to-gold-600 text-white px-3 py-2 rounded-lg text-xs font-semibold hover:shadow-lg transition-all duration-300"
              >
                Schedule Consultation
              </a>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-md transition-colors relative"
                aria-label="Toggle mobile menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center items-center relative">
                  <span
                    className={cn(
                      "w-5 h-0.5 transition-all duration-300 bg-navy-800 absolute",
                      isMobileMenuOpen ? "rotate-45" : "translate-y-[-4px]",
                    )}
                  />
                  <span
                    className={cn(
                      "w-5 h-0.5 transition-all duration-300 bg-navy-800 absolute",
                      isMobileMenuOpen ? "opacity-0" : "",
                    )}
                  />
                  <span
                    className={cn(
                      "w-5 h-0.5 transition-all duration-300 bg-navy-800 absolute",
                      isMobileMenuOpen ? "-rotate-45" : "translate-y-[4px]",
                    )}
                  />
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-gradient-to-br from-navy-900 via-navy-800 to-navy-700 shadow-2xl transition-all duration-500 overflow-hidden backdrop-blur-sm",
            isMobileMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="relative px-8 py-8">
            {/* Background Pattern */}
            <div className="absolute inset-0 legal-pattern opacity-10"></div>

            {/* Decorative Elements */}
            <div className="absolute top-4 left-4 w-2 h-2 bg-gold-400 rounded-full opacity-60"></div>
            <div className="absolute top-4 right-4 w-2 h-2 bg-gold-400 rounded-full opacity-60"></div>

            {/* Navigation Links */}
            <div className="relative z-10 space-y-2 mb-8">
              {navItems.map((item, index) => (
                <div key={item.label}>
                  {item.label === "Practice Areas" ? (
                    <button
                      onClick={() => setIsMobilePracticeAreasOpen(!isMobilePracticeAreasOpen)}
                      className="group flex items-center justify-center py-4 px-6 font-semibold text-white hover:text-gold-400 transition-all duration-300 rounded-xl hover:bg-white/10 border border-transparent hover:border-gold-400/40 hover:shadow-lg transform hover:-translate-y-1 w-full"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{item.label}</span>
                        <svg
                          className={`w-4 h-4 transition-transform duration-300 ${isMobilePracticeAreasOpen ? 'rotate-180' : ''}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="group flex items-center justify-center py-4 px-6 font-semibold text-white hover:text-gold-400 transition-all duration-300 rounded-xl hover:bg-white/10 border border-transparent hover:border-gold-400/40 hover:shadow-lg transform hover:-translate-y-1"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="flex items-center space-x-3">
                        <span className="text-lg">{item.label}</span>
                        <div className="w-1.5 h-1.5 bg-gold-400 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:scale-125"></div>
                      </div>
                    </Link>
                  )}

                  {/* Practice Areas Submenu */}
                  {item.label === "Practice Areas" && isMobilePracticeAreasOpen && (
                    <div className="ml-6 mt-2 space-y-1 animate-fade-in-up">
                      <Link
                        href="/criminal-defense"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobilePracticeAreasOpen(false);
                        }}
                        className="block py-2 px-4 text-white/80 hover:text-gold-400 text-sm rounded-lg hover:bg-white/5 transition-colors"
                      >
                        → Criminal Defense
                      </Link>
                      <Link
                        href="/civil-rights"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobilePracticeAreasOpen(false);
                        }}
                        className="block py-2 px-4 text-white/80 hover:text-gold-400 text-sm rounded-lg hover:bg-white/5 transition-colors"
                      >
                        → Civil Rights
                      </Link>
                      <Link
                        href="/personal-injury"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobilePracticeAreasOpen(false);
                        }}
                        className="block py-2 px-4 text-white/80 hover:text-gold-400 text-sm rounded-lg hover:bg-white/5 transition-colors"
                      >
                        → Personal Injury
                      </Link>
                      <Link
                        href="/practice-areas"
                        onClick={() => {
                          setIsMobileMenuOpen(false);
                          setIsMobilePracticeAreasOpen(false);
                        }}
                        className="block py-2 px-4 text-gold-400 hover:text-gold-300 text-sm rounded-lg hover:bg-white/5 transition-colors font-medium border-t border-white/20 mt-2 pt-2"
                      >
                        → View All Practice Areas
                      </Link>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Contact Section */}
            <div className="relative z-10 pt-6 border-t border-white/20">
              <div className="text-center mb-6">
                <h3 className="text-white font-clarika font-bold text-xl mb-2 tracking-wide">
                  Ready to Get Started?
                </h3>
                <p className="text-white/80 text-base font-garamond">
                  Get your free consultation today
                </p>
              </div>

              <div className="space-y-4 max-w-sm mx-auto">
                <a
                  href="tel:4029959554"
                  className="block w-full py-4 px-6 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-bold text-center rounded-xl shadow-2xl hover:shadow-glow transition-all duration-300 transform hover:-translate-y-1 hover:scale-105"
                >
                  <div className="flex items-center justify-center space-x-2">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                    <span>Call (402) 995-9554</span>
                  </div>
                </a>

                <a
                  href="/schedule-consultation"
                  className="block w-full py-4 px-6 border-2 border-white/30 text-white font-semibold text-center rounded-xl hover:bg-white/10 hover:border-gold-400 transition-all duration-300 backdrop-blur-sm"
                >
                  Schedule Consultation
                </a>
              </div>

              {/* Quick Contact Info */}
              <div className="mt-8 grid grid-cols-2 gap-6 text-center">
                <div className="bg-white/5 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-gold-400 text-xs font-garamond mb-1 uppercase tracking-wide">Available</div>
                  <div className="text-white text-sm font-medium">24/7 Emergency</div>
                </div>
                <div className="bg-white/5 rounded-lg p-3 backdrop-blur-sm">
                  <div className="text-gold-400 text-xs font-garamond mb-1 uppercase tracking-wide">Licensed in</div>
                  <div className="text-white text-sm font-medium">NE & IA</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Sticky CTA Ribbon */}
      <div className="fixed bottom-0 left-0 right-0 z-40 lg:hidden">
        <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 text-center shadow-luxury">
          <p className="font-semibold text-sm">Urgent Legal Matter?</p>
          <a
            href="tel:4029959554"
            className="font-bold text-lg hover:text-gold-200 transition-colors"
          >
            Call (402) 995-9554
          </a>
        </div>
      </div>
    </>
  );
};

export default Navigation;
