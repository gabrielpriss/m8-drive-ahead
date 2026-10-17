// Fundo do topo como <img> real (e não background CSS) para o navegador
// descobrir a imagem no HTML e baixar com prioridade alta, já no tamanho da tela.
// AVIF primeiro, WebP como reserva. O degradê escuro fica numa camada separada.
import avif640 from "@/assets/hero/banner-640.avif";
import avif1024 from "@/assets/hero/banner-1024.avif";
import avif1672 from "@/assets/hero/banner-1672.avif";
import webp640 from "@/assets/hero/banner-640.webp";
import webp1024 from "@/assets/hero/banner-1024.webp";
import webp1672 from "@/assets/hero/banner-1672.webp";

export const HERO_AVIF_SRCSET = `${avif640} 640w, ${avif1024} 1024w, ${avif1672} 1672w`;
export const HERO_WEBP_SRCSET = `${webp640} 640w, ${webp1024} 1024w, ${webp1672} 1672w`;
export const HERO_SIZES = "100vw";
export { avif1024 as HERO_AVIF_DEFAULT };

export function HeroBackground() {
  return (
    <div className="absolute inset-0 -z-10" aria-hidden="true">
      <picture>
        <source type="image/avif" srcSet={HERO_AVIF_SRCSET} sizes={HERO_SIZES} />
        <source type="image/webp" srcSet={HERO_WEBP_SRCSET} sizes={HERO_SIZES} />
        <img
          src={webp1024}
          alt=""
          width={1672}
          height={941}
          fetchPriority="high"
          decoding="sync"
          className="h-full w-full object-cover object-center"
        />
      </picture>
      <div
        className="absolute inset-0"
        style={{ backgroundImage: "linear-gradient(rgba(0,0,0,0.35), rgba(0,0,0,0.6))" }}
      />
    </div>
  );
}
