import type { Metadata } from "next";
import { Geist_Mono, Inter, Newsreader } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/lib/theme-provider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Vaibhav Mali | Portfolio",
  description:
    "Software Developer specialized in full-stack & frontend development.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${newsreader.variable} antialiased min-h-screen bg-[#fbfaf4] dark:bg-[#191919] transition-colors duration-300 relative`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* 1. BACKGROUND TEXTURE */}
          <div
            className="
              pointer-events-none
              fixed inset-0
              z-0
              bg-repeat
              opacity-[0.7]
              invert
              dark:invert-1
              contrast-125
              dark:opacity-[0.5]
            "
            style={{
              backgroundImage: "url('/images/textures/noise-light.png')",
              backgroundSize: "140px 140px",
            }}
          />

          <Navbar />

          {/* 3. PAGE CONTENT */}
          <div className="relative z-10 pt-20">{children}</div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
