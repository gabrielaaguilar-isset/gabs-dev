"use client";
import { useState, useEffect } from "react";
import { NAV_LINKS } from "./lib/constants";
import { useMagnetic } from "./lib/useRipple";
import LangSwitcher from "./ui/LangSwitcher";
import { useTranslations } from "next-intl";

export default function Navbar() {
  const t = useTranslations("nav"); // 👈 IMPORTANTE

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const ctaRef = useMagnetic<HTMLAnchorElement>();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[#0d0d1a]/90 backdrop-blur-xl border-b border-white/5 shadow-[0_4px_30px_rgba(124,58,237,.08)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-xl font-black tracking-tight gradient-text hover:animate-[glitch_.5s_ease] transition-all"
          style={{ fontFamily: "Lexend, sans-serif" }}
        >
          Gabs.
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-1 list-none">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="relative px-4 py-2 text-sm font-normal text-white/65 rounded-full
                           hover:text-white hover:bg-white/5 transition-all duration-200 group"
              >
                {t(link.key)}
                <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-[2px]
                                 bg-gradient-to-r from-purple-700 to-purple-400 rounded-full
                                 transition-all duration-300 group-hover:w-3/5" />
              </a>
            </li>
          ))}
        </ul>

        {/* Lang Switch */}
        <LangSwitcher />

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Abrir menú"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className={`block h-0.5 bg-purple-400 transition-all duration-300 ${
                i === 0
                  ? `w-6 ${mobileOpen ? "rotate-45 translate-y-2" : ""}`
                  : i === 1
                  ? `w-4 ${mobileOpen ? "opacity-0" : ""}`
                  : `w-6 ${mobileOpen ? "-rotate-45 -translate-y-2" : ""}`
              }`}
            />
          ))}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          mobileOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 py-4 flex flex-col gap-2 bg-[#0d0d1a]/95 border-t border-purple-900/20">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-white/65 hover:text-purple-300 py-2 text-sm font-medium transition-colors"
              onClick={() => setMobileOpen(false)}
            >
              {t(link.key)} {/* 👈 AQUÍ TAMBIÉN */}
            </a>
          ))}

          <a
            href="#"
            className="btn-primary ripple-btn mt-2 text-center justify-center"
            style={{ fontSize: ".85rem" }}
          >
            <span>Empezar gratis</span>
          </a>
        </div>
      </div>
    </nav>
  );
}