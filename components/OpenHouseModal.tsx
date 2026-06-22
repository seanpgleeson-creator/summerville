"use client";

import { useEffect, useState } from "react";

const DISMISS_KEY = "open-house-2026-06-27-dismissed";

export default function OpenHouseModal() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!localStorage.getItem(DISMISS_KEY)) {
      const t = setTimeout(() => setOpen(true), 600);
      return () => clearTimeout(t);
    }
  }, []);

  function close() {
    localStorage.setItem(DISMISS_KEY, "1");
    setOpen(false);
  }

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && close();
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center p-[clamp(16px,5vw,48px)]"
      style={{ background: "rgba(28,30,24,0.72)", backdropFilter: "blur(4px)" }}
      onClick={close}
      role="dialog"
      aria-modal="true"
      aria-label="Open house announcement"
    >
      <div
        className="relative bg-[#fbf6ec] rounded-[8px] max-w-[480px] w-full px-[clamp(28px,6vw,52px)] py-[clamp(36px,6vh,56px)]"
        style={{ boxShadow: "0 18px 50px -24px rgba(44,42,35,0.45)" }}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={close}
          aria-label="Close"
          className="absolute top-[18px] right-[22px] text-[#5e584c] text-[28px] font-[family-name:var(--font-fraunces)] leading-none bg-transparent border-0 cursor-pointer opacity-60 hover:opacity-100 transition-opacity"
        >
          ×
        </button>

        <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.32em] text-[11.5px] font-bold text-[#9c3b2e] m-0 mb-[18px]">
          Friends &amp; Neighbors
        </p>

        <h2 className="font-[family-name:var(--font-fraunces)] font-normal text-[clamp(32px,5vw,48px)] leading-[1.05] tracking-[-0.01em] text-[#2c2a23] m-0 mb-[10px]">
          Open House
        </h2>

        <p className="font-[family-name:var(--font-dm-sans)] text-[15px] font-bold tracking-[0.06em] uppercase text-[#b98f44] m-0 mb-[20px]">
          Saturday, June 27th &nbsp;·&nbsp; 11:00 AM – 12:00 PM
        </p>

        <p className="text-[#5e584c] text-[16px] leading-[1.6] m-0 mb-[32px]">
          We&rsquo;re opening the doors for an informal morning visit —
          just for friends and neighbors. Come take a look around,{" "}
          no pressure, no crowds. 20475 Summerville Road.
        </p>

        <a
          href="#contact"
          onClick={close}
          className="inline-flex items-center gap-[10px] bg-[#9c3b2e] text-[#fbf6ec] no-underline font-bold text-[15px] tracking-[0.02em] px-[24px] py-[13px] rounded-full transition-colors duration-[300ms] hover:bg-[#2c4332]"
          style={{ boxShadow: "0 14px 34px -10px rgba(120,40,30,0.45)" }}
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
