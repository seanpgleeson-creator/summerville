import type { Metadata } from "next";
import { Fraunces, DM_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { PostHogProvider } from "./PostHogProvider";
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
    "Cottagewood, Lake Minnetonka — a charming, meticulously maintained home steps from the General Store and sandy beaches. Shared privately with friends & neighbors.",
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
      <body>
        <PostHogProvider>
          {children}
          <Analytics />
        </PostHogProvider>
      </body>
    </html>
  );
}
