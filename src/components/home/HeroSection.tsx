import {
  ArrowRight,
  Palette,
  Zap,
  Globe,
  Star,
  CheckCircle,
  Smartphone,
} from "lucide-react";
import Button from "../ui/Button";
import Link from "next/link";

const HeroSection = () => {
  const features = [
    { icon: Globe, text: "Mobil Uyumlu", color: "text-blue-500" },
    { icon: Zap, text: "Hızlı Yükleme", color: "text-yellow-500" },
    { icon: Star, text: "SEO Optimizasyonu", color: "text-purple-500" },
    { icon: Palette, text: "Modern Tasarım", color: "text-pink-500" },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-blue-50 py-16 sm:py-12 md:py-16 lg:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-br from-blue-400/15 to-purple-600/15 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-br from-pink-400/15 to-orange-600/15 rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgb(15,23,42) 1px, transparent 0)`,
          backgroundSize: "50px 50px",
        }}
      ></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-0">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-4 sm:space-y-6 md:space-y-8 text-center lg:text-left">
            {/* Main Heading - Adjusted font sizes for mobile */}
            <div className="space-y-2 sm:space-y-3 md:space-y-4">
              <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight">
                <span className="text-gray-900 block">Modern</span>
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
                  Web Siteleri
                </span>
                <span className="text-gray-900 block text-xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                  Tasarlıyoruz
                </span>
              </h1>

              <p className="text-sm sm:text-lg md:text-xl text-gray-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                İşinizi büyüten, ziyaretçileri müşteriye dönüştüren web siteleri
                tasarlıyoruz. Modern tasarım, hızlı performans ve SEO odaklı çözümler.
              </p>
            </div>

            {/* Feature Pills */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-1.5 sm:gap-2 px-2.5 py-1 sm:px-3.5 sm:py-1.5 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200"
                >
                  <feature.icon
                    className={`w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 ${feature.color}`}
                  />
                  <span className="text-xs sm:text-sm font-medium text-gray-700">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Fixed width issue on mobile */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Button
                variant="gradient"
                size="lg"
                icon={<ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />}
                iconPosition="right"
                className="w-full sm:w-auto shadow-lg hover:shadow-xl text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
              >
                Projeye Başla
              </Button>
              <Link href="#portfolio" className="inline-block w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full border-2 hover:bg-gray-50 text-sm sm:text-base px-4 sm:px-6 py-2.5 sm:py-3"
                >
                  Portföyü Gör
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Responsive for both Mobile and Desktop */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative">
              {/* Main Browser Window */}
              <div className="w-full bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden">
                {/* Browser Header */}
                <div className="flex items-center justify-between px-2 sm:px-3 md:px-4 lg:px-5 py-1.5 sm:py-2 md:py-3 bg-gray-50 border-b border-gray-100">
                  <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full bg-red-400"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full bg-yellow-400"></div>
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full bg-green-400"></div>
                  </div>
                  <div className="text-[8px] sm:text-xs md:text-sm px-2 sm:px-3 md:px-4 py-0.5 sm:py-1 md:py-1.5 bg-white rounded-full text-gray-500 border border-gray-100 flex items-center gap-1 md:gap-2">
                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-2.5 md:h-2.5 rounded-full bg-blue-500"></div>
                    <span>siteniz.com</span>
                  </div>
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-7 lg:h-7 rounded bg-gray-100"></div>
                </div>

                {/* Browser Content */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6 space-y-3 sm:space-y-4 md:space-y-5">
                  {/* Website Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                      <div className="h-5 sm:h-6 md:h-7 lg:h-8 w-5 sm:w-6 md:w-7 lg:w-8 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg"></div>
                      <div className="h-3 sm:h-4 md:h-5 lg:h-5 w-16 sm:w-20 md:w-24 lg:w-28 bg-gray-900 rounded"></div>
                    </div>
                    <div className="flex gap-2 sm:gap-3 md:gap-4">
                      <div className="h-3 sm:h-4 md:h-5 lg:h-5 w-3 sm:w-4 md:w-5 lg:w-6 bg-gray-200 rounded"></div>
                      <div className="h-3 sm:h-4 md:h-5 lg:h-5 w-3 sm:w-4 md:w-5 lg:w-6 bg-gray-200 rounded"></div>
                      <div className="h-3 sm:h-4 md:h-5 lg:h-5 w-3 sm:w-4 md:w-5 lg:w-6 bg-gradient-to-r from-blue-500 to-purple-600 rounded"></div>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    <div className="w-full sm:w-1/2 space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4">
                      <div className="h-6 sm:h-7 md:h-8 lg:h-9 bg-gray-900 rounded w-4/5"></div>
                      <div className="h-5 sm:h-6 md:h-7 lg:h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded w-3/5"></div>
                      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                        <div className="h-2 sm:h-2.5 md:h-2.5 lg:h-3 bg-gray-200 rounded-full w-full"></div>
                        <div className="h-2 sm:h-2.5 md:h-2.5 lg:h-3 bg-gray-200 rounded-full w-4/5"></div>
                        <div className="h-2 sm:h-2.5 md:h-2.5 lg:h-3 bg-gray-200 rounded-full w-3/5"></div>
                      </div>
                      <div className="flex gap-2 sm:gap-3 md:gap-4">
                        <div className="h-6 sm:h-7 md:h-8 lg:h-9 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded w-20 sm:w-24 md:w-28 lg:w-32"></div>
                        <div className="h-6 sm:h-7 md:h-8 lg:h-9 bg-white border border-gray-200 rounded w-20 sm:w-24 md:w-28 lg:w-32"></div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 h-32 sm:h-36 md:h-40 lg:h-44 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                    {[
                      { icon: "bg-blue-500", bg: "from-blue-100 to-blue-50" },
                      { icon: "bg-purple-500", bg: "from-purple-100 to-purple-50" },
                      { icon: "bg-pink-500", bg: "from-pink-100 to-pink-50" },
                    ].map((item, index) => (
                      <div
                        key={index}
                        className={`bg-gradient-to-br ${item.bg} h-16 sm:h-18 md:h-20 lg:h-24 rounded p-2 sm:p-3 md:p-3 lg:p-4 flex flex-col items-center justify-center`}
                      >
                        <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-white rounded-full flex items-center justify-center mb-1 sm:mb-1.5 md:mb-2 shadow-sm">
                          <div
                            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 ${item.icon} rounded-full`}
                          ></div>
                        </div>
                        <div className="h-1.5 sm:h-2 md:h-2 lg:h-2.5 bg-gray-700 rounded-full w-12 sm:w-14 md:w-16 lg:w-20"></div>
                      </div>
                    ))}
                  </div>

                  {/* Content Section - Only visible on medium screens and up, with reduced height */}
                  <div className="hidden md:grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-lg p-2.5 md:p-3 lg:p-4">
                      <div className="h-2.5 md:h-3 lg:h-4 bg-blue-500 rounded-md w-1/2 mb-1.5 md:mb-2 lg:mb-2.5"></div>
                      <div className="space-y-1 md:space-y-1.5">
                        <div className="h-2 md:h-2.5 lg:h-3 bg-gray-600 rounded-full w-full"></div>
                        <div className="h-2 md:h-2.5 lg:h-3 bg-gray-600 rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-lg p-2.5 md:p-3 lg:p-4">
                      <div className="h-2.5 md:h-3 lg:h-4 bg-purple-500 rounded-md w-1/2 mb-1.5 md:mb-2 lg:mb-2.5"></div>
                      <div className="space-y-1 md:space-y-1.5">
                        <div className="h-2 md:h-2.5 lg:h-3 bg-gray-600 rounded-full w-full"></div>
                        <div className="h-2 md:h-2.5 lg:h-3 bg-gray-600 rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Device - Responsive sizing */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 lg:-bottom-10 lg:-right-10 w-20 sm:w-24 md:w-32 lg:w-40">
                <div className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-200">
                  {/* Mobile Status Bar */}
                  <div className="h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-gray-50 border-b border-gray-100 flex items-center justify-between px-1 sm:px-1.5 md:px-2 lg:px-3">
                    <div className="text-[4px] sm:text-[5px] md:text-[6px] lg:text-[8px] font-medium text-gray-500">
                      12:30
                    </div>
                    <div className="flex items-center gap-0.5 md:gap-1">
                      <div className="h-0.5 w-0.5 md:h-1 md:w-1 bg-gray-500 rounded-full"></div>
                      <div className="h-0.5 w-0.5 md:h-1 md:w-1 bg-gray-500 rounded-full"></div>
                      <div className="h-0.5 w-0.5 md:h-1 md:w-1 bg-gray-500 rounded-full"></div>
                    </div>
                  </div>

                  {/* Mobile Content */}
                  <div className="p-1 sm:p-1.5 md:p-2 lg:p-3 space-y-1 sm:space-y-1.5 md:space-y-2 lg:space-y-3">
                    {/* Mobile Header */}
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-0.5 md:gap-1">
                        <div className="h-1 sm:h-1.5 md:h-2 lg:h-2.5 w-1 sm:w-1.5 md:w-2 lg:w-2.5 bg-gradient-to-r from-blue-500 to-purple-600 rounded-sm"></div>
                        <div className="h-1 sm:h-1.5 md:h-2 lg:h-2.5 w-4 sm:w-5 md:w-6 lg:w-8 bg-gray-800 rounded-sm"></div>
                      </div>
                      <div className="h-1 sm:h-1.5 md:h-2 lg:h-2.5 w-1 sm:w-1.5 md:w-2 lg:w-2.5 bg-gray-200 rounded-sm"></div>
                    </div>

                    {/* Mobile Hero */}
                    <div className="h-8 sm:h-10 md:h-14 lg:h-18 bg-gradient-to-br from-blue-50 to-purple-50 rounded flex items-center justify-center">
                      <div className="w-3 h-3 sm:w-4 sm:h-4 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 md:w-3 md:h-3 lg:w-4 lg:h-4 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full"></div>
                      </div>
                    </div>

                    {/* Mobile Content */}
                    <div className="space-y-0.5 sm:space-y-1 md:space-y-1.5">
                      <div className="h-1 sm:h-1.5 md:h-2 lg:h-2.5 bg-gray-800 rounded-sm w-2/3"></div>
                      <div className="h-0.5 sm:h-1 md:h-1.5 lg:h-2 bg-gray-200 rounded-full w-full"></div>
                      <div className="h-0.5 sm:h-1 md:h-1.5 lg:h-2 bg-gray-200 rounded-full w-4/5"></div>
                    </div>

                    {/* Mobile Buttons */}
                    <div className="flex gap-0.5 sm:gap-1 md:gap-1.5">
                      <div className="h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded flex-1"></div>
                      <div className="h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-white border border-gray-200 rounded flex-1"></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Elements - Responsive sizing */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 lg:-top-5 lg:-left-5 bg-white rounded p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-md border border-blue-100">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-blue-500" />
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base font-medium text-gray-900">
                      SEO
                    </div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base text-blue-500">
                      100/100
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-6 sm:-bottom-3 sm:-left-8 md:-bottom-4 md:-left-10 lg:-bottom-5 lg:-left-12 bg-white rounded p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-md border border-purple-100">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center">
                    <Zap className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-purple-500" />
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base font-medium text-gray-900">
                      Hız
                    </div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base text-purple-500">
                      0.8s
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/3 -right-2 sm:-right-3 md:-right-4 lg:-right-5 bg-white rounded p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-md border border-pink-100">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center">
                    <Smartphone className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-pink-500" />
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base font-medium text-gray-900">
                      Mobil
                    </div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base text-pink-500">
                      Uyumlu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
