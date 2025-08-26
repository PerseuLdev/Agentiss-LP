import { ShineButton, OutlineButton } from "@/components/ui/button-variants";
import { Card } from "@/components/ui/card";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const whatsappLink = (message: string) =>
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  return (
    <section className="relative py-8 sm:py-12 lg:py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-hero animate-bg-shift opacity-60" />
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background:
            "radial-gradient(1000px 500px at 30% 20%, rgba(99,102,241,0.15), transparent 60%), radial-gradient(900px 400px at 70% 80%, rgba(168,85,247,0.12), transparent 60%)",
        }}
      />

      <div className="container mx-auto px-3 sm:px-4 lg:px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-6 lg:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 lg:space-y-8 animate-slide-up">
            <div className="space-y-3 sm:space-y-4 lg:space-y-6">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                Atendentes de IA que{" "}
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  vendem 24/7
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
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

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <ShineButton
                onClick={() => scrollToSection("pricing")}
                size="lg"
                className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 w-full sm:w-auto"
              >
                Ver Planos
              </ShineButton>
              <OutlineButton
                size="lg"
                className="text-sm sm:text-base lg:text-lg px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 w-full sm:w-auto"
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

            {/* Social Icons */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-xs sm:text-sm text-muted-foreground">Conecte-se:</span>
              <div className="flex gap-3">
                <SocialIcon href="https://wa.me/5514991071072" icon="whatsapp" />
                <SocialIcon href="#" icon="instagram" />
                <SocialIcon href="#" icon="facebook" />
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:gap-6 max-w-md">
              <Card className="p-2.5 sm:p-3 lg:p-4 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="text-xs sm:text-sm text-muted-foreground">
                  Tempo economizado (média)
                </div>
                <div className="text-xl sm:text-2xl font-bold text-primary">~12h</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">por semana</div>
              </Card>
              <Card className="p-2.5 sm:p-3 lg:p-4 bg-card/50 backdrop-blur-sm border-border/50">
                <div className="text-xs sm:text-sm text-muted-foreground">
                  SLA primeira resposta
                </div>
                <div className="text-xl sm:text-2xl font-bold text-success">&lt; 5s</div>
                <div className="text-[10px] sm:text-xs text-muted-foreground">sempre</div>
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

function SocialIcon({ href, icon }: { href: string; icon: 'whatsapp' | 'instagram' | 'facebook' }) {
  const iconContent = {
    whatsapp: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.486"/>
      </svg>
    ),
    instagram: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    ),
    facebook: (
      <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
      </svg>
    )
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-8 h-8 rounded-full bg-muted/20 border border-border/30 hover:bg-muted/40 hover:border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground transition-all duration-300 hover:scale-110"
    >
      {iconContent[icon]}
    </a>
  );
}
