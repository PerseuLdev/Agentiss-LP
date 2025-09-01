import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { BackgroundPaths } from "@/components/ui/background-paths";
import { Phone, MessageCircle, Volume2, BarChart3, Clock, Zap } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const whatsappLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/5511999999999?text=${encodedMessage}`;
  };

  const primaryAction = (
    <Button 
      variant="ghost"
      className="rounded-[1.15rem] px-8 py-6 text-lg font-semibold backdrop-blur-md 
      bg-white/95 hover:bg-white/100 dark:bg-black/95 dark:hover:bg-black/100 
      text-black dark:text-white transition-all duration-300 
      hover:-translate-y-0.5 border border-black/10 dark:border-white/10
      hover:shadow-md dark:hover:shadow-neutral-800/50"
      onClick={() => scrollToSection('pricing')}
    >
      <span className="opacity-90 hover:opacity-100 transition-opacity">
        Ver Todos os Planos
      </span>
      <span className="ml-3 opacity-70 hover:opacity-100 hover:translate-x-1.5 transition-all duration-300">
        →
      </span>
    </Button>
  );

  const secondaryAction = (
    <Button 
      variant="outline" 
      size="lg"
      className="px-8 py-6 text-lg font-semibold border-2 hover:bg-primary/5 transition-all duration-300 bg-background/50 backdrop-blur-sm"
      onClick={() => window.open(whatsappLink('Olá! Gostaria de solicitar uma demonstração dos serviços da AGENTISS.'), '_blank')}
    >
      Solicitar Demo Gratuita
    </Button>
  );

  return (
    <section className="relative">
      <BackgroundPaths
        title="Automatize seu atendimento e multiplique o faturamento"
        subtitle="Agentes de IA no WhatsApp, Instagram e Facebook com landing pages que convertem. Mais comodidade para você e mais vendas para o seu negócio."
        primaryAction={primaryAction}
        secondaryAction={secondaryAction}
      />
      
      {/* Stats Section */}
      <div className="relative bg-gradient-to-br from-background to-muted/20 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 text-center border-primary/20 bg-primary/5 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-4">
                <Clock className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">87%</p>
              <p className="text-sm text-muted-foreground">tempo economizado</p>
            </Card>
            
            <Card className="p-6 text-center border-primary/20 bg-primary/5 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">&lt; 3s</p>
              <p className="text-sm text-muted-foreground">tempo de resposta</p>
            </Card>
            
            <Card className="p-6 text-center border-primary/20 bg-primary/5 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">+340%</p>
              <p className="text-sm text-muted-foreground">mais conversões</p>
            </Card>
            
            <Card className="p-6 text-center border-primary/20 bg-primary/5 backdrop-blur-sm hover:bg-primary/10 transition-all duration-300">
              <div className="flex items-center justify-center w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-4">
                <MessageCircle className="h-6 w-6 text-primary" />
              </div>
              <p className="text-3xl font-bold text-primary mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">disponibilidade</p>
            </Card>
          </div>
          
          {/* Chat Mockup */}
          <div className="mt-16 flex justify-center">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatMockup() {
  return (
    <Card className="relative bg-gradient-card backdrop-blur-xl border-border/20 p-4 sm:p-6 shadow-card hover:shadow-glow transition-all duration-600 transform hover:scale-[1.02] animate-float">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-border/30">
        <div className="w-10 h-10 rounded-full bg-success/30 border-2 border-success/50 flex items-center justify-center">
          <div className="w-3 h-3 bg-success rounded-full animate-gentle-glow" />
        </div>
        <div>
          <div className="font-semibold">Clínica Vida — Atendimento</div>
          <div className="text-xs text-muted-foreground">
            online agora • WhatsApp
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="py-4 space-y-3 max-h-56 sm:max-h-64 lg:max-h-80 overflow-y-auto custom-scrollbar pr-2">
        <UserMessage>Olá! Vocês têm atendimento amanhã à tarde?</UserMessage>
        <AgentMessage>
          Olá! Posso agendar para <strong>15:30</strong> ou{" "}
          <strong>17:00</strong>. Prefere qual horário? Posso confirmar seus
          dados.
        </AgentMessage>
        <UserMessage>17:00 está ótimo. Precisa de algum documento?</UserMessage>
        <AgentMessage>
          Perfeito! Documento com foto. Se preferir, envie um{" "}
          <strong>áudio</strong> com seus dados.
        </AgentMessage>
        <AudioMessage isUser duration="0:07" />
        <AudioMessage
          duration="0:05"
          text="Dados confirmados: Maria Silva, CPF 123.456.789-00, telefone (11) 99999-9999. Consulta agendada para 17:00!"
        />
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-3 gap-2 sm:gap-3 pt-4 border-t border-border/30">
        <MetricCard label="Consultas marcadas" value="+18%" />
        <MetricCard label="Primeira resposta" value="< 5s" />
        <MetricCard label="Satisfação" value="9.2/10" />
      </div>
    </Card>
  );
}

function UserMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-start">
      <div className="w-7 h-7 rounded-full bg-muted/30 border border-muted/50" />
      <div className="max-w-[80%] bg-muted/20 border border-muted/30 rounded-2xl px-3 py-2 text-sm">
        {children}
      </div>
    </div>
  );
}

function AgentMessage({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-2 items-start justify-end">
      <div className="max-w-[80%] bg-success/20 border border-success/30 rounded-2xl px-3 py-2 text-sm">
        {children}
      </div>
      <div className="w-7 h-7 rounded-full bg-success/30 border border-success/50" />
    </div>
  );
}

function AudioMessage({
  isUser = false,
  duration,
  text,
}: {
  isUser?: boolean;
  duration: string;
  text?: string;
}) {
  return (
    <div className={`flex gap-2 items-start ${isUser ? "" : "justify-end"}`}>
      {isUser && (
        <div className="w-7 h-7 rounded-full bg-muted/30 border border-muted/50" />
      )}
      <div
        className={`max-w-[80%] ${
          isUser
            ? "bg-muted/20 border-muted/30"
            : "bg-success/20 border-success/30"
        } border rounded-2xl px-3 py-2`}
      >
        <div className="flex items-center gap-2 text-sm">
          <div className="w-4 h-4 text-current">🎵</div>
          <div className="flex gap-1">
            {[...Array(4)].map((_, i) => (
              <div
                key={i}
                className="w-1 h-3 bg-current/60 rounded animate-pulse"
                style={{ animationDelay: `${i * 0.1}s` }}
              />
            ))}
          </div>
          <span className="text-xs opacity-80">{duration}</span>
        </div>
        {text && <div className="mt-1 text-xs opacity-90">{text}</div>}
        <div className="mt-1 text-[10px] opacity-60">
          {isUser ? "Áudio do cliente" : "Resposta por voz"}
        </div>
      </div>
      {!isUser && (
        <div className="w-7 h-7 rounded-full bg-success/30 border border-success/50" />
      )}
    </div>
  );
}

function MetricCard({ label, value }: { label: string; value: string }) {
  return (
    <div className="bg-background/20 backdrop-blur-sm border border-border/30 rounded-lg p-1.5 sm:p-2 text-center">
      <div className="text-[9px] sm:text-[10px] text-muted-foreground">
        {label}
      </div>
      <div className="text-xs sm:text-sm font-bold text-primary">{value}</div>
    </div>
  );
}

export default Hero;
