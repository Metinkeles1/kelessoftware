import React from "react";

const CTASection = () => (
  <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
    <div className="container mx-auto px-6 text-center">
      <h2 className="text-4xl font-bold text-white mb-4">
        Projenizi Hayata Geçirmeye Hazır mısınız?
      </h2>
      <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
        Ücretsiz konsültasyon için bizimle iletişime geçin ve hayalinizdeki web sitesini
        gerçeğe dönüştürelim.
      </p>
      <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-300">
        Hemen Başlayalım
      </button>
    </div>
  </section>
);

export default CTASection;
