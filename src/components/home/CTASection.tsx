"use client";
import { Phone, Sparkles, Zap, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";

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
    color: "text-emerald-400",
  },
  {
    icon: MessageCircle,
    title: "Ücretsiz Danışmanlık",
    description: "İlk görüşme ve proje analizi tamamen ücretsiz",
    color: "text-blue-400",
  },
  {
    icon: Sparkles,
    title: "Uzman Ekip",
    description: "5+ yıl deneyimli web tasarım uzmanları",
    color: "text-violet-400",
  },
];

const CTASection = () => (
  <section
    id="about"
    className="section-layout bg-gradient-to-b from-slate-950 to-slate-900 py-30"
    aria-labelledby="cta-heading"
  >
    <div className="container-layout text-center">
      {/* Minimalist Badge */}
      <Badge
        icon={<Sparkles size={14} className="text-amber-400" />}
        text="Ücretsiz Konsültasyon"
        bgClassName="bg-slate-800/80 border border-slate-700/50"
        textClassName="text-slate-200 text-sm"
        className="mx-auto mb-8"
      />

      {/* Clean Header */}
      <div className="max-w-4xl mx-auto mb-12">
        <h1
          id="cta-heading"
          className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
        >
          Web Sitenizi Profesyonel Ekibimizle{" "}
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-emerald-400 bg-clip-text text-transparent">
            Hayata Geçirmeye
          </span>{" "}
          Hazır mısınız?
        </h1>
        <p className="text-lg text-slate-300 leading-relaxed max-w-2xl mx-auto">
          Keles Software olarak İstanbul Sancaktepe&apos;den tüm Türkiye&apos;ye hizmet
          veriyoruz. Modern web tasarım ve yazılım çözümleriyle işinizi dijital dünyaya
          taşıyoruz.
        </p>
      </div>

      {/* Structured Data için SEO içeriği */}
      <div className="sr-only">
        <h2>Keles Software - İstanbul Web Tasarım Hizmetleri</h2>
        <p>
          Sancaktepe merkezli web tasarım şirketi olarak e-ticaret, kurumsal web sitesi,
          mobil uygulama geliştirme ve SEO hizmetleri sunuyoruz. React, Next.js, modern
          teknolojilerle responsive web siteler geliştiriyoruz.
        </p>
      </div>

      {/* Clean CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-16">
        <Button
          variant="gradient"
          icon={<MessageCircle size={18} />}
          iconPosition="left"
          size="lg"
          onClick={() => {
            const contactSection = document.getElementById("contact");
            contactSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="bg-gradient-to-r from-blue-500 to-violet-500 hover:from-blue-600 hover:to-violet-600 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-200 shadow-lg hover:shadow-xl"
          aria-label="Keles Software ile web tasarım projenizi başlatın"
        >
          Hemen Başlayalım
        </Button>
        <Button
          variant="outline"
          icon={<Phone size={18} />}
          size="lg"
          iconPosition="left"
          onClick={() => {
            const portfolioSection = document.getElementById("portfolio");
            portfolioSection?.scrollIntoView({ behavior: "smooth" });
          }}
          className="border-2 border-slate-600 text-slate-200 hover:border-slate-500 hover:bg-slate-800/50 px-8 py-4 font-semibold rounded-xl transition-all duration-200"
          aria-label="Keles Software portföyünü inceleyin"
        >
          Portföyümüzü İncele
        </Button>
      </div>

      {/* Minimal Info Cards */}
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
        {cards.map(({ icon: Icon, title, description, color }) => (
          <article
            key={title}
            className="group text-center"
            itemScope
            itemType="https://schema.org/Service"
          >
            <div className="mb-4" aria-hidden="true">
              <Icon size={28} className={`mx-auto ${color}`} />
            </div>
            <h3 className="text-lg font-semibold text-white mb-2" itemProp="name">
              {title}
            </h3>
            <p className="text-slate-400 leading-relaxed" itemProp="description">
              {description}
            </p>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default CTASection;
