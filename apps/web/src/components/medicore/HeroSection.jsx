import { ArrowRight, Play } from "lucide-react";
import { useState } from "react";

export default function HeroSection() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email) return;

    setIsSubmitting(true);

    try {
      const response = await fetch("/api/demo-request", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: "Quick Demo Request",
          email: email,
          hospital: "Provided via hero form",
          phone: "",
          message: "Requested demo via hero form",
        }),
      });

      if (response.ok) {
        setEmail("");
        // Could show a success message or redirect
        console.log("Demo request submitted successfully");
      }
    } catch (error) {
      console.error("Error submitting demo request:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative bg-gradient-to-br from-[#F8FAFC] via-white to-[#F1F5F9] pt-20 pb-24 px-6 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient orbs */}
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-r from-[#0EA5E9]/20 to-[#06B6D4]/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-r from-[#10B981]/10 to-[#059669]/10 rounded-full blur-3xl"></div>

        {/* Medical pattern */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern
              id="medical-pattern"
              x="0"
              y="0"
              width="100"
              height="100"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="50" cy="50" r="2" fill="#0284C7" />
              <rect x="48" y="30" width="4" height="40" fill="#0284C7" />
              <rect x="30" y="48" width="40" height="4" fill="#0284C7" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-pattern)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <div className="order-2 lg:order-1">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 bg-[#0EA5E9]/10 text-[#0284C7] text-sm font-semibold rounded-full mb-6">
              <div className="w-2 h-2 bg-[#10B981] rounded-full mr-2 animate-pulse"></div>
              Trusted by 500+ Healthcare Facilities
            </div>

            {/* Main Headline */}
            <h1 className="font-bold text-4xl lg:text-6xl text-[#0F172A] leading-tight mb-6">
              Revolutionizing
              <span className="relative inline-block ml-4">
                Hospital
                {/* Yellow marker highlight */}
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
                    fill="#F59E0B"
                    rx="5"
                  />
                </svg>
              </span>
              <br />
              Management
            </h1>

            {/* Subheading */}
            <p className="text-lg lg:text-xl text-[#64748B] max-w-lg mb-8 leading-relaxed">
              Streamline operations, enhance patient care, and automate
              workflows with our comprehensive hospital management system.
              Experience efficiency like never before.
            </p>

            {/* CTA Form */}
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 mb-8"
            >
              <input
                type="email"
                placeholder="Enter your business email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 max-w-md px-4 py-3 border-2 border-[#E2E8F0] rounded-lg text-base bg-white text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-base px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:ring-offset-2 flex items-center justify-center"
              >
                Request Demo
                <ArrowRight size={18} className="ml-2" />
              </button>
            </form>

            {/* Secondary CTA */}
            <button className="inline-flex items-center text-[#0284C7] hover:text-[#0369A1] font-semibold transition-colors group">
              <div className="w-10 h-10 bg-[#0EA5E9]/10 rounded-full flex items-center justify-center mr-3 group-hover:bg-[#0EA5E9]/20 transition-colors">
                <Play size={14} className="ml-0.5" />
              </div>
              Watch 2-minute overview
            </button>

            {/* Trust indicators */}
            <div className="mt-12 pt-8 border-t border-[#E2E8F0]">
              <p className="text-sm text-[#64748B] mb-4">
                Trusted by leading healthcare institutions:
              </p>
              <div className="flex flex-wrap items-center gap-8 opacity-60">
                <div className="h-8 flex items-center">
                  <span className="font-semibold text-[#475569]">
                    City General Hospital
                  </span>
                </div>
                <div className="h-8 flex items-center">
                  <span className="font-semibold text-[#475569]">
                    MedCenter Plus
                  </span>
                </div>
                <div className="h-8 flex items-center">
                  <span className="font-semibold text-[#475569]">
                    Regional Medical
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - 3D Hospital Illustration */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Hospital Building - 3D Isometric Style */}
              <div className="relative transform hover:scale-105 transition-transform duration-500">
                {/* Building Base */}
                <div className="relative">
                  {/* Hospital Building */}
                  <div className="w-full h-80 bg-gradient-to-br from-[#F8FAFC] to-[#E2E8F0] rounded-2xl shadow-2xl border-2 border-[#CBD5E1]/50 relative overflow-hidden">
                    {/* Building Grid Pattern */}
                    <div className="absolute inset-4 grid grid-cols-8 grid-rows-12 gap-1">
                      {Array.from({ length: 96 }).map((_, i) => (
                        <div
                          key={i}
                          className={`rounded-sm ${
                            Math.random() > 0.6
                              ? "bg-[#0EA5E9]/20"
                              : Math.random() > 0.3
                                ? "bg-[#F59E0B]/20"
                                : "bg-[#64748B]/10"
                          }`}
                        />
                      ))}
                    </div>

                    {/* Hospital Cross */}
                    <div className="absolute top-8 right-8 w-12 h-12 bg-[#DC2626] rounded-lg flex items-center justify-center shadow-lg">
                      <div className="w-8 h-8 relative">
                        <div className="absolute top-1/2 left-0 w-full h-1.5 bg-white transform -translate-y-1/2"></div>
                        <div className="absolute left-1/2 top-0 w-1.5 h-full bg-white transform -translate-x-1/2"></div>
                      </div>
                    </div>

                    {/* Dashboard Preview */}
                    <div className="absolute bottom-4 left-4 right-4 h-24 bg-white rounded-lg shadow-lg border p-3">
                      <div className="flex items-center justify-between mb-2">
                        <div className="text-xs font-semibold text-[#0F172A]">
                          Patient Dashboard
                        </div>
                        <div className="w-2 h-2 bg-[#10B981] rounded-full"></div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 h-12">
                        <div className="bg-[#0EA5E9]/10 rounded p-1">
                          <div className="w-full h-1 bg-[#0EA5E9] rounded mb-1"></div>
                          <div className="text-xs text-[#64748B]">
                            Appointments
                          </div>
                        </div>
                        <div className="bg-[#10B981]/10 rounded p-1">
                          <div className="w-full h-1 bg-[#10B981] rounded mb-1"></div>
                          <div className="text-xs text-[#64748B]">Patients</div>
                        </div>
                        <div className="bg-[#F59E0B]/10 rounded p-1">
                          <div className="w-full h-1 bg-[#F59E0B] rounded mb-1"></div>
                          <div className="text-xs text-[#64748B]">Revenue</div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  {/* Doctor Avatar */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-white rounded-full shadow-xl border-4 border-[#0EA5E9]/20 flex items-center justify-center animate-float">
                    <div className="w-10 h-10 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-full flex items-center justify-center">
                      <svg
                        className="w-6 h-6 text-white"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 7V9C15 10.1 15.9 11 17 11V20C17 21.1 16.1 22 15 22H9C7.9 22 7 21.1 7 20V11C8.1 11 9 10.1 9 9V7H3V9C3 10.1 3.9 11 5 11V20C5 21.1 5.9 22 7 22H17C18.1 22 19 21.1 19 20V11C20.1 11 21 10.1 21 9Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Medical Chart */}
                  <div className="absolute -top-6 -right-6 w-20 h-16 bg-white rounded-lg shadow-xl border-2 border-[#10B981]/20 p-2 animate-bounce-slow">
                    <div className="w-full h-2 bg-[#10B981]/20 rounded mb-1"></div>
                    <div className="w-3/4 h-1.5 bg-[#10B981] rounded mb-1"></div>
                    <div className="w-1/2 h-1.5 bg-[#0EA5E9] rounded mb-1"></div>
                    <div className="w-2/3 h-1.5 bg-[#F59E0B] rounded"></div>
                  </div>

                  {/* Stethoscope Icon */}
                  <div className="absolute -bottom-4 -right-8 w-14 h-14 bg-white rounded-full shadow-xl border-4 border-[#10B981]/20 flex items-center justify-center animate-pulse">
                    <svg
                      className="w-8 h-8 text-[#10B981]"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M19.5 3.5L18 2L16.5 3.5C16.1 3.9 16.1 4.6 16.5 5S17.4 5.4 17.8 5L19 3.8L20.2 5C20.6 5.4 21.3 5.4 21.7 5S22.1 3.9 21.7 3.5L20.2 2L18.7 3.5M12.5 11C10 11 8 13 8 15.5S10 20 12.5 20 17 18 17 15.5 15 11 12.5 11M12.5 18C11.1 18 10 16.9 10 15.5S11.1 13 12.5 13 15 14.1 15 15.5 13.9 18 12.5 18M7 15.5C7 14.11 7.29 12.8 7.83 11.64L4.5 8.31C4.1 7.9 3.4 7.9 3 8.31L1.69 9.62C1.29 10 1.29 10.7 1.69 11.1L5 14.41C5.57 15 6.25 15.42 7 15.72V15.5Z" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Animation Styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
