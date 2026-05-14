import type { ReactNode } from "react";

export function SectionHeader({
  title,
  subtitle,
  align = "left",
  eyebrow,
  level = 1,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
  eyebrow?: ReactNode;
  level?: 1 | 2;
}) {
  const sizeClass =
    level === 1
      ? "text-3xl sm:text-5xl lg:text-6xl"
      : "text-2xl sm:text-4xl lg:text-5xl";
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <p
          className={`mb-3 font-display text-[11px] uppercase tracking-[0.28em] text-[var(--m8-red)] ${
            align === "center" ? "" : ""
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-display text-chrome uppercase italic leading-[0.95] ${sizeClass}`}
      >
        {title}
      </h2>
      {subtitle && <p className="mt-4 text-base text-white/75 sm:text-lg">{subtitle}</p>}
    </div>
  );
}