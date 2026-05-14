import type { ReactNode } from "react";

export function SectionHeader({
  title,
  subtitle,
  align = "left",
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      <h2 className="font-display text-chrome text-3xl uppercase italic leading-[0.95] sm:text-5xl lg:text-6xl">
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-white/75 sm:text-lg">{subtitle}</p>}
    </div>
  );
}