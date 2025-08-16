import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] rounded-xl flex items-center justify-center">
              <div className="w-6 h-6 bg-white rounded-md flex items-center justify-center">
                <div className="w-3 h-3 bg-gradient-to-br from-[#0284C7] to-[#0EA5E9] rounded-sm"></div>
              </div>
            </div>
            <span className="font-bold text-xl text-[#0F172A]">MediCore</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="#features"
              className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors"
            >
              Features
            </a>
            <a
              href="#solutions"
              className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors"
            >
              Solutions
            </a>
            <a
              href="#testimonials"
              className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors"
            >
              Case Studies
            </a>
            <div className="relative group">
              <button className="flex items-center font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors">
                Resources
                <ChevronDown size={16} className="ml-1" />
              </button>
            </div>
            <a
              href="#contact"
              className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors">
              Login
            </button>
            <button className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#0284C7] focus:ring-offset-2">
              Request Demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4 pt-4">
              <a
                href="#features"
                className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors"
              >
                Features
              </a>
              <a
                href="#solutions"
                className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors"
              >
                Solutions
              </a>
              <a
                href="#testimonials"
                className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors"
              >
                Case Studies
              </a>
              <a
                href="#resources"
                className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors"
              >
                Resources
              </a>
              <a
                href="#contact"
                className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors"
              >
                Contact
              </a>
              <div className="flex flex-col space-y-3 pt-4">
                <button className="font-medium text-sm text-[#475569] hover:text-[#0284C7] transition-colors text-left">
                  Login
                </button>
                <button className="bg-[#0284C7] hover:bg-[#0369A1] text-white font-semibold text-sm px-6 py-2.5 rounded-lg transition-colors">
                  Request Demo
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}