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
      icon: <Phone className="w-5 h-5" />,
      title: "Telefon",
      value: "+90 212 123 45 67",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      title: "E-posta",
      value: "info@example.com",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "Lokasyon",
      value: "İstanbul, Türkiye",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: "Çalışma Saatleri",
      value: "09:00 - 18:00",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section
      id="contact"
      className="relative isolate overflow-hidden bg-gradient-to-br from-white to-blue-50 py-28"
    >
      <div className="container mx-auto relative px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <Badge
            icon={<Sparkles size={16} className="text-yellow-500" />}
            text="İletişim"
            bgClassName="bg-white border border-gray-200 backdrop-blur"
            textClassName="text-gray-700"
            className="mx-auto mb-6"
          />

          <h2 className="mb-6 text-4xl font-bold tracking-tight text-gray-900 md:text-6xl">
            Projeleriniz İçin{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Bize Ulaşın
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Cards */}
          <div className="lg:col-span-1 space-y-4">
            {contactInfo.map((info, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-md transition-all duration-300 hover:bg-gray-50 hover:-translate-y-1"
              >
                <div className="flex items-center gap-4">
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-xl ${info.color}`}
                  >
                    {info.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">{info.title}</h4>
                    <p className="text-sm text-gray-600">{info.value}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Quick Info */}
            <div className="rounded-2xl border border-gray-200 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 p-6 text-white">
              <div className="flex items-center gap-2 mb-2">
                <Globe className="w-5 h-5" />
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
