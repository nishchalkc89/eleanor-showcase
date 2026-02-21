import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import DifferentiatorsSection from "@/components/DifferentiatorsSection";
import PastPerformanceSection from "@/components/PastPerformanceSection";
import WorkSection from "@/components/WorkSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <DifferentiatorsSection />
      <PastPerformanceSection />
      <WorkSection />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
