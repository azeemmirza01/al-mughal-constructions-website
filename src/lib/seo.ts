import { UK_SEO_KEYWORDS, SITE } from "./data";

export const SEO = {
  title: `${SITE.name} | Builders Bradford, Leeds & West Yorkshire UK`,
  ogTitle: `${SITE.name} | Construction Company Bradford & West Yorkshire`,
  description: SITE.description,
  keywords: [...UK_SEO_KEYWORDS],
  locale: "en_GB",
  ogImage: {
    url: "/og-image.jpg",
    width: 1200,
    height: 630,
    alt: `${SITE.name} — trusted construction company in Bradford, Leeds & West Yorkshire, UK`,
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
} ;
