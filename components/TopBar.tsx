"use client";

import { useEffect, useState } from "react";

export default function TopBar({ topOffset = 0 }: { topOffset?: number }) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60 + topOffset);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, [topOffset]);

  return (
    <header
      style={{ top: topOffset }}
      className={[
        "fixed left-0 right-0 z-60 flex items-center justify-between transition-all duration-400",
        "px-[clamp(20px,5vw,54px)]",
        scrolled
          ? "bg-[rgba(245,239,227,0.92)] backdrop-blur-[10px] shadow-[0_1px_0_rgba(44,42,35,0.15)] py-[13px]"
          : "py-[18px]",
      ].join(" ")}
    >
      <a
        href="#top"
        className={[
          "flex items-center gap-[11px] font-[family-name:var(--font-fraunces)] text-[18px] tracking-[0.04em] no-underline transition-colors duration-400",
          scrolled ? "text-[#2c2a23]" : "text-[#fbf6ec]",
        ].join(" ")}
      >
        <span className="w-[26px] h-[26px] flex-none border-[1.5px] border-current rounded-full grid place-items-center text-[12px] tracking-normal">
          S
        </span>
        Summerville Road
      </a>

      <a
        href="#contact"
        className={[
          "hidden sm:block font-[family-name:var(--font-dm-sans)] text-[13px] font-bold tracking-[0.08em] uppercase no-underline px-[18px] py-[9px] rounded-full border-[1.5px] border-current transition-all duration-300",
          "hover:bg-[#9c3b2e] hover:text-[#fbf6ec] hover:border-[#9c3b2e]",
          scrolled ? "text-[#2c4332]" : "text-[#fbf6ec]",
        ].join(" ")}
      >
        Inquire
      </a>
    </header>
  );
}
