"use client";

import React, { FC, useState } from "react";
import { Star, Quote, Sparkles } from "lucide-react";
import Image from "next/image";
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
    name: "Ahmet Yılmaz",
    company: "TechCorp",
    role: "CEO",
    text: "Profesyonel ekip ve kaliteli çalışma. Websitemiz tam istediğimiz gibi oldu.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 2,
    name: "Ayşe Kaya",
    company: "Fashion Store",
    role: "Marka Müdürü",
    text: "Zamanında teslimat ve mükemmel sonuç. E-ticaret sitemiz çok başarılı oldu.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 3,
    name: "Mehmet Demir",
    company: "Consulting Plus",
    role: "Genel Müdür",
    text: "SEO çalışmaları sayesinde Google'da üst sıralardayız. Harika bir hizmet.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 4,
    name: "Fatma Özkan",
    company: "Wellness Center",
    role: "Pazarlama Direktörü",
    text: "Mobil uygulamamız harika oldu. Kullanıcı deneyimi mükemmel ve performans çok iyi.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 5,
    name: "Can Yıldırım",
    company: "StartupHub",
    role: "Teknoloji Direktörü",
    text: "Backend API ve veritabanı altyapımız çok sağlam. Sistem hiç çökmedi ve ölçeklenebilir.",
    rating: 5,
    avatar:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
  },
  {
    id: 6,
    name: "Zeynep Aktaş",
    company: "Creative Agency",
    role: "Yaratıcı Direktör",
    text: "UI/UX tasarımları çok başarılı. Kullanıcılarımız siteyi çok beğeniyor.",
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
    <section className="relative isolate overflow-hidden bg-gradient-to-br from-[var(--color-bg)] to-[var(--color-primary)]/10 py-28">
      <div className="container mx-auto relative px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            icon={<Sparkles size={16} className="text-[var(--color-accent)]" />}
            text="Müşteri Yorumları"
            bgClassName="bg-[var(--color-bg)] border border-[var(--color-border)] backdrop-blur"
            textClassName="text-[var(--color-text)]"
            className="mx-auto mb-6"
          />

          <SectionHeader title="Müşteri" titleGradient="Deneyimleri" />
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
          {TESTIMONIALS.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-md transition-all duration-300 hover:bg-[var(--color-muted)]/10 hover:-translate-y-1 h-full flex flex-col ${
                  hoveredIndex === index ? "scale-105 shadow-xl" : ""
                }`}
              >
                {/* Quote Icon */}
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-[var(--color-primary)]/10 text-[var(--color-primary)] mb-4">
                  <Quote className="w-5 h-5" />
                </div>

                {/* Stars */}
                <div className="flex mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, idx) => (
                    <Star
                      key={idx}
                      className="w-4 h-4 text-[var(--color-accent)] fill-current"
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-[var(--color-text)] mb-6 leading-relaxed text-sm flex-grow">
                  {testimonial.text}
                </p>

                {/* Author */}
                <div className="flex items-center pt-4 border-t border-[var(--color-border)]">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    width={40}
                    height={40}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)] text-sm">
                      {testimonial.name}
                    </h4>
                    <p className="text-[var(--color-muted)] text-xs">
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
