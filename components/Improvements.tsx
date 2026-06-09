"use client";

import Image from "next/image";
import { useReveal } from "./hooks/useReveal";

const IMPROVEMENTS: { item: string; year: string }[] = [
  { item: "Exterior paint", year: "2022" },
  { item: "All new outdoor light fixtures", year: "2022" },
  { item: "New deck and deck railing", year: "2023" },
  { item: "Gutter added under front of house / deck area", year: "2023" },
  { item: "Dishwasher added", year: "2023" },
  { item: "New washer and dryer", year: "2023" },
  { item: "Electric service upgraded", year: "2023" },
  { item: "EV charger added", year: "2023" },
  { item: "New roof", year: "2025" },
  { item: "Hot water heater replacement", year: "2026" },
];

export default function Improvements() {
  const eyebrowRef = useReveal<HTMLDivElement>();
  const listRef = useReveal<HTMLDivElement>();

  return (
    <section>
      <div className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,54px)] py-[clamp(64px,11vh,130px)]">
        <div
          ref={eyebrowRef}
          className="opacity-0 translate-y-[26px] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
        >
          <div className="flex items-center gap-4 mb-[26px]">
            <span className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.32em] text-[12.5px] font-bold text-[#9c3b2e]">
              Cared For
            </span>
            <span className="flex-1 h-px bg-[rgba(44,42,35,0.15)]" />
          </div>
          <h2 className="font-[family-name:var(--font-fraunces)] font-normal text-[clamp(28px,4vw,50px)] leading-[1.12] tracking-[-0.01em] mt-2 mb-[6px]">
            Improvements.
          </h2>
          <p className="text-[#5e584c] max-w-[56ch] m-0 mb-[44px]">
            A few of the updates we&apos;ve made since buying the home.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-[32px] items-start">
          <div
            ref={listRef}
            className="flex-1 opacity-0 translate-y-[26px] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
          >
            <ul className="list-none m-0 p-0">
              {IMPROVEMENTS.map(({ item, year }, i) => (
                <li
                  key={i}
                  className="relative flex items-center justify-between pl-[22px] py-[11px] text-[16px] text-[#5e584c] border-b border-[rgba(44,42,35,0.12)] first:border-t first:border-t-[rgba(44,42,35,0.12)] before:content-[''] before:absolute before:left-[2px] before:top-1/2 before:-translate-y-1/2 before:w-[7px] before:h-[7px] before:rounded-full before:bg-[#9c3b2e]"
                >
                  <span>{item}</span>
                  <span className="font-[family-name:var(--font-dm-sans)] text-[12px] font-bold tracking-[0.1em] text-[#b98f44] ml-6 shrink-0">
                    {year}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          <div
            className="relative w-full lg:w-[340px] lg:flex-shrink-0 min-h-[380px] rounded-[6px] overflow-hidden"
            style={{ boxShadow: "0 18px 50px -24px rgba(44,42,35,0.45)" }}
          >
            <Image
              src="/house-winter.png"
              alt="Front of house — winter"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 340px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
