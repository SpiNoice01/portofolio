import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { PortfolioProvider } from "@/context/PortfolioContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "John Doe - Full Stack Developer & UI/UX Designer",
  description: "Passionate Full Stack Developer & UI/UX Designer with 5+ years of experience creating beautiful, functional web experiences. Specializing in React, Next.js, and modern web technologies.",
  keywords: "Full Stack Developer, UI/UX Designer, React, Next.js, TypeScript, Web Development, Portfolio",
  authors: [{ name: "John Doe" }],
  creator: "John Doe",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://johndoe-portfolio.com",
    title: "John Doe - Full Stack Developer & UI/UX Designer",
    description: "Passionate Full Stack Developer & UI/UX Designer with 5+ years of experience creating beautiful, functional web experiences.",
    siteName: "John Doe Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "John Doe - Full Stack Developer & UI/UX Designer",
    description: "Passionate Full Stack Developer & UI/UX Designer with 5+ years of experience creating beautiful, functional web experiences.",
    creator: "@johndoe",
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <PortfolioProvider>
          {children}
        </PortfolioProvider>
      </body>
    </html>
  );
}
