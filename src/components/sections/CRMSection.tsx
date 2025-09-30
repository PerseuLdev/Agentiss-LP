import { Card } from "@/components/ui/card";
import { OutlineButton } from "@/components/ui/button-variants";

export default function CRMSection() {
  const whatsappLink = (message: string) => 
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  const crmSolutions = [
    {
      title: "CRM para Consultórios",
      features: [
        "📋 Cadastro completo de pacientes",
        "📅 Agenda integrada com lembretes",
        "💰 Controle financeiro e faturamento",
        "📊 Relatórios de atendimento",
        "🔔 Notificações automáticas"
      ],
      mockup: {
        screens: [
          { name: "Dashboard", color: "bg-blue-500/20" },
          { name: "Pacientes", color: "bg-green-500/20" },
          { name: "Agenda", color: "bg-purple-500/20" },
          { name: "Financeiro", color: "bg-orange-500/20" }
        ]
      },
      description: "Sistema completo para gestão de clínicas e consultórios médicos",
      cta: "Quero esse CRM",
      message: "Olá, vi o CRM para Consultórios na agentiss.shop e preciso de um sistema similar. Tipo de clínica/consultório: [digite]."
    },
    {
      title: "CRM para Imobiliárias", 
      features: [
        "🏠 Cadastro de imóveis com fotos",
        "👥 Gestão de clientes e leads",
        "📱 Integração WhatsApp/Instagram",
        "📈 Funil de vendas e visitas",
        "💼 Comissões e contratos"
      ],
      mockup: {
        screens: [
          { name: "Imóveis", color: "bg-emerald-500/20" },
          { name: "Clientes", color: "bg-cyan-500/20" },
          { name: "Visitas", color: "bg-amber-500/20" },
          { name: "Vendas", color: "bg-red-500/20" }
        ]
      },
      description: "Plataforma especializada para corretores e imobiliárias",
      cta: "Quero vender mais",
      message: "Olá, vi o CRM para Imobiliárias na agentiss.shop e quero otimizar minha gestão. Tamanho da equipe: [digite]."
    },
    {
      title: "CRM para E-commerce",
      features: [
        "🛒 Gestão de pedidos e estoque",
        "📦 Rastreamento de entregas",
        "⭐ Sistema de avaliações",
        "🎯 Campanhas de remarketing",
        "📊 Analytics de vendas"
      ],
      mockup: {
        screens: [
          { name: "Pedidos", color: "bg-violet-500/20" },
          { name: "Produtos", color: "bg-pink-500/20" },
          { name: "Clientes", color: "bg-indigo-500/20" },
          { name: "Analytics", color: "bg-teal-500/20" }
        ]
      },
      description: "Solução completa para lojas virtuais e marketplace",
      cta: "Quero escalar vendas",
      message: "Olá, vi o CRM para E-commerce na agentiss.shop e preciso otimizar minha loja. Plataforma atual: [digite]."
    }
  ];

  return (
    <section id="crm-section" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Planilhas travam seu crescimento. Organize tudo em um CRM sob medida
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Pare de caçar dados em arquivos diferentes. Centralize leads, atendimentos e finanças com automações conectadas
            aos agentes de IA, relatórios em tempo real e gatilhos que mantêm sua equipe focada no que gera receita.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {crmSolutions.map((crm, index) => (
            <CRMCard key={index} crm={crm} whatsappLink={whatsappLink} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CRMCard({ crm, whatsappLink }: { 
  crm: { 
    title: string; 
    features: string[];
    mockup: {
      screens: { name: string; color: string }[];
    };
    description: string;
    cta: string; 
    message: string;
  };
  whatsappLink: (message: string) => string;
}) {
  return (
    <Card className="group bg-gradient-card backdrop-blur-xl border-border/20 overflow-hidden shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500">
      {/* CRM Mockup Interface */}
      <div className="relative bg-gradient-to-br from-secondary/10 to-primary/5 p-6 border-b border-border/20">
        <div className="bg-background/90 backdrop-blur-sm rounded-lg border border-border/30 overflow-hidden">
          {/* Header Bar */}
          <div className="bg-muted/20 px-3 py-2 border-b border-border/20">
            <div className="flex items-center gap-2">
              <div className="flex gap-1">
                <div className="w-2 h-2 rounded-full bg-red-500/60" />
                <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
                <div className="w-2 h-2 rounded-full bg-green-500/60" />
              </div>
              <div className="text-xs text-muted-foreground ml-2 font-mono">
                {crm.title.split(' ')[2] || 'Sistema'}
              </div>
            </div>
          </div>
          
          {/* Mock Interface */}
          <div className="p-3">
            <div className="grid grid-cols-2 gap-2 mb-3">
              {crm.mockup.screens.map((screen, i) => (
                <div 
                  key={i} 
                  className={`${screen.color} border border-border/30 rounded p-2 text-center`}
                >
                  <div className="text-xs font-medium">{screen.name}</div>
                </div>
              ))}
            </div>
            
            {/* Mock Chart */}
            <div className="bg-muted/10 rounded border border-border/20 p-2">
              <div className="flex items-end gap-1 h-8">
                {[3, 7, 4, 8, 5, 6, 9].map((height, i) => (
                  <div 
                    key={i} 
                    className="bg-primary/40 rounded-sm flex-1 transition-all duration-300 group-hover:bg-primary/60" 
                    style={{ height: `${height * 3}px` }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Content */}
      <div className="p-6">
        <h3 className="font-bold text-lg mb-4 group-hover:text-primary transition-colors">
          {crm.title}
        </h3>
        
        <div className="space-y-2 mb-4">
          {crm.features.map((feature, i) => (
            <div key={i} className="text-sm flex items-start gap-2">
              <span className="flex-shrink-0">{feature.split(' ')[0]}</span>
              <span className="text-muted-foreground">{feature.split(' ').slice(1).join(' ')}</span>
            </div>
          ))}
        </div>
        
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          {crm.description}
        </p>
        
        <OutlineButton 
          onClick={() => window.open(whatsappLink(crm.message), '_blank')}
          className="w-full justify-center group-hover:border-primary/50 group-hover:text-primary"
        >
          {crm.cta}
        </OutlineButton>
      </div>
    </Card>
  );
}