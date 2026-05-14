import type { ReactNode } from "react";
import { WhatsAppIcon } from "./Logo";

interface BtnProps {
  href: string;
  children: ReactNode;
  className?: string;
  external?: boolean;
  type?: "button" | "submit";
}

export function PrimaryCTA({ href, children, className = "", external }: BtnProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center bg-[var(--m8-red)] px-6 py-4 font-display uppercase tracking-[0.18em] text-sm sm:text-base text-white clip-chamfer btn-shine italic hard-shadow transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

export function OutlineCTA({ href, children, className = "", external }: BtnProps) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={`inline-flex items-center justify-center px-6 py-4 font-display uppercase tracking-[0.18em] text-sm sm:text-base text-white clip-chamfer border-chrome-dark italic transition-transform hover:-translate-y-0.5 ${className}`}
    >
      {children}
    </a>
  );
}

export function WhatsAppCTA({ href, children, className = "" }: BtnProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 bg-[var(--m8-green)] px-6 py-4 font-display uppercase tracking-[0.18em] text-sm sm:text-base text-white clip-chamfer btn-shine italic hard-shadow transition-transform hover:-translate-y-0.5 ${className}`}
    >
      <WhatsAppIcon className="h-5 w-5" />
      {children}
    </a>
  );
}