"use client";

import { useEffect, useState } from "react";
import { content } from "@/lib/content";
import { Icon } from "@/lib/icons";

const { brand, nav } = content;

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  // Close the mobile menu on Escape and when widening to desktop.
  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth >= 900) setMenuOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <header
      className="fixed inset-x-0 top-0 z-40 h-[68px] border-b border-white/10 bg-ink"
    >
      <div className="container-site flex h-[68px] items-center justify-between gap-4">
        <a
          className="flex shrink-0 items-center gap-[11px] no-underline"
          href="#hero"
          aria-label={`${brand.name} — home`}
        >
          <span
            className="grid h-[38px] w-[38px] shrink-0 place-items-center rounded-[7px] bg-safety text-white"
            aria-hidden="true"
          >
            <Icon name="wrench" className="h-[22px] w-[22px]" />
          </span>
          <span className="flex flex-col leading-none">
            <strong className="font-display text-[21px] font-bold tracking-[.04em] text-white">
              {brand.wordmark}
            </strong>
            <small className="mt-[3px] text-[10px] font-semibold tracking-[.22em] text-safety">
              {brand.wordmarkTail}
            </small>
          </span>
        </a>

        {/* Desktop navigation */}
        <nav
          className="hidden gap-[30px] min-[900px]:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative py-1.5 text-[15.5px] font-medium text-white/80 no-underline after:absolute after:bottom-0 after:left-0 after:hidden after:h-0.5 after:w-full after:bg-safety hover:text-white hover:after:block"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <a
          className="btn btn-primary hidden min-h-[42px] px-5 py-2.5 min-[900px]:inline-flex"
          href="#contact"
        >
          Request an Estimate
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          className="flex h-[46px] w-[46px] flex-col items-stretch justify-center gap-[5px] rounded-[7px] border border-white/10 bg-transparent px-[11px] min-[900px]:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setMenuOpen((v) => !v)}
        >
          <span
            aria-hidden="true"
            className="block h-0.5 w-full rounded-sm bg-white"
          />
          <span
            aria-hidden="true"
            className={`block h-0.5 w-full rounded-sm bg-white ${
              menuOpen ? "hidden" : ""
            }`}
          />
          <span
            aria-hidden="true"
            className="block h-0.5 w-full rounded-sm bg-white"
          />
        </button>
      </div>

      {/* Mobile menu */}
      <nav
        id="mobile-menu"
        aria-label="Mobile"
        hidden={!menuOpen}
        className="absolute inset-x-0 top-[68px] border-b border-white/10 bg-ink-2 px-5 pb-5 pt-2.5 min-[900px]:hidden"
      >
        {nav.map((item, index) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => setMenuOpen(false)}
            className={`block px-1.5 py-3.5 text-[17px] font-medium text-white/90 no-underline ${
              index < nav.length - 1 ? "border-b border-white/10" : ""
            }`}
          >
            {item.label}
          </a>
        ))}
        <a
          className="btn btn-primary mt-3.5 w-full"
          href="#contact"
          onClick={() => setMenuOpen(false)}
        >
          Request an Estimate
        </a>
      </nav>
    </header>
  );
}
