import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShineButton } from "@/components/ui/button-variants";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const whatsappLink = (message: string) => 
    `https://wa.me/5514991071072?text=${encodeURIComponent(message)}`;

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'Atendimento', id: 'features' },
    { label: 'Demos', id: 'demos' },
    { label: 'Planos', id: 'pricing' },
    { label: 'Casos', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contato', id: 'contact' }
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <Logo />
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-6 ml-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="relative text-sm font-medium text-muted-foreground hover:text-foreground transition-colors after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-primary after:transition-all hover:after:w-full"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <ShineButton 
              onClick={() => window.open(whatsappLink("Olá, vim do topo do site agentiss.shop e quero uma demo. Setor: [digite]. Canais: [Whats/IG/FB]. Melhor horário?"), '_blank')}
            >
              Solicitar Demo
            </ShineButton>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border/20 py-4 animate-slide-up">
            <nav className="flex flex-col space-y-3">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-left text-sm font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                >
                  {item.label}
                </button>
              ))}
              <div className="pt-4 border-t border-border/20">
                <ShineButton 
                  onClick={() => window.open(whatsappLink("Olá, vim do topo do site agentiss.shop e quero uma demo. Setor: [digite]. Canais: [Whats/IG/FB]. Melhor horário?"), '_blank')}
                  className="w-full justify-center"
                >
                  Solicitar Demo
                </ShineButton>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

function Logo() {
  return (
    <div className="flex items-center gap-3 select-none">
      <div className="w-10 h-10 rounded-xl bg-gradient-primary border border-primary/30 flex items-center justify-center shadow-glow">
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          className="text-white"
        >
          <circle cx="6" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="12" cy="12" r="2" stroke="currentColor" strokeWidth="1.5" />
          <circle cx="18" cy="7" r="2" stroke="currentColor" strokeWidth="1.5" />
          <path d="M7.2 8.2L10.9 11.3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M13.1 11.3L16.8 8.2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>
      <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
        AGENTISS
      </span>
    </div>
  );
}