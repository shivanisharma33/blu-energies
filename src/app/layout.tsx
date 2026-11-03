import type { Metadata } from "next";
import { Outfit, Inter, Fraunces } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "A West Africa Deepwater Oil & Gas Explorer",
  description: "Pioneering offshore energy exploration and deepwater subsea operations across West Africa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${outfit.variable} ${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans bg-[#9eb4d4] text-white selection:bg-white/30 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
