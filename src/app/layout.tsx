import { NavBar } from "@/components/NavBar";
import { Footer } from '@/components/Footer';
import { Main } from "@/components/Main";
import type { Metadata } from "next";
import { PT_Serif, Bree_Serif, Oswald } from "next/font/google";
import Script from "next/script";
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
  title: "SpeakingPass - IELTS Speaking Question / Topics Bank",
  description: "Ace the IELTS Speaking test! Access a complete database of all current and historical questions for Part 1, 2 & 3, with Band 8+ sample answers and expert strategies.",
};

export default async function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8107883456107875"
          crossOrigin="anonymous"></script>
        {/* Google Analytics */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-SDFVJVC4EX"
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-SDFVJVC4EX');
          `,
          }}
        />

      </head>
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
