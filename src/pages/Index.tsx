import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import BusinessesSection from "@/components/BusinessesSection";
import StatsSection from "@/components/StatsSection";
import NewsSection from "@/components/NewsSection";
import InvestorsSection from "@/components/InvestorsSection";
import CareersSection from "@/components/CareersSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <BusinessesSection />
      <StatsSection />
      <NewsSection />
      <InvestorsSection />
      <CareersSection />
      <Footer />
    </div>
  );
};

export default Index;
