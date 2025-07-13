import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
});

import localFont from 'next/font/local';

const clashDisplay = localFont({
  src: '../../public/fonts/clash-display/ClashDisplay-Semibold.woff2',
  variable: '--font-clash',
});

export const metadata: Metadata = {
  title: "Kallora.com | Authentic Experiences",
  icons: {
    icon: '/favicon.ico',
  },
  description: "Authentic experiences rooted in beauty, culture, and soul.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${clashDisplay.variable}`}>
      <body className="font-body bg-bg text-text">{children}</body>
    </html>
  );
}
