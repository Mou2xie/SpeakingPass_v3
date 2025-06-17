import { NavBar } from "@/components/NavBar";
import { Footer } from '@/components/Footer';
import { Main } from "@/components/Main";
import type { Metadata } from "next";
import { PT_Serif, Bree_Serif, Oswald } from "next/font/google";
import "./globals.css";

const ptSerif = PT_Serif({
  variable: "--font-ptSerif",
  weight: ["400", "700"],
  subsets: ["latin"],
});

const breeSerif = Bree_Serif({
  variable: "--font-breeSerif",
  weight: "400",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "SpeakingPass - IELTS Speaking Question Bank",
  description: "A comprehensive collection of recent and past IELTS Speaking topics and questions for Part 1, Part 2, and Part 3 — ideal for effective practice and exam preparation.",
};

export default async function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${breeSerif.variable} ${ptSerif.variable} ${oswald.variable} antialiased`}
      >
        <NavBar />
        <Main>
          {children}
        </Main>
        <Footer />
      </body>
    </html>
  );
}


