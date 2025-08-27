import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function LandingPages() {
  const whatsappLink = (message: string) =>
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  const tiers = [
    {
      name: "Básica",
      price: "R$ 500 – R$ 900",
      features: [
        "1 página simples (Hero + CTA + contato)",
        "Layout com base em template",
        "Responsividade básica",
        "Formulário simples (ou botão WhatsApp)",
        "Cliente fornece os textos"
      ],
      message:
        "Quero Landing Page Básica. Origem: landing pages agentiss.shop."
    },
    {
      name: "Intermediária",
      price: "R$ 900 – R$ 1.500",
      features: [
        "4 a 6 seções (Hero, Dores, Benefícios, Serviços, Depoimentos, CTA)",
        "Design customizado (Tailwind/ShadCN)",
        "Botão WhatsApp / Formulário conectado a e-mail",
        "Ajustes básicos de copywriting",
        "Estrutura modular responsiva"
      ],
      message:
        "Quero Landing Page Intermediária. Origem: landing pages agentiss.shop."
    },
    {
      name: "Premium",
      price: "R$ 2.000 – R$ 4.000",
      features: [
        "6+ seções (Hero, Features avançadas, Prova social, FAQ, Pricing, etc.)",
        "Copywriting profissional focado em conversão",
        "SEO on-page",
        "Integrações com CRM / e-mail marketing",
        "Automação (ex.: disparo automático)",
        "Testes A/B e relatórios",
        "Suporte pós-entrega"
      ],
      message:
        "Quero Landing Page Premium. Origem: landing pages agentiss.shop."
    }
  ];

  return (
    <section id="landing-pages" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">
            Landing Pages que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              convertem
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Páginas rápidas para direcionar tráfego e captar leads.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {tiers.map((tier) => (
            <Card
              key={tier.name}
              className="relative bg-gradient-card backdrop-blur-xl border-border/20 p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500"
            >
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="text-2xl font-bold mb-4 text-primary">
                {tier.price}
              </div>
              <ul className="space-y-2 mb-6 text-sm">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button
                variant="outline"
                className="w-full"
                onClick={() =>
                  window.open(whatsappLink(tier.message), "_blank")
                }
              >
                Falar com vendas
              </Button>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
