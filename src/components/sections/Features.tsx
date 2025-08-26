import { Card } from "@/components/ui/card";
import { OutlineButton } from "@/components/ui/button-variants";

export default function Features() {
  const whatsappLink = (message: string) => 
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  const features = [
    {
      icon: "💬",
      title: "Atendimento 24/7",
      description: "Tira dúvidas, envia instruções e coleta dados sem filas.",
      cta: "Quero atender 24/7",
      message: "Quero atendimento 24/7 com agendamento e qualificação. Canais: [Whats, IG, FB]. Segmento: [digite]. Origem: features agentiss.shop."
    },
    {
      icon: "📅",
      title: "Agenda & Confirmação",
      description: "Propõe horários, confirma presença e envia lembretes.",
      cta: "Quero agendar automático",
      message: "Quero agenda e confirmação automáticas integradas ao meu calendário. Origem: features agentiss.shop."
    },
    {
      icon: "🔗",
      title: "Integrações",
      description: "CRM/Calendário, leitura de PDF e transcrição de áudios.",
      cta: "Quero integrar",
      message: "Preciso integrar CRM/Calendário e ler PDFs/áudios. Origem: features agentiss.shop."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Atendimento automático que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">resolve</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Respostas imediatas, qualificação de leads, <strong className="text-foreground">agendamento/confirmação</strong> e 
            integrações com CRM/Calendário. Multicanal: WhatsApp, Instagram e Facebook.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} feature={feature} whatsappLink={whatsappLink} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatureCard({ feature, whatsappLink }: { 
  feature: { icon: string; title: string; description: string; cta: string; message: string };
  whatsappLink: (message: string) => string;
}) {
  return (
    <Card className="group relative p-8 bg-gradient-card backdrop-blur-xl border-border/20 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500 overflow-hidden">
      {/* Hover effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="text-4xl mb-6 select-none animate-float" style={{ animationDelay: `${Math.random() * 2}s` }}>
          {feature.icon}
        </div>
        
        <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
          {feature.title}
        </h3>
        
        <p className="text-muted-foreground mb-6 leading-relaxed">
          {feature.description}
        </p>
        
        <OutlineButton 
          onClick={() => window.open(whatsappLink(feature.message), '_blank')}
          className="w-full justify-center group-hover:border-primary/50 group-hover:text-primary"
        >
          {feature.cta}
        </OutlineButton>
      </div>
      
      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
        <div className="absolute inset-[1px] rounded-lg border border-primary/20" />
      </div>
    </Card>
  );
}