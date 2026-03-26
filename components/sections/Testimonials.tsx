"use client";
import { useState, useEffect, useRef } from "react";
import { TESTIMONIALS } from "../lib/constants";
import { useRevealAll } from "../lib/useReveal";
import { useTranslations } from "next-intl";

export default function Testimonials() {
  const t = useTranslations("testimonials");
  const ref = useRevealAll() as React.RefObject<HTMLElement>;

  const [active, setActive] = useState(TESTIMONIALS[0]);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileIndex, setMobileIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const rest = TESTIMONIALS.filter((item) => item !== active);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const nextSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setMobileIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setMobileIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handleTouchStart = (e: React.TouchEvent) => { touchStartX.current = e.touches[0].clientX; };
  const handleTouchMove  = (e: React.TouchEvent) => { touchEndX.current   = e.touches[0].clientX; };
  const handleTouchEnd   = () => {
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 50) diff > 0 ? nextSlide() : prevSlide();
  };

  return (
    <section id="testimonials" ref={ref} className="relative py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6 md:px-6">
        <div className="grid md:grid-cols-2 gap-14 items-start">

          {/* LEFT — solo desktop */}
          {!isMobile && (
            <div className="reveal from-left space-y-10">
              <span className="section-label inline-flex">{t("label")}</span>

              <h2 className="font-black tracking-tight" style={{ fontSize: "clamp(1.8rem,3vw,2.8rem)" }}>
                {t("title")} <br />
                {t("subtitle_pre")} <span className="gradient-text">{t("title_highlight")}</span>
              </h2>

              <div
                key={active.name}
                className="hidden md:block rounded-3xl p-8 border transition-all duration-500 hover:scale-[1.01] animate-fade-in"
                style={{
                  background: "linear-gradient(135deg,rgba(124,58,237,.18),rgba(13,13,26,.8))",
                  borderColor: "rgba(124,58,237,.25)",
                  transform: "translateZ(0)",
                  willChange: "transform, opacity",
                }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <div
                    className={`rounded-full bg-gradient-to-br ${active.bg} flex items-center justify-center font-black text-white transition-transform duration-300 hover:scale-110`}
                    style={{ width: 52, height: 52 }}
                  >
                    {active.initials}
                  </div>
                  <div className="overflow-hidden">
                    <div className="font-bold text-white text-[.95rem]">{active.name}</div>
                    <div className="text-[.75rem] text-[#6b6b9a]">{active.role}</div>
                  </div>
                </div>
                <p className="text-[.85rem] text-[#c8c8e8] leading-7 italic">"{active.text}"</p>
              </div>
            </div>
          )}

          {/* RIGHT */}
          <div className="reveal from-right">

            {/* Título en móvil */}
            {isMobile && (
              <div className="mb-8">
                <span className="section-label inline-flex text-sm tracking-wider mb-3">{t("label")}</span>
                <h2 className="font-black tracking-tight leading-tight" style={{ fontSize: "clamp(2rem,6vw,2.8rem)" }}>
                  {t("title")} <br />
                  {t("subtitle_pre")} <span className="gradient-text">{t("title_highlight")}</span>
                </h2>
              </div>
            )}

            {/* Desktop: cards con scroll */}
            {!isMobile && (
              <div className="flex justify-end">
                <div className="flex flex-col gap-4 md:overflow-y-auto md:h-[590px]">
                  <div className="absolute bottom-0 left-0 right-0 h-20 pointer-events-none bg-gradient-to-t from-[#0d0d1a] to-transparent z-10 hidden md:block" />
                  {rest.map((item, i) => (
                    <div
                      key={i}
                      onClick={() => setActive(item)}
                      className="cursor-pointer rounded-[18px] p-5 border transition-all duration-300 hover:-translate-y-1 hover:border-purple-500/50"
                      style={{
                        background: "#0f0f2a",
                        borderColor: active === item ? "rgba(124,58,237,.5)" : "rgba(124,58,237,.25)",
                      }}
                    >
                      <div className="flex items-center gap-3 mb-3">
                        <div
                          className={`rounded-full bg-gradient-to-br ${item.bg} flex items-center justify-center font-bold text-white text-[.8rem] transition-transform duration-300`}
                          style={{ width: 38, height: 38 }}
                        >
                          {item.initials}
                        </div>
                        <div>
                          <div className="font-bold text-white text-[.85rem]">{item.name}</div>
                          <div className="text-[.7rem] text-[#6b6b9a]">{item.role}</div>
                        </div>
                      </div>
                      <p className="text-[.8rem] text-[#c8c8e8] leading-relaxed italic line-clamp-3">"{item.text}"</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Mobile: slider */}
            {isMobile && (
              <div className="w-[calc(100vw-3rem)] max-w-full">
                <div
                  className="overflow-hidden rounded-[18px]"
                  onTouchStart={handleTouchStart}
                  onTouchMove={handleTouchMove}
                  onTouchEnd={handleTouchEnd}
                >
                  <div
                    className="flex transition-transform duration-500 ease-out"
                    style={{ transform: `translateX(-${mobileIndex * 100}%)` }}
                  >
                    {TESTIMONIALS.map((item, index) => (
                      <div
                        key={index}
                        className="w-full flex-shrink-0 p-6 border"
                        style={{ background: "#0f0f2a", borderColor: "rgba(124,58,237,.25)", width: "100%" }}
                      >
                        <div className="flex items-center gap-3 mb-4">
                          <div
                            className={`rounded-full bg-gradient-to-br ${item.bg} flex items-center justify-center font-bold text-white flex-shrink-0`}
                            style={{ width: 44, height: 44, fontSize: "1rem" }}
                          >
                            {item.initials}
                          </div>
                          <div className="min-w-0">
                            <div className="font-bold text-white text-base truncate">{item.name}</div>
                            <div className="text-xs text-[#6b6b9a] truncate">{item.role}</div>
                          </div>
                        </div>
                        <p className="text-sm text-[#c8c8e8] leading-relaxed italic break-words max-h-[200px] overflow-y-auto">
                          "{item.text}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-end gap-4 mt-6">
                  <div className="flex gap-2">
                    {TESTIMONIALS.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => {
                          if (!isTransitioning) {
                            setIsTransitioning(true);
                            setMobileIndex(index);
                            setTimeout(() => setIsTransitioning(false), 500);
                          }
                        }}
                        className={`h-2 rounded-full transition-all duration-300 ${index === mobileIndex ? "w-6 bg-purple-500" : "w-2 bg-purple-500/30 hover:bg-purple-500/50"}`}
                        aria-label={t("aria_goto", { num: index + 1 })}
                      />
                    ))}
                  </div>
                  <div className="flex gap-4">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-purple-500/20 hover:bg-purple-500/30 flex items-center justify-center text-white transition-all duration-300 text-lg flex-shrink-0"
                      aria-label={t("aria_prev")}
                    >←</button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-purple-500/20 hover:bg-purple-500/30 flex items-center justify-center text-white transition-all duration-300 text-lg flex-shrink-0"
                      aria-label={t("aria_next")}
                    >→</button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}