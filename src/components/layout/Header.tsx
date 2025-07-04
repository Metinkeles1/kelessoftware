"use client";
import { useState, useEffect } from "react";
import { Code, Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-purple-600 rounded-xl flex items-center justify-center shadow-lg">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              WebCraft
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              href="#home"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base"
            >
              Ana Sayfa
            </Link>
            <Link
              href="#services"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base"
            >
              Hizmetler
            </Link>
            <Link
              href="#portfolio"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base"
            >
              Portföy
            </Link>
            <Link
              href="#about"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base"
            >
              Hakkımızda
            </Link>

            <Link
              href="#contact"
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200 font-medium text-base"
            >
              İletişim
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="gradient" size="md" className="font-medium">
              Teklif Al
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-gray-700" />
            ) : (
              <Menu className="w-7 h-7 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="bg-white shadow-lg rounded-b-2xl mx-4 mb-4 overflow-hidden">
            <div className="px-6 py-6 space-y-1">
              <Link
                href="#home"
                className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 font-medium transition-all duration-200 text-base rounded-lg"
                onClick={closeMenu}
              >
                Ana Sayfa
              </Link>
              <Link
                href="#services"
                className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 font-medium transition-all duration-200 text-base rounded-lg"
                onClick={closeMenu}
              >
                Hizmetler
              </Link>
              <Link
                href="#about"
                className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 font-medium transition-all duration-200 text-base rounded-lg"
                onClick={closeMenu}
              >
                Hakkımızda
              </Link>
              <Link
                href="#portfolio"
                className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 font-medium transition-all duration-200 text-base rounded-lg"
                onClick={closeMenu}
              >
                Portföy
              </Link>
              <Link
                href="#contact"
                className="block text-gray-700 hover:text-blue-600 hover:bg-blue-50 py-3 px-4 font-medium transition-all duration-200 text-base rounded-lg"
                onClick={closeMenu}
              >
                İletişim
              </Link>
              <div className="pt-4">
                <Button
                  variant="gradient"
                  size="md"
                  className="w-full font-medium"
                  onClick={closeMenu}
                >
                  Teklif Al
                </Button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
