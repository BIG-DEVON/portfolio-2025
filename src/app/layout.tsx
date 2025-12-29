import type { Metadata } from "next";
import { Syne, Space_Grotesk } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import Cursor from "@/components/Cursor"; // IMPORT ADDED
import GrainOverlay from "@/components/GrainOverlay"; // IMPORT ADDED

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  variable: "--font-syne",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
});

export const metadata: Metadata = {
  title: "Creative Portfolio 2025",
  description: "A high-end graphics design portfolio.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${syne.variable} ${spaceGrotesk.variable} antialiased bg-black text-white cursor-none`}> 
        {/* Note: I added 'cursor-none' to the body class above to hide the default mouse! */}
        
        <Preloader />
        <Cursor />
        <GrainOverlay />
        
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}