"use client";
import React from "react";
import { Mail, Phone, MapPin, Heart, Clock } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 right-0 w-72 h-72 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 py-12 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <div className="w-10 h-10 flex items-center justify-center group-hover:scale-105 transition-transform">
                <Image
                  src="/logo-192x192.svg"
                  width={40}
                  height={40}
                  alt="Keles Software Logo"
                  className="w-full h-full"
                />
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Keles Software
              </span>
            </Link>
            <p className="text-blue-100 leading-relaxed text-sm">
              Dijital dünyada fark yaratan web tasarım çözümleri ile markanızı geleceğe
              taşıyoruz.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Hızlı Linkler</h3>
            <div className="space-y-2">
              <Link
                href="#home"
                className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Ana Sayfa
              </Link>
              <Link
                href="#services"
                className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Hizmetlerimiz
              </Link>
              <Link
                href="#about"
                className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Hakkımızda
              </Link>
              <Link
                href="#portfolio"
                className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm"
              >
                Portföy
              </Link>
              <Link
                href="#contact"
                className="block text-blue-200 hover:text-white transition-colors duration-200 text-sm"
              >
                İletişim
              </Link>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">Hizmetlerimiz</h3>
            <div className="space-y-2">
              <div className="text-blue-200 text-sm">Web Tasarım</div>
              <div className="text-blue-200 text-sm">UI/UX Tasarım</div>
              <div className="text-blue-200 text-sm">E-Ticaret</div>
              <div className="text-blue-200 text-sm">SEO Optimizasyonu</div>
              <div className="text-blue-200 text-sm">Mobil Uygulama</div>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-white">İletişim</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 text-sm">kelessoftware@gmail.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 text-sm">+90 555 068 04 25</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 text-sm">
                  Sancaktepe, İstanbul, Türkiye
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4 h-4 text-blue-400" />
                <span className="text-blue-200 text-sm">09:00 - 18:00</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-blue-200 text-sm">
              © {currentYear} Keles Software. Tüm hakları saklıdır.
            </div>
            <div className="flex items-center space-x-1 text-blue-200 text-sm">
              <span>Türkiye&apos;den</span>
              <Heart className="w-4 h-4 text-red-400" />
              <span>ile yapıldı</span>
            </div>
            <div className="flex space-x-6 text-sm">
              <Link
                href="#"
                className="text-blue-200 hover:text-white transition-colors duration-200"
              >
                Gizlilik Politikası
              </Link>
              <Link
                href="#"
                className="text-blue-200 hover:text-white transition-colors duration-200"
              >
                Kullanım Şartları
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
