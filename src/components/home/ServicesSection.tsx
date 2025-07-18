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
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";

interface Service {
  id: number;
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
  colorClass: string;
  bgClass: string;
  slug: string;
}

const ServicesSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: <Code className="w-6 h-6 text-color-primary" />,
      title: "Web Geliştirme",
      description: "Modern teknolojilerle hızlı ve güvenli web siteleri geliştiriyoruz.",
      features: [
        "React & Next.js",
        "Backend API",
        "Veritabanı Entegrasyonu",
        "Performans Optimizasyonu",
        "Bakım & Destek",
      ],
      colorClass: "text-color-primary",
      bgClass: "bg-color-primary",
      slug: "web-gelistirme",
    },
    {
      id: 2,
      icon: <Palette className="w-6 h-6 text-color-secondary" />,
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
      colorClass: "text-color-secondary",
      bgClass: "bg-color-secondary",
      slug: "ui-ux-tasarim",
    },
    {
      id: 3,
      icon: <Smartphone className="w-6 h-6 text-color-accent" />,
      title: "Mobil Uyumlu",
      description: "Tüm cihazlarda mükemmel görünen responsive tasarımlar.",
      features: [
        "Mobile First",
        "Tablet Uyumlu",
        "Cross-Browser",
        "Hızlı Yükleme Süreleri",
        "Touch Gesture Desteği",
      ],
      colorClass: "text-color-accent",
      bgClass: "bg-color-accent",
      slug: "mobil-uyumlu-tasarim",
    },
    {
      id: 4,
      icon: <Zap className="w-6 h-6 text-color-secondary" />,
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer almanızı sağlıyoruz.",
      features: [
        "Teknik SEO",
        "İçerik SEO",
        "Performans",
        "Anahtar Kelime Analizi",
        "Raporlama & İzleme",
      ],
      colorClass: "text-color-secondary",
      bgClass: "bg-color-secondary",
      slug: "seo-optimizasyonu",
    },
  ];

  return (
    <section
      id="services"
      className="section-layout bg-gradient-to-br-primary"
      aria-labelledby="services-heading"
    >
      <div className="container-layout">
        {/* Header */}
        <div className="section-header-layout">
          <Badge
            icon={<Sparkles size={16} className="text-color-accent" />}
            text="Hizmetlerimiz"
            bgClassName="bg-color-bg border border-color-border backdrop-blur"
            textClassName="text-color-text"
            className="mx-auto mb-6"
          />

          <SectionHeader
            title="Dijital Dönüşüm"
            titleGradient="Çözümlerimiz"
            description="Modern teknolojilerle işinizi dijital dünyaya taşıyoruz. Profesyonel çözümlerimizle markanızı geleceğe hazırlıyoruz."
            id="services-heading"
          />
        </div>

        {/* Services Grid */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-14"
          itemScope
          itemType="https://schema.org/ItemList"
        >
          {services.map((service, index) => (
            <div
              key={service.id}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              itemScope
              itemType="https://schema.org/Service"
              itemProp="itemListElement"
            >
              <div
                className={`rounded-2xl border border-opacity-20 p-6 transition-all duration-300 hover:-translate-y-1`}
                style={{
                  backgroundColor: "var(--color-bg)",
                  borderColor: "var(--color-border)",
                  boxShadow:
                    hoveredIndex === index
                      ? `var(--shadow-xl), 0 0 20px var(--gradient-shadow)`
                      : "var(--shadow-md)",
                  transform:
                    hoveredIndex === index
                      ? "translateY(-4px) scale(1.05)"
                      : "translateY(0) scale(1)",
                }}
              >
                {/* Icon */}
                <div
                  className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl`}
                  style={{
                    backgroundColor: "var(--color-input)",
                    boxShadow: "var(--shadow-sm)",
                  }}
                  aria-hidden="true"
                >
                  {service.icon}
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3
                    className="text-xl font-bold text-color-text text-center"
                    itemProp="name"
                  >
                    {service.title}
                  </h3>

                  <p
                    className="text-sm text-color-muted text-center leading-relaxed"
                    itemProp="description"
                  >
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-2">
                        <CheckCircle
                          className="w-4 h-4 text-color-accent"
                          aria-hidden="true"
                        />
                        <span className="text-sm text-color-text">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 text-center">
                    <Link
                      href={`/hizmetler/${service.slug}`}
                      aria-label={`${service.title} hizmeti hakkında detaylı bilgi`}
                    >
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<ArrowRight className="w-4 h-4" />}
                        iconPosition="right"
                        className="mx-auto"
                      >
                        Detayları Gör
                      </Button>
                    </Link>
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
