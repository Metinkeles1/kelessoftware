"use client";
import { useState, useEffect } from "react";
import { ArrowRight, Sparkles, Code, Zap } from "lucide-react";
import Button from "../ui/Button";

const HeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const el = document.getElementById("hero-section");
    if (!el) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    };

    el.addEventListener("mousemove", handleMouseMove);
    return () => el.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const cardTransform = {
    transform: `perspective(1000px) rotateY(${
      (mousePosition.x - 300) * 0.01
    }deg) rotateX(${(mousePosition.y - 300) * -0.01}deg)`,
    transition: "var(--transition-fast)",
  };

  return (
    <section
      id="hero-section"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-hero"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30 bg-gradient-pattern" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            {/* Badge */}
            <div className="inline-flex items-center space-x-2 backdrop-blur-sm px-4 py-2 rounded-full border border-color-primary shadow-sm bg-white/90">
              <Sparkles className="text-color-primary" size={16} />
              <span className="text-sm font-medium text-color-primary">
                Modern Web Çözümleri
              </span>
            </div>

            {/* Main Title */}
            <div className="space-y-4">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight text-color-text">
                Dijital{" "}
                <span
                  className="bg-clip-text text-transparent font-bold"
                  style={{
                    background: "var(--gradient-primary)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Dönüşümün
                </span>
                <span className="block text-4xl lg:text-5xl text-color-muted mt-2">
                  Ustası
                </span>
              </h1>
            </div>

            {/* Description */}
            <p className="text-xl leading-relaxed text-color-muted">
              Markanızı dijital dünyada{" "}
              <span className="font-semibold text-color-emphasis">öne çıkaran</span>, SEO
              uyumlu ve{" "}
              <span className="font-semibold text-color-emphasis">kullanıcı dostu</span>{" "}
              web siteleri ile işletmenizi geleceğe taşıyoruz.
            </p>

            {/* Stats */}
            <div className="flex space-x-8 pt-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-color-primary">100+</div>
                <div className="text-sm text-color-muted">Mutlu Müşteri</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-color-secondary">4.9★</div>
                <div className="text-sm text-color-muted">Ortalama Puan</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-color-accent">24/7</div>
                <div className="text-sm text-color-muted">Destek</div>
              </div>
            </div>

            {/* Call to Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <Button variant="gradient" icon={<ArrowRight />} iconPosition="right">
                Ücretsiz Keşif Görüşmesi
              </Button>
              <Button variant="outline">Portföyümüzü İncele</Button>
            </div>
          </div>

          {/* Right Content - Interactive Card */}
          <div className="relative lg:pl-8">
            <div className="relative group" style={cardTransform}>
              {/* Main Card */}
              <div className="rounded-2xl p-1 transition-shadow duration-300 group-hover:shadow-2xl bg-color-primary shadow-xl">
                <div className="rounded-2xl p-6 space-y-4 bg-color-bg overflow-hidden">
                  {/* Browser Header */}
                  <div className="flex items-center justify-between">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 rounded-full bg-red-500" />
                      <div className="w-3 h-3 rounded-full bg-amber-500" />
                      <div className="w-3 h-3 rounded-full bg-green-500" />
                    </div>
                    <div className="text-xs px-3 py-1 rounded-full text-color-muted bg-color-input">
                      www.yourwebsite.com
                    </div>
                  </div>

                  {/* Mock Content */}
                  <div className="space-y-3">
                    <div
                      className="h-5 rounded w-4/5 "
                      style={{
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                        background: "var(--gradient-primary)",
                      }}
                    />
                    <div className="h-3 rounded w-3/4 bg-color-border" />
                    <div className="h-3 rounded w-1/2 bg-color-border" />
                    <div className="h-3 rounded w-2/3 bg-color-border" />

                    {/* Mock Buttons */}
                    <div className="flex space-x-3 pt-3">
                      <div className="w-16 h-6 rounded bg-color-primary" />
                      <div className="w-16 h-6 border rounded border-color-border" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 rounded-xl p-3 border bg-color-bg border-color-border shadow-lg">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-green-100">
                  <Zap size={12} className="text-green-600" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-color-text">
                    Hızlı Yükleme
                  </div>
                  <div className="text-xs text-color-muted">0.8s</div>
                </div>
              </div>
            </div>

            <div
              className="absolute -bottom-4 -left-4 rounded-xl p-3 border bg-color-bg border-color-border"
              style={{ boxShadow: "var(--shadow-lg)" }}
            >
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full flex items-center justify-center bg-blue-100">
                  <Code size={12} className="text-color-primary" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-color-text">SEO Skoru</div>
                  <div className="text-xs text-color-muted">100/100</div>
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
