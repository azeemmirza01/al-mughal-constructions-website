export const SITE = {
  name: "AL Mughal Constructions",
  legalName: "AL-MUGHAL CONSTRUCTIONS LTD",
  tagline: "Domestic & Commercial Property Experts",
  url: "https://www.almughalconstructions.co.uk",
  email: "sales@almughalconstructions.co.uk",
  phones: ["07379 484100", "07775 934100"],
  address: {
    street: "162 Lilycroft Road",
    city: "Bradford",
    postcode: "BD9 5AE",
    country: "GB",
    full: "162 Lilycroft Road, Bradford, BD9 5AE",
  },
  description:
    "AL Mughal Constructions — trusted builders in Bradford & West Yorkshire. House extensions, loft conversions, renovations, commercial construction & ECO grants. Fully insured, free quotes.",
} as const;

export const NAV_LINKS = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#contact", label: "Contact" },
] as const;

export const HERO_SLIDES = [
  {
    image: "/images/hero-1.webp",
    alt: "AL Mughal Constructions — premium building project in Bradford",
    title: "Trusted Construction Company in",
    highlight: "Bradford & West Yorkshire",
    subtitle:
      "High-quality construction, renovation, and building services delivered with expert craftsmanship and reliability.",
  },
  {
    image: "/images/hero-2.webp",
    alt: "Residential and commercial construction by AL Mughal Constructions",
    title: "Domestic & Commercial",
    highlight: "Property Experts",
    subtitle:
      "From house extensions to commercial builds — we transform spaces with precision and care.",
  },
  {
    image: "/images/house-construction.webp",
    alt: "UK house under construction with scaffolding and red brickwork",
    title: "Expert Craftsmanship",
    highlight: "Built to Last",
    subtitle:
      "Traditional Yorkshire building techniques combined with modern architectural standards.",
  },
  {
    image: "/images/commercial.webp",
    alt: "Commercial building under construction in West Yorkshire",
    title: "Commercial & Residential",
    highlight: "Construction Solutions",
    subtitle:
      "Modern retail, office developments and bespoke residential properties across Yorkshire.",
  },
  {
    image: "/images/house-extension.webp",
    alt: "Brick house extension in progress in Bradford",
    title: "Extensions & Renovations",
    highlight: "Tailored to You",
    subtitle:
      "Seamless extensions and full-scale renovations that enhance your property's value.",
  },
  {
    image: "/images/loft-conversion.webp",
    alt: "Loft conversion in progress showing exposed wooden roof structure",
    title: "Loft Conversions",
    highlight: "Unlock Hidden Space",
    subtitle:
      "Expert structural attic transformations to maximise your home's potential.",
  },
] as const;

export const SERVICES = [
  {
    id: "new-house-construction",
    title: "New House Construction",
    description:
      "Complete design-and-build services for bespoke UK residential properties.",
    image: "/images/house-construction.webp",
    icon: "domain",
  },
  {
    id: "house-extensions",
    title: "House Extensions",
    description:
      "Expand your living space with seamless, high-quality masonry extensions.",
    image: "/images/house-extension.webp",
    icon: "add_business",
  },
  {
    id: "loft-conversions",
    title: "Loft Conversions",
    description:
      "Unlock hidden potential in your home with expert structural attic transformations.",
    image: "/images/loft-conversion.webp",
    icon: "roofing",
  },
  {
    id: "property-renovations",
    title: "Property Renovations",
    description:
      "Full-scale interior and exterior restoration for heritage and modern homes.",
    image: "/images/property-renovation.webp",
    icon: "architecture",
  },
  {
    id: "bathroom-renovations",
    title: "Bathroom Renovations",
    description:
      "Luxurious bathroom fit-outs with precision plumbing and tiling.",
    image: "/images/bathroom-renovation.webp",
    icon: "bathtub",
  },
  {
    id: "kitchen-renovations",
    title: "Kitchen Renovations",
    description: "Modern, high-spec kitchen designs tailored to your lifestyle.",
    image: "/images/kitchen-renovation.webp",
    icon: "countertops",
  },
  {
    id: "roofing-services",
    title: "Roofing Services",
    description:
      "Specialist roof repairs and installations using traditional materials.",
    image: "/images/roofing.webp",
    icon: "construction",
  },
  {
    id: "brickwork-masonry",
    title: "Brickwork & Masonry",
    description:
      "Expert structural masonry and decorative brickwork for lasting strength.",
    image: "/images/brickwork.webp",
    icon: "layers",
  },
  {
    id: "driveways-paving",
    title: "Driveways & Paving",
    description: "Durable and aesthetic driveway solutions for curb appeal.",
    image: "/images/driveway.webp",
    icon: "map",
  },
  {
    id: "landscaping-gardens",
    title: "Landscaping & Gardens",
    description: "Professional garden design and exterior construction.",
    image: "/images/landscaping.webp",
    icon: "yard",
  },
  {
    id: "commercial-construction",
    title: "Commercial Construction",
    description: "Modern retail and office development for Bradford businesses.",
    image: "/images/commercial.webp",
    icon: "apartment",
  },
  {
    id: "structural-repairs",
    title: "Structural Repairs",
    description:
      "Technical stabilization and repair of existing building foundations.",
    image: "/images/structural-repairs.webp",
    icon: "precision_manufacturing",
  },
] as const;

export const WHY_CHOOSE_US = [
  {
    icon: "history_edu",
    title: "Heritage Experience",
    description:
      "Experts in working with traditional Yorkshire stone and historical architecture.",
  },
  {
    icon: "payments",
    title: "Transparent Pricing",
    description: "Fixed-price quotes with no hidden surprises or sudden costs.",
  },
  {
    icon: "calendar_month",
    title: "Strict Timelines",
    description:
      "Projects completed on schedule through efficient project management.",
  },
  {
    icon: "workspace_premium",
    title: "Guaranteed Quality",
    description:
      "All workmanship backed by comprehensive structural guarantees.",
  },
  {
    icon: "handshake",
    title: "Local Reputation",
    description:
      "Hundreds of satisfied homeowners across the Bradford district.",
  },
  {
    icon: "health_and_safety",
    title: "H&S Compliant",
    description:
      "Full adherence to modern health and safety site regulations.",
  },
] as const;

export const ABOUT_FEATURES = [
  {
    icon: "verified_user",
    title: "Fully Insured",
    description: "Complete peace of mind with public liability insurance.",
  },
  {
    icon: "location_on",
    title: "Local Experts",
    description: "Deep understanding of Bradford & Yorkshire planning regs.",
  },
  {
    icon: "engineering",
    title: "Master Craftsmen",
    description: "Highly skilled tradesmen with years of experience.",
  },
  {
    icon: "handyman",
    title: "Quality Materials",
    description: "Sourcing premium materials for lasting durability.",
  },
] as const;
