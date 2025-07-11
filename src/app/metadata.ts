import { Metadata } from "next";

// Site URL'ini tek bir yerde tanımlıyoruz
export const SITE_URL = "https://kelessoftware.com";

// Varsayılan metadata değerleri
const defaultMetadata: Metadata = {
  title: {
    default: "Keles Software - Web Tasarım & Yazılım Hizmetleri | İstanbul",
    template: "%s | Keles Software",
  },
  description:
    "Keles Software olarak İstanbul Sancaktepe'den tüm Türkiye'ye profesyonel web tasarım, e-ticaret, mobil uygulama ve SEO hizmetleri sunuyoruz.",
  keywords: [
    "web tasarım istanbul",
    "web tasarım sancaktepe",
    "yazılım şirketi istanbul",
    "e-ticaret sitesi",
    "mobil uygulama geliştirme",
    "SEO hizmetleri",
    "web sitesi yapımı",
    "dijital pazarlama",
    "ui ux tasarım",
    "react next.js geliştirme",
    "keles software",
  ],
  authors: [{ name: "Keles Software" }],
  creator: "Keles Software",
  publisher: "Keles Software",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
    languages: {
      "tr-TR": SITE_URL,
      "en-US": `${SITE_URL}/en`,
    },
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "tr_TR",
    url: SITE_URL,
    siteName: "Keles Software",
    title: "Keles Software - Profesyonel Web Tasarım & Yazılım Hizmetleri",
    description:
      "İstanbul Sancaktepe merkezli Keles Software ile modern web tasarım ve yazılım çözümleri. Tüm Türkiye'ye hizmet veriyoruz.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Keles Software - Web Tasarım Hizmetleri",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Keles Software - Web Tasarım & Yazılım Hizmetleri",
    description:
      "İstanbul Sancaktepe'den tüm Türkiye'ye profesyonel web tasarım hizmetleri",
    images: ["/og-image.jpg"],
    creator: "@keles_software",
    site: "@keles_software",
  },
  verification: {
    google: "google-site-verification-kod",
    yandex: "yandex-verification-kod",
  },
  category: "Web Development",
  applicationName: "Keles Software",
  referrer: "origin-when-cross-origin",
  other: {
    "theme-color": "#3b82f6",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Keles Software",
  },
};

export default defaultMetadata;
