"use client";

import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { useGSAPAnimation } from "@/hooks/useGSAP";

const ScheduleConsultation = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    caseType: "",
    urgency: "",
    message: "",
    preferredContact: "phone",
    hearAboutUs: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const heroRef = useGSAPAnimation();
  const formRef = useGSAPAnimation();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 2000);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="pt-24 pb-16">
          <div className="container-luxury">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-8">
                <span className="text-white text-3xl">✓</span>
              </div>
              <h1 className="heading-secondary text-navy-800 mb-4">
                Thank You for Your Consultation Request
              </h1>
              <p className="text-luxury mb-8">
                We have received your consultation request and will contact you
                within 24 hours. For urgent matters, please call us directly at{" "}
                <a
                  href="tel:4029959554"
                  className="text-gold-600 font-semibold"
                >
                  (402) 995-9554
                </a>
                .
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a href="/" className="btn-primary">
                  Return to Home
                </a>
                <a href="tel:4029959554" className="btn-secondary">
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />

      {/* Hero Banner */}
      <section className="bg-navy-900 text-white pt-24 pb-16">
        <div className="container-luxury">
          <div ref={heroRef} className="text-center">
            <h1 className="heading-primary text-white mb-4 mt-12">
              Schedule Your Free Consultation
            </h1>
            <p className="text-luxury text-white/90 max-w-3xl mx-auto mb-8">
              Get experienced legal representation for your criminal defense,
              civil rights, or personal injury case. We provide confidential
              consultations to discuss your legal options.
            </p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="font-garamond">Free Consultation</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="font-garamond">24/7 Availability</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">✓</span>
                </div>
                <span className="font-garamond">Confidential</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <main className="pt-16 pb-16">
        <div className="container-luxury">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-16">
              {/* Contact Information */}
              <div className="lg:col-span-1">
                <div className="sticky top-32">
                  <h2 className="heading-tertiary text-navy-800 mb-6">
                    Contact Information
                  </h2>

                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800 mb-1">
                          Phone
                        </h3>
                        <a
                          href="tel:4029959554"
                          className="text-gold-600 hover:text-gold-700 font-medium"
                        >
                          (402) 995-9554
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          Available 24/7 for urgent matters
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                          <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800 mb-1">
                          Email
                        </h3>
                        <a
                          href="mailto:info@olowolafelaw.com"
                          className="text-gold-600 hover:text-gold-700 font-medium"
                        >
                          info@olowolafelaw.com
                        </a>
                        <p className="text-sm text-gray-600 mt-1">
                          We respond within 24 hours
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gold-500 rounded-lg flex items-center justify-center flex-shrink-0">
                        <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z" clipRule="evenodd"/>
                        </svg>
                      </div>
                      <div>
                        <h3 className="font-semibold text-navy-800 mb-1">
                          Licensed In
                        </h3>
                        <p className="text-navy-700">Nebraska & Iowa</p>
                        <p className="text-sm text-gray-600 mt-1">
                          State and Federal Courts
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="mt-8 p-6 bg-gold-50 rounded-lg border border-gold-200">
                    <h3 className="font-semibold text-navy-800 mb-2">
                      Urgent Legal Matter?
                    </h3>
                    <p className="text-sm text-gray-700 mb-4">
                      If you have been arrested or have an urgent legal matter,
                      call us immediately.
                    </p>
                    <a
                      href="tel:4029959554"
                      className="btn-primary w-full text-center"
                    >
                      Call Now: (402) 995-9554
                    </a>
                  </div>
                </div>
              </div>

              {/* Consultation Form */}
              <div className="lg:col-span-2">
                <div ref={formRef} className="card-luxury">
                  <h2 className="heading-tertiary text-navy-800 mb-6">
                    Request Your Free Consultation
                  </h2>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-navy-800 mb-2"
                        >
                          First Name *
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                          placeholder="Enter your first name"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-navy-800 mb-2"
                        >
                          Last Name *
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    {/* Contact Fields */}
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="email"
                          className="block text-sm font-medium text-navy-800 mb-2"
                        >
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-navy-800 mb-2"
                        >
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                          placeholder="(402) 123-4567"
                        />
                      </div>
                    </div>

                    {/* Case Type */}
                    <div>
                      <label
                        htmlFor="caseType"
                        className="block text-sm font-medium text-navy-800 mb-2"
                      >
                        Type of Legal Matter *
                      </label>
                      <select
                        id="caseType"
                        name="caseType"
                        value={formData.caseType}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      >
                        <option value="">Select your case type</option>
                        <option value="criminal-defense">
                          Criminal Defense
                        </option>
                        <option value="civil-rights">Civil Rights</option>
                        <option value="personal-injury">Personal Injury</option>
                        <option value="federal-defense">Federal Defense</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Urgency */}
                    <div>
                      <label
                        htmlFor="urgency"
                        className="block text-sm font-medium text-navy-800 mb-2"
                      >
                        Urgency Level *
                      </label>
                      <select
                        id="urgency"
                        name="urgency"
                        value={formData.urgency}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      >
                        <option value="">Select urgency level</option>
                        <option value="immediate">
                          Immediate - Arrested or court date within 48 hours
                        </option>
                        <option value="urgent">
                          Urgent - Court date within 1 week
                        </option>
                        <option value="soon">
                          Soon - Need consultation within 1-2 weeks
                        </option>
                        <option value="general">General inquiry</option>
                      </select>
                    </div>

                    {/* Preferred Contact Method */}
                    <div>
                      <label className="block text-sm font-medium text-navy-800 mb-2">
                        Preferred Contact Method
                      </label>
                      <div className="flex space-x-6">
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === "phone"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-gold-600 border-gray-300 focus:ring-gold-500"
                          />
                          <span className="ml-2 text-navy-700">Phone</span>
                        </label>
                        <label className="flex items-center">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === "email"}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-gold-600 border-gray-300 focus:ring-gold-500"
                          />
                          <span className="ml-2 text-navy-700">Email</span>
                        </label>
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="message"
                        className="block text-sm font-medium text-navy-800 mb-2"
                      >
                        Tell Us About Your Legal Matter *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors resize-vertical"
                        placeholder="Please provide details about your legal situation, including any relevant dates, charges, or circumstances..."
                      />
                    </div>

                    {/* How did you hear about us */}
                    <div>
                      <label
                        htmlFor="hearAboutUs"
                        className="block text-sm font-medium text-navy-800 mb-2"
                      >
                        How did you hear about us?
                      </label>
                      <select
                        id="hearAboutUs"
                        name="hearAboutUs"
                        value={formData.hearAboutUs}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-gold-500 transition-colors"
                      >
                        <option value="">Select an option</option>
                        <option value="google">Google Search</option>
                        <option value="referral">
                          Referral from friend/family
                        </option>
                        <option value="attorney-referral">
                          Referral from another attorney
                        </option>
                        <option value="social-media">Social Media</option>
                        <option value="website">Found your website</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Disclaimer */}
                    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                      <p className="text-sm text-yellow-800">
                        <strong>Important:</strong> Submitting this form does
                        not create an attorney-client relationship. Do not
                        include confidential or sensitive information in this
                        form. If you have been arrested or have an urgent legal
                        matter, please call us immediately at (402) 995-9554.
                      </p>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4">
                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full btn-primary text-lg py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center justify-center">
                            <svg
                              className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                            >
                              <circle
                                className="opacity-25"
                                cx="12"
                                cy="12"
                                r="10"
                                stroke="currentColor"
                                strokeWidth="4"
                              ></circle>
                              <path
                                className="opacity-75"
                                fill="currentColor"
                                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                              ></path>
                            </svg>
                            Submitting...
                          </span>
                        ) : (
                          "Schedule Free Consultation"
                        )}
                      </button>
                    </div>
                  </form>
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

export default ScheduleConsultation;
