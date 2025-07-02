import React from "react";

import HeroSection from "./HeroSection";
import ServicesSection from "./ServicesSection";
import PortfolioSection from "./PortfolioSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import ContactSection from "./ContactSection";

const Home = () => {
  return (
    <div className="font-sans">
      <HeroSection />
      <ServicesSection />
      <PortfolioSection />
      <TestimonialsSection />
      <CTASection />
      <ContactSection />
    </div>
  );
};

export default Home;
