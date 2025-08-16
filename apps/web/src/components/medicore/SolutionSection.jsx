import { CheckCircle, Zap, Brain, Shield } from "lucide-react";

export default function SolutionSection() {
  const solutions = [
    {
      icon: <Zap size={28} />,
      title: "Automated Workflows",
      description: "Eliminate manual tasks with intelligent automation",
      benefit: "80% time saved"
    },
    {
      icon: <Brain size={28} />,
      title: "Smart Analytics",
      description: "AI-powered insights for better decision making",
      benefit: "Real-time data"
    },
    {
      icon: <Shield size={28} />,
      title: "Secure & Compliant",
      description: "HIPAA compliant with military-grade security",
      benefit: "100% secure"
    },
    {
      icon: <CheckCircle size={28} />,
      title: "Unified Platform",
      description: "One system for all hospital operations",
      benefit: "Single dashboard"
    }
  ];

  return (
    <section id="solutions" className="py-24 bg-gradient-to-b from-[#FEF2F2] to-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#10B981]/10 text-[#059669] text-sm font-semibold rounded-full mb-6">
            <CheckCircle size={16} className="mr-2" />
            The Solution
          </div>
          <h2 className="font-bold text-3xl lg:text-5xl text-[#0F172A] leading-tight mb-6">
            MediCore transforms
            <span className="relative inline-block mx-4">
              everything
              {/* Green underline */}
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
                  fill="#10B981"
                  rx="5"
                />
              </svg>
            </span>
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Our comprehensive hospital management system automates workflows, enhances patient care, 
            and empowers your team to focus on what matters most.
          </p>
        </div>

        {/* Solution Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#D1FAE5] hover:border-[#A7F3D0] transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl text-[#0F172A] mb-3">
                {solution.title}
              </h3>
              <p className="text-[#64748B] mb-4 leading-relaxed">
                {solution.description}
              </p>

              {/* Benefit Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-[#10B981]/10 text-[#059669] text-sm font-bold rounded-full">
                {solution.benefit}
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#10B981] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Main Solution Visualization */}
        <div className="relative">
          <div className="bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] rounded-3xl p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="solution-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
                    <circle cx="30" cy="30" r="3" fill="#10B981"/>
                    <path d="M30,15 L30,45 M15,30 L45,30" stroke="#10B981" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#solution-pattern)"/>
              </svg>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
              {/* Central Dashboard Mockup */}
              <div className="bg-white rounded-2xl shadow-2xl border-2 border-[#10B981]/20 p-8 mb-12">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-8">
                  <h3 className="text-2xl font-bold text-[#0F172A]">MediCore Dashboard</h3>
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-[#10B981] rounded-full animate-pulse"></div>
                    <span className="text-sm text-[#64748B]">Live System</span>
                  </div>
                </div>

                {/* Dashboard Content */}
                <div className="grid lg:grid-cols-3 gap-8">
                  {/* Patient Management */}
                  <div className="bg-gradient-to-br from-[#EFF6FF] to-[#DBEAFE] rounded-xl p-6">
                    <h4 className="font-semibold text-[#1E40AF] mb-4">Patient Management</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#64748B]">Active Patients</span>
                        <span className="font-bold text-[#1E40AF]">1,247</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#64748B]">Today's Appointments</span>
                        <span className="font-bold text-[#1E40AF]">89</span>
                      </div>
                      <div className="w-full h-2 bg-[#1E40AF]/20 rounded-full">
                        <div className="w-3/4 h-2 bg-[#1E40AF] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Staff Management */}
                  <div className="bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] rounded-xl p-6">
                    <h4 className="font-semibold text-[#059669] mb-4">Staff Management</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#64748B]">On Duty</span>
                        <span className="font-bold text-[#059669]">156</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#64748B]">Available</span>
                        <span className="font-bold text-[#059669]">23</span>
                      </div>
                      <div className="w-full h-2 bg-[#059669]/20 rounded-full">
                        <div className="w-5/6 h-2 bg-[#059669] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  {/* Analytics */}
                  <div className="bg-gradient-to-br from-[#FFFBEB] to-[#FEF3C7] rounded-xl p-6">
                    <h4 className="font-semibold text-[#D97706] mb-4">Real-time Analytics</h4>
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#64748B]">Efficiency</span>
                        <span className="font-bold text-[#D97706]">94%</span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm text-[#64748B]">Satisfaction</span>
                        <span className="font-bold text-[#D97706]">4.8/5</span>
                      </div>
                      <div className="w-full h-2 bg-[#D97706]/20 rounded-full">
                        <div className="w-[94%] h-2 bg-[#D97706] rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Actions */}
                <div className="flex flex-wrap items-center justify-center gap-4 mt-8 pt-6 border-t border-[#E5E7EB]">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-[#10B981]/10 rounded-full">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#059669]">Auto-scheduling Active</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-[#0EA5E9]/10 rounded-full">
                    <div className="w-2 h-2 bg-[#0EA5E9] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#0284C7]">Smart Alerts Running</span>
                  </div>
                  <div className="flex items-center space-x-2 px-4 py-2 bg-[#F59E0B]/10 rounded-full">
                    <div className="w-2 h-2 bg-[#F59E0B] rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-[#D97706]">AI Insights Ready</span>
                  </div>
                </div>
              </div>

              {/* Transformation Arrow & Text */}
              <div className="text-center">
                <div className="inline-flex items-center space-x-4 bg-white rounded-2xl px-8 py-6 shadow-lg border-2 border-[#10B981]/20">
                  <div className="text-center">
                    <h4 className="font-bold text-lg text-[#DC2626] mb-2">Before</h4>
                    <p className="text-sm text-[#64748B]">Manual, Error-prone</p>
                  </div>
                  
                  <div className="flex-shrink-0">
                    <div className="w-16 h-1 bg-gradient-to-r from-[#DC2626] to-[#10B981] rounded relative">
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#10B981] border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="font-bold text-lg text-[#10B981] mb-2">After</h4>
                    <p className="text-sm text-[#64748B]">Automated, Intelligent</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}