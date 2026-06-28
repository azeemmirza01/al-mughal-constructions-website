"use client";

import Link from "next/link";
import { useState } from "react";
import BrandMark from "@/components/BrandMark";
import { NAV_LINKS } from "@/lib/data";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 z-50 h-[5.5rem] w-full border-b border-maroon/5 bg-white/95 shadow-sm md:h-24">
      <div className="mx-auto flex h-full max-w-6xl items-center justify-between px-4 md:px-10">
        <BrandMark variant="header" priority />

        <nav className="hidden items-center gap-7 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-display text-sm font-medium uppercase tracking-widest text-slate-muted transition-colors duration-300 hover:text-maroon"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="btn-pill btn-pill-gold px-6 py-2.5 text-sm"
          >
            Get a Quote
          </a>
        </nav>

        <button
          type="button"
          className="rounded-full p-1 text-maroon transition-colors hover:bg-maroon/5 md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className="material-symbols-outlined text-2xl">
            {menuOpen ? "close" : "menu"}
          </span>
        </button>
      </div>

      {menuOpen && (
        <nav className="animate-[fadeIn_0.3s_ease] border-t border-maroon/10 bg-white px-5 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-display text-sm font-medium uppercase tracking-widest text-slate-muted"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="btn-pill btn-pill-gold px-6 py-3 text-center text-sm"
              onClick={() => setMenuOpen(false)}
            >
              Get a Quote
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
