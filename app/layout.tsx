import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  axes: ["opsz"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Summerville Road — A Home in Cottagewood",
  description:
    "A charming, meticulously maintained home in the heart of Cottagewood. Move in and enjoy it as-is, or make it your own. Shared privately with friends & neighbors.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${dmSans.variable}`}
    >
      {/* Synchronously marks <html> with .js so reveal animations only hide
          content when scripting is confirmed running. Without this, corporate
          SSL proxies or script blockers leave all sections permanently invisible. */}
      <head>
        <script dangerouslySetInnerHTML={{ __html: 'document.documentElement.classList.add("js")' }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
