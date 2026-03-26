"use client";
import { useEffect, useRef } from "react";

/** Adds --mx / --my CSS vars on mousemove to all .spotlight-card inside the container */
export function useSpotlight() {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const container = ref.current;
    if (!container) return;

    const handler = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest<HTMLElement>(".spotlight-card");
      if (!card || !container.contains(card)) return;
      const rect = card.getBoundingClientRect();
      const x    = ((e.clientX - rect.left) / rect.width)  * 100;
      const y    = ((e.clientY - rect.top)  / rect.height) * 100;
      card.style.setProperty("--mx", `${x}%`);
      card.style.setProperty("--my", `${y}%`);
    };

    container.addEventListener("mousemove", handler as EventListener);
    return () => container.removeEventListener("mousemove", handler as EventListener);
  }, []);

  return ref;
}
