import { AlertTriangle, Clock, FileX, Users } from "lucide-react";

export default function ProblemSection() {
  const problems = [
    {
      icon: <FileX size={28} />,
      title: "Manual Paperwork",
      description: "Staff spend 60% of their time on paperwork instead of patient care",
      stat: "60% time lost"
    },
    {
      icon: <Clock size={28} />,
      title: "Long Wait Times",
      description: "Patients wait hours for appointments and test results",
      stat: "3+ hour waits"
    },
    {
      icon: <AlertTriangle size={28} />,
      title: "Medical Errors",
      description: "Miscommunication leads to dangerous medication and treatment errors",
      stat: "25% error rate"
    },
    {
      icon: <Users size={28} />,
      title: "Staff Burnout",
      description: "Healthcare workers overwhelmed by inefficient processes",
      stat: "40% turnover"
    }
  ];

  return (
    <section id="problems" className="py-24 bg-gradient-to-b from-white to-[#FEF2F2] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#DC2626]/10 text-[#DC2626] text-sm font-semibold rounded-full mb-6">
            <AlertTriangle size={16} className="mr-2" />
            The Challenge
          </div>
          <h2 className="font-bold text-3xl lg:text-5xl text-[#0F172A] leading-tight mb-6">
            Healthcare facilities are
            <span className="relative inline-block mx-4">
              struggling
              {/* Red underline */}
              <svg
                className="absolute left-0 w-full h-[8px]"
                style={{ bottom: "-4px" }}
                viewBox="0 0 100 6"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M2,4 Q50,1 98,4"
                  stroke="#DC2626"
                  strokeWidth="3"
                  fill="none"
                  strokeLinecap="round"
                />
              </svg>
            </span>
            with outdated systems
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Traditional hospital management creates bottlenecks, increases costs, and puts patient safety at risk. 
            The numbers tell the story:
          </p>
        </div>

        {/* Problem Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="relative group bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-[#FEE2E2] hover:border-[#FECACA] transform hover:-translate-y-2"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-[#DC2626] to-[#B91C1C] rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300">
                {problem.icon}
              </div>

              {/* Content */}
              <h3 className="font-bold text-xl text-[#0F172A] mb-3">
                {problem.title}
              </h3>
              <p className="text-[#64748B] mb-4 leading-relaxed">
                {problem.description}
              </p>

              {/* Stat Badge */}
              <div className="inline-flex items-center px-3 py-1 bg-[#DC2626]/10 text-[#DC2626] text-sm font-bold rounded-full">
                {problem.stat}
              </div>

              {/* Decorative element */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-[#DC2626] rounded-full opacity-20 group-hover:opacity-40 transition-opacity"></div>
            </div>
          ))}
        </div>

        {/* Visual Illustration */}
        <div className="relative">
          {/* Chaos illustration */}
          <div className="bg-gradient-to-br from-[#FEF2F2] to-[#FEE2E2] rounded-3xl p-12 relative overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="chaos-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M0,20 L40,20 M20,0 L20,40" stroke="#DC2626" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#chaos-pattern)"/>
              </svg>
            </div>

            {/* Central illustration */}
            <div className="relative z-10 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                {/* Overwhelmed Staff */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-xl border-4 border-[#DC2626]/20 flex items-center justify-center mx-auto mb-4 relative">
                    <svg className="w-12 h-12 text-[#DC2626]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,6A4,4 0 0,1 16,10A4,4 0 0,1 12,14A4,4 0 0,1 8,10A4,4 0 0,1 12,6M12,17C14.67,17 17,15.33 17,13.25C17,11.17 14.67,10.5 12,10.5C9.33,10.5 7,11.17 7,13.25C7,15.33 9.33,17 12,17Z"/>
                    </svg>
                    {/* Stress indicators */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#DC2626] rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-[#F59E0B] rounded-full animate-pulse"></div>
                  </div>
                  <h4 className="font-semibold text-[#0F172A] mb-2">Overwhelmed Staff</h4>
                  <p className="text-sm text-[#64748B]">Drowning in paperwork and manual processes</p>
                </div>

                {/* Arrow */}
                <div className="hidden md:flex justify-center">
                  <div className="w-16 h-1 bg-[#DC2626] rounded relative">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-0 h-0 border-l-4 border-l-[#DC2626] border-t-2 border-t-transparent border-b-2 border-b-transparent"></div>
                  </div>
                </div>

                {/* Frustrated Patients */}
                <div className="text-center">
                  <div className="w-24 h-24 bg-white rounded-full shadow-xl border-4 border-[#DC2626]/20 flex items-center justify-center mx-auto mb-4 relative">
                    <svg className="w-12 h-12 text-[#DC2626]" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12,2C13.1,2 14,2.9 14,4C14,5.1 13.1,6 12,6C10.9,6 10,5.1 10,4C10,2.9 10.9,2 12,2ZM21,9V7L15,7V9C15,10.1 15.9,11 17,11V20C17,21.1 16.1,22 15,22H9C7.9,22 7,21.1 7,20V11C8.1,11 9,10.1 9,9V7H3V9C3 10.1 3.9,11 5,11V20C5,21.1 5.9,22 7,22H17C18.1,22 19,21.1 19,20V11C20.1,11 21,10.1 21,9Z"/>
                    </svg>
                    {/* Clock indicating waiting */}
                    <div className="absolute -top-1 -right-1">
                      <Clock size={12} className="text-[#DC2626]" />
                    </div>
                  </div>
                  <h4 className="font-semibold text-[#0F172A] mb-2">Frustrated Patients</h4>
                  <p className="text-sm text-[#64748B]">Long waits and poor communication</p>
                </div>
              </div>

              {/* Impact Statement */}
              <div className="text-center mt-12">
                <div className="bg-white rounded-2xl p-8 shadow-lg border-2 border-[#DC2626]/20">
                  <h3 className="font-bold text-2xl text-[#DC2626] mb-4">
                    The Result: Healthcare Crisis
                  </h3>
                  <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                    These inefficiencies cost hospitals <strong className="text-[#DC2626]">millions annually</strong> and 
                    compromise patient safety. It's time for a solution that puts patients first.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}