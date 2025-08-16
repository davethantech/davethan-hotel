import { Mail, Phone, MapPin, ArrowRight } from "lucide-react";

export default function Footer() {
  const footerSections = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Solutions", href: "#solutions" },
        { label: "Integrations", href: "/integrations" },
        { label: "Security", href: "/security" },
        { label: "Pricing", href: "/pricing" }
      ]
    },
    {
      title: "Resources",
      links: [
        { label: "Case Studies", href: "#testimonials" },
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Webinars", href: "/webinars" },
        { label: "Support", href: "/support" }
      ]
    },
    {
      title: "Company",
      links: [
        { label: "About Us", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "News", href: "/news" },
        { label: "Partners", href: "/partners" },
        { label: "Contact", href: "#contact" }
      ]
    },
    {
      title: "Legal",
      links: [
        { label: "Privacy Policy", href: "/privacy" },
        { label: "Terms of Service", href: "/terms" },
        { label: "HIPAA Compliance", href: "/hipaa" },
        { label: "Security", href: "/security" },
        { label: "Cookies", href: "/cookies" }
      ]
    }
  ];

  const contactInfo = [
    {
      icon: <Phone size={20} />,
      label: "Sales",
      value: "+1 (555) MEDICORE",
      href: "tel:+1555MEDICORE"
    },
    {
      icon: <Mail size={20} />,
      label: "Support",
      value: "support@medicore.com",
      href: "mailto:support@medicore.com"
    },
    {
      icon: <MapPin size={20} />,
      label: "Address",
      value: "123 Healthcare Ave, Medical City, HC 12345",
      href: "#"
    }
  ];

  return (
    <footer className="bg-gradient-to-b from-[#F8FAFC] to-[#F1F5F9] pt-20 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-5 gap-12 mb-16">
          {/* Company Info */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] rounded-xl flex items-center justify-center">
                <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                  <div className="w-4 h-4 bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] rounded-sm"></div>
                </div>
              </div>
              <span className="font-bold text-2xl text-[#0F172A]">MediCore</span>
            </div>

            {/* Description */}
            <p className="text-[#64748B] mb-8 leading-relaxed">
              Revolutionizing healthcare management with intelligent automation, 
              real-time analytics, and seamless integration. Trusted by over 500 
              healthcare facilities worldwide.
            </p>

            {/* Contact Information */}
            <div className="space-y-4">
              {contactInfo.map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className="flex items-start space-x-3 text-[#64748B] hover:text-[#0284C7] transition-colors group"
                >
                  <div className="w-10 h-10 bg-[#E2E8F0] rounded-lg flex items-center justify-center group-hover:bg-[#0EA5E9]/10 transition-colors">
                    {contact.icon}
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#0F172A]">{contact.label}</div>
                    <div className="text-sm">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Footer Links */}
          {footerSections.map((section, index) => (
            <div key={index}>
              <h4 className="font-semibold text-[#0F172A] mb-6 text-lg">
                {section.title}
              </h4>
              <ul className="space-y-4">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-[#64748B] hover:text-[#0284C7] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="bg-gradient-to-r from-[#0EA5E9] to-[#0284C7] rounded-2xl p-8 mb-12">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="text-white">
              <h3 className="font-bold text-xl lg:text-2xl mb-3">
                Stay Updated with Healthcare Innovation
              </h3>
              <p className="opacity-90">
                Get the latest insights on healthcare technology, industry trends, 
                and MediCore updates delivered to your inbox.
              </p>
            </div>
            
            <div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 rounded-lg text-[#0F172A] placeholder:text-[#64748B] focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-[#0284C7]"
                />
                <button
                  type="submit"
                  className="bg-white text-[#0284C7] font-semibold px-6 py-3 rounded-lg hover:bg-[#F8FAFC] transition-colors flex items-center justify-center"
                >
                  Subscribe
                  <ArrowRight size={16} className="ml-2" />
                </button>
              </form>
              <p className="text-white/80 text-xs mt-3">
                No spam. Unsubscribe anytime. Read our{" "}
                <a href="/privacy" className="underline">Privacy Policy</a>.
              </p>
            </div>
          </div>
        </div>

        {/* Awards & Certifications */}
        <div className="mb-12">
          <h4 className="font-semibold text-[#0F172A] text-center mb-8">
            Certifications & Recognition
          </h4>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            {/* HIPAA */}
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="w-8 h-8 bg-[#10B981] rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-semibold text-[#475569] text-sm">HIPAA Compliant</span>
            </div>

            {/* ISO 27001 */}
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="w-8 h-8 bg-[#0EA5E9] rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-semibold text-[#475569] text-sm">ISO 27001</span>
            </div>

            {/* SOC 2 */}
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="w-8 h-8 bg-[#F59E0B] rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-semibold text-[#475569] text-sm">SOC 2 Type II</span>
            </div>

            {/* Healthcare Innovation Award */}
            <div className="flex items-center space-x-2 bg-white rounded-lg px-4 py-3 shadow-sm">
              <div className="w-8 h-8 bg-[#EC4899] rounded flex items-center justify-center">
                <div className="w-4 h-4 bg-white rounded-sm"></div>
              </div>
              <span className="font-semibold text-[#475569] text-sm">Healthcare Innovation Award 2024</span>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#E2E8F0] pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <p className="text-[#64748B] text-sm">
              © 2024 MediCore. All rights reserved. Revolutionizing healthcare management worldwide.
            </p>

            {/* Social Links & Additional Links */}
            <div className="flex items-center space-x-6">
              <a
                href="/status"
                className="text-[#64748B] hover:text-[#0284C7] text-sm transition-colors"
              >
                System Status
              </a>
              <a
                href="/api"
                className="text-[#64748B] hover:text-[#0284C7] text-sm transition-colors"
              >
                API Docs
              </a>
              <a
                href="/changelog"
                className="text-[#64748B] hover:text-[#0284C7] text-sm transition-colors"
              >
                Changelog
              </a>
              
              {/* Social Media Icons (Placeholder) */}
              <div className="flex items-center space-x-3 pl-6 border-l border-[#E2E8F0]">
                <a
                  href="https://twitter.com/medicore"
                  className="w-8 h-8 bg-[#E2E8F0] hover:bg-[#0EA5E9] rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="Twitter"
                >
                  <div className="w-4 h-4 bg-[#64748B] group-hover:bg-white rounded-sm"></div>
                </a>
                <a
                  href="https://linkedin.com/company/medicore"
                  className="w-8 h-8 bg-[#E2E8F0] hover:bg-[#0EA5E9] rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="LinkedIn"
                >
                  <div className="w-4 h-4 bg-[#64748B] group-hover:bg-white rounded-sm"></div>
                </a>
                <a
                  href="https://github.com/medicore"
                  className="w-8 h-8 bg-[#E2E8F0] hover:bg-[#0EA5E9] rounded-lg flex items-center justify-center transition-colors group"
                  aria-label="GitHub"
                >
                  <div className="w-4 h-4 bg-[#64748B] group-hover:bg-white rounded-sm"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}