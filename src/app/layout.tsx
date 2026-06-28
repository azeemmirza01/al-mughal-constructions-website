import type { Metadata, Viewport } from "next";
import { Inter, Montserrat } from "next/font/google";
import { SITE } from "@/lib/data";
import { SEO } from "@/lib/seo";
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
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#4a1a22" },
    { media: "(prefers-color-scheme: dark)", color: "#4a1a22" },
  ],
  width: "device-width",
  initialScale: 1,
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: SEO.title,
    template: `%s | ${SITE.name}`,
  },
  description: SEO.description,
  keywords: [...SEO.keywords],
  applicationName: SITE.name,
  authors: [{ name: SITE.legalName, url: SITE.url }],
  creator: SITE.legalName,
  publisher: SITE.legalName,
  category: "Construction",
  classification: "Construction & Building Services",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  alternates: {
    canonical: SITE.url,
    languages: {
      "en-GB": SITE.url,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/icon-192.png", sizes: "192x192", type: "image/png" },
      { url: "/icons/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: ["/favicon.ico"],
  },
  manifest: "/manifest.json",
  openGraph: {
    type: "website",
    locale: SEO.locale,
    url: SITE.url,
    siteName: SITE.name,
    title: SEO.ogTitle,
    description: SEO.description,
    countryName: "United Kingdom",
    images: [SEO.ogImage],
  },
  twitter: {
    card: "summary_large_image",
    title: SEO.ogTitle,
    description: SEO.description,
    images: [SEO.ogImage.url],
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
  other: {
    "geo.region": "GB-WY",
    "geo.placename": "Bradford, West Yorkshire",
    "geo.position": SITE.geo.icbm,
    ICBM: SITE.geo.icbm,
    "content-language": "en-GB",
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
        <link rel="preload" href="/og-image.jpg" as="image" type="image/jpeg" />
        <link rel="author" href="/humans.txt" />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLMs" />
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
