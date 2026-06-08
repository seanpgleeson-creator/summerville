"use client";

import { useEffect, useState } from "react";

export default function FloatingContact() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setVisible(window.scrollY > window.innerHeight * 0.7);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <a
      href="#contact"
      className={[
        "fixed right-[clamp(16px,4vw,34px)] bottom-[clamp(16px,4vw,30px)] z-[55]",
        "inline-flex items-center gap-[10px]",
        "bg-[#9c3b2e] text-[#fbf6ec] no-underline font-bold text-[15px] tracking-[0.02em]",
        "px-[22px] py-[13px] rounded-full",
        "shadow-[0_14px_34px_-10px_rgba(120,40,30,0.7)]",
        "transition-[transform,background] duration-[450ms] cubic-bezier(.2,.8,.2,1)",
        "hover:bg-[#2c4332]",
        visible ? "translate-y-0" : "translate-y-[140%]",
      ].join(" ")}
    >
      ☎&nbsp; Inquire
    </a>
  );
}
