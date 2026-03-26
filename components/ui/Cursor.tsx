"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const cursorRef  = useRef<HTMLDivElement>(null);
  const ringRef    = useRef<HTMLDivElement>(null);
  const trailRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX  = 0, ringY  = 0;
    let trailX = 0, trailY = 0;
    let rafId: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (cursorRef.current) {
        cursorRef.current.style.left = mouseX + "px";
        cursorRef.current.style.top  = mouseY + "px";
      }
    };

    const animate = () => {
      ringX  += (mouseX - ringX)  * 0.12;
      ringY  += (mouseY - ringY)  * 0.12;
      trailX += (mouseX - trailX) * 0.06;
      trailY += (mouseY - trailY) * 0.06;

      if (ringRef.current) {
        ringRef.current.style.left = ringX  + "px";
        ringRef.current.style.top  = ringY  + "px";
      }
      if (trailRef.current) {
        trailRef.current.style.left = trailX + "px";
        trailRef.current.style.top  = trailY + "px";
      }
      rafId = requestAnimationFrame(animate);
    };

    const addHover   = () => document.body.classList.add("hovering");
    const removeHover= () => document.body.classList.remove("hovering");
    const addClick   = () => document.body.classList.add("clicking");
    const removeClick= () => document.body.classList.remove("clicking");

    const HOVER_SEL =
      "a,button,.card,.course-card,.price-card,.blog-card,.cat-card,.step-card,.why-point,.faq-q,.trust-logo,.social-btn,.enroll-btn,.cat-btn";

    document.querySelectorAll<HTMLElement>(HOVER_SEL).forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    // MutationObserver for dynamically added elements
    const mo = new MutationObserver(() => {
      document.querySelectorAll<HTMLElement>(HOVER_SEL).forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
        el.addEventListener("mouseenter", addHover);
        el.addEventListener("mouseleave", removeHover);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });

    window.addEventListener("mousemove", onMove);
    window.addEventListener("mousedown", addClick);
    window.addEventListener("mouseup",   removeClick);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", addClick);
      window.removeEventListener("mouseup",   removeClick);
      cancelAnimationFrame(rafId);
      mo.disconnect();
    };
  }, []);

  return (
    <>
      <div id="cursor"       ref={cursorRef}  />
      <div id="cursor-ring"  ref={ringRef}    />
      <div id="cursor-trail" ref={trailRef}   />
    </>
  );
}
