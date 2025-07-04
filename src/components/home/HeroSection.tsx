"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Code, Zap } from "lucide-react";
import Button from "../ui/Button";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const heroElement = document.getElementById("hero-section");
      if (!heroElement) return;

      const rect = heroElement.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    const heroElement = document.getElementById("hero-section");
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () => {
        heroElement.removeEventListener("mousemove", handleMouseMove);
      };
    }
  }, []);

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #f8fafc 0%, #e2e8f0 40%, #cbd5e1 100%)",
      }}
    >
      {/* Subtle Background Pattern */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, rgba(59, 130, 246, 0.1) 0%, transparent 50%),
                           radial-gradient(circle at 75% 75%, rgba(147, 51, 234, 0.1) 0%, transparent 50%)`,
        }}
      />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full border border-blue-200 shadow-sm">
                <Sparkles className="text-blue-600" size={16} />
                <span className="text-sm font-medium text-blue-600">
                  Modern Web Çözümleri
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                Dijital {""}
                <span className=" bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Dönüşümün
                </span>
                <span className="block text-4xl lg:text-5xl text-gray-700">Ustası</span>
              </h1>
            </div>

            <p className="text-xl text-gray-600 leading-relaxed">
              Markanızı dijital dünyada{" "}
              <span className="font-semibold text-gray-800">öne çıkaran</span>, SEO uyumlu
              ve <span className="font-semibold text-gray-800">kullanıcı dostu</span> web
              siteleri ile işletmenizi geleceğe taşıyoruz.
            </p>

            {/* Stats */}
            <div className="flex space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">100+</div>
                <div className="text-sm text-gray-600">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">4.9★</div>
                <div className="text-sm text-gray-600">Ortalama Puan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-indigo-600">24/7</div>
                <div className="text-sm text-gray-600">Destek</div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="gradient" icon={<ArrowRight />} iconPosition="right">
                Ücretsiz Keşif Görüşmesi
              </Button>
              <Button variant="outline">Portföyümüzü İncele</Button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative lg:pl-8">
            {/* Main Card */}
            <div
              className="relative group"
              style={{
                transform: `perspective(1000px) rotateY(${
                  (mousePosition.x - 300) * 0.01
                }deg) rotateX(${(mousePosition.y - 300) * -0.01}deg)`,
                transition: "transform 0.2s ease-out",
              }}
            >
              <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-1 shadow-xl hover:shadow-2xl transition-shadow duration-300">
                <div className="bg-white rounded-2xl p-6 space-y-4 relative overflow-hidden">
                  {/* Browser Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                    <div className="text-xs text-gray-400 bg-gray-100 px-3 py-1 rounded-full">
                      www.yourwebsite.com
                    </div>
                  </div>

                  {/* Content Preview */}
                  <div className="space-y-3">
                    <div className="h-5 bg-gradient-to-r from-blue-200 to-purple-200 rounded w-4/5"></div>
                    <div className="h-3 bg-gray-200 rounded w-3/4"></div>
                    <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                    <div className="h-3 bg-gray-200 rounded w-2/3"></div>

                    {/* Interactive Elements */}
                    <div className="flex space-x-3 pt-3">
                      <div className="w-16 h-6 bg-gradient-to-r from-blue-500 to-purple-500 rounded"></div>
                      <div className="w-16 h-6 border border-gray-300 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Performance Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                  <Zap className="text-green-600" size={12} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">Hızlı Yükleme</div>
                  <div className="text-xs text-gray-500">0.8s</div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl p-3 shadow-lg border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                  <Code className="text-blue-600" size={12} />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-800">SEO Skoru</div>
                  <div className="text-xs text-gray-500">100/100</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
