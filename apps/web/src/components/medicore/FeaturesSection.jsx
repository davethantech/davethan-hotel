import { 
  BarChart3, 
  Calendar, 
  Package, 
  Users, 
  FileText, 
  Globe, 
  Activity,
  Shield
} from "lucide-react";

export default function FeaturesSection() {
  const features = [
    {
      icon: <BarChart3 size={32} />,
      title: "Dashboard & Analytics",
      description: "Real-time insights and comprehensive reporting for data-driven decisions",
      color: "from-[#0EA5E9] to-[#0284C7]",
      details: ["Real-time KPI monitoring", "Custom report generation", "Predictive analytics", "Performance dashboards"]
    },
    {
      icon: <Calendar size={32} />,
      title: "Patient & Appointment Management",
      description: "Streamlined patient registration, scheduling, and medical record management",
      color: "from-[#10B981] to-[#059669]",
      details: ["Online appointment booking", "Patient portal access", "Medical history tracking", "Automated reminders"]
    },
    {
      icon: <Package size={32} />,
      title: "Inventory & POS Management",
      description: "Complete inventory tracking and point-of-sale system for hospitals",
      color: "from-[#F59E0B] to-[#D97706]",
      details: ["Real-time inventory tracking", "Automated reordering", "Billing integration", "Supplier management"]
    },
    {
      icon: <Users size={32} />,
      title: "Human Resource Management",
      description: "Comprehensive HR system for staff scheduling, payroll, and performance",
      color: "from-[#EC4899] to-[#DB2777]",
      details: ["Staff scheduling", "Payroll management", "Performance tracking", "Training modules"]
    },
    {
      icon: <FileText size={32} />,
      title: "Accounts & Reports",
      description: "Financial management with automated billing and comprehensive reporting",
      color: "from-[#8B5CF6] to-[#7C3AED]",
      details: ["Automated billing", "Financial reporting", "Insurance claims", "Revenue tracking"]
    },
    {
      icon: <Globe size={32} />,
      title: "Multi-language & Responsive Support",
      description: "Global accessibility with multi-language support and responsive design",
      color: "from-[#06B6D4] to-[#0891B2]",
      details: ["Multiple languages", "Mobile responsive", "24/7 support", "Cross-platform"]
    }
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#F0F9FF] to-white px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#0EA5E9]/10 text-[#0284C7] text-sm font-semibold rounded-full mb-6">
            <Activity size={16} className="mr-2" />
            Features & Modules
          </div>
          <h2 className="font-bold text-3xl lg:text-5xl text-[#0F172A] leading-tight mb-6">
            Complete
            <span className="relative inline-block mx-4">
              healthcare
              {/* Multi-colored underline */}
              <svg
                className="absolute left-0 w-full h-[12px]"
                style={{ bottom: "-8px" }}
                viewBox="0 0 100 10"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <defs>
                  <linearGradient id="featureGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0EA5E9"/>
                    <stop offset="33%" stopColor="#10B981"/>
                    <stop offset="66%" stopColor="#F59E0B"/>
                    <stop offset="100%" stopColor="#EC4899"/>
                  </linearGradient>
                </defs>
                <rect
                  x="0"
                  y="0"
                  width="100"
                  height="10"
                  fill="url(#featureGradient)"
                  rx="5"
                />
              </svg>
            </span>
            solution
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Every module designed for modern healthcare facilities. Integrated, intelligent, 
            and built for the way hospitals actually work.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5E7EB] hover:border-[#CBD5E1] relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              {/* Icon */}
              <div className={`relative w-16 h-16 bg-gradient-to-br ${feature.color} rounded-xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="relative font-bold text-xl text-[#0F172A] mb-4">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="relative text-[#64748B] mb-6 leading-relaxed">
                {feature.description}
              </p>

              {/* Feature Details */}
              <ul className="relative space-y-2">
                {feature.details.map((detail, detailIndex) => (
                  <li key={detailIndex} className="flex items-center text-sm text-[#64748B]">
                    <div className="w-1.5 h-1.5 bg-[#10B981] rounded-full mr-3 flex-shrink-0"></div>
                    {detail}
                  </li>
                ))}
              </ul>

              {/* Hover overlay */}
              <div className="absolute top-4 right-4 w-2 h-2 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
          ))}
        </div>

        {/* Integration Showcase */}
        <div className="bg-gradient-to-br from-[#F8FAFC] to-[#F1F5F9] rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="integration-pattern" x="0" y="0" width="120" height="120" patternUnits="userSpaceOnUse">
                  <circle cx="60" cy="60" r="30" fill="none" stroke="#0EA5E9" strokeWidth="2"/>
                  <circle cx="30" cy="30" r="15" fill="#10B981"/>
                  <circle cx="90" cy="30" r="15" fill="#F59E0B"/>
                  <circle cx="30" cy="90" r="15" fill="#EC4899"/>
                  <circle cx="90" cy="90" r="15" fill="#8B5CF6"/>
                  <path d="M60,30 L60,90 M30,60 L90,60" stroke="#0EA5E9" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#integration-pattern)"/>
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Section Title */}
            <div className="text-center mb-12">
              <h3 className="font-bold text-2xl lg:text-3xl text-[#0F172A] mb-4">
                Seamlessly Integrated Ecosystem
              </h3>
              <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
                All modules work together as one unified system, sharing data and insights across every department
              </p>
            </div>

            {/* Integration Visualization */}
            <div className="relative">
              {/* Central Hub */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-[#0EA5E9] to-[#0284C7] rounded-full flex items-center justify-center shadow-2xl">
                  <div className="text-center text-white">
                    <Shield size={24} className="mx-auto mb-2" />
                    <div className="text-sm font-semibold">MediCore</div>
                    <div className="text-xs opacity-80">Core System</div>
                  </div>
                </div>
              </div>

              {/* Module Connections */}
              <div className="grid grid-cols-3 gap-8 h-80">
                {features.slice(0, 6).map((feature, index) => {
                  const positions = [
                    "justify-start items-start", "justify-center items-start", "justify-end items-start",
                    "justify-start items-end", "justify-center items-end", "justify-end items-end"
                  ];
                  
                  return (
                    <div key={index} className={`flex ${positions[index]}`}>
                      <div className="bg-white rounded-xl p-4 shadow-lg border-2 border-[#E5E7EB] hover:border-[#CBD5E1] transition-colors group">
                        <div className={`w-10 h-10 bg-gradient-to-br ${feature.color} rounded-lg flex items-center justify-center text-white mb-2 group-hover:scale-110 transition-transform duration-300`}>
                          {feature.icon}
                        </div>
                        <div className="text-sm font-semibold text-[#0F172A]">{feature.title}</div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Connection Lines */}
              <svg className="absolute inset-0 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <linearGradient id="connectionGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#0EA5E9" stopOpacity="0.3"/>
                    <stop offset="50%" stopColor="#10B981" stopOpacity="0.5"/>
                    <stop offset="100%" stopColor="#0EA5E9" stopOpacity="0.3"/>
                  </linearGradient>
                </defs>
                
                {/* Animated connection lines */}
                <g stroke="url(#connectionGradient)" strokeWidth="2" fill="none">
                  <path d="M160,80 Q200,140 240,160" opacity="0.6">
                    <animate attributeName="stroke-dasharray" values="0,10;10,0;0,10" dur="3s" repeatCount="indefinite"/>
                  </path>
                  <path d="M240,80 Q200,120 160,160" opacity="0.6">
                    <animate attributeName="stroke-dasharray" values="0,10;10,0;0,10" dur="2.5s" repeatCount="indefinite"/>
                  </path>
                  <path d="M160,240 Q200,200 240,160" opacity="0.6">
                    <animate attributeName="stroke-dasharray" values="0,10;10,0;0,10" dur="2s" repeatCount="indefinite"/>
                  </path>
                </g>
              </svg>
            </div>

            {/* Benefits List */}
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Activity size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-[#0F172A] mb-2">Real-time Sync</h4>
                <p className="text-sm text-[#64748B]">All modules share data instantly across the entire system</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Shield size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-[#0F172A] mb-2">Secure by Design</h4>
                <p className="text-sm text-[#64748B]">HIPAA compliant with enterprise-grade security</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-gradient-to-br from-[#EC4899] to-[#DB2777] rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Users size={20} className="text-white" />
                </div>
                <h4 className="font-semibold text-[#0F172A] mb-2">User-Friendly</h4>
                <p className="text-sm text-[#64748B]">Intuitive interface designed for healthcare professionals</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}