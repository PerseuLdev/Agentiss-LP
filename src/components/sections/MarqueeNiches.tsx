export default function MarqueeNiches() {
  const niches = [
    "Clínicas & Consultórios",
    "Imobiliárias", 
    "Educação & Cursos",
    "Oficinas & Serviços",
    "Beleza & Estética",
    "Academias",
    "E‑commerce & Suporte",
    "Restaurantes",
    "Pet Shops", 
    "Delivery & Logística",
    "Eventos",
    "Fintechs"
  ];

  // Duplicate array for seamless loop
  const duplicatedNiches = [...niches, ...niches, ...niches];

  return (
    <section className="py-8">
      <div className="container mx-auto px-6">
        <div className="relative overflow-hidden rounded-2xl border border-border/20 bg-gradient-card backdrop-blur-xl">
          <div className="flex animate-marquee hover:[animation-play-state:paused]">
            {duplicatedNiches.map((niche, index) => (
              <div
                key={index}
                className="flex-shrink-0 mx-4 py-4 px-6 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm font-semibold text-sm whitespace-nowrap"
              >
                {niche}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}