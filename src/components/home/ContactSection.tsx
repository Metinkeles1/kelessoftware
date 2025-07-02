import React from "react";
import { CheckCircle } from "lucide-react";

const ContactSection = () => (
  <section id="contact" className="py-20 bg-gray-50">
    <div className="container mx-auto px-6">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">İletişim</h2>
          <p className="text-xl text-gray-600">
            Projeleriniz için bizimle iletişime geçin
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold text-gray-900">
              Bizimle İrtibata Geçin
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Ücretsiz konsültasyon</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">24 saat içinde geri dönüş</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="w-5 h-5 text-green-500" />
                <span className="text-gray-600">Özel çözümler</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Adınız"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="E-posta Adresiniz"
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all"
              />
            </div>
            <div>
              <textarea
                placeholder="Mesajınız"
                rows={4}
                className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-2 focus:ring-blue-600 focus:ring-opacity-20 outline-none transition-all resize-none"
              ></textarea>
            </div>
            <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
              Mesaj Gönder
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default ContactSection;
