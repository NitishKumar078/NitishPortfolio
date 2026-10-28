"use client";
import { useEffect, useRef, useState } from "react";
import { profile } from "../data/portfolio";
import Icon from "./Icon";

const links = [
  { href: "#projects", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#logs", label: "Notes" },
  { href: profile.demos, label: "Demo Lab", external: true },
  { href: profile.extensions, label: "Extensions", external: true },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const root = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    const onPointer = (event: PointerEvent) => {
      if (event.target instanceof Node && !root.current?.contains(event.target))
        setOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 1000) setOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("pointerdown", onPointer);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("pointerdown", onPointer);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);
  return (
    <header
      className="site-header"
      ref={root}
      onBlur={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false);
      }}
    >
      <div className="nav-shell">
        <a className="wordmark" href="#hero" aria-label="Nitish Kumar home">
          nish<span>.</span>
          <small>design & code</small>
        </a>
        <nav className="desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a
              href={link.href}
              key={link.href}
              {...(link.external
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {link.label}
              {link.external && <Icon />}
            </a>
          ))}
        </nav>
        <a className="nav-contact" href="#contact">
          Let’s talk <Icon />
        </a>
        <button
          ref={toggle}
          className={`menu-toggle ${open ? "is-open" : ""}`}
          type="button"
          aria-label={open ? "Close navigation" : "Open navigation"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>
      <nav
        id="mobile-navigation"
        className="mobile-nav"
        aria-label="Mobile navigation"
        hidden={!open}
      >
        {links.map((link) => (
          <a
            href={link.href}
            key={link.href}
            onClick={() => setOpen(false)}
            {...(link.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            {link.label}
            <Icon />
          </a>
        ))}
        <a href="#contact" onClick={() => setOpen(false)}>
          Let’s talk <Icon />
        </a>
      </nav>
    </header>
  );
}
