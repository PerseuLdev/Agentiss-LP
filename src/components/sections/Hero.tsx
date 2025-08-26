import { ShineButton, OutlineButton } from "@/components/ui/button-variants";
import { Card } from "@/components/ui/card";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappLink = (message: string) =>
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero animate-bg-shift opacity-60" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(1000px 500px at 30% 20%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(900px 400px at 70% 80%, rgba(168,85,247,0.12), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-6 lg:space-y-8 animate-slide-up">
            <div className="space-y-4 lg:space-y-6">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight">
                Atendentes de IA que{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  vendem 24/7
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl leading-relaxed">
                Tire dúvidas em tempo real,{" "}
                <strong className="text-foreground">
                  marque e confirme consultas
                </strong>
                ,<strong className="text-foreground"> qualifique leads</strong>{" "}
                e integre com WhatsApp, Instagram e Facebook. Também criamos{" "}
                <strong className="text-foreground">Landing Pages</strong> que
                direcionam para as redes e aumentam a conversão.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row flex-wrap gap-4">
              <ShineButton
                onClick={() => scrollToSection("pricing")}
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3"
              >
                Ver Planos
              </ShineButton>
              <OutlineButton
                size="lg"
                className="text-base sm:text-lg px-6 sm:px-8 py-3"
                onClick={() =>
                  window.open(
                    whatsappLink(
                      "Olá, vi a demo no hero da agentiss.shop e quero testar agora. Objetivo: marcar consultas/qualificar leads. Negócio: [digite]."
                    ),
                    "_blank"
                  )
                }
              >
                Pedir Demo
              </OutlineButton>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4 lg:gap-6 max-w-md">
              <Card className="p-3 lg:p-4 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="text-sm text-muted-foreground">
                  Tempo economizado (média)
                </div>
                <div className="text-2xl font-bold text-primary">~12h</div>
                <div className="text-xs text-muted-foreground">por semana</div>
              </Card>
              <Card className="p-3 lg:p-4 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="text-sm text-muted-foreground">
                  SLA primeira resposta
                </div>
                <div className="text-2xl font-bold text-success">&lt; 5s</div>
                <div className="text-xs text-muted-foreground">sempre</div>
              </Card>
            </div>
          </div>

          {/* Chat Mockup */}
          <div className="animate-fade-in">
            <ChatMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function ChatMockup() {
  return (
    <Card className="relative bg-gradient-card backdrop-blur-xl border-border/20 p-4 sm:p-6 shadow-card hover:shadow-glow transition-all duration-500 transform hover:scale-[1.02] animate-float">
      {/* Header */}
      <div className="flex items-center gap-3 pb-4 border-b border-border/30">
        <div className="w-10 h-10 rounded-full bg-success/30 border-2 border-success/50 flex items-center justify-center">
          <div className="w-3 h-3 bg-success rounded-full animate-glow-pulse" />
        </div>
        <div>
          <div className="font-semibold">Clínica Vida — Atendimento</div>
          <div className="text-xs text-muted-foreground">
            online agora • WhatsApp
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="py-4 space-y-3 max-h-64 sm:max-h-80 overflow-y-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-muted/30 hover:scrollbar-thumb-muted/50 scrollbar-thumb-rounded-full pr-2">
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
