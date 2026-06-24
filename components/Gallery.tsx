"use client";

import { useState, useCallback } from "react";
import Image from "next/image";
import { useReveal } from "./hooks/useReveal";

const PHOTOS: { id: string; label: string; src: string }[] = [
  { id: "g-fall", label: "Front — Fall", src: "/house-fall.png" },
];

function GallerySlot({
  label,
  src,
  onOpen,
}: {
  label: string;
  src: string;
  onOpen: () => void;
}) {
  return (
    <div
      className="relative w-full h-full min-h-[340px] bg-[#ddd8cc] cursor-zoom-in overflow-hidden group"
      style={{ boxShadow: "0 18px 50px -24px rgba(44,42,35,0.45)" }}
      onClick={onOpen}
    >
      <Image
        src={src}
        alt={label}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        sizes="100vw"
      />
      <span
        className="absolute left-[14px] bottom-[12px] z-10 text-[11px] tracking-[0.18em] uppercase text-[#fbf6ec] bg-[rgba(40,50,40,0.55)] backdrop-blur-[3px] px-[11px] py-[5px] rounded-full pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity"
      >
        {label}
      </span>
    </div>
  );
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState<string | null>(null);
  const ref = useReveal<HTMLDivElement>();

  const close = useCallback(() => setLightbox(null), []);

  return (
    <section className="relative">
      <div
        ref={ref}
        className="max-w-[1180px] mx-auto px-[clamp(20px,5vw,54px)] py-[clamp(64px,11vh,130px)] [.js_&]:opacity-0 [.js_&]:translate-y-[26px] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
      >
        <div className="flex items-end justify-between gap-6 flex-wrap mb-[38px]">
          <div>
            <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.32em] text-[12.5px] font-bold text-[#9c3b2e]">
              A Look Around
            </p>
            <h2 className="font-[family-name:var(--font-fraunces)] font-normal text-[clamp(28px,4vw,48px)] mt-[10px] mb-0">
              The Home.
            </h2>
          </div>
          <div className="max-w-[44ch]">
            <p className="text-[#5e584c] m-0 mb-[10px]">
              An open, sun-filled layout with sliding glass doors that extend
              the living space onto a large front deck. Mature trees frame the
              view from the living area and front porch, giving the home a
              genuine sense of privacy and seclusion. Fenced back yard.
              Click any photo to view it full size.
            </p>
            <p className="text-[13px] font-[family-name:var(--font-dm-sans)] tracking-[0.04em] text-[#7a6c55] m-0 border-l-[3px] border-[#b98f44] pl-[10px]">
              Currently 2 bed / 1 bath — contractor estimates in hand to
              remodel the lower level into an additional bedroom and bath,
              bringing it to 3 bed / 2 bath.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {PHOTOS.map((photo) => (
            <GallerySlot
              key={photo.id}
              label={photo.label}
              src={photo.src}
              onOpen={() => setLightbox(photo.src)}
            />
          ))}
        </div>
      </div>

      {lightbox && (
        <div
          className="fixed inset-0 z-[200] bg-[rgba(24,26,20,0.92)] flex items-center justify-center p-[4vh_4vw] cursor-zoom-out"
          onClick={close}
          onKeyDown={(e) => e.key === "Escape" && close()}
          tabIndex={0}
          role="dialog"
          aria-modal="true"
          aria-label="Photo lightbox"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[92vh] rounded-[4px] shadow-[0_30px_80px_rgba(0,0,0,0.5)]"
          />
          <button
            className="absolute top-[22px] right-[28px] text-[#fbf6ec] text-[34px] font-[family-name:var(--font-fraunces)] opacity-80 hover:opacity-100 bg-transparent border-0 cursor-pointer"
            onClick={close}
            aria-label="Close lightbox"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}
