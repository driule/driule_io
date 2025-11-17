import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-body" });
const orbitron = Orbitron({ subsets: ["latin"], variable: "--font-futuristic" });

export const metadata: Metadata = {
  metadataBase: new URL("https://driule.io"),
  title: {
    default: "driule | Developer & Creator",
    template: "%s | driule",
  },
  description: "Building dev stuff. Passionate about creating meaningful software and learning along the way.",
  keywords: [
    "developer",
    "game development",
    "blockchain",
    "web development",
    "Codyfight",
    "software engineer",
    "full stack developer",
    "AI tools",
    "ai-contextor",
    "driule",
    "programming",
    "fintech",
    "education technology",
    "engineering",
  ],
  authors: [{ name: "driule", url: "https://driule.io" }],
  creator: "driule",
  publisher: "driule",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  openGraph: {
    title: "driule | Developer & Creator",
    description: "Building dev stuff. Passionate about creating meaningful software and learning along the way.",
    url: "https://driule.io",
    siteName: "driule.io",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://driule.io/og-image.png",
        width: 1200,
        height: 630,
        alt: "driule - Developer & Creator",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "driule | Developer & Creator",
    description: "Building dev stuff. Passionate about creating meaningful software and learning along the way.",
    creator: "@driule_io",
    images: ["https://driule.io/og-image.png"],
  },
  alternates: {
    canonical: "https://driule.io",
  },
  category: "technology",
  classification: "Personal Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "driule",
    url: "https://driule.io",
    jobTitle: "Developer & Creator",
    description:
      "Building dev stuff. Passionate about creating meaningful software and learning along the way.",
    sameAs: [
      "https://github.com/driule",
      "https://x.com/driule_io",
    ],
    knowsAbout: [
      "Game Development",
      "Blockchain",
      "Web Development",
      "Developer Tools",
      "Software Engineering",
      "Fintech",
      "AI Tools",
    ],
    alumniOf: [
      {
        "@type": "Organization",
        name: "Codyfight",
      },
    ],
    founder: [
      {
        "@type": "Organization",
        name: "Codyfight",
        url: "https://x.com/codyfight",
      },
    ],
    worksFor: [
      {
        "@type": "Organization",
        name: "TAO Testing",
      },
    ],
  };

  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.variable} ${orbitron.variable} font-body antialiased`} suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}

