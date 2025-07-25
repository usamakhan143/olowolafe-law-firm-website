"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import {
  useGSAPAnimation,
  useGSAPStagger,
  useGSAPFormAnimation,
} from "@/hooks/useGSAP";

interface FormData {
  name: string;
  email: string;
  phone: string;
  caseType: string;
  urgency: string;
  message: string;
}

const ContactSection = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    caseType: "",
    urgency: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const contactRef = useGSAPAnimation();
  const formRef = useGSAPFormAnimation();

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 2000);
  };

  const caseTypes = [
    "Criminal Defense",
    "Civil Rights",
    "Personal Injury",
    "Other",
  ];

  const urgencyLevels = [
    { value: "low", label: "Not Urgent" },
    { value: "medium", label: "Within a Week" },
    { value: "high", label: "Within 24 Hours" },
    { value: "emergency", label: "Emergency" },
  ];

  return (
    <section
      id="contact"
      className="section-padding bg-white relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 legal-pattern opacity-3"></div>
        <div className="absolute top-20 left-10 w-32 h-32 bg-gold-400/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-48 h-48 bg-gold-300/3 rounded-full blur-2xl"></div>
      </div>

      <div ref={contactRef} className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-6 py-3 bg-gold-50 rounded-full mb-8 border border-gold-200">
            <svg className="w-5 h-5 text-gold-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
            </svg>
            <span className="text-navy-800 font-garamond text-lg font-medium">Ready to Help You</span>
          </div>
          <h2 className="heading-secondary text-navy-800 mb-8">
            Get Your Free Consultation
          </h2>
          <p className="text-luxury text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Every case deserves personal attention. Let's discuss your situation
            and explore how our experience can help you achieve the best
            possible outcome.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Left Column - Contact Info */}
          <div className="space-y-10">
            {/* Emergency CTA */}
            <div className="bg-gradient-to-r from-red-600 to-red-700 rounded-2xl p-8 text-white text-center shadow-2xl border border-red-500/20">
              <div className="mb-4">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd"/>
                  </svg>
                </div>
                <h3 className="font-clarika font-bold text-2xl mb-3">
                  Emergency Legal Matter?
                </h3>
                <p className="mb-6 font-garamond text-lg text-red-100">
                  Available 24/7 for urgent cases
                </p>
              </div>
              <a
                href="tel:4029959554"
                className="inline-flex items-center justify-center w-full py-5 bg-white text-red-600 font-bold rounded-xl hover:bg-gray-100 transition-all duration-300 text-xl shadow-lg transform hover:-translate-y-1"
              >
                <svg className="w-6 h-6 mr-2" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                Call (402) 995-9554 Now
              </a>
            </div>

            {/* Contact Methods */}
            <div className="space-y-8">
              <h3 className="heading-tertiary text-navy-800 mb-8 text-center lg:text-left">
                Contact Information
              </h3>

              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                      </svg>
                    ),
                    label: "Phone",
                    value: "(402) 995-9554",
                    action: "tel:4029959554",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                      </svg>
                    ),
                    label: "Email",
                    value: "info@ololawfirm.com",
                    action: "mailto:info@ololawfirm.com",
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"/>
                      </svg>
                    ),
                    label: "Office",
                    value: "1227 Golden Gate Drive Papillion, NE 68046",
                    action: null,
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd"/>
                      </svg>
                    ),
                    label: "Hours",
                    value: "Mon-Fri 8AM-6PM",
                    action: null,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-5 p-6 bg-navy-50 border border-navy-100 rounded-xl hover:border-gold-400 hover:bg-gold-50 transition-all duration-300 hover:transform hover:-translate-y-1 shadow-lg"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center flex-shrink-0">
                      {item.icon}
                    </div>
                    <div>
                      <div className="text-gray-600 text-sm font-garamond mb-1">
                        {item.label}
                      </div>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-navy-800 font-medium text-lg hover:text-gold-600 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-navy-800 font-medium text-lg">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div className="bg-navy-50 rounded-2xl p-8 border border-navy-100 shadow-lg">
              <h4 className="font-clarika font-semibold text-navy-800 mb-6 text-xl text-center lg:text-left">
                Service Areas
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Omaha, NE",
                  "Lincoln, NE",
                  "Des Moines, IA",
                  "Cedar Rapids, IA",
                  "Council Bluffs, IA",
                  "Federal Courts",
                ].map((area, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 text-navy-700 p-3 rounded-lg bg-white hover:bg-gold-50 transition-all duration-300 border border-gray-100"
                  >
                    <div className="w-2 h-2 bg-gold-500 rounded-full flex-shrink-0"></div>
                    <span className="text-base font-garamond">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-2xl shadow-2xl p-10 border border-gray-200">
            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-400 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </div>
              <h3 className="heading-tertiary text-navy-800 mb-2">
                Send Us a Message
              </h3>
              <p className="text-gray-600 font-garamond">We'll respond within 24 hours</p>
            </div>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-2">��</span>
                  <div>
                    <p className="text-green-800 font-medium">
                      Message sent successfully!
                    </p>
                    <p className="text-green-600 text-sm">
                      We'll contact you within 24 hours.
                    </p>
                  </div>
                </div>
              </div>
            )}

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                  placeholder="(402) 555-0123"
                />
              </div>

              {/* Case Type & Urgency */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Case Type
                  </label>
                  <select
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                  >
                    <option value="">Select case type</option>
                    {caseTypes.map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    Urgency Level
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 text-lg bg-gray-50 hover:bg-white"
                  >
                    <option value="">Select urgency</option>
                    {urgencyLevels.map((level) => (
                      <option key={level.value} value={level.value}>
                        {level.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Case Details
                </label>
                <textarea
                  name="message"
                  rows={5}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all duration-300 resize-none text-lg bg-gray-50 hover:bg-white"
                  placeholder="Please provide details about your case. All information is confidential."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-5 font-bold text-xl rounded-xl transition-all duration-300 transform hover:-translate-y-1",
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "bg-gradient-to-r from-gold-500 to-gold-600 text-white shadow-2xl hover:shadow-glow hover:scale-105",
                )}
              >
                {isSubmitting
                  ? "Sending Message..."
                  : "Send Message & Schedule Consultation"}
              </button>

              {/* Disclaimer */}
              <p className="text-sm text-gray-600 text-center font-garamond bg-gray-50 p-4 rounded-xl">
                By submitting this form, you agree to our privacy policy. This
                form does not create an attorney-client relationship.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
