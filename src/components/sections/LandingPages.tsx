import { Card } from "@/components/ui/card";
import { OutlineButton } from "@/components/ui/button-variants";

export default function LandingPages() {
  const whatsappLink = (message: string) =>
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  const pages = [
    {
      title: "Consultório Odontológico",
      image: "/placeholder.svg",
      message: "Olá, quero uma landing page para consultório odontológico. Origem: landing agentiss.shop.",
    },
    {
      title: "Restaurante Delivery",
      image: "/placeholder.svg",
      message: "Olá, quero uma landing page para restaurante delivery. Origem: landing agentiss.shop.",
    },
    {
      title: "Agência Imobiliária",
      image: "/placeholder.svg",
      message: "Olá, quero uma landing page para imobiliária. Origem: landing agentiss.shop.",
    },
  ];

  return (
    <section id="landing-pages" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">
            Landing Pages que{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">convertem</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Direcionam para WhatsApp, Instagram ou Facebook e aumentam suas conversões.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pages.map((page, index) => (
            <Card
              key={index}
              className="group bg-gradient-card backdrop-blur-xl border-border/20 p-4 shadow-card hover:shadow-glow hover:scale-105 transition-all duration-500"
            >
              <img
                src={page.image}
                alt={page.title}
                className="rounded-md mb-4 w-full h-48 object-cover bg-muted/20 border border-muted/30"
              />
              <h3 className="font-bold text-lg mb-4 group-hover:text-primary transition-colors">
                {page.title}
              </h3>
              <OutlineButton
                onClick={() => window.open(whatsappLink(page.message), '_blank')}
                className="w-full justify-center group-hover:border-primary/50 group-hover:text-primary"
              >
                Quero essa landing
              </OutlineButton>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

