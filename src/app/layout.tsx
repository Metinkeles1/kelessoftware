import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import defaultMetadata from "./metadata";
import StructuredData from "@/components/ui/StructuredData";
import MetaTags from "@/components/ui/MetaTags";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
  preload: false,
});

// Viewport meta tag'i için ayrı bir export tanımlıyoruz
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#3b82f6",
};

// Metadata'yı düzgün şekilde tanımlıyoruz
export const metadata: Metadata = {
  title: {
    default: "Keles Software - Web Tasarım & Yazılım Hizmetleri | İstanbul",
    template: "%s | Keles Software",
  },
  description:
    "Keles Software olarak İstanbul Sancaktepe'den tüm Türkiye'ye profesyonel web tasarım, e-ticaret, mobil uygulama ve SEO hizmetleri sunuyoruz.",
  ...defaultMetadata,
  icons: {
    icon: { url: "/favicon.svg", type: "image/svg+xml" },
    apple: "/logo-192x192.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="tr"
      className={`${geistSans.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <head>{/* Meta description artık burada tanımlanmıyor */}</head>
      <body className="antialiased">
        <MetaTags />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
        <StructuredData />
      </body>
    </html>
  );
}
