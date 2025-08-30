import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import MarqueeNiches from "@/components/sections/MarqueeNiches";
import Demos from "@/components/sections/Demos";
import Features from "@/components/sections/Features";
import LandingPages from "@/components/sections/LandingPages";
import CRMSection from "@/components/sections/CRMSection";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Header />
      
      <main>
        <Hero />
        <MarqueeNiches />
        <Demos />
        <Features />
        <LandingPages />
        <CRMSection />
        <Pricing />
        <Testimonials />
        <FAQ />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
