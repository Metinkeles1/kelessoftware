"use client";
import { Phone, Mail, Sparkles, Zap, MessageCircle } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import SectionHeader from "../ui/SectionHeader";

type InfoCard = {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string; // bg + icon rengini tek stringte tuttuk
};

const cards: InfoCard[] = [
  {
    icon: Zap,
    title: "Hızlı Yanıt",
    description: "24 saat içinde geri dönüş",
    color: "bg-green-500/20 text-green-400",
  },
  {
    icon: MessageCircle,
    title: "Ücretsiz Danışmanlık",
    description: "İlk görüşme ücretsiz",
    color: "bg-blue-500/20 text-blue-400",
  },
  {
    icon: Sparkles,
    title: "Uzman Ekip",
    description: "5+ yıl deneyim",
    color: "bg-purple-500/20 text-purple-400",
  },
];

const CTASection = () => (
  <section
    id="about"
    className="relative isolate overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950 py-30"
  >
    {/* animated gradient blobs */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(closest-side,white,transparent)]"
    >
      <div className="absolute -left-20 top-1/3 h-96 w-96 animate-blob rounded-full bg-blue-500/30 blur-3xl" />
      <div className="absolute -right-20 top-1/4 h-96 w-96 animate-blob rounded-full bg-purple-500/30 blur-3xl delay-2000" />
    </div>

    <div className="container mx-auto relative px-6 text-center">
      <Badge
        icon={<Sparkles size={16} className="text-yellow-500" />}
        text="Ücretsiz Konsültasyon"
        bgClassName="bg-white/5 border border-white/15 backdrop-blur"
        textClassName="text-white"
        className="mx-auto mb-6"
      />

      <SectionHeader
        title="Projenizi"
        titleGradient="Hayata Geçirmeye"
        titleAfterGradient="Hazır mısınız?"
        description="Hayalinizdeki web sitesini gerçeğe dönüştürmek için uzman ekibimizle tanışın. Ücretsiz konsültasyonda projenizi planlayalım."
        className="text-white"
      />

      {/* CTA buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mb-20 items-center justify-center">
        <div className="flex flex-col sm:flex-row gap-4 pt-6">
          <Button
            variant="gradient"
            icon={<MessageCircle />}
            iconPosition="left"
            size="lg"
          >
            Hemen Başlayalım
          </Button>
          <Button variant="outline" icon={<Phone />} size="lg" iconPosition="left">
            Portföyümüzü İncele
          </Button>
        </div>
      </div>

      {/* info cards */}
      <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto ">
        {cards.map(({ icon: Icon, title, description, color }) => (
          <li
            key={title}
            className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition hover:bg-white/10"
          >
            <div
              className={`mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${color}`}
            >
              <Icon size={24} />
            </div>
            <h3 className="mb-1 font-semibold text-white">{title}</h3>
            <p className="text-sm text-blue-100">{description}</p>
          </li>
        ))}
      </ul>

      <p className="mx-auto mt-16 flex max-w-xl items-center justify-center gap-2 border-t border-white/10 pt-6 text-sm text-blue-200">
        <Mail size={16} /> Önce ihtiyaçlarınızı dinliyor, sonra en iyi teknolojiyi
        uyguluyoruz.
      </p>
    </div>
  </section>
);

export default CTASection;
