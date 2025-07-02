import React from "react";
import { ArrowRight } from "lucide-react";

const HeroSection = () => (
  <section
    id="home"
    className="min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-purple-50"
  >
    <div className="container mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Modern
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              Web Tasarım
            </span>
            <br />
            Çözümleri
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            İşletmenizi dijital dünyada öne çıkaran, SEO uyumlu ve kullanıcı dostu web
            siteleri tasarlıyoruz.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
              Ücretsiz Teklif Al
              <ArrowRight className="ml-2" size={20} />
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl font-semibold hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
              Portföyümüzü İncele
            </button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
            <div className="bg-white rounded-xl p-6 space-y-4">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-blue-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default HeroSection;
