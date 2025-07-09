"use client";
import React, { useState } from "react";
import {
  ExternalLink,
  Palette,
  ShoppingCart,
  Building,
  BookOpen,
  User,
  Eye,
  CheckCircle,
} from "lucide-react";
import Button from "../ui/Button";
import Image from "next/image";
import Badge from "../ui/Badge";
import SectionHeader from "../ui/SectionHeader";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  color: string;
  bgColor: string;
  icon: React.ReactNode;
  image: string;
  features: string[];
}

const PortfolioSection: React.FC = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "E-Ticaret Sitesi",
      category: "E-Ticaret",
      description:
        "Modern e-ticaret çözümü ile kapsamlı online satış platformu geliştirdik.",
      technologies: ["React", "Node.js", "MongoDB"],
      color: "text-[var(--color-accent)]",
      bgColor: "bg-[var(--color-accent)]/10",
      icon: <ShoppingCart className="w-6 h-6 text-[var(--color-accent)]" />,
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300&fit=crop",
      features: ["Ödeme Sistemi", "Mobil Uyumlu"],
    },
    {
      id: 2,
      title: "Kurumsal Website",
      category: "Kurumsal",
      description:
        "Profesyonel kurumsal kimlik ve kullanıcı deneyimi odaklı arayüz tasarımı.",
      technologies: ["Next.js", "TypeScript", "Tailwind"],
      color: "text-[var(--color-primary)]",
      bgColor: "bg-[var(--color-primary)]/10",
      icon: <Building className="w-6 h-6 text-[var(--color-primary)]" />,
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop",
      features: ["CMS Entegrasyonu", "SEO Optimizasyonu"],
    },
    {
      id: 3,
      title: "Blog Platformu",
      category: "Blog",
      description: "Gelişmiş içerik yönetimi ve SEO optimizasyonu ile blog platformu.",
      technologies: ["WordPress", "PHP", "MySQL"],
      color: "text-[var(--color-success,#10b981)]",
      bgColor: "bg-[var(--color-success,#10b981)]/10",
      icon: <BookOpen className="w-6 h-6 text-[var(--color-success,#10b981)]" />,
      image:
        "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop",
      features: ["Editör Arayüzü", "Yorum Sistemi"],
    },
    {
      id: 4,
      title: "Portföy Sitesi",
      category: "Portföy",
      description: "Kişisel marka ve portföy sunumu için özel tasarlanmış modern site.",
      technologies: ["Vue.js", "Nuxt", "SCSS"],
      color: "text-[var(--color-secondary)]",
      bgColor: "bg-[var(--color-secondary)]/10",
      icon: <User className="w-6 h-6 text-[var(--color-secondary)]" />,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      features: ["Animasyonlar", "Galeri Sistemi"],
    },
  ];

  return (
    <section id="portfolio" className="section-layout bg-gradient-to-br-primary">
      <div className="container-layout">
        {/* Header */}
        <div className="section-header-layout">
          <Badge
            icon={<Palette className="text-[var(--color-primary)]" />}
            text="Başarılı Projeler"
            bgClassName="bg-[var(--color-bg)]"
            textClassName="text-[var(--color-text)]"
          />

          <SectionHeader title="Öne Çıkan" titleGradient="Portföyümüz" />
        </div>

        {/* Portfolio Grid */}
        <div className="grid-portfolio">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-[var(--color-primary)] hover:shadow-xl hover:-translate-y-2 ${
                  hoveredIndex === index ? "scale-105 shadow-xl" : ""
                }`}
              >
                {/* Project Image - Increased Height */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={400}
                    height={300}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${project.bgColor} ${project.color} backdrop-blur-sm`}
                    >
                      {project.category}
                    </div>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-12 h-12 ${project.bgColor} rounded-xl flex items-center justify-center backdrop-blur-sm border border-[var(--color-bg)]/20`}
                    >
                      <div className={project.color}>{project.icon}</div>
                    </div>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-[var(--color-bg)] mb-1">
                      {project.title}
                    </h3>
                  </div>
                </div>

                {/* Content - Reduced */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-[var(--color-muted)] leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Features - Reduced to 2 items */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1.5">
                        <CheckCircle className={`w-3 h-3 ${project.color}`} />
                        <span className="text-xs text-[var(--color-muted)]">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2.5 py-1 bg-[var(--color-muted)]/10 text-[var(--color-muted)] rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-[var(--color-border)]">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Eye className="w-4 h-4 text-[var(--color-primary)]" />}
                      iconPosition="right"
                      className="w-full group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] transition-colors"
                    >
                      <span className="text-sm font-medium">Projeyi İncele</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="flex justify-center mt-12">
          <Button
            variant="gradient"
            size="lg"
            icon={<ExternalLink className="w-5 h-5 text-[var(--color-primary)]" />}
            iconPosition="right"
          >
            Tüm Projeleri Görüntüle
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;
