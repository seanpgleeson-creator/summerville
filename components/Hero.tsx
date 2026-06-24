import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-svh flex items-end isolate"
    >
      <Image
        src="/hero.jpg"
        alt="Summerville Road — the house in fall"
        fill
        priority
        className="object-cover object-[center_38%] -z-20"
        sizes="100vw"
      />

      {/* gradient overlay */}
      <div
        className="absolute inset-0 -z-10"
        style={{
          background:
            "linear-gradient(to top, rgba(28,30,24,0.78) 0%, rgba(28,30,24,0.28) 38%, rgba(28,30,24,0.12) 60%, rgba(28,30,24,0.30) 100%)",
        }}
      />

      <div className="w-full max-w-[1180px] mx-auto px-[clamp(20px,5vw,54px)] pb-[clamp(48px,8vh,96px)] text-[#fbf6ec]">
        <p className="font-[family-name:var(--font-dm-sans)] uppercase tracking-[0.32em] text-[12.5px] font-bold text-[#ecc98f]">
          Cottagewood &middot; Lake Minnetonka
        </p>
        <h1
          className="font-[family-name:var(--font-fraunces)] font-normal text-[clamp(44px,8vw,104px)] leading-[0.98] tracking-[-0.01em] mt-4 mb-[18px] max-w-[14ch]"
          style={{ textShadow: "0 2px 30px rgba(0,0,0,0.35)" }}
        >
          Summerville Road.
        </h1>
        <p
          className="text-[clamp(18px,2.2vw,23px)] max-w-[50ch] text-[#f2ecdf] leading-[1.55]"
          style={{ textShadow: "0 1px 16px rgba(0,0,0,0.35)" }}
        >
          Cottagewood — one of Lake Minnetonka&rsquo;s most beloved
          neighborhoods. Move in and enjoy it exactly as it is, or make it
          entirely your own.
        </p>

        <div className="flex flex-wrap gap-x-[26px] gap-y-[10px] mt-[30px] text-[14px] tracking-[0.06em] uppercase text-[#e9e1d0]">
          <span className="flex items-center gap-[9px]">
            <span className="w-[5px] h-[5px] rounded-full bg-[#ecc98f]" />
            Cottagewood
          </span>
          <span className="flex items-center gap-[9px]">
            <span className="w-[5px] h-[5px] rounded-full bg-[#ecc98f]" />
            20475 Summerville Road
          </span>
          <span className="flex items-center gap-[9px]">
            <span className="w-[5px] h-[5px] rounded-full bg-[#ecc98f]" />
            2 Bed / 1 Bath
          </span>
          <span className="flex items-center gap-[9px]">
            <span className="w-[5px] h-[5px] rounded-full bg-[#ecc98f]" />
            Off-market
          </span>
        </div>
      </div>

      <div className="absolute bottom-[22px] left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[#f2ecdf] text-[11px] tracking-[0.3em] uppercase opacity-80 animate-[bob_2.4s_ease-in-out_infinite]">
        Scroll
        <span className="w-px h-[34px] bg-gradient-to-b from-[#f2ecdf] to-transparent" />
      </div>

      <style>{`
        @keyframes bob {
          0%, 100% { transform: translateX(-50%) translateY(0); }
          50%       { transform: translateX(-50%) translateY(7px); }
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-\\[bob_2\\.4s_ease-in-out_infinite\\] { animation: none; }
        }
      `}</style>
    </section>
  );
}
