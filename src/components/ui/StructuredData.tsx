"use client";

import { SITE_URL } from "@/app/metadata";

interface StructuredDataProps {
  title?: string;
  description?: string;
  logoUrl?: string;
  siteUrl?: string;
}

export default function StructuredData({
  title = "Keles Software - Web Tasarım & Yazılım Hizmetleri",
  description = "İstanbul Sancaktepe'den tüm Türkiye'ye profesyonel web tasarım, e-ticaret, mobil uygulama ve SEO hizmetleri sunuyoruz.",
  logoUrl = `${SITE_URL}/logo.svg`,
  siteUrl = SITE_URL,
}: StructuredDataProps) {
  // Organization structured data
  const organizationData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Keles Software",
    url: siteUrl,
    logo: logoUrl,
    description: description,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sancaktepe",
      addressRegion: "İstanbul",
      addressCountry: "TR",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+90-55506805425",
      contactType: "customer service",
      areaServed: "TR",
      availableLanguage: ["Turkish", "English"],
    },
    sameAs: [
      "https://twitter.com/kelessoftware",
      "https://www.facebook.com/kelessoftware",
      "https://www.linkedin.com/company/kelessoftware",
      "https://www.instagram.com/kelessoftware",
    ],
  };

  // WebSite structured data
  const websiteData = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: title,
    url: siteUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteUrl}/search?q={search_term_string}`,
      "query-input": "required name=search_term_string",
    },
  };

  // LocalBusiness structured data
  const localBusinessData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: "Keles Software",
    image: logoUrl,
    "@id": `${siteUrl}/#organization`,
    url: siteUrl,
    telephone: "+90-55506805425",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Sancaktepe",
      addressLocality: "İstanbul",
      postalCode: "34785",
      addressCountry: "TR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 41.0082,
      longitude: 28.9784,
    },
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    priceRange: "₺₺",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteData) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
      />
    </>
  );
}
