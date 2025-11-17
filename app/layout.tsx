import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-futuristic" });

export const metadata: Metadata = {
  title: "driule | Developer & Creator",
  description: "Game developer, blockchain enthusiast, web dev, and creator of innovative projects. Founder of Codyfight.",
  keywords: ["developer", "game development", "blockchain", "web development", "Codyfight"],
  authors: [{ name: "driule" }],
  openGraph: {
    title: "driule | Developer & Creator",
    description: "Game developer, blockchain enthusiast, web dev, and creator of innovative projects.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    creator: "@driule_io",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-body antialiased`}>
        {children}
      </body>
    </html>
  );
}

