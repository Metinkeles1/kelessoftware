"use client";
import { useState, useEffect } from "react";
import { Home, Code, Briefcase, Users, Mail, Rocket, Menu, X } from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";

const navLinks = [
  {
    href: "#home",
    label: "Ana Sayfa",
    icon: <Home className="w-5 h-5 text-color-primary" />,
  },
  {
    href: "#services",
    label: "Hizmetler",
    icon: <Code className="w-5 h-5 text-color-primary" />,
  },
  {
    href: "#portfolio",
    label: "Portföy",
    icon: <Briefcase className="w-5 h-5 text-color-primary" />,
  },
  {
    href: "#about",
    label: "Hakkımızda",
    icon: <Users className="w-5 h-5 text-color-primary" />,
  },
  {
    href: "#contact",
    label: "İletişim",
    icon: <Mail className="w-5 h-5 text-color-primary" />,
  },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-transparent"
      }`}
    >
      <nav className="container-layout">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group select-none">
            <div className="w-12 h-12 bg-gradient-to-br-primary rounded-xl flex items-center justify-center shadow-gradient group-hover:scale-105 transition-transform">
              <Code className="w-6 h-6 text-color-primary" />
            </div>
            <span className="text-2xl font-bold text-color-primary">Keles Software</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map(({ href, label, icon }) => (
              <Link
                key={href}
                href={href}
                className="flex items-center gap-2 text-color-emphasis hover:text-color-primary transition-colors duration-200 font-medium text-base group"
              >
                {icon}
                {label}
              </Link>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button
              variant="gradient"
              size="md"
              className="font-medium"
              icon={<Rocket className="w-5 h-5" />}
              iconPosition="left"
            >
              Teklif Al
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-3 rounded-lg hover:bg-color-border transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X className="w-7 h-7 text-color-emphasis" />
            ) : (
              <Menu className="w-7 h-7 text-color-emphasis" />
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
              {navLinks.map(({ href, label, icon }) => (
                <Link
                  key={href}
                  href={href}
                  className="flex items-center gap-2 text-color-emphasis hover:text-color-primary hover:bg-color-border py-3 px-4 font-medium transition-all duration-200 text-base rounded-lg"
                  onClick={closeMenu}
                >
                  {icon}
                  {label}
                </Link>
              ))}
              <div className="pt-4">
                <Button
                  variant="gradient"
                  size="md"
                  className="w-full font-medium"
                  icon={<Rocket className="w-5 h-5" />}
                  iconPosition="left"
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
