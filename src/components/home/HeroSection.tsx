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
    { icon: Globe, text: "Mobil Uyumlu", color: "text-color-primary" },
    { icon: Zap, text: "Hızlı Yükleme", color: "text-color-secondary" },
    { icon: Star, text: "SEO Optimizasyonu", color: "text-purple-500" },
    { icon: Palette, text: "Modern Tasarım", color: "text-color-accent" },
  ];

  return (
    <section className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-hero py-16 sm:py-12 md:py-16 lg:py-20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-br from-[var(--hero-blob-blue)] to-[var(--hero-blob-purple)] rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-40 h-40 sm:w-60 sm:h-60 bg-gradient-to-br from-[var(--hero-blob-pink)] to-[var(--hero-blob-orange)] rounded-full blur-3xl"></div>
      </div>

      {/* Grid Pattern */}
      <div className="absolute inset-0 hero-grid-pattern"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-10 sm:pt-0">
        <div className="grid md:grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-6 sm:space-y-7 text-center lg:text-left">
            {/* Main Heading - SEO ve Mobile uyumlu başlık yapısı */}
            <div>
              <h1 className="font-bold leading-tight mb-3">
                <span className="text-color-emphasis text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block">
                  Modern
                </span>{" "}
                <span className="text-gradient-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl inline-block">
                  Web Siteleri
                </span>
              </h1>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-color-emphasis mt-2">
                Tasarlıyoruz
              </h2>

              <p className="text-base sm:text-lg md:text-xl text-color-muted max-w-xl mx-auto lg:mx-0 leading-relaxed mt-4">
                İşinizi büyüten, ziyaretçileri müşteriye dönüştüren web siteleri
                tasarlıyoruz. Modern tasarım, hızlı performans ve SEO odaklı çözümler.
              </p>
            </div>

            {/* Feature Pills - Daha büyük ve tıklanabilir */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center lg:justify-start">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 bg-white/60 backdrop-blur-sm rounded-full border border-gray-200 shadow-sm"
                >
                  <feature.icon
                    className={`w-4 h-4 sm:w-5 sm:h-5 ${feature.color}`}
                    aria-hidden="true"
                  />
                  <span className="text-sm sm:text-base font-medium text-color-emphasis">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>

            {/* CTA Buttons - Mobile optimized */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <Link href="#contact" className="inline-block w-full sm:w-auto">
                <Button
                  variant="gradient"
                  size="md"
                  icon={
                    <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5" />
                  }
                  iconPosition="right"
                  className="w-full sm:w-auto shadow-gradient hover:shadow-lg text-sm sm:text-base md:text-lg px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3.5"
                >
                  Projeye Başla
                </Button>
              </Link>
              <Link href="#portfolio" className="inline-block w-full sm:w-auto">
                <Button
                  variant="outline"
                  size="md"
                  className="w-full border border-2 hover:bg-gray-50 text-sm sm:text-base md:text-lg px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3.5"
                >
                  Portföyü Gör
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Content - Responsive for both Mobile and Desktop */}
          <div className="relative flex justify-center lg:justify-end mt-8 lg:mt-0">
            <div className="w-full max-w-[280px] sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl relative">
              {/* Main Browser Window - Enhanced realistic design */}
              <div className="w-full bg-white rounded-lg shadow-xl border border-color-border overflow-hidden">
                {/* Browser Header - Modern browser design */}
                <div className="flex items-center justify-between px-3 sm:px-4 md:px-5 lg:px-6 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-gray-100 border-b border-color-border">
                  <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5">
                    {/* Browser controls */}
                    <div className="flex items-center gap-1 sm:gap-1.5 md:gap-2">
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full bg-red-400 shadow-sm"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full bg-yellow-400 shadow-sm"></div>
                      <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-3.5 md:h-3.5 lg:w-4 lg:h-4 rounded-full bg-green-400 shadow-sm"></div>
                    </div>

                    {/* Browser navigation */}
                    <div className="hidden sm:flex items-center gap-2 md:gap-3 ml-3 md:ml-4">
                      <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-color-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="15 18 9 12 15 6"></polyline>
                        </svg>
                      </div>
                      <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-color-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </div>
                      <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-5 lg:h-5 text-color-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10"></circle>
                          <line x1="2" y1="12" x2="22" y2="12"></line>
                          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* URL Bar */}
                  <div className="flex-1 mx-2 sm:mx-3 md:mx-4">
                    <div className="flex items-center bg-white border border-color-border rounded-full px-2 sm:px-3 md:px-4 py-1 sm:py-1.5 md:py-2">
                      {/* Security icon */}
                      <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5 text-green-500 mr-1 sm:mr-1.5 md:mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                          <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                        </svg>
                      </div>

                      {/* URL text */}
                      <div className="text-[8px] sm:text-xs md:text-sm text-color-emphasis font-medium">
                        siteniz.com
                      </div>

                      {/* Star icon */}
                      <div className="ml-auto w-3 h-3 sm:w-3.5 sm:h-3.5 md:w-4 md:h-4 lg:w-4.5 lg:h-4.5 text-color-muted">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Browser menu */}
                  <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 text-color-muted">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="1"></circle>
                        <circle cx="19" cy="12" r="1"></circle>
                        <circle cx="5" cy="12" r="1"></circle>
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Browser Content - Keep the existing content */}
                <div className="p-3 sm:p-4 md:p-5 lg:p-6 space-y-3 sm:space-y-4 md:space-y-5">
                  {/* Website Header */}
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-1.5 sm:gap-2 md:gap-3">
                      <div className="h-5 sm:h-6 md:h-7 lg:h-8 w-5 sm:w-6 md:w-7 lg:w-8 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg"></div>
                      <div className="h-3 sm:h-4 md:h-5 lg:h-5 w-16 sm:w-20 md:w-24 lg:w-28 bg-color-emphasis rounded"></div>
                    </div>
                    <div className="flex gap-2 sm:gap-3 md:gap-4">
                      <div className="h-3 sm:h-4 md:h-5 lg:h-5 w-3 sm:w-4 md:w-5 lg:w-6 bg-color-border rounded"></div>
                      <div className="h-3 sm:h-4 md:h-5 lg:h-5 w-3 sm:w-4 md:w-5 lg:w-6 bg-color-border rounded"></div>
                      <div className="h-3 sm:h-4 md:h-5 lg:h-5 w-3 sm:w-4 md:w-5 lg:w-6 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded"></div>
                    </div>
                  </div>

                  {/* Hero Section */}
                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-5 lg:gap-6">
                    <div className="w-full sm:w-1/2 space-y-2 sm:space-y-2.5 md:space-y-3 lg:space-y-4">
                      <div className="h-6 sm:h-7 md:h-8 lg:h-9 bg-color-emphasis rounded w-4/5"></div>
                      <div className="h-5 sm:h-6 md:h-7 lg:h-8 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] rounded w-3/5"></div>
                      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                        <div className="h-2 sm:h-2.5 md:h-2.5 lg:h-3 bg-color-border rounded-full w-full"></div>
                        <div className="h-2 sm:h-2.5 md:h-2.5 lg:h-3 bg-color-border rounded-full w-4/5"></div>
                        <div className="h-2 sm:h-2.5 md:h-2.5 lg:h-3 bg-color-border rounded-full w-3/5"></div>
                      </div>
                      <div className="flex gap-2 sm:gap-3 md:gap-4">
                        <div className="h-6 sm:h-7 md:h-8 lg:h-9 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] rounded w-20 sm:w-24 md:w-28 lg:w-32"></div>
                        <div className="h-6 sm:h-7 md:h-8 lg:h-9 bg-white border border-color-border rounded w-20 sm:w-24 md:w-28 lg:w-32"></div>
                      </div>
                    </div>
                    <div className="w-full sm:w-1/2 h-32 sm:h-36 md:h-40 lg:h-44 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                      <div className="w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 lg:w-24 lg:h-24 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                        <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-blue-200 to-purple-200 rounded-full flex items-center justify-center">
                          <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features Section */}
                  <div className="grid grid-cols-3 gap-2 sm:gap-3 md:gap-4 lg:gap-5">
                    {[
                      { icon: "bg-color-primary", bg: "from-blue-100 to-blue-50" },
                      { icon: "bg-color-secondary", bg: "from-purple-100 to-purple-50" },
                      { icon: "bg-color-accent", bg: "from-pink-100 to-pink-50" },
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
                        <div className="h-1.5 sm:h-2 md:h-2 lg:h-2.5 bg-color-emphasis rounded-full w-12 sm:w-14 md:w-16 lg:w-20"></div>
                      </div>
                    ))}
                  </div>

                  {/* Content Section - Only visible on medium screens and up, with reduced height */}
                  <div className="hidden md:grid grid-cols-2 gap-4 md:gap-5 lg:gap-6">
                    <div className="bg-gradient-to-br from-blue-50 to-blue-100/30 rounded-lg p-2.5 md:p-3 lg:p-4">
                      <div className="h-2.5 md:h-3 lg:h-4 bg-color-primary rounded-md w-1/2 mb-1.5 md:mb-2 lg:mb-2.5"></div>
                      <div className="space-y-1 md:space-y-1.5">
                        <div className="h-2 md:h-2.5 lg:h-3 bg-color-emphasis rounded-full w-full"></div>
                        <div className="h-2 md:h-2.5 lg:h-3 bg-color-emphasis rounded-full w-4/5"></div>
                      </div>
                    </div>
                    <div className="bg-gradient-to-br from-purple-50 to-purple-100/30 rounded-lg p-2.5 md:p-3 lg:p-4">
                      <div className="h-2.5 md:h-3 lg:h-4 bg-color-secondary rounded-md w-1/2 mb-1.5 md:mb-2 lg:mb-2.5"></div>
                      <div className="space-y-1 md:space-y-1.5">
                        <div className="h-2 md:h-2.5 lg:h-3 bg-color-emphasis rounded-full w-full"></div>
                        <div className="h-2 md:h-2.5 lg:h-3 bg-color-emphasis rounded-full w-4/5"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Mobile Device - Enhanced realistic phone design */}
              <div className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 md:-bottom-8 md:-right-8 lg:-bottom-10 lg:-right-10 w-24 sm:w-28 md:w-36 lg:w-44">
                <div className="bg-gray-800 rounded-[24px] overflow-hidden shadow-xl border-4 border-gray-900 relative">
                  {/* Phone Notch */}
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-1/3 h-1.5 sm:h-2 md:h-3 bg-gray-900 rounded-b-lg z-10"></div>

                  {/* Phone Screen */}
                  <div className="bg-white overflow-hidden pt-3">
                    {/* Mobile Status Bar */}
                    <div className="h-2 sm:h-2.5 md:h-3 lg:h-4 bg-gray-50 border-b border-color-border flex items-center justify-between px-1.5 sm:px-2 md:px-3 lg:px-4">
                      <div className="text-[5px] sm:text-[6px] md:text-[7px] lg:text-[9px] font-medium text-color-emphasis">
                        12:30
                      </div>
                      <div className="flex items-center gap-0.5 md:gap-1">
                        <div className="h-0.5 w-0.5 sm:h-1 sm:w-1 md:h-1 md:w-1 bg-color-primary rounded-full"></div>
                        <div className="h-0.5 w-1 sm:h-1 sm:w-1.5 md:h-1 md:w-2 bg-color-emphasis rounded-full"></div>
                        <div className="h-0.5 w-0.5 sm:h-1 sm:w-1 md:h-1 md:w-1 bg-color-emphasis rounded-full"></div>
                        <div className="h-0.5 w-0.5 sm:h-1 sm:w-1 md:h-1 md:w-1 bg-color-emphasis rounded-full"></div>
                      </div>
                    </div>

                    {/* Mobile Content */}
                    <div className="p-1.5 sm:p-2 md:p-2.5 lg:p-3.5 space-y-1.5 sm:space-y-2 md:space-y-2.5 lg:space-y-3.5">
                      {/* Mobile Header */}
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-0.5 md:gap-1">
                          <div className="h-1.5 sm:h-2 md:h-2.5 lg:h-3 w-1.5 sm:w-2 md:w-2.5 lg:w-3 bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-sm"></div>
                          <div className="h-1.5 sm:h-2 md:h-2.5 lg:h-3 w-5 sm:w-6 md:w-8 lg:w-10 bg-color-emphasis rounded-sm"></div>
                        </div>
                        <div className="h-1.5 sm:h-2 md:h-2.5 lg:h-3 w-1.5 sm:w-2 md:w-2.5 lg:w-3 bg-color-border rounded-sm"></div>
                      </div>

                      {/* Mobile Hero */}
                      <div className="h-10 sm:h-12 md:h-16 lg:h-20 bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg flex items-center justify-center">
                        <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-7 md:h-7 lg:w-9 lg:h-9 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full flex items-center justify-center">
                          <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3.5 md:h-3.5 lg:w-4.5 lg:h-4.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] rounded-full"></div>
                        </div>
                      </div>

                      {/* Mobile Content */}
                      <div className="space-y-1 sm:space-y-1.5 md:space-y-2">
                        <div className="h-1.5 sm:h-2 md:h-2.5 lg:h-3 bg-color-emphasis rounded-sm w-2/3"></div>
                        <div className="h-1 sm:h-1.5 md:h-1.5 lg:h-2 bg-color-border rounded-full w-full"></div>
                        <div className="h-1 sm:h-1.5 md:h-1.5 lg:h-2 bg-color-border rounded-full w-4/5"></div>
                      </div>

                      {/* Mobile Buttons */}
                      <div className="flex gap-1 sm:gap-1.5 md:gap-2">
                        <div className="h-2 sm:h-2.5 md:h-3 lg:h-3.5 bg-gradient-to-r from-[var(--color-primary)] via-[var(--color-secondary)] to-[var(--color-accent)] rounded-md flex-1"></div>
                        <div className="h-2 sm:h-2.5 md:h-3 lg:h-3.5 bg-white border border-color-border rounded-md flex-1"></div>
                      </div>
                    </div>
                  </div>

                  {/* Phone Home Button/Bar */}
                  <div className="h-1 sm:h-1.5 md:h-2 lg:h-2.5 bg-color-border mx-auto w-1/3 rounded-full my-1 sm:my-1.5 md:my-2"></div>
                </div>
              </div>

              {/* Floating Elements - Responsive sizing */}
              <div className="absolute -top-2 -left-2 sm:-top-3 sm:-left-3 md:-top-4 md:-left-4 lg:-top-5 lg:-left-5 bg-white rounded p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-md border border-blue-100">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-blue-100 to-blue-50 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-color-primary" />
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base font-medium text-color-emphasis">
                      SEO
                    </div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base text-color-primary">
                      100/100
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-2 -left-6 sm:-bottom-3 sm:-left-8 md:-bottom-4 md:-left-10 lg:-bottom-5 lg:-left-12 bg-white rounded p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-md border border-purple-100">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-purple-100 to-purple-50 rounded-full flex items-center justify-center">
                    <Zap className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-color-secondary" />
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base font-medium text-color-emphasis">
                      Hız
                    </div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base text-color-secondary">
                      0.8s
                    </div>
                  </div>
                </div>
              </div>

              <div className="absolute top-1/3 -right-2 sm:-right-3 md:-right-4 lg:-right-5 bg-white rounded p-1.5 sm:p-2 md:p-3 lg:p-4 shadow-md border border-pink-100">
                <div className="flex items-center gap-1.5 sm:gap-2 md:gap-2.5 lg:gap-3">
                  <div className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 lg:w-8 lg:h-8 bg-gradient-to-br from-pink-100 to-pink-50 rounded-full flex items-center justify-center">
                    <Smartphone className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 text-color-accent" />
                  </div>
                  <div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base font-medium text-color-emphasis">
                      Mobil
                    </div>
                    <div className="text-[8px] sm:text-xs md:text-sm lg:text-base text-color-accent">
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
