import { SERVICES, SITE } from "./data";

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "GeneralContractor",
    "@id": `${SITE.url}/#organization`,
    name: SITE.legalName,
    alternateName: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}/images/header-logo.webp`,
    image: `${SITE.url}/images/hero-1.webp`,
    description: SITE.description,
    telephone: SITE.phones.map((p) => `+44${p.replace(/\s/g, "").replace(/^0/, "")}`),
    email: SITE.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: SITE.address.street,
      addressLocality: SITE.address.city,
      postalCode: SITE.address.postcode,
      addressCountry: SITE.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: 53.8083,
      longitude: -1.789,
    },
    areaServed: [
      { "@type": "City", name: "Bradford" },
      { "@type": "AdministrativeArea", name: "West Yorkshire" },
    ],
    priceRange: "££",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "08:00",
      closes: "18:00",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Construction Services",
      itemListElement: SERVICES.map((service, index) => ({
        "@type": "Offer",
        position: index + 1,
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
          provider: { "@id": `${SITE.url}/#organization` },
          areaServed: "Bradford, West Yorkshire",
        },
      })),
    },
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
    publisher: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-GB",
  };
}

export function getWebPageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${SITE.url}/#webpage`,
    url: SITE.url,
    name: `${SITE.name} | Premium Builders Bradford & West Yorkshire`,
    description: SITE.description,
    isPartOf: { "@id": `${SITE.url}/#website` },
    about: { "@id": `${SITE.url}/#organization` },
    inLanguage: "en-GB",
  };
}

export function getAllSchemas() {
  return [getLocalBusinessSchema(), getWebSiteSchema(), getWebPageSchema()];
}
