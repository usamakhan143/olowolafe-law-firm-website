"use client";

import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

const DisclaimerPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      <main className="pt-32 pb-16">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h1 className="heading-primary text-navy-800 mb-4">
                Legal Disclaimer
              </h1>
              <p className="text-luxury text-gray-600">
                Important legal information about this website and our services
              </p>
            </div>

            {/* Disclaimer Content */}
            <div className="prose prose-lg max-w-none">
              <div className="bg-amber-50 border border-amber-200 rounded-lg p-8">
                <h2 className="text-xl font-semibold text-amber-800 mb-4">
                  Attorney Advertising Notice
                </h2>
                <p className="text-luxury text-amber-700 leading-relaxed">
                  <strong>Attorney Advertising:</strong> Nothing presented on
                  this website should be construed as legal advice or to create
                  an attorney-client relationship. This website is an
                  advertisement. The determination of the need for legal
                  services and the choice of a lawyer are extremely important
                  decisions and should not be based solely upon advertisements
                  or self-proclaimed expertise. Memberships and offices in legal
                  fraternities and legal societies, technical and professional
                  licenses, and memberships in scientific, technical and
                  professional associations and societies of law or field of
                  practice does not mean that a lawyer is a specialist or expert
                  in a field of law, nor does it mean that such lawyer is
                  necessarily any more expert or competent than any other
                  lawyer. Every case and every client's situation is different
                  and this site is merely meant to provide information to the
                  public. If you have a legal question, contact a lawyer for
                  advice tailored to your specific situation. The law is
                  constantly changing. Nothing on this website should be
                  construed as a guarantee, warranty, or prediction as to how
                  any individual's legal situation may play out in court or
                  arbitration. All potential clients are urged to make their own
                  independent investigation and evaluation of any lawyer being
                  considered.
                </p>
              </div>

              {/* Contact Section */}
              <div className="mt-12 bg-navy-50 rounded-lg p-8 text-center">
                <h3 className="heading-tertiary text-navy-800 mb-4">
                  Have Questions About Your Legal Matter?
                </h3>
                <p className="text-luxury mb-6">
                  Contact us today to discuss your specific situation and learn
                  how we can help.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a href="tel:4029959554" className="btn-primary">
                    Call (402) 995-9554
                  </a>
                  <a
                    href="mailto:info@ololawfirm.com"
                    className="btn-secondary"
                  >
                    Email Us
                  </a>
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

export default DisclaimerPage;
