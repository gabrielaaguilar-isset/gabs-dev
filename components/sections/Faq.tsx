"use client";
import { useState } from "react";
import { FAQS } from "../lib/constants";
import { useRevealAll } from "../lib/useReveal";

export default function Faq() {
  const ref  = useRevealAll() as React.RefObject<HTMLElement>;
  const [open, setOpen] = useState<number>(0);

  return (
    <section id="faq" ref={ref} className="relative py-24 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">

          {/* Left */}
          <div className="reveal from-left space-y-6">
            <span className="section-label inline-flex">FAQ</span>
            <h2 className="font-black tracking-tight" style={{ fontSize: "clamp(1.8rem,3vw,2.6rem)" }}>
              Preguntas<br /><span className="gradient-text">Frecuentes</span>
            </h2>
            <p className="text-[.85rem] text-[#6b6b9a] leading-7">
              ¿Tienes dudas? Aquí respondemos las más comunes. Si necesitas más ayuda, estamos disponibles 24/7.
            </p>

            {/* Bot card */}
            <div className="flex items-center gap-4 p-5 rounded-2xl border transition-all duration-300 hover:border-purple-500/40 hover:bg-purple-500/10"
                 style={{ background: "rgba(124,58,237,.08)", borderColor: "rgba(124,58,237,.25)" }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 transition-transform duration-300 hover:rotate-[-8deg] hover:scale-110"
                   style={{ background: "linear-gradient(135deg,#7c3aed,#9333ea)" }}>💬</div>
              <div>
                <h4 className="text-[.85rem] font-bold text-white mb-0.5">¿Aún tienes preguntas?</h4>
                <p className="text-[.75rem] text-[#6b6b9a]">Nuestro equipo está disponible para ayudarte</p>
              </div>
            </div>
          </div>

          {/* Right: accordion */}
          <div className="reveal from-right rounded-3xl p-7 space-y-3"
               style={{ background: "linear-gradient(135deg,rgba(124,58,237,.12),rgba(13,13,26,.6))", border: "1px solid rgba(124,58,237,.25)" }}>
            {FAQS.map((faq, i) => (
              <div key={i}
                className={`rounded-2xl overflow-hidden border transition-colors duration-300 ${open === i ? "border-purple-700/50" : "border-purple-900/20"}`}
              >
                <button
                  className="w-full text-left px-5 py-4 flex items-center justify-between gap-4 text-[.875rem] font-medium text-white transition-colors duration-200 hover:bg-purple-700/8"
                  style={{ fontFamily: "Lexend, sans-serif", background: "transparent", border: "none" }}
                  onClick={() => setOpen(open === i ? -1 : i)}
                >
                  <span>{faq.q}</span>
                  <svg
                    className="w-5 h-5 text-purple-400 flex-shrink-0 transition-transform duration-[350ms]"
                    style={{ transform: open === i ? "rotate(45deg)" : "rotate(0deg)" }}
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                  </svg>
                </button>
                <div
                  className="overflow-hidden transition-all duration-[400ms]"
                  style={{ maxHeight: open === i ? "200px" : "0px" }}
                >
                  <p className="px-5 pb-5 text-[.82rem] text-[#6b6b9a] leading-7">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
