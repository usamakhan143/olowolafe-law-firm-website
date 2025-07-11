"use client";

import { useState, useEffect } from "react";
import { cn } from "@/utils/cn";
import Link from "next/link";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 lg:w-16 lg:h-16">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2Fa9dee2ca9ed24cb0930308ba5a655b3e?format=webp&width=800"
                  alt="OLO Law Firm Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="hidden sm:block">
                <h1 className="font-clarika font-bold text-lg lg:text-xl text-navy-800">
                  Olowolafe Law Firm
                </h1>
                <p className="text-sm font-garamond text-gray-600">
                  Criminal Defense • Civil Rights • Personal Injury
                </p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="font-medium transition-colors duration-200 hover:text-gold-600 text-navy-800"
                >
                  {item.label}
                </Link>
              ))}
            </div>

            {/* CTA Button */}
            <div className="hidden lg:block">
              <a href="tel:4029959554" className="btn-primary">
                Call (402) 995-9554
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-md transition-colors"
              aria-label="Toggle mobile menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span
                  className={cn(
                    "w-6 h-0.5 transition-all duration-300 bg-navy-800",
                    isMobileMenuOpen ? "rotate-45 translate-y-0.5" : "",
                  )}
                />
                <span
                  className={cn(
                    "w-6 h-0.5 mt-1.5 transition-all duration-300 bg-navy-800",
                    isMobileMenuOpen ? "opacity-0" : "",
                  )}
                />
                <span
                  className={cn(
                    "w-6 h-0.5 mt-1.5 transition-all duration-300 bg-navy-800",
                    isMobileMenuOpen ? "-rotate-45 -translate-y-2" : "",
                  )}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            "lg:hidden absolute top-full left-0 right-0 bg-white shadow-luxury transition-all duration-300 overflow-hidden",
            isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0",
          )}
        >
          <div className="p-6 space-y-4">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-2 font-medium text-navy-800 hover:text-gold-600 transition-colors duration-200"
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-4 border-t border-gray-200">
              <a
                href="tel:4029959554"
                className="btn-primary w-full text-center"
              >
                Call (402) 995-9554
              </a>
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
