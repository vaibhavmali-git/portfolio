import type { Metadata } from "next";
import localFont from "next/font/local";
import { Geist_Mono, Fraunces, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const uxum = localFont({
  src: [
    { path: "./fonts/uxumlight.otf", weight: "300", style: "normal" },
    { path: "./fonts/uxumregular.otf", weight: "400", style: "normal" },
    { path: "./fonts/uxumbold.otf", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  style: ["normal", "italic"],
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  title: "Vaibhav Mali | Portfolio",
  description: "Software Developer specialized in full-stack development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`
          ${uxum.variable} 
          ${newsreader.variable} 
          ${fraunces.variable} 
          ${geistMono.variable} 
          antialiased min-h-screen bg-[#fbfaf4] dark:bg-[#191919] transition-colors duration-300 relative
        `}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div
            className="pointer-events-none fixed inset-0 z-0 bg-repeat opacity-[0.7] invert dark:invert-1 contrast-125 dark:opacity-[0.5]"
            style={{
              backgroundImage: "url('/images/textures/noise-light.png')",
              backgroundSize: "160px 160px",
            }}
          />
          <Navbar />
          <div className="relative z-10 pt-20">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
