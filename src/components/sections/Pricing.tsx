import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ShineButton } from "@/components/ui/button-variants";
import { Badge } from "@/components/ui/badge";

type Plan = {
  name: string;
  tier: "basic" | "pro" | "premium";
  features: string[];
  limit: string;
  featured: boolean;
};

export default function Pricing() {
  const [channel, setChannel] = useState<'wpp' | 'wpp_ig' | 'wpp_ig_fb'>('wpp');
  const [contract, setContract] = useState<'1y' | '2y'>('1y');

  const whatsappLink = (message: string) => 
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  const channelLabels = {
    wpp: 'WhatsApp',
    wpp_ig: 'WhatsApp + Instagram',
    wpp_ig_fb: 'WhatsApp + Instagram + Facebook'
  };

  const basePrices = {
    wpp: { basic: 397, pro: 597, premium: 997 },
    wpp_ig: { basic: 597, pro: 797, premium: 1197 },
    wpp_ig_fb: { basic: 997, pro: 1297, premium: 1697 }
  };

  const getPrice = (tier: keyof typeof basePrices['wpp']) => {
    const basePrice = basePrices[channel][tier];
    return contract === '2y' ? Math.round(basePrice * 0.85) : basePrice;
  };

  const plans: Plan[] = [
    {
      name: 'Básico — Atende+',
      tier: 'basic' as const,
      features: ['Transcreve áudio', 'Marca consulta', 'Respostas rápidas'],
      limit: 'Até 300 atendimentos/mês',
      featured: false
    },
    {
      name: 'Pro Performance',
      tier: 'pro' as const,
      features: ['Tudo do Básico', 'Lê PDF', 'Qualificação avançada'],
      limit: 'Até 1200 atendimentos/mês',
      featured: true
    },
    {
      name: 'Premium Voice AI',
      tier: 'premium' as const,
      features: ['Tudo do Pro', 'Responde áudio com voz', 'Fluxos avançados'],
      limit: 'Até 3000 atendimentos/mês',
      featured: false
    }
  ];

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Planos e{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">canais</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Selecione o canal e o tempo de contrato. Limites: <strong className="text-foreground">Básico até 300</strong>,
            <strong className="text-foreground"> Pro até 1200</strong>, 
            <strong className="text-foreground"> Premium até 3000</strong> atendimentos/mês.
          </p>
        </div>

        {/* Controls */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-8">
          {/* Channel Selector */}
          <div className="flex flex-wrap items-center gap-3 w-full justify-center md:w-auto">
            <span className="text-sm text-muted-foreground">Canal:</span>
            <div className="flex flex-col sm:flex-row w-full sm:w-auto bg-muted/20 backdrop-blur-sm border border-border/30 rounded-lg p-1 gap-1">
              {Object.entries(channelLabels).map(([key, label]) => (
                <Button
                  key={key}
                  variant={channel === key ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setChannel(key as typeof channel)}
                  className={`w-full sm:w-auto ${channel === key ? "bg-primary shadow-primary" : ""}`}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>

          {/* Contract Selector */}
          <div className="flex flex-wrap items-center gap-3 w-full justify-center md:w-auto">
            <span className="text-sm text-muted-foreground">Tempo:</span>
            <div className="flex bg-muted/20 backdrop-blur-sm border border-border/30 rounded-lg p-1 gap-1">
              <Button
                variant={contract === '1y' ? "default" : "ghost"}
                size="sm"
                onClick={() => setContract('1y')}
                className={`w-full sm:w-auto ${contract === '1y' ? "bg-primary shadow-primary" : ""}`}
              >
                1 ano
              </Button>
              <Button
                variant={contract === '2y' ? "default" : "ghost"}
                size="sm"
                onClick={() => setContract('2y')}
                className={`w-full sm:w-auto flex items-center gap-1 ${contract === '2y' ? "bg-success shadow-primary" : ""}`}
              >
                <span>2 anos</span>
                <Badge className="ml-1 bg-success/20 text-success">-15%</Badge>
              </Button>
            </div>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {plans.map((plan) => (
            <PricingCard
              key={plan.tier}
              plan={plan}
              price={getPrice(plan.tier)}
              channel={channelLabels[channel]}
              contract={contract}
              whatsappLink={whatsappLink}
            />
          ))}
          
          {/* Enterprise Card */}
          <Card className="relative bg-gradient-card backdrop-blur-xl border-border/20 p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500">
            <h3 className="text-xl font-bold mb-2">Enterprise</h3>
            <div className="text-3xl font-bold mb-2">Sob consulta</div>
            <div className="text-sm text-muted-foreground mb-4">&gt; 3000 atendimentos/mês</div>
            
            <ul className="space-y-2 mb-6 text-sm">
              {['Canais adicionais', 'SLA dedicado', 'Onboarding'].map((feature) => (
                <li key={feature} className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                  {feature}
                </li>
              ))}
            </ul>
            
            <Button
              variant="outline"
              className="w-full"
              onClick={() => window.open(whatsappLink(`Quero o Plano Enterprise (+3000/mês) em ${channelLabels[channel]}. Necessito SLA dedicado e onboarding. Origem: Planos agentiss.shop.`), '_blank')}
            >
              Falar com vendas
            </Button>
          </Card>
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-muted-foreground">
            Voz TTS, excedentes de atendimentos e integrações premium podem ser cobrados à parte.
          </p>
        </div>
      </div>
    </section>
  );
}

function PricingCard({
  plan,
  price,
  channel,
  contract,
  whatsappLink
}: {
  plan: Plan;
  price: number;
  channel: string;
  contract: '1y' | '2y';
  whatsappLink: (message: string) => string;
}) {
  const message = `Quero o Plano ${plan.name} (${channel}) no contrato ${contract === '1y' ? '1 ano' : '2 anos -15%'}. Limite: ${plan.limit}. Origem: Planos agentiss.shop.`;

  return (
    <Card className={`relative bg-gradient-card backdrop-blur-xl border-border/20 p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500 ${plan.featured ? 'border-primary/30' : ''}`}>
      {plan.featured && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary shadow-primary">
          Recomendado
        </Badge>
      )}
      
      <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
      <div className="text-3xl font-bold mb-2 text-primary">
        R$ {price}
        <span className="text-sm font-normal text-muted-foreground">/mês</span>
      </div>
      <div className="text-sm text-muted-foreground mb-4">{plan.limit}</div>
      
      <ul className="space-y-2 mb-6 text-sm">
        {plan.features.map((feature: string) => (
          <li key={feature} className="flex items-center gap-2">
            <div className="w-1.5 h-1.5 bg-primary rounded-full" />
            {feature}
          </li>
        ))}
      </ul>
      
      {plan.featured ? (
        <ShineButton
          className="w-full justify-center"
          onClick={() => window.open(whatsappLink(message), '_blank')}
        >
          Escolher
        </ShineButton>
      ) : (
        <Button
          variant="outline"
          className="w-full"
          onClick={() => window.open(whatsappLink(message), '_blank')}
        >
          Escolher
        </Button>
      )}
    </Card>
  );
}