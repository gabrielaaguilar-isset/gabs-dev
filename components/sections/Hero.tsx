"use client";
import { useEffect, useRef } from "react";
import { useRipple } from "../lib/useRipple";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations("hero");
  const sectionRef = useRef<HTMLElement>(null);
  const rippleRef = useRipple() as React.MutableRefObject<HTMLDivElement>;

  useEffect(() => {
    const el = document.getElementById("hero-line2");
    if (!el) return;
    const full = el.dataset.text ?? "";
    el.textContent = "";
    let i = 0;
    const tid = setTimeout(() => {
      const iv = setInterval(() => {
        el.textContent += full[i++];
        if (i >= full.length) clearInterval(iv);
      }, 55);
    }, 600);
    return () => clearTimeout(tid);
  }, []);

  useEffect(() => {
    const fn = (e: MouseEvent) => {
      const px = (e.clientX / window.innerWidth - 0.5) * 20;
      const py = (e.clientY / window.innerHeight - 0.5) * 20;
      document.querySelectorAll<HTMLElement>(".parallax-orb").forEach((orb, i) => {
        const f = ((i % 3) + 1) * 0.3;
        orb.style.transform = `translate(${px * f}px,${py * f}px)`;
      });
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden grid-pattern pt-28 pb-20"
    >
      <div className="orb parallax-orb w-[700px] h-[700px] -top-48 -right-48"
        style={{ background: "radial-gradient(circle,rgba(124,58,237,.2),transparent 70%)" }} />
      <div className="orb parallax-orb w-[400px] h-[400px] -bottom-24 -left-24"
        style={{ background: "radial-gradient(circle,rgba(88,28,135,.25),transparent 70%)" }} />

      <div
        ref={rippleRef as React.RefObject<HTMLDivElement>}
        className="container max-w-[1200px] mx-auto px-6 relative z-10 grid md:grid-cols-[1.3fr_1fr] gap-14 items-center"
      >
        {/* ── LEFT ── */}
        <div>
          <div
            className="inline-flex items-center gap-2 mb-6 px-4 py-1.5 rounded-full border text-xs font-semibold tracking-widest uppercase text-purple-500"
            style={{
              borderColor: "rgba(124,58,237,.3)",
              background: "rgba(124,58,237,.08)",
              animation: "borderFlow 3s ease infinite",
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-[dotPulse_2s_infinite]" />
            {t("badge")}
          </div>

          <h1 className="font-black leading-[1.05] tracking-tight mb-5 break-words" // Agregamos break-words por seguridad
            style={{ fontSize: "clamp(2rem, 8vw, 3.78rem)" }}> {/* Ajustamos el mínimo y el escalado */}

            <span className="block text-white max-w-full" // Asegura que no exceda el ancho
              style={{
                animation: "fadeUp .7s .1s ease both",
                opacity: 0,
                overflowWrap: "anywhere" // Fuerza el wrap incluso en palabras largas
              }}>
              {t("name")}
            </span>

            <span
              id="hero-line2"
              data-text={t("line2")}
              className="block gradient-text max-w-full"
              style={{
                animation: "fadeUp .7s .25s ease both",
                opacity: 0,
                minHeight: "1.1em",
                overflowWrap: "anywhere"
              }}
            />
          </h1>

          <p className="text-[#c8c8e8] text-base leading-7 max-w-[420px] mb-8"
            style={{ animation: "fadeUp .7s .4s ease both", opacity: 0 }}>
            {t("subtitle")}
          </p>

          <div className="flex flex-wrap gap-4 mb-10"
            style={{ animation: "fadeUp .7s .5s ease both", opacity: 0 }}>
            <a href="#contact" className="btn-primary ripple-btn">
              <span>{t("btn_primary")}</span>
            </a>
            <a href="#portfolio" className="btn-outline">{t("btn_secondary")}</a>
          </div>

          <div style={{ animation: "fadeUp .7s .65s ease both", opacity: 0 }}>
            <p className="text-[.7rem] text-[#6b6b9a] tracking-[.08em] uppercase mb-3">
              {t("tech_label")}
            </p>
            <div className="flex flex-wrap gap-y-2 gap-x-4">
              {[
                "React.js", "Next.js", "WordPress", "Elementor",
                "Tailwind CSS", "TypeScript", "Figma", "Shopify",
                "Webflow", "Angular", "Liferay", "N8N"
              ].map((tech) => (
                <span key={tech}
                  className="trust-logo text-[.75rem] font-medium text-white/40 px-3 py-1 rounded-full border-[0.5px] border-white/25 transition-all duration-300 hover:text-white/80 hover:border-purple-500/50 hover:bg-purple-500/10"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT ── */}
        <div className="relative flex items-center justify-center" style={{ animation: "scaleIn .8s .3s ease both", opacity: 0 }}>
          <div className="absolute w-[300px] h-[300px] rounded-full border border-dashed border-purple-900/20"
            style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spin 20s linear infinite" }}>
            <div className="absolute -top-1.5 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-gradient-to-br from-purple-400 to-purple-700"
              style={{ boxShadow: "0 0 12px rgba(168,85,247,.6)" }} />
          </div>
          <div className="absolute w-[400px] h-[400px] rounded-full border border-purple-900/8"
            style={{ top: "50%", left: "50%", transform: "translate(-50%,-50%)", animation: "spinReverse 30s linear infinite" }} />

          <div className="relative w-full h-[460px] max-w-full rounded-[30px] overflow-hidden border border-purple-700/25 transition-all duration-500 hover:-translate-y-3 hover:shadow-[0_50px_100px_rgba(124,58,237,.35)]"
            style={{ background: "linear-gradient(135deg,rgba(124,58,237,.3),rgba(13,13,26,.8))", animation: "glowPulse 4s ease infinite", boxShadow: "0 30px 80px rgba(124,58,237,.25)" }}>
            <div className="w-full h-full flex items-center justify-center"
              style={{ background: "linear-gradient(160deg,#1a0a3a 0%,#0d0d1a 60%)" }}>
              <div className="flex flex-col items-center gap-3 text-purple-400/40 border border-purple-800/20 rounded-2xl pt-10"
                style={{ background: "linear-gradient(160deg,rgba(124,58,237,.15),rgba(168,85,247,.05))" }}>
                <Image src="/heroImg.png" width={300} height={300} alt="Gabriela Avatar" />
              </div>
            </div>
          </div>

          {[
            // { cls: "top-4 -left-6", delay: "0s", content: <><div className="text-xl font-black gradient-text">{t("badge1_title")}</div><div className="text-[.65rem] text-[#6b6b9a] mt-0.5">{t("badge1_sub")}</div></> },
            // { cls: "bottom-4 -right-6", delay: ".8s", content: <><div className="text-xl font-black gradient-text">{t("badge2_title")}</div><div className="text-[.65rem] text-[#6b6b9a] mt-0.5">{t("badge2_sub")}</div></> },
          ].map(({ cls, delay, content }) => (
            <div key={cls}
              className={`absolute ${cls} bg-[#0d0d1a]/95 border border-purple-700/25 rounded-2xl px-4 py-3 backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-purple-500/50 hover:shadow-[0_10px_30px_rgba(124,58,237,.2)]`}
              style={{ animation: `float 5s ${delay} ease-in-out infinite` }}
            >
              {content}
            </div>
          ))}

          <div className="absolute top-14 -right-4 w-11 h-11 rounded-xl bg-[#0d0d1a]/95 border border-purple-700/25 flex items-center justify-center text-xl transition-all duration-300 hover:scale-110 hover:rotate-6"
            style={{ animation: "float 4s 1.5s ease-in-out infinite" }}>
            <Image src="/job.svg" alt="icono de trabajo" width={80} height={80} />
          </div>
        </div>
      </div>

      <div className="hidden  absolute bottom-8 left-1/2 -translate-x-1/2 md:flex flex-col items-center gap-2 animate-bounce">
        <span className="text-[#6b6b9a] text-[.65rem] tracking-[.15em] uppercase">{t("scroll")}</span>
        <div className="w-px h-8 bg-gradient-to-b from-purple-700 to-transparent" />
      </div>
    </section>
  );
}