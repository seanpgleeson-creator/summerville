"use client";

import Image from "next/image";
import { useReveal } from "./hooks/useReveal";

const IMPROVEMENTS = [
  {
    title: "Paint & Lighting",
    year: "2022",
    items: ["Exterior paint", "All new outdoor light fixtures"],
  },
  {
    title: "Deck & Appliances",
    year: "2023",
    items: [
      "New deck and deck railing",
      "Gutter added under front of house / deck area",
      "Dishwasher added",
      "New washer and dryer",
    ],
  },
  {
    title: "Roof",
    year: "2025",
    items: ["New roof"],
  },
  {
    title: "Systems",
    year: "2026",
    items: ["Hot water heater replacement"],
  },
];

function ImprovementCard({
  title,
  year,
  items,
}: {
  title: string;
  year: string;
  items: string[];
}) {
  return (
    <div className="bg-[#f5efe3] border border-[rgba(44,42,35,0.15)] rounded-[6px] p-[28px_28px_30px]">
      <h3 className="font-[family-name:var(--font-fraunces)] font-normal text-[21px] m-0 mb-1 flex items-center gap-[11px]">
        {title}
        <span className="ml-auto font-[family-name:var(--font-dm-sans)] text-[12px] font-bold tracking-[0.1em] text-[#b98f44]">
          {year}
        </span>
      </h3>
      <ul className="list-none m-0 mt-4 p-0">
        {items.map((item, i) => (
          <li
            key={i}
            className="relative pl-[22px] py-[7px] text-[16px] text-[#5e584c] border-t border-[rgba(44,42,35,0.15)] first:border-t-0 before:content-[''] before:absolute before:left-[2px] before:top-[15px] before:w-[7px] before:h-[7px] before:rounded-full before:bg-[#9c3b2e]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Improvements() {
  const eyebrowRef = useReveal<HTMLDivElement>();
  const gridRef = useReveal<HTMLDivElement>();

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
            ref={gridRef}
            className="flex-1 grid grid-cols-[repeat(auto-fit,minmax(270px,1fr))] gap-[14px] opacity-0 translate-y-[26px] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
          >
            {IMPROVEMENTS.map((card) => (
              <ImprovementCard key={card.title} {...card} />
            ))}
          </div>

          <div className="relative w-full lg:w-[340px] lg:flex-shrink-0 min-h-[380px] rounded-[6px] overflow-hidden"
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
