"use client";

import React, { FC, useState } from "react";
import Image from "next/image";
import { Star, Quote, Sparkles } from "lucide-react";
import Badge from "../ui/Badge";
import SectionHeader from "../ui/SectionHeader";

/* -------------------------------------------------------------------------- */
/* Types & Static Data                                                        */
/* -------------------------------------------------------------------------- */

type Testimonial = {
  id: number;
  name: string;
  company: string;
  role: string;
  text: string;
  rating: 1 | 2 | 3 | 4 | 5;
  avatar: string;
};

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Ayşe Kaya",
    company: "Moda Butik E-ticaret",
    role: "Marka Müdürü",
    text: "E-ticaret sitemizi Sancaktepe'deki ofislerinde geliştirdiler. Mobil uyumlu tasarım ve hızlı yükleme süreleri müthiş. Online satışlarımız %200 arttı. Fiyat performans açısından İstanbul'un en iyi web tasarım şirketi kesinlikle!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Mehmet Demir",
    company: "Demir Hukuk Bürosu",
    role: "Avukat",
    text: "Avukat web sitesi için Keles Software'i tercih ettik. Yerel SEO çalışmaları mükemmel, 'avukat istanbul' aramalarında üst sıralardayız. UI/UX tasarımları çok profesyonel ve müvekkil kazanma oranımız arttı.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Zeynep Aktaş",
    company: "Creative Digital Agency",
    role: "Yaratıcı Direktör",
    text: "Ajansımız için portfolio web sitesi tasarlattık. Figma tasarımlarından React'e geçiş mükemmel oldu. Responsive tasarım ve kullanıcı deneyimi çok başarılı. Müşterilerimiz siteyi çok beğeniyor ve geri dönüşler harika!",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
  },
];

/* -------------------------------------------------------------------------- */
/* Component                                                                  */
/* -------------------------------------------------------------------------- */

const TestimonialsSection: FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="section-layout bg-gradient-to-br-primary">
      <div className="container-layout">
        {/* Header */}
        <div className="section-header-layout">
          <Badge
            icon={<Sparkles size={16} className="text-color-accent" />}
            text="Müşteri Yorumları"
            bgClassName="bg-color-bg border border-color-border backdrop-blur"
            textClassName="text-color-text"
            className="mx-auto mb-6"
          />

          <SectionHeader
            title="Müşteri"
            titleGradient="Deneyimleri"
            description="Müşterilerimizin projelerimiz hakkında söyledikleri"
          />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`rounded-2xl bg-color-bg p-6 shadow-lg transition-all duration-300 hover:bg-color-muted hover:-translate-y-1 h-full flex flex-col ${
                  hoveredIndex === index ? "scale-105 shadow-xl" : ""
                }`}
              >
                {/* Quote Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-xl text-color-primary mb-4">
                  <Quote className="w-5 h-5" />
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star key={idx} className="w-4 h-4 text-color-accent fill-current" />
                  ))}
                </div>

                {/* Text */}
                <p className="text-color-text mb-6 leading-relaxed text-sm flex-grow">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="relative w-10 h-10 rounded-full overflow-hidden mr-3">
                    <Image
                      src={testimonial.avatar}
                      alt={`${testimonial.name} - ${testimonial.company} müşteri fotoğrafı`}
                      fill
                      className="object-cover"
                      sizes="40px"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-color-text text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-color-muted text-xs">
                      {testimonial.role}, {testimonial.company}
                    </p>
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

export default TestimonialsSection;
