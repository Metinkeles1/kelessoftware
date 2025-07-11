"use client";
import { Phone, Sparkles, Zap, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

type InfoCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
};

const cards: InfoCard[] = [
  {
    icon: Zap,
    title: "Hızlı Yanıt Garantisi",
    description: "24 saat içinde projenize dönüş yapıyoruz",
    color: "bg-green-500/20 text-green-400",
  },
  {
    icon: MessageCircle,
    title: "Ücretsiz Danışmanlık",
    description: "İlk görüşme ve proje analizi tamamen ücretsiz",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    icon: Sparkles,
    title: "Uzman Ekip",
    description: "5+ yıl deneyimli web tasarım uzmanları",
    color: "bg-purple-500/20 text-purple-400",
  },
];

const CTASection = () => (
  <section
    id="about"
    className="section-layout bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 py-30"
    aria-labelledby="cta-heading"
  >
    <div className="container-layout text-center">
      <Badge
        icon={<Sparkles size={16} className="text-yellow-500" />}
        text="Ücretsiz Konsültasyon"
        bgClassName="bg-white/5 border border-white/15 backdrop-blur"
        textClassName="text-white"
        className="mx-auto mb-6"
      />

      <SectionHeader
        title="Web Sitenizi Profesyonel Ekibimizle"
        titleGradient="Hayata Geçirmeye"
        titleAfterGradient="Hazır mısınız?"
        description="Keles Software olarak İstanbul Sancaktepe'den tüm Türkiye'ye hizmet veriyoruz. Modern web tasarım ve yazılım çözümleriyle işinizi dijital dünyaya taşıyoruz. Ücretsiz konsültasyonda projenizi birlikte planlayalım."
        className="text-white"
      />

      {/* Structured Data için gizli içerik */}
      <div className="sr-only">
        <h2 id="cta-heading">Keles Software - İstanbul Web Tasarım Hizmetleri</h2>
        <p>
          Sancaktepe merkezli web tasarım şirketi olarak e-ticaret, kurumsal web sitesi,
          mobil uygulama geliştirme ve SEO hizmetleri sunuyoruz. React, Next.js, modern
          teknolojilerle responsive web siteler geliştiriyoruz.
        </p>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-20 items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            variant="gradient"
            icon={<MessageCircle />}
            iconPosition="left"
            size="lg"
            aria-label="Keles Software ile web tasarım projenizi başlatın"
          >
            Hemen Başlayalım
          </Button>
          <Button
            variant="outline"
            icon={<Phone />}
            size="lg"
            iconPosition="left"
            aria-label="Keles Software portföyünü inceleyin"
          >
            Portföyümüzü İncele
          </Button>
        </div>
      </div>

      {/* Info cards */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
        {cards.map(({ icon: Icon, title, description, color }) => (
          <article
            key={title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
            itemScope
            itemType="https://schema.org/Service"
          >
            <div
              className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
              aria-hidden="true"
            >
              <Icon size={24} />
            </div>
            <h3 className="mb-1 font-semibold text-white" itemProp="name">
              {title}
            </h3>
            <p className="text-sm text-blue-100" itemProp="description">
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CTASection;
