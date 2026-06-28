import { SERVICES, SITE } from "./data";

const orgId = `${SITE.url}/#organization`;

function ukPhones() {
  return SITE.phones.map((p) => `+44${p.replace(/\s/g, "").replace(/^0/, "")}`);
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["GeneralContractor", "HomeAndConstructionBusiness", "LocalBusiness"],
    "@id": orgId,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/header-logo.webp`,
    image: [`${SITE.url}/og-image.jpg`, `${SITE.url}/images/hero-1.webp`],
    description: SITE.description,
    slogan: SITE.tagline,
    telephone: ukPhones(),
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      addressRegion: SITE.address.region,
      postalCode: SITE.address.postcode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: SITE.geo.latitude,
      longitude: SITE.geo.longitude,
    },
    areaServed: SITE.serviceAreas.map((area) => ({
      "@type": "AdministrativeArea",
      name: area,
    })),
    priceRange: "££",
    currenciesAccepted: "GBP",
    paymentAccepted: "Cash, Credit Card, Bank Transfer",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    knowsAbout: [
      "House extensions",
      "Loft conversions",
      "Property renovations",
      "Commercial construction",
      "ECO grants UK",
      "Brickwork and masonry",
      "Roofing services",
      "Kitchen and bathroom renovations",
      "New build construction",
      "Structural repairs",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services UK",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": orgId },
          areaServed: SITE.serviceAreas.join(", "),
          availableChannel: {
            "@type": "ServiceChannel",
            serviceUrl: `${SITE.url}/#contact`,
            servicePhone: ukPhones()[0],
          },
        },
      })),
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: ukPhones()[0],
        contactType: "customer service",
        email: SITE.email,
        areaServed: "GB",
        availableLanguage: ["English", "en-GB"],
      },
      {
        "@type": "ContactPoint",
        telephone: ukPhones()[1],
        contactType: "sales",
        areaServed: "GB",
        availableLanguage: ["English", "en-GB"],
      },
    ],
    sameAs: [SITE.url],
  };
}

export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE.url}/#website`,
    url: SITE.url,
    name: SITE.name,
    description: SITE.description,
    publisher: { "@id": orgId },
    inLanguage: "en-GB",
    copyrightYear: new Date().getFullYear(),
    copyrightHolder: { "@id": orgId },
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: `${SITE.name} | Builders Bradford, Leeds & West Yorkshire UK`,
    description: SITE.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": orgId },
    primaryImageOfPage: {
      "@type": "ImageObject",
      url: `${SITE.url}/og-image.jpg`,
      width: 1200,
      height: 630,
    },
    inLanguage: "en-GB",
    speakable: {
      "@type": "SpeakableSpecification",
      cssSelector: ["h1", "#about h2", "#services h2", "#contact h2"],
    },
  };
}

export function getContactPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${SITE.url}/#contact`,
    url: `${SITE.url}/#contact`,
    name: `Contact ${SITE.name}`,
    description: `Contact ${SITE.name} for free construction quotes in Bradford, Leeds and West Yorkshire, UK.`,
    isPartOf: { "@id": `${SITE.url}/#website` },
    mainEntity: { "@id": orgId },
    inLanguage: "en-GB",
  };
}

export function getBreadcrumbSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: SITE.url,
      },
    ],
  };
}

export function getAllSchemas() {
  return [
    getLocalBusinessSchema(),
    getWebSiteSchema(),
    getWebPageSchema(),
    getContactPageSchema(),
    getBreadcrumbSchema(),
  ];
}
