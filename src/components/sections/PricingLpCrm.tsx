import { Card } from "@/components/ui/card";
import { OutlineButton } from "@/components/ui/button-variants";

export default function PricingLpCrm() {
  const whatsappLink = (message: string) =>
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  const lpPlans = [
    {
      title: "LP Essencial (Básica)",
      price: "R$ 697 – R$ 997",
      indicated:
        "Profissionais liberais, autônomos e pequenos negócios que querem presença online rápida.",
      features: [
        "Layout responsivo (desktop e mobile)",
        "Design clean e objetivo (cores + tipografia padrão)",
        "Formulário de contato simples (ou botão WhatsApp)",
        "Integração básica com Google Maps (se for local)",
        "SEO inicial (título, descrição e keywords principais)",
        "Deploy em domínio/subdomínio do cliente"
      ],
      sections: [
        "Hero (cabeçalho com CTA)",
        "Sobre/Serviços principais",
        "Depoimento ou portfólio simples",
        "Contato (formulário/WhatsApp/Localização)"
      ]
    },
    {
      title: "LP Performance (Intermediária)",
      price: "R$ 1.297 – R$ 1.997",
      indicated:
        "Negócios que precisam gerar leads qualificados e destacar diferenciais.",
      features: [
        "Tudo da versão básica +",
        "Identidade visual personalizada (cores, logo, imagens)",
        "Seção de diferenciais + ícones",
        "Prova social (reviews, depoimentos, “antes e depois”)",
        "Integração com ferramentas de captura de leads (Google Sheets, CRM, e-mail marketing)",
        "SEO otimizado para palavras-chave locais",
        "Deploy com CI/CD (GitHub Actions + Hostinger/Vercel)"
      ],
      sections: [
        "Hero (com call-to-action principal)",
        "Serviços/Diferenciais",
        "Benefícios (com ícones visuais)",
        "Galeria/Portfólio ou “Antes e Depois”",
        "Prova social (avaliações/reviews)",
        "CTA intermediário (ex: “fale agora no WhatsApp”)",
        "Contato/Mapa/FAQ"
      ]
    },
    {
      title: "LP Premium (Alta Conversão)",
      price: "R$ 2.497 – R$ 3.997",
      indicated:
        "Clínicas, empresas de médio porte, e negócios que querem alta taxa de conversão com storytelling + design de impacto.",
      features: [
        "Tudo da versão intermediária +",
        "Hero interativo (3D, animações com Framer Motion, efeitos de destaque)",
        "Prova social avançada (avaliações Google, Trustpilot, vídeo-depoimentos)",
        "Seção de comparativo/planos de serviço",
        "Blog/Artigos ou integração de conteúdo dinâmico",
        "Otimização de performance (Core Web Vitals, tempo de carregamento)",
        "Integração avançada: CRM, Google Ads, Pixel do Meta, Analytics",
        "Setup de remarketing (tags instaladas)"
      ],
      sections: [
        "Hero com animação/3D",
        "Sobre a empresa (com storytelling visual)",
        "Serviços/Diferenciais",
        "Benefícios (blocos visuais)",
        "Galeria/Portfólio",
        "Prova social avançada (reviews + vídeos)",
        "Planos/Comparativo de serviços",
        "FAQ interativo",
        "CTA estratégico (formulário avançado ou agendamento)",
        "Contato + Localização + Links sociais"
      ]
    }
  ];

  const crmPlans = [
    {
      title: "CRM Essencial (Básico)",
      price: "R$ 2.500 – R$ 4.000",
      indicated:
        "Pequenas empresas que querem organizar clientes e contatos em um só lugar.",
      features: [
        "Cadastro de clientes (nome, telefone, e-mail, histórico simples)",
        "Painel básico de visualização",
        "Filtros de busca e segmentação",
        "Exportação simples para CSV/Excel",
        "Controle de acessos (usuário e senha)",
        "Deploy em subdomínio próprio"
      ],
      modules: [
        "Cadastro e listagem de clientes",
        "Histórico básico de interações",
        "Exportação de relatórios simples"
      ]
    },
    {
      title: "CRM Performance (Intermediário)",
      price: "R$ 5.000 – R$ 8.000",
      indicated:
        "Empresas em crescimento que precisam gerenciar vendas e equipe de forma organizada.",
      features: [
        "Tudo da versão básica +",
        "Funil de vendas (pipeline Kanban)",
        "Registro de tarefas e follow-ups",
        "Relatórios de vendas e desempenho",
        "Integração com e-mail ou WhatsApp",
        "Automação simples (ex: lembrete de follow-up)",
        "Permissões por cargo (gestor, vendedor)"
      ],
      modules: [
        "Cadastro avançado de clientes",
        "Funil de vendas visual (Kanban)",
        "Agenda de tarefas e compromissos",
        "Relatórios de vendas",
        "Integração com comunicação (e-mail/WhatsApp)",
        "Controle de permissões de usuário"
      ]
    },
    {
      title: "CRM Premium (Avançado)",
      price: "R$ 10.000 – R$ 20.000+",
      indicated:
        "Clínicas, imobiliárias, empresas com grande volume de clientes que precisam de personalização, relatórios e automação.",
      features: [
        "Tudo da versão intermediária +",
        "Workflows automáticos (ex: disparo de mensagens, e-mails, lembretes automáticos)",
        "Integração com ferramentas externas (Google Calendar, ERP, sistemas financeiros)",
        "Dashboards interativos com métricas em tempo real",
        "Segmentação avançada de clientes (tags, categorias, filtros complexos)",
        "Controle multiusuário com diferentes permissões",
        "Mobile-friendly ou app dedicado",
        "Suporte e manutenção prioritária"
      ],
      modules: [
        "Cadastro completo e segmentado",
        "Funil de vendas avançado",
        "Agenda e calendário integrados",
        "Relatórios customizáveis",
        "Workflows automáticos",
        "Integrações externas (ERP, Google, etc.)",
        "Dashboards avançados",
        "Segmentação e tags",
        "Controle avançado de permissões",
        "Mobile/app dedicado"
      ]
    }
  ];

  return (
    <section id="pricing-lp-crm" className="py-20 bg-secondary/10">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Preços de <span className="bg-gradient-primary bg-clip-text text-transparent">LPs e CRMs</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Planos personalizados para presença digital e gestão de clientes.
          </p>
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">Landing Pages</h3>
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {lpPlans.map((plan, i) => (
            <PlanCard key={i} plan={plan} whatsappLink={whatsappLink} />
          ))}
        </div>

        <h3 className="text-2xl font-bold mb-8 text-center">CRMs</h3>
        <div className="grid md:grid-cols-3 gap-8">
          {crmPlans.map((plan, i) => (
            <PlanCard key={i} plan={plan} whatsappLink={whatsappLink} />
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanCard({
  plan,
  whatsappLink
}: {
  plan: {
    title: string;
    price: string;
    indicated: string;
    features: string[];
    sections?: string[];
    modules?: string[];
  };
  whatsappLink: (message: string) => string;
}) {
  return (
    <Card className="bg-gradient-card backdrop-blur-xl border-border/20 p-6 flex flex-col shadow-card">
      <h4 className="text-xl font-bold mb-2">{plan.title}</h4>
      <div className="text-2xl font-bold text-primary mb-2">{plan.price}</div>
      <p className="text-sm text-muted-foreground mb-4">{plan.indicated}</p>

      <div className="space-y-2 mb-4">
        {plan.features.map((feature, i) => (
          <div key={i} className="flex items-start gap-2 text-sm">
            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-1" />
            <span>{feature}</span>
          </div>
        ))}
      </div>

      {plan.sections && (
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">Seções:</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {plan.sections.map((section, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1" />
                <span>{section}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {plan.modules && (
        <div className="mb-4">
          <div className="text-sm font-medium mb-2">Módulos:</div>
          <ul className="space-y-1 text-sm text-muted-foreground">
            {plan.modules.map((module, i) => (
              <li key={i} className="flex items-start gap-2">
                <div className="w-1.5 h-1.5 bg-secondary rounded-full mt-1" />
                <span>{module}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      <OutlineButton
        onClick={() =>
          window.open(
            whatsappLink(`Quero saber mais sobre ${plan.title}. Origem: Planos LP/CRM agentiss.shop.`),
            '_blank'
          )
        }
        className="mt-auto w-full justify-center hover:border-primary/50 hover:text-primary"
      >
        Falar com vendas
      </OutlineButton>
    </Card>
  );
}

