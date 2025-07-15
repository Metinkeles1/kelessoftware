"use client";
import React from "react";
import Image from "next/image";
import { ExternalLink, Palette, Clock } from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import SectionHeader from "../ui/SectionHeader";
import Link from "next/link";

interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  technologies: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
}

const PortfolioSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: "Fashion E-Commerce",
      category: "e-commerce",
      description:
        "Moda odaklı e-ticaret platformu. Ürün filtreleme, favoriler ve güvenli ödeme sistemi.",
      technologies: ["React", "Node.js", "Express", "PostgreSQL"],
      image: "/projects-img/fashion-commerce.png",
      githubUrl: "https://github.com/kelessoftware/fashion-commerce",
      featured: false,
    },
    {
      id: 2,
      title: "Monolit Architecture",
      category: "design",
      description:
        "Mimarlık firması için tasarlanmış portföy sitesi. Projeler, ekip ve iletişim bilgileri için modern arayüz.",
      technologies: ["Next.js", "React", "Framer Motion", "GSAP"],
      image: "/projects-img/monolit-architecture.png",
      demoUrl: "https://monolit-architect.vercel.app/portfolio",
      githubUrl: "https://github.com/kelessoftware/monolit-architect",
      featured: true,
    },
    {
      id: 3,
      title: "Food Ordering",
      category: "e-commerce",
      description:
        "Online yemek sipariş platformu. Sepet yönetimi, ödeme entegrasyonu ve kullanıcı hesapları.",
      technologies: ["Next.js", "MongoDB", "Redux", "Stripe"],
      image: "/projects-img/food-ordering.png",
      demoUrl: "https://food-ordering-nextjs-five.vercel.app/",
      githubUrl: "https://github.com/kelessoftware/food-ordering",
      featured: true,
    },
    {
      id: 4,
      title: "Car Showcase",
      category: "web",
      description:
        "Modern araç kiralama ve vitrin uygulaması. Filtreleme ve arama özellikleri ile kullanıcı dostu arayüz.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Rapid API"],
      image: "/projects-img/car-showcase.png",
      demoUrl: "https://car-showcase-beta-ten.vercel.app/",
      githubUrl: "https://github.com/kelessoftware/car-showcase",
      featured: true,
    },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-gradient-to-b from-[var(--color-bg)] to-[var(--color-bg-alt)]"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <Badge
            icon={<Palette className="w-4 h-4 text-[var(--color-primary)]" />}
            text="Projelerimiz"
            bgClassName="bg-[var(--color-bg-alt)]"
            textClassName="text-[var(--color-text)]"
          />

          <SectionHeader title="Öne Çıkan" titleGradient="Çalışmalarımız" />

          <p className="mt-4 text-[var(--color-muted)] max-w-2xl mx-auto">
            Modern teknolojiler kullanarak geliştirdiğimiz projelerimizi keşfedin. Her
            proje, kullanıcı deneyimi ve performans odaklı olarak tasarlanmıştır.
          </p>
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative">
              <div className="bg-[var(--color-bg)] border border-[var(--color-border)] rounded-2xl overflow-hidden h-full transition-all duration-500 hover:border-[var(--color-primary)] hover:shadow-xl hover:-translate-y-2">
                {/* Project Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={project.image}
                    alt={`${project.title} - ${project.description} - Keles Software Portföy Projesi`}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority={project.featured}
                  />

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <div className="inline-flex items-center px-3 py-1.5 rounded-full text-xs font-semibold bg-[var(--color-primary)]/50 text-white ">
                      {project.category.charAt(0).toUpperCase() +
                        project.category.slice(1)}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[var(--color-text)] mb-2 group-hover:text-[var(--color-primary)] transition-colors">
                    {project.title}
                  </h3>

                  <p className="text-[var(--color-muted)] text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="inline-flex items-center px-2.5 py-1 bg-[var(--color-bg-alt)] text-[var(--color-muted)] rounded-lg text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <div className="pt-4 border-t border-[var(--color-border)]">
                    {project.demoUrl ? (
                      <Link
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Button
                          variant="outline"
                          size="sm"
                          icon={<ExternalLink className="w-4 h-4" />}
                          iconPosition="right"
                          className="w-full group-hover:border-[var(--color-primary)] group-hover:text-[var(--color-primary)] transition-colors"
                        >
                          <span className="text-sm font-medium">Projeyi İncele</span>
                        </Button>
                      </Link>
                    ) : (
                      <Button
                        variant="outline"
                        size="sm"
                        icon={<Clock className="w-4 h-4" />}
                        iconPosition="right"
                        className="w-full cursor-not-allowed opacity-80"
                        disabled
                      >
                        <span className="text-sm font-medium">Yakında Canlıda</span>
                      </Button>
                    )}
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

export default PortfolioSection;
