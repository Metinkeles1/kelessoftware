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
      color: "text-pink-600",
      bgColor: "bg-pink-50",
      icon: <ShoppingCart className="w-6 h-6" />,
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
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      icon: <Building className="w-6 h-6" />,
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
      color: "text-green-600",
      bgColor: "bg-green-50",
      icon: <BookOpen className="w-6 h-6" />,
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
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      icon: <User className="w-6 h-6" />,
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop",
      features: ["Animasyonlar", "Galeri Sistemi"],
    },
  ];

  return (
    <section
      id="portfolio"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white to-blue-50 py-28"
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            icon={<Palette className="text-blue-600" />}
            text="Başarılı Projeler"
            bgClassName="bg-gray-100"
            textClassName="text-gray-700"
          />

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 ">
            Öne Çıkan{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Portföyümüz
            </span>
          </h2>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div
                className={`bg-white border border-gray-200 rounded-2xl overflow-hidden h-full transition-all duration-300 hover:border-gray-300 hover:shadow-xl hover:-translate-y-2 ${
                  hoveredIndex === index ? "scale-105 shadow-2xl" : ""
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
                    <span
                      className={`inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold ${project.bgColor} ${project.color} backdrop-blur-sm`}
                    >
                      {project.category}
                    </span>
                  </div>

                  {/* Icon */}
                  <div className="absolute top-4 right-4">
                    <div
                      className={`w-12 h-12 ${project.bgColor} rounded-xl flex items-center justify-center backdrop-blur-sm border border-white/20`}
                    >
                      <div className={project.color}>{project.icon}</div>
                    </div>
                  </div>

                  {/* Title on Image */}
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-bold text-white mb-1">{project.title}</h3>
                  </div>
                </div>

                {/* Content - Reduced */}
                <div className="p-6 space-y-4">
                  <div>
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {project.description}
                    </p>
                  </div>

                  {/* Features - Reduced to 2 items */}
                  <div className="flex flex-wrap gap-2">
                    {project.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center gap-1.5">
                        <CheckCircle className={`w-3 h-3 ${project.color}`} />
                        <span className="text-xs text-gray-600">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2.5 py-1 bg-gray-100 text-gray-600 rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-gray-100">
                    <Button
                      variant="outline"
                      size="sm"
                      icon={<Eye className="w-4 h-4" />}
                      iconPosition="right"
                      className="w-full group-hover:border-blue-300 group-hover:text-blue-600 transition-colors"
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
            icon={<ExternalLink className="w-5 h-5" />}
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
