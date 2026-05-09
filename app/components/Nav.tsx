"use client";
import { useState, useEffect, useCallback } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 767) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  const close = useCallback(() => setOpen(false), []);

  const links = [
    { href: "#about", label: "about" },
    { href: "#projects", label: "projects" },
    { href: "#skills", label: "skills" },
    { href: "#log", label: "log" },
    { href: "#contact", label: "contact" },
  ];

  return (
    <>
      <nav
        id="nav"
        style={{
          borderBottomColor: scrolled
            ? "rgba(255,255,255,0.1)"
            : "rgba(255,255,255,0.07)",
        }}
      >
        <a className="logo" href="#">
          <b>~/</b>nitish_kumar_m
        </a>

        <ul className="navlinks" role="list">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href}>{l.label}</a>
            </li>
          ))}
        </ul>

        <a className="nav-hire" href="mailto:nitishkumar078@gmail.com">
          hire_me()
        </a>

        <button
          className={`nav-burger${open ? "open" : ""}`}
          id="burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      <div
        className={`mobile-menu${open ? "open" : ""}`}
        id="mobileMenu"
        role="navigation"
        aria-label="Mobile navigation"
      >
        {links.map((l) => (
          <a key={l.href} href={l.href} onClick={close}>
            {l.label}
          </a>
        ))}
        <a
          href="mailto:nitishkumar078@gmail.com"
          className="mob-hire"
          onClick={close}
        >
          hire_me()
        </a>
      </div>
    </>
  );
}
