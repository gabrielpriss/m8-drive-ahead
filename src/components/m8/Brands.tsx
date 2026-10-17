import { SectionHeader } from "./SectionHeader";
import westlake from "@/assets/brands/westlake.webp";
import compasal from "@/assets/brands/compasal.webp";
import kingboss from "@/assets/brands/kingboss.webp";
import linglong from "@/assets/brands/linglong.webp";
import xbri from "@/assets/brands/xbri.webp";
import ovation from "@/assets/brands/ovation.webp";
import sunset from "@/assets/brands/sunset.webp";
import lanvigator from "@/assets/brands/lanvigator.webp";
import invovic from "@/assets/brands/invovic.webp";

const BRANDS = [
  { name: "Westlake", img: westlake },
  { name: "Compasal", img: compasal },
  { name: "Kingboss", img: kingboss },
  { name: "Linglong", img: linglong },
  { name: "XBRI", img: xbri },
  { name: "Ovation", img: ovation },
  { name: "Sunset", img: sunset },
  { name: "Lanvigator", img: lanvigator },
  { name: "Invovic", img: invovic },
];

// Lista duplicada para o loop contínuo e sem emendas.
const TRACK = [...BRANDS, ...BRANDS];

export function Brands() {
  return (
    <section id="marcas" className="bg-[var(--graphite)] py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <SectionHeader
          level={2}
          title="Marcas em estoque"
          subtitle="Trabalhamos com as marcas mais buscadas pelo seu cliente."
        />
      </div>
      <div
        className="group relative mt-12 overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
          WebkitMaskImage:
            "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        }}
      >
        <ul className="flex w-max animate-marquee items-center gap-6 px-3 group-hover:[animation-play-state:paused]">
          {TRACK.map((b, i) => (
            <li
              key={`${b.name}-${i}`}
              aria-hidden={i >= BRANDS.length ? true : undefined}
              className="flex h-24 w-44 shrink-0 items-center justify-center bg-white p-[5px] clip-chamfer-sm shadow-[6px_6px_0_0_rgba(0,0,0,0.55)] ring-1 ring-black/10"
            >
              <img
                src={b.img}
                alt={b.name}
                loading="lazy"
                decoding="async"
                width={264}
                height={120}
                className="h-full w-full object-contain"
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
