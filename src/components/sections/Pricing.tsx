import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShineButton } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";

interface Plan {
  name: string;
  tier: string;
  features: string[];
  limit: string;
  featured: boolean;
  price?: { whatsapp: number; instagram: number; facebook: number };
}

// Landing Pages Plans
const landingPagePlans: Plan[] = [
  {
    name: "LP Essencial",
    tier: "lp-essencial",
    limit: "até 4 seções",
    price: { whatsapp: 697, instagram: 697, facebook: 697 },
    features: [
      "Layout responsivo (desktop e mobile)",
      "Design clean e objetivo",
      "Formulário de contato simples",
      "Integração básica com Google Maps",
      "SEO inicial (título, descrição, keywords)",
      "Deploy em domínio/subdomínio do cliente",
      "Hero + Sobre + Depoimento + Contato"
    ],
    featured: false,
  },
  {
    name: "LP Performance", 
    tier: "lp-performance",
    limit: "até 7 seções",
    price: { whatsapp: 1297, instagram: 1297, facebook: 1297 },
    features: [
      "Tudo da versão Essencial +",
      "Identidade visual personalizada",
      "Seção de diferenciais com ícones",
      "Prova social (reviews, depoimentos)",
      "Integração com ferramentas de captura",
      "SEO otimizado para palavras-chave locais",
      "Deploy com CI/CD automático",
      "Galeria/Portfólio + FAQ"
    ],
    featured: true,
  },
  {
    name: "LP Premium",
    tier: "lp-premium", 
    limit: "até 10 seções",
    price: { whatsapp: 2497, instagram: 2497, facebook: 2497 },
    features: [
      "Tudo da versão Performance +",
      "Hero interativo (3D, animações)",
      "Prova social avançada + vídeo-depoimentos",
      "Seção de comparativo/planos",
      "Blog/Artigos integrados",
      "Otimização Core Web Vitals",
      "Integração CRM, Google Ads, Meta Pixel",
      "Setup de remarketing completo"
    ],
    featured: false,
  },
];

// CRM Plans
const crmPlans: Plan[] = [
  {
    name: "CRM Essencial",
    tier: "crm-essencial",
    limit: "até 3 módulos",
    price: { whatsapp: 2500, instagram: 2500, facebook: 2500 },
    features: [
      "Cadastro de clientes completo", 
      "Painel básico de visualização",
      "Filtros de busca e segmentação",
      "Exportação para CSV/Excel",
      "Controle de acessos básico",
      "Deploy em subdomínio próprio",
      "Histórico simples de interações"
    ],
    featured: false,
  },
  {
    name: "CRM Performance",
    tier: "crm-performance",
    limit: "até 6 módulos",
    price: { whatsapp: 5000, instagram: 5000, facebook: 5000 },
    features: [
      "Tudo da versão Essencial +",
      "Funil de vendas visual (Kanban)",
      "Registro de tarefas e follow-ups",
      "Relatórios de vendas e desempenho",
      "Integração com email/WhatsApp",
      "Automação simples (lembretes)",
      "Permissões por cargo (gestor, vendedor)"
    ],
    featured: true,
  },
  {
    name: "CRM Premium",
    tier: "crm-premium",
    limit: "até 10 módulos", 
    price: { whatsapp: 10000, instagram: 10000, facebook: 10000 },
    features: [
      "Tudo da versão Performance +",
      "Workflows automáticos avançados",
      "Integração com Google Calendar, ERP",
      "Dashboards interativos em tempo real",
      "Segmentação avançada (tags, filtros)",
      "Controle multiusuário completo",
      "Mobile-friendly ou app dedicado",
      "Suporte e manutenção prioritária"
    ],
    featured: false,
  },
];

// AI Agents Plans  
const aiAgentPlans: Plan[] = [
  {
    name: "Starter",
    tier: "starter",
    limit: "até 500 mensagens/mês",
    price: { whatsapp: 197, instagram: 247, facebook: 297 },
    features: [
      "Atendimento automático 24/7",
      "Integração WhatsApp Business",
      "Respostas inteligentes com IA",
      "Histórico de conversas (30 dias)",
      "Suporte via chat",
    ],
    featured: false,
  },
  {
    name: "Professional",
    tier: "professional", 
    limit: "até 2.000 mensagens/mês",
    price: { whatsapp: 397, instagram: 497, facebook: 597 },
    features: [
      "Tudo do plano Starter",
      "Integração Instagram e Facebook",
      "Agendamento de consultas automático",
      "Qualificação avançada de leads", 
      "Relatórios e métricas detalhadas",
      "Histórico de conversas (6 meses)",
      "Suporte prioritário",
    ],
    featured: true,
  },
  {
    name: "Business",
    tier: "business",
    limit: "até 10.000 mensagens/mês", 
    price: { whatsapp: 797, instagram: 997, facebook: 1197 },
    features: [
      "Tudo do plano Professional",
      "Múltiplos agentes IA por empresa",
      "Integração com CRM/ERP",
      "Automações personalizadas",
      "Análise de sentimentos",
      "Histórico de conversas (ilimitado)",
      "Suporte 24/7 dedicado",
      "Treinamento personalizado",
    ],
    featured: false,
  },
];

const Pricing = () => {
  const [selectedChannel, setSelectedChannel] = useState<'whatsapp' | 'instagram' | 'facebook'>('whatsapp');
  const [contractDuration, setContractDuration] = useState<'1year' | '2year'>('1year');
  const [selectedService, setSelectedService] = useState<'ai-agents' | 'landing-pages' | 'crm'>('ai-agents');

  const whatsappLink = (message: string) => {
    const encodedMessage = encodeURIComponent(message);
    return `https://wa.me/5511999999999?text=${encodedMessage}`;
  };

  const getPrice = (plan: Plan) => {
    if (!plan.price) return 0;
    const basePrice = plan.price[selectedChannel];
    return contractDuration === '2year' ? Math.round(basePrice * 0.8) : basePrice;
  };

  const getCurrentPlans = () => {
    switch (selectedService) {
      case 'ai-agents': return aiAgentPlans;
      case 'landing-pages': return landingPagePlans;
      case 'crm': return crmPlans;
      default: return aiAgentPlans;
    }
  };

  const getServiceTitle = () => {
    switch (selectedService) {
      case 'ai-agents': return 'Agentes de IA';
      case 'landing-pages': return 'Landing Pages';
      case 'crm': return 'Sistemas CRM';
      default: return 'Agentes de IA';
    }
  };

  const getServiceSubtitle = () => {
    switch (selectedService) {
      case 'ai-agents': return 'Atendimento automatizado que vende enquanto você dorme';
      case 'landing-pages': return 'Páginas que convertem visitantes em clientes pagantes';
      case 'crm': return 'Organize e automatize seu relacionamento com clientes';
      default: return 'Escolha a solução perfeita para seu negócio';
    }
  };

  return (
    <section id="pricing" className="py-16 md:py-24 bg-gradient-to-br from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            {getServiceTitle()} - Planos e Preços
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            {getServiceSubtitle()}
          </p>
        </div>

        {/* Service Selection */}
        <div className="flex flex-col md:flex-row gap-2 mb-8 max-w-md mx-auto bg-muted/50 p-1 rounded-lg">
          <button
            onClick={() => setSelectedService('ai-agents')}
            className={`px-4 py-3 rounded-md text-sm font-medium transition-all ${
              selectedService === 'ai-agents'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Agentes IA
          </button>
          <button
            onClick={() => setSelectedService('landing-pages')}
            className={`px-4 py-3 rounded-md text-sm font-medium transition-all ${
              selectedService === 'landing-pages'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            Landing Pages
          </button>
          <button
            onClick={() => setSelectedService('crm')}
            className={`px-4 py-3 rounded-md text-sm font-medium transition-all ${
              selectedService === 'crm'
                ? 'bg-background text-foreground shadow-sm'
                : 'text-muted-foreground hover:text-foreground'
            }`}
          >
            CRM
          </button>
        </div>

        {/* Channel Selection - Only for AI Agents */}
        {selectedService === 'ai-agents' && (
          <div className="flex flex-col md:flex-row gap-2 mb-8 max-w-md mx-auto bg-muted/50 p-1 rounded-lg">
            <button
              onClick={() => setSelectedChannel('whatsapp')}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-all ${
                selectedChannel === 'whatsapp'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              WhatsApp
            </button>
            <button
              onClick={() => setSelectedChannel('instagram')}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-all ${
                selectedChannel === 'instagram'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Instagram
            </button>
            <button
              onClick={() => setSelectedChannel('facebook')}
              className={`px-4 py-3 rounded-md text-sm font-medium transition-all ${
                selectedChannel === 'facebook'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Facebook
            </button>
          </div>
        )}

        {/* Contract Duration - Only for AI Agents */}
        {selectedService === 'ai-agents' && (
          <div className="flex gap-2 mb-12 max-w-sm mx-auto bg-muted/50 p-1 rounded-lg">
            <button
              onClick={() => setContractDuration('1year')}
              className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all ${
                contractDuration === '1year'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              Anual
            </button>
            <button
              onClick={() => setContractDuration('2year')}
              className={`flex-1 px-4 py-3 rounded-md text-sm font-medium transition-all relative ${
                contractDuration === '2year'
                  ? 'bg-background text-foreground shadow-sm'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              2 Anos
              <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs px-2 py-0.5 rounded-full">
                20% OFF
              </span>
            </button>
          </div>
        )}

        {/* Plans */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {getCurrentPlans().map((plan) => (
            <PricingCard
              key={plan.tier}
              plan={plan}
              price={selectedService === 'ai-agents' ? getPrice(plan) : plan.price?.[selectedChannel] || 0}
              whatsappLink={whatsappLink}
              selectedChannel={selectedChannel}
              selectedService={selectedService}
            />
          ))}
        </div>

        {/* Enterprise Card - Only for AI Agents */}
        {selectedService === 'ai-agents' && (
          <div className="flex justify-center">
            <Card className="relative bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm border-border/20 p-6 shadow-lg hover:shadow-xl transition-all duration-300 max-w-sm">
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <div className="text-3xl font-bold mb-2">Sob consulta</div>
              <div className="text-sm text-muted-foreground mb-4">&gt; 10.000 mensagens/mês</div>
              
              <ul className="space-y-2 mb-6 text-sm">
                {['Canais adicionais', 'SLA dedicado', 'Onboarding personalizado'].map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button
                variant="outline"
                className="w-full"
                onClick={() => window.open(whatsappLink(`Quero o Plano Enterprise (+10000/mês) para ${selectedChannel}. Necessito SLA dedicado e onboarding. Origem: Planos AGENTISS.`), '_blank')}
              >
                Falar com vendas
              </Button>
            </Card>
          </div>
        )}
      </div>
    </section>
  );
};

interface PricingCardProps {
  plan: Plan;
  price: number;
  whatsappLink: (message: string) => string;
  selectedChannel: string;
  selectedService: string;
}

const PricingCard = ({ plan, price, whatsappLink, selectedChannel, selectedService }: PricingCardProps) => {
  const handlePlanSelection = () => {
    const serviceMap = {
      'ai-agents': 'Agentes de IA',
      'landing-pages': 'Landing Page',
      'crm': 'Sistema CRM'
    };
    const serviceName = serviceMap[selectedService as keyof typeof serviceMap];
    const channelText = selectedService === 'ai-agents' ? ` para ${selectedChannel}` : '';
    const message = `Olá! Tenho interesse no plano ${plan.name} de ${serviceName}${channelText}. Gostaria de mais informações sobre a implementação.`;
    window.open(whatsappLink(message), '_blank');
  };

  return (
    <Card className={`relative bg-gradient-to-br from-card/50 to-muted/30 backdrop-blur-sm border-border/20 p-6 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 ${
      plan.featured ? 'border-primary/30 ring-1 ring-primary/20' : ''
    }`}>
      {plan.featured && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-primary-foreground shadow-lg">
          Recomendado
        </Badge>
      )}
      
      <div className="mb-4">
        <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
        <div className="mb-2">
          <div className="flex items-baseline gap-1">
            <p className="text-3xl font-bold text-primary">
              {selectedService === 'ai-agents' ? (
                <>R$ {price}<span className="text-lg text-muted-foreground font-normal">/mês</span></>
              ) : (
                <>R$ {price.toLocaleString()}<span className="text-lg text-muted-foreground font-normal"> única</span></>
              )}
            </p>
          </div>
        </div>
        <p className="text-sm text-muted-foreground">{plan.limit}</p>
      </div>
      
      <ul className="space-y-2 mb-6 text-sm">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
      
      {plan.featured ? (
        <ShineButton
          className="w-full justify-center"
          onClick={handlePlanSelection}
        >
          Escolher Plano
        </ShineButton>
      ) : (
        <Button
          variant="outline"
          className="w-full hover:bg-primary/5"
          onClick={handlePlanSelection}
        >
          Escolher Plano
        </Button>
      )}
    </Card>
  );
};

export default Pricing;