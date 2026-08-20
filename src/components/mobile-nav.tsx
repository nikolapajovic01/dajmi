"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS, PHONE } from "@/lib/site-config";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const burgerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (open) {
      closeRef.current?.focus();
    } else {
      burgerRef.current?.focus();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") setOpen(false);
    }
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <>
      <button
        ref={burgerRef}
        type="button"
        aria-label="Otvori meni"
        aria-expanded={open}
        aria-controls="glavni-meni"
        onClick={() => setOpen(true)}
        className="flex size-[46px] flex-none flex-col items-center justify-center gap-1.5 border border-white/35 min-[821px]:hidden"
      >
        <span className="block h-px w-5 bg-white" />
        <span className="block h-px w-5 bg-white" />
        <span className="block h-px w-5 bg-white" />
      </button>

      <div
        id="glavni-meni"
        data-open={open}
        className="fixed inset-0 z-20 hidden flex-col bg-navy p-[22px] data-[open=true]:flex"
      >
        <div className="flex items-center justify-between">
          <span className="font-display text-xl font-bold tracking-[0.3em] text-white">
            DAJMI
          </span>
          <button
            ref={closeRef}
            type="button"
            aria-label="Zatvori meni"
            onClick={() => setOpen(false)}
            className="flex size-[46px] items-center justify-center border border-white/35 font-display text-2xl leading-none text-white"
          >
            &times;
          </button>
        </div>

        <nav
          aria-label="Mobilna navigacija"
          className="mt-9 flex flex-col"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="border-b border-white/10 py-[18px] font-display text-xl font-medium text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <a
          href={PHONE.href}
          className="mt-auto bg-navy-accent p-[18px] text-center font-display text-base font-semibold tracking-[0.03em] text-white"
        >
          {PHONE.display}
        </a>
      </div>
    </>
  );
}
