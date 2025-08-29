import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { ShineButton } from "@/components/ui/button-variants";
import { Menu, X, Home, Settings, Users, MessageSquare, BarChart3, HelpCircle, Phone } from "lucide-react";

interface MobileSidebarProps {
  navItems: Array<{ label: string; id: string }>;
  scrollToSection: (id: string) => void;
  whatsappLink: (message: string) => string;
}

export default function MobileSidebar({ navItems, scrollToSection, whatsappLink }: MobileSidebarProps) {
  const [open, setOpen] = useState(false);

  const iconMap: Record<string, React.ComponentType<any>> = {
    features: Settings,
    demos: Users,
    pricing: BarChart3,
    testimonials: MessageSquare,
    faq: HelpCircle,
    contact: Phone
  };

  const handleNavigation = (id: string) => {
    scrollToSection(id);
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="sm" className="md:hidden">
          <Menu className="w-5 h-5" />
        </Button>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-80 p-0">
        <div className="flex flex-col h-full bg-gradient-to-b from-background to-muted/20">
          {/* Header */}
          <div className="p-6 border-b border-border/20">
            <div className="flex items-center gap-3 mb-4">
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
            <p className="text-sm text-muted-foreground">
              Automação inteligente para seu negócio
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex-1 px-4 py-6 space-y-2">
            {navItems.map((item) => {
              const IconComponent = iconMap[item.id] || Home;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  className="w-full flex items-center gap-3 px-4 py-3 text-left rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all duration-200 group"
                >
                  <IconComponent className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span className="font-medium">{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* CTA Section */}
          <div className="p-6 border-t border-border/20">
            <div className="space-y-3">
              <ShineButton
                onClick={() => {
                  window.open(whatsappLink("Olá, vim do menu mobile da AGENTISS e quero uma demo. Setor: [digite]. Canais: [Whats/IG/FB]. Melhor horário?"), '_blank');
                  setOpen(false);
                }}
                className="w-full justify-center"
              >
                Solicitar Demo
              </ShineButton>
              <p className="text-xs text-center text-muted-foreground">
                Resposta em menos de 5 minutos
              </p>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
}