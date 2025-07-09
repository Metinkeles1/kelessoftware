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
  Globe,
} from "lucide-react";
import Button from "../ui/Button";
import Badge from "../ui/Badge";
import SectionHeader from "../ui/SectionHeader";

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        message: "",
      });
    }, 2000);
  };

  const contactInfo = [
    {
      icon: <Phone className="w-5 h-5 text-color-primary" />,
      title: "Telefon",
      value: "+90 212 123 45 67",
      color: "bg-color-primary text-color-primary",
    },
    {
      icon: <Mail className="w-5 h-5 text-[var(--color-secondary)]" />,
      title: "E-posta",
      value: "info@example.com",
      color: "bg-[var(--color-secondary)]/10 text-[var(--color-secondary)]",
    },
    {
      icon: <MapPin className="w-5 h-5 text-[var(--color-success,#10b981)]" />,
      title: "Lokasyon",
      value: "İstanbul, Türkiye",
      color: "bg-[var(--color-success,#10b981)]/10 text-[var(--color-success,#10b981)]",
    },
    {
      icon: <Clock className="w-5 h-5 text-[var(--color-warning,#f59e0b)]" />,
      title: "Çalışma Saatleri",
      value: "09:00 - 18:00",
      color: "bg-[var(--color-warning,#f59e0b)]/10 text-[var(--color-warning,#f59e0b)]",
    },
  ];

  return (
    <section id="contact" className="section-layout bg-gradient-to-br-primary">
      <div className="container-layout">
        {/* Header */}
        <div className="section-header-layout">
          <Badge
            icon={<Sparkles size={16} className="text-[var(--color-accent)]" />}
            text="İletişim"
            bgClassName="bg-[var(--color-bg)] border border-[var(--color-border)] backdrop-blur"
            textClassName="text-[var(--color-text)]"
            className="mx-auto mb-6"
          />

          <SectionHeader title="Projeleriniz İçin" titleGradient="Bize Ulaşın" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-[var(--color-border)] bg-[var(--color-bg)] p-6 shadow-md transition-all duration-300 hover:bg-[var(--color-muted)]/10 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${info.color}`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[var(--color-text)]">
                      {info.title}
                    </h4>
                    <p className="text-sm text-[var(--color-muted)]">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Info */}
            <div className="rounded-2xl border border-[var(--color-border)] bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] p-6 text-[var(--color-bg)]">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5 text-[var(--color-bg)]" />
                <h4 className="font-bold">Hızlı Yanıt</h4>
              </div>
              <p className="text-sm opacity-90">
                24 saat içinde size geri dönüş yapıyoruz. Ücretsiz danışmanlık için bize
                ulaşın.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-md">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Mesajınız Gönderildi!
                  </h3>
                  <p className="text-gray-600 mb-8">
                    En kısa sürede size geri dönüş yapacağız.
                  </p>
                  <Button onClick={() => setIsSubmitted(false)} className="mx-auto">
                    Yeni Mesaj Gönder
                  </Button>
                </div>
              ) : (
                <div className="space-y-3">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      Mesaj Gönder
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        İsim *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder="Adınız ve soyadınız"
                          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        E-posta *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="E-posta adresiniz"
                          className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 outline-none transition-all"
                          required
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Telefon
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="Telefon numaranız"
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:border-green-400 focus:ring-2 focus:ring-green-100 outline-none transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Mesajınız *
                    </label>
                    <div className="relative">
                      <MessageCircle className="absolute left-3 top-4 text-gray-400 w-5 h-5" />
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        placeholder="Projeniz hakkında detay verin..."
                        rows={5}
                        className="w-full pl-11 pr-4 py-3 rounded-lg border border-gray-200 focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all resize-none"
                        required
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button
                      onClick={handleSubmit}
                      disabled={isSubmitting}
                      icon={isSubmitting ? undefined : <Send className="w-4 h-4" />}
                      iconPosition="right"
                      className="w-full md:w-auto"
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
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
