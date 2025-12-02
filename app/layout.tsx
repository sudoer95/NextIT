// Basic imports
import type { Metadata } from "next";
// Components imports
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
//Font imports
import { Geist, Geist_Mono } from "next/font/google";
//Style imports
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "NextIT KG",
  description: "NextIT KG - Next.js E-commerce for IT products",
};

export default function RootLayout({children,}: Readonly<{children: React.ReactNode;}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="container mx-auto min-h-screen">{children}</div>
        <br />
        <Footer />
      </body>
    </html>
  );
}
