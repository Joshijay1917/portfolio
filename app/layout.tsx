import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'Jay Joshi | Full Stack Developer & MERN Expert',
  description: 'Portfolio of Jay Joshi, a Full Stack Developer in Rajkot specializing in MERN Stack, Next.js, and AI Agents. 2nd Year Computer Science student at VVP Engineering College.',
  keywords: ['Jay Joshi', 'Full Stack Developer Rajkot', 'MERN Stack Developer', 'VVP Engineering College', 'Next.js Developer Gujarat'],
  openGraph: {
    title: 'Jay Joshi | Full Stack Developer',
    description: 'Building modern, privacy-first web applications and AI agents.',
    images: ['/og-image.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Jay Joshi",
              "jobTitle": "Full Stack Developer",
              "url": "https://portfolio-jay-tau.vercel.app",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Rajkot",
                "addressRegion": "Gujarat",
                "addressCountry": "India"
              },
              "alumniOf": "VVP Engineering College",
              "knowsAbout": ["MERN Stack", "Next.js", "TypeScript", "AI Agents", "Python", "React"]
            })
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <Toaster position="bottom-right" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
