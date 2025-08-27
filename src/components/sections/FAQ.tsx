import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const faqData = [
    {
      q: "Preciso ter site ou dá para começar só com WhatsApp?",
      a: "Dá para começar só com WhatsApp. O atendente virtual funciona direto no app."
    },
    {
      q: "Quantos atendentes de IA posso ter?",
      a: "Você pode contratar múltiplos atendentes de acordo com seus canais e planos."
    },
    {
      q: "Como funciona o limite de atendimentos/mês?",
      a: "Cada interação concluída conta como 1 atendimento. Temos limites de 300, 1200, 3000 ou Enterprise."
    },
    {
      q: "Tenho agenda no Google/Outlook — dá para integrar?",
      a: "Sim, integramos com os principais calendários."
    },
    {
      q: "Vocês fazem Landing Pages também?",
      a: "Sim, criamos LPs rápidas e otimizadas que aumentam a conversão."
    },
    {
      q: "Tem teste gratuito?",
      a: "Sim, oferecemos piloto grátis de até 7 dias em alguns planos."
    }
  ];

  return (
    <section id="faq" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Perguntas{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">frequentes</span>
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqData.map((faq, index) => (
            <FAQItem key={index} faq={faq} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ faq }: { faq: { q: string; a: string } }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="bg-gradient-card backdrop-blur-xl border-border/20 overflow-hidden">
      <Button
        variant="ghost"
        className="w-full justify-between text-left p-6 h-auto hover:bg-transparent whitespace-normal"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-semibold text-lg flex-1 text-left">{faq.q}</span>
        <ChevronDown
          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </Button>
      
      {isOpen && (
        <div className="px-6 pb-6 animate-slide-up">
          <p className="text-muted-foreground leading-relaxed">{faq.a}</p>
        </div>
      )}
    </Card>
  );
}