// Perfil da empresa no Google (Google Meu Negócio), pelo CID do perfil.
const PROFILE_URL = "https://maps.google.com/?cid=5755380305554683355";

// Mapa incorporado vinculado ao perfil (mostra nome, nota e avaliações do Google),
// com zoom regional mostrando parte de Curitiba e a região metropolitana.
const EMBED_URL =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d60000!2d-49.235!3d-25.495!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dcfbe6b5ef8205%3A0x4fdf37e503ddb5db!2sM8%20Distribuidora%20de%20Pneus!5e0!3m2!1spt-BR!2sbr!4v1760731200000";

export function LocationMap() {
  return (
    <section
      id="onde-estamos"
      aria-label="Localização M8 Distribuidora de Pneus"
      className="relative w-full"
    >
      <iframe
        title="Localização M8 Distribuidora de Pneus"
        src={EMBED_URL}
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
