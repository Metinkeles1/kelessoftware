import Home from "../components/home/Home";
import type { Metadata } from "next";
import { SITE_URL } from "./metadata";

export const metadata: Metadata = {
  title: "Keles Software - Profesyonel Web Tasarım & Yazılım Hizmetleri | İstanbul",
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
  "@id": `${SITE_URL}/#organization`,
  name: "Keles Software",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.svg`,
    width: 512,
    height: 512,
    "@id": `${SITE_URL}/#logo`,
  },
  image: {
    "@type": "ImageObject",
    url: `${SITE_URL}/logo.svg`,
    width: 512,
    height: 512,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+90-XXX-XXX-XXXX",
    contactType: "customer service",
    areaServed: "TR",
    availableLanguage: "Turkish",
  },
  address: {
    "@type": "PostalAddress",
    streetAddress: "Sancaktepe",
    addressLocality: "İstanbul",
    addressRegion: "İstanbul",
    postalCode: "34785",
    addressCountry: "TR",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 41.0082,
    longitude: 28.9784,
  },
  sameAs: [
    "https://www.linkedin.com/company/keles-software",
    "https://twitter.com/keles_software",
    "https://www.instagram.com/keles_software",
    "https://www.facebook.com/kelessoftware",
  ],
  founder: {
    "@type": "Person",
    name: "Keles Software",
  },
  foundingDate: "2020",
  priceRange: "₺₺",
  openingHours: "Mo,Tu,We,Th,Fr 09:00-18:00",
  telephone: "+90-XXX-XXX-XXXX",
  email: "info@kelessoftware.com",
  services: [
    "Web Tasarım",
    "E-ticaret Geliştirme",
    "SEO Hizmetleri",
    "Mobil Uygulama Geliştirme",
  ],
  areaServed: {
    "@type": "GeoCircle",
    geoMidpoint: {
      "@type": "GeoCoordinates",
      latitude: 41.0082,
      longitude: 28.9784,
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
            "Profesyonel, SEO uyumlu kurumsal web sitesi tasarımı ve geliştirme hizmetleri.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "E-Ticaret Sitesi Geliştirme",
          description:
            "Özelleştirilebilir, kullanıcı dostu e-ticaret platformları geliştirme.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "SEO Optimizasyonu",
          description:
            "Arama motoru sıralamasını iyileştirmek için kapsamlı SEO hizmetleri.",
        },
      },
    ],
  },
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
