"use client";

import { useEffect } from "react";

interface MetaTagsProps {
  description?: string;
}

export default function MetaTags({
  description = "İstanbul Sancaktepe'den tüm Türkiye'ye profesyonel web tasarım, e-ticaret, mobil uygulama ve SEO hizmetleri sunuyoruz.",
}: MetaTagsProps) {
  // Client tarafında meta tag'lerin eklenmesi için useEffect kullanıyoruz
  // Bu şekilde hydration uyumsuzluğu oluşmayacak
  useEffect(() => {
    // Meta description'ı güncelle veya ekle
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute("content", description);

    // Diğer meta tag'leri ekleyebilirsiniz
    // Örnek: mobile-web-app-capable
    let mobileWebAppCapable = document.querySelector(
      'meta[name="mobile-web-app-capable"]'
    );
    if (!mobileWebAppCapable) {
      mobileWebAppCapable = document.createElement("meta");
      mobileWebAppCapable.setAttribute("name", "mobile-web-app-capable");
      mobileWebAppCapable.setAttribute("content", "yes");
      document.head.appendChild(mobileWebAppCapable);
    }

    // Apple-mobile-web-app-capable
    let appleMobileWebAppCapable = document.querySelector(
      'meta[name="apple-mobile-web-app-capable"]'
    );
    if (!appleMobileWebAppCapable) {
      appleMobileWebAppCapable = document.createElement("meta");
      appleMobileWebAppCapable.setAttribute("name", "apple-mobile-web-app-capable");
      appleMobileWebAppCapable.setAttribute("content", "yes");
      document.head.appendChild(appleMobileWebAppCapable);
    }
  }, [description]);

  return null;
}
