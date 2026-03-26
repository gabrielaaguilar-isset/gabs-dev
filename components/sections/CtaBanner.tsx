"use client";
import { useRipple } from "../lib/useRipple";
import { useReveal } from "../lib/useReveal";
import { useTranslations } from "next-intl";

export default function CtaBanner() {
  const boxRef = useReveal() as React.RefObject<HTMLDivElement>;
  const rippleRef = useRipple() as React.MutableRefObject<HTMLDivElement>;

  const setRef = (el: HTMLDivElement | null) => {
    (boxRef as React.MutableRefObject<HTMLElement | null>).current = el;
    (rippleRef as React.MutableRefObject<HTMLElement | null>).current = el;
  };

  const t = useTranslations("cta");

  return (
    <section id="contact" className="py-20">
      <div className="max-w-[1200px] mx-auto px-6">
        <div
          ref={setRef}
          className="reveal rounded-[32px] px-10 py-20 text-center relative overflow-hidden border transition-all duration-500 hover:shadow-[0_40px_80px_rgba(124,58,237,.25)]"
          style={{
            background: "linear-gradient(135deg,rgba(88,28,135,.5),rgba(124,58,237,.25),rgba(13,13,26,.8))",
            borderColor: "rgba(168,85,247,.25)",
          }}
        >
          {/* Orbs */}
          <div
            className="orb w-[400px] h-[400px] -top-24 -right-24"
            style={{ background: "radial-gradient(circle,rgba(124,58,237,.2),transparent 70%)" }}
          />
          <div
            className="orb w-[300px] h-[300px] -bottom-20 -left-20"
            style={{ background: "radial-gradient(circle,rgba(88,28,135,.2),transparent 70%)" }}
          />

          {/* Glow */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: "radial-gradient(circle at 50% 50%,rgba(124,58,237,.12),transparent 70%)",
              animation: "glowPulse 4s ease infinite",
            }}
          />

          <div className="relative z-10">
            {/* Label */}
            <span className="section-label inline-flex mb-5">
              {t("label")}
            </span>

            {/* Title */}
            <h2
              className="font-black tracking-tight mb-4"
              style={{ fontSize: "clamp(2rem,4vw,3.2rem)" }}
            >
              {t("title")}{" "}
              <span
                className="gradient-text-anim"
                style={{ backgroundSize: "300% 300%" }}
              >
                {t("title_highlight")}
              </span>
              <br />
              {t("title_suffix")}
            </h2>

            {/* Description */}
            <p className="text-[#c8c8e8] text-[1rem] mb-10 max-w-lg mx-auto">
              {t("subtitle")}
            </p>

            {/* Buttons */}
            <div className="flex gap-4 justify-center flex-wrap">
              <a
                href="https://wa.me/573133207188?text=Hola%2C%20me%20gustar%C3%ADa%20contactarte%20porque%20tengo%20una%20idea%2Fproyecto%20que%20podr%C3%ADa%20interesarte.%20%C2%BFCu%C3%A1ndo%20podr%C3%ADamos%20conversar%3F"
                target="_blank"
                className="btn-primary ripple-btn group relative overflow-hidden"
                style={{ fontSize: ".95rem", padding: "14px 36px" }}
              >
                <span className="relative z-10">
                  {t("btn_primary")}
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/gabriela-aguilar01"
                className="btn-outline ripple-btn"
                target="_blank"
                style={{ fontSize: ".95rem", padding: "14px 36px" }}
              >
                <span>{t("btn_secondary")}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}