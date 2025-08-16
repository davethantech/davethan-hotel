import { Star, Quote } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Dr. Sarah Johnson",
      title: "Chief Medical Officer",
      hospital: "Metro General Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face",
      quote: "MediCore transformed our hospital from chaos to efficiency. Our staff can now focus on patient care instead of paperwork, and our patients are happier than ever. The ROI was immediate and substantial.",
      rating: 5,
      metrics: {
        efficiency: "87% increase",
        satisfaction: "4.8/5 rating",
        savings: "$2.3M annually"
      }
    },
    {
      name: "Michael Rodriguez",
      title: "Hospital Administrator",
      hospital: "City Medical Center",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face",
      quote: "The implementation was smoother than expected. Within 3 months, we saw dramatic improvements in our operational efficiency. The staff adoption was incredible - they love how intuitive the system is.",
      rating: 5,
      metrics: {
        efficiency: "92% increase",
        satisfaction: "4.9/5 rating",
        savings: "$1.8M annually"
      }
    },
    {
      name: "Dr. Emily Chen",
      title: "Director of Operations",
      hospital: "Regional Healthcare",
      image: "https://images.unsplash.com/photo-1594824804732-ca08f49b8d6c?w=300&h=300&fit=crop&crop=face",
      quote: "What impressed me most was how MediCore integrated all our departments seamlessly. The real-time analytics help us make better decisions daily. Our patient satisfaction scores have never been higher.",
      rating: 5,
      metrics: {
        efficiency: "79% increase",
        satisfaction: "4.7/5 rating",
        savings: "$3.1M annually"
      }
    }
  ];

  const stats = [
    { number: "500+", label: "Hospitals Transformed" },
    { number: "98%", label: "Customer Satisfaction" },
    { number: "2.5M", label: "Patients Served Daily" },
    { number: "$50M+", label: "Total Savings Generated" }
  ];

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-b from-white to-[#F8FAFC] px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-[#10B981]/10 text-[#059669] text-sm font-semibold rounded-full mb-6">
            <Star size={16} className="mr-2" />
            Client Success Stories
          </div>
          <h2 className="font-bold text-3xl lg:text-5xl text-[#0F172A] leading-tight mb-6">
            Trusted by
            <span className="relative inline-block mx-4">
              healthcare
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
            leaders
          </h2>
          <p className="text-lg text-[#64748B] max-w-2xl mx-auto">
            Join hundreds of healthcare facilities that have transformed their operations with MediCore. 
            Here's what our clients say:
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl lg:text-4xl font-bold text-[#0F172A] mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-[#64748B]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#E5E7EB] hover:border-[#CBD5E1] relative overflow-hidden"
            >
              {/* Background Gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#10B981]/5 to-[#059669]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              {/* Quote Icon */}
              <div className="relative w-12 h-12 bg-gradient-to-br from-[#10B981] to-[#059669] rounded-xl flex items-center justify-center text-white mb-6">
                <Quote size={20} />
              </div>

              {/* Rating */}
              <div className="relative flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} size={16} className="text-[#F59E0B] fill-current" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="relative text-[#64748B] leading-relaxed mb-6">
                "{testimonial.quote}"
              </blockquote>

              {/* Author Info */}
              <div className="relative flex items-center mb-6">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-[#E5E7EB]"
                />
                <div>
                  <div className="font-semibold text-[#0F172A]">{testimonial.name}</div>
                  <div className="text-sm text-[#64748B]">{testimonial.title}</div>
                  <div className="text-sm text-[#10B981] font-medium">{testimonial.hospital}</div>
                </div>
              </div>

              {/* Metrics */}
              <div className="relative grid grid-cols-3 gap-2 pt-4 border-t border-[#E5E7EB]">
                <div className="text-center">
                  <div className="text-sm font-semibold text-[#0F172A]">
                    {testimonial.metrics.efficiency}
                  </div>
                  <div className="text-xs text-[#64748B]">Efficiency</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-[#0F172A]">
                    {testimonial.metrics.satisfaction}
                  </div>
                  <div className="text-xs text-[#64748B]">Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-[#0F172A]">
                    {testimonial.metrics.savings}
                  </div>
                  <div className="text-xs text-[#64748B]">Savings</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Case Study */}
        <div className="bg-gradient-to-br from-[#F0FDF4] to-[#DCFCE7] rounded-3xl p-12 relative overflow-hidden">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="case-study-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
                  <path d="M50,10 L90,50 L50,90 L10,50 Z" fill="#10B981"/>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#case-study-pattern)"/>
            </svg>
          </div>

          <div className="relative z-10 max-w-5xl mx-auto">
            {/* Badge */}
            <div className="text-center mb-8">
              <div className="inline-flex items-center px-4 py-2 bg-white/80 backdrop-blur-sm text-[#059669] text-sm font-semibold rounded-full border border-[#10B981]/20">
                <Star size={16} className="mr-2" />
                Featured Case Study
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <div>
                <h3 className="font-bold text-2xl lg:text-3xl text-[#0F172A] mb-6">
                  Metro General Hospital: A Complete Transformation
                </h3>
                
                <div className="space-y-4 mb-8">
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-[#0F172A] mb-1">The Challenge</div>
                      <div className="text-[#64748B]">500-bed hospital struggling with manual processes and staff burnout</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-[#0F172A] mb-1">The Solution</div>
                      <div className="text-[#64748B]">Full MediCore implementation across all departments in 6 months</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="w-2 h-2 bg-[#10B981] rounded-full mt-2 mr-4 flex-shrink-0"></div>
                    <div>
                      <div className="font-semibold text-[#0F172A] mb-1">The Result</div>
                      <div className="text-[#64748B]">87% efficiency increase and $3.2M annual savings</div>
                    </div>
                  </div>
                </div>

                <button className="bg-[#10B981] hover:bg-[#059669] text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#10B981] focus:ring-offset-2">
                  Download Full Case Study
                </button>
              </div>

              {/* Right Column - Visual Metrics */}
              <div>
                <div className="bg-white rounded-2xl p-8 shadow-lg">
                  <h4 className="font-semibold text-xl text-[#0F172A] mb-6 text-center">
                    Transformation Metrics
                  </h4>
                  
                  <div className="space-y-6">
                    {/* Patient Wait Times */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-[#64748B]">Patient Wait Times</span>
                        <span className="text-sm font-bold text-[#10B981]">-75%</span>
                      </div>
                      <div className="w-full h-3 bg-[#E5E7EB] rounded-full">
                        <div className="w-3/4 h-3 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full"></div>
                      </div>
                    </div>

                    {/* Staff Satisfaction */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-[#64748B]">Staff Satisfaction</span>
                        <span className="text-sm font-bold text-[#10B981]">+92%</span>
                      </div>
                      <div className="w-full h-3 bg-[#E5E7EB] rounded-full">
                        <div className="w-[92%] h-3 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full"></div>
                      </div>
                    </div>

                    {/* Operational Efficiency */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-[#64748B]">Operational Efficiency</span>
                        <span className="text-sm font-bold text-[#10B981]">+87%</span>
                      </div>
                      <div className="w-full h-3 bg-[#E5E7EB] rounded-full">
                        <div className="w-[87%] h-3 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full"></div>
                      </div>
                    </div>

                    {/* Cost Reduction */}
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-sm font-medium text-[#64748B]">Cost Reduction</span>
                        <span className="text-sm font-bold text-[#10B981]">$3.2M</span>
                      </div>
                      <div className="w-full h-3 bg-[#E5E7EB] rounded-full">
                        <div className="w-5/6 h-3 bg-gradient-to-r from-[#10B981] to-[#059669] rounded-full"></div>
                      </div>
                    </div>
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