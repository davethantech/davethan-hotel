import { ArrowRight, Calendar, Phone, Mail, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CallToActionSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    hospital: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success' | 'error' | null
  const [submitMessage, setSubmitMessage] = useState("");

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setSubmitMessage(
          result.message || "Demo request submitted successfully!",
        );

        // Reset form
        setFormData({
          name: "",
          email: "",
          hospital: "",
          phone: "",
          message: "",
        });
      } else {
        throw new Error(result.error || "Failed to submit demo request");
      }
    } catch (error) {
      console.error("Error submitting demo request:", error);
      setSubmitStatus("error");
      setSubmitMessage(
        error.message ||
          "An error occurred. Please try again or contact support.",
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const benefits = [
    "See MediCore in action with your hospital's data",
    "Get personalized recommendations for your needs",
    "Speak with healthcare technology experts",
    "Receive a custom implementation timeline",
    "No obligation, completely free consultation",
  ];

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-br from-[#0EA5E9] via-[#0284C7] to-[#0369A1] px-6 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="cta-pattern"
                x="0"
                y="0"
                width="200"
                height="200"
                patternUnits="userSpaceOnUse"
              >
                <circle
                  cx="100"
                  cy="100"
                  r="50"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                >
                  <animate
                    attributeName="r"
                    values="50;70;50"
                    dur="6s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="50" cy="50" r="25" fill="white" opacity="0.3">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="4s"
                    repeatCount="indefinite"
                  />
                </circle>
                <circle cx="150" cy="150" r="25" fill="white" opacity="0.3">
                  <animate
                    attributeName="opacity"
                    values="0.3;0.8;0.3"
                    dur="4s"
                    delay="2s"
                    repeatCount="indefinite"
                  />
                </circle>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#cta-pattern)" />
          </svg>
        </div>

        {/* Gradient orbs */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-white/20 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-white/20 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Content */}
          <div className="text-white">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm text-white text-sm font-semibold rounded-full mb-6">
              <Calendar size={16} className="mr-2" />
              Ready to Transform?
            </div>

            {/* Headline */}
            <h2 className="font-bold text-3xl lg:text-5xl leading-tight mb-6">
              See MediCore in action with a
              <span className="relative inline-block ml-4">
                live demo
                {/* White underline */}
                <svg
                  className="absolute left-0 w-full h-[12px]"
                  style={{ bottom: "-8px" }}
                  viewBox="0 0 100 10"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <rect
                    x="0"
                    y="0"
                    width="100"
                    height="10"
                    fill="white"
                    fillOpacity="0.3"
                    rx="5"
                  />
                </svg>
              </span>
            </h2>

            {/* Description */}
            <p className="text-lg lg:text-xl opacity-90 leading-relaxed mb-8">
              Join over 500 hospitals that have already transformed their
              operations. Book a personalized demo and see how MediCore can
              revolutionize your healthcare facility.
            </p>

            {/* Benefits List */}
            <div className="space-y-3 mb-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start">
                  <CheckCircle
                    size={20}
                    className="text-white mr-3 mt-0.5 flex-shrink-0"
                  />
                  <span className="opacity-90">{benefit}</span>
                </div>
              ))}
            </div>

            {/* Quick Contact Options */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
              <h3 className="font-semibold text-lg mb-4">
                Prefer to talk directly?
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                <a
                  href="tel:+1-555-MEDICORE"
                  className="flex items-center p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors group"
                >
                  <Phone
                    size={20}
                    className="mr-3 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <div className="font-semibold text-sm">Call Sales</div>
                    <div className="text-sm opacity-80">+1-555-MEDICORE</div>
                  </div>
                </a>
                <a
                  href="mailto:demo@medicore.com"
                  className="flex items-center p-3 bg-white/20 hover:bg-white/30 rounded-lg transition-colors group"
                >
                  <Mail
                    size={20}
                    className="mr-3 group-hover:scale-110 transition-transform"
                  />
                  <div>
                    <div className="font-semibold text-sm">Email Us</div>
                    <div className="text-sm opacity-80">demo@medicore.com</div>
                  </div>
                </a>
              </div>
            </div>
          </div>

          {/* Right Column - Demo Request Form */}
          <div className="bg-white rounded-3xl p-8 shadow-2xl">
            <div className="mb-8">
              <h3 className="font-bold text-2xl text-[#0F172A] mb-2">
                Request Your Free Demo
              </h3>
              <p className="text-[#64748B]">
                Fill out the form below and we'll contact you within 24 hours to
                schedule your personalized demo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-[#0F172A] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-lg text-base bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-colors"
                    placeholder="Dr. John Smith"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-[#0F172A] mb-2"
                  >
                    Business Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-lg text-base bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-colors"
                    placeholder="john.smith@hospital.com"
                    required
                  />
                </div>
              </div>

              {/* Hospital & Phone Row */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="hospital"
                    className="block text-sm font-semibold text-[#0F172A] mb-2"
                  >
                    Hospital/Organization *
                  </label>
                  <input
                    type="text"
                    id="hospital"
                    name="hospital"
                    value={formData.hospital}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-lg text-base bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-colors"
                    placeholder="Metro General Hospital"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="phone"
                    className="block text-sm font-semibold text-[#0F172A] mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-lg text-base bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-colors"
                    placeholder="+1 (555) 123-4567"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-semibold text-[#0F172A] mb-2"
                >
                  Tell us about your needs (Optional)
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border-2 border-[#E2E8F0] rounded-lg text-base bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your hospital size, current challenges, or specific features you're interested in..."
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] hover:from-[#0284C7] hover:to-[#0369A1] text-white font-semibold text-lg px-8 py-4 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:ring-offset-2 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-3"></div>
                    Submitting...
                  </>
                ) : (
                  <>
                    Book Your Free Demo
                    <ArrowRight size={20} className="ml-2" />
                  </>
                )}
              </button>

              {/* Status Message */}
              {submitStatus && (
                <div
                  className={`p-4 rounded-lg flex items-center ${
                    submitStatus === "success"
                      ? "bg-[#10B981]/10 border border-[#10B981]/20 text-[#059669]"
                      : "bg-[#DC2626]/10 border border-[#DC2626]/20 text-[#B91C1C]"
                  }`}
                >
                  <CheckCircle
                    size={20}
                    className={`mr-3 flex-shrink-0 ${
                      submitStatus === "success"
                        ? "text-[#10B981]"
                        : "text-[#DC2626]"
                    }`}
                  />
                  <span className="text-sm font-medium">{submitMessage}</span>
                </div>
              )}

              {/* Privacy Notice */}
              <p className="text-xs text-[#64748B] text-center">
                By submitting this form, you agree to our{" "}
                <a href="/privacy" className="text-[#0284C7] hover:underline">
                  Privacy Policy
                </a>
                . We'll only use your information to schedule your demo and send
                relevant product updates.
              </p>
            </form>

            {/* Trust Indicators */}
            <div className="mt-8 pt-6 border-t border-[#E2E8F0] text-center">
              <div className="flex items-center justify-center space-x-6 text-sm text-[#64748B]">
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-[#10B981] mr-2" />
                  HIPAA Compliant
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-[#10B981] mr-2" />
                  Enterprise Security
                </div>
                <div className="flex items-center">
                  <CheckCircle size={16} className="text-[#10B981] mr-2" />
                  24/7 Support
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Stats */}
        <div className="mt-20 text-center text-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <div className="text-3xl font-bold mb-2">500+</div>
              <div className="opacity-80">Hospitals Trust MediCore</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">24hrs</div>
              <div className="opacity-80">Average Response Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">6 months</div>
              <div className="opacity-80">Average Implementation</div>
            </div>
            <div>
              <div className="text-3xl font-bold mb-2">98%</div>
              <div className="opacity-80">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
