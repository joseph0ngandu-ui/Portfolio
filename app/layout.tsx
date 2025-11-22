import type { Metadata } from "next";
import { JetBrains_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Joseph Ngandu | DevOps Engineer & Full-Stack Developer",
  description: "DevOps-driven IT engineer specializing in cloud infrastructure, AI/ML integration, and full-stack development. Building production-grade systems that scale.",
  keywords: ["DevOps", "Cloud Infrastructure", "AWS", "Full-Stack Developer", "AI/ML", "Next.js", "Python", "FastAPI", "Zambia"],
  authors: [{ name: "Joseph Ngandu" }],
  creator: "Joseph Ngandu",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://josephngandu.com",
    title: "Joseph Ngandu | DevOps Engineer & Full-Stack Developer",
    description: "DevOps-driven IT engineer specializing in cloud infrastructure, AI/ML integration, and full-stack development.",
    siteName: "Joseph Ngandu Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joseph Ngandu | DevOps Engineer & Full-Stack Developer",
    description: "DevOps-driven IT engineer specializing in cloud infrastructure, AI/ML integration, and full-stack development.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetbrainsMono.variable} ${inter.variable} antialiased selection:bg-[#C3B091] selection:text-white`}
      >
        <Navbar />
        <main className="min-h-screen flex flex-col">
          {children}
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
