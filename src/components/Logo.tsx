import { Link } from "react-router-dom";
import { cn } from "../utils/cn";

type LogoProps = {
  className?: string;
  markClassName?: string;
  textClassName?: string;
  onClick?: () => void;
};

export function Logo({ className, markClassName, textClassName, onClick }: LogoProps) {
  return (
    <Link to="/" onClick={onClick} className={cn("group inline-flex items-center gap-3", className)} aria-label="J J & Co. home">
      <span
        className={cn(
          "relative flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-current/20 bg-[rgba(255,248,232,0.12)] text-[var(--mustard)] shadow-sm backdrop-blur",
          markClassName,
        )}
      >
        <svg viewBox="0 0 56 56" className="h-8 w-8" aria-hidden="true">
          <path d="M29 8v35" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
          <path d="M28 31c-9 0-16-5-19-14 10 0 17 5 19 14Z" fill="currentColor" opacity="0.9" />
          <path d="M29 37c9-1 15-7 17-18-10 1-16 8-17 18Z" fill="currentColor" opacity="0.7" />
          <path d="M36 11c5 7 5 17 0 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          <path d="M41 15l-5 4" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M43 22l-6 3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
          <path d="M42 30l-6 1" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        </svg>
      </span>
      <span className={cn("leading-none", textClassName)}>
        <span className="block text-[1.45rem] font-black tracking-[-0.05em]">J J &amp; Co.</span>
        <span className="mt-1 block text-[0.66rem] font-bold uppercase tracking-[0.24em] opacity-80">Since 1977</span>
      </span>
    </Link>
  );
}