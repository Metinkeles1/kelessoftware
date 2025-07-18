import Home from "../components/home/Home";
import type { Metadata } from "next";
import { SITE_URL } from "./metadata";

export const metadata: Metadata = {
  title: "Keles Software",
  description:
    "İstanbul'da profesyonel web tasarım, e-ticaret ve yazılım çözümleri sunan Keles Software. SEO uyumlu, hızlı ve mobil dostu web siteleri ile işletmenizi dijitale taşıyoruz. Ücretsiz keşif görüşmesi için hemen arayın!",
  alternates: {
    canonical: SITE_URL,
  },
  keywords: [
    "web tasarım istanbul",
    "web tasarım şirketi",
    "profesyonel web sitesi",
    "e-ticaret sitesi yapımı",
    "seo uyumlu web tasarım",
    "mobil uyumlu web sitesi",
    "kurumsal web tasarım",
    "istanbul web tasarım ajansı",
    "web yazılım hizmetleri",
    "sancaktepe web tasarım",
  ],
  openGraph: {
    title: "Keles Software - İstanbul'da Profesyonel Web Tasarım Hizmetleri",
    description:
      "SEO uyumlu, mobil dostu web tasarım çözümleri. E-ticaret, kurumsal web sitesi ve UI/UX tasarım hizmetleri.",
    url: SITE_URL,
    type: "website",
    images: [
      {
        url: `${SITE_URL}/logo.svg`,
        width: 512,
        height: 512,
        alt: "Keles Software - Profesyonel Web Tasarım Hizmetleri",
      },
    ],
  },
  twitter: {
    title: "Keles Software - İstanbul Web Tasarım",
    description:
      "Profesyonel web tasarım ve SEO hizmetleri ile işinizi dijitale taşıyın.",
    card: "summary_large_image",
    images: [`${SITE_URL}/logo.svg`],
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": SITE_URL,
  name: "Keles Software",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.svg`,
    width: 512,
    height: 512,
    "@id": `${SITE_URL}/logo.svg`,
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.svg`,
    width: 512,
    height: 512,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-555-0680-5425",
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: ["Turkish", "English"],
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Safa Mahallesi, Şehit Hakan Genç Sokak",
    addressLocality: "Sancaktepe",
    addressRegion: "İstanbul",
    postalCode: "34791",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0082,
    longitude: 29.1921,
  },
  sameAs: [
    "https://www.linkedin.com/company/kelessoftware",
    "https://twitter.com/kelessoftware",
    "https://www.instagram.com/kelessoftware",
    "https://www.facebook.com/kelessoftware",
  ],
  founder: {
    "@type": "Person",
    name: "Keles Software",
    jobTitle: "Web Tasarım ve Yazılım Şirketi",
  },
  foundingDate: "2020-04-15",
  priceRange: "₺₺",
  openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
  telephone: "+90-555-0680-5425",
  email: "info@kelessoftware.com",
  services: [
    "Web Tasarım",
    "E-ticaret Geliştirme",
    "SEO Hizmetleri",
    "Mobil Uygulama Geliştirme",
    "UI/UX Tasarım",
    "Kurumsal Kimlik Tasarımı",
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 41.0082,
      longitude: 29.1921,
    },
    geoRadius: "50000",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Web Tasarım Hizmetleri",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Kurumsal Web Sitesi Tasarımı",
          description:
            "Profesyonel, SEO uyumlu kurumsal web sitesi tasarımı ve geliştirme hizmetleri. Mobil uyumlu, hızlı ve modern tasarımlar.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Ticaret Sitesi Geliştirme",
          description:
            "Özelleştirilebilir, kullanıcı dostu e-ticaret platformları geliştirme. WooCommerce, Shopify ve özel çözümler.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimizasyonu",
          description:
            "Arama motoru sıralamasını iyileştirmek için kapsamlı SEO hizmetleri. Teknik SEO, içerik optimizasyonu ve bağlantı kurma stratejileri.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Mobil Uygulama Geliştirme",
          description:
            "iOS ve Android platformları için modern, kullanıcı dostu mobil uygulamalar. React Native ve Flutter teknolojileri ile çapraz platform çözümler.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "UI/UX Tasarım",
          description:
            "Kullanıcı deneyimini ön planda tutan, modern ve etkileyici arayüz tasarımları. Figma ve Adobe XD ile profesyonel tasarım süreçleri.",
        },
      },
    ],
  },
  slogan: "Dijital dünyada iz bırakın",
  description:
    "İstanbul Sancaktepe'den tüm Türkiye'ye profesyonel web tasarım, e-ticaret, mobil uygulama ve SEO hizmetleri sunuyoruz. Modern teknolojiler ve yaratıcı çözümlerle işinizi dijital dünyada bir adım öne taşıyoruz.",
  keywords:
    "web tasarım, e-ticaret, seo, mobil uygulama, ui/ux tasarım, istanbul, sancaktepe",
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "5",
  },
  vatID: "TR12345678901",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Home />
    </>
  );
}
