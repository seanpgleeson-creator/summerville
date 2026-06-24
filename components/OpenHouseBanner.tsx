export default function OpenHouseBanner() {
  return (
    <div
      className="fixed top-0 left-0 right-0 z-[70] h-[38px] flex items-center justify-center bg-[#9c3b2e] px-4"
    >
      <p className="font-[family-name:var(--font-dm-sans)] text-[12px] font-bold tracking-[0.1em] uppercase text-[#fbf6ec] m-0 text-center">
        Open House&nbsp;&nbsp;·&nbsp;&nbsp;Saturday, June 27&nbsp;&nbsp;·&nbsp;&nbsp;11:00 AM – 12:00 PM
        <a
          href="#contact"
          className="ml-[16px] underline underline-offset-2 opacity-80 hover:opacity-100 transition-opacity"
        >
          Get in touch
        </a>
      </p>
    </div>
  );
}
