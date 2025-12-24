import type { Metadata } from "next";
import { Anton, Manrope } from "next/font/google"; // 1. Import Fonts
import "./globals.css";
import SmoothScroll from "@/components/smooth-scroll";

const anton = Anton({
  variable: "--font-anton",
  subsets: ["latin"],
  weight: "400",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Cafe Noir | Authentic Brew",
  description: "Experience the finest roast in town.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${anton.variable} ${manrope.variable} antialiased`}
      >
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
