"use client";
import { useTranslations } from "next-intl";
import { useRevealAll } from "../lib/useReveal";

export default function Why() {
  const t = useTranslations("why");
  const ref = useRevealAll() as React.RefObject<HTMLElement>;

  const points = t.raw("points") as {
    icon: string;
    title: string;
    desc: string;
  }[];

  return (
    <section id="abuotme" ref={ref} className="relative py-24 overflow-hidden">
      <div
        className="orb parallax-orb w-[500px] h-[500px] top-1/2 -left-48 -translate-y-1/2"
        style={{
          background: "radial-gradient(circle,rgba(124,58,237,.15),transparent 70%)",
        }}
      />

      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE */}
          <div className="reveal from-left">
            <div
              className="relative h-[440px] rounded-3xl border border-purple-700/25 overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_30px_60px_rgba(124,58,237,.2)]"
              style={{
                background:
                  "linear-gradient(135deg,rgba(124,58,237,.2),rgba(13,13,26,.6))",
              }}
            >
              <div
                className="w-full h-full flex items-center justify-center"
                style={{
                  background:
                    "linear-gradient(160deg,rgba(124,58,237,.15),rgba(13,13,26,.9))",
                }}
              >
                <div
                  className="text-center"
                  style={{ animation: "float 5s ease-in-out infinite" }}
                >
                  <div className="text-7xl mb-3">👩🏽‍💻</div>
                  <p className="text-[#6b6b9a] text-xs">
                    Desarrolladora Web & Frontend
                  </p>
                </div>
              </div>

              {/* <div
                className="absolute bottom-4 left-4 rounded-2xl px-4 py-2"
                style={{
                  background: "rgba(124,58,237,.9)",
                  animation: "float 5s ease-in-out infinite",
                }}
              >
                <div className="text-xl font-black text-white">
                  +5 años experiencia
                </div>
                <div className="text-[.65rem] text-white/75">
                  Experiencia profesional
                </div>
              </div> */}
            </div>
          </div>

          {/* CONTENT */}
          <div className="reveal from-right space-y-6">
            <span className="section-label">{t("label")}</span>

            <h2
              className="font-black leading-tight tracking-tight"
              style={{
                fontSize:
                  "clamp(calc(1.8rem * .85), calc(3vw * .85), calc(2.8rem * .85))",
              }}
            >
              {t("title")}{" "}
              <span className="gradient-text-anim">
                {t("purpleTitle")}
              </span>{" "}
              <span className="text-white/70">
                 {t("grayTitle")}
              </span>
            </h2>

            <div className="flex flex-col gap-4 mt-2">
              {points.map((p, i) => (
                <div
                  key={i}
                  className="why-point flex gap-4 items-start p-4 rounded-2xl border cursor-default"
                  style={{
                    borderColor: "rgba(124,58,237,.12)",
                    background: "rgba(124,58,237,.05)",
                  }}
                >
                  <div
                    className="why-icon w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
                    style={{
                      background:
                        "linear-gradient(135deg,#7c3aed,#9333ea)",
                      boxShadow:
                        "0 6px 20px rgba(124,58,237,.35)",
                    }}
                  >
                    {p.icon}
                  </div>

                  <div>
                    <h4 className="text-[.9rem] font-bold text-white mb-1">
                      {p.title}
                    </h4>
                    <p className="text-[.8rem] text-[#6b6b9a] leading-relaxed">
                      {p.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}