"use client";
import React, { useState } from "react";
import {
  Mail,
  User,
  MessageCircle,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  Sparkles,
  Clock,
  AlertCircle,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import SectionHeader from "../ui/SectionHeader";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Form validation
    if (!formData.name || !formData.email || !formData.message) {
      setError("Lütfen zorunlu alanları doldurun.");
      return;
    }

    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Bir hata oluştu.");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
    } catch (err) {
      setIsSubmitting(false);
      setError(err instanceof Error ? err.message : "Bir hata oluştu.");
    }
  };

  const contactInfo = [
    {
      icon: <Phone size={22} className="text-color-primary" />,
      title: "Telefon",
      value: "+90 555 068 04 25",
      color: "bg-color-primary/10 text-color-primary",
      href: "tel:+905550680425",
      ariaLabel: "Telefon ile ara",
      isExternal: false,
    },
    {
      icon: <Mail size={22} className="text-color-secondary" />,
      title: "E-posta",
      value: "kelessoftware@gmail.com",
      color: "bg-color-secondary/10 text-color-secondary",
      href: "mailto:kelessoftware@gmail.com",
      ariaLabel: "E-posta gönder",
      isExternal: false,
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-green-600"
          aria-hidden="true"
        >
          <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"></path>
          <path d="M9 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z"></path>
          <path d="M14 10a.5.5 0 0 1 1 0v2a.5.5 0 0 1-1 0v-2z"></path>
          <path d="M8.5 14h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1 0-1z"></path>
        </svg>
      ),
      title: "WhatsApp",
      value: "+90 555 068 04 25",
      color: "bg-green-100 text-green-600",
      href: "https://wa.me/905550680425",
      ariaLabel: "WhatsApp ile mesaj gönder",
      isExternal: true,
    },
    {
      icon: <MapPin size={22} className="text-color-success" />,
      title: "Lokasyon",
      value: "Sancaktepe, İstanbul, Türkiye",
      color: "bg-color-success/10 text-color-success",
      href: "https://maps.google.com/?q=Sancaktepe,İstanbul,Türkiye",
      ariaLabel: "Haritada görüntüle",
      isExternal: true,
    },
    {
      icon: <Clock size={22} className="text-color-warning" />,
      title: "Çalışma Saatleri",
      value: "09:00 - 18:00",
      color: "bg-color-warning/10 text-color-warning",
      href: "#contact",
      ariaLabel: "Çalışma saatleri",
      isExternal: false,
    },
  ];

  // Konu seçenekleri
  const subjectOptions = [
    { value: "", label: "Konu seçiniz" },
    { value: "web-tasarim", label: "Web Tasarım" },
    { value: "mobil-uygulama", label: "Mobil Uygulama" },
    { value: "e-ticaret", label: "E-Ticaret" },
    { value: "seo", label: "SEO Hizmetleri" },
    { value: "diger", label: "Diğer" },
  ];

  return (
    <section
      id="contact"
      className="section-layout bg-gradient-to-br-primary "
      aria-labelledby="contact-heading"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-24 -right-24 w-64 h-64 rounded-full bg-color-primary/5 blur-3xl"></div>
        <div className="absolute -bottom-32 -left-32 w-80 h-80 rounded-full bg-color-secondary/5 blur-3xl"></div>
      </div>

      <div className="container-layout relative z-10">
        {/* Header */}
        <div className="section-header-layout mb-10 md:mb-16">
          <Badge
            icon={<Sparkles size={16} className="text-color-accent" />}
            text="İletişim"
            bgClassName="bg-color-bg border border-color-border backdrop-blur"
            textClassName="text-color-text"
            className="mx-auto mb-6"
          />

          <SectionHeader
            id="contact-heading"
            title="Projeleriniz İçin"
            titleGradient="Bize Ulaşın"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 md:gap-8 max-w-7xl mx-auto">
          {/* Left Column - Contact Info */}
          <div className="lg:col-span-5 h-full flex flex-col">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 h-full">
              {contactInfo.map((info, index) => {
                // External links use regular <a> tag
                if (
                  info.isExternal ||
                  info.href.startsWith("mailto:") ||
                  info.href.startsWith("tel:")
                ) {
                  return (
                    <a
                      key={index}
                      href={info.href}
                      target={info.isExternal ? "_blank" : "_self"}
                      rel={info.isExternal ? "noopener noreferrer" : ""}
                      aria-label={info.ariaLabel}
                      className={`block group rounded-xl border border-color-border bg-color-bg p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                        info.href === "#" ? "cursor-default" : "cursor-pointer"
                      } ${index === contactInfo.length - 1 && "lg:h-full"}`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg ${info.color}`}
                        >
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-color-text text-base md:text-lg">
                            {info.title}
                          </h4>
                          <p className="text-color-muted md:text-base">{info.value}</p>
                        </div>
                      </div>
                    </a>
                  );
                } else {
                  // Internal links use Next.js Link component
                  return (
                    <Link
                      key={index}
                      href={info.href}
                      aria-label={info.ariaLabel}
                      className={`block group rounded-xl border border-color-border bg-color-bg p-5 md:p-6 shadow-sm transition-all duration-300 hover:shadow-md hover:-translate-y-1 ${
                        info.href === "#" ? "cursor-default" : "cursor-pointer"
                      } ${index === contactInfo.length - 1 && "lg:h-full"}`}
                    >
                      <div className="flex items-center gap-4">
                        <div
                          className={`flex h-12 w-12 items-center justify-center rounded-lg ${info.color}`}
                        >
                          {info.icon}
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold text-color-text text-base md:text-lg">
                            {info.title}
                          </h4>
                          <p className="text-color-muted md:text-base">{info.value}</p>
                        </div>
                      </div>
                    </Link>
                  );
                }
              })}
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-color-bg border border-color-border rounded-2xl shadow-lg p-5 md:p-8">
              {isSubmitted ? (
                <div className="text-center py-10 md:py-12">
                  <div className="mx-auto mb-6 flex h-16 w-16 md:h-20 md:w-20 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="w-8 h-8 md:w-10 md:h-10 text-green-600" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-color-text mb-3">
                    Mesajınız Gönderildi!
                  </h3>
                  <p className="text-color-muted mb-6 md:mb-8 max-w-md mx-auto">
                    Talebiniz başarıyla alındı. En kısa sürede size geri dönüş yapacağız.
                  </p>
                  <Button
                    onClick={() => setIsSubmitted(false)}
                    variant="outline"
                    className="mx-auto"
                  >
                    Yeni Mesaj Gönder
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="text-xl md:text-2xl font-bold text-color-text mb-4 md:mb-6">
                      Mesaj Gönder
                    </h3>
                  </div>

                  {error && (
                    <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-center gap-2 mb-4">
                      <AlertCircle className="w-5 h-5 flex-shrink-0" />
                      <p className="text-sm">{error}</p>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-color-text mb-2"
                      >
                        İsim Soyisim <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <User
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-color-muted w-5 h-5"
                          aria-hidden="true"
                        />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Adınız ve soyadınız"
                          className="w-full pl-11 pr-4 py-3 rounded-lg border border-color-border bg-color-input focus:border-color-primary focus:ring-2 focus:ring-color-primary/20 outline-none transition-all"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-color-text mb-2"
                      >
                        E-posta <span className="text-red-500">*</span>
                      </label>
                      <div className="relative">
                        <Mail
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-color-muted w-5 h-5"
                          aria-hidden="true"
                        />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="E-posta adresiniz"
                          className="w-full pl-11 pr-4 py-3 rounded-lg border border-color-border bg-color-input focus:border-color-secondary focus:ring-2 focus:ring-color-secondary/20 outline-none transition-all"
                          required
                          aria-required="true"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-color-text mb-2"
                      >
                        Telefon
                      </label>
                      <div className="relative">
                        <Phone
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-color-muted w-5 h-5"
                          aria-hidden="true"
                        />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="Telefon numaranız"
                          className="w-full pl-11 pr-4 py-3 rounded-lg border border-color-border bg-color-input focus:border-color-success focus:ring-2 focus:ring-color-success/20 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-color-text mb-2"
                      >
                        Konu
                      </label>
                      <div className="relative">
                        <MessageCircle
                          className="absolute left-3 top-1/2 -translate-y-1/2 text-color-muted w-5 h-5"
                          aria-hidden="true"
                        />
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          className="w-full pl-11 pr-10 py-3 rounded-lg border border-color-border bg-color-input focus:border-color-accent focus:ring-2 focus:ring-color-accent/20 outline-none transition-all appearance-none"
                        >
                          {subjectOptions.map((option) => (
                            <option key={option.value} value={option.value}>
                              {option.label}
                            </option>
                          ))}
                        </select>
                        <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none">
                          <ArrowRight className="w-4 h-4 text-color-muted rotate-90" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-color-text mb-2"
                    >
                      Mesajınız <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <MessageCircle
                        className="absolute left-3 top-4 text-color-muted w-5 h-5"
                        aria-hidden="true"
                      />
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Projeniz hakkında detay verin..."
                        rows={4}
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-color-border bg-color-input focus:border-color-primary focus:ring-2 focus:ring-color-primary/20 outline-none transition-all resize-none"
                        required
                        aria-required="true"
                      />
                    </div>
                  </div>

                  <div className="pt-2">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                      iconPosition="right"
                      variant="gradient"
                      className="w-full sm:w-auto"
                      aria-label="İletişim formunu gönder"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                          Gönderiliyor...
                        </>
                      ) : (
                        "Mesaj Gönder"
                      )}
                    </Button>
                    <p className="text-xs text-color-muted mt-3">
                      <span className="text-red-500">*</span> işaretli alanlar zorunludur
                    </p>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>

        {/* Structured data for SEO (hidden) */}
        <div className="sr-only" aria-hidden="true">
          <h2>Keles Software İletişim Bilgileri</h2>
          <p>
            Adres: Sancaktepe, İstanbul, Türkiye. Telefon: +90 555 068 04 25. E-posta:
            kelessoftware@gmail.com. Web tasarım, yazılım geliştirme ve dijital pazarlama
            hizmetleri için bize ulaşın.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
