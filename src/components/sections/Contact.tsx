import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { ShineButton, OutlineButton } from "@/components/ui/button-variants";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const whatsappLink = (message: string) => 
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Olá, enviei o formulário do contato no agentiss.shop e quero conversar. Nome: ${formData.name}, Email: ${formData.email}, Mensagem: ${formData.message}`;
    window.open(whatsappLink(message), '_blank');
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-6">
        <Card className="max-w-4xl mx-auto bg-gradient-card backdrop-blur-xl border-border/20 p-8 shadow-card">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Left Column - Content */}
            <div className="space-y-6">
              <div>
                <h3 className="text-3xl font-bold mb-4">
                  Pronto para testar um{" "}
                  <span className="bg-gradient-primary bg-clip-text text-transparent">
                    atendente virtual?
                  </span>
                </h3>
                <p className="text-muted-foreground text-lg leading-relaxed">
                  Agende uma demo de 20 minutos ou peça um piloto gratuito.
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <ShineButton 
                  onClick={() => window.open(whatsappLink('Olá, quero uma demo. Origem: seção Contato agentiss.shop. Disponibilidade: [digite].'), '_blank')}
                  size="lg"
                >
                  Pedir demo
                </ShineButton>
                <OutlineButton 
                  onClick={() => scrollToSection('pricing')}
                  size="lg"
                >
                  Ver preços
                </OutlineButton>
              </div>

              {/* Contact Info */}
              <div className="space-y-3 pt-6 border-t border-border/30">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-success/20 border border-success/30 flex items-center justify-center">
                    📞
                  </div>
                  <span className="text-muted-foreground">WhatsApp: (14) 99107-1072</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center">
                    ⚡
                  </div>
                  <span className="text-muted-foreground">Resposta em até 5 minutos</span>
                </div>
              </div>
            </div>

            {/* Right Column - Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="name">Nome</Label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Seu nome"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">E-mail</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@exemplo.com"
                  required
                  className="bg-background/50 border-border/50 focus:border-primary/50"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Mensagem</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Conte o que precisa"
                  rows={4}
                  className="bg-background/50 border-border/50 focus:border-primary/50 resize-none"
                />
              </div>

              <ShineButton type="submit" className="w-full justify-center" size="lg">
                Enviar mensagem
              </ShineButton>
            </form>
          </div>
        </Card>
      </div>
    </section>
  );
}