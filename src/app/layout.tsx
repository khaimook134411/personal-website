"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { useEffect, useRef } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// export const metadata: Metadata = {
//   title: "It's me, Khaimook",
//   description: "Personal website and portfolio of Khaimook",
//   keywords: ["portfolio", "personal website", "developer"],
//   icons: {
//     icon: [
//       { url: "/favicon-light.png", media: "(prefers-color-scheme: light)" },
//       { url: "/favicon-dark.png", media: "(prefers-color-scheme: dark)" },
//     ],
//   },
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const auraRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!auraRef.current || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      auraRef.current.style.transform = `translate(${x - 220}px, ${y - 220}px)`;
    };

    const container = containerRef.current;
    container?.addEventListener("mousemove", handleMouseMove);

    return () => {
      container?.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <div
          ref={containerRef}
          className="relative overflow-hidden min-h-screen bg-black text-white"
        >
          <div
            ref={auraRef}
            className="pointer-events-none absolute z-10 h-[400px] w-[400px] rounded-full opacity-20"
            style={{
              background:
                "radial-gradient(var(--color-amber-200), transparent 70%)",
              mixBlendMode: "screen",
            }}
          />

          {children}
        </div>
        <audio autoPlay loop hidden>
          <source src="/hogwarts-sound.mp3" type="audio/mpeg"></source>
        </audio>
      </body>
    </html>
  );
}
