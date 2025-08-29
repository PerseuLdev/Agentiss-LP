import { Card } from "@/components/ui/card";
import { OutlineButton } from "@/components/ui/button-variants";

export default function LandingPages() {
  const whatsappLink = (message: string) => 
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  const landingPages = [
    {
      title: "Clínica Odontológica",
      mockup: {
        headline: "Sorriso perfeito em 30 dias",
        subheadline: "Agende sua consulta gratuita",
        features: ["Avaliação sem custo", "Planos de pagamento", "Tecnologia 3D"],
        cta: "AGENDAR CONSULTA GRÁTIS"
      },
      description: "Landing page otimizada para captação de pacientes com foco em conversão",
      cta: "Quero essa LP",
      message: "Olá, vi o mockup de LP para Clínica Odontológica na agentiss.shop e quero uma landing page similar. Meu negócio: [digite]."
    },
    {
      title: "Academia / Personal",
      mockup: {
        headline: "Transforme seu corpo em 90 dias",
        subheadline: "Plano personalizado + acompanhamento",
        features: ["Treino personalizado", "Nutrição inclusa", "Resultados garantidos"],
        cta: "COMEÇAR HOJE"
      },
      description: "LP com depoimentos e transformações para gerar leads qualificados",
      cta: "Quero captar alunos",
      message: "Olá, vi o mockup de LP para Academia/Personal na agentiss.shop e quero uma similar. Especialidade/modalidade: [digite]."
    },
    {
      title: "Curso Online",
      mockup: {
        headline: "Domine Excel em 7 dias",
        subheadline: "Do básico ao avançado",
        features: ["Certificado incluso", "Suporte direto", "Acesso vitalício"],
        cta: "GARANTIR VAGA"
      },
      description: "Landing page para infoprodutos com senso de urgência e escassez",
      cta: "Quero vender curso",
      message: "Olá, vi o mockup de LP para Curso Online na agentiss.shop e quero uma landing page similar. Meu curso/produto: [digite]."
    }
  ];

  return (
    <section id="landing-pages" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Landing Pages que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">convertem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Páginas otimizadas para capturar leads e direcionar para WhatsApp, Instagram ou Facebook. 
            Design responsivo e copy persuasiva.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {landingPages.map((lp, index) => (
            <LandingPageCard key={index} landingPage={lp} whatsappLink={whatsappLink} />
          ))}
        </div>
      </div>
    </section>
  );
}

function LandingPageCard({ landingPage, whatsappLink }: { 
  landingPage: { 
    title: string; 
    mockup: {
      headline: string;
      subheadline: string;
      features: string[];
      cta: string;
    };
    description: string;
    cta: string; 
    message: string;
  };
  whatsappLink: (message: string) => string;
}) {
  return (
    <Card className="group bg-gradient-card backdrop-blur-xl border-border/20 overflow-hidden shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500">
      {/* Mockup Preview */}
      <div className="relative bg-gradient-to-br from-primary/10 to-secondary/10 p-6 border-b border-border/20">
        <div className="bg-background/90 backdrop-blur-sm rounded-lg p-4 border border-border/30">
          <h3 className="text-lg font-bold text-center mb-2 group-hover:text-primary transition-colors">
            {landingPage.mockup.headline}
          </h3>
          <p className="text-sm text-muted-foreground text-center mb-3">
            {landingPage.mockup.subheadline}
          </p>
          
          <div className="space-y-2 mb-4">
            {landingPage.mockup.features.map((feature, i) => (
              <div key={i} className="flex items-center gap-2 text-xs">
                <div className="w-1.5 h-1.5 rounded-full bg-success" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
          
          <div className="bg-primary/20 text-primary text-xs font-bold text-center py-2 rounded border border-primary/30">
            {landingPage.mockup.cta}
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h4 className="font-bold text-lg mb-3 group-hover:text-primary transition-colors">
          {landingPage.title}
        </h4>
        
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {landingPage.description}
        </p>
        
        <OutlineButton 
          onClick={() => window.open(whatsappLink(landingPage.message), '_blank')}
          className="w-full justify-center group-hover:border-primary/50 group-hover:text-primary"
        >
          {landingPage.cta}
        </OutlineButton>
      </div>
    </Card>
  );
}