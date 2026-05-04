import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { BackgroundMotion } from "@/components/layout/background-motion";
import { CursorSystem } from "@/components/layout/cursor-system";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { PageTransition } from "@/components/layout/page-transition";
import { Preloader } from "@/components/layout/preloader";
import { SmoothScroll } from "@/components/layout/smooth-scroll";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL("https://aurentra.com"),
  title: {
    default: "Aurentra Technologies | AI Automation & Digital Solutions",
    template: "%s | Aurentra Technologies",
  },
  description: "Aurentra Technologies builds AI automation, websites, mobile apps, and digital transformation systems for growing businesses.",
  keywords: ["AI automation", "website development", "mobile app development", "digital transformation", "Aurentra Technologies"],
  openGraph: {
    title: "Aurentra Technologies",
    description: "Transforming Businesses with AI & Digital Solutions.",
    url: "https://aurentra.com",
    siteName: "Aurentra Technologies",
    images: [{ url: "/images/aurentra-logo.jpeg", width: 1200, height: 630 }],
    type: "website",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`}>
        <BackgroundMotion />
        <Preloader />
        <CursorSystem />
        <SmoothScroll />
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}
