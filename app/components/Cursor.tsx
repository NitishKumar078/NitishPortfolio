"use client";
import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(hover: none)").matches) return;
    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = 0,
      my = 0,
      rx = 0,
      ry = 0,
      rafId = 0;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.left = mx + "px";
      dot.style.top = my + "px";
    };
    document.addEventListener("mousemove", onMove);

    const loop = () => {
      rx += (mx - rx) * 0.13;
      ry += (my - ry) * 0.13;
      ring.style.left = rx + "px";
      ring.style.top = ry + "px";
      rafId = requestAnimationFrame(loop);
    };
    rafId = requestAnimationFrame(loop);

    const add = () => {
      dot.classList.add("on");
      ring.classList.add("on");
    };
    const remove = () => {
      dot.classList.remove("on");
      ring.classList.remove("on");
    };
    const sel =
      "a, button, .pcard, .acard, .stat-block, .citem, .stack-pill, .log-entry, .log-filter, .log-read, .gl-filter, .gl-dot, .gl-card, .gl-drawer-close, .gl-drawer-link";
    const els = document.querySelectorAll<HTMLElement>(sel);
    els.forEach((el) => {
      el.addEventListener("mouseenter", add);
      el.addEventListener("mouseleave", remove);
    });

    return () => {
      document.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div id="dot" ref={dotRef} aria-hidden="true" />
      <div id="ring" ref={ringRef} aria-hidden="true" />
    </>
  );
}
