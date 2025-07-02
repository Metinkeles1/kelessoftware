"use client";
import { Code } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white/95 backdrop-blur-xl shadow-2xl border-b border-gray-100">
      <nav className="container mx-auto px-6 py-5">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Code className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WebCraft
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <a
              href="#home"
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 group"
            >
              Ana Sayfa
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#services"
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 group"
            >
              Hizmetler
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#portfolio"
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 group"
            >
              Portföy
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <a
              href="#contact"
              className="relative text-gray-700 hover:text-blue-600 transition-all duration-300 group"
            >
              İletişim
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/25 transform hover:-translate-y-0.5 transition-all duration-300">
              Teklif Al
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 absolute ${
                isMenuOpen ? "rotate-45" : "-translate-y-1.5"
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></div>
            <div
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 absolute ${
                isMenuOpen ? "-rotate-45" : "translate-y-1.5"
              }`}
            ></div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-500 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pt-6 pb-4 border-t border-gray-200 mt-4">
            <div className="flex flex-col space-y-4">
              <a
                href="#home"
                className="text-gray-700 hover:text-blue-600 py-2 transition-colors"
              >
                Ana Sayfa
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 py-2 transition-colors"
              >
                Hizmetler
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 py-2 transition-colors"
              >
                Portföy
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 py-2 transition-colors"
              >
                İletişim
              </a>
              <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-lg font-medium mt-4 w-full">
                Teklif Al
              </button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
