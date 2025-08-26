import { Card } from "@/components/ui/card";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Clínica Cardio+",
      role: "Saúde",
      text: "Agendamento automatizado e lembretes reduziram faltas em 19%.",
      avatar: "💙"
    },
    {
      name: "Imobiliária Luz",
      role: "Imóveis", 
      text: "Qualificação de leads via WhatsApp agilizou visitas e propostas.",
      avatar: "🏠"
    },
    {
      name: "Curso Alfa",
      role: "Educação",
      text: "LP + atendente de IA aumentaram conversões em 24%.",
      avatar: "📚"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Casos de{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">sucesso</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TestimonialCard({ testimonial }: { 
  testimonial: { name: string; role: string; text: string; avatar: string }
}) {
  return (
    <Card className="group bg-gradient-card backdrop-blur-xl border-border/20 p-6 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xl">
          {testimonial.avatar}
        </div>
        <div>
          <div className="font-bold group-hover:text-primary transition-colors">
            {testimonial.name}
          </div>
          <div className="text-sm text-muted-foreground">{testimonial.role}</div>
        </div>
      </div>
      
      <blockquote className="text-foreground/90 italic">
        "{testimonial.text}"
      </blockquote>
    </Card>
  );
}