import { Card } from "@/components/ui/card";
import { OutlineButton } from "@/components/ui/button-variants";

export default function Demos() {
  const whatsappLink = (message: string) => 
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  const demos = [
    {
      title: "Pizzaria — Upsell rápido",
      messages: [
        { from: 'user' as const, text: 'Boa noite! Tem pizza grande de pepperoni?' },
        { from: 'agent' as const, text: 'Temos sim! Hoje a grande sai por R$ 69. Quer adicionar borda recheada por +R$ 8? Chega em 30–40min.' },
        { from: 'user' as const, text: 'Pode ser com borda. Pago no cartão.' },
        { from: 'agent' as const, text: 'Perfeito! Pedido confirmado. Quer uma coquinha gelada por +R$ 7?' }
      ],
      cta: "Quero esse fluxo",
      message: "Olá, vi a demo de Pizzaria na agentiss.shop e quero implementar upsell no WhatsApp. Média de pedidos/dia: [digite]."
    },
    {
      title: "Clínica de Estética — Agenda & lembrete", 
      messages: [
        { from: 'user' as const, text: 'Faz limpeza de pele? Quanto custa?' },
        { from: 'agent' as const, text: 'Fazemos sim! R$ 189. Tenho horários amanhã 14:00 e 16:30. Qual prefere?' },
        { from: 'user' as const, text: '16:30.' },
        { from: 'agent' as const, text: 'Agendado! Envio um lembrete 1h antes e instruções pré-procedimento.' }
      ],
      cta: "Quero igual na minha clínica",
      message: "Olá, vi a demo de Clínica de Estética na agentiss.shop e quero agendamento com lembretes automáticos. Procedimento principal: [digite]."
    },
    {
      title: "Advocacia — Triagem inteligente",
      messages: [
        { from: 'user' as const, text: 'Sofri um acidente de trânsito, posso processar?' },
        { from: 'agent' as const, text: 'Sinto muito! Vou fazer 3 perguntas rápidas: data do acidente, se houve BO e se há laudos médicos.' },
        { from: 'user' as const, text: 'Foi dia 12/08, tem BO e laudo.' },
        { from: 'agent' as const, text: 'Ótimo. Posso agendar consultoria gratuita de 20min amanhã às 10:30?' }
      ],
      cta: "Quero essa triagem",
      message: "Olá, vi a demo de Advocacia na agentiss.shop e quero triagem automática (BO, datas, laudos). Especialidade: [digite]."
    }
  ];

  return (
    <section id="demos" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Demonstração por{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">nicho</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Veja como nossos atendentes de IA conduzem a conversa e geram valor.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <DemoCard key={index} demo={demo} whatsappLink={whatsappLink} />
          ))}
        </div>
      </div>
    </section>
  );
}

function DemoCard({ demo, whatsappLink }: { 
  demo: { 
    title: string; 
    messages: { from: 'user' | 'agent'; text: string }[]; 
    cta: string; 
    message: string;
  };
  whatsappLink: (message: string) => string;
}) {
  return (
    <Card className="group bg-gradient-card backdrop-blur-xl border-border/20 p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500">
      <h3 className="font-bold text-lg mb-4 group-hover:text-primary transition-colors">
        {demo.title}
      </h3>
      
      <div className="space-y-3 mb-6 max-h-80 overflow-y-auto">
        {demo.messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>
      
      <OutlineButton 
        onClick={() => window.open(whatsappLink(demo.message), '_blank')}
        className="w-full justify-center group-hover:border-primary/50 group-hover:text-primary"
      >
        {demo.cta}
      </OutlineButton>
    </Card>
  );
}

function ChatMessage({ message }: { message: { from: 'user' | 'agent'; text: string } }) {
  const isAgent = message.from === 'agent';
  
  return (
    <div className={`flex gap-2 items-start ${isAgent ? 'justify-end' : ''}`}>
      {!isAgent && <div className="w-6 h-6 rounded-full bg-muted/30 border border-muted/50 flex-shrink-0" />}
      <div className={`max-w-[85%] rounded-xl border px-3 py-2 text-sm ${
        isAgent 
          ? 'bg-success/20 border-success/30' 
          : 'bg-muted/20 border-muted/30'
      }`}>
        {message.text}
      </div>
      {isAgent && <div className="w-6 h-6 rounded-full bg-success/30 border border-success/50 flex-shrink-0" />}
    </div>
  );
}