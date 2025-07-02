import React from "react";
import { Code, Palette, Smartphone, Zap } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: <Code className="w-8 h-8" />,
      title: "Web Geliştirme",
      description: "Modern teknolojilerle hızlı ve güvenli web siteleri geliştiriyoruz.",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Tasarım",
      description:
        "Kullanıcı deneyimini ön planda tutan çekici tasarımlar oluşturuyoruz.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Mobil Uyumlu",
      description: "Tüm cihazlarda mükemmel görünen responsive tasarımlar.",
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "SEO Optimizasyonu",
      description: "Arama motorlarında üst sıralarda yer almanızı sağlıyoruz.",
    },
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Hizmetlerimiz</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Dijital varlığınızı güçlendiren kapsamlı web tasarım ve geliştirme hizmetleri
            sunuyoruz.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
            >
              <div className="text-blue-600 mb-4 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
