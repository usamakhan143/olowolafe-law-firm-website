"use client";

import { useState } from "react";
import { cn } from "@/utils/cn";
import { useGSAPAnimation, useGSAPStagger } from "@/hooks/useGSAP";

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
  const formRef = useGSAPStagger(0.1);

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
      className="section-padding bg-navy-900 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 legal-pattern opacity-10"></div>

      <div ref={contactRef} className="container-luxury relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="heading-secondary text-white mb-6">
            Get Your Free Consultation
          </h2>
          <p className="text-luxury text-white/80 max-w-3xl mx-auto">
            Every case deserves personal attention. Let's discuss your situation
            and explore how our experience can help you achieve the best
            possible outcome.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column - Contact Info */}
          <div className="space-y-8">
            {/* Emergency CTA */}
            <div className="bg-red-600 rounded-xl p-6 text-white text-center">
              <h3 className="font-clarika font-bold text-xl mb-2">
                Emergency Legal Matter?
              </h3>
              <p className="mb-4 font-garamond">
                Available 24/7 for urgent cases
              </p>
              <a
                href="tel:4029959554"
                className="inline-flex items-center justify-center w-full py-4 bg-white text-red-600 font-bold rounded-lg hover:bg-gray-100 transition-colors text-lg"
              >
                📞 Call (402) 995-9554 Now
              </a>
            </div>

            {/* Contact Methods */}
            <div className="space-y-6">
              <h3 className="heading-tertiary text-white mb-6">
                Contact Information
              </h3>

              <div className="space-y-4">
                {[
                  {
                    icon: "📞",
                    label: "Phone",
                    value: "(402) 995-9554",
                    action: "tel:4029959554",
                  },
                  {
                    icon: "✉️",
                    label: "Email",
                    value: "info@ololawfirm.com",
                    action: "mailto:info@ololawfirm.com",
                  },
                  {
                    icon: "📍",
                    label: "Office",
                    value: "1227 Golden Gate Drive Papillion, NE 68046",
                    action: null,
                  },
                  {
                    icon: "🕒",
                    label: "Hours",
                    value: "Mon-Fri 8AM-6PM",
                    action: null,
                  },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/10 rounded-lg"
                  >
                    <span className="text-2xl">{item.icon}</span>
                    <div>
                      <div className="text-white/60 text-sm font-garamond">
                        {item.label}
                      </div>
                      {item.action ? (
                        <a
                          href={item.action}
                          className="text-white font-medium hover:text-gold-400 transition-colors"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-white font-medium">
                          {item.value}
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Service Areas */}
            <div>
              <h4 className="font-clarika font-semibold text-white mb-4">
                Service Areas
              </h4>
              <div className="grid grid-cols-2 gap-3">
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
                    className="flex items-center space-x-2 text-white/80"
                  >
                    <div className="w-1.5 h-1.5 bg-gold-400 rounded-full"></div>
                    <span className="text-sm font-garamond">{area}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="bg-white rounded-xl shadow-luxury p-8">
            <h3 className="heading-tertiary text-navy-800 mb-6">
              Send Us a Message
            </h3>

            {submitStatus === "success" && (
              <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-lg">
                <div className="flex items-center">
                  <span className="text-green-500 text-xl mr-2">✓</span>
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

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
                  placeholder="(402) 555-0123"
                />
              </div>

              {/* Case Type & Urgency */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Case Type
                  </label>
                  <select
                    name="caseType"
                    value={formData.caseType}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
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
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all"
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
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Case Details
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gold-500 focus:border-transparent transition-all resize-none"
                  placeholder="Please provide details about your case. All information is confidential."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={cn(
                  "w-full py-4 font-semibold rounded-lg transition-all duration-300",
                  isSubmitting
                    ? "bg-gray-400 text-white cursor-not-allowed"
                    : "btn-primary hover:shadow-glow",
                )}
              >
                {isSubmitting
                  ? "Sending Message..."
                  : "Send Message & Schedule Consultation"}
              </button>

              {/* Disclaimer */}
              <p className="text-xs text-gray-500 text-center font-garamond">
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
