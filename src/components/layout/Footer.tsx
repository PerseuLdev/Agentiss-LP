export default function Footer() {
  return (
    <footer className="py-16 border-t border-border/20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <div className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} AGENTISS — Agentes de IA & Landing Pages
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Termos
            </a>
            <a 
              href="#" 
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Política
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}