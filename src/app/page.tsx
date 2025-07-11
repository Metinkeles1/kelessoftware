import Home from "../components/home/Home";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Keles Software - Profesyonel Web Tasarım & Yazılım Hizmetleri | İstanbul",
  description:
    "İstanbul'da profesyonel web tasarım, e-ticaret ve yazılım çözümleri sunan Keles Software. SEO uyumlu, hızlı ve mobil dostu web siteleri ile işletmenizi dijitale taşıyoruz. Ücretsiz keşif görüşmesi için hemen arayın!",
  alternates: {
    canonical: "https://keles-software.com",
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
};

export default function HomePage() {
  return <Home />;
}
