"use client";

import { useReveal } from "./hooks/useReveal";

export default function ContactSection() {
  const ref = useReveal<HTMLDivElement>();

  return (
    <section id="contact" className="text-center">
      <div className="max-w-[760px] mx-auto px-[clamp(20px,5vw,54px)] py-[clamp(64px,11vh,130px)] pb-[clamp(70px,12vh,150px)]">
        <div
          ref={ref}
          className="[.js_&]:opacity-0 [.js_&]:translate-y-[26px] transition-[opacity,transform] duration-[900ms] ease-[cubic-bezier(.2,.8,.2,1)] data-[visible=true]:opacity-100 data-[visible=true]:translate-y-0"
        >
          <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.32em] text-[12.5px] font-bold text-[#9c3b2e]">
            Let&apos;s Talk
          </p>
          <h2 className="font-[family-name:var(--font-fraunces)] font-normal text-[clamp(32px,5vw,62px)] leading-[1.06] mt-4 mb-[14px]">
            If it sounds like home,
            <br />
            reach out.
          </h2>
          <p className="text-[#5e584c] max-w-[46ch] mx-auto mb-10">
            Call or text anytime.
          </p>

          <div
            className="inline-flex flex-col items-center gap-1 bg-[#efe6d4] border border-[rgba(44,42,35,0.15)] rounded-[10px] px-[54px] py-[36px] w-full sm:w-auto"
            style={{ boxShadow: "0 18px 50px -24px rgba(44,42,35,0.45)" }}
          >
            <span className="font-[family-name:var(--font-fraunces)] font-normal text-[24px]">
              Sean Gleeson
            </span>
            <a
              href="tel:+19523936886"
              className="font-[family-name:var(--font-fraunces)] font-normal text-[clamp(28px,4vw,40px)] text-[#2c4332] no-underline tracking-[0.01em] mt-[6px] transition-colors hover:text-[#9c3b2e]"
            >
              952-393-6886
            </a>
            <a
              href="mailto:seanpgleeson@gmail.com?subject=20475%20Summerville%20Road"
              className="font-[family-name:var(--font-dm-sans)] text-[15px] text-[#5e584c] no-underline mt-[4px] transition-colors hover:text-[#9c3b2e]"
            >
              seanpgleeson@gmail.com
            </a>
            <span className="mt-4 font-[family-name:var(--font-dm-sans)] text-[12px] tracking-[0.16em] uppercase text-[#b98f44]">
              Summerville · Off-Market
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
