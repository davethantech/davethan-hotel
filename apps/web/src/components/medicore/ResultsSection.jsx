import { TrendingUp, Users, DollarSign, Heart } from "lucide-react";

export default function ResultsSection() {
  const results = [
    {
      icon: <TrendingUp size={32} />,
      metric: "87%",
      title: "Efficiency Increase",
      description: "Average improvement in hospital operational efficiency",
      color: "from-[#0EA5E9] to-[#0284C7]"
    },
    {
      icon: <Users size={32} />,
      metric: "95%",
      title: "Staff Satisfaction",
      description: "Healthcare workers report higher job satisfaction",
      color: "from-[#10B981] to-[#059669]"
    },
    {
      icon: <DollarSign size={32} />,
      metric: "$2.3M",
      title: "Average Savings",
      description: "Annual cost reduction per hospital facility",
      color: "from-[#F59E0B] to-[#D97706]"
    },
    {
      icon: <Heart size={32} />,
      title: "Patient Care",
      metric: "4.9/5",
      description: "Patient satisfaction scores with MediCore hospitals",
      color: "from-[#EC4899] to-[#DB2777]"
    }
  ];

  const beforeAfter = [
    {
      category: "Patient Registration",
      before: "45 minutes",
      after: "5 minutes",
      improvement: "89% faster"
    },
    {
      category: "Appointment Scheduling",
      before: "Multiple calls",
      after: "1-click booking",
      improvement: "Instant"
    },
    {
      category: "Medical Records Access",
      before: "2-3 hours",
      after: "Real-time",
      improvement: "100% faster"
    },
    {
      category: "Billing Processing",
      before: "7-10 days",
      after: "24 hours",
      improvement: "85% faster"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#F0F9FF] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#0EA5E9]/10 text-[#0284C7] text-sm font-semibold rounded-full mb-6">
            <TrendingUp size={16} className="mr-2" />
            The Results
          </div>
          <h2 className="font-bold text-3xl lg:text-5xl text-[#0F172A] leading-tight mb-6">
            Measurable
            <span className="relative inline-block mx-4">
              impact
              {/* Blue underline */}
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
                  fill="#0EA5E9"
                  rx="5"
                />
              </svg>
            </span>
            on every metric
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Real hospitals using MediCore see dramatic improvements in efficiency, cost savings, 
            and patient satisfaction. Here's what transformation looks like:
          </p>
        </div>

        {/* Key Metrics Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {results.map((result, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#E0F2FE] hover:border-[#BAE6FD] transform hover:-translate-y-2"
            >
              {/* Gradient Background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${result.color} opacity-5 rounded-2xl`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${result.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {result.icon}
              </div>

              {/* Metric */}
              <div className="relative text-4xl font-bold text-[#0F172A] mb-2">
                {result.metric}
              </div>

              {/* Title */}
              <h3 className="relative font-semibold text-lg text-[#0F172A] mb-3">
                {result.title}
              </h3>

              {/* Description */}
              <p className="relative text-[#64748B] leading-relaxed">
                {result.description}
              </p>
            </div>
          ))}
        </div>

        {/* Before vs After Comparison */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="results-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
                  <path d="M40,20 L60,40 L40,60 L20,40 Z" fill="#0EA5E9"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#results-pattern)"/>
            </svg>
          </div>

          <div className="relative z-10">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h3 className="font-bold text-2xl lg:text-3xl text-[#0F172A] mb-4">
                Before vs After MediCore
              </h3>
              <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                See the dramatic transformation in key hospital processes
              </p>
            </div>

            {/* Comparison Table */}
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
              {/* Header */}
              <div className="grid grid-cols-4 bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] text-white font-semibold">
                <div className="p-6">Process</div>
                <div className="p-6 text-center border-l border-white/20">Before MediCore</div>
                <div className="p-6 text-center border-l border-white/20">After MediCore</div>
                <div className="p-6 text-center border-l border-white/20">Improvement</div>
              </div>

              {/* Rows */}
              {beforeAfter.map((item, index) => (
                <div
                  key={index}
                  className={`grid grid-cols-4 ${index % 2 === 0 ? 'bg-white' : 'bg-[#F8FAFC]'} hover:bg-[#F0F9FF] transition-colors`}
                >
                  <div className="p-6 font-semibold text-[#0F172A]">
                    {item.category}
                  </div>
                  <div className="p-6 text-center text-[#DC2626] border-l border-[#E5E7EB]">
                    {item.before}
                  </div>
                  <div className="p-6 text-center text-[#10B981] font-semibold border-l border-[#E5E7EB]">
                    {item.after}
                  </div>
                  <div className="p-6 text-center">
                    <span className="inline-flex items-center px-3 py-1 bg-[#10B981]/10 text-[#059669] text-sm font-bold rounded-full">
                      {item.improvement}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Success Story Highlight */}
        <div className="mt-20">
          <div className="bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-3xl p-12 text-white relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="success-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                    <circle cx="50" cy="50" r="25" fill="none" stroke="white" strokeWidth="2"/>
                    <circle cx="50" cy="50" r="5" fill="white"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#success-pattern)"/>
              </svg>
            </div>

            <div className="relative z-10 max-w-4xl mx-auto text-center">
              <h3 className="font-bold text-3xl mb-8">
                Real Success Story
              </h3>
              
              <div className="grid md:grid-cols-3 gap-8 mb-8">
                <div>
                  <div className="text-4xl font-bold mb-2">6 months</div>
                  <p className="opacity-90">Implementation time</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">$3.2M</div>
                  <p className="opacity-90">Annual savings achieved</p>
                </div>
                <div>
                  <div className="text-4xl font-bold mb-2">250%</div>
                  <p className="opacity-90">ROI in first year</p>
                </div>
              </div>

              <blockquote className="text-xl leading-relaxed opacity-95 max-w-3xl mx-auto">
                "MediCore transformed our hospital from chaos to efficiency. Our staff can now focus on patient care 
                instead of paperwork, and our patients are happier than ever. The ROI was immediate and substantial."
              </blockquote>
              
              <div className="mt-6">
                <div className="font-semibold">Dr. Sarah Johnson</div>
                <div className="opacity-80">Chief Medical Officer, Metro General Hospital</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}