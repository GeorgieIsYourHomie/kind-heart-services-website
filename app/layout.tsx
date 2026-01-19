import type React from "react";
import type { Metadata } from "next";
import { Lora, Work_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";
import { ThemeProvider } from "next-themes";

const fontSerif = Lora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
});
const fontSans = Work_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Kind Heart Services | Personalized Assisted Living in Minnesota",
  description:
    "Compassionate, family-run assisted living in a cozy Minnesota home. We provide personalized care, daily assistance, and a warm community environment.",
  icons: {
    icon: [
      {
        url: "/favicon-1.svg",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${fontSerif.variable} ${fontSans.variable} antialiased`}
      >
        {children}
        <Analytics />
      </body>
    </html>
  );
}
