import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SITE } from "@/lib/data";
import { getAllSchemas } from "@/lib/schema";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
  weight: ["500", "600", "700"],
  preload: true,
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
  preload: true,
});

export const viewport: Viewport = {
  themeColor: "#4a1a22",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: `${SITE.name} | Premium Builders Bradford & West Yorkshire`,
    template: `%s | ${SITE.name}`,
  },
  description: SITE.description,
  keywords: [
    "construction Bradford",
    "builders West Yorkshire",
    "house extensions Bradford",
    "loft conversions Bradford",
    "AL Mughal Constructions",
    "commercial construction Yorkshire",
    "property renovation Bradford",
    "ECO grants Bradford",
    "brickwork Bradford",
    "kitchen renovation Yorkshire",
  ],
  authors: [{ name: SITE.legalName }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE.url,
  },
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: SITE.url,
    siteName: SITE.name,
    title: `${SITE.name} | Premium Builders Bradford & West Yorkshire`,
    description: SITE.description,
    images: [
      {
        url: "/images/hero-1.webp",
        width: 1200,
        height: 630,
        alt: `${SITE.name} — construction services in Bradford`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} | Premium Builders Bradford`,
    description: SITE.description,
    images: ["/images/hero-1.webp"],
  },
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
  category: "construction",
  manifest: "/manifest.json",
  other: {
    "ai-content-declaration": "human-authored-business-content",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schemas = getAllSchemas();

  return (
    <html lang="en-GB">
      <head>
        <link rel="preload" href="/images/hero-1.webp" as="image" type="image/webp" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&display=swap"
          rel="stylesheet"
        />
        {schemas.map((schema, i) => (
          <script
            key={i}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        ))}
      </head>
      <body
        className={`${montserrat.variable} ${inter.variable} min-h-screen antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
