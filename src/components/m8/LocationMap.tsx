const PROFILE_URL =
  "https://www.google.com/maps/search/?api=1&query=" +
  encodeURIComponent("M8 Distribuidora de Pneus, Av. Marginal BR-376, 2612 - São Pedro, São José dos Pinhais - PR");

export function LocationMap() {
  return (
    <section
      id="onde-estamos"
      aria-label="Localização M8 Distribuidora de Pneus"
      className="relative w-full"
    >
      <iframe
        title="Localização M8 Distribuidora de Pneus"
        src="https://www.google.com/maps?q=Av.%20Marginal%20BR-376%2C%202612%20-%20S%C3%A3o%20Pedro%2C%20S%C3%A3o%20Jos%C3%A9%20dos%20Pinhais%20-%20PR%2C%2083010-500&z=16&output=embed"
        loading="lazy"
        className="block h-[300px] w-full border-0 md:h-[420px] lg:h-[480px]"
      />
      <a
        href={PROFILE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="absolute bottom-4 right-4 inline-flex items-center bg-[var(--m8-red)] px-4 py-2 font-display text-[11px] uppercase tracking-[0.22em] text-white clip-chamfer-sm hard-shadow transition-transform hover:-translate-y-0.5"
      >
        Ver no Google Meu Negócio
      </a>
    </section>
  );
}
