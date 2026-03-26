"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { portfolio } from "../lib/constants";

interface Props {
  portfolio: portfolio | null;  // ← faltaba esto
  onClose: () => void;
}

export default function PortfolioModal({ portfolio, onClose }: Props) {
  const [imgIndex, setImgIndex] = useState(0);
  const [shake, setShake] = useState(false);
  const overlayRef = useRef<HTMLDivElement>(null);
  const t = useTranslations("portfolioModal"); // ← ruta plana, no anidada

  useEffect(() => {
    if (portfolio) {
      setImgIndex(0);
      setShake(true);
      setTimeout(() => setShake(false), 500);
    }
  }, [portfolio]);

  useEffect(() => {
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", fn);
    return () => window.removeEventListener("keydown", fn);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = portfolio ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [portfolio]);

  if (!portfolio) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4"
      style={{ background: "rgba(0,0,0,0.75)", backdropFilter: "blur(8px)" }}
      onClick={(e) => { if (e.target === overlayRef.current) onClose(); }}
    >
      <div
        className={`relative w-full max-w-[680px] max-h-[90vh] overflow-y-auto rounded-[24px] border border-purple-700/30 ${shake ? "animate-[shake_.4s_ease]" : ""}`}
        style={{
          background: "linear-gradient(160deg,#13132b 0%,#0d0d1a 100%)",
          boxShadow: "0 40px 80px rgba(124,58,237,.35)",
        }}
      >
        <button
          onClick={onClose}
          className="sticky top-3 left-full mr-3 z-10 w-8 h-8 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-all float-right"
          style={{ background: "rgba(0,0,0,.6)", marginRight: "12px", marginTop: "12px" }}
        >
          ✕
        </button>

        {portfolio.images.length > 1 && (
          <div className="flex gap-2 px-7 pt-5 pb-0 clear-both">
            {portfolio.images.map((_, idx: number) => (
              <button
                key={idx}
                onClick={() => setImgIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === imgIndex ? "bg-purple-400 flex-[2]" : "bg-white/20 flex-1 hover:bg-white/40"
                }`}
              />
            ))}
          </div>
        )}

        <div className="px-7 pt-4 pb-2">
          <div
            className="w-full rounded-[16px] overflow-y-auto border border-purple-700/20"
            style={{ maxHeight: "50vh" }}
          >
            <img
              src={`/${portfolio.images[imgIndex]}`}
              alt={`${portfolio.title} - imagen ${imgIndex + 1}`}
              className="w-full h-auto block"
            />
          </div>

          {portfolio.images.length > 1 && (
            <div className="flex justify-between mt-2">
              <button
                onClick={() => setImgIndex(i => (i - 1 + portfolio.images.length) % portfolio.images.length)}
                className="text-[.75rem] text-purple-400 hover:text-purple-300 transition-colors"
              >
                ← {t("prev")}
              </button>
              <span className="text-[.7rem] text-[#6b6b9a]">
                {imgIndex + 1} / {portfolio.images.length}
              </span>
              <button
                onClick={() => setImgIndex(i => (i + 1) % portfolio.images.length)}
                className="text-[.75rem] text-purple-400 hover:text-purple-300 transition-colors"
              >
                {t("next")} →
              </button>
            </div>
          )}
        </div>

        <div className="p-7 pt-4">
          <span className="inline-block text-[.65rem] font-bold uppercase px-2.5 py-1 rounded-md mb-3 border border-purple-500/30 bg-purple-500/10 text-purple-400">
            {portfolio.cat}
          </span>

          <h2 className="text-[1.4rem] font-black text-white leading-tight mb-3">
            {portfolio.title}
          </h2>

          <p className="text-[.875rem] text-[#c8c8e8] leading-7 mb-6">
            {portfolio.modalDesc}
          </p>

          <div className="mb-6">
            <p className="text-[.7rem] font-bold uppercase tracking-widest text-[#6b6b9a] mb-3">
              {t("technologies")}
            </p>
            <div className="flex flex-wrap gap-2">
              {portfolio.techs.map((tech: string) => (
                <span key={tech} className="text-[.75rem] font-semibold px-3 py-1.5 rounded-full border border-purple-700/30 text-purple-300">
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex items-center justify-end">
            <Link href={portfolio.contactoUrl} target="_blank">
              <button className="bg-[#a855f7] hover:bg-[#9333ea] text-white px-8 py-3 rounded-[14px] font-semibold text-sm">
                {t("cta")}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}