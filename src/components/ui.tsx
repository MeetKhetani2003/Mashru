import { Link } from "react-router-dom";
import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "../utils/cn";

type ButtonLinkProps = {
  children: ReactNode;
  to: string;
  variant?: "primary" | "secondary" | "light";
  className?: string;
};

export function ButtonLink({ children, to, variant = "primary", className }: ButtonLinkProps) {
  const isExternal = to.startsWith("http") || to.startsWith("tel:") || to.startsWith("https://wa.me");
  const classes = cn(
    "inline-flex min-h-12 items-center justify-center rounded-full px-6 text-sm font-extrabold tracking-[-0.01em] transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mustard)]",
    variant === "primary" && "bg-[var(--green)] text-[var(--cream)] shadow-[0_18px_45px_rgba(7,63,47,0.22)] hover:bg-[var(--green-2)]",
    variant === "secondary" && "border border-[var(--green)]/20 bg-[rgba(255,248,232,0.72)] text-[var(--green)] hover:border-[var(--mustard)] hover:bg-[var(--cream)]",
    variant === "light" && "bg-[var(--cream)] text-[var(--green)] shadow-[0_18px_45px_rgba(0,0,0,0.2)] hover:bg-white",
    className,
  );

  if (isExternal) {
    return (
      <a href={to} className={classes} target={to.startsWith("http") ? "_blank" : undefined} rel={to.startsWith("http") ? "noreferrer" : undefined}>
        {children}
      </a>
    );
  }

  return (
    <Link to={to} className={classes}>
      {children}
    </Link>
  );
}

type SectionHeaderProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  light?: boolean;
  className?: string;
};

export function SectionHeader({ eyebrow, title, text, align = "left", light = false, className }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <p className={cn("mb-4 text-xs font-black uppercase tracking-[0.28em]", light ? "text-[var(--mustard)]" : "text-[var(--leaf)]")}>{eyebrow}</p>
      )}
      <h2 className={cn("text-balance text-3xl font-black tracking-[-0.055em] md:text-5xl", light ? "text-[var(--cream)]" : "text-[var(--green)]")}>{title}</h2>
      {text && <p className={cn("mt-5 text-base leading-8 md:text-lg", light ? "text-[var(--cream)]/78" : "text-[var(--earth)]")}>{text}</p>}
    </div>
  );
}

type PageHeroProps = {
  eyebrow: string;
  title: string;
  text: string;
  image: string;
  imageAlt: string;
};

export function PageHero({ eyebrow, title, text, image, imageAlt }: PageHeroProps) {
  return (
    <section className="relative isolate min-h-[64vh] overflow-hidden bg-[var(--green)] pt-32 text-[var(--cream)] md:pt-40">
      <img src={image} alt={imageAlt} className="absolute inset-0 -z-20 h-full w-full object-cover" loading="eager" decoding="async" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(7,63,47,0.94),rgba(7,63,47,0.72)_45%,rgba(7,63,47,0.4))]" />
      <div className="absolute inset-x-0 bottom-0 -z-10 h-48 bg-[linear-gradient(0deg,var(--cream),rgba(248,241,228,0))]" />
      <div className="mx-auto flex min-h-[48vh] w-full max-w-7xl items-end px-5 pb-20 sm:px-8 lg:px-10">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }} className="max-w-3xl">
          <p className="mb-5 text-xs font-black uppercase tracking-[0.32em] text-[var(--mustard)]">{eyebrow}</p>
          <h1 className="text-balance text-5xl font-black tracking-[-0.07em] md:text-7xl">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[var(--cream)]/82 md:text-xl">{text}</p>
        </motion.div>
      </div>
    </section>
  );
}

type MetricProps = {
  value: string;
  label: string;
  light?: boolean;
};

export function Metric({ value, label, light = false }: MetricProps) {
  return (
    <div className="space-y-2">
      <p className={cn("text-4xl font-black tracking-[-0.06em] md:text-6xl", light ? "text-[var(--cream)]" : "text-[var(--green)]")}>{value}</p>
      <p className={cn("text-sm font-bold leading-6", light ? "text-[var(--cream)]/70" : "text-[var(--earth)]")}>{label}</p>
    </div>
  );
}

export function ImageBand({ src, alt, className }: { src: string; alt: string; className?: string }) {
  return (
    <div className={cn("relative overflow-hidden rounded-[2rem]", className)}>
      <img src={src} alt={alt} className="h-full w-full object-cover" loading="lazy" decoding="async" />
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(7,63,47,0),rgba(7,63,47,0.22))]" />
    </div>
  );
}