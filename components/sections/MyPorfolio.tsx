"use client";
import { useTranslations } from "next-intl";
import { useRevealAll } from "../lib/useReveal";
import { useRipple } from "../lib/useRipple";
import { useSpotlight } from "../lib/useSpotlight";
import { useLayoutEffect, useRef, useState, useCallback } from "react";
import PortfolioModal from "../ui/PortfolioModal";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_STATIC, PortfolioStaticItem } from "../lib/constants";

interface NotchCardProps {
  c: PortfolioStaticItem;
  i: number;
  onInfo: () => void;
  cat: string;
  title: string;
  btnInfo: string;
  btnVisit: string;
}

function NotchCard({ c, i, onInfo, cat, title, btnInfo, btnVisit }: NotchCardProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const [path, setPath] = useState("");
  const [dims, setDims] = useState({ w: 0, h: 420 });

  useLayoutEffect(() => {
    const updatePath = () => {
      if (containerRef.current && btnRef.current) {
        const W = containerRef.current.offsetWidth;
        const H = containerRef.current.offsetHeight;
        const bw = btnRef.current.offsetWidth;
        const bh = btnRef.current.offsetHeight;
        const r = 14;
        const gap = 20;
        const nx = W - bw - gap - r;
        const ny = H - bh - gap - r;

        setDims({ w: W, h: H });
        setPath(
          `M18,0 H${W - 18} Q${W},0 ${W},18 
           V${ny} Q${W},${ny + r} ${W - r},${ny + r} 
           H${nx + r} Q${nx},${ny + r} ${nx},${ny + r + r} 
           V${H - 18} Q${nx},${H} ${nx - 18},${H} 
           H18 Q0,${H} 0,${H - 18} V18 Q0,0 18,0 Z`
        );
      }
    };
    updatePath();
    window.addEventListener("resize", updatePath);
    return () => window.removeEventListener("resize", updatePath);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full h-[420px] overflow-visible group duration-300 ease-out hover hover:-translate-y-[6px]">
      <svg className="absolute inset-0 w-full h-full overflow-visible pointer-events-none" viewBox={`0 0 ${dims.w} ${dims.h}`} fill="none" preserveAspectRatio="none">
        <defs><clipPath id={`nb-${i}`}><path d={path} /></clipPath></defs>
        <path d={path} fill="#0f0f2a" className="transition-colors duration-300 group-hover:fill-[#131333]" />
        <path d={path} fill="none" stroke="rgba(168,85,247,0.4)" strokeWidth="1" vectorEffect="non-scaling-stroke" className="transition-colors duration-300 group-hover:stroke-purple-500/60" />
      </svg>

      <div className="relative z-10 h-full flex flex-col" style={{ clipPath: `url(#nb-${i})` }}>
        <div className={`relative h-[220px] flex items-center justify-center bg-gradient-to-br ${c.bg}`}>
          <Image src={c.cover} alt={title} width={400} height={400} className="w-[93%] h-auto rounded-md" />
        </div>
        <div className="p-5 flex-1 flex flex-col">
          <span className="inline-block text-[.65rem] font-bold uppercase px-2.5 py-1 rounded-md mb-3 border border-purple-500/30 bg-purple-500/10 text-purple-400 w-fit">
            {cat}
          </span>
          <div className="text-[.95rem] font-bold text-white mb-2.5 leading-snug">{title}</div>
          <div className="mt-auto pt-3 border-t border-purple-900/20">
            <button className="p-0 m-0 bg-inherit text-[.75rem] text-purple-400 hover:text-purple-300 transition-colors" onClick={onInfo}>
              {btnInfo}
            </button>
          </div>
        </div>
      </div>

      <Link href={c.url} target="_blank" rel="noopener noreferrer">
        <button ref={btnRef} className="absolute bottom-3 right-3 z-20 bg-[#a855f7] hover:bg-[#b875ff] text-white px-6 py-2.5 rounded-[14px] font-normal text-sm whitespace-nowrap shadow-lg active:scale-95 transition-all">
          {btnVisit}
        </button>
      </Link>
    </div>
  );
}

export default function MyPortfolio() {
  const t = useTranslations("portfolio");
  const revealRef = useRevealAll();
  const rippleRef = useRipple();
  const spotlightRef = useSpotlight();
  const [visible, setVisible] = useState(6);
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const setRefs = useCallback((node: HTMLElement | null) => {
    if (node) {
      (revealRef as any).current = node;
      (rippleRef as any).current = node;
      (spotlightRef as any).current = node;
    }
  }, [revealRef, rippleRef, spotlightRef]);

  return (
    <>
      {selectedIndex !== null && (
        // En MyPorfolio.tsx, cuando abres el modal
        <PortfolioModal
          portfolio={{
            ...PORTFOLIO_STATIC[selectedIndex],
            cat: t(`items.${selectedIndex}.cat`),
            title: t(`items.${selectedIndex}.title`),
            modalDesc: t(`items.${selectedIndex}.modalDesc`)
          }}
          onClose={() => setSelectedIndex(null)}
        />
      )}

      <section id="portfolio" ref={setRefs} className="relative py-24 bg-[#050515] overflow-hidden">
        <div className="absolute -top-24 -right-24 w-[400px] h-[400px] opacity-20 pointer-events-none" style={{ background: "radial-gradient(circle, #581c87, transparent 70%)" }} />

        <div className="max-w-[1200px] mx-auto px-6">
          <div className="flex items-end justify-between mb-12">
            <div className="space-y-3">
              <span className="text-purple-400 text-xs font-bold uppercase tracking-widest bg-purple-500/10 px-3 py-1 rounded-full">
                {t("label")}
              </span>
              <h2 className="text-4xl font-black text-white leading-tight">
                {t("title")} <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500">
                  {t("title_highlight")}
                </span>
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {PORTFOLIO_STATIC.slice(0, visible).map((c, i) => (<NotchCard
              key={i}
              c={c}
              i={i}
              cat={t(`items.${i}.cat`)}
              title={t(`items.${i}.title`)}
              btnInfo={t("view_info")}
              btnVisit={t("modal.visit")}
              onInfo={() => setSelectedIndex(i)}
            />
            ))}
          </div>

          {visible < PORTFOLIO_STATIC.length && (
            <div className="text-center mt-12">
              <button
                onClick={() => setVisible(prev => prev + 6)}
                className="inline-flex text-sm font-bold text-purple-400 border border-purple-500/20 px-6 py-3 rounded-xl hover:bg-purple-500/5 transition-all"
              >
                {t("explore")}
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}