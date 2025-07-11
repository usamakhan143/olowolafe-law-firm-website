"use client";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const practiceAreas = ["Criminal Defense", "Civil Rights", "Personal Injury"];

  const quickLinks = [
    { label: "About", href: "/about" },
    { label: "Practice Areas", href: "/practice-areas" },
    { label: "Results", href: "/results" },
    { label: "Contact", href: "/contact" },
    { label: "Blog", href: "/blog" },
    { label: "Disclaimer", href: "/disclaimer" },
  ];

  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="container-luxury py-16">
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-4 mb-6">
              <div className="w-16 h-16">
                <img
                  src="https://cdn.builder.io/api/v1/image/assets%2F59fb5da5a9b342648db0a1edf457b3c1%2Fa9dee2ca9ed24cb0930308ba5a655b3e?format=webp&width=800"
                  alt="OLO Law Firm Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-clarika font-bold text-xl">
                  Olowolafe Law Firm
                </h3>
                <p className="text-gold-400 font-garamond">
                  Criminal Defense • Civil Rights • Personal Injury
                </p>
              </div>
            </div>

            <p className="text-white/80 font-garamond mb-6 max-w-md">
              Regardless of your situation, our firm strives to understand the
              unique legal concerns and needs of each individual client. We
              deliver high quality legal advocacy that is specifically tailored
              to the unique concerns of each of our clients.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <span className="text-gold-400">📞</span>
                <a
                  href="tel:4029959554"
                  className="hover:text-gold-400 transition-colors font-medium"
                >
                  (402) 995-9554
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gold-400">✉️</span>
                <a
                  href="mailto:info@ololawfirm.com"
                  className="hover:text-gold-400 transition-colors"
                >
                  info@ololawfirm.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-gold-400">📍</span>
                <span className="text-white/80">
                  1227 Golden Gate Drive Papillion, NE 68046
                </span>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="mt-6 p-4 bg-red-600/20 border border-red-400/30 rounded-lg">
              <p className="text-red-300 font-medium text-sm">
                ⚠️ Emergency Legal Matter? Call (402) 995-9554 - Available 24/7
              </p>
            </div>
          </div>

          {/* Practice Areas */}
          <div>
            <h4 className="font-clarika font-semibold text-lg mb-6">
              Practice Areas
            </h4>
            <ul className="space-y-3">
              {practiceAreas.map((area, index) => (
                <li key={index}>
                  <a
                    href="#practice"
                    className="text-white/70 hover:text-gold-400 transition-colors font-garamond text-sm"
                  >
                    {area}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-clarika font-semibold text-lg mb-6">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-white/70 hover:text-gold-400 transition-colors font-garamond text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Credentials */}
            <div className="mt-8">
              <h5 className="font-clarika font-medium mb-4">Licensed In</h5>
              <div className="space-y-2">
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
                  <span className="text-white/70 text-sm">
                    Nebraska State Bar
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
                  <span className="text-white/70 text-sm">Iowa State Bar</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
                  <span className="text-white/70 text-sm">
                    Federal Districts
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-luxury py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-white/60 text-sm font-garamond">
              © {currentYear} Olowolafe Law Firm. All rights reserved.
            </div>

            <div className="flex space-x-6 text-sm">
              <a
                href="/disclaimer"
                className="text-white/60 hover:text-gold-400 transition-colors"
              >
                Legal Disclaimer
              </a>
            </div>
          </div>

          {/* Legal Notice */}
          <div className="mt-6 pt-6 border-t border-white/10">
            <p className="text-white/50 text-xs font-garamond leading-relaxed">
              <strong>Attorney Advertising.</strong> This website is designed
              for general information only. The information presented should not
              be construed to be formal legal advice nor the formation of a
              lawyer/client relationship. Prior results do not guarantee a
              similar outcome. Please consult with a qualified attorney about
              your specific legal matter.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
