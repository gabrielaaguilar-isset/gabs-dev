"use client";
import { useEffect, useRef } from "react";

/** Adds ripple effect on click to all .ripple-btn elements inside the container */
export function useRipple() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handler = (e: MouseEvent) => {
      const btn = (e.target as HTMLElement).closest<HTMLElement>(".ripple-btn");
      if (!btn || !container.contains(btn)) return;
      const rect    = btn.getBoundingClientRect();
      const span    = document.createElement("span");
      span.className = "ripple";
      span.style.left = e.clientX - rect.left + "px";
      span.style.top  = e.clientY - rect.top  + "px";
      btn.appendChild(span);
      setTimeout(() => span.remove(), 600);
    };

    container.addEventListener("click", handler as EventListener);
    return () => container.removeEventListener("click", handler as EventListener);
  }, []);

  return ref;
}

/** Magnetic hover for a single button */
export function useMagnetic<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      const dx   = (e.clientX - (rect.left + rect.width  / 2)) * 0.2;
      const dy   = (e.clientY - (rect.top  + rect.height / 2)) * 0.2;
      el.style.transform = `translate(${dx}px,${dy}px) translateY(-2px)`;
    };
    const onLeave = () => { el.style.transform = ""; };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", onLeave);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", onLeave);
    };
  }, []);

  return ref;
}
