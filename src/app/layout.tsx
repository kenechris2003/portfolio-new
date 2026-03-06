import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
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
  title: "Kenechukwu Chris Chisom | Full-Stack Developer",
  description: "Full-Stack Developer and Computer Science undergraduate at University of Ibadan. Experienced in React, TypeScript, Node.js, and building scalable web applications.",
  keywords: ["Full-Stack Developer", "React", "TypeScript", "Node.js", "Web Developer", "Nigeria"],
  authors: [{ name: "Kenechukwu Chris Chisom" }],
  openGraph: {
    title: "Kenechukwu Chris Chisom | Full-Stack Developer",
    description: "Full-Stack Developer and Computer Science undergraduate at University of Ibadan.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
