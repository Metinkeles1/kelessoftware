"use client";
import React, { useState } from "react";
import {
  Code,
  Palette,
  Smartphone,
  Zap,
  ArrowRight,
  CheckCircle,
  Sparkles,
} from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  color: string;
}

const ServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <Code className="w-6 h-6 text-blue-600" />,
      title: "Web Geliştirme",
      description: "Modern teknolojilerle hızlı ve güvenli web siteleri geliştiriyoruz.",
      features: [
        "React & Next.js",
        "Backend API",
        "Veritabanı Entegrasyonu",
        "Performans Optimizasyonu",
        "Bakım & Destek",
      ],
      color: "bg-blue-100 text-blue-600",
    },
    {
      id: 2,
      icon: <Palette className="w-6 h-6 text-purple-600" />,
      title: "UI/UX Tasarım",
      description:
        "Kullanıcı deneyimini ön planda tutan çekici tasarımlar oluşturuyoruz.",
      features: [
        "Figma Tasarım",
        "Kullanıcı Araştırması",
        "Prototipler",
        "Wireframe Çalışmaları",
        "Renk & Tipografi Danışmanlığı",
      ],
      color: "bg-purple-100 text-purple-600",
    },
    {
      id: 3,
      icon: <Smartphone className="w-6 h-6 text-green-600" />,
      title: "Mobil Uyumlu",
      description: "Tüm cihazlarda mükemmel görünen responsive tasarımlar.",
      features: [
        "Mobile First",
        "Tablet Uyumlu",
        "Cross-Browser",
        "Hızlı Yükleme Süreleri",
        "Touch Gesture Desteği",
      ],
      color: "bg-green-100 text-green-600",
    },
    {
      id: 4,
      icon: <Zap className="w-6 h-6 text-orange-600" />,
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer almanızı sağlıyoruz.",
      features: [
        "Teknik SEO",
        "İçerik SEO",
        "Performans",
        "Anahtar Kelime Analizi",
        "Raporlama & İzleme",
      ],
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section
      id="services"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white to-blue-50 py-28"
    >
      <div className="container mx-auto relative px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            icon={<Sparkles size={16} className="text-yellow-500" />}
            text="Hizmetlerimiz"
            bgClassName="bg-white border border-gray-200 backdrop-blur"
            textClassName="text-gray-700"
            className="mx-auto mb-6"
          />

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Dijital Dönüşüm{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Çözümlerimiz
            </span>
          </h2>

          <p className="mx-auto mb-12 max-w-2xl text-lg text-gray-600">
            Modern teknolojilerle işinizi dijital dünyaya taşıyoruz. Profesyonel
            çözümlerimizle markanızı geleceğe hazırlıyoruz.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14">
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1 ${
                  hoveredIndex === index ? "scale-105 shadow-xl shadow-blue-200/40" : ""
                }`}
              >
                {/* Icon */}
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${service.color}`}
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-gray-900 text-center">
                    {service.title}
                  </h3>

                  <p className="text-sm text-gray-600 text-center leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle className="w-4 h-4 text-green-500" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-200 text-center">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                      className="mx-auto"
                    >
                      Detayları Gör
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
