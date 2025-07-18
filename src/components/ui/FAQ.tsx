"use client";

import { useState } from "react";
import { ChevronDown, MessageSquareQuote } from "lucide-react";
import Badge from "./Badge";
import SectionHeader from "./SectionHeader";

interface FAQProps {
  title?: string;
  titleGradient?: string;
  titleAfterGradient?: string;
  description?: string;
  faqs?: Array<{
    question: string;
    answer: string;
  }>;
}

// Varsayılan FAQ verileri
const defaultFaqs = [
  {
    question: "Web siteniz için ne kadar süreye ihtiyacınız var?",
    answer:
      "Projenin karmaşıklığına bağlı olarak, basit bir web sitesi 2-4 hafta içinde tamamlanabilirken, daha kapsamlı e-ticaret projeleri 6-12 hafta sürebilir. Her proje için size özel bir zaman çizelgesi sunuyoruz.",
  },
  {
    question: "Web sitesi tasarımı için fiyatlandırmanız nasıl?",
    answer:
      "Her proje benzersiz olduğu için fiyatlandırma da projenin kapsamına, özelliklerine ve gereksinimlerine göre değişmektedir. Ücretsiz keşif görüşmemizde ihtiyaçlarınızı dinleyip size özel bir fiyat teklifi sunabiliriz.",
  },
  {
    question: "SEO hizmetleriniz neleri kapsamaktadır?",
    answer:
      "SEO hizmetlerimiz, site içi optimizasyon (meta etiketleri, içerik optimizasyonu), teknik SEO (site hızı, mobil uyumluluk), anahtar kelime araştırması, rakip analizi ve düzenli raporlama içerir. Amacımız, web sitenizi arama motorlarında üst sıralara taşımaktır.",
  },
  {
    question: "Web sitemin bakımını da yapıyor musunuz?",
    answer:
      "Evet, web sitesi bakım ve destek paketlerimiz mevcuttur. Bu paketler, güvenlik güncellemeleri, içerik yönetimi, teknik destek ve düzenli performans iyileştirmelerini içerir. Sitenizin her zaman güncel ve güvenli kalmasını sağlıyoruz.",
  },
  {
    question: "E-ticaret sitemi mevcut sistemlerimle entegre edebilir misiniz?",
    answer:
      "Evet, e-ticaret çözümlerimizi muhasebe yazılımları, CRM sistemleri, envanter yönetim araçları ve ödeme sistemleri gibi mevcut iş sistemlerinizle entegre edebiliriz. Bu, iş süreçlerinizi otomatikleştirmenize ve verimliliği artırmanıza yardımcı olur.",
  },
];

export default function FAQ({
  title = "Sıkça Sorulan",
  titleGradient = "Sorular",
  titleAfterGradient = "",
  description = "Web tasarım ve yazılım hizmetlerimizle ilgili merak ettiğiniz soruların cevaplarını burada bulabilirsiniz.",
  faqs = defaultFaqs,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // FAQ yapılandırılmış verisi
  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  return (
    <section className="section-layout bg-gradient-to-br-primary relative">
      {/* Dekoratif arka plan elementleri */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-color-primary opacity-5 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 w-80 h-80 rounded-full bg-color-secondary opacity-5 blur-3xl"></div>
      </div>

      <div className="container-layout relative z-10">
        <div className="section-header-layout">
          <Badge
            icon={<MessageSquareQuote />}
            text="Sorularınızı Yanıtlıyoruz"
            bgClassName="bg-color-bg border border-color-border backdrop-blur"
            textClassName="text-color-text"
            className="mx-auto mb-6"
          />

          <SectionHeader
            title={title}
            titleGradient={titleGradient}
            titleAfterGradient={titleAfterGradient}
            description={description}
          />
        </div>

        <div className="max-w-3xl mx-auto mt-12 relative">
          {/* Dekoratif çizgi */}
          <div className="absolute left-6 top-6 bottom-6 w-px bg-gradient-to-b from-color-primary/20 via-color-secondary/20 to-transparent hidden md:block"></div>

          {faqs.map((faq, index) => (
            <div key={index} className="mb-6 group">
              <button
                onClick={() => handleToggle(index)}
                className={`flex justify-between items-center w-full rounded-xl p-6 text-left transition-all duration-300 ${
                  openIndex === index
                    ? "bg-white shadow-lg"
                    : "bg-color-bg/50 hover:bg-white hover:shadow-md"
                }`}
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <div className="flex items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mr-4 transition-colors ${
                      openIndex === index
                        ? "bg-color-primary text-white"
                        : "bg-color-bg text-color-muted border border-color-border group-hover:border-color-primary/50"
                    }`}
                  >
                    <span className="text-sm font-medium">{index + 1}</span>
                  </div>
                  <h3
                    className={`text-lg font-medium transition-colors ${
                      openIndex === index ? "text-color-primary" : "text-color-emphasis"
                    }`}
                  >
                    {faq.question}
                  </h3>
                </div>
                <div
                  className={`ml-4 flex-shrink-0 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : "rotate-0"
                  }`}
                >
                  <ChevronDown
                    className={`w-5 h-5 ${
                      openIndex === index ? "text-color-primary" : "text-color-muted"
                    }`}
                  />
                </div>
              </button>

              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openIndex === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                {openIndex === index && (
                  <div className="pl-14 pr-6 py-4 ml-4 border-l-2 border-color-primary/20">
                    <div
                      className="prose prose-sm text-color-muted"
                      dangerouslySetInnerHTML={{ __html: faq.answer }}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ yapılandırılmış verisi */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
    </section>
  );
}
