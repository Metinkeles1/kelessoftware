import type { Metadata, Viewport } from "next";
// Remove Google font imports and use system fonts instead
import "./globals.css";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import defaultMetadata from "./metadata";
import StructuredData from "@/components/ui/StructuredData";
import MetaTags from "@/components/ui/MetaTags";

// Define CSS variables for fonts without using next/font
const fontClasses = "font-sans antialiased";

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
    <html lang="tr" className={fontClasses} suppressHydrationWarning>
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
