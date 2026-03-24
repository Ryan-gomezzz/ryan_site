"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { navItems } from "@/lib/data";

export default function Navbar() {
  const [active, setActive] = useState("about");
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
      const offsets = navItems
        .map((item) => {
          const el = document.getElementById(item.id);
          if (!el) return null;
          return { id: item.id, top: Math.abs(el.getBoundingClientRect().top) };
        })
        .filter(Boolean) as { id: string; top: number }[];
      offsets.sort((a, b) => a.top - b.top);
      if (offsets[0]) setActive(offsets[0].id);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const shell = useMemo(
    () =>
      `fixed top-0 z-50 w-full border-b transition-colors ${
        scrolled ? "border-zinc-800 bg-zinc-950/88 backdrop-blur-md" : "border-transparent bg-transparent"
      }`,
    [scrolled],
  );

  return (
    <header className={shell}>
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-6 md:px-10">
        <a href="#hero" className="font-mono text-sm tracking-[0.2em] text-cyan-300">
          RG
        </a>
        <div className="hidden items-center gap-4 lg:gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="relative font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-300 transition-colors hover:text-cyan-300"
            >
              {item.label}
              {active === item.id && (
                <motion.span
                  layoutId="activeNav"
                  className="absolute -bottom-1 left-0 h-px w-full bg-cyan-300"
                />
              )}
            </a>
          ))}
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="font-mono text-xs tracking-[0.16em] text-zinc-300 md:hidden"
        >
          [MENU]
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="wire-card mx-4 mb-4 rounded-md p-6 md:hidden"
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setOpen(false)}
                  className="font-mono text-sm uppercase tracking-[0.16em] text-zinc-200"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
