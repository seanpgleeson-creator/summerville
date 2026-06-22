"use client";

import { useReveal } from "./hooks/useReveal";

const HIGHLIGHTS: { place: string; detail: string }[] = [
  { place: "Cottagewood Store", detail: "5 min walk" },
  { place: "Sandy Beach", detail: "5 min walk" },
  { place: "Rocky Beach", detail: "7–10 min walk" },
  { place: "Downtown Excelsior", detail: "10–15 min bike ride" },
];

export default function LocationHighlights() {
  const eyebrowRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section id="location" className="bg-[#efe6d4]">
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,54px)] py-[clamp(64px,11vh,130px)]">
        <div
          ref={eyebrowRef}
          className="opacity-0 translate-y-[26px] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
        >
          <div className="flex items-center gap-4 mb-[26px]">
            <span className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.32em] text-[12.5px] font-bold text-[#9c3b2e]">
              The Setting
            </span>
            <span className="flex-1 h-px bg-[rgba(44,42,35,0.15)]" />
          </div>
          <h2 className="font-[family-name:var(--font-fraunces)] font-normal text-[clamp(28px,4vw,50px)] leading-[1.12] tracking-[-0.01em] mt-2 mb-[6px]">
            Cottagewood.
          </h2>
          <p className="text-[#5e584c] max-w-[56ch] m-0 mb-[44px]">
            Steps from the lake and the legendary Cottagewood Store — the
            kind of neighborhood where slow mornings with coffee and easy
            evenings outdoors are simply part of the routine.
          </p>
        </div>

        <div
          ref={listRef}
          className="opacity-0 translate-y-[26px] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
        >
          <ul className="list-none m-0 p-0">
            {HIGHLIGHTS.map(({ place, detail }, i) => (
              <li
                key={i}
                className="relative flex items-center justify-between pl-[22px] py-[11px] text-[16px] text-[#5e584c] border-b border-[rgba(44,42,35,0.12)] first:border-t first:border-t-[rgba(44,42,35,0.12)] before:content-[''] before:absolute before:left-[2px] before:top-1/2 before:-translate-y-1/2 before:w-[7px] before:h-[7px] before:rounded-full before:bg-[#9c3b2e]"
              >
                <span>{place}</span>
                <span className="font-[family-name:var(--font-dm-sans)] text-[12px] font-bold tracking-[0.1em] text-[#b98f44] ml-6 shrink-0">
                  {detail}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
