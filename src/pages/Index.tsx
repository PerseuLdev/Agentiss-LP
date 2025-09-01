import { useEffect } from "react";
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
  // SEO optimization
  useEffect(() => {
    document.title = "AGENTISS — Agentes de IA (Atendimento 24/7) & Landing Pages";
    
    const setMeta = (name: string, content: string, isProperty = false) => {
      const selector = isProperty ? `meta[property='${name}']` : `meta[name='${name}']`;
      let meta = document.head.querySelector(selector) as HTMLMetaElement;
      
      if (!meta) {
        meta = document.createElement('meta');
        if (isProperty) {
          meta.setAttribute('property', name);
        } else {
          meta.setAttribute('name', name);
        }
        document.head.appendChild(meta);
      }
      
      meta.setAttribute('content', content);
    };

    setMeta('description', 'Agentes de IA no WhatsApp, Instagram e Facebook: tiram dúvidas, marcam/confirmam consultas e qualificam leads. Também criamos Landing Pages que direcionam para as redes e aumentam conversões.');
    setMeta('keywords', 'atendimento automático, atendente virtual, agendamento WhatsApp, chatbot Instagram, chatbot Facebook, landing page, captação de leads');
    setMeta('og:title', 'AGENTISS — Agentes de IA & Landing Pages', true);
    setMeta('og:description', 'Atendimento 24/7 com marcação de consultas e LPs que convertem.', true);
    setMeta('og:type', 'website', true);
  }, []);

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
