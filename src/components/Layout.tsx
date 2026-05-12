import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type ReactNode } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { company, contactPeople, routes } from "../data/site";
import { cn } from "../utils/cn";
import { ButtonLink } from "./ui";
import { Logo } from "./Logo";

function MenuIcon({ open }: { open: boolean }) {
  return (
    <svg viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
      {open ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6L6 18" />
        </>
      ) : (
        <>
          <path d="M4 7h16" />
          <path d="M4 12h16" />
          <path d="M4 17h16" />
        </>
      )}
    </svg>
  );
}

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const solid = isScrolled || mobileOpen;

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50 px-3 py-3 sm:px-5">
        <div
          className={cn(
            "mx-auto flex max-w-7xl items-center justify-between rounded-full border px-4 py-3 transition-all duration-500 md:px-5",
            solid
              ? "border-[var(--green)]/10 bg-[rgba(248,241,228,0.9)] text-[var(--green)] shadow-[0_18px_60px_rgba(22,42,31,0.12)] backdrop-blur-xl"
              : "border-white/15 bg-white/[0.04] text-[var(--cream)] backdrop-blur-sm",
          )}
        >
          <Logo
            textClassName="hidden sm:block"
            markClassName={solid ? "bg-white/70" : "bg-white/10"}
            onClick={() => setMobileOpen(false)}
          />

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">
            {routes.map((route) => (
              <NavLink
                key={route.path}
                to={route.path}
                className={({ isActive }) =>
                  cn(
                    "rounded-full px-3.5 py-2 text-sm font-bold transition duration-300",
                    isActive
                      ? solid
                        ? "bg-[var(--green)] text-[var(--cream)]"
                        : "bg-white/16 text-white"
                      : solid
                        ? "text-[var(--green)]/78 hover:bg-[var(--green)]/8 hover:text-[var(--green)]"
                        : "text-[var(--cream)]/82 hover:bg-white/12 hover:text-white",
                  )
                }
              >
                {route.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <ButtonLink to="/contact" variant={solid ? "primary" : "light"} className="hidden px-5 md:inline-flex">
              Enquire
            </ButtonLink>
            <button
              type="button"
              className={cn(
                "inline-flex h-11 w-11 items-center justify-center rounded-full border transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mustard)] lg:hidden",
                solid ? "border-[var(--green)]/15 bg-white/70" : "border-white/20 bg-white/10",
              )}
              onClick={() => setMobileOpen((value) => !value)}
              aria-label={mobileOpen ? "Close navigation" : "Open navigation"}
              aria-expanded={mobileOpen}
            >
              <MenuIcon open={mobileOpen} />
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-[var(--green)] px-5 pt-28 text-[var(--cream)] lg:hidden"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,rgba(217,163,47,0.42),transparent_28%),radial-gradient(circle_at_86%_62%,rgba(255,248,232,0.18),transparent_28%)]" />
            <nav className="relative mx-auto flex max-w-lg flex-col gap-2" aria-label="Mobile navigation">
              {routes.map((route, index) => (
                <motion.div
                  key={route.path}
                  initial={{ opacity: 0, x: -18 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.035, duration: 0.35 }}
                >
                  <NavLink
                    to={route.path}
                    className={({ isActive }) =>
                      cn(
                        "flex items-center justify-between border-b border-white/10 py-4 text-3xl font-black tracking-[-0.05em]",
                        isActive ? "text-[var(--mustard)]" : "text-[var(--cream)]",
                      )
                    }
                  >
                    {route.label}
                    <span className="text-base font-bold">0{index + 1}</span>
                  </NavLink>
                </motion.div>
              ))}
              <ButtonLink to={`tel:+91${contactPeople[0].phone}`} variant="light" className="mt-8 w-full">
                Call {contactPeople[0].name}
              </ButtonLink>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[var(--green)] text-[var(--cream)]">
      <div className="absolute inset-0 opacity-35 bg-[radial-gradient(circle_at_15%_20%,rgba(217,163,47,0.35),transparent_26%),radial-gradient(circle_at_90%_0%,rgba(255,248,232,0.14),transparent_24%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-16 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr_1fr]">
          <div>
            <Logo className="text-[var(--cream)]" markClassName="bg-white/10" />
            <p className="mt-6 max-w-md text-base leading-8 text-[var(--cream)]/72">{company.description}</p>
            <p className="mt-8 inline-flex rounded-full border border-white/12 px-4 py-2 text-xs font-black uppercase tracking-[0.24em] text-[var(--mustard)]">
              Modern operations with old trust
            </p>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.26em] text-[var(--mustard)]">Quick Links</h2>
            <div className="mt-6 grid grid-cols-2 gap-3">
              {routes.map((route) => (
                <NavLink key={route.path} to={route.path} className="text-sm font-bold text-[var(--cream)]/70 transition hover:text-[var(--mustard)]">
                  {route.label}
                </NavLink>
              ))}
            </div>
          </div>

          <div>
            <h2 className="text-sm font-black uppercase tracking-[0.26em] text-[var(--mustard)]">Contact</h2>
            <div className="mt-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contactPeople.slice(0, 4).map((person) => (
                <a key={person.phone} href={`tel:+91${person.phone}`} className="group flex items-center justify-between border-b border-white/10 pb-3 text-sm font-bold text-[var(--cream)]/76 transition hover:text-white">
                  <span>{person.name}</span>
                  <span className="text-[var(--mustard)]">{person.phone}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[var(--cream)]/62 md:flex-row md:items-center md:justify-between">
          <p>Copyright {new Date().getFullYear()} J J & Co. All rights reserved.</p>
          <div className="flex gap-4">
            <a className="transition hover:text-[var(--mustard)]" href={`https://wa.me/91${contactPeople[0].phone}`} target="_blank" rel="noreferrer">WhatsApp</a>
            <a className="transition hover:text-[var(--mustard)]" href="/contact">Business Inquiry</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-[var(--cream)] text-[var(--green)]">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-[var(--mustard)] focus:px-5 focus:py-3 focus:text-sm focus:font-black focus:text-[var(--green)]">
        Skip to content
      </a>
      <Header />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}