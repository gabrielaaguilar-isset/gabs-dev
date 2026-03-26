"use client";

import { useTranslations } from "next-intl";
import { useRevealAll } from "../lib/useReveal";

/* ── MARQUEE ── */
export function MarqueeStrip() {
  const t = useTranslations("marquee");

  const items = t.raw("items") as string[];
  const duplicated = [...items, ...items];

  return (
    <div
      className="overflow-hidden py-5 border-y border-purple-900/15"
      style={{ background: "rgba(124,58,237,.07)" }}
    >
      <div className="flex gap-0 w-max marquee-track">
        {duplicated.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-3 px-7 text-[.8rem] font-semibold text-white/40 whitespace-nowrap transition-colors duration-200 hover:text-purple-400"
          >
            {item}
            <span className="text-purple-500 text-[.7rem]">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default MarqueeStrip;



/* ── HOW IT WORKS ── */
export function HowItWorks() {
  const t = useTranslations("steps");
  const ref = useRevealAll() as React.RefObject<HTMLElement>;

  const steps = t.raw("items") as {
    icon: string;
    num: string;
    title: string;
    desc: string;
  }[];

  return (
    <section
      id="how"
      ref={ref}
      className="relative py-24 text-center overflow-hidden"
    >
      <div
        className="orb w-[600px] h-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle,rgba(124,58,237,.08),transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <span className="section-label reveal mb-4 inline-flex">
          {t("label")}
        </span>

        <h2
          className="reveal d1 font-black tracking-tight mb-3"
          style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)" }}
        >
          <span className="gradient-text">Cursos</span> Fáciles para Aprender Mejor
        </h2>

        <p className="reveal d2 text-[#6b6b9a] text-sm mb-14">
          4 simples pasos para transformar tu carrera
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s, i) => (
            <div
              key={i}
              className={`step-card reveal d${i + 1} spotlight-card card p-8 relative overflow-hidden`}
              style={{ borderRadius: "20px" }}
            >
              <div
                className="w-14 h-14 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl border border-purple-700/25"
                style={{
                  background:
                    "linear-gradient(135deg,rgba(124,58,237,.3),rgba(168,85,247,.1))",
                }}
              >
                {s.icon}
              </div>

              <div className="text-[.65rem] font-bold tracking-widest uppercase text-purple-400 mb-2">
                {s.num}
              </div>

              <div className="text-[.95rem] font-bold text-white mb-2">
                {s.title}
              </div>

              <div className="text-[.78rem] text-[#6b6b9a] leading-relaxed">
                {s.desc}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}